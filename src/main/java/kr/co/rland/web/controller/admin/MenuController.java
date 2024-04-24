package kr.co.rland.web.controller.admin;

import jakarta.servlet.http.HttpServletRequest;
import kr.co.rland.web.entity.Category;
import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;
import kr.co.rland.web.service.CategoryService;
import kr.co.rland.web.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Controller("adminMenuController")
@RequestMapping("admin/menu")
public class MenuController {
    @Autowired
    private MenuService service;

    @Autowired
    private CategoryService categoryService;

    @GetMapping("list")
    public String list(
        @RequestParam(name = "c", required = false) Long categoryId
            , @RequestParam(name = "q", required = false) String query
            , @RequestParam(name = "p", required = false, defaultValue = "1") Integer page
            , @RequestParam(name = "s", required = false) Integer size
            , @CookieValue(name = "menus", required = false) String menusCookies
            , Model model)
        {
            List<Category> categories = categoryService.getList();

            Long memberId = null;
            List<MenuView> list = new ArrayList<>();
            int count =0 ;

            if(categoryId != null && query != null){
                list = service.getList(memberId,page, categoryId, query);
                count = service.getCount(categoryId, query);
            }
            else if(categoryId != null){
                list = service.getList(memberId,page, categoryId);
                count = service.getCount(categoryId);
            }
            else if (query != null){
                list = service.getList(memberId,page, query);
                count = service.getCount(query);
            }
            else{
                list = service.getList(memberId,page);
                count = service.getCount();

            }


            model.addAttribute("list", list);
            model.addAttribute("categories", categories);
            model.addAttribute("count", count);

        return "admin/menu/list";
    }

    @GetMapping("reg")
    public String reg() {
        return "admin/menu/reg";
    }
    @PostMapping("reg")
    public String reg(
        Menu menu
        , @RequestParam(name="img-file") List<MultipartFile> imgFiles
        , HttpServletRequest request
        , Principal principal
        ) throws IOException {

        //menu에 파일 이름 담을 그릇 준비
        List<String> fileNames = new ArrayList<>();

        //하나씩 꺼내서 파일이름 추출, 서버에 저장
        for(MultipartFile imgFile : imgFiles)
        {
            if (imgFile != null && !imgFile.isEmpty()) {

                //이미지 저장할 경로 설정
                String path = "/image/menu";
                String realPath = request.getServletContext().getRealPath(path);
                File pathFile = new File(realPath);

                //해당 경로가 없다면 폴더 만들기
                if (!pathFile.exists())
                    pathFile.mkdirs();

                //파일 경로 + 파일 이름
                String fileName = imgFile.getOriginalFilename();
                File file = new File(realPath + File.separator + fileName);
                imgFile.transferTo(file);

                //DB에 저장할 파일 이름 추가
                fileNames.add(fileName);

                System.out.println("----------------------------------");
                System.out.printf("file : %s\n", fileName);

            }
        }

        menu.setRegMemberId(1023);
        menu.setCategoryId(1);
//        menu.setImg(imgFile.getOriginalFilename());
        int affected = service.reg(menu, fileNames);

        System.out.println("==============================================");
        System.out.printf("img : %s\n", imgFiles);
        System.out.printf("file : %s\n", fileNames.toString());
        System.out.printf("save : %d\n", affected);

        return "redirect:/admin/menu/list";
    }
    
}


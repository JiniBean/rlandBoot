package kr.co.rland.web.controller.api;

import kr.co.rland.web.config.security.WebUserDetails;
import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;
import kr.co.rland.web.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController("apiMenusController")
@RequestMapping("api/menus")
public class Menucontroller {

    @Autowired
    private MenuService service;

    @GetMapping()
    public List<MenuView> list(
            @RequestParam(name = "c", required = false) Long categoryId
            , @RequestParam(name = "q", required = false) String query
            , @RequestParam(name = "p", required = false, defaultValue = "1") Integer page
            ,@AuthenticationPrincipal WebUserDetails userDetails
    )
    {
        List<MenuView> list = new ArrayList<>();

        Long memberId = null;
        if(userDetails != null)
            memberId = userDetails.getId();

        if(categoryId != null && query != null){
            list = service.getList(memberId,page, categoryId, query);
        }
        else if(categoryId != null){
            list = service.getList(memberId, page, categoryId);
        }
        else if (query != null){
            list = service.getList(memberId, page, query);
        }
        else{
            list = service.getList(memberId,page);

        }

//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            throw new RuntimeException(e);
//        }

        return list;
    }
    @GetMapping("1")
    public Menu get(Long id){
        Menu menu = service.getById(id);
        return menu;
    }

    @PostMapping
    public Menu add(Menu menu){
        List<String> imgFiles = new ArrayList<>();
        service.reg(menu, imgFiles);

        return null;
    }

    @PutMapping
    public Menu edit(Menu menu) {
        service.update(menu);

        return null;
    }

    @DeleteMapping
    public String delete(Long id){
//        service.delete(id);

        return null;
    }
}

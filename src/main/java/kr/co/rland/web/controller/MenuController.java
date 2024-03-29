package kr.co.rland.web.controller;

import java.lang.reflect.Type;
import java.net.URLDecoder;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import kr.co.rland.web.entity.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import kr.co.rland.web.entity.Category;
import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;
import kr.co.rland.web.service.CategoryService;
import kr.co.rland.web.service.MenuService;

@Controller
@RequestMapping("menu")
public class MenuController {

    @Autowired
    private MenuService service;

    @Autowired
    private CategoryService categoryService;


    @GetMapping("/list")
    public String list(
            @RequestParam(name = "c", required = false) Long categoryId
            , @RequestParam(name = "q", required = false) String query
            , @RequestParam(name = "p", required = false, defaultValue = "1") Integer page
            , @RequestParam(name = "s", required = false) Integer size
            , @CookieValue(name = "menus", required = false) String menusCookies
            , Model model)
    {
        List<Category> categories = categoryService.getList();

        List<MenuView> list = new ArrayList<>();
        int count =0 ;

        if(categoryId != null && query != null){
            list = service.getList(page, categoryId, query);
            count = service.getCount(categoryId, query);
        }
        else if(categoryId != null){
            list = service.getList(page, categoryId);
            count = service.getCount(categoryId);
        }
        else if (query != null){
            list = service.getList(page, query);
            count = service.getCount(query);
        }
        else{
            list = service.getList(page);
            count = service.getCount();

        }



//      ----------------- 장바구니 쿠키 갖고 오기 --------------------
        int cartCount = 0;
        int cartTotal = 0;

        if (menusCookies != null){
            Type menuListType = new TypeToken<List<Menu>>(){}.getType();
//            String menuStr = URLDecoder.decode(menusCookies, StandardCharsets.UTF_8);
            String menuStr = URLDecoder.decode(menusCookies, Charset.forName("utf-8"));
//            List<Menu> cartList = new Gson().fromJson(menusCookies, List.class);
            List<Menu> cartList = new Gson().fromJson(menuStr, menuListType);


            cartCount = cartList.size();

            System.out.println("cartcount = " + cartCount);

            for(Menu m :cartList)
                cartTotal += m.getPrice();

        }


        model.addAttribute("list", list);
        model.addAttribute("categories", categories);
        model.addAttribute("count", count);
        model.addAttribute("cartCount", cartCount);
        model.addAttribute("cartTotal", cartTotal);

        return "menu/list";
    }

    @GetMapping("detail")
    public String detail(@RequestParam(value = "id") Long menuId, Model model) {

        Menu menu = service.getById(menuId);
        System.out.println(menu.toString());
        model.addAttribute("menu", menu);
        return "menu/detail";
    }

//    @GetMapping("reg")
//    public String reg() {
//        return "menu/reg";
//    }
//
//    @PostMapping("reg")
//    public String reg(Menu menu, Test test) {
//        service.reg(menu);
//        System.out.println("menu : "+ menu.toString());
//        System.out.println("test : "+ test.toString());
////        System.out.println(menu.toString());
//        return "redirect:/menu/list";
//    }

    @GetMapping("edit")
    public String edit(@RequestParam(value = "id") Long id, Model model) {
        Menu menu = service.getById(id);
        System.out.println("edit"+menu.toString());
        model.addAttribute("menu", menu);
        return "menu/edit";
    }

    @PostMapping("edit")
    public String edit(Menu menu) {
        service.update(menu);
        System.out.println(menu.toString());
        return "redirect:/menu/list";
    }

    @GetMapping("delete")
    public String delete(@RequestParam(value = "id") Long id){

        service.delete(id);

        return "redirect:/menu/list";
    }

}

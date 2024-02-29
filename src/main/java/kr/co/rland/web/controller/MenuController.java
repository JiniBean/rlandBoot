package kr.co.rland.web.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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

    @GetMapping("list")
    public String list(@RequestParam(name = "c", required = false) Long categoryID, Model model){
        List<MenuView> menus = service.getList(categoryID);
        
        List<Category> categories = categoryService.getList();
        
        model.addAttribute("menus", menus);
        model.addAttribute("categories", categories);
        
        return "menu/list";
    }


    @GetMapping("detail")
    public String detail(@RequestParam("id") String m, Model model){

        long id = Integer.parseInt(m);
        Menu menu = service.getMenu(id);
        model.addAttribute("menu", menu);

        return "menu/detail";
    }

    // public String reg(Menu menu){

    //     service.reg(menu);

    //     return Redirect:menu/list;

    // }
}

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

    @GetMapping("/list")
    public String list(
              @RequestParam(name = "c", required = false) Long categoryId
            , @RequestParam(name = "q", required = false) String query
            , @RequestParam(name = "p", required = false, defaultValue = "1") Integer page
            , @RequestParam(name = "s", required = false) Integer size
            , Model model)
    {
        System.out.println("recived categoryId = " + categoryId);
        System.out.println("recived page number = " + page);

        List<Category> categories = categoryService.getList();

        List<MenuView> list = new ArrayList<>();
        if(categoryId != null && query != null)
            list = service.getList(page, categoryId, query);
        else if(categoryId != null)
            list = service.getList(page, categoryId);
        else if (query != null)
            list = service.getList(page, query);
        else
            list = service.getList(page);

        model.addAttribute("list", list);
        model.addAttribute("categories", categories);

        return "menu/list";
    }

    @GetMapping("detail")
    public String detail(@RequestParam(value = "id") Long menuId, Model model) {

        MenuView menu = service.get(menuId);
        System.out.println(menu.toString());
        model.addAttribute("menu", menu);
        return "menu/detail";
    }

    @GetMapping("reg")
    public String reg() {
        return "menu/reg";
    }

    @PostMapping("reg")
    public String reg(Menu menu) {
        service.reg(menu);
        System.out.println(menu.toString());
        return "redirect:/menu/list";
    }

    @GetMapping("edit")
    public String edit(@RequestParam(value = "id") Long menuId, Model model) {
        MenuView menu = service.get(menuId);
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
}

package kr.co.rland.web.controller.admin;

import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.Test;
import kr.co.rland.web.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller("adminMenuController")
@RequestMapping("admin/menu")
public class MenuController {
    @Autowired
    private MenuService service;

    @GetMapping("list")
    public String list(){
        return "admin/menu/list";
    }

    @GetMapping("reg")
    public String reg() {
        return "admin/menu/reg";
    }
    @PostMapping("reg")
    public String reg(Menu menu, Test test) {
        service.reg(menu);
        System.out.println("menu : "+ menu.toString());
        System.out.println("test : "+ test.toString());
//        System.out.println(menu.toString());
        return "redirect:/menu/list";
    }
    
}


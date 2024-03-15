package kr.co.rland.web.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller("adminMenuController")
@RequestMapping("admin/menu")
public class MenuController {
    
    @GetMapping("list")
    public String list(){
        return "admin/menu/list";
    }
    
}

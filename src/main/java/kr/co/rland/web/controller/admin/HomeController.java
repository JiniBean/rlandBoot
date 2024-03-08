package kr.co.rland.web.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Controller("adminHomeController")
@RequestMapping("admin")
public class HomeController {
    
    @GetMapping("index")
    public String index(
        // HttpSession session
        HttpServletRequest request
        Long uid
        ){
        
        Cookie[] cookies = request.getCookies();
        if(session.getAttribute("uid")==null)
            return "redirect:/user/signin";
        // if(session.getAttribute("uid")==null)
        //     return "redirect:/user/signin";

        return "admin/index";
    }


}

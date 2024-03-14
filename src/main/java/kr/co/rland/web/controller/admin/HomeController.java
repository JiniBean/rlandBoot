package kr.co.rland.web.controller.admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;


@Controller("adminHomeController")
@RequestMapping("admin")
public class HomeController {
    
    @GetMapping("index")
    public String index(
        // HttpSession session
        HttpServletRequest request
        ,@CookieValue(required = false) Long uid
        ){
        
        System.out.println("쿠키 uid = "+ uid);
        // Cookie[] cookies = request.getCookies();
        // if(session.getAttribute("uid")==null)
        //     return "redirect:/user/signin";
        // if(uid == null)
        //     return "redirect:/user/signin";

        return "admin/index";
    }


}

package kr.co.rland.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import kr.co.rland.web.service.UserService;

@Controller
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService service;
    
    // @ResponseBody
    @GetMapping("signin")
    public String signin(){

        return "user/signin";
    }


    @GetMapping("signup")
    public String signup(){

        return "user/signup";
    }
    
//    @PostMapping("signin")
    public String signin(@RequestParam(value = "username", required = true) String userName
                        ,@RequestParam(value = "password", required = true) String password
                        ,Model model
                        ,HttpServletResponse response
                        // ,HttpSession session
                        
                        ){

        Map<String, String> map = new HashMap<>();
        map.put("userName", userName);
        map.put("password", password);

        List<Integer> list = new ArrayList<>();
        list.add(4);
        
        // boolean valid = service.validate(userName, password);

        // if(!valid)
        //     return "redirect:signin?error";
        Cookie uidCookie = new Cookie("uid", "1");
        uidCookie.setPath("/"); //세션은 지역적으로 쓰기 어려움
        // uidCookie.setMaxAge(0);
        // uidCookie.setSecure(true);
        // uidCookie.setHttpOnly(valid);

        Cookie usernameCookie = new Cookie("username", userName);
        usernameCookie.setPath("/");
        
        response.addCookie(uidCookie);
        response.addCookie(usernameCookie);
        // session.setAttribute("uid","1");
        // System.out.println(session.getAttribute("test"));
        
        return "redirect:/index";
    }

}

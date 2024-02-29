package kr.co.rland.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("user")
public class UserController {
    
    // @ResponseBody
    @GetMapping("signin")
    public String signin(){
        return "user/signin";
    }
}

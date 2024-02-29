package kr.co.rland.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/")
public class HomeController {
    
    // @ResponseBody
    @GetMapping("index")
    public String index(Model model){
        model.addAttribute("m", "hello");
        return "index";
    }
}

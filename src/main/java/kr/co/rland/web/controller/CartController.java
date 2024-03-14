package kr.co.rland.web.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.google.gson.Gson;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.service.MenuService;

@Controller
@RequestMapping("cart")
public class CartController {
    
    @Autowired
    private MenuService menuService;

    @GetMapping("list")
    public String list(
        @CookieValue(required = false) String menus
        ,Model model){
        
        
        // String menuStr = URLDecoder.decode(menus, Charset.forName("utf-8"));
        // System.out.println("--------------------------------------------------------------------------------------");
        // System.out.println("디코딩 = " + menuStr);

        // Menu menu = new Gson().fromJson(menuStr, Menu.class);
        // System.out.println("--------------------------------------------------------------------------------------");
        // System.out.println("메뉴객체 = " + menu);
        // System.out.println();

        if (menus != null){
            String menuStr = URLDecoder.decode(menus, Charset.forName("utf-8"));
            List<Menu> menuList = new Gson().fromJson(menuStr, List.class);
            model.addAttribute("menus", menuList);
        }


        return "cart/list";
    }

    @PostMapping("add-menu")
    public String addMenu(
        Long id
        ,@CookieValue(required = false) String menus
        ,HttpServletResponse response
    ) {
        List<Menu> menuList = new ArrayList<>();    

        if (menus != null){
            String menuStr = URLDecoder.decode(menus, Charset.forName("utf-8"));
            menuList = new Gson().fromJson(menuStr, List.class);
        }
            

        Menu menu = menuService.getById(id);
        menuList.add(menu);
        
        String menusStr = new Gson().toJson(menuList);
        System.out.println("--------------------------------------------------------------------------------------");
        System.out.println("Json = "+ menusStr);


        String menuEncoded = "";

        try {
            menuEncoded = URLEncoder.encode(menusStr, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        
        Cookie menuCookie = new Cookie("menus", menuEncoded);
        
        menuCookie.setPath("/");
        response.addCookie(menuCookie);
        return "redirect:/menu/list";
    }
    
}



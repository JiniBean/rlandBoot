package kr.co.rland.web.controller.api;

import kr.co.rland.web.config.security.WebUserDetails;
import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuLike;
import kr.co.rland.web.entity.MenuView;
import kr.co.rland.web.service.MenuLikeService;
import kr.co.rland.web.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("api/menu-likes")
public class MenuLikecontroller {

    @Autowired
    private MenuLikeService service;

    @PostMapping
    public MenuLike add( @RequestBody MenuLike menuLike){

        System.out.println("들어왓다잉");;
        System.out.println(menuLike);
        service.add(menuLike);
        return menuLike;
    }

    @DeleteMapping
    public String delete(@RequestBody MenuLike menuLike){

        System.out.println("딜리트 들어왔당");;
        service.cancel(menuLike);

        return null;
    }
}

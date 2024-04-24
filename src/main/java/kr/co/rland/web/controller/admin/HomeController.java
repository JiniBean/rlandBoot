package kr.co.rland.web.controller.admin;

import java.security.Principal;

import kr.co.rland.web.config.security.WebUserDetails;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
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
        // HttpServletRequest request
        @CookieValue(required = false) Long uid
        , Principal principal //principal은 username만 갖고 있음
        ,Authentication authentication
        ,@AuthenticationPrincipal WebUserDetails userDetails
        ){

        //CustomUserDetails 사용법 2 : @AuthenticationPrincipal 으로 WebUserDetails가 우리가 커스텀한 userDetails이라고 알려주기, 어노테이션 안해주면 유저 네임 말고는 다 null
        System.out.println(userDetails.getEmail());

        //CustomUserDetails 사용법 1 : principal은 username만 갖고 있rl 때문에 우리가 커스텀한 WebUserDetails으로 형변환해주기
//        WebUserDetails userDetails = (WebUserDetails)authentication.getPrincipal();


        //방법1
        SecurityContext context = SecurityContextHolder.getContext();
        Authentication auth = context.getAuthentication();
        // String username = auth.getName();
        // System.out.println("관리자 = "+username);
        
        //방법2
//        String username = principal.getName();
//        System.out.println("관리자 = "+username);



        // System.out.println("쿠키 uid = "+ uid);
        // Cookie[] cookies = request.getCookies();
        // if(session.getAttribute("uid")==null)
        //     return "redirect:/user/signin";
        // if(uid == null)
        //     return "redirect:/user/signin";

        return "admin/index";
    }


}

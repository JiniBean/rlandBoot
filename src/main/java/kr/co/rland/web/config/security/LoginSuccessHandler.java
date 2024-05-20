package kr.co.rland.web.config.security;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.ContentHandler;


@Component
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    private RedirectStrategy strategy = new DefaultRedirectStrategy(); //꼭 필요한 건 아니지만 url 인코딩 등 도움 받을 수 있음 도구임

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        String url ="/";

        WebUserDetails userDetails = (WebUserDetails) authentication.getPrincipal();

        System.out.println("=======================");
        System.out.println(userDetails.getAuthorities());
        System.out.println("=======================");
        if(userDetails.getAuthorities() ==null){
//            이거 둘다 안먹음
//            request.logout();
//            SecurityContextHolder.clearContext();

            HttpSession session = request.getSession(false); //false == 세션이 없을 때 새로운 새션 만드는 것을 막음
            if (session != null)
                session.invalidate();
            url = "/user/signup";
        }
        else if(userDetails.getAuthorities().equals("ROLE_ADMIN"))
            url = "/admin/index";
        strategy.sendRedirect(request, response, url);
    }
}

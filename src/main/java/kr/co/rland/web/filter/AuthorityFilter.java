package kr.co.rland.web.filter;

import java.io.IOException;

import org.springframework.stereotype.Component;

import jakarta.servlet.*;


// @Component
public class AuthorityFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        System.out.println("필터 출력");

        chain.doFilter(request, response);
    }
    
}

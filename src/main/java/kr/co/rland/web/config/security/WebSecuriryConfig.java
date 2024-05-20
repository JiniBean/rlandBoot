package kr.co.rland.web.config.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecuriryConfig {

    @Autowired
    private DataSource datasource;

    @Autowired
    private WebOAuth2UserDetailsService oAuth2UserDetailsService;

    @Autowired
    private LoginSuccessHandler loginSuccessHandler;

    // Bcrypt 암호화를 쓰겠다는 인코딩 설정
    @Bean
    public PasswordEncoder passwordEncoder(){
        PasswordEncoder encoder = new BCryptPasswordEncoder();
        return encoder;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf->csrf.disable())
            .authorizeHttpRequests((requests) -> requests
                .requestMatchers("/member/**").hasAnyRole("MEMBER", "ADMIN")
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().permitAll()
            )
            .formLogin((form) -> form
                .loginPage("/user/signin")
                 .successHandler(loginSuccessHandler)
                .permitAll()
            )
            // 사용자가 로그인하면 구글이 사용자 정보를 줌, 사용자 정보를 받기위한, 어떻게 쓸건지에 대한 설정

            .oauth2Login(config -> config
                    .userInfoEndpoint(userInfo->userInfo
                            .userService(oAuth2UserDetailsService))
                    .successHandler(loginSuccessHandler)
            )
//                .userService(new OAuth2UserService<OAuth2UserRequest, OAuth2User>() {
//                                @Override// 인터페이스라 implement 필요, 구글이 주는 사용자 정보가 여기에 담김
//                                public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
//                                    System.out.println("=======================");
//                                    Map<String, Object> s = userRequest.getAdditionalParameters();
//                                    System.out.println(s.toString());
//                                    System.out.println("=======================");
//                                    return null;
//                                }
//                            })))
            .logout((logout) -> logout
                .logoutUrl("/user/signout")
                .logoutSuccessUrl("/index")
                .permitAll());

        return http.build();
    }

    //      -> 결과 집합의 모양
    //         ┌────────────┬───────────┬─────────┐
    //         │  username  │  password │ enabled │
    //         ├────────────┼───────────┼─────────┤
    //         │   newlec   │    111    │    1    │


    // @Bean
    public UserDetailsService jdbcUserDetailsService(){
        String userSql = "select username, pwd password, 1 enabled from member where username = ?";
        //text block JDK15 이상에서 사용가능
        String authorSql = """
            select 
                m.username,
                mr.role_name authority
            from
                member m right join member_role mr
                on m.id = mr.member_id
            where username = ?
                    """;
                    
        JdbcUserDetailsManager manager = new JdbcUserDetailsManager(datasource);
        manager.setUsersByUsernameQuery(userSql);
        manager.setAuthoritiesByUsernameQuery(authorSql);

        return manager;
    }


    // 메모리상의 사용자 정보 제공자
    // @Bean
    public UserDetailsService userDetailsService() {
      UserDetails user1 =
                        User.builder()
                            .username("cho")
                            .password("{noop}cho")
                            .roles("MEMBER")
                            .build();
      UserDetails user2 =
                        User.builder()
                            .username("newlec")
                            .password("{noop}111")
                            .roles("MEMBER", "ADMIN")
                            .build();

      return new InMemoryUserDetailsManager(user1, user2);
   }

   // ========================================== 세션 저장 방식 ======================================================
   // 로그인 성공한 경우 -> SuccessHandler
   // 이때, 사이트에서 필요한 사용자의 정보를 Session에 저장하여 제공
//    class AuthSuccessHandler implements AuthenticationSuccessHandler{

//         @Override
//         public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
//                 Authentication authentication) throws IOException, ServletException {
//             HttpSession session = request.getSession();
//             String username = authentication.getName();
//             Member member = memberRepository.findByUsername(username);
//             session.setAttribute("email", member.getEmail());
//         }
        
//     }
    
}

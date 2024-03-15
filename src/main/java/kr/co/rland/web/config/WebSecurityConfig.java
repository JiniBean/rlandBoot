package kr.co.rland.web.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
public class WebSecurityConfig {

	@Bean
    public UserDetailsService userDetailsService() {
		UserDetails user1 =
			User.builder()
			.username("jini")
			.password("{noop}1004")
			.roles("MEMBER")
			.build();
			
		UserDetails user2 =
			User.builder()
			.username("admin")
			.password("{noop}0000") //암호화안함
			.roles("MEMBER","ADMIN")
			.build();

      return new InMemoryUserDetailsManager(user1, user2);
   }

   	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
		.authorizeHttpRequests((requests) -> requests
		.requestMatchers("/user/*").hasAnyRole("ADMIN", "USER")// 롤 가지고 있나
		// .requestMatchers("/admin/**").hasAnyRole("ADMIN")
		// .requestMatchers("/user/*").authenticated()// 인증해야돼 -> anyRequest() 기본값
		.anyRequest().permitAll()// 허락해줌
		)
		
		.formLogin((form) -> form
		.loginPage("/user/signin")
		.permitAll()
		)
		.csrf(csrf-> csrf.disable())// 인자가 하나만 잇으면 소괄호 생략가능
		.logout((logout) -> logout.logoutUrl("/user/logout").logoutSuccessUrl("/index").permitAll());
		
		return http.build();
	}

}
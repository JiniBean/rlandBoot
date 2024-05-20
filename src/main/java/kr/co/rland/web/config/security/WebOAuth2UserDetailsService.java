package kr.co.rland.web.config.security;

import kr.co.rland.web.entity.Member;
import kr.co.rland.web.entity.MemberRole;
import kr.co.rland.web.repository.MemberRepository;
import kr.co.rland.web.repository.MemberRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2UserAuthority;
import org.springframework.stereotype.Service;
import kr.co.rland.web.config.security.WebUserDetails;

import java.util.*;

@Service
public class WebOAuth2UserDetailsService implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {


    @Autowired
    private MemberRepository repository;

    @Autowired
    private MemberRoleRepository memberRoleRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        String username = oAuth2User.getAttribute("name");
        String email = oAuth2User.getAttribute("email");

        Member member = repository.findByEmail(email);

        WebUserDetails userDetails = new WebUserDetails();
        userDetails.setAttributes(oAuth2User.getAttributes());
        userDetails.setName(oAuth2User.getName());
        userDetails.setUsername(username);


        //1. 회원이 존재하지 않으면 기본 정보만 담아서 반환
        if(member == null)  //local 회원 가입한 적 없으니 담을것 없어서 그냥 리턴
            return userDetails;

        //회원 정보가 있을 경우 Spring Security가 사용할 정보 담아줌
        List<MemberRole> roles = memberRoleRepository.findAllByMemberId(member.getId());

        List<GrantedAuthority> authorities = new ArrayList<>();

        for (MemberRole r : roles)
            authorities.add(new SimpleGrantedAuthority(r.getRoleName()));

        userDetails.setId(member.getId());
        userDetails.setUsername(member.getUsername());
        userDetails.setPassword(member.getPwd());
        userDetails.setEmail(member.getEmail());
        userDetails.setAuthorities(authorities);

        return userDetails;
    }
}

//  System.out.println("###########################################################");
//        System.out.println("oAuth2User: " + oAuth2User);
//        System.out.println("###########################################################");
//        System.out.println("--------- authorities ---------");
//        System.out.println(oAuth2User.getAttributes());
//        System.out.println("--------- attributes ---------");
//        System.out.println("--------- name ---------");
//        System.out.println(oAuth2User.getName());
//        System.out.println("--------- token ---------");
//        System.out.println(userRequest.getAccessToken());
//        System.out.println("--------- client registration ---------");
//        System.out.println(userRequest.getClientRegistration());
//        System.out.println("###########################################################");

package kr.co.rland.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rland.web.entity.Member;
import kr.co.rland.web.repository.MemberRepository;

@Service
public class UserServiceImp implements UserService {
    
    @Autowired
    private MemberRepository repository;

   public Member getMemberByUsername(String username, String pwd){

        Member member = repository.findByUsername(username);
        return member;
    }

@Override
public boolean validate(String username, String pwd) {
    
    Member member = repository.findByUsername(username);

    if(member == null)
        return false;
    
    if(!member.getPwd().equals(pwd))
        return false;
    
    return true;
}

    


}

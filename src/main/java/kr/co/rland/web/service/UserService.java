package kr.co.rland.web.service;

import kr.co.rland.web.entity.Member;

public interface UserService {
    
    Member getMemberByUsername(String username, String pwd);
    boolean validate(String username, String pwd);

}

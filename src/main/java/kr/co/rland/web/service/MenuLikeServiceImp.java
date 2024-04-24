package kr.co.rland.web.service;

import kr.co.rland.web.entity.MenuLike;
import kr.co.rland.web.repository.MenuLikeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuLikeServiceImp implements MenuLikeService{

    @Autowired
    MenuLikeRepository repository;
    @Override
    public MenuLike add(MenuLike menuLike) {

        MenuLike menu = null;
            int i = repository.save(menuLike);
        System.out.println(i);
        return null;
    }

    @Override
    public String cancel(MenuLike menuLike) {
        String s = null;
                repository.delete(menuLike);
        return null;
    }
}

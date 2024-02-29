package kr.co.rland.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;
import kr.co.rland.web.repository.MenuRepository;

@Service
public class MenuServiceImp implements MenuService {

    @Autowired
    private MenuRepository repository;

    @Override
    public List<MenuView> getList() {

        List<MenuView> list = repository.findAll(null);

        return list;
    }

    @Override
    public List<MenuView> getList(Long categoryID) {

        List<MenuView> list = repository.findAll(categoryID);

        return list;
    }
    
    
    @Override
    public Menu getMenu(long id) {
        Menu menu = repository.findByID(id);
        return menu;
    }
    
    @Override
    public void reg(Menu menu) {
        throw new UnsupportedOperationException("Unimplemented method 'reg'");
        
    }
    
    // @Override
    // public List<MenuView> getListByCategory(long id) {
        
    //     List<MenuView> list = repository.findAllByCategory(id);

    //     return list;
    // }
}

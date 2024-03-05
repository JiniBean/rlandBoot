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

    private int size = 9;

    @Override
    public List<MenuView> getList(Integer page) {
        int offset = (page-1) * size;
        List<MenuView> list = repository.findAll(size, offset, null, null);
        return list;
    }

    @Override
    public List<MenuView> getList(Integer page, Long id) {
        int offset = (page-1) * size;
        List<MenuView> list = repository.findAll(size, offset, id, null);
        return list;
    }

    @Override
    public List<MenuView> getList(Integer page, String query) {
        int offset = (page-1) * size;
        List<MenuView> list = repository.findAll(size, offset, null, query);
        return list;
    }

    @Override
    public List<MenuView> getList(Integer page, Long id, String query) {
        int offset = (page-1) * size;
        List<MenuView> list = repository.findAll(size, offset, id, query);
        return list;
    }

    @Override
    public List<MenuView> getList(Integer page, Integer offset, Long id, String query) {
        List<MenuView> list = repository.findAll(page, offset, id, query);
        return list;
    }

    @Override
    public MenuView get(Long menuId) {
        MenuView menu = repository.findById(menuId);
        return menu;
    }

    @Override
    public void reg(Menu menu) {
        repository.save(menu);
    }

    @Override
    public void update(Menu menu) {
        repository.update(menu);
    }

}

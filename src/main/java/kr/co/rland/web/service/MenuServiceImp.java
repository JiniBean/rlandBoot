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

    private int size = 6;

//    @Override
//    public List<MenuView> getList(Integer page) {
//        int offset = (page-1) * size;
//        List<MenuView> list = repository.findAll(null, size, offset, null, null);
//        return list;
//    }
//
//    @Override
//    public List<MenuView> getList(Integer page, Long categoryId) {
//        int offset = (page-1) * size;
//        List<MenuView> list = repository.findAll(null, size, offset, categoryId, null);
//        return list;
//    }
//
//    @Override
//    public List<MenuView> getList(Integer page, String query) {
//        int offset = (page-1) * size;
//        List<MenuView> list = repository.findAll(null, size, offset, null, query);
//        return list;
//    }
//
//    @Override
//    public List<MenuView> getList(Integer page, Long categoryId, String query) {
//        int offset = (page-1) * size;
//        List<MenuView> list = repository.findAll(null, size, offset, categoryId, query);
//        return list;
//    }
//
//    @Override
//    public List<MenuView> getList(Integer page, Integer offset, Long categoryId, String query) {
//
//        List<MenuView> list = repository.findAll(null, size, offset, categoryId, query);
//        return list;
//    }

    @Override
    public List<MenuView> getList(Long memberId,Integer page) {
        int offset = (page-1) * size;
        List<MenuView> list = repository.findAll(memberId,size, offset, null, null);
        return list;
    }

    @Override
    public List<MenuView> getList(Long memberId, Integer page, Long id) {
        int offset = (page-1) * size;
        List<MenuView> list = repository.findAll(memberId, size, offset, id, null);
        return list;
    }

    @Override
    public List<MenuView> getList(Long memberId,Integer page, String query) {
        int offset = (page-1) * size;
        List<MenuView> list = repository.findAll(memberId, size, offset, null, query);
        return list;
    }

    @Override
    public List<MenuView> getList(Long memberId,Integer page, Long id, String query) {
        int offset = (page-1) * size;
        List<MenuView> list = repository.findAll(memberId, size, offset, id, query);
        return list;
    }

    @Override
    public List<MenuView> getList(Long memberId,Integer page, Integer offset, Long id, String query) {
        List<MenuView> list = repository.findAll(memberId, page, offset, id, query);
        return list;
    }

    
    @Override
    public int getCount() {
       int count = repository.count(null, null);
        return count;
    }

    @Override
    public int getCount(Long categoryId) {
        int count = repository.count(categoryId, null);
        return count;
    }

    @Override
    public int getCount(String query) {
        int count = repository.count(null, query);
        return count;
    }

    @Override
    public int getCount(Long categoryId, String query) {
        int count = repository.count(categoryId, query);
        return count;
    }

    @Override
    public Menu getById(Long menuId) {
        Menu menu = repository.findById(menuId);
        return menu;
    }

    @Override
    public int reg(Menu menu , List<String> imgFiles) {
        int affected = repository.save(menu);
        return affected;
    }

    @Override
    public void update(Menu menu) {
        repository.update(menu);
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }

}

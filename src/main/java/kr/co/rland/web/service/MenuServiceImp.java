package kr.co.rland.web.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;
import kr.co.rland.web.repository.MenuRepository;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MenuServiceImp implements MenuService {

    @Autowired
    private MenuRepository repository;

    private int size = 6;

    @Override
    @Transactional(isolation = Isolation.READ_COMMITTED)
    public boolean test() {

        Menu menu = Menu.builder().id(1378L).korName("카라멜크림치즈3").build();
        boolean isCommit = repository.update(menu);
        return isCommit;
    }

    @Override
    @Transactional(isolation = Isolation.READ_COMMITTED) // 나 다읽을 때 까지 건들지마
    public void test2() {

        System.out.println("=========== test2 시작 ============");
        Menu menu = repository.findById(1378L);
        System.out.println("before : "+ menu.toString());
        try {
            Thread.sleep(15000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        Menu menu2 = repository.findById(1378L);
        System.out.println("after : "+ menu2.toString());
        System.out.println("=========== test2 ============");
    }
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

package kr.co.rland.web.service;

import java.util.List;

import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;


public interface MenuService {

    List<MenuView> getList(Integer page);
    List<MenuView> getList(Integer page, Long categoryId);
    List<MenuView> getList(Integer page, String query);
    List<MenuView> getList(Integer page, Long categoryId, String query);
    List<MenuView> getList(Integer page, Integer offset, Long categoryId, String query);

    int count();
    int count(Long categoryId);
    int count(String query);
    int count(Long categoryId, String query);

    MenuView get(Long menuId);



    void reg(Menu menu);
    void update(Menu menu);
}

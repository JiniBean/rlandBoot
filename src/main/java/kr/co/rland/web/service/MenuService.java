package kr.co.rland.web.service;

import java.util.List;

import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;


public interface MenuService {
//    List<MenuView> getList(Integer page);
//    List<MenuView> getList(Integer page, Long categoryId);
//    List<MenuView> getList(Integer page, String query);
//    List<MenuView> getList(Integer page, Long categoryId, String query);
//    List<MenuView> getList(Integer page, Integer offset, Long categoryId, String query);
    List<MenuView> getList(Long memberId, Integer page);
    List<MenuView> getList(Long memberId, Integer page, Long categoryId);
    List<MenuView> getList(Long memberId, Integer page, String query);
    List<MenuView> getList(Long memberId, Integer page, Long categoryId, String query);
    List<MenuView> getList(Long memberId, Integer page, Integer offset, Long categoryId, String query);


    int getCount();
    int getCount(Long categoryId);
    int getCount(String query);
    int getCount(Long categoryId, String query);

    Menu getById(Long menuId);



    int reg(Menu menu, List<String> fileNames);
    void update(Menu menu);

    void delete(Long id);
}

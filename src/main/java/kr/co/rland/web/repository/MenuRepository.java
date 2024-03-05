package kr.co.rland.web.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;

@Mapper
public interface MenuRepository {

    // @Select("select * from menu")
    List<MenuView> findAll(Integer size, Integer offset, Long categoryId, String query);

    MenuView findById(Long menuId);

    List<MenuView> findAllByName(String name);

    List<MenuView> findAllByCategory(long id);

    void save(Menu menu);

    void update(Menu menu);

    void delete(int id);
}
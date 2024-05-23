package kr.co.rland.web.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Mapper
public interface MenuRepository {

    // @Select("select * from menu")
    List<MenuView> findAll(Long memberId, Integer size, Integer offset, Long categoryId, String query);
    int count(Long categoryId, String query);

    @Transactional(propagation = Propagation.MANDATORY)
    Menu findById(Long menuId);

    List<MenuView> findAllByName(String name);

    List<MenuView> findAllByCategory(long id);

    int save(Menu menu);

    boolean update(Menu menu);

    int delete(Long id);
}
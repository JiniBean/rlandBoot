package kr.co.rland.web.repository;

import kr.co.rland.web.entity.MenuLike;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MenuLikeRepository {
    int save(MenuLike menuLike);

    int delete(MenuLike menuLike);
}

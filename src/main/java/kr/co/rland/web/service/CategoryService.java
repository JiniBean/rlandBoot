package kr.co.rland.web.service;

import java.util.List;

import kr.co.rland.web.entity.Category;


public interface CategoryService {

    List<Category> getList();
    Category getCategory(int id);
    void reg(Category category);
    
}

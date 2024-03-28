package kr.co.rland.web.controller.api;

import kr.co.rland.web.entity.Menu;
import kr.co.rland.web.entity.MenuView;
import kr.co.rland.web.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController("apiMenusController")
@RequestMapping("api/menus")
public class Menucontroller {

    @Autowired
    private MenuService service;

    @GetMapping()
    public List<MenuView> list(
            @RequestParam(name = "c", required = false) Long categoryId
            , @RequestParam(name = "q", required = false) String query
            , @RequestParam(name = "p", required = false, defaultValue = "1") Integer page
    )
    {
        List<MenuView> list = new ArrayList<>();

        if(categoryId != null && query != null){
            list = service.getList(page, categoryId, query);
        }
        else if(categoryId != null){
            list = service.getList(page, categoryId);
        }
        else if (query != null){
            list = service.getList(page, query);
        }
        else{
            list = service.getList(page);

        }

//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            throw new RuntimeException(e);
//        }

        return list;
    }
    @GetMapping("1")
    public Menu get(Long id){
        Menu menu = service.getById(id);
        return menu;
    }

    @PostMapping
    public Menu add(Menu menu){
        service.reg(menu);

        return null;
    }

    @PutMapping
    public Menu edit(Menu menu) {
        service.update(menu);

        return null;
    }

    @DeleteMapping
    public String delete(Long id){
//        service.delete(id);

        return null;
    }
}

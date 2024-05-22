package kr.co.rland.web.config;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

import kr.co.rland.web.entity.Menu;

public class LambdaTest {
    
    public static void main(String[] args) {
        
        List<Menu> list = new ArrayList<>();

        list.add(Menu.builder().id(9L).korName("마끼아또").price(2000).build());
        list.add(Menu.builder().id(4L).korName("크림브륄레").price(2500).build());
        list.add(Menu.builder().id(1L).korName("가나다").price(9000).build());
        list.add(Menu.builder().id(2L).korName("초코").price(3000).build());

        //자바에서는 함수는 무조건 클래스에 감싸져 잇어야함

        // class compare

        // class AAA implements Comparator<Menu>{

        //     @Override
        //     public int compare(Menu o1, Menu o2) {
        //         return (int)(o1.getId() - o2.getId());
        //     }
            
        // }
        // AAA aaa = new AAA();
        // list.sort(aaa);


        //익명클래스로 인터페이스를 구현
        Comparator<Menu> aaa = new Comparator<Menu>(){
            @Override
            public int compare(Menu o1, Menu o2) {
                return (int)(o1.getId() - o2.getId());
            }
        };    

        Comparator<Menu> bbb = (Menu o1, Menu o2) -> {
            return (int)(o1.getId() - o2.getId());
        };

        //약속된 함수가 두개이상인 인터페이스는 람다 쓸수 없음
        Comparator<Menu> ccc = (o1, o2) -> (int)(o1.getId() - o2.getId());

        list.sort((o1, o2) -> (int)(o1.getId() - o2.getId()));


        System.out.println(list.toString());
    }
}

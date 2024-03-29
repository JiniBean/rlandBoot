package kr.co.rland.web.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// @Getter
// @Setter
// @ToString
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Test {
    private long id;
    private String aaa;
    private String bbb;
    private String ccc;
}
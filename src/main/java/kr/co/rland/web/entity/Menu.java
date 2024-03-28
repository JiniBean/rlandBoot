package kr.co.rland.web.entity;

import java.util.Date;

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
public class Menu {
    private long id;
	private String korName;
	private String engName;
	private int price;
	private String img;
	private String regDate;
    private long categoryId;
}
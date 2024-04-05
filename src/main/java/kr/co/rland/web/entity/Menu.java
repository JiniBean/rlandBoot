package kr.co.rland.web.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

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
	private long regMemberId;

}
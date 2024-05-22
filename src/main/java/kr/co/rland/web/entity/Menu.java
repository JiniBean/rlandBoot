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
    private Long id;
	private String korName;
	private String engName;
	private Integer price;
	private String img;
	private String regDate;
    private Long categoryId;
	private Long regMemberId;

}
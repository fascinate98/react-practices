package com.example.demo.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class CardlistVo {
	private Long no;
	private String title;
	private String description;
	private String status;
}

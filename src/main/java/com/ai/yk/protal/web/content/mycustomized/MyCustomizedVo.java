package com.ai.yk.protal.web.content.mycustomized;

import java.io.Serializable;

import com.ai.yk.protal.web.content.area.AreaVo;

public class MyCustomizedVo implements Serializable {
	private static final long serialVersionUID = -4666119958910883499L;
	/** 定制id **/
	private int id;
	/****/
	private String fieldType;
	/** 省 **/
	private AreaVo province;
	/** 城市 **/
	private AreaVo city;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFieldType() {
		return fieldType;
	}
	public void setFieldType(String fieldType) {
		this.fieldType = fieldType;
	}
	public AreaVo getProvince() {
		return province;
	}
	public void setProvince(AreaVo province) {
		this.province = province;
	}
	public AreaVo getCity() {
		return city;
	}
	public void setCity(AreaVo city) {
		this.city = city;
	}
}

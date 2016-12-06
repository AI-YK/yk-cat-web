package com.ai.yk.protal.web.content.area;

import java.io.Serializable;

public class AreaVo implements Serializable {

	private static final long serialVersionUID = 1788725248343474013L;
	/** id **/
	private int id;
	/** 中文城市(省份) **/
	private String nameZh;
	/** 英文城市(省份) **/
	private String nameEn;
	/** 城市编码 **/
	private String code;
	/** 经度 **/
	private String longitude;
	/** 纬度 **/
	private String latitude;
	/** 父ID **/
	private int pid;
	/**
	 * 1 省份 2城市
	 **/
	private int type;
	/**
	 * 1 一级地区 2二级地区
	 **/
	private int level;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNameZh() {
		return nameZh;
	}
	public void setNameZh(String nameZh) {
		this.nameZh = nameZh;
	}
	public String getNameEn() {
		return nameEn;
	}
	public void setNameEn(String nameEn) {
		this.nameEn = nameEn;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getLongitude() {
		return longitude;
	}
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	public String getLatitude() {
		return latitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}
	
}

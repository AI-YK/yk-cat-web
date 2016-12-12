package com.ai.yk.protal.web.content.news;

import java.io.Serializable;

public class NewsMessage implements Serializable {
	private static final long serialVersionUID = 2128301544150842066L;
	/**
	 * 是否默认（1默认0个人定制）必填
	 */
	private int isDefault;
	/**
	 * 定制id必填
	 */
	private String token;
	/**
	 * 行业id
	 */
	private String categoryId;
	/**
	 * 媒体类型
	 */
	private String mediaType;
	/**
	 * 城市列表（多个以英文逗号隔开）
	 */
	private String idList;
	/**
	 * 数据源分布,海外传notChina，国内传China
	 */
	private String countryName;
	/**
	 * 数据源权重(多个以英文逗号隔开)
	 */
	private String mediaLevel;
	/**
	 * 数据源id
	 */
	private String mediaList;
	/**
	 * 第几页
	 */
	private String pageNo;
	/**
	 * 页面条数
	 */
	private String pageSize;
	/**
	 * 排序字段
	 */
	private String fieldname;
	/**
	 * 倒序或正序
	 */
	private String order;
	public int getIsDefault() {
		return isDefault;
	}
	public void setIsDefault(int isDefault) {
		this.isDefault = isDefault;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}
	public String getMediaType() {
		return mediaType;
	}
	public void setMediaType(String mediaType) {
		this.mediaType = mediaType;
	}
	public String getIdList() {
		return idList;
	}
	public void setIdList(String idList) {
		this.idList = idList;
	}
	public String getCountryName() {
		return countryName;
	}
	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}
	public String getMediaLevel() {
		return mediaLevel;
	}
	public void setMediaLevel(String mediaLevel) {
		this.mediaLevel = mediaLevel;
	}
	public String getMediaList() {
		return mediaList;
	}
	public void setMediaList(String mediaList) {
		this.mediaList = mediaList;
	}
	public String getPageNo() {
		return pageNo;
	}
	public void setPageNo(String pageNo) {
		this.pageNo = pageNo;
	}
	public String getPageSize() {
		return pageSize;
	}
	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}
	public String getFieldname() {
		return fieldname;
	}
	public void setFieldname(String fieldname) {
		this.fieldname = fieldname;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	
}

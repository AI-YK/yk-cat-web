package com.ai.yk.protal.web.content.event;

import java.io.Serializable;

public class EventListMessage implements Serializable {
	private static final long serialVersionUID = -2574883913197301738L;
	// 页面大小 Y
	private Integer pageSize;
	// 第几页
	private Integer pageNo;
	// 所属分类 舆情分类，根据字典表
	private Integer type;
	// 行业类型（行业分类，根据字典表）
	private Integer industryType;
	// 数据类型（ 1 : 新闻 2 : 社交）
	private Integer sourceType;
	private String countryCode ;
	private String provinceCode;
	private String cityCode;
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public Integer getPageNo() {
		return pageNo;
	}
	public void setPageNo(Integer pageNo) {
		this.pageNo = pageNo;
	}
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	public Integer getIndustryType() {
		return industryType;
	}
	public void setIndustryType(Integer industryType) {
		this.industryType = industryType;
	}
	public Integer getSourceType() {
		return sourceType;
	}
	public void setSourceType(Integer sourceType) {
		this.sourceType = sourceType;
	}
	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	public String getProvinceCode() {
		return provinceCode;
	}
	public void setProvinceCode(String provinceCode) {
		this.provinceCode = provinceCode;
	}
	public String getCityCode() {
		return cityCode;
	}
	public void setCityCode(String cityCode) {
		this.cityCode = cityCode;
	}
}
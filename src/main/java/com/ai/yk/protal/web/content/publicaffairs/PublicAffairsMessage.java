package com.ai.yk.protal.web.content.publicaffairs;

import java.io.Serializable;

/**
 * 公共数据
 */
public class PublicAffairsMessage implements Serializable {

	private static final long serialVersionUID = -112918356816128790L;
	/**
	 * 省份
	 */
	private String province;
	/**
	 * 城市
	 */
	private String city;
	/**
	 * 模型名称
	 * 媒体覆盖出 mediaCoverage 
	 * 舆情走势 locSentimentCount
	 */
	private String modelNo;
	/**
	 * 舆情分类类型（多个用逗号隔开）
	 */
	private String publicAffairsType;
	/**
	 * 开始时间
	 */
	private String beginTime;
	/**
	 * 结束时间
	 */
	private String endTime;

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getModelNo() {
		return modelNo;
	}

	public void setModelNo(String modelNo) {
		this.modelNo = modelNo;
	}

	public String getPublicAffairsType() {
		return publicAffairsType;
	}

	public void setPublicAffairsType(String publicAffairsType) {
		this.publicAffairsType = publicAffairsType;
	}

	public String getBeginTime() {
		return beginTime;
	}

	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

}

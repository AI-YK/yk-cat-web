package com.ai.yk.protal.web.content.publicaffairs;

import java.io.Serializable;

/**
 * 公共数据
 */
public class PublicAffairsMessage implements Serializable {

	private static final long serialVersionUID = -112918356816128790L;

	/**
	 * 媒体类型：news/social
	 */
	private String mediaType;

	/**
	 * 关键词
	 */
	private String keyword;

	/**
	 * 模型名称 媒体覆盖出 mediaCoverage 舆情走势 locSentimentCount
	 */
	private String modelNo;
	/**
	 * 舆情分类类型（多个用逗号隔开）
	 */
	private String categoryId;

	/**
	 * 媒体级别id
	 */
	private String mediaLevel;
	/**
	 * 语言类别
	 */
	private String languageCode;
	/**
	 * 城市列表（多个用逗号隔开）
	 */
	private String idList;
	/**
	 * 数据源分布,海外传notChina（多个用逗号隔开）
	 */
	private String countryName;
	/**
	 * 情感标识ID数组
	 */
	private String sentimentId;
	/**
	 * 数据源Id（多个用逗号隔开， 例新浪id）
	 */
	private String mediaList;

	/**
	 * 开始时间
	 */
	private String beginTime;
	/**
	 * 结束时间
	 */
	private String endTime;

	public String getMediaType() {
		return mediaType;
	}

	public void setMediaType(String mediaType) {
		this.mediaType = mediaType;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	public String getModelNo() {
		return modelNo;
	}

	public void setModelNo(String modelNo) {
		this.modelNo = modelNo;
	}

	public String getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public String getMediaLevel() {
		return mediaLevel;
	}

	public void setMediaLevel(String mediaLevel) {
		this.mediaLevel = mediaLevel;
	}

	public String getLanguageCode() {
		return languageCode;
	}

	public void setLanguageCode(String languageCode) {
		this.languageCode = languageCode;
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

	public String getSentimentId() {
		return sentimentId;
	}

	public void setSentimentId(String sentimentId) {
		this.sentimentId = sentimentId;
	}

	public String getMediaList() {
		return mediaList;
	}

	public void setMediaList(String mediaList) {
		this.mediaList = mediaList;
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

package com.ai.yk.protal.web.content.news;

import java.io.Serializable;

public class NewsVo implements Serializable {

	private static final long serialVersionUID = 632330966885895837L;
	/**
	 * 国家名称中文
	 */
	private String countryNameZh;
	/**
	 * 英文关键词
	 */
	private String keywordsEn;
	/**
	 * 英文标题
	 */
	private String titleEn;
	/**
	 * 英文摘要
	 */
	private String abstractEn;
	/**
	 * 语言中文名
	 */
	private String languageTname;
	/**
	 * 媒体名（源文）
	 */
	private String mediaNameSrc;
	/**
	 * 媒体名（英文）
	 */
	private String mediaNameEn;
	/**
	 * 媒体名（中文）
	 */
	private String mediaNameZh;
	/**
	 * 中文关键词
	 */
	private String keywordsZh;
	/**
	 * 媒体类型
	 */
	private String mediaType;
	/**
	 * 源标题
	 */
	private String titleSrc;
	/**
	 * url地址
	 */
	private String url;
	/**
	 * 标题（中文）
	 */
	private String titleZh;
	/**
	 * 中文摘要
	 */
	private String abstractZh;
	/**
	 * 语言类别
	 */
	private String languageCode;
	/**
	 * 文章大小
	 */
	private int docLength;
	/**
	 * 主键id
	 */
	private String uuid;
	/**
	 * 媒体类型名
	 */
	private String mediaTname;
	/**
	 * 是否是首页
	 */
	private int isHome;
	/**
	 * 转自于什么媒体
	 */
	private String transFromM;
	/**
	 * 有无图片
	 */
	private int isPicture;
	/**
	 * 发布时间
	 */
	private String pubdate;
	/**
	 * 访问量PV值
	 */
	private String pv;
	/**
	 * 转载量
	 */
	private int transfer;
	/**
	 * 级别id
	 */
	private int mediaLevel;
	/**
	 * 行业
	 */
	private int categoryId;
	/**
	 * 情感标识id
	 */
	private int sentimentId;
	/**
	 * 标签
	 */
	private String  tags;
	public String getCountryNameZh() {
		return countryNameZh;
	}
	public void setCountryNameZh(String countryNameZh) {
		this.countryNameZh = countryNameZh;
	}
	public String getKeywordsEn() {
		return keywordsEn;
	}
	public void setKeywordsEn(String keywordsEn) {
		this.keywordsEn = keywordsEn;
	}
	public String getTitleEn() {
		return titleEn;
	}
	public void setTitleEn(String titleEn) {
		this.titleEn = titleEn;
	}
	public String getAbstractEn() {
		return abstractEn;
	}
	public void setAbstractEn(String abstractEn) {
		this.abstractEn = abstractEn;
	}
	public String getLanguageTname() {
		return languageTname;
	}
	public void setLanguageTname(String languageTname) {
		this.languageTname = languageTname;
	}
	public String getMediaNameSrc() {
		return mediaNameSrc;
	}
	public void setMediaNameSrc(String mediaNameSrc) {
		this.mediaNameSrc = mediaNameSrc;
	}
	public String getMediaNameEn() {
		return mediaNameEn;
	}
	public void setMediaNameEn(String mediaNameEn) {
		this.mediaNameEn = mediaNameEn;
	}
	public String getMediaNameZh() {
		return mediaNameZh;
	}
	public void setMediaNameZh(String mediaNameZh) {
		this.mediaNameZh = mediaNameZh;
	}
	public String getKeywordsZh() {
		return keywordsZh;
	}
	public void setKeywordsZh(String keywordsZh) {
		this.keywordsZh = keywordsZh;
	}
	public String getMediaType() {
		return mediaType;
	}
	public void setMediaType(String mediaType) {
		this.mediaType = mediaType;
	}
	public String getTitleSrc() {
		return titleSrc;
	}
	public void setTitleSrc(String titleSrc) {
		this.titleSrc = titleSrc;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getTitleZh() {
		return titleZh;
	}
	public void setTitleZh(String titleZh) {
		this.titleZh = titleZh;
	}
	public String getAbstractZh() {
		return abstractZh;
	}
	public void setAbstractZh(String abstractZh) {
		this.abstractZh = abstractZh;
	}
	public String getLanguageCode() {
		return languageCode;
	}
	public void setLanguageCode(String languageCode) {
		this.languageCode = languageCode;
	}
	public int getDocLength() {
		return docLength;
	}
	public void setDocLength(int docLength) {
		this.docLength = docLength;
	}
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getMediaTname() {
		return mediaTname;
	}
	public void setMediaTname(String mediaTname) {
		this.mediaTname = mediaTname;
	}
	public int getIsHome() {
		return isHome;
	}
	public void setIsHome(int isHome) {
		this.isHome = isHome;
	}
	public String getTransFromM() {
		return transFromM;
	}
	public void setTransFromM(String transFromM) {
		this.transFromM = transFromM;
	}
	public int getIsPicture() {
		return isPicture;
	}
	public void setIsPicture(int isPicture) {
		this.isPicture = isPicture;
	}
	public String getPubdate() {
		return pubdate;
	}
	public void setPubdate(String pubdate) {
		this.pubdate = pubdate;
	}
	public String getPv() {
		return pv;
	}
	public void setPv(String pv) {
		this.pv = pv;
	}
	public int getTransfer() {
		return transfer;
	}
	public void setTransfer(int transfer) {
		this.transfer = transfer;
	}
	public int getMediaLevel() {
		return mediaLevel;
	}
	public void setMediaLevel(int mediaLevel) {
		this.mediaLevel = mediaLevel;
	}
	public int getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}
	public int getSentimentId() {
		return sentimentId;
	}
	public void setSentimentId(int sentimentId) {
		this.sentimentId = sentimentId;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	
}

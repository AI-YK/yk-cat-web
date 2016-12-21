package com.ai.yk.protal.web.content.getInformationList;

import java.io.Serializable;
import java.util.List;

public class GetInformationListVo implements Serializable {
	private static final long serialVersionUID = -929422860703922559L;
	
	/**国家名称中文   是否必填：Y**/
	private String countryNameZh;
	/**国家名称英文   是否必填：Y**/
	private String countryNameEn;
	/**英文关键词   是否必填：Y**/
	private List<String> keywordsEn;
	/**英文标题   是否必填：Y**/
	private String titleEn;
	/**英文摘要   是否必填：Y**/
	private String abstractEn;
	/**语言中文名   是否必填：Y**/
	private String languageTname;
	/**媒体名（源文）   是否必填：Y**/
	private String mediaNameSrc;
	/**媒体名（英文）   是否必填：Y**/
	private String mediaNameEn;
	/**媒体名（中文）   是否必填：Y**/
	private String mediaNameZh;
	/**中文关键词   是否必填：Y**/
	private List<String> keywordsZh;
	/**媒体类型   是否必填：Y**/
	private Integer mediaType;
	/**源标题   是否必填：Y**/
	private String titleSrc;
	/**url地址   是否必填：Y**/
	private String url;
	/**标题（中文）   是否必填：Y**/
	private String titleZh;
	/**中文摘要   是否必填：Y**/
	private String abstractZh;
	/**语言类别   是否必填：Y**/
	private String languageCode;
	/**文章大小   是否必填：Y**/
	private Integer docLength;
	/**主键id   是否必填：Y**/
	private String uuid;
	/**媒体类型名   是否必填：Y**/
	private Integer mediaTname;
	/**是否是首页   是否必填：Y**/
	private Integer isHome;
	/**转自于什么媒体   是否必填：Y**/
	private String transFromM;
	/**有无图片   是否必填：Y**/
	private Integer isPicture;
	/**发布时间   是否必填：Y**/
	private String pubdate;
	/**访问量PV值   是否必填：Y**/
	private String pv;
	/**转载量   是否必填：Y**/
	private Integer transfer;
	/**级别id   是否必填：Y**/
	private Integer mediaLevel;
	/**行业   是否必填：Y**/
	private Integer categoryId;
	/**情感标识ID   是否必填：Y**/
	private Integer sentimentId;
	/**标签   是否必填：Y**/
	private List<String> tags;
	public String getCountryNameZh() {
		return countryNameZh;
	}
	public void setCountryNameZh(String countryNameZh) {
		this.countryNameZh = countryNameZh;
	}
	public String getCountryNameEn() {
		return countryNameEn;
	}
	public void setCountryNameEn(String countryNameEn) {
		this.countryNameEn = countryNameEn;
	}
	public List<String> getKeywordsEn() {
		return keywordsEn;
	}
	public void setKeywordsEn(List<String> keywordsEn) {
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
	public List<String> getKeywordsZh() {
		return keywordsZh;
	}
	public void setKeywordsZh(List<String> keywordsZh) {
		this.keywordsZh = keywordsZh;
	}
	public Integer getMediaType() {
		return mediaType;
	}
	public void setMediaType(Integer mediaType) {
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
	public Integer getDocLength() {
		return docLength;
	}
	public void setDocLength(Integer docLength) {
		this.docLength = docLength;
	}
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public Integer getMediaTname() {
		return mediaTname;
	}
	public void setMediaTname(Integer mediaTname) {
		this.mediaTname = mediaTname;
	}
	public Integer getIsHome() {
		return isHome;
	}
	public void setIsHome(Integer isHome) {
		this.isHome = isHome;
	}
	public String getTransFromM() {
		return transFromM;
	}
	public void setTransFromM(String transFromM) {
		this.transFromM = transFromM;
	}
	public Integer getIsPicture() {
		return isPicture;
	}
	public void setIsPicture(Integer isPicture) {
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
	public Integer getTransfer() {
		return transfer;
	}
	public void setTransfer(Integer transfer) {
		this.transfer = transfer;
	}
	public Integer getMediaLevel() {
		return mediaLevel;
	}
	public void setMediaLevel(Integer mediaLevel) {
		this.mediaLevel = mediaLevel;
	}
	public Integer getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}
	public Integer getSentimentId() {
		return sentimentId;
	}
	public void setSentimentId(Integer sentimentId) {
		this.sentimentId = sentimentId;
	}
	public List<String> getTags() {
		return tags;
	}
	public void setTags(List<String> tags) {
		this.tags = tags;
	}
}

package com.ai.yk.protal.web.content.relatedInformation;

import java.util.Date;

public class RelatedInformationResults {


	private Long pubTime;
	private Date updated;
	private Date created;
	private Date pubdate;
	
	
	
	/**国家id     是否必填：Y**/
	private String countryId;
	/**数据源类型微信微博新闻等媒体             是否必填：Y**/
	private String mediaId;
	/**国家名称             是否必填：Y**/
	private String countryName;
	/**语言类别              是否必填：Y**/
	private String languageType;
	/**英文关键词           是否必填：Y**/
	private String keywordEn;
	/**英文标题               是否必填：Y**/
	private String titleEn;
	/**英文摘要               是否必填：Y**/
	private String abstractEn;
	/**语言中文名           是否必填：Y**/
	private String languageTname;
	/**数据源名称           是否必填：Y**/
	private String mediaName;
	/**中文关键词           是否必填：Y**/
	private String[] keywordsZh;
	/**媒体类型               是否必填：Y**/
	private Integer mediaType;
	/**源标题                  是否必填：Y**/
	private String titleSrc;
	/**url地址              是否必填：Y**/
	private String url;
	/**标题（中文）        是否必填：Y**/
	private String titleZh;
	/**中文摘要              是否必填：Y**/
	private String abstractZh;
	/**语言类别               是否必填：Y**/
	private String languageCode;
	/**文章大小               是否必填：Y**/
	private Integer docLength;
	/**主键id      是否必填：Y**/
	private String uuid;
	/**媒体类型名            是否必填：Y**/
	private String mediaTname;
	/**标签                     是否必填：Y**/
	private String tags;
	
	
	private String isHome;
	private String districtNameZh;
	private String transFromM;
	private String mediaNameEn;
	private String similarityId;
	private String[] keywordsEn;
	private String isPicture;
	private String districtNameEn;
	private String mediaNameSrc;
	private Integer transfer;
	private Integer mediaLevel;
	private Integer categoryId;
	private Integer sentimentId;
	private String mediaNameZh;
	private String websiteId;
	private String isOriginal;
	private String countryNameEn;
	private Integer pv;
	private Integer isSensitive;
	private String countryNameZh;
	
	public Long getPubTime() {
		return pubTime;
	}
	public void setPubTime(Long pubTime) {
		this.pubTime = pubTime;
	}
	public Date getUpdated() {
		return updated;
	}
	public void setUpdated(Date updated) {
		this.updated = updated;
	}
	public Date getCreated() {
		return created;
	}
	public void setCreated(Date created) {
		this.created = created;
	}
	public Date getPubdate() {
		return pubdate;
	}
	public void setPubdate(Date pubdate) {
		this.pubdate = pubdate;
	}
	public String getCountryId() {
		return countryId;
	}
	public void setCountryId(String countryId) {
		this.countryId = countryId;
	}
	public String getMediaId() {
		return mediaId;
	}
	public void setMediaId(String mediaId) {
		this.mediaId = mediaId;
	}
	public String getCountryName() {
		return countryName;
	}
	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}
	public String getLanguageType() {
		return languageType;
	}
	public void setLanguageType(String languageType) {
		this.languageType = languageType;
	}
	public String getKeywordEn() {
		return keywordEn;
	}
	public void setKeywordEn(String keywordEn) {
		this.keywordEn = keywordEn;
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
	public String getMediaName() {
		return mediaName;
	}
	public void setMediaName(String mediaName) {
		this.mediaName = mediaName;
	}
	public String[] getKeywordsZh() {
		return keywordsZh;
	}
	public void setKeywordsZh(String[] keywordsZh) {
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
	public String getMediaTname() {
		return mediaTname;
	}
	public void setMediaTname(String mediaTname) {
		this.mediaTname = mediaTname;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public String getIsHome() {
		return isHome;
	}
	public void setIsHome(String isHome) {
		this.isHome = isHome;
	}
	public String getDistrictNameZh() {
		return districtNameZh;
	}
	public void setDistrictNameZh(String districtNameZh) {
		this.districtNameZh = districtNameZh;
	}
	public String getTransFromM() {
		return transFromM;
	}
	public void setTransFromM(String transFromM) {
		this.transFromM = transFromM;
	}
	public String getMediaNameEn() {
		return mediaNameEn;
	}
	public void setMediaNameEn(String mediaNameEn) {
		this.mediaNameEn = mediaNameEn;
	}
	public String getSimilarityId() {
		return similarityId;
	}
	public void setSimilarityId(String similarityId) {
		this.similarityId = similarityId;
	}
	public String[] getKeywordsEn() {
		return keywordsEn;
	}
	public void setKeywordsEn(String[] keywordsEn) {
		this.keywordsEn = keywordsEn;
	}
	public String getIsPicture() {
		return isPicture;
	}
	public void setIsPicture(String isPicture) {
		this.isPicture = isPicture;
	}
	public String getDistrictNameEn() {
		return districtNameEn;
	}
	public void setDistrictNameEn(String districtNameEn) {
		this.districtNameEn = districtNameEn;
	}
	public String getMediaNameSrc() {
		return mediaNameSrc;
	}
	public void setMediaNameSrc(String mediaNameSrc) {
		this.mediaNameSrc = mediaNameSrc;
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
	public String getMediaNameZh() {
		return mediaNameZh;
	}
	public void setMediaNameZh(String mediaNameZh) {
		this.mediaNameZh = mediaNameZh;
	}
	public String getWebsiteId() {
		return websiteId;
	}
	public void setWebsiteId(String websiteId) {
		this.websiteId = websiteId;
	}
	public String getIsOriginal() {
		return isOriginal;
	}
	public void setIsOriginal(String isOriginal) {
		this.isOriginal = isOriginal;
	}
	public String getCountryNameEn() {
		return countryNameEn;
	}
	public void setCountryNameEn(String countryNameEn) {
		this.countryNameEn = countryNameEn;
	}
	public Integer getPv() {
		return pv;
	}
	public void setPv(Integer pv) {
		this.pv = pv;
	}
	public Integer getIsSensitive() {
		return isSensitive;
	}
	public void setIsSensitive(Integer isSensitive) {
		this.isSensitive = isSensitive;
	}
	public String getCountryNameZh() {
		return countryNameZh;
	}
	public void setCountryNameZh(String countryNameZh) {
		this.countryNameZh = countryNameZh;
	}
	
}

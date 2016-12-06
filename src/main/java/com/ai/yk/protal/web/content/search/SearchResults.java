package com.ai.yk.protal.web.content.search;

import java.util.Date;

public class SearchResults {

	private Date pubTime;
	private Date updated;
	private Date created;
	
	/**国家名称中文        必填:Y**/
	private String countryNameZh;
	/**国家名称英文     必填:Y**/
	private String countryNameEn;
	/**英文关键词        必填:Y**/
	private String[] keywordsEn;
	/**英文标题      必填:Y**/
	private String titleEn;
	/**英文摘要     必填:Y**/
	private String abstractEn;
	/**语言中文名       必填:Y**/
	private String languageTname;
	/**媒体名（源文）        必填:Y**/
	private String mediaNameSrc;
	/**媒体名（英文）     必填:Y**/
	private String mediaNameEn;
	/**媒体名（中文）     必填:Y**/
	private String mediaNameZh;
	/**中文关键词     必填:Y**/
	private String[] keywordsZh;
	/**媒体类型      必填:Y**/
	private Integer mediaType;
	/**源标题        必填:Y**/
	private String titleSrc;
	/**url地址        必填:Y**/
	private String url;
	/**标题（中文）      必填:Y**/
	private String titleZh;
	/**中文摘要      必填:Y**/
	private String abstractZh;
	/**语言类别      必填:Y**/
	private String languageCode;
	/**文章大小      必填:Y**/
	private Integer docLength;
	/**主键id      必填:Y**/
	private String uuid;
	/**媒体类型名   必填:Y**/
	private Integer mediaTname;
	/**是否是首页     必填:Y**/
	private Integer isHome;
	/**转自于什么媒体     必填:Y**/
	private String transFromM;
	/**有无图片     必填:Y**/
	private Integer isPicture;
	/**发布时间   必填:Y**/
	private String pubdate;
	/**访问量PV值      必填:Y**/
	private String pv;
	/**转载量        必填:Y**/
	private Integer transfer;
	/**级别id     必填:Y**/
	private Integer mediaLevel;
	/**行业    必填:Y**/
	private Integer categoryId;
	/**情感标识id       必填:Y**/
	private Integer sentimentId;
	/**标签   必填:Y**/
	private String tags;
	
	private String districtNameZh;
	private String similarityId;
	private String provinceNameEn;
	private String districtNameEn;
	private String provinceNameZh;
	private String websiteId;
	private String isOriginal;
	private Integer isSensitive;
	public Date getPubTime() {
		return pubTime;
	}
	public void setPubTime(Date pubTime) {
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
	public String[] getKeywordsEn() {
		return keywordsEn;
	}
	public void setKeywordsEn(String[] keywordsEn) {
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
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public String getDistrictNameZh() {
		return districtNameZh;
	}
	public void setDistrictNameZh(String districtNameZh) {
		this.districtNameZh = districtNameZh;
	}
	public String getSimilarityId() {
		return similarityId;
	}
	public void setSimilarityId(String similarityId) {
		this.similarityId = similarityId;
	}
	public String getProvinceNameEn() {
		return provinceNameEn;
	}
	public void setProvinceNameEn(String provinceNameEn) {
		this.provinceNameEn = provinceNameEn;
	}
	public String getDistrictNameEn() {
		return districtNameEn;
	}
	public void setDistrictNameEn(String districtNameEn) {
		this.districtNameEn = districtNameEn;
	}
	public String getProvinceNameZh() {
		return provinceNameZh;
	}
	public void setProvinceNameZh(String provinceNameZh) {
		this.provinceNameZh = provinceNameZh;
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
	public Integer getIsSensitive() {
		return isSensitive;
	}
	public void setIsSensitive(Integer isSensitive) {
		this.isSensitive = isSensitive;
	}
	public SearchResults(Date pubTime, Date updated, Date created, String countryNameZh, String countryNameEn,
			String[] keywordsEn, String titleEn, String abstractEn, String languageTname, String mediaNameSrc,
			String mediaNameEn, String mediaNameZh, String[] keywordsZh, Integer mediaType, String titleSrc, String url,
			String titleZh, String abstractZh, String languageCode, Integer docLength, String uuid, Integer mediaTname,
			Integer isHome, String transFromM, Integer isPicture, String pubdate, String pv, Integer transfer,
			Integer mediaLevel, Integer categoryId, Integer sentimentId, String tags, String districtNameZh,
			String similarityId, String provinceNameEn, String districtNameEn, String provinceNameZh, String websiteId,
			String isOriginal, Integer isSensitive) {
		super();
		this.pubTime = pubTime;
		this.updated = updated;
		this.created = created;
		this.countryNameZh = countryNameZh;
		this.countryNameEn = countryNameEn;
		this.keywordsEn = keywordsEn;
		this.titleEn = titleEn;
		this.abstractEn = abstractEn;
		this.languageTname = languageTname;
		this.mediaNameSrc = mediaNameSrc;
		this.mediaNameEn = mediaNameEn;
		this.mediaNameZh = mediaNameZh;
		this.keywordsZh = keywordsZh;
		this.mediaType = mediaType;
		this.titleSrc = titleSrc;
		this.url = url;
		this.titleZh = titleZh;
		this.abstractZh = abstractZh;
		this.languageCode = languageCode;
		this.docLength = docLength;
		this.uuid = uuid;
		this.mediaTname = mediaTname;
		this.isHome = isHome;
		this.transFromM = transFromM;
		this.isPicture = isPicture;
		this.pubdate = pubdate;
		this.pv = pv;
		this.transfer = transfer;
		this.mediaLevel = mediaLevel;
		this.categoryId = categoryId;
		this.sentimentId = sentimentId;
		this.tags = tags;
		this.districtNameZh = districtNameZh;
		this.similarityId = similarityId;
		this.provinceNameEn = provinceNameEn;
		this.districtNameEn = districtNameEn;
		this.provinceNameZh = provinceNameZh;
		this.websiteId = websiteId;
		this.isOriginal = isOriginal;
		this.isSensitive = isSensitive;
	}
	public SearchResults() {
		super();
	}
}

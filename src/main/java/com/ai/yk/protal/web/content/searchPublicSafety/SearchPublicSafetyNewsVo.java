package com.ai.yk.protal.web.content.searchPublicSafety;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
/**
 * 新闻VO
 * @author lenovo
 *
 */
public class SearchPublicSafetyNewsVo implements Serializable {
    private static final long serialVersionUID = -931147144629978354L;
	/**语言类别**/
	private String languageCode;
	/**纬度**/
	private BigDecimal latitudes;
	/**经度**/
	private BigDecimal longitude;
	/**主键id**/
	private String uuid;
	/**源标题**/
	private String titleSrc;
	/**标题（中文）**/
	private String titleZh;
	/**标题（英文）**/
	private String titleEn;
	/**中文摘要**/
	private String abstractZh;
	/**英文摘要**/
	private String abstractEn;
	/**情感ID**/
	private Integer sentimentId;
	/**语言中文名**/
	private String languageTname;
	/**关键词英文**/
	private List<String> keywordsEn;
	/****/
	private String motorists;
	/****/
	private String September;
	/**关键词中文**/
	private List<String> keywordsZh;
	/**数据源领域：行业 政府官网**/
	private String categoryId;
	/**国家名称中文**/
	private String countryNameZh;
	/**国家名称英文**/
	private String countryNameEn;
	/**省份名称中文**/
	private String provinceNameZh;
	/**省份名称英文**/
	private String provinceNameEn;
	/**城市中文**/
	private String districtNameZh;
	/**城市英文**/
	private String districtNameEn;
	/**发布时间**/
	private String pubdate;
	/**创建时间**/
	private String created;
	/**更新时间**/
	private String updated;
	/**是否原创**/
	private Integer isOriginal;
	/**媒体名中文**/
	private String mediaNameZh;
	/**媒体名（英文）**/
	private String mediaNameEn;
	/**媒体名（源文）**/
	private String mediaNameSrc;
	/**媒体类型**/
	private Integer mediaType;
	/**媒体类型名**/
	private String mediaTname;
	/**媒体级别**/
	private String mediaLevel;
	/**数据源网站版块标识**/
	private String websiteId;
	/**文章大小**/
	private Integer docLength;
	/**url地址**/
	private String url;
	/**转载量**/
	private Integer transfer;
	/**转自于什么媒体**/
	private String transFromM;
	/**有无图片**/
	private Integer isPicture;
	/**访问量PV值**/
	private Integer pv;
	/**是否是首页**/
	private Integer isHome;
	/**发布时间（毫秒）**/
	private Long pubTime;
	/**敏感度**/
	private Integer issensitive;
	/**标签**/
	private List<String> tags;
	
	private String similarityId;
	public String getLanguageCode() {
		return languageCode;
	}
	public void setLanguageCode(String languageCode) {
		this.languageCode = languageCode;
	}
	public BigDecimal getLatitudes() {
		return latitudes;
	}
	public void setLatitudes(BigDecimal latitudes) {
		this.latitudes = latitudes;
	}
	public BigDecimal getLongitude() {
		return longitude;
	}
	public void setLongitude(BigDecimal longitude) {
		this.longitude = longitude;
	}
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getTitleSrc() {
		return titleSrc;
	}
	public void setTitleSrc(String titleSrc) {
		this.titleSrc = titleSrc;
	}
	public String getTitleZh() {
		return titleZh;
	}
	public void setTitleZh(String titleZh) {
		this.titleZh = titleZh;
	}
	public String getTitleEn() {
		return titleEn;
	}
	public void setTitleEn(String titleEn) {
		this.titleEn = titleEn;
	}
	public String getAbstractZh() {
		return abstractZh;
	}
	public void setAbstractZh(String abstractZh) {
		this.abstractZh = abstractZh;
	}
	public String getAbstractEn() {
		return abstractEn;
	}
	public void setAbstractEn(String abstractEn) {
		this.abstractEn = abstractEn;
	}
	public Integer getSentimentId() {
		return sentimentId;
	}
	public void setSentimentId(Integer sentimentId) {
		this.sentimentId = sentimentId;
	}
	public String getLanguageTname() {
		return languageTname;
	}
	public void setLanguageTname(String languageTname) {
		this.languageTname = languageTname;
	}
	public List<String> getKeywordsEn() {
		return keywordsEn;
	}
	public void setKeywordsEn(List<String> keywordsEn) {
		this.keywordsEn = keywordsEn;
	}
	public String getMotorists() {
		return motorists;
	}
	public void setMotorists(String motorists) {
		this.motorists = motorists;
	}
	public String getSeptember() {
		return September;
	}
	public void setSeptember(String september) {
		September = september;
	}
	public List<String> getKeywordsZh() {
		return keywordsZh;
	}
	public void setKeywordsZh(List<String> keywordsZh) {
		this.keywordsZh = keywordsZh;
	}
	public String getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
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
	public String getProvinceNameZh() {
		return provinceNameZh;
	}
	public void setProvinceNameZh(String provinceNameZh) {
		this.provinceNameZh = provinceNameZh;
	}
	public String getProvinceNameEn() {
		return provinceNameEn;
	}
	public void setProvinceNameEn(String provinceNameEn) {
		this.provinceNameEn = provinceNameEn;
	}
	public String getDistrictNameZh() {
		return districtNameZh;
	}
	public void setDistrictNameZh(String districtNameZh) {
		this.districtNameZh = districtNameZh;
	}
	public String getDistrictNameEn() {
		return districtNameEn;
	}
	public void setDistrictNameEn(String districtNameEn) {
		this.districtNameEn = districtNameEn;
	}
	public String getPubdate() {
		return pubdate;
	}
	public void setPubdate(String pubdate) {
		this.pubdate = pubdate;
	}
	public String getCreated() {
		return created;
	}
	public void setCreated(String created) {
		this.created = created;
	}
	public String getUpdated() {
		return updated;
	}
	public void setUpdated(String updated) {
		this.updated = updated;
	}
	public Integer getIsOriginal() {
		return isOriginal;
	}
	public void setIsOriginal(Integer isOriginal) {
		this.isOriginal = isOriginal;
	}
	public String getMediaNameZh() {
		return mediaNameZh;
	}
	public void setMediaNameZh(String mediaNameZh) {
		this.mediaNameZh = mediaNameZh;
	}
	public String getMediaNameEn() {
		return mediaNameEn;
	}
	public void setMediaNameEn(String mediaNameEn) {
		this.mediaNameEn = mediaNameEn;
	}
	public String getMediaNameSrc() {
		return mediaNameSrc;
	}
	public void setMediaNameSrc(String mediaNameSrc) {
		this.mediaNameSrc = mediaNameSrc;
	}
	public Integer getMediaType() {
		return mediaType;
	}
	public void setMediaType(Integer mediaType) {
		this.mediaType = mediaType;
	}
	public String getMediaTname() {
		return mediaTname;
	}
	public void setMediaTname(String mediaTname) {
		this.mediaTname = mediaTname;
	}
	public String getMediaLevel() {
		return mediaLevel;
	}
	public void setMediaLevel(String mediaLevel) {
		this.mediaLevel = mediaLevel;
	}
	public String getWebsiteId() {
		return websiteId;
	}
	public void setWebsiteId(String websiteId) {
		this.websiteId = websiteId;
	}
	public Integer getDocLength() {
		return docLength;
	}
	public void setDocLength(Integer docLength) {
		this.docLength = docLength;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Integer getTransfer() {
		return transfer;
	}
	public void setTransfer(Integer transfer) {
		this.transfer = transfer;
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
	public Integer getPv() {
		return pv;
	}
	public void setPv(Integer pv) {
		this.pv = pv;
	}
	public Integer getIsHome() {
		return isHome;
	}
	public void setIsHome(Integer isHome) {
		this.isHome = isHome;
	}
	public Long getPubTime() {
		return pubTime;
	}
	public void setPubTime(Long pubTime) {
		this.pubTime = pubTime;
	}
	public Integer getIssensitive() {
		return issensitive;
	}
	public void setIssensitive(Integer issensitive) {
		this.issensitive = issensitive;
	}
	public List<String> getTags() {
		return tags;
	}
	public void setTags(List<String> tags) {
		this.tags = tags;
	}
	public String getSimilarityId() {
		return similarityId;
	}
	public void setSimilarityId(String similarityId) {
		this.similarityId = similarityId;
	}
}

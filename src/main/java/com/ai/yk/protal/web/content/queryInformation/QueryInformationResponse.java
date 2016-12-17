package com.ai.yk.protal.web.content.queryInformation;

import java.io.Serializable;

/**
 * 资讯详情新闻详情返回
 */
public class QueryInformationResponse implements Serializable {

	private static final long serialVersionUID = 5430164078410908034L;
	/**
	 * 资讯id
	 */
	private String id;
	/**
	 * 源标题
	 */
	private String srcTitle;
	/**
	 * 中文标题
	 */
	private String zhTitle;
	/**
	 * 英文标题
	 */
	private String enTitle;
	/**
	 * 源国家名
	 */
	private String countryNameSrc;
	/**
	 * 中文国家名
	 */
	private String countryNameZh;
	/**
	 * 英文国家名
	 */
	private String countryNameEn;

	/**
	 * 源数据来源
	 */
	private String srcSource;
	/**
	 * 中文数据来源
	 */
	private String zhSource;
	/**
	 * 英文数据来源
	 */
	private String enSource;
	/**
	 * 源摘要
	 */
	private String srcSummary;
	/**
	 * 中文摘要
	 */
	private String zhSummary;
	/**
	 * 英文摘要
	 */
	private String enSummary;
	/**
	 * 源正文
	 */
	private String srcContent;
	/**
	 * 中文正文
	 */
	private String zhContent;
	/**
	 * 英文正文
	 */
	private String enContent;
	/**
	 * 类型
	 */
	private Integer type;
	/**
	 * 行业类型（1 : 经济 2 : 体育 3 : 娱乐 4 : 科技 5 : 生活 6 : 未来',）
	 */
	private Integer industryType;
	/**
	 * 数据类型（1 新闻2 社交）
	 */
	private Integer sourceType;
	/**
	 * 经度
	 */
	private String longitude;
	/**
	 * 纬度
	 */
	private String latItude;
	/**
	 * 是否删除（0 未删除 1 已删除
	 */
	private Integer isDelete;
	/**
	 * 创建时间
	 */
	private Long createTime;
	/**
	 * 修改时间
	 */
	private Long updateTime;
	/**
	 * 语言
	 */
	private String languageTName;
	/**
	 * 发布时间
	 */
	private String pubdate;
	/**
	 * 转载量
	 */
	private String view;
	/**
	 * 语言 en zh
	 */
	private String srcLanguage;
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSrcTitle() {
		return srcTitle;
	}

	public void setSrcTitle(String srcTitle) {
		this.srcTitle = srcTitle;
	}

	public String getZhTitle() {
		return zhTitle;
	}

	public void setZhTitle(String zhTitle) {
		this.zhTitle = zhTitle;
	}

	public String getEnTitle() {
		return enTitle;
	}

	public void setEnTitle(String enTitle) {
		this.enTitle = enTitle;
	}

	public String getCountryNameSrc() {
		return countryNameSrc;
	}

	public void setCountryNameSrc(String countryNameSrc) {
		this.countryNameSrc = countryNameSrc;
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

	public String getSrcSource() {
		return srcSource;
	}

	public void setSrcSource(String srcSource) {
		this.srcSource = srcSource;
	}

	public String getZhSource() {
		return zhSource;
	}

	public void setZhSource(String zhSource) {
		this.zhSource = zhSource;
	}

	public String getEnSource() {
		return enSource;
	}

	public void setEnSource(String enSource) {
		this.enSource = enSource;
	}

	public String getSrcSummary() {
		return srcSummary;
	}

	public void setSrcSummary(String srcSummary) {
		this.srcSummary = srcSummary;
	}

	public String getZhSummary() {
		return zhSummary;
	}

	public void setZhSummary(String zhSummary) {
		this.zhSummary = zhSummary;
	}

	public String getEnSummary() {
		return enSummary;
	}

	public void setEnSummary(String enSummary) {
		this.enSummary = enSummary;
	}

	public String getSrcContent() {
		return srcContent;
	}

	public void setSrcContent(String srcContent) {
		this.srcContent = srcContent;
	}

	public String getZhContent() {
		return zhContent;
	}

	public void setZhContent(String zhContent) {
		this.zhContent = zhContent;
	}

	public String getEnContent() {
		return enContent;
	}

	public void setEnContent(String enContent) {
		this.enContent = enContent;
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

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getLatItude() {
		return latItude;
	}

	public void setLatItude(String latItude) {
		this.latItude = latItude;
	}

	public Integer getIsDelete() {
		return isDelete;
	}

	public void setIsDelete(Integer isDelete) {
		this.isDelete = isDelete;
	}

	public Long getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Long createTime) {
		this.createTime = createTime;
	}

	public Long getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Long updateTime) {
		this.updateTime = updateTime;
	}

	public String getLanguageTName() {
		return languageTName;
	}

	public void setLanguageTName(String languageTName) {
		this.languageTName = languageTName;
	}

	public String getPubdate() {
		return pubdate;
	}

	public void setPubdate(String pubdate) {
		this.pubdate = pubdate;
	}

	public String getView() {
		return view;
	}

	public void setView(String view) {
		this.view = view;
	}

	public String getSrcLanguage() {
		return srcLanguage;
	}

	public void setSrcLanguage(String srcLanguage) {
		this.srcLanguage = srcLanguage;
	}

}

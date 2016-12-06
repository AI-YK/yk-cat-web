package com.ai.yk.protal.web.content.queryInformation;



public class QueryInformationData {

	private String ID;
	private String srcTitle;
	private String zhTitle;
	private String enTitle;
	private String srcCountry;
	private String zhCountry;
	private String enCountry;
	private String srcCity;
	private String zhCity;
	private String enCity;
	private String srcSource;
	private String zhSource;
	private String enSource;
	private String srcSummary;
	private String zhSummary;
	private String enSummary;
	private Integer type; 
	private Integer industryType;
	private Integer sourceType;
	private String longitude;
	private String latItude;
	private Integer isDelete;
	private Long createTime;
	private Long updateTime;
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
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
	public String getSrcCountry() {
		return srcCountry;
	}
	public void setSrcCountry(String srcCountry) {
		this.srcCountry = srcCountry;
	}
	public String getZhCountry() {
		return zhCountry;
	}
	public void setZhCountry(String zhCountry) {
		this.zhCountry = zhCountry;
	}
	public String getEnCountry() {
		return enCountry;
	}
	public void setEnCountry(String enCountry) {
		this.enCountry = enCountry;
	}
	public String getSrcCity() {
		return srcCity;
	}
	public void setSrcCity(String srcCity) {
		this.srcCity = srcCity;
	}
	public String getZhCity() {
		return zhCity;
	}
	public void setZhCity(String zhCity) {
		this.zhCity = zhCity;
	}
	public String getEnCity() {
		return enCity;
	}
	public void setEnCity(String enCity) {
		this.enCity = enCity;
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
	public QueryInformationData(String iD, String srcTitle, String zhTitle, String enTitle, String srcCountry,
			String zhCountry, String enCountry, String srcCity, String zhCity, String enCity, String srcSource,
			String zhSource, String enSource, String srcSummary, String zhSummary, String enSummary, Integer type,
			Integer industryType, Integer sourceType, String longitude, String latItude, Integer isDelete,
			Long createTime, Long updateTime) {
		super();
		ID = iD;
		this.srcTitle = srcTitle;
		this.zhTitle = zhTitle;
		this.enTitle = enTitle;
		this.srcCountry = srcCountry;
		this.zhCountry = zhCountry;
		this.enCountry = enCountry;
		this.srcCity = srcCity;
		this.zhCity = zhCity;
		this.enCity = enCity;
		this.srcSource = srcSource;
		this.zhSource = zhSource;
		this.enSource = enSource;
		this.srcSummary = srcSummary;
		this.zhSummary = zhSummary;
		this.enSummary = enSummary;
		this.type = type;
		this.industryType = industryType;
		this.sourceType = sourceType;
		this.longitude = longitude;
		this.latItude = latItude;
		this.isDelete = isDelete;
		this.createTime = createTime;
		this.updateTime = updateTime;
	}
	public QueryInformationData() {
		super();
	}
	
}

package com.ai.yk.protal.web.content.queryeventdataList;

import java.io.Serializable;

public class QueryEventDataVo implements Serializable {
    private static final long serialVersionUID = -931147144629978354L;
	/**主键id**/
	private int id;
	/**数据中心id**/
	private String srcId;
	/**事件创建时间**/
	private String dayTime;
	/**源标题**/
	private String srcTitle;
	/**中文标题**/
	private String zhTitle;
	/**英文标题**/
	private String enTitle;
	/**中文国家名称**/
	private String zhCountry;
	/**英文国家名称**/
	private String enCountry;
	/**中文城市名称**/
	private String zhCity;
	/**英文城市名称**/
	private String enCity;
	/**源数据来源**/
	private String srcSource;
	/**中文数据来源**/
	private String zhSource;
	/**英文数据来源**/
	private String enSource;
	/**源摘要**/
	private String srcSummary;
	/**中文摘要**/
	private String zhSummary;
	/**英文摘要**/
	private String enSummary;
	/**所属分类**/
	private int type;
	/**行业类型**/
	private int industryType;
	/**数据类型**/
	private int sourceType;
	/**经度**/
	private String longitude;
	/**纬度**/
	private String latitude;
	/**热度**/
	private Long heatValue;
	/**图片地址**/
	private String imgUrl;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSrcId() {
		return srcId;
	}
	public void setSrcId(String srcId) {
		this.srcId = srcId;
	}
	public String getDayTime() {
		return dayTime;
	}
	public void setDayTime(String dayTime) {
		this.dayTime = dayTime;
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
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public int getIndustryType() {
		return industryType;
	}
	public void setIndustryType(int industryType) {
		this.industryType = industryType;
	}
	public int getSourceType() {
		return sourceType;
	}
	public void setSourceType(int sourceType) {
		this.sourceType = sourceType;
	}
	public String getLongitude() {
		return longitude;
	}
	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	public String getLatitude() {
		return latitude;
	}
	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	public Long getHeatValue() {
		return heatValue;
	}
	public void setHeatValue(Long heatValue) {
		this.heatValue = heatValue;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public QueryEventDataVo(int id, String srcId, String dayTime, String srcTitle, String zhTitle,
			String enTitle, String zhCountry, String enCountry, String zhCity, String enCity, String srcSource,
			String zhSource, String enSource, String srcSummary, String zhSummary, String enSummary, int type,
			int industryType, int sourceType, String longitude, String latitude, Long heatValue,
			String imgUrl) {
		super();
		this.id = id;
		this.srcId = srcId;
		this.dayTime = dayTime;
		this.srcTitle = srcTitle;
		this.zhTitle = zhTitle;
		this.enTitle = enTitle;
		this.zhCountry = zhCountry;
		this.enCountry = enCountry;
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
		this.latitude = latitude;
		this.heatValue = heatValue;
		this.imgUrl = imgUrl;
	}
	public QueryEventDataVo() {
		super();
	}
	
	
}

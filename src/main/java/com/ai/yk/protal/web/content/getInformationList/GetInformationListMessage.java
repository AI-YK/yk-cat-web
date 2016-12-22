package com.ai.yk.protal.web.content.getInformationList;

import java.io.Serializable;
/**
 * 事件内新闻列表接口入参
 * @author shancong
 *
 */

public class GetInformationListMessage implements Serializable{

	private static final long serialVersionUID = -3598912929810690865L;
	/**数据中心事件id  是否必填：Y**/
	private String 	srcId;
	/**媒体级别id  是否必填：N**/
	private String 	mediaLevel;
	/**关键字  是否必填：N**/
	private String 	keyword;
	/**结束时间  是否必填：N**/
	private String 	endDate;
	/**开始时间  是否必填：N**/
	private String 	beginDate;
	/**数据源类型微信微博新闻等媒体  是否必填：N**/
	private String 	mediaId;
	/**数据源领域：行业 政府官网  是否必填：N**/
	private String 	categoryId;
	/**国别id数组  是否必填：N**/
	private String 	countryId;
	/**语言id数组  是否必填：N**/
	private String 	languageId;
	/**情感标识ID数组  是否必填：N**/
	private String 	sentimentId;
	/**指定排序字段  是否必填：N**/
	private String 	order;
	/**排序字段
	_score：相关度,pubdate：时间，权重mediaLevel, 转载量transfer
	  是否必填：N**/
	private String 	fieldName;
	/**返回结果数  是否必填：Y**/
	private Integer pageSize;
	/**获取第几页  是否必填：Y**/
	private Integer pageNo;
	/**媒体名数组  是否必填：N**/
	private String mediaNameZh;
	/**是否高亮  是否必填：N**/
	private Boolean highlight;
	/**新闻/社交**/
	private String mediaType;
	public String getSrcId() {
		return srcId;
	}
	public void setSrcId(String srcId) {
		this.srcId = srcId;
	}
	public String getMediaLevel() {
		return mediaLevel;
	}
	public void setMediaLevel(String mediaLevel) {
		this.mediaLevel = mediaLevel;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getBeginDate() {
		return beginDate;
	}
	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}
	public String getMediaId() {
		return mediaId;
	}
	public void setMediaId(String mediaId) {
		this.mediaId = mediaId;
	}
	public String getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}
	public String getCountryId() {
		return countryId;
	}
	public void setCountryId(String countryId) {
		this.countryId = countryId;
	}
	public String getLanguageId() {
		return languageId;
	}
	public void setLanguageId(String languageId) {
		this.languageId = languageId;
	}
	public String getSentimentId() {
		return sentimentId;
	}
	public void setSentimentId(String sentimentId) {
		this.sentimentId = sentimentId;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	public String getFieldName() {
		return fieldName;
	}
	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public Integer getPageNo() {
		return pageNo;
	}
	public void setPageNo(Integer pageNo) {
		this.pageNo = pageNo;
	}
	public String getMediaNameZh() {
		return mediaNameZh;
	}
	public void setMediaNameZh(String mediaNameZh) {
		this.mediaNameZh = mediaNameZh;
	}
	public Boolean getHighlight() {
		return highlight;
	}
	public void setHighlight(Boolean highlight) {
		this.highlight = highlight;
	}
	public String getMediaType() {
		return mediaType;
	}
	public void setMediaType(String mediaType) {
		this.mediaType = mediaType;
	}
}
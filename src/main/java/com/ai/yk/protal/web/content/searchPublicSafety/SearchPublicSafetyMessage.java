package com.ai.yk.protal.web.content.searchPublicSafety;

import java.io.Serializable;
/**
 * 公共安全事件检索接口入参
 * @author shancong
 */
public class SearchPublicSafetyMessage implements Serializable {
	private static final long serialVersionUID = -3627850423820477791L;
		/**关键词**/
		private String keyword;
		/**语言类别**/
		private String languageCode;
		/**媒体类型news/social**/
		private String mediaType;
		/**舆情分类类型**/
		private String categoryId;
		/**城市列表（多个用逗号隔开）**/
		private String idList;
		/**城市列表（数据源分布,海外传notChina）**/
		private String countryName;
		/**情感ID(1正面，0：中性 -1负面)**/
		private String sentimentId;
		/**情感ID(数据源Id（多个用逗号隔开， 例新浪id）)**/
		private String mediaList;
		/**第几页**/
		private String pageNo;
		/**页面条数**/
		private String pageSize;
		/**省份**/
		private String provincecityCode;
		/**城市**/
		private String cityCode;
		/**媒体级别id**/
		private String mediaLevel;
		/**排序字段
		_score：相关度,pubdate：时间，权重mediaLevel, 转载量transfer
		**/
		private String fieldName;
		/**是否高亮(true或false)**/
		private String highlight;
		/**倒序或正序（desc/asc）**/
		private String order;
		/**开始时间**/
		private String beginTime;
		/**结束时间**/
		private String endTime;
		/**数据源类型微信微博新闻等媒体**/
		private String mediaId;
		/**国别id数组**/
		private String countryId;
		/**语言id数组**/
		private String languageId;
		/**影响力**/
		private String dicValue;
		
		
		
		public String getKeyword() {
			return keyword;
		}
		public void setKeyword(String keyword) {
			this.keyword = keyword;
		}
		public String getLanguageCode() {
			return languageCode;
		}
		public void setLanguageCode(String languageCode) {
			this.languageCode = languageCode;
		}
		public String getMediaType() {
			return mediaType;
		}
		public void setMediaType(String mediaType) {
			this.mediaType = mediaType;
		}
		public String getCategoryId() {
			return categoryId;
		}
		public void setCategoryId(String categoryId) {
			this.categoryId = categoryId;
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
		public String getPageNo() {
			return pageNo;
		}
		public void setPageNo(String pageNo) {
			this.pageNo = pageNo;
		}
		public String getPageSize() {
			return pageSize;
		}
		public void setPageSize(String pageSize) {
			this.pageSize = pageSize;
		}
		public String getProvincecityCode() {
			return provincecityCode;
		}
		public void setProvincecityCode(String provincecityCode) {
			this.provincecityCode = provincecityCode;
		}
		public String getCityCode() {
			return cityCode;
		}
		public void setCityCode(String cityCode) {
			this.cityCode = cityCode;
		}
		public String getMediaLevel() {
			return mediaLevel;
		}
		public void setMediaLevel(String mediaLevel) {
			this.mediaLevel = mediaLevel;
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
		public String getHighlight() {
			return highlight;
		}
		public void setHighlight(String highlight) {
			this.highlight = highlight;
		}
		public String getMediaId() {
			return mediaId;
		}
		public void setMediaId(String mediaId) {
			this.mediaId = mediaId;
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
		public String getDicValue() {
			return dicValue;
		}
		public void setDicValue(String dicValue) {
			this.dicValue = dicValue;
		}
		
}

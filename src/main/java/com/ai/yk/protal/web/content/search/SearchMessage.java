package com.ai.yk.protal.web.content.search;
public class SearchMessage{
		
		private String mediaLevel;
		private String keyword;
		private String endDate;
		private String beginDate;
		private String mediaId;
		private String categoryId;
		private String countryId;
		private String languageId;
		private String sentimentId;
		private String order;
		private String fieldName;
		private Integer pageSize;
		private Integer pageNo;
		private String mediaNameZh;
		private Boolean highlight;
		private Integer isFirst;
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
		public Integer getIsFirst() {
			return isFirst;
		}
		public void setIsFirst(Integer isFirst) {
			this.isFirst = isFirst;
		}
		public SearchMessage(String mediaLevel, String keyword, String endDate, String beginDate, String mediaId,
				String categoryId, String countryId, String languageId, String sentimentId, String order,
				String fieldName, Integer pageSize, Integer pageNo, String mediaNameZh, Boolean highlight,
				Integer isFirst) {
			super();
			this.mediaLevel = mediaLevel;
			this.keyword = keyword;
			this.endDate = endDate;
			this.beginDate = beginDate;
			this.mediaId = mediaId;
			this.categoryId = categoryId;
			this.countryId = countryId;
			this.languageId = languageId;
			this.sentimentId = sentimentId;
			this.order = order;
			this.fieldName = fieldName;
			this.pageSize = pageSize;
			this.pageNo = pageNo;
			this.mediaNameZh = mediaNameZh;
			this.highlight = highlight;
			this.isFirst = isFirst;
		}
		public SearchMessage() {
			super();
		}

	}
package com.ai.yk.protal.web.content.searchsocial;
public class SearchSocialMessage{
		
		/**
		 * 关键字
		 * 是否必填：Y
		 */
		private String keyword;
		/**
		 * 结束时间
		 * 是否必填：N
		 */
		private String endDate;
		/**
		 * 开始时间
		 * 是否必填：N
		 */
		private String beginDate;
		/**
		 * 升序/倒叙desc/asc
		 */
		private String order;
		/**
		 *当前页数
		 */
		private String pageNo;
		/**
		 *当前条数
		 */
		private String pageSize;
		/**
		 *排序字段
		  _score：相关度,pubdate：时间，权重mediaLevel, 转载量transfer
		 */
		private String fieldName;
		/**
		 *是否第一次（0 否 1 是 则增加关键词检索统计）
		 */
		private Integer isFirst;
		/**
		 *用户id数组
		 */
		private String userId;
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
		public String getOrder() {
			return order;
		}
		public void setOrder(String order) {
			this.order = order;
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
		public String getFieldName() {
			return fieldName;
		}
		public void setFieldName(String fieldName) {
			this.fieldName = fieldName;
		}
		public Integer getIsFirst() {
			return isFirst;
		}
		public void setIsFirst(Integer isFirst) {
			this.isFirst = isFirst;
		}
		public String getUserId() {
			return userId;
		}
		public void setUserId(String userId) {
			this.userId = userId;
		}
		public SearchSocialMessage(String keyword, String endDate, String beginDate, String order, String pageNo,
				String pageSize, String fieldName, Integer isFirst, String userId) {
			super();
			this.keyword = keyword;
			this.endDate = endDate;
			this.beginDate = beginDate;
			this.order = order;
			this.pageNo = pageNo;
			this.pageSize = pageSize;
			this.fieldName = fieldName;
			this.isFirst = isFirst;
			this.userId = userId;
		}
		public SearchSocialMessage() {
			super();
		}
	
		
	}
package com.ai.yk.protal.web.content.queryeventdataList;
public class QueryEventDataListRPMessage{
		
		private Integer pageSize;
		private Integer pageNo;
		private Integer type;
		private Integer industryType;
		private Integer sourceType;
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
		public QueryEventDataListRPMessage(Integer pageSize, Integer pageNo, Integer type, Integer industryType,
				Integer sourceType) {
			super();
			this.pageSize = pageSize;
			this.pageNo = pageNo;
			this.type = type;
			this.industryType = industryType;
			this.sourceType = sourceType;
		}
		public QueryEventDataListRPMessage() {
			super();
		}		
		
		
		
		
	}
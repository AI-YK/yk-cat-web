package com.ai.yk.protal.web.content.queryeventdataList;

import java.io.Serializable;

public class QueryEventDataListMessage implements Serializable{
	private static final long serialVersionUID = -2574883913197301738L;
	    //页面大小 Y
		private int pageSize;
		//第几页
		private int pageNo;
		//所属分类
		private int type;
		//行业类型
		private int industryType;
		//数据类型
		private int sourceType;
		public int getPageSize() {
			return pageSize;
		}
		public void setPageSize(int pageSize) {
			this.pageSize = pageSize;
		}
		public int getPageNo() {
			return pageNo;
		}
		public void setPageNo(int pageNo) {
			this.pageNo = pageNo;
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
		public QueryEventDataListMessage(int pageSize, int pageNo, int type, int industryType,
				int sourceType) {
			super();
			this.pageSize = pageSize;
			this.pageNo = pageNo;
			this.type = type;
			this.industryType = industryType;
			this.sourceType = sourceType;
		}
		public QueryEventDataListMessage() {
			super();
		}		
		
		
		
		
	}
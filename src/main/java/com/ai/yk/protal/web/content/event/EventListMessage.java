package com.ai.yk.protal.web.content.event;

import java.io.Serializable;

public class EventListMessage implements Serializable{
	private static final long serialVersionUID = -2574883913197301738L;
	    //页面大小 Y
		private Integer pageSize;
		//第几页
		private Integer pageNo;
		//所属分类
		private Integer type;
		//行业类型
		
		private Integer industryType;
		//数据类型
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
		public EventListMessage(Integer pageSize, Integer pageNo, Integer type, Integer industryType,
				Integer sourceType) {
			super();
			this.pageSize = pageSize;
			this.pageNo = pageNo;
			this.type = type;
			this.industryType = industryType;
			this.sourceType = sourceType;
		}
		public EventListMessage() {
			super();
		}		
		
		
		
		
	}
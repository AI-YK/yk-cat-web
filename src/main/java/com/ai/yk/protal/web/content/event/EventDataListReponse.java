package com.ai.yk.protal.web.content.event;

import java.io.Serializable;
import java.util.List;

public class EventDataListReponse implements Serializable{
		private static final long serialVersionUID = 3037496561666627522L;
		private Integer pageSize;
		private Integer pageNo;
		private Integer type;
		private Integer industryType;
		private Integer sourceType;
		
		private List<EventDataVo> results;

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

		public List<EventDataVo> getResults() {
			return results;
		}

		public void setResults(List<EventDataVo> results) {
			this.results = results;
		}

		public EventDataListReponse(Integer pageSize, Integer pageNo, Integer type, Integer industryType,
				Integer sourceType, List<EventDataVo> results) {
			super();
			this.pageSize = pageSize;
			this.pageNo = pageNo;
			this.type = type;
			this.industryType = industryType;
			this.sourceType = sourceType;
			this.results = results;
		}

		public EventDataListReponse() {
			super();
		}
		
		
		
	}
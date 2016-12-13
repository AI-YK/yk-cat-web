package com.ai.yk.protal.web.content.event;

import java.io.Serializable;
import java.util.List;

public class EventListResponse implements Serializable{
		private static final long serialVersionUID = 3037496561666627522L;
		/**当前页面大小**/
		private Integer pageSize;
		/**当前页数**/
		private Integer pageNo;
		/**总条数**/
		private Integer totalRows;
		/**总页数**/
		private Integer totalPages;
		/**列表内容**/
		private Integer sourceType;
		
		private Integer type;
		private Integer industryType;
		private List<EventVo> results;

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

		public List<EventVo> getResults() {
			return results;
		}

		public void setResults(List<EventVo> results) {
			this.results = results;
		}

		public Integer getTotalRows() {
			return totalRows;
		}

		public void setTotalRows(Integer totalRows) {
			this.totalRows = totalRows;
		}

		public Integer getTotalPages() {
			return totalPages;
		}

		public void setTotalPages(Integer totalPages) {
			this.totalPages = totalPages;
		}

	}
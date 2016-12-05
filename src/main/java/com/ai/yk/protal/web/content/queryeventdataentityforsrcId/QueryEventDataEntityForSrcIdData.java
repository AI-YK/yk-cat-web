package com.ai.yk.protal.web.content.queryeventdataentityforsrcId;

import java.util.List;

public class QueryEventDataEntityForSrcIdData{
		
		private Integer pageSize;
		private Integer pageNo;
		private Integer totalPages;
		private Integer totalRows;

		
		private List<QueryEventDataEntityForSrcIdResultsResults> results;


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


		public Integer getTotalPages() {
			return totalPages;
		}


		public void setTotalPages(Integer totalPages) {
			this.totalPages = totalPages;
		}


		public Integer getTotalRows() {
			return totalRows;
		}


		public void setTotalRows(Integer totalRows) {
			this.totalRows = totalRows;
		}


		public List<QueryEventDataEntityForSrcIdResultsResults> getResults() {
			return results;
		}


		public void setResults(List<QueryEventDataEntityForSrcIdResultsResults> results) {
			this.results = results;
		}
		
		
		
	}
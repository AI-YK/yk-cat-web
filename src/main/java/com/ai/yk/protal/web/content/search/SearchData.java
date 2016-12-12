package com.ai.yk.protal.web.content.search;

import java.util.List;

public class SearchData{
		
	
		private Integer resultCount;
		
		private List<SearchResults> resultList;

		public Integer getResultCount() {
			return resultCount;
		}

		public void setResultCount(Integer resultCount) {
			this.resultCount = resultCount;
		}

		public List<SearchResults> getResultList() {
			return resultList;
		}

		public void setResultList(List<SearchResults> resultList) {
			this.resultList = resultList;
		}

		public SearchData(Integer resultCount, List<SearchResults> resultList) {
			super();
			this.resultCount = resultCount;
			this.resultList = resultList;
		}

		public SearchData() {
			super();
		}

	}
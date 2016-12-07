package com.ai.yk.protal.web.content.searchnews;

import java.util.List;

public class SearchNewsData{
		
	
		private Integer resultCount;
		
		private List<SearchNewsResults> resultList;

		public Integer getResultCount() {
			return resultCount;
		}

		public void setResultCount(Integer resultCount) {
			this.resultCount = resultCount;
		}

		public List<SearchNewsResults> getResultList() {
			return resultList;
		}

		public void setResultList(List<SearchNewsResults> resultList) {
			this.resultList = resultList;
		}

		public SearchNewsData(Integer resultCount, List<SearchNewsResults> resultList) {
			super();
			this.resultCount = resultCount;
			this.resultList = resultList;
		}

		public SearchNewsData() {
			super();
		}

	}
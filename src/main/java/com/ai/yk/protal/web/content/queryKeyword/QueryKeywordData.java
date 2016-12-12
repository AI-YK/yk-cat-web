package com.ai.yk.protal.web.content.queryKeyword;

import java.util.List;


public class QueryKeywordData {

	private Integer resultCount;
	
	private List<QueryKeywordResults> resultList;

	public Integer getResultCount() {
		return resultCount;
	}

	public void setResultCount(Integer resultCount) {
		this.resultCount = resultCount;
	}

	public List<QueryKeywordResults> getResultList() {
		return resultList;
	}

	public void setResultList(List<QueryKeywordResults> resultList) {
		this.resultList = resultList;
	}

	public QueryKeywordData(Integer resultCount, List<QueryKeywordResults> resultList) {
		super();
		this.resultCount = resultCount;
		this.resultList = resultList;
	}

	public QueryKeywordData() {
		super();
	}
}

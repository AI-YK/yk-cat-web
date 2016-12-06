package com.ai.yk.protal.web.content.queryKeyword;


public class QueryKeywordResults {

	private String id;
	private String keyword;
	private String searchCount;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getSearchCount() {
		return searchCount;
	}
	public void setSearchCount(String searchCount) {
		this.searchCount = searchCount;
	}
	public QueryKeywordResults(String id, String keyword, String searchCount) {
		super();
		this.id = id;
		this.keyword = keyword;
		this.searchCount = searchCount;
	}
	public QueryKeywordResults() {
		super();
	}
}

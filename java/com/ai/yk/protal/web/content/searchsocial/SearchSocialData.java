package com.ai.yk.protal.web.content.searchsocial;

import java.util.List;


public class SearchSocialData {

	private String resultCount;
	
	private List<SearchSocialResults> resultList;

	public String getResultCount() {
		return resultCount;
	}

	public void setResultCount(String resultCount) {
		this.resultCount = resultCount;
	}

	public List<SearchSocialResults> getResultList() {
		return resultList;
	}

	public void setResultList(List<SearchSocialResults> resultList) {
		this.resultList = resultList;
	}

	public SearchSocialData(String resultCount, List<SearchSocialResults> resultList) {
		super();
		this.resultCount = resultCount;
		this.resultList = resultList;
	}

	public SearchSocialData() {
		super();
	}

	
}

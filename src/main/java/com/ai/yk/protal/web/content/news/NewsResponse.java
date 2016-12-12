package com.ai.yk.protal.web.content.news;

import java.io.Serializable;
import java.util.List;

public class NewsResponse implements Serializable {
	private static final long serialVersionUID = -8663233825744222400L;
	private int resultCount;
	private List<NewsVo> resultList;
	public int getResultCount() {
		return resultCount;
	}
	public void setResultCount(int resultCount) {
		this.resultCount = resultCount;
	}
	public List<NewsVo> getResultList() {
		return resultList;
	}
	public void setResultList(List<NewsVo> resultList) {
		this.resultList = resultList;
	}
	
}

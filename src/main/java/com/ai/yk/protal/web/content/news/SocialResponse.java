package com.ai.yk.protal.web.content.news;

import java.io.Serializable;
import java.util.List;

public class SocialResponse implements Serializable {
	private static final long serialVersionUID = 4840297762216070230L;
	private int resultCount;
	private List<SocialVo> resultList;
	public int getResultCount() {
		return resultCount;
	}
	public void setResultCount(int resultCount) {
		this.resultCount = resultCount;
	}
	public List<SocialVo> getResultList() {
		return resultList;
	}
	public void setResultList(List<SocialVo> resultList) {
		this.resultList = resultList;
	}
	
}

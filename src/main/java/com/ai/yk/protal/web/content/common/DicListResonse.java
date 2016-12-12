package com.ai.yk.protal.web.content.common;

import java.io.Serializable;
import java.util.List;

public class DicListResonse implements Serializable {

	private static final long serialVersionUID = 6615442044170901268L;
    private List<DicVo> results;
	public List<DicVo> getResults() {
		return results;
	}
	public void setResults(List<DicVo> results) {
		this.results = results;
	}
    
}

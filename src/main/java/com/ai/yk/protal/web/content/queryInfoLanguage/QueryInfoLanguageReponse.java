package com.ai.yk.protal.web.content.queryInfoLanguage;

import java.io.Serializable;
import java.util.List;

/**
 * 获取资讯语言接口入参
 * 
 * @author mengbo
 * 
 */
public class QueryInfoLanguageReponse implements Serializable {
	private static final long serialVersionUID = 8569290408747580559L;
	private List<QueryInfoLanguageVo> results;
	
	public List<QueryInfoLanguageVo> getResults() {
		return results;
	}
	public void setResults(List<QueryInfoLanguageVo> results) {
		this.results = results;
	}
}

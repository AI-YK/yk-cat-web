package com.ai.yk.protal.web.content.queryDicByTypeAndLanguageForNews;

import java.io.Serializable;
import java.util.List;

/**
 * 根据类型和语言获取数据字典中的所有记录接口出参
 * @author shancong
 *
 */
public class QueryDicByTypeAndLanguageForNewsReponse implements Serializable{

	private static final long serialVersionUID = -5084009154015326962L;
	
	private List<QueryDicByTypeAndLanguageForNewsResults> results;

	public List<QueryDicByTypeAndLanguageForNewsResults> getResults() {
		return results;
	}

	public void setResults(List<QueryDicByTypeAndLanguageForNewsResults> results) {
		this.results = results;
	}

}

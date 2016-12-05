package com.ai.yk.protal.web.content.queryInfoLanguage;

import com.ai.yk.protal.web.content.YJBaseResponse;
/**
 * 获取资讯语言接口出参
 * @author mengbo 
 *
 */
public class QueryInfoLanguageResponse extends YJBaseResponse{

	private QueryInfoLanguageData data;

	public QueryInfoLanguageData getData() {
		return data;
	}

	public void setData(QueryInfoLanguageData data) {
		this.data = data;
	}

	
	
}

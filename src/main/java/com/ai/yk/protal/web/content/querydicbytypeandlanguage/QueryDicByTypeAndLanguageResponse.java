package com.ai.yk.protal.web.content.querydicbytypeandlanguage;

import com.ai.yk.protal.web.content.YJBaseResponse;
/**
 * 根据类型和语言获取数据字典中的所有记录接口出参
 * @author mengbo 
 *
 */
public class QueryDicByTypeAndLanguageResponse extends YJBaseResponse{

	private QueryDicByTypeAndLanguageData data;

	public QueryDicByTypeAndLanguageData getData() {
		return data;
	}

	public void setData(QueryDicByTypeAndLanguageData data) {
		this.data = data;
	}

	
	
}

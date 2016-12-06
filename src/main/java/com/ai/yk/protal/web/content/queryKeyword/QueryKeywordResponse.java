package com.ai.yk.protal.web.content.queryKeyword;

import com.ai.yk.protal.web.content.YJBaseResponse;

/**
 *关键词热度接口出参
 * @author shancong
 *
 */
public class QueryKeywordResponse extends YJBaseResponse{

	private QueryKeywordData data;

	public QueryKeywordData getData() {
		return data;
	}

	public void setData(QueryKeywordData data) {
		this.data = data;
	}

	
	
}

package com.ai.yk.protal.web.content.searchnews;

import com.ai.yk.protal.web.content.YJResponse;
/**
 * 搜索列表接口出参
 * @author shancong
 *
 */
public class SearchNewsResponse extends YJResponse{

	private SearchNewsData data;

	public SearchNewsData getData() {
		return data;
	}

	public void setData(SearchNewsData data) {
		this.data = data;
	}

	
	
}

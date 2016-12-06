package com.ai.yk.protal.web.content.search;

import com.ai.yk.protal.web.content.YJBaseResponse;
/**
 * 搜索列表接口出参
 * @author shancong
 *
 */
public class SearchResponse extends YJBaseResponse{

	private SearchData data;

	public SearchData getData() {
		return data;
	}

	public void setData(SearchData data) {
		this.data = data;
	}

	
	
}

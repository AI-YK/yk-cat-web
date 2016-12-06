package com.ai.yk.protal.web.content.search;

import com.ai.yk.protal.web.content.YJBaseRequest;
/**
 *搜索列表接口入参
 * @author shancong
 *
 */
public class SearchRequest extends YJBaseRequest {

	private SearchMessage message;

	public SearchMessage getMessage() {
		return message;
	}

	public void setMessage(SearchMessage message) {
		this.message = message;
	}
	
	



	

	
}

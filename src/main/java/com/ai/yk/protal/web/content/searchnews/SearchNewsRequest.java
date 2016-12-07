package com.ai.yk.protal.web.content.searchnews;

import com.ai.yk.protal.web.content.YJRequest;
/**
 *搜索列表接口入参
 * @author shancong
 *
 */
public class SearchNewsRequest extends YJRequest {

	private SearchNewsMessage message;

	public SearchNewsMessage getMessage() {
		return message;
	}

	public void setMessage(SearchNewsMessage message) {
		this.message = message;
	}
	
	



	

	
}

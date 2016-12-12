package com.ai.yk.protal.web.content.searchsocial;

import com.ai.yk.protal.web.content.YJRequest;
/**
 * 社交检索接口入参
 * @author mengbo 
 *
 */
public class SearchSocialRequest extends YJRequest {

	private SearchSocialMessage message;

	public SearchSocialMessage getMessage() {
		return message;
	}

	public void setMessage(SearchSocialMessage message) {
		this.message = message;
	}
	
	



	

	
}

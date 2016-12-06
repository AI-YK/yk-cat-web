package com.ai.yk.protal.web.content.searchsocial;

import com.ai.yk.protal.web.content.YJBaseResponse;

/**
 * 社交检索接口出参
 * @author mengbo 
 *
 */
public class SearchSocialResponse extends YJBaseResponse{

	private SearchSocialData data;

	public SearchSocialData getData() {
		return data;
	}

	public void setData(SearchSocialData data) {
		this.data = data;
	}

	
	
}

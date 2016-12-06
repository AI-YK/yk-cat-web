package com.ai.yk.protal.web.content.queryInformation;

import com.ai.yk.protal.web.content.YJBaseResponse;

/**
 * 资讯详情接口出参
 * @author mengbo 
 *
 */
public class QueryInformationResponse extends YJBaseResponse{

	private QueryInformationData data;

	public QueryInformationData getData() {
		return data;
	}

	public void setData(QueryInformationData data) {
		this.data = data;
	}

	
	
}

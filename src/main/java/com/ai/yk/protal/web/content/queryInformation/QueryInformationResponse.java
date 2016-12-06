package com.ai.yk.protal.web.content.queryInformation;

import com.ai.yk.protal.web.content.YJResponse;

/**
 * 资讯详情接口出参
 * @author mengbo 
 *
 */
public class QueryInformationResponse extends YJResponse{

	private QueryInformationData data;

	public QueryInformationData getData() {
		return data;
	}

	public void setData(QueryInformationData data) {
		this.data = data;
	}

	
	
}

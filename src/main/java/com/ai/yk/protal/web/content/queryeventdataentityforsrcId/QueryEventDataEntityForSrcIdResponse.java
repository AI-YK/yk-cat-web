package com.ai.yk.protal.web.content.queryeventdataentityforsrcId;

import com.ai.yk.protal.web.content.YJBaseResponse;
/**
 * 查询srcId事件详情接口入参
 * @author mengbo 
 *
 */
public class QueryEventDataEntityForSrcIdResponse extends YJBaseResponse{

	private QueryEventDataEntityForSrcIdData data;

	public QueryEventDataEntityForSrcIdData getData() {
		return data;
	}

	public void setData(QueryEventDataEntityForSrcIdData data) {
		this.data = data;
	}

	
	
}

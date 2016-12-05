package com.ai.yk.protal.web.content.queryeventdataentityforsrcId;

import com.ai.yk.protal.web.content.YJBaseResponse;
/**
 * 查询事件列表接口出参
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

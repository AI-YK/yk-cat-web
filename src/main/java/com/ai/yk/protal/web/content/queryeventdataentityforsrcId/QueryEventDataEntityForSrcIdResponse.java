package com.ai.yk.protal.web.content.queryeventdataentityforsrcId;

import com.ai.yk.protal.web.content.YJResponse;
/**
 * 查询事件列表接口出参
 * @author mengbo 
 *
 */
public class QueryEventDataEntityForSrcIdResponse extends YJResponse{

	private QueryEventDataEntityForSrcIdData data;

	public QueryEventDataEntityForSrcIdData getData() {
		return data;
	}

	public void setData(QueryEventDataEntityForSrcIdData data) {
		this.data = data;
	}

	
	
}

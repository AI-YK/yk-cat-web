package com.ai.yk.protal.web.service.eventdata;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.YJBaseRequest;
import com.ai.yk.protal.web.content.YJBaseResponse;
import com.ai.yk.protal.web.content.queryeventdataList.QueryEventDataListMessage;
import com.ai.yk.protal.web.content.queryeventdataList.QueryEventDataListReponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
@Service
public class EventDataService {
	/**
	 * 查询事件列表
	 */
	public YJBaseResponse<QueryEventDataListReponse> queryEventDataList(YJBaseRequest<QueryEventDataListMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_EVENTDATA_QUERYEVENTDATALIST);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJBaseResponse<QueryEventDataListReponse>>(){});
		}
		return null;
	}
}

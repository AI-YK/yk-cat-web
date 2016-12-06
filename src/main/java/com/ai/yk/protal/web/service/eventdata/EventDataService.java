package com.ai.yk.protal.web.service.eventdata;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.event.EventListMessage;
import com.ai.yk.protal.web.content.event.EventListReponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
@Service
public class EventDataService {
	/**
	 * 查询事件列表
	 */
	public YJResponse<EventListReponse> queryEventDataList(YJRequest<EventListMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_EVENTDATA_QUERYEVENTDATALIST);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<EventListReponse>>(){});
		}
		return null;
	}
	/**
	 * 查询事件详情
	 */
	public YJResponse<EventListReponse> queryEventDataEntityForSrcId(YJRequest<EventListMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_EVENTDATA_QUERYEVENTDATAENTITYFORSRCID);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<EventListReponse>>(){});
		}
		return null;
	}
}

package com.ai.yk.protal.web.service.eventdata;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.event.EventListMessage;
import com.ai.yk.protal.web.content.event.EventListResponse;
import com.ai.yk.protal.web.content.event.EventVo;
import com.ai.yk.protal.web.content.event.chars.EventModelMessage;
import com.ai.yk.protal.web.content.event.chars.EventModelResponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
@Service
public class EventDataService {
	/**
	 * 查询事件列表
	 */
	public YJResponse<EventListResponse> queryEventDataList(YJRequest<EventListMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_EVENTDATA_QUERYEVENTDATALIST);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<EventListResponse>>(){});
		}
		return null;
	}
	/**
	 * 查询事件详情
	 */
	public YJResponse<EventVo> queryEventDataEntityForSrcId(YJRequest<EventListMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_EVENTDATA_QUERYEVENTDATAENTITYFORSRCID);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<EventVo>>(){});
		}
		return null;
	}
	/**
	 * 查询事件图表【传播态势，事件态势】
	 */
	public YJResponse<EventModelResponse> queryEventModel(YJRequest<EventModelMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_EVENTDATA_EVENTMODEL);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<EventModelResponse>>(){});
		}
		return null;
	}
}

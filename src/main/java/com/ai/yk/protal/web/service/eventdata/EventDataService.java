package com.ai.yk.protal.web.service.eventdata;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.event.EventDetailsMessage;
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
	private static final Logger LOG = LoggerFactory
			.getLogger(EventDataService.class);
	/**
	 * 查询事件列表
	 */
	public YJResponse<EventListResponse> queryEventDataList(YJRequest<EventListMessage> req) {
		try {
			String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_EVENTDATA_QUERYEVENTDATALIST);
			String result =HttpClientUtil.getYJBaseResponse(url,req);
			if(!StringUtil.isBlank(result)){
			 return JSON.parseObject(result, new TypeReference<YJResponse<EventListResponse>>(){});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(),e);
		}
		return null;
	}
	/**
	 * 查询事件详情
	 */
	public YJResponse<EventVo> queryEventDataEntityForSrcId(YJRequest<EventDetailsMessage> req) {
		try {
			String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_EVENTDATA_QUERYEVENTDATAENTITYFORSRCID);
			String result =HttpClientUtil.getYJBaseResponse(url,req);
			if(!StringUtil.isBlank(result)){
				return JSON.parseObject(result, new TypeReference<YJResponse<EventVo>>(){});
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(),e);
		}
		return null;
	}
	/**
	 * 查询事件图表【传播态势，事件态势】
	 */
	public YJResponse<EventModelResponse> queryEventModel(YJRequest<EventModelMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_EVENTDATA_EVENTMODEL);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<EventModelResponse>>(){});
		}
		return null;
	}
	
	/*public static void main(String[] args) throws Exception {
		
		EventDataService service = new EventDataService();
		YJRequest<EventListMessage> req = new YJRequest<EventListMessage>();
		EventListMessage message = new EventListMessage();
		message.setPageSize(10);
		message.setPageNo(1);
		message.setSourceType(1);
		message.setIsTimeSort(1);
		
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
		YJResponse<EventListResponse> res = service.queryEventDataList(req);
		System.out.println(JSON.toJSONString(res));
		
		
	}*/
	
	
}

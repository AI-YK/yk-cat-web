package com.ai.yk.protal.web.service.publicaffairs;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.publicaffairs.IocSentimentListResponse;
import com.ai.yk.protal.web.content.publicaffairs.MediaCoverageListResponse;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsMessage;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class PublicaffairsService {
	/**
	 * 查询媒体覆盖
	 */
	public YJResponse<MediaCoverageListResponse> queryMediaCoverageList(YJRequest<PublicAffairsMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_YEESIGHTFORPUBLICAFFAIRS_QUERYSHARECOUNT);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			YJResponse<MediaCoverageListResponse> res = 
					JSON.parseObject(result, new TypeReference<YJResponse<MediaCoverageListResponse>>(){});
			return res;
		}
		return null;
	}
	/**
	 * 查询舆情走势
	 */
	public YJResponse<IocSentimentListResponse> queryIocSentimentList(YJRequest<PublicAffairsMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_YEESIGHTFORPUBLICAFFAIRS_QUERYSHARECOUNT);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			YJResponse<IocSentimentListResponse> res = 
					JSON.parseObject(result, new TypeReference<YJResponse<IocSentimentListResponse>>(){});
			return res;
		}
		return null;
	}
}

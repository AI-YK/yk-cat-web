package com.ai.yk.protal.web.service.information;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.queryInformation.QueryInformationMessage;
import com.ai.yk.protal.web.content.queryInformation.QueryInformationResponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class InformationService {
	/**
	 * 资讯详情，新闻详情
	 */
	public YJResponse<QueryInformationResponse> queryNewsDetail(YJRequest<QueryInformationMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_INFODETAIL_QUERYINFORMATION);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
		 return	JSON.parseObject(result, new TypeReference<YJResponse<QueryInformationResponse>>(){});
		}
		return null;
	}
}

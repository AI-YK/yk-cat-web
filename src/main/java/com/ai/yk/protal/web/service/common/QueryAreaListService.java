package com.ai.yk.protal.web.service.common;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.queryAreaList.QueryAreaListMessage;
import com.ai.yk.protal.web.content.queryAreaList.QueryAreaListReponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class QueryAreaListService {
	/**
	 * 国家城市列表
	 */
	public YJResponse<QueryAreaListReponse> queryEventDataList(YJRequest<QueryAreaListMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_CONMMON_QUERYAREALIST);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<QueryAreaListReponse>>(){});
		}
		return null;
	}
}

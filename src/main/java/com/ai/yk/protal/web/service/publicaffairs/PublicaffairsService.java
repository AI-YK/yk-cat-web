package com.ai.yk.protal.web.service.publicaffairs;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsMessage;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsResponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class PublicaffairsService {
	/**
	 * 查询媒体覆盖，查询舆情走势
	 */
	public YJResponse<PublicAffairsResponse> queryMediaCoverageList(YJRequest<PublicAffairsMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_YEESIGHTFORPUBLICAFFAIRS_QUICKANALYZE);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			YJResponse<PublicAffairsResponse> res = 
					JSON.parseObject(result, new TypeReference<YJResponse<PublicAffairsResponse>>(){});
			return res;
		}
		return null;
	}
}

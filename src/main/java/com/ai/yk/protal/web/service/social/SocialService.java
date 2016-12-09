package com.ai.yk.protal.web.service.social;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.socialdetail.SocialDetailMessage;
import com.ai.yk.protal.web.content.socialdetail.SocialDetailResponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class SocialService {
	/**
	 * 查询社交详情
	 */
	public YJResponse<SocialDetailResponse> queryNewsDetail(YJRequest<SocialDetailMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_INFODETAIL_SOCIALDETAIL);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
		 return	JSON.parseObject(result, new TypeReference<YJResponse<SocialDetailResponse>>(){});
		}
		return null;
	}
}

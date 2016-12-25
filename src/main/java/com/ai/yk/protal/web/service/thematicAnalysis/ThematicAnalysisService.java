package com.ai.yk.protal.web.service.thematicAnalysis;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.thematicAnalysis.ThematicAnalysisMessage;
import com.ai.yk.protal.web.content.thematicAnalysis.ThematicAnalysisResponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class ThematicAnalysisService {
	public YJResponse<ThematicAnalysisResponse> getAnalysis(
			YJRequest<ThematicAnalysisMessage> req) {
		String url = YeesightApiConstants
				.getApiUrl(YeesightApiConstants.API_THEMATICANALYSIS_GETANALYSIS);
		String result = HttpClientUtil.getYJBaseResponse(url, req);
		System.err.println(result);
		if (!StringUtil.isBlank(result)) {
			return JSON.parseObject(result,
					new TypeReference<YJResponse<ThematicAnalysisResponse>>() {
					});
		}
		return null;
	}
}

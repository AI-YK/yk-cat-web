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
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;

@Service
public class ThematicAnalysisService {
	/**
	 * 专题按照模型分析
	 * 
	 * @param req
	 * @return
	 */
	public YJResponse<ThematicAnalysisResponse> getAnalysis(
			YJRequest<ThematicAnalysisMessage> req) {
		String url = YeesightApiConstants
				.getApiUrl(YeesightApiConstants.API_THEMATICANALYSIS_GETANALYSIS);
		String result = HttpClientUtil.getYJBaseResponse(url, req);
		YJResponse<ThematicAnalysisResponse> res = null;
		if (!StringUtil.isBlank(result)) {
			res = JSON.parseObject(result,
					new TypeReference<YJResponse<ThematicAnalysisResponse>>() {
					});
			setNewsCount(req, res);
		}
		return res;
	}

	/**
	 * 专题分析属性
	 * 
	 * @param req
	 * @return
	 */
	public String getSummary(YJRequest<ThematicAnalysisMessage> req) {
		String url = YeesightApiConstants
				.getApiUrl(YeesightApiConstants.API_THEMATICANALYSIS_GETSUMMARY);
		System.out.println(JSON.toJSONString(req));
		String result = HttpClientUtil.getYJBaseResponse(url, req);
		return result;
	}
 
	private void setNewsCount(YJRequest<ThematicAnalysisMessage> req,
			YJResponse<ThematicAnalysisResponse> res) {
		String summaryInfo = getSummary(req);
		if (!req.getMessage().getModelNo().contains("Gender") || res == null
				|| res.getData() == null || StringUtil.isBlank(summaryInfo)) {
			return;
		}
		JSONObject jsonObj = JSON.parseObject(summaryInfo);
		if (jsonObj == null || !jsonObj.containsKey("data")) {
			return;
		}
		jsonObj = jsonObj.getJSONObject("data");
		if (jsonObj == null || !jsonObj.containsKey("newsAllCount")) {
			return;
		}
		Integer newsAllCount = jsonObj.getInteger("newsAllCount");
		res.getData().getGender().setNews(newsAllCount);
	}
}

package com.ai.yk.protal.web.service.mytopics;

import java.io.Serializable;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.mytopics.MyTopicsMessage;
import com.ai.yk.protal.web.content.mytopics.MyTopicsResponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class MytopicsService implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 查询定制专题列表
	 */
	public YJResponse<MyTopicsResponse> queryMyTopicsList(
			YJRequest<MyTopicsMessage> req) {
		String url = YeesightApiConstants
				.getApiUrl(YeesightApiConstants.API_MYTOPICS_QUERYMYTOPICSLIST);
		String result = HttpClientUtil.getYJBaseResponse(url, req);
		if (!StringUtil.isBlank(result)) {
			YJResponse<MyTopicsResponse> res = JSON.parseObject(result,
					new TypeReference<YJResponse<MyTopicsResponse>>() {
					});
			return res;
		}
		return null;
	}
}

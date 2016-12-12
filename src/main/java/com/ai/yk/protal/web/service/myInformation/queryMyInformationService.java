package com.ai.yk.protal.web.service.myInformation;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.queryMyInformation.QueryMyInformationMessage;
import com.ai.yk.protal.web.content.queryMyInformation.QueryMyInformationResponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class queryMyInformationService {
	/**
	 * 我的采编列表接口
	 */
	public YJResponse<QueryMyInformationResponse> getDataSourceList(YJRequest<QueryMyInformationMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_MYINFORMATION_QUERYMYINFORMATION);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<QueryMyInformationResponse>>(){});
		}
		return null;
	}
}

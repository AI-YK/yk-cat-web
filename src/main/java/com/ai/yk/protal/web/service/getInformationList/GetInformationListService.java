package com.ai.yk.protal.web.service.getInformationList;


import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.getInformationList.GetInformationListMessage;
import com.ai.yk.protal.web.content.getInformationList.GetInformationListReponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

/**
 * @author shancong
 */
@Service
public class GetInformationListService {
	/**
	 * 事件内新闻列表
	 */
	public YJResponse<GetInformationListReponse> getDataSourceList(YJRequest<GetInformationListMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_EVENTDATA_GETINFORMATION);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<GetInformationListReponse>>(){});
		}
		return null;
	}
}

package com.ai.yk.protal.web.service.common;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.queryAreaList.QueryAreaListMessage;
import com.ai.yk.protal.web.content.queryAreaList.QueryAreaListVo;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class QueryAreaListService {
	/**
	 * 国家城市列表
	 */
	public YJResponse<List<QueryAreaListVo>> QueryAreaList(YJRequest<QueryAreaListMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_CONMMON_QUERYAREALIST);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<List<QueryAreaListVo>>>(){});
		}
		return null;
	}
	
	
	
	public static void main(String[] args) {
		QueryAreaListService service = new QueryAreaListService();
		YJRequest<QueryAreaListMessage> req = new YJRequest<QueryAreaListMessage>();
		QueryAreaListMessage message = new QueryAreaListMessage();
		/*message.setClassify("province");
		message.setParentCode("100000");*/
		message.setParentCode("340000");
		message.setClassify("city");
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
		YJResponse<List<QueryAreaListVo>> res = service.QueryAreaList(req);
		System.out.println(JSON.toJSONString(res));
	}
	
	
	
	
	
}

package com.ai.yk.protal.web.service.myInformation;


import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.queryMyInformationDetails.QueryMyInformationDetailsMessage;
import com.ai.yk.protal.web.content.queryMyInformationDetails.QueryMyInformationDetailsVo;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class QueryMyInformationDetailsService {
	/**
	 * 查询我的采编详情接口
	 */
	public YJResponse<QueryMyInformationDetailsVo> queryMyInformationDetails(YJRequest<QueryMyInformationDetailsMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_MYINFORMATION_QUERYMYINFORMATIONDETAILS);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		System.out.println(result);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<QueryMyInformationDetailsVo>>(){});
		}
		return null;
	}
	
	public static void main(String[] args) {
		QueryMyInformationDetailsService service = new QueryMyInformationDetailsService();
		YJRequest<QueryMyInformationDetailsMessage> req = new YJRequest<QueryMyInformationDetailsMessage>();
		QueryMyInformationDetailsMessage message = new QueryMyInformationDetailsMessage();
		message.setId("4028a20e58c305a60158c30600790001");
		message.setCreateId(99538);
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
		YJResponse<QueryMyInformationDetailsVo> res = service.queryMyInformationDetails(req);
		System.out.println(JSON.toJSONString(res));
	}
	
	
}

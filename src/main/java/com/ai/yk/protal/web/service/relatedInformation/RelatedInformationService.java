/**
 * 
 */
package com.ai.yk.protal.web.service.relatedInformation;


import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.relatedInformation.RelatedInformationMessage;
import com.ai.yk.protal.web.content.relatedInformation.RelatedInformationResponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

/**
 * 相关资讯Service
 * @author shancong
 */
@Service
public class RelatedInformationService {
	/**
	 * 相关资讯列表
	 */
	public YJResponse<RelatedInformationResponse> getRelatedInformation(YJRequest<RelatedInformationMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_RELATED_RELATEDINFORMATION);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<RelatedInformationResponse>>(){});
		}
		return null;
	}
	

	
	public static void main(String[] args) throws Exception {
		
		RelatedInformationService service = new RelatedInformationService();
		YJRequest<RelatedInformationMessage> req = new YJRequest<RelatedInformationMessage>();
		RelatedInformationMessage message = new RelatedInformationMessage();
		message.setSrcTitle("中国");
		
		req.setMessage(message);
		YJResponse<RelatedInformationResponse> res = service.getRelatedInformation(req);
		//System.out.println(JSON.toJSONString(res));
		
	}
}

package com.ai.yk.protal.web.service.share;


import org.springframework.stereotype.Service;

import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.queryDicByTypeAndLanguageForNews.QueryDicByTypeAndLanguageForNewsMessage;
import com.ai.yk.protal.web.content.queryDicByTypeAndLanguageForNews.QueryDicByTypeAndLanguageForNewsReponse;
import com.ai.yk.protal.web.content.share.ShareMessage;
import com.ai.yk.protal.web.service.queryDicByTypeAndLanguageForNews.QueryDicByTypeAndLanguageForNewsService;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;

@Service
public class ShareService {

	/**
	 * 增加分享接口
	 * @return shancong
	 */
	@SuppressWarnings("rawtypes")
	public YJResponse saveMyCustomized(YJRequest<ShareMessage> req) {
		
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_MYINFORMATION_ADDSHAREMYINFORMATION);
		
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		return JSON.parseObject(result, YJResponse.class);
	}
	
	/*public static void main(String[] args) throws Exception {
		
		ShareService service = new ShareService();
		ShareMessage message = new ShareMessage();
		message.setCreateId("99538");
		message.setId("66148079592076611494249702EF8A1");
		YJRequest<ShareMessage> req = new YJRequest<ShareMessage>();
		req.setMessage(message);
		YJResponse<QueryDicByTypeAndLanguageForNewsReponse> res = service.saveMyCustomized(req);
		System.out.println(JSON.toJSONString(res));
		
		
	}*/
}

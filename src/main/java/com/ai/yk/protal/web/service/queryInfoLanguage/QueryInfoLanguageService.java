package com.ai.yk.protal.web.service.queryInfoLanguage;


import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.queryInfoLanguage.QueryInfoLanguageMessage;
import com.ai.yk.protal.web.content.queryInfoLanguage.QueryInfoLanguageReponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

/**
 * <br>
 * 获取资讯语言接口service
 * 
 * @author shancong
 */
@Service
public class QueryInfoLanguageService {
	/**
	 * 获取资讯语言接口
	 */
	public YJResponse<QueryInfoLanguageReponse> getQueryInfoLanguage(YJRequest<QueryInfoLanguageMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_COMMON_QUERYINFOLANGUAGE);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<QueryInfoLanguageReponse>>(){});
		}
		return null;
	}
	
	
	public static void main(String[] args) throws Exception {
		
		QueryInfoLanguageService service = new QueryInfoLanguageService();
		YJRequest<QueryInfoLanguageMessage> req = new YJRequest<QueryInfoLanguageMessage>();
		QueryInfoLanguageMessage message = new QueryInfoLanguageMessage();
		message.setLanguage("zh");
		message.setLanguageType("0");
		
		
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
		YJResponse<QueryInfoLanguageReponse> res = service.getQueryInfoLanguage(req);
		System.out.println(JSON.toJSONString(res));
		
		
		/*String str ="{'data':{'resultCount':10,'resultList':[{'mediaNameSrc':'中国结婚论坛-彩妆造型','mediaId':'10021','mediaNameZh':'中国结婚论坛-彩妆造型','mediaNameEn':'中国结婚论坛-彩妆造型','url':'chinajiehun.com'}]},'head':{'result':'true','message':'ok'}}";
		YJResponse<GetDataSourceListReponse> data =JSON.parseObject(str, new TypeReference<YJResponse<GetDataSourceListReponse>>(){});
		System.out.println(data.getData().getResultCount());*/
	}
}

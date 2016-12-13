package com.ai.yk.protal.web.service.queryDicByTypeAndLanguageForNews;


import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.queryDicByTypeAndLanguageForNews.QueryDicByTypeAndLanguageForNewsMessage;
import com.ai.yk.protal.web.content.queryDicByTypeAndLanguageForNews.QueryDicByTypeAndLanguageForNewsReponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

/**
 * <br>
 * 根据类型和语言获取数据字典中的所有记录接口Service
 * 
 * @author shancong
 */
@Service
public class QueryDicByTypeAndLanguageForNewsService {
	/**
	 * 根据类型和语言获取数据字典中的所有记录
	 */
	public YJResponse<QueryDicByTypeAndLanguageForNewsReponse> getQueryAreaOrEconomicOrganizations(YJRequest<QueryDicByTypeAndLanguageForNewsMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_COMMON_QUERYDICBYTYPEANDLANGUAGEFORNEWS);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<QueryDicByTypeAndLanguageForNewsReponse>>(){});
		}
		return null;
	}
	
	
	public static void main(String[] args) throws Exception {
		
		QueryDicByTypeAndLanguageForNewsService service = new QueryDicByTypeAndLanguageForNewsService();
		YJRequest<QueryDicByTypeAndLanguageForNewsMessage> req = new YJRequest<QueryDicByTypeAndLanguageForNewsMessage>();
		QueryDicByTypeAndLanguageForNewsMessage message = new QueryDicByTypeAndLanguageForNewsMessage();
		message.setType("SJYYXL");
		message.setLanguage("zh");
		
		
		
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
		YJResponse<QueryDicByTypeAndLanguageForNewsReponse> res = service.getQueryAreaOrEconomicOrganizations(req);
		System.out.println(JSON.toJSONString(res));
		
		
		/*String str ="{'data':{'resultCount':10,'resultList':[{'mediaNameSrc':'中国结婚论坛-彩妆造型','mediaId':'10021','mediaNameZh':'中国结婚论坛-彩妆造型','mediaNameEn':'中国结婚论坛-彩妆造型','url':'chinajiehun.com'}]},'head':{'result':'true','message':'ok'}}";
		YJResponse<GetDataSourceListReponse> data =JSON.parseObject(str, new TypeReference<YJResponse<GetDataSourceListReponse>>(){});
		System.out.println(data.getData().getResultCount());*/
	}
}

package com.ai.yk.protal.web.service.queryareaoreconomicorganizations;


import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.queryInfoLanguage.QueryInfoLanguageMessage;
import com.ai.yk.protal.web.content.queryInfoLanguage.QueryInfoLanguageReponse;
import com.ai.yk.protal.web.content.queryareaoreconomicorganizations.QueryAreaOrEconomicOrganizationsMessage;
import com.ai.yk.protal.web.content.queryareaoreconomicorganizations.QueryDicByTypeAndLanguageReponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

/**
 * <br>
 * 获取热门国家表service
 * 
 * @author shancong
 */
@Service
public class QueryAreaOrEconomicOrganizationsService {
	/**
	 * 获取热门国家表接口
	 */
	public YJResponse<QueryDicByTypeAndLanguageReponse> getQueryAreaOrEconomicOrganizations(YJRequest<QueryAreaOrEconomicOrganizationsMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_COMMON_QUERYAREAOREO);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<QueryDicByTypeAndLanguageReponse>>(){});
		}
		return null;
	}
	
	
	public static void main(String[] args) throws Exception {
		
		QueryAreaOrEconomicOrganizationsService service = new QueryAreaOrEconomicOrganizationsService();
		YJRequest<QueryAreaOrEconomicOrganizationsMessage> req = new YJRequest<QueryAreaOrEconomicOrganizationsMessage>();
		QueryAreaOrEconomicOrganizationsMessage message = new QueryAreaOrEconomicOrganizationsMessage();
		message.setLanguage("zh");
		message.setType("3");
		
		
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
		YJResponse<QueryDicByTypeAndLanguageReponse> res = service.getQueryAreaOrEconomicOrganizations(req);
		System.out.println(JSON.toJSONString(res));
		
		
		/*String str ="{'data':{'resultCount':10,'resultList':[{'mediaNameSrc':'中国结婚论坛-彩妆造型','mediaId':'10021','mediaNameZh':'中国结婚论坛-彩妆造型','mediaNameEn':'中国结婚论坛-彩妆造型','url':'chinajiehun.com'}]},'head':{'result':'true','message':'ok'}}";
		YJResponse<GetDataSourceListReponse> data =JSON.parseObject(str, new TypeReference<YJResponse<GetDataSourceListReponse>>(){});
		System.out.println(data.getData().getResultCount());*/
	}
}

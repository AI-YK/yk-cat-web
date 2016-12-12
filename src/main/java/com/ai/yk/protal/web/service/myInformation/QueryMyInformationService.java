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
public class QueryMyInformationService {
	/**
	 * 我的采编列表接口
	 */
	public YJResponse<QueryMyInformationResponse> getQueryMyInformationList(YJRequest<QueryMyInformationMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_MYINFORMATION_QUERYMYINFORMATION);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<QueryMyInformationResponse>>(){});
		}
		return null;
	}
	
	public static void main(String[] args) throws Exception {
		
		QueryMyInformationService service = new QueryMyInformationService();
		YJRequest<QueryMyInformationMessage> req = new YJRequest<QueryMyInformationMessage>();
		QueryMyInformationMessage message = new QueryMyInformationMessage();
		message.setCreateId(9887);
		message.setPageSize("5");
		message.setPageNo("1");
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
		YJResponse<QueryMyInformationResponse> res = service.getQueryMyInformationList(req);
		System.out.println(JSON.toJSONString(res));
		
		
		/*String str ="{'data':{'resultCount':10,'resultList':[{'mediaNameSrc':'中国结婚论坛-彩妆造型','mediaId':'10021','mediaNameZh':'中国结婚论坛-彩妆造型','mediaNameEn':'中国结婚论坛-彩妆造型','url':'chinajiehun.com'}]},'head':{'result':'true','message':'ok'}}";
		YJResponse<GetDataSourceListReponse> data =JSON.parseObject(str, new TypeReference<YJResponse<GetDataSourceListReponse>>(){});
		System.out.println(data.getData().getResultCount());*/
	}
	
	
}

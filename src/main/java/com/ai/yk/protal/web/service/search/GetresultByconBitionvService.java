/**
 * 
 */
package com.ai.yk.protal.web.service.search;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.getresultbyconditionv.GetresultByconBitionvMessage;
import com.ai.yk.protal.web.content.getresultbyconditionv.GetresultByconBitionvReponse;
import com.ai.yk.protal.web.content.getresultbyconditionv.GetresultByconBitionvSocialVo;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;

/**
 *shancong
 */
@Service
public class GetresultByconBitionvService {
	
	/**
	 * 专题数据查询
	 */
	public YJResponse<GetresultByconBitionvReponse> getResultByconBitionv(YJRequest<GetresultByconBitionvMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_MYTOPICS_GETRESULTBYCONDITIONV2);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			if("news".equals(req.getMessage().getMediaType())){
				return JSON.parseObject(result, new TypeReference<YJResponse<GetresultByconBitionvReponse>>(){});
			}else{
				JSONObject jsonObject = JSON.parseObject(result);
				if(jsonObject.containsKey("data")){
					YJResponse<GetresultByconBitionvReponse> res =JSON.parseObject(result, new TypeReference<YJResponse<GetresultByconBitionvReponse>>(){});
					jsonObject =(JSONObject) jsonObject.get("data");
					String str =JSON.toJSONString(jsonObject.get("resultList"));
					List<GetresultByconBitionvSocialVo> resultSocialList = JSON.parseObject(str, new TypeReference<List<GetresultByconBitionvSocialVo>>(){});
					res.getData().setResultList(null);
					res.getData().setResultSocialList(resultSocialList);
					return res;
				}
			}
		}
		return null;
	}
	
	public static void main(String[] args) throws Exception {
		
			GetresultByconBitionvService service = new GetresultByconBitionvService();
			YJRequest<GetresultByconBitionvMessage> req = new YJRequest<GetresultByconBitionvMessage>();
			GetresultByconBitionvMessage message = new GetresultByconBitionvMessage();
			message.setId("");
			message.setMediaType("news");
			
			req.setMessage(message);
			System.out.println(JSON.toJSON(req));
			YJResponse<GetresultByconBitionvReponse> res = service.getResultByconBitionv(req);
			System.out.println(JSON.toJSONString(res));
	
	}
	
	
	
}

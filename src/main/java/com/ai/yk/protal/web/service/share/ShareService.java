package com.ai.yk.protal.web.service.share;


import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.share.ShareCountVo;
import com.ai.yk.protal.web.content.share.ShareMessage;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class ShareService {
	/**
	 * 查询分享收藏次数
	 * @return
	 */
   public YJResponse<ShareCountVo> queryShareCount(YJRequest<ShareMessage> req){
	   String url = YeesightApiConstants
				.getApiUrl(YeesightApiConstants.API_MYINFORMATION_QUERYSHARECOUNT);
		String result = HttpClientUtil.getYJBaseResponse(url, req);
		if (!StringUtil.isBlank(result)) {
			YJResponse<ShareCountVo> res = JSON.parseObject(result,
					new TypeReference<YJResponse<ShareCountVo>>() {
					});
			return res;
		}
		return null;
   }
	/**
	 * 增加分享接口
	 * @return shancong
	 */
	@SuppressWarnings("rawtypes")
	public YJResponse saveMyCustomized(YJRequest<ShareMessage> req) {
		
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_MYINFORMATION_ADDSHAREMYINFORMATION);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if (!StringUtil.isBlank(result)) {
		   return JSON.parseObject(result, YJResponse.class);
		}
		return null;
	}
	
	/*public static void main(String[] args) throws Exception {
		
		ShareService service = new ShareService();
		ShareMessage message = new ShareMessage();
		message.setCreateId("99538");
		message.setId("66148079592076611494249702EF8A1");
		YJRequest<ShareMessage> req = new YJRequest<ShareMessage>();
		req.setMessage(message);
		YJResponse<QueryDicByTypeAndLanguageForNewsReponse> res = service.saveMyCustomized(req);
		//System.out.println(JSON.toJSONString(res));
		
		
	}*/
}

/**
 * 
 */
package com.ai.yk.protal.web.service.common;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.common.DicListResonse;
import com.ai.yk.protal.web.content.common.DicMessage;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

/**
 * 公共service<br>
 * Date: 2016年12月6日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
@Service
public class CommonService {
	/**
	 * 查询数据字典
	 * @param req
	 * @return
	 */
		public YJResponse<DicListResonse> queryDicByTypeAndLanguageForNews(YJRequest<DicMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_COMMON_QUERYDICBYTYPEANDLANGUAGEFORNEWS);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<DicListResonse>>(){});
		}
		return null;
	}
}

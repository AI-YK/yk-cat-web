/**
 * 
 */
package com.ai.yk.protal.web.service.search;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.YJBaseRequest;
import com.ai.yk.protal.web.content.YJBaseResponse;
import com.ai.yk.protal.web.content.getdatasourcelist.GetDataSourceListMessage;
import com.ai.yk.protal.web.content.getdatasourcelist.GetDataSourceListReponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

/**
 * <br>
 * Date: 2016年12月6日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
@Service
public class SearchService {
	/**
	 * 搜索数据源列表
	 */
	public YJBaseResponse<GetDataSourceListReponse> getDataSourceList(YJBaseRequest<GetDataSourceListMessage> req) {
		String url = YeesightApiUrlConstants.getApiUrl(YeesightApiUrlConstants.API_SEARCH_GETDATASOURCELIST);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJBaseResponse<GetDataSourceListReponse>>(){});
		}
		return null;
	}

	public static void main(String[] args) throws Exception {
		String str ="{'data':{'resultCount':10,'resultList':[{'mediaNameSrc':'中国结婚论坛-彩妆造型','mediaId':'10021','mediaNameZh':'中国结婚论坛-彩妆造型','mediaNameEn':'中国结婚论坛-彩妆造型','url':'chinajiehun.com'}]},'head':{'result':'true','message':'ok'}}";
		YJBaseResponse<GetDataSourceListReponse> data =JSON.parseObject(str, new TypeReference<YJBaseResponse<GetDataSourceListReponse>>(){});
		System.out.println(data.getData().getResultCount());
	}
}

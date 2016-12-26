/**
 * 
 */
package com.ai.yk.protal.web.service.search;

import java.util.List;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.BeanUtils;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.getdatasourcelist.GetDataSourceListMessage;
import com.ai.yk.protal.web.content.getdatasourcelist.GetDataSourceListReponse;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicMessage;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyMessage;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetyResponse;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchPublicSafetySocialVo;
import com.ai.yk.protal.web.content.searchPublicSafety.SearchTopicMessage;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
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
	public YJResponse<GetDataSourceListReponse> getDataSourceList(YJRequest<GetDataSourceListMessage> req) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_SEARCH_GETDATASOURCELIST);
		String result =HttpClientUtil.getYJBaseResponse(url,req);
		if(!StringUtil.isBlank(result)){
			return JSON.parseObject(result, new TypeReference<YJResponse<GetDataSourceListReponse>>(){});
		}
		return null;
	}
	
	/**
	 * 公共安全事件检索 新闻检索
	 */
	public YJResponse<SearchPublicSafetyResponse> getSearchPublicSafety(SearchPublicSafetyMessage searchPublicSafetyMessage) {
		String url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_YEESIGHTFORPUBLICAFFAIRS_SEARCHPUBLICSAFETY);
		YJRequest<SearchPublicMessage> req = new YJRequest<SearchPublicMessage>();
		if(searchPublicSafetyMessage.getIsTopic()==1){
			url = YeesightApiConstants.getApiUrl(YeesightApiConstants.API_MYTOPICS_GETRESULTBYCONDITIONV2);
			SearchTopicMessage message = new SearchTopicMessage();
			BeanUtils.copyProperties(message, searchPublicSafetyMessage);
			req.setMessage(message);
		}else{
			SearchPublicMessage message = new SearchPublicMessage();
			BeanUtils.copyProperties(message, searchPublicSafetyMessage);
			req.setMessage(message);
		}
		String  result = HttpClientUtil.getYJBaseResponse(url,req);	
		if(!StringUtil.isBlank(result)){
			if("news".equals(searchPublicSafetyMessage.getMediaType())){
				return JSON.parseObject(result, new TypeReference<YJResponse<SearchPublicSafetyResponse>>(){});
			}else{
				JSONObject jsonObject = JSON.parseObject(result);
				if(jsonObject.containsKey("data")){
					YJResponse<SearchPublicSafetyResponse> res =JSON.parseObject(result, new TypeReference<YJResponse<SearchPublicSafetyResponse>>(){});
					jsonObject =(JSONObject) jsonObject.get("data");
					String str =JSON.toJSONString(jsonObject.get("resultList"));
					List<SearchPublicSafetySocialVo> resultSocialList = JSON.parseObject(str, new TypeReference<List<SearchPublicSafetySocialVo>>(){});
					res.getData().setResultList(null);
					res.getData().setResultSocialList(resultSocialList);
					return res;
				}
			}
		}
		return null;
	}

}

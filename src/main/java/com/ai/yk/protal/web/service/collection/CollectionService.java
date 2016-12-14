package com.ai.yk.protal.web.service.collection;

import org.springframework.stereotype.Service;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.collection.CollectionMessage;
import com.ai.yk.protal.web.content.collection.CollectionResponse;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;

@Service
public class CollectionService {
	/**
	 * 添加收藏
	 * 
	 * @param req
	 * @return
	 */
	public YJResponse<CollectionResponse> addCollection(
			YJRequest<CollectionMessage> req) {
		String url = YeesightApiConstants
				.getApiUrl(YeesightApiConstants.API_MYCOLLECTION_COLLECTIONMYINFORMATION);
		String result = HttpClientUtil.getYJBaseResponse(url, req);
		if (!StringUtil.isBlank(result)) {
			return JSON.parseObject(result,
					new TypeReference<YJResponse<CollectionResponse>>() {
					});
		}
		return null;
	}
	/**
	 * 删除收藏
	 * 
	 * @param req
	 * @return
	 */
	public YJResponse<CollectionResponse> delCollection(
			YJRequest<CollectionMessage> req) {
		String url = YeesightApiConstants
				.getApiUrl(YeesightApiConstants.API_MYCOLLECTION_DELETEMYCOLLECTION);
		String result = HttpClientUtil.getYJBaseResponse(url, req);
		if (!StringUtil.isBlank(result)) {
			return JSON.parseObject(result,
					new TypeReference<YJResponse<CollectionResponse>>() {
					});
		}
		return null;
	}
	/**
	 * 查询是否收藏
	 * 
	 * @param req
	 * @return
	 */
	public YJResponse<CollectionResponse> queryIsCollection(
			YJRequest<CollectionMessage> req) {
		String url = YeesightApiConstants
				.getApiUrl(YeesightApiConstants.API_MYCOLLECTION_ISCOLLECTION);
		String result = HttpClientUtil.getYJBaseResponse(url, req);
		if (!StringUtil.isBlank(result)) {
			return JSON.parseObject(result,
					new TypeReference<YJResponse<CollectionResponse>>() {
					});
		}
		return null;
	}
}

/**
 * 
 */
package com.ai.yk.protal.web.service.search;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.ai.yk.protal.web.constants.YeesightApiUrlConstants;
import com.ai.yk.protal.web.content.RequestHead;
import com.ai.yk.protal.web.content.YJBaseRequest;
import com.ai.yk.protal.web.content.getdatasourcelist.GetDataSourceListMessage;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;

/**
 * <br>
 * Date: 2016年12月6日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
@Service
public class SearchService {
	private static final Logger LOGGER = LoggerFactory
			.getLogger(SearchService.class);

	/**
	 * 搜索数据源列表
	 */
	public String getDataSourceList(YJBaseRequest<GetDataSourceListMessage> req) {
		try {
			HttpClientUtil.sendPostRequest(
							YeesightApiUrlConstants
									.getApiUrl(YeesightApiUrlConstants.API_SEARCH_GETDATASOURCELIST),
							req);
		} catch (Exception e) {
			LOGGER.error(e.getMessage(),e);
		}

		return null;
	}

	public static void main(String[] args) throws Exception {
		
	}
}

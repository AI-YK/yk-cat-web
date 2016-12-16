package com.ai.yk.protal.web.service.translate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.ai.yk.protal.web.constants.YeesightApiConstants;
import com.ai.yk.protal.web.content.translate.TranslateMessage;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.alibaba.fastjson.JSON;

@Service
public class TranslateService {
	private static final Logger LOGGER = LoggerFactory
			.getLogger(TranslateService.class);
	public String translate(TranslateMessage req) {

		try {
			return HttpClientUtil.sendPostRequest(
					YeesightApiConstants.yeesightTranslateportUrl,
					JSON.toJSONString(req), true);
		} catch (Exception e) {
			LOGGER.error(e.getMessage(),e);
		}
		return null;
	}
}

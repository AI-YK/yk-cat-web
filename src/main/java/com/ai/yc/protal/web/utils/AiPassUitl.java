package com.ai.yc.protal.web.utils;

import com.ai.opt.sdk.components.ccs.CCSClientFactory;
import com.ai.opt.sdk.components.mcs.MCSClientFactory;
import com.ai.paas.ipaas.ccs.IConfigClient;
import com.ai.paas.ipaas.mcs.interfaces.ICacheClient;
import com.ai.paas.ipaas.util.StringUtil;
import com.ai.yc.protal.web.constants.Constants;
import com.ai.yc.protal.web.constants.Constants.Register;
import com.alibaba.fastjson.JSONObject;

public class AiPassUitl {

	/**
	 * 获取缓存客户端 TODO 区分国内、国外
	 * 
	 * @return
	 * @author mimw
	 */
	public static ICacheClient getCacheClient() {
		// 获取cache客户端
		ICacheClient iCacheClient = MCSClientFactory
				.getCacheClient(Constants.DEFAULT_YC_CACHE_NAMESPACE);
		return iCacheClient;
	}

	/**
	 * 获取公共缓存
	 * @return
     */
	public static ICacheClient getCommonCacheClient(){
		return MCSClientFactory.getCacheClient(Constants.DEFAULT_COMMON_CACHE_NAMESPACE);
	}
    /**
     * 获取验证码配置
     * @return
     */
	public static JSONObject getVerificationCodeConfig() {
		try {
			IConfigClient defaultConfigClient = CCSClientFactory
					.getDefaultConfigClient();
			String info = defaultConfigClient
					.get(Register.VERIFICATION_CCS_NAMESPACE);
			if (!StringUtil.isBlank(info)) {
				JSONObject json = JSONObject.parseObject(info);
				return json;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}
}

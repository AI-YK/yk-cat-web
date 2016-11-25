/**
 * 
 */
package com.ai.yc.protal.web.controller.user.common;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;
import java.util.Locale;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.util.CollectionUtil;
import com.ai.opt.sdk.util.RandomUtil;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.paas.ipaas.i18n.ResWebBundle;
import com.ai.paas.ipaas.mcs.interfaces.ICacheClient;
import com.ai.paas.ipaas.util.StringUtil;
import com.ai.yc.common.api.country.interfaces.IGnCountrySV;
import com.ai.yc.common.api.country.param.CountryRequest;
import com.ai.yc.common.api.country.param.CountryResponse;
import com.ai.yc.common.api.country.param.CountryVo;
import com.ai.yc.protal.web.constants.Constants;
import com.ai.yc.protal.web.constants.Constants.EmailVerify;
import com.ai.yc.protal.web.constants.Constants.PhoneVerify;
import com.ai.yc.protal.web.constants.Constants.PictureVerify;
import com.ai.yc.protal.web.constants.Constants.Register;
import com.ai.yc.protal.web.constants.Constants.UcenterOperation;
import com.ai.yc.protal.web.model.mail.SendEmailRequest;
import com.ai.yc.protal.web.model.sms.SmsRequest;
import com.ai.yc.protal.web.utils.AiPassUitl;
import com.ai.yc.protal.web.utils.SmsSenderUtil;
import com.ai.yc.protal.web.utils.UserUtil;
import com.ai.yc.protal.web.utils.VerifyUtil;
import com.ai.yc.ucenter.api.members.interfaces.IUcMembersOperationSV;
import com.ai.yc.ucenter.api.members.param.opera.UcMembersGetOperationcodeRequest;
import com.ai.yc.ucenter.api.members.param.opera.UcMembersGetOperationcodeResponse;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

/**
 * 用户公共Controller<br>
 * Date: 2016年11月9日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
@RequestMapping("/userCommon")
@Controller
public class UserCommonController {
	private static final Logger LOG = LoggerFactory
			.getLogger(UserCommonController.class);
	@Autowired
	ResWebBundle rb;

	/**
	 * 加载国家
	 */
	@RequestMapping("/loadCountry")
	@ResponseBody
	public ResponseData<List<CountryVo>> loadCountry() {
		if (LOG.isDebugEnabled()) {
			LOG.debug("-------加载国家-------");
		}
		String msg = "ok";
		List<CountryVo> result = null;
		ICacheClient iCacheClient = AiPassUitl.getCacheClient();
		String countryList = iCacheClient
				.get(Register.REGISTER_COUNTRY_LIST_KEY);
		if (!StringUtil.isBlank(countryList)) {
			result = JSON.parseArray(countryList, CountryVo.class);
			return new ResponseData<List<CountryVo>>(
					ResponseData.AJAX_STATUS_SUCCESS, msg, result);
		}
		CountryResponse res = null;
		try {
			res = DubboConsumerFactory.getService(IGnCountrySV.class)
					.queryCountry(new CountryRequest());
		} catch (Exception e) {
			msg = "error";
			LOG.error(e.getMessage(), e);
			return new ResponseData<List<CountryVo>>(
					ResponseData.AJAX_STATUS_FAILURE, msg);
		}
		if (res != null && res.getResponseHeader() != null
				&& res.getResponseHeader().isSuccess()) {
			result = res.getResult();
		}
		if (!CollectionUtil.isEmpty(result)) {
			iCacheClient.setex(Register.REGISTER_COUNTRY_LIST_KEY,
					Register.REGISTER_COUNTRY_LIST_KEY_OVERTIME,
					JSON.toJSONString(result));
		}
		return new ResponseData<List<CountryVo>>(
				ResponseData.AJAX_STATUS_SUCCESS, msg, result);
	}

	/**
	 * 获取图片验证码
	 */
	@RequestMapping("/imageVerifyCode")
	public void imageVerifyCode(HttpServletRequest request,
			HttpServletResponse response) {
		String cacheKey = PictureVerify.VERIFY_IMAGE_KEY
				+ request.getSession().getId();
		BufferedImage image = VerifyUtil.getImageVerifyCode(
				Constants.DEFAULT_YC_CACHE_NAMESPACE, cacheKey, 100, 38);
		try {
			ImageIO.write(image, "PNG", response.getOutputStream());
		} catch (IOException e) {
			LOG.error("生成图片验证码错误：" + e);
		}
	}

	/**
	 * 校验图片证码
	 */
	@RequestMapping("/checkImageVerifyCode")
	@ResponseBody
	public ResponseData<Boolean> checkImageVerifyCode(HttpServletRequest request) {
		String msg = rb.getMessage("ycregisterMsg.verificationCodeError");
		ResponseData<Boolean> result = VerifyUtil.checkImageVerifyCode(request,
				msg);
		return result;
	}

	/**
	 * 发送短信验证码
	 */
	@RequestMapping("/sendSmsCode")
	@ResponseBody
	public ResponseData<Boolean> sendSmsCode(HttpServletRequest request,
			HttpServletResponse response) {
		String phone = request.getParameter("phone");
		String type = request.getParameter("type");
		SmsRequest req = new SmsRequest();
		req.setPhone(phone);
		/** 手机验证码key **/
		String codeKey = null;
		/** 手机验证码超时时间 **/
		String codeOverTimeKey = null;
		/** 最多发送次数key **/
		String maxCountKey = null;
		/** 最多发送次数超时时间key **/
		String maxCountOverTimeKey = null;
		/** 当前发送次数key **/
		String nowCountKey = null;
		if (StringUtil.isBlank(type)) {
			type = UcenterOperation.OPERATION_TYPE_PHONE_ACTIVATE;
		}
		if (UcenterOperation.OPERATION_TYPE_PHONE_ACTIVATE.equals(type)) {// 注册手机激活码
			codeKey = PhoneVerify.REGISTER_PHONE_CODE + phone;
			codeOverTimeKey = PhoneVerify.REGISTER_PHONE_CODE_OVERTIME;
			nowCountKey = PhoneVerify.REGISTER_PHONE_CODE_COUNT + phone;
			maxCountKey = PhoneVerify.REGISTER_PHONE_CODE_MAX_COUNT;
			maxCountOverTimeKey = PhoneVerify.REGISTER_PHONE_CODE_MAX_COUNT_OVERTIME;
		} else if (UcenterOperation.OPERATION_TYPE_PHONE_VERIFY.equals(type)) {// 手机验证码
			codeKey = PhoneVerify.UPDATE_DATA_PHONE_CODE + phone;
			codeOverTimeKey = PhoneVerify.UPDATE_DATA_PHONE_CODE_OVERTIME;
			nowCountKey = PhoneVerify.UPDATE_DATA_PHONE_CODE_COUNT + phone;
			maxCountKey = PhoneVerify.UPDATE_DATA_PHONE_CODE_MAX_COUNT;
			maxCountOverTimeKey = PhoneVerify.UPDATE_DATA_PHONE_CODE_MAX_COUNT_OVERTIME;
		}
		req.setCodeKey(codeKey);
		req.setCodeOverTimeKey(codeOverTimeKey);
		req.setMaxCountKey(maxCountKey);
		req.setMaxCountOverTimeKey(maxCountOverTimeKey);
		req.setNowCountKey(nowCountKey);
		String uid = request.getParameter("uid");
		if(StringUtil.isBlank(uid)){
			uid = UserUtil.getUserId();
		}
		return sendSms(request,req, type, uid, phone);

	}

	/**
	 * 校验短信验证码
	 */
	@RequestMapping("/checkSmsCode")
	@ResponseBody
	public ResponseData<Boolean> checkSmsCode(HttpServletRequest request,
			HttpServletResponse response) {
		String phone = request.getParameter("phone");
		String type = request.getParameter("type");
		String ckValue = request.getParameter("code");
		boolean isOk = VerifyUtil.checkSmsCode(phone, type, ckValue);
		String msg = "ok";
		if (!isOk) {
			msg = rb.getMessage("ycfindpassword.smsCodeError");
		}
		String isRemove = request.getParameter("isRemove");
		if(isOk &&"true".equals(isRemove)){
			String codeKey="";
			if (PhoneVerify.PHONE_CODE_REGISTER_OPERATION.equals(type)) {// 注册
				codeKey = PhoneVerify.REGISTER_PHONE_CODE + phone;
			} else if (PhoneVerify.PHONE_CODE_UPDATE_DATA_OPERATION.equals(type)) {// 修改资料
				codeKey = PhoneVerify.UPDATE_DATA_PHONE_CODE + phone;
			}
			VerifyUtil.delRedisValue(codeKey);
		}
		return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS, msg,
				isOk);
	}

	private ResponseData<Boolean> sendSms(HttpServletRequest request,SmsRequest req, String type,
			String uid, String phone) {
		ICacheClient iCacheClient = AiPassUitl.getCacheClient();
		JSONObject config = AiPassUitl.getVerificationCodeConfig();
		// 最多发送次数 key
		int maxCount = config.getIntValue(req.getMaxCountKey());
		// 当前发送次数
		Integer nowCount = 0;
		String sendCount = iCacheClient.get(req.getNowCountKey());
		if (!StringUtil.isBlank(sendCount)) {
			nowCount = Integer.parseInt(sendCount);
		}
		String msg = rb.getMessage("ycregisterMsg.sendSmsError");
		if (nowCount > maxCount) {
			msg = rb.getMessage("ycregisterMsg.verificationCodeCountError",
					new Object[] { maxCount });
			return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS,
					msg, false);
		}
		Object[] ucenterRes = getUcenterOperationCode(type, uid, phone);
		if (!(boolean) ucenterRes[0]) {
			msg = (String) ucenterRes[2];
			return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS,
					msg, false);
		}
		String randomStr = (String) ucenterRes[1];// RandomUtil.randomNum(6);
		req.setContent("短信验证码:" + randomStr);
		boolean sendOk =  SmsSenderUtil.sendMessage(phone,
								 req.getContent());
		if (sendOk) {
			if (UcenterOperation.OPERATION_TYPE_PHONE_ACTIVATE.equals(type)) {// 手机注册操作有uid
			    request.getSession().setAttribute(req.getCodeKey()+PhoneVerify.PHONE_CODE_REGISTER_UID, ucenterRes[3]);
			}
			// 最多发送次数超时时间
			int maxOverTimeCount = config.getIntValue(req
					.getMaxCountOverTimeKey());
			nowCount = nowCount + 1;
			iCacheClient.setex(req.getNowCountKey(), maxOverTimeCount,
					String.valueOf(nowCount));
			// 手机验证码超时时间
			int overTime = config.getIntValue(req.getCodeOverTimeKey());
			iCacheClient.setex(req.getCodeKey(), overTime, randomStr);
			msg = rb.getMessage("ycregisterMsg.sendSmsSuccess");
			return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS,
					msg, true);
		}
		return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS, msg,
				false);
	}

	/**
	 * 调用ucenter生成操作码
	 */
	private Object[] getUcenterOperationCode(String operationtype, String uid,
			String userinfo) {
		UcMembersGetOperationcodeRequest req = new UcMembersGetOperationcodeRequest();
		req.setTenantId(Constants.DEFAULT_TENANT_ID);
		req.setOperationtype(operationtype);
		if (!StringUtil.isBlank(uid)) {
			req.setUid(Integer.parseInt(uid));
		}
		if (!StringUtil.isBlank(userinfo)) {
			req.setUserinfo(userinfo);
		}
		boolean isOk = false;
		String code = "";
		String msg = "";
		String resUid ="";
		UcMembersGetOperationcodeResponse res = DubboConsumerFactory
				.getService(IUcMembersOperationSV.class)
				.ucGetOperationcode(req);
		LOG.info("ucenter 生成验证码返回：" + JSON.toJSONString(res));
		if (res != null && res.getMessage() != null
				&& res.getMessage().isSuccess() && res.getCode() != null
				&& res.getCode().getCodeNumber() != null) {
			if (res.getCode().getCodeNumber() == 1) {
				isOk = true;
				code = res.getDate().get("operationcode") + "";
				resUid =res.getDate().get("uid") + "";
			} else {
				msg = res.getCode().getCodeMessage();
			}

		}

		return new Object[] { isOk, code, msg,resUid};
	}

	/**
	 * 发送邮件
	 */
	@RequestMapping("/sendEmail")
	@ResponseBody
	public ResponseData<Boolean> sendEmail(HttpServletRequest request) {
		String email = request.getParameter("email");
		String type = request.getParameter("type");
		String randomStr = "";
		String msg = "";
		if (UcenterOperation.OPERATION_TYPE_EMAIL_VERIFY.equals(type)) {// 邮箱验证
			randomStr = RandomUtil.randomNum(6);
			String uid = UserUtil.getUserId();
			if (StringUtil.isBlank(uid)) {
				uid = request.getParameter("uid");
			}
			Object[] ucenterRes = getUcenterOperationCode(type, uid, email);
			if (!(boolean) ucenterRes[0]) {
				msg = (String) ucenterRes[2];
				return new ResponseData<Boolean>(
						ResponseData.AJAX_STATUS_SUCCESS, msg, false);
			}
			randomStr = (String) ucenterRes[1];
		}
		SendEmailRequest emailRequest = new SendEmailRequest();
		emailRequest.setTomails(new String[] { email });
		emailRequest.setData(new String[] { "zhangsan", randomStr });
		Locale locale = rb.getDefaultLocale();
		String _template = "";
		String _subject = "";
		if (Locale.SIMPLIFIED_CHINESE.toString().equals(locale.toString())) {
			_template = Register.REGISTER_EMAIL_ZH_CN_TEMPLATE;
			_subject = "中文主题";
		} else if (Locale.US.toString().equals(locale.toString())) {
			_template = Register.REGISTER_EMAIL_EN_US_TEMPLATE;
			_subject = "英文主题";
		}
		emailRequest.setTemplateURL(_template);
		emailRequest.setSubject(_subject);
		boolean isOk = VerifyUtil.sendEmail(emailRequest);
		if (isOk) {
			String key = EmailVerify.EMAIL_VERIFICATION_CODE + email;
			JSONObject config = AiPassUitl.getVerificationCodeConfig();
			int overTime = config
					.getIntValue(EmailVerify.EMAIL_VERIFICATION_OVER_TIME);
			AiPassUitl.getCacheClient().setex(key, overTime, randomStr);
		}
		return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS,
				"ok", isOk);
	}

	/**
	 * 校验邮件验证码
	 */
	@RequestMapping("/checkEmailCode")
	@ResponseBody
	public ResponseData<Boolean> checkEmailCode(HttpServletRequest request) {
		String email = request.getParameter("email");
		String ckValue = request.getParameter("code");
		String codeKey = EmailVerify.EMAIL_VERIFICATION_CODE + email;
		boolean isOk = VerifyUtil.checkRedisValue(codeKey, ckValue);
		String msg = "ok";
		if (!isOk) {
			msg = rb.getMessage("ycfindpassword.emailCodeError");
		}
		String isRemove = request.getParameter("isRemove");
		if(isOk && "true".equals(isRemove)){
			VerifyUtil.delRedisValue(codeKey);
		}
		return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS, msg,
				isOk);
	}
}

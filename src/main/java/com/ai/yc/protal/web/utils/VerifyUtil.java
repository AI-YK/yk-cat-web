package com.ai.yc.protal.web.utils;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.util.Random;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ai.opt.base.vo.ResponseHeader;
import com.ai.opt.sdk.components.ccs.CCSClientFactory;
import com.ai.opt.sdk.components.mail.EmailFactory;
import com.ai.opt.sdk.components.mail.EmailTemplateUtil;
import com.ai.opt.sdk.components.mcs.MCSClientFactory;
import com.ai.opt.sdk.util.RandomUtil;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.paas.ipaas.ccs.IConfigClient;
import com.ai.paas.ipaas.mcs.interfaces.ICacheClient;
import com.ai.yc.protal.web.constants.Constants;
import com.ai.yc.protal.web.constants.Constants.PhoneVerify;
import com.ai.yc.protal.web.constants.Constants.PictureVerify;
import com.ai.yc.protal.web.model.mail.SendEmailRequest;
import com.alibaba.fastjson.JSONObject;

public class VerifyUtil {
	private static final Logger LOGGER = LoggerFactory
			.getLogger(VerifyUtil.class);
	/**
	 * 默认编码
	 */
	private static final String DEFAULT_CHARSET = "utf-8";

	/**
	 * 加密组装分隔符
	 */
	public static final String SEPARATOR = ";";

	public static BufferedImage getImageVerifyCode(String namespace,
			String cacheKey, int width, int height) {
		// int width = 100, height = 38;
		BufferedImage image = new BufferedImage(width, height,
				BufferedImage.TYPE_INT_RGB);

		// 获取图形上下文
		Graphics g = image.getGraphics();

		// 设定背景色
		g.setColor(new Color(0xDCDCDC));
		g.fillRect(0, 0, width, height);

		// 画边框
		g.setColor(Color.lightGray);
		g.drawRect(0, 0, width - 1, height - 1);

		// 取随机产生的认证码
		String verifyCode = RandomUtil.randomString(PictureVerify.VERIFY_SIZE);
		// 将认证码存入缓存
		try {
			ICacheClient cacheClient = MCSClientFactory
					.getCacheClient(namespace);
			JSONObject config = AiPassUitl.getVerificationCodeConfig();
			int overTime = config
					.getIntValue(PictureVerify.VERIFY_OVERTIME_KEY);
			cacheClient.setex(cacheKey, overTime, verifyCode);
			if (LOGGER.isDebugEnabled())
				LOGGER.debug("cacheKey=" + cacheKey + ",verifyCode="
						+ verifyCode);
			// 将认证码显示到图象中
			g.setColor(new Color(0x10a2fb));

			g.setFont(new Font("Atlantic Inline", Font.PLAIN, 30));
			String Str = verifyCode.substring(0, 1);
			g.drawString(Str, 8, 25);

			Str = verifyCode.substring(1, 2);
			g.drawString(Str, 28, 30);
			Str = verifyCode.substring(2, 3);
			g.drawString(Str, 48, 27);

			Str = verifyCode.substring(3, 4);
			g.drawString(Str, 68, 32);
			// 随机产生88个干扰点，使图象中的认证码不易被其它程序探测到
			Random random = new Random();
			for (int i = 0; i < 88; i++) {
				int x = random.nextInt(width);
				int y = random.nextInt(height);
				g.drawOval(x, y, 0, 0);
			}

			// 图象生效
			g.dispose();

		} catch (Exception e) {
			LOGGER.error("生成图片验证码错误", e);
		}
		return image;
	}

	/**
	 * 发送邮件
	 * 
	 * @param emailRequest
	 * @return
	 */
	public static boolean sendEmail(SendEmailRequest emailRequest) {
		boolean success = true;
		String htmlcontext = EmailTemplateUtil.buildHtmlTextFromTemplate(
				emailRequest.getTemplateURL(), emailRequest.getData());
		try {
			EmailFactory.SendEmail(emailRequest.getTomails(),
					emailRequest.getCcmails(), emailRequest.getSubject(),
					htmlcontext);
		} catch (Exception e) {
			success = false;
			LOGGER.error(e.getMessage(), e);
		}
		return success;
	}

	/**
	 * 检查ip发送邮箱验证码次数是否超限
	 * 
	 * @param namespace
	 * @param key
	 * @return
	 */
	public static ResponseData<String> checkIPSendEmailCount(String namespace,
			String key) {
		ResponseData<String> responseData = null;
		ResponseHeader header = null;
		ICacheClient cacheClient = MCSClientFactory.getCacheClient(namespace);
		String countStr = cacheClient.get(key);
		// IConfigCenterClient configCenterClient =
		// ConfigCenterFactory.getConfigCenterClient();
		IConfigClient configCenterClient = CCSClientFactory
				.getDefaultConfigClient();
		// 限制时间
		try {
			String overTime = configCenterClient
					.get(Constants.IP_SEND_OVERTIME_KEY);
			if (!StringUtil.isBlank(countStr)) {
				String maxNoStr = configCenterClient
						.get(Constants.SEND_VERIFY_IP_MAX_NO_KEY);
				int maxNo = Integer.valueOf(maxNoStr);
				int count = Integer.valueOf(countStr);
				count++;
				if (count > maxNo) {
					String message = "频繁发送邮箱，已被禁止" + Integer.valueOf(overTime)
							/ 60 + "分钟";
					responseData = new ResponseData<String>(
							ResponseData.AJAX_STATUS_SUCCESS, message);
					header = new ResponseHeader(false, Constants.ERROR_CODE,
							message);
					responseData.setResponseHeader(header);
					return responseData;
				} else {
					cacheClient.setex(key, Integer.valueOf(overTime),
							Integer.toString(count));
				}
			} else {
				cacheClient.setex(key, Integer.valueOf(overTime), "1");
			}
			responseData = new ResponseData<String>(
					ResponseData.AJAX_STATUS_SUCCESS, null);
			header = new ResponseHeader(true, Constants.ERROR_CODE, null);
			responseData.setResponseHeader(header);
			return responseData;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return responseData;
	}

	/**
	 * 校验图片验证码
	 * 
	 * @param namespace
	 * @param cacheKey
	 * @param ckValue
	 * @return
	 */
	public static boolean checkImageVerifyCode(String namespace,
			String cacheKey, String ckValue) {
		Boolean isRight = false;
		try {
			ICacheClient cacheClient = MCSClientFactory
					.getCacheClient(namespace);
			String code = cacheClient.get(cacheKey);
			if (!StringUtil.isBlank(code) && !StringUtil.isBlank(ckValue)
					&& ckValue.equalsIgnoreCase(code)) {
				isRight = true;
			}
		} catch (Exception e) {
			LOGGER.error(e.getMessage(), e);
		}
		return isRight;
	}

	/**
	 * 校验图片验证码
	 * 
	 * @param request
	 * @param errorMsg
	 * @return
	 */
	public static ResponseData<Boolean> checkImageVerifyCode(
			HttpServletRequest request, String errorMsg) {
		try {
			String cacheKey = PictureVerify.VERIFY_IMAGE_KEY
					+ request.getSession().getId();
			String imgCode = request.getParameter("imgCode");
			Boolean isRight = checkImageVerifyCode(Constants.DEFAULT_YC_CACHE_NAMESPACE,
					cacheKey, imgCode);
			if (isRight) {
				errorMsg = "ok";
			}
			return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS,
					errorMsg, isRight);

		} catch (Exception e) {
			return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_FAILURE,
					"error");
		}
	}

	/**
	 * 校验短信验证码
	 * @param phone
	 * @param type
	 * @param ckValue
	 * @return
	 */
	public static boolean checkSmsCode(String phone, String type, String ckValue) {
		String codeKey = null;
		boolean isRight = false;
		if (PhoneVerify.PHONE_CODE_REGISTER_OPERATION.equals(type)) {// 注册
			codeKey = PhoneVerify.REGISTER_PHONE_CODE + phone;
		} else if (PhoneVerify.PHONE_CODE_UPDATE_DATA_OPERATION.equals(type)) {// 修改资料
			codeKey = PhoneVerify.UPDATE_DATA_PHONE_CODE + phone;
		}
		if (!StringUtil.isBlank(type)) {
			isRight =checkRedisValue(codeKey,ckValue);
		}
		return isRight;
	}

	/**
	 * 清除手机验证码
	 * 
	 * @param phone
	 * @param type
	 */
	public static void removePhoneCode(String phone, String type) {
		String codeKey = "";
		if (PhoneVerify.PHONE_CODE_REGISTER_OPERATION.equals(type)) {// 注册
			codeKey = PhoneVerify.REGISTER_PHONE_CODE + phone;
		} else if (PhoneVerify.PHONE_CODE_UPDATE_DATA_OPERATION.equals(type)) {// 修改资料
			codeKey = PhoneVerify.UPDATE_DATA_PHONE_CODE + phone;
		}
		if (StringUtil.isBlank(codeKey)) {
			delRedisValue(codeKey);
		}
	}
	/**
	 * 删除redis值
	 * @param key
	 */
	public static void delRedisValue(String key){
		if (!StringUtil.isBlank(key)) {
			ICacheClient iCacheClient = AiPassUitl.getCacheClient();
			iCacheClient.del(key);
		}
	}
	/**
	 * 校验缓存值
	 * @param key
	 * @param ckValue
	 * @return
	 */
	public static boolean checkRedisValue(String key,String ckValue){
		ICacheClient iCacheClient = AiPassUitl.getCacheClient();
		String code = iCacheClient.get(key);
		boolean isOk = false;
		if (!StringUtil.isBlank(code) && !StringUtil.isBlank(ckValue)
				&& ckValue.equalsIgnoreCase(code)) {
			isOk = true;
		}
		return isOk;
	}

	/**
	 * 参数加密
	 *
	 * @param param
	 * @param key
	 * @return
	 * @author LiangMeng
	 */
	public static String encodeParam(String param, String key) {
		return MD5.sign(param, key, DEFAULT_CHARSET);
	}
}

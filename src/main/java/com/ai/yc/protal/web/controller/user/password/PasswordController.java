package com.ai.yc.protal.web.controller.user.password;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.paas.ipaas.i18n.ResWebBundle;
import com.ai.yc.protal.web.constants.Constants;
import com.ai.yc.protal.web.constants.Constants.UcenterOperation;
import com.ai.yc.protal.web.utils.PasswordMD5Util.Md5Utils;
import com.ai.yc.protal.web.utils.UserUtil;
import com.ai.yc.protal.web.utils.VerifyUtil;
import com.ai.yc.ucenter.api.members.interfaces.IUcMembersSV;
import com.ai.yc.ucenter.api.members.param.UcMembersResponse;
import com.ai.yc.ucenter.api.members.param.base.ResponseCode;
import com.ai.yc.ucenter.api.members.param.editpass.UcMembersEditPassRequest;
import com.ai.yc.ucenter.api.members.param.get.UcMembersGetRequest;
import com.ai.yc.ucenter.api.members.param.get.UcMembersGetResponse;
import com.alibaba.fastjson.JSON;

@RequestMapping("/password")
@RestController
public class PasswordController {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(PasswordController.class);
	@Autowired
	ResWebBundle rb;

	@RequestMapping("/passwordPager")
	public ModelAndView toInterpreterBaseInfo() {
		return new ModelAndView("/user/password/password-start");
	}
	@RequestMapping("/notBind")
	public ModelAndView notBind() {
		return new ModelAndView("/user/password/notBindAccountInfo");
	}
	@RequestMapping("/checkAccountInfo")
	@ResponseBody
	public ResponseData<Map<Object,Object>> checkAccountInfo(HttpServletRequest request) {
		ResponseData<Map<Object,Object>> responseData = null;
		Map<Object,Object> resultMap = new HashMap<>();
		boolean isOk = false;
		String msg ="ok";
		try {
			ResponseData<Boolean> result = VerifyUtil.checkImageVerifyCode(request,
					msg);
			if (ResponseData.AJAX_STATUS_FAILURE.equals(result.getStatusCode())
					|| !result.getData()) {// 图片验证码校验
				 msg = rb.getMessage("ycfindpassword.captchaError");
				responseData = new ResponseData<Map<Object,Object>>(
						ResponseData.AJAX_STATUS_SUCCESS, msg, resultMap);
				return responseData;
			}
			String account =  request.getParameter("account");
			IUcMembersSV ucMembersSV = DubboConsumerFactory
					.getService(IUcMembersSV.class);
			UcMembersGetRequest membersGetRequest = new UcMembersGetRequest();
			membersGetRequest.setUsername(account);
			membersGetRequest.setGetmode("5");
			UcMembersGetResponse getResponse = ucMembersSV
					.ucGetMember(membersGetRequest);
			if(getResponse.getDate()!=null){
				isOk = true;
				resultMap.putAll(getResponse.getDate());
			}else{
				 msg = rb.getMessage("ycfindpassword.accountNotExist");
			}
			
		} catch (Exception e) {
			LOGGER.error(e.getMessage(),e);
		}
		resultMap.put("isOk", isOk);
		return new ResponseData<Map<Object,Object>>(
				ResponseData.AJAX_STATUS_SUCCESS,msg, resultMap);
	}

	/**
	 * 修改密码
	 */
	@RequestMapping("/updatePassword")
	@ResponseBody
	public ResponseData<Boolean> updatePassword(HttpServletRequest request,
			UcMembersEditPassRequest passRequest) {
		String msg = "error";
		boolean isOK = false;

		try {
			if (passRequest.getUid() == null) {// 修改密码uid无需传值
				passRequest.setUid(Integer.parseInt(UserUtil.getUserId()));
			}
			String oldPwd = request.getParameter("oldPwd");
			String checkeMode="";
			if(StringUtil.isBlank(oldPwd)){//默认验证码
				checkeMode = UcenterOperation.OPERATION_TYPE_UPDATE_PWD_CODE;
				passRequest.setChecke_code(request.getParameter("checke_code"));
			}else{
				checkeMode = UcenterOperation.OPERATION_TYPE_UPDATE_PWD_OLDPSD;
				oldPwd = Md5Utils.md5(oldPwd);
				passRequest.setChecke_code(oldPwd);
			}
			passRequest.setChecke_mode(checkeMode);
			passRequest.setTenantId(Constants.DEFAULT_TENANT_ID);
			passRequest.setNewpw(Md5Utils.md5(passRequest.getNewpw()));
			IUcMembersSV ucMembersSV = DubboConsumerFactory
					.getService(IUcMembersSV.class);
			UcMembersResponse res = ucMembersSV.ucEditPassword(passRequest);
			ResponseCode responseCode = res == null ? null : res.getCode();
			Integer codeNumber = responseCode == null ? null : responseCode
					.getCodeNumber();
			if (codeNumber != null && codeNumber == 1) {// 成功
				msg = "ok";
				isOK = true;
			} else {
				msg = responseCode.getCodeMessage();
				LOGGER.error(JSON.toJSONString(res));
			}

		} catch (Exception e) {
			LOGGER.error(e.getMessage(), e);
		}
		ResponseData<Boolean> responseData = new ResponseData<Boolean>(
				ResponseData.AJAX_STATUS_SUCCESS, msg, isOK);
		return responseData;
	}
}

package com.ai.yc.protal.web.controller.user.security;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ai.opt.base.vo.ResponseHeader;
import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.paas.ipaas.i18n.ResWebBundle;
import com.ai.slp.balance.api.accountmaintain.interfaces.IAccountMaintainSV;
import com.ai.slp.balance.api.accountmaintain.param.AccountUpdateParam;
import com.ai.yc.order.api.orderquery.interfaces.IOrderQuerySV;
import com.ai.yc.order.api.orderquery.param.QueryOrdCountRequest;
import com.ai.yc.order.api.orderquery.param.QueryOrdCountResponse;
import com.ai.yc.protal.web.constants.Constants;
import com.ai.yc.protal.web.constants.Constants.Register;
import com.ai.yc.protal.web.model.pay.AccountBalanceInfo;
import com.ai.yc.protal.web.model.sso.GeneralSSOClientUser;
import com.ai.yc.protal.web.service.BalanceService;
import com.ai.yc.protal.web.utils.PasswordMD5Util.Md5Utils;
import com.ai.yc.protal.web.utils.UserUtil;
import com.ai.yc.ucenter.api.members.interfaces.IUcMembersSV;
import com.ai.yc.ucenter.api.members.param.UcMembersResponse;
import com.ai.yc.ucenter.api.members.param.base.ResponseCode;
import com.ai.yc.ucenter.api.members.param.checke.UcMembersCheckEmailRequest;
import com.ai.yc.ucenter.api.members.param.checke.UcMembersCheckeMobileRequest;
import com.ai.yc.ucenter.api.members.param.editemail.UcMembersEditEmailRequest;
import com.ai.yc.ucenter.api.members.param.editmobile.UcMembersEditMobileRequest;
import com.ai.yc.ucenter.api.members.param.get.UcMembersGetRequest;
import com.ai.yc.ucenter.api.members.param.get.UcMembersGetResponse;
import com.ai.yc.user.api.userservice.interfaces.IYCUserServiceSV;
import com.ai.yc.user.api.userservice.param.SearchYCTranslatorRequest;
import com.ai.yc.user.api.userservice.param.SearchYCUserRequest;
import com.ai.yc.user.api.userservice.param.YCLSPInfoReponse;
import com.ai.yc.user.api.userservice.param.YCTranslatorInfoResponse;
import com.ai.yc.user.api.userservice.param.YCUserInfoResponse;
import com.ai.yc.user.api.userservice.param.searchYCLSPInfoRequest;
import com.alibaba.fastjson.JSON;

/**
 * 帐号安全设置<br>
 * Date: 2016年11月7日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
@RequestMapping("p/security")
@Controller
public class SecurityController {
	private static final Logger LOG = LoggerFactory
			.getLogger(SecurityController.class);
	private static final String INIT = "user/security/seccenter";
	private static final String UPDATE_PASSWORD = "user/security/updatePassword";
	private static final String ERROR_PAGE = "user/error";
	private static final String UPDATE_PAY_PASSWORD = "user/security/updatePayPassword";
	private static final String INDEX = "user/userIndex";
	private static final String INTERPRETER_INDEX = "user/interpreterIndex";
	@Autowired
	BalanceService balanceService;
	@Autowired
	ResWebBundle rb;
	// 译员首页
	@RequestMapping("/interpreterIndex")
	public ModelAndView toRegister() {
		ModelAndView modelView = new ModelAndView(INTERPRETER_INDEX);
		long balance = 0;
		AccountBalanceInfo balanceInfo = queryBalanceInfo();
		if (balanceInfo != null) {
			balance = balanceInfo.getBalance();
		}
		modelView.addObject("balance", balance);
        String userId = UserUtil.getUserId();
        modelView.addObject("userId", userId);
		// 查询译员信息
		IYCUserServiceSV iycUserServiceSV = DubboConsumerFactory
				.getService(IYCUserServiceSV.class);
		SearchYCTranslatorRequest ycReq = new SearchYCTranslatorRequest();
		ycReq.setUserId(userId);
		YCTranslatorInfoResponse ycRes = null;
		try {
			ycRes = iycUserServiceSV.searchYCTranslatorInfo(ycReq);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}
		ResponseHeader resHeader = ycRes == null ? null : ycRes
				.getResponseHeader();
		if (resHeader != null && resHeader.isSuccess()) {
			modelView.addObject("interperInfo", ycRes);
		} else {
			LOG.error("获取译员信息: " + JSON.toJSONString(ycRes));

		}
		modelView.addObject("securitylevel", UserUtil.getUserSecurityLevel());
		return modelView;
	}
	@RequestMapping("/queryLspInfo")
	@ResponseBody
	public ResponseData<Object> queryLspInfo(@RequestParam("lspId") String lspId) {
		searchYCLSPInfoRequest req = new searchYCLSPInfoRequest();
		Object data = null;
		req.setLspId(lspId);
		YCLSPInfoReponse res =null;
		String status = ResponseData.AJAX_STATUS_SUCCESS;
		String msg ="ok";
		try {
			res= DubboConsumerFactory.getService(IYCUserServiceSV.class).searchLSPInfo(req);
			ResponseHeader responseHeader =res==null?null:res.getResponseHeader();
			if(responseHeader!=null&&responseHeader.isSuccess()){
				data = res.getUsrLspList();
			}else{
				msg = responseHeader==null?"ok":responseHeader.getResultMessage();
			}
		} catch (Exception e) {
			status = ResponseData.AJAX_STATUS_FAILURE;
			 msg ="error";
			 LOG.error("获取lsp信息: " ,e);
		}
		
		return new ResponseData<Object>(status, msg, data);
	}
	@RequestMapping("/index")
	public ModelAndView toIndex() {
		ModelAndView modelView = new ModelAndView(INDEX);
		long balance = 0;
		AccountBalanceInfo balanceInfo = queryBalanceInfo();
		if (balanceInfo != null) {
			balance = balanceInfo.getBalance();
		}
		modelView.addObject("balance", balance);
		
        // sec level
		modelView.addObject("securitylevel", UserUtil.getUserSecurityLevel());
		return modelView;
	}

	@RequestMapping("/queryBalanceInfo")
	@ResponseBody
	public AccountBalanceInfo queryBalanceInfo() {
		AccountBalanceInfo balanceInfo = null;

		try {
			balanceInfo = balanceService.queryOfUser(UserUtil.getUserId());
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}
		return balanceInfo;
	}

	@RequestMapping("/orderStatusCount")
	@ResponseBody
	public Map<String, Integer> orderStatusCount(HttpServletRequest request) {
		//String statusList = request.getParameter("statusList");
		String isInterpreter = request.getParameter("isInterpreter");
		QueryOrdCountResponse ordCountRes = null;
		Map<String,Integer> stateCount =null;
		try {
			String userId = UserUtil.getUserId();
            IOrderQuerySV iOrderQuerySV = DubboConsumerFactory.getService(IOrderQuerySV.class);
            QueryOrdCountRequest ordCountReq = new QueryOrdCountRequest();
            if("true".equals(isInterpreter)){
            	String lspRole = request.getParameter("lspRole");
            	if("11".equals(lspRole)||"12".equals(lspRole)){//lsp管理员
            		ordCountReq.setLspId(userId);
            	}else{//译员
            		ordCountReq.setInterperId(userId);
            	}
            }else{
            	ordCountReq.setUserId(userId);
            }
            ordCountRes = iOrderQuerySV.queryOrderCount(ordCountReq);
            stateCount = ordCountRes.getCountMap();
        } catch (Exception e) {
			LOG.error("查询订单数量失败:", e);
			if (ordCountRes != null) {
				LOG.error("查询订单数量失败:", JSON.toJSONString(ordCountRes));
			}
		}
		return stateCount;
	}

	@RequestMapping("seccenter")
	public ModelAndView init(HttpServletRequest request) {
		if (LOG.isDebugEnabled()) {
			LOG.debug("-------进入安全设置界面-------");
		}
		String source = request.getParameter("source");//区分来源
		Map<String, Object> model = new HashMap<String, Object>();
		// IYCUserServiceSV iYCUserServiceSV =
		// DubboConsumerFactory.getService(IYCUserServiceSV.class);
		SearchYCUserRequest req = new SearchYCUserRequest();
		// request.setUserId("000000000000003211");
		GeneralSSOClientUser userSSOInfo = UserUtil.getSsoUser();
		Boolean isexistemail = true;
		Boolean isexistphone = true;
		Boolean isexistloginpassword = true;
		Boolean isexistpaypassword = true;
		int securitylevel = 0;
		if (StringUtil.isBlank(userSSOInfo.getEmail())) {
			isexistemail = false;
		}

		if (StringUtil.isBlank(userSSOInfo.getMobile())) {
			isexistphone = false;
		}
		if (StringUtil.isBlank(userSSOInfo.getUserId())) {
			ModelAndView modelView = new ModelAndView(ERROR_PAGE);
			return modelView;
		}
		req.setUserId(userSSOInfo.getUserId());
		// YCUserInfoResponse response =
		// iYCUserServiceSV.searchYCUserInfo(request);
		model.put("userinfo", userSSOInfo);

		// 登录密码exist
		model.put("isexistloginpassword", isexistpaypassword);
		// 邮箱exist
		model.put("isexistemail", isexistemail);
		// 手机exist
		model.put("isexistphone", isexistphone);
		// 支付密码exist
		model.put("isexistpaypassword", isexistloginpassword);

		if (isexistemail == true) {
			securitylevel += 33;
		}
		if (isexistphone == true) {
			securitylevel += 33;
		}
		if (isexistloginpassword == true) {
			securitylevel += 34;
		}
//		if (isexistpaypassword == true) {
//			securitylevel += 25;
//		}

		// sec level
		model.put("securitylevel", securitylevel);
		model.put("source", source);
		ModelAndView modelView = new ModelAndView(INIT, model);
		return modelView;
	}

	@RequestMapping("updatePassword")
	public ModelAndView updatePassword() {
		ModelAndView modelView = new ModelAndView(UPDATE_PASSWORD);
		modelView.addObject("user", UserUtil.getSsoUser());
		return modelView;
	}

	@RequestMapping("updatePayPassword")
	public ModelAndView updatePayPassword() {
		ModelAndView modelView = new ModelAndView(UPDATE_PAY_PASSWORD);
		modelView.addObject("user", UserUtil.getSsoUser());
		return modelView;
	}

	@RequestMapping(value = "/sendPayPassword", method = RequestMethod.POST)
	@ResponseBody
	public ResponseData<Boolean> sendPayPassword(HttpServletRequest request) {
		String msg = "error";
		boolean isOK = false;
		String payPwd = request.getParameter("payPwd");
		if (StringUtil.isBlank(payPwd)) {
			msg = "param is null";
			ResponseData<Boolean> responseData = new ResponseData<Boolean>(
					ResponseData.AJAX_STATUS_SUCCESS, msg, isOK);
			return responseData;
		}
		try {
			IUcMembersSV ucMembersSV = DubboConsumerFactory
					.getService(IUcMembersSV.class);
			UcMembersGetRequest membersGetRequest = new UcMembersGetRequest();
			membersGetRequest.setUsername(UserUtil.getUserId());
			membersGetRequest.setGetmode("1");
			UcMembersGetResponse getResponse = ucMembersSV
					.ucGetMember(membersGetRequest);
			ResponseCode responseCode = getResponse == null ? null : getResponse.getCode();
			Integer codeNumber = responseCode == null ? null : responseCode
					.getCodeNumber();
			if (codeNumber == null || codeNumber != 1) {// 成功
				msg = responseCode.getCodeMessage();
				ResponseData<Boolean> responseData = new ResponseData<Boolean>(
						ResponseData.AJAX_STATUS_SUCCESS, msg, isOK);
				return responseData;
			}
			
			String password =getResponse.getDate().get("password").toString();
			String salt =getResponse.getDate().get("salt").toString();
			if(Md5Utils.md5(Md5Utils.md5(payPwd).concat(salt)).equals(password)){
				msg = rb.getMessage("ycaccountcenter.updatePayPassword.info1");
				ResponseData<Boolean> responseData = new ResponseData<Boolean>(
						ResponseData.AJAX_STATUS_SUCCESS, msg, isOK);
				return responseData;
			}
			SearchYCUserRequest sReq = new SearchYCUserRequest();
			sReq.setUserId(UserUtil.getUserId());
			YCUserInfoResponse res = DubboConsumerFactory.getService(
					IYCUserServiceSV.class).searchYCUserInfo(sReq);
			ResponseHeader responseHeader = res == null ? null : res
					.getResponseHeader();
			boolean isSuccess = responseHeader == null ? false : responseHeader
					.isSuccess();
			msg = responseHeader == null ? "error" : responseHeader
					.getResultMessage();
			if (!isSuccess) {
				ResponseData<Boolean> responseData = new ResponseData<Boolean>(
						ResponseData.AJAX_STATUS_SUCCESS, msg, isOK);
				return responseData;
			}
			Long accountId = res.getAccountId();
			if (accountId == null || accountId == 0) {
				msg = "accountId is null";
				ResponseData<Boolean> responseData = new ResponseData<Boolean>(
						ResponseData.AJAX_STATUS_SUCCESS, msg, isOK);
				return responseData;
			}
			
			String oldPwd = request.getParameter("oldPwd");//旧支付密码
			
			
			
			AccountUpdateParam req = new AccountUpdateParam();
			req.setTenantId(Constants.DEFAULT_TENANT_ID);
			req.setAcctId(accountId);
			req.setPayPassword(payPwd);
			IAccountMaintainSV iAccountMaintainSV = DubboConsumerFactory
					.getService(IAccountMaintainSV.class);
			iAccountMaintainSV.updateAccount(req);
			isOK = true;
			msg = "ok";
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}

		ResponseData<Boolean> responseData = new ResponseData<Boolean>(
				ResponseData.AJAX_STATUS_SUCCESS, msg, isOK);
		return responseData;
	}

	@RequestMapping("bindEmail")
	public ModelAndView bindEmail() {
		return new ModelAndView("user/security/bindEmail");
	}

	@RequestMapping("bindEmailSuccess")
	public ModelAndView bindEmailSuccess() {
		return new ModelAndView("user/security/bindEmailSuccess");
	}

	@RequestMapping("editEmail")
	public ModelAndView editEmail() {
		return new ModelAndView("user/security/updateEmail");
	}

	@RequestMapping("bindPhone")
	public ModelAndView bindPhone() {
		return new ModelAndView("user/security/bindPhone");
	}

	@RequestMapping("editPhone")
	public ModelAndView editPhone() {
		return new ModelAndView("user/security/updateMobilePhone");
	}

	@RequestMapping(value = "/updateEmail", method = RequestMethod.POST)
	@ResponseBody
	public ResponseData<Boolean> updateEmail(
			@RequestParam("email") String email,
			@RequestParam("code") String code) {
		String msg = "error";
		boolean isOK = false;
		try {
			UcMembersEditEmailRequest req = new UcMembersEditEmailRequest();
			req.setTenantId(Constants.DEFAULT_TENANT_ID);
			req.setEmail(email);
			req.setOperationcode(code);
			req.setUid(Integer.parseInt(UserUtil.getUserId()));

			IUcMembersSV iUcMembersSV = DubboConsumerFactory
					.getService(IUcMembersSV.class);
			UcMembersResponse res = iUcMembersSV.ucEditEmail(req);
			ResponseCode responseCode = res == null ? null : res.getCode();
			Integer codeNumber = responseCode == null ? null : responseCode
					.getCodeNumber();
			LOG.info("--------修改邮箱返回 :" + JSON.toJSONString(res));
			if (codeNumber != null && codeNumber == 1) {
				isOK = true;
				msg = "ok";
				GeneralSSOClientUser user = UserUtil.getSsoUser();
				user.setEmail(email);
				UserUtil.saveSsoUser(user);
			} else {
				msg = responseCode.getCodeMessage();
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}

		ResponseData<Boolean> responseData = new ResponseData<Boolean>(
				ResponseData.AJAX_STATUS_SUCCESS, msg, isOK);
		return responseData;
	}

	@RequestMapping(value = "/updatePhone", method = RequestMethod.POST)
	@ResponseBody
	public ResponseData<Boolean> updatePhone(
			@RequestParam("phone") String phone,
			@RequestParam("code") String code, @RequestParam("type") String type) {
		String msg = "error";
		boolean isOK = false;
		try {
			UcMembersEditMobileRequest req = new UcMembersEditMobileRequest();
			req.setTenantId(Constants.DEFAULT_TENANT_ID);
			req.setOperationcode(code);
			req.setMobilephone(phone);
			req.setUid(Integer.parseInt(UserUtil.getUserId()));

			IUcMembersSV iUcMembersSV = DubboConsumerFactory
					.getService(IUcMembersSV.class);
			UcMembersResponse res = iUcMembersSV.ucEditMobilephone(req);
			ResponseCode responseCode = res == null ? null : res.getCode();
			Integer codeNumber = responseCode == null ? null : responseCode
					.getCodeNumber();
			LOG.info("--------绑定手机返回 :" + JSON.toJSONString(res));
			if (codeNumber != null && codeNumber == 1) {
				isOK = true;
				msg = "ok";
				GeneralSSOClientUser user = UserUtil.getSsoUser();
				user.setMobile(phone);
				UserUtil.saveSsoUser(user);
			} else {
				msg = responseCode.getCodeMessage();
			}
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
		}

		ResponseData<Boolean> responseData = new ResponseData<Boolean>(
				ResponseData.AJAX_STATUS_SUCCESS, msg, isOK);
		return responseData;
	}

	/**
	 * 校验邮箱或手机
	 */
	@RequestMapping("/checkPhoneOrEmail")
	@ResponseBody
	public ResponseData<Boolean> checkPhoneOrEmail(HttpServletRequest request) {
		try {
			String checkType = request.getParameter("checkType");
			String checkVal = request.getParameter("checkVal");
			Object[] result = checkPhoneOrEmail(checkType, checkVal);
			Boolean canUse = (Boolean) result[0];
			String msg = (String) result[1];
			return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS,
					msg, canUse);
		} catch (Exception e) {
			LOG.error(e.getMessage(), e);
			return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_FAILURE,
					"error");
		}
	}

	/**
	 * 校验手机或邮箱可用
	 */
	private Object[] checkPhoneOrEmail(String checkType, String checkVal) {
		UcMembersResponse res = null;
		try {
			IUcMembersSV sv = DubboConsumerFactory
					.getService(IUcMembersSV.class);
			if (Register.CHECK_TYPE_EMAIL.equals(checkType)) {// 邮箱校验
				UcMembersCheckEmailRequest emailReq = new UcMembersCheckEmailRequest();
				emailReq.setEmail(checkVal);
				emailReq.setTenantId(Constants.DEFAULT_TENANT_ID);
				res = sv.ucCheckeEmail(emailReq);
				LOG.info("校验邮箱返回：" + JSON.toJSONString(res));
			}
			if (Register.CHECK_TYPE_PHONE.equals(checkType)) {// 手机校验
				UcMembersCheckeMobileRequest phoneReq = new UcMembersCheckeMobileRequest();
				phoneReq.setTenantId(Constants.DEFAULT_TENANT_ID);
				phoneReq.setMobilephone(checkVal);
				res = sv.ucCheckeMobilephone(phoneReq);
				LOG.info("校验手机返回：" + JSON.toJSONString(res));
			}
		} catch (Exception e) {
			LOG.info(e.getMessage(), e);
		}
		ResponseCode responseCode = res == null ? null : res.getCode();
		Integer codeNumber = responseCode == null ? null : responseCode
				.getCodeNumber();
		boolean falg = false;
		String msg = "ok";
		if (codeNumber != null && codeNumber == 1) {
			falg = true;
		} else {
			msg = responseCode.getCodeMessage();
		}
		return new Object[] { falg, msg };
	}

}

package com.ai.yc.protal.web.controller.user.interpreter;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import com.ai.opt.base.vo.ResponseHeader;
import com.ai.opt.sdk.components.idps.IDPSClientFactory;
import com.ai.opt.sdk.dubbo.util.DubboConsumerFactory;
import com.ai.opt.sdk.util.DateUtil;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.opt.sdk.util.UUIDUtil;
import com.ai.opt.sdk.web.model.ResponseData;
import com.ai.paas.ipaas.i18n.ResWebBundle;
import com.ai.paas.ipaas.image.IImageClient;
import com.ai.yc.protal.web.utils.UserUtil;
import com.ai.yc.user.api.userservice.interfaces.IYCUserServiceSV;
import com.ai.yc.user.api.userservice.param.SearchYCUserRequest;
import com.ai.yc.user.api.userservice.param.UpdateYCUserRequest;
import com.ai.yc.user.api.userservice.param.YCUpdateUserResponse;
import com.ai.yc.user.api.userservice.param.YCUserInfoResponse;
import com.alibaba.fastjson.JSON;

@RequestMapping("/p/interpreter")
@RestController
public class InterpreterController {

	private static final Logger LOGGER = LoggerFactory
			.getLogger(InterpreterController.class);
	@Autowired
	ResWebBundle rb;
	@RequestMapping("/interpreterInfoPager")
	public ModelAndView toInterpreterBaseInfo(HttpServletRequest request) {
		String source = request.getParameter("source");
		IYCUserServiceSV ucUserServiceSV = DubboConsumerFactory
				.getService(IYCUserServiceSV.class);
		SearchYCUserRequest userRequest = new SearchYCUserRequest();
		userRequest.setUserId(UserUtil.getUserId());
		YCUserInfoResponse response = ucUserServiceSV
				.searchYCUserInfo(userRequest);
		Map<String, Object> model = new HashMap<String, Object>();
		String idpsns = "yc-portal-web";
		IImageClient im = IDPSClientFactory.getImageClient(idpsns);
		String url = im
				.getImageUrl(response.getPortraitId(), ".jpg", "100x100");
		model.put("interpreterInfo", response);
		if (response.getBirthday() != null) {
			model.put("birthday", DateUtil.getDateString(
					response.getBirthday(), "yyyy-MM-dd"));
		} else {
			model.put("birthday", "");
		}
		model.put("portraitId", url);
		model.put("source", source);
		return new ModelAndView("/user/authentication/interpreter_info", model);
	}

	@RequestMapping(value = "/uploadImage", produces = "text/html;charset=utf-8")
	@ResponseBody
	public String uploadImage(HttpServletRequest request) {

		Map<String, Object> map = new HashMap<String, Object>();
		MultipartHttpServletRequest file = (MultipartHttpServletRequest) request;
		MultipartFile multiFile = file.getFile("uploadImg");
		String idpsns = "yc-portal-web";
		try {
			IImageClient im = IDPSClientFactory.getImageClient(idpsns);
			String idpsId = im.upLoadImage(multiFile.getBytes(),
					UUIDUtil.genId32() + ".png");
			String url = im.getImageUrl(idpsId, ".jpg", "100x100");
			map.put("isTrue", true);
			map.put("idpsId", idpsId);
			map.put("url", url);
		} catch (Exception e) {
			LOGGER.error("上传失败");
			map.put("isTrue", false);
		}
		return JSON.toJSONString(map);
	}

	@RequestMapping("/checkNickName")
	@ResponseBody
	public ResponseData<Boolean> checkNickName(HttpServletRequest request,
			@RequestParam("nickName") String nickName) {
		boolean isOk = true;
		String msg = "ok";
		try {
			IYCUserServiceSV ucUserServiceSV = DubboConsumerFactory
					.getService(IYCUserServiceSV.class);
			YCUserInfoResponse userInfoResponse = ucUserServiceSV
					.searchUserInfoByNickName(nickName);
			ResponseHeader responseHeader = userInfoResponse==null?null:userInfoResponse.getResponseHeader();
			if(responseHeader!=null&&responseHeader.isSuccess()
					&&nickName.equals(userInfoResponse.getNickname())){
				msg = rb.getMessage("ycinterpreterInfo.nickname.exists.msg");
				isOk = false;
			}
		} catch (Exception e) {
			isOk = false;
			msg = "error";
			LOGGER.error(e.getMessage(), e);
		}
		return new  ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS,msg, isOk);
	}

	@RequestMapping("/saveInfo")
	@ResponseBody
	public ResponseData<Boolean> saveInfo(HttpServletRequest request,
			UpdateYCUserRequest ucUserRequest) {
		String originalNickname = request.getParameter("originalNickname");
		boolean isOk = false;
		String  msg = "ok";
		try {
			ucUserRequest.setUserId(UserUtil.getUserId());
			String nickname = ucUserRequest.getNickname();
			if(!originalNickname.equals(nickname) && !StringUtil.isBlank(nickname)){//昵称发生改变
				ResponseData<Boolean> res= checkNickName(request,nickname);
				if(!res.getData()){//昵称校验不通过
					return res;
				}
			}
			String birthdayTmp = request.getParameter("birthdayTmp");
			if (!StringUtil.isBlank(birthdayTmp)) {
				ucUserRequest.setBirthday(DateUtil.getTimestamp(birthdayTmp));
			}
			IYCUserServiceSV ucUserServiceSV = DubboConsumerFactory
					.getService(IYCUserServiceSV.class);
			YCUpdateUserResponse res = ucUserServiceSV
					.updateYCUserInfo(ucUserRequest);
			ResponseHeader responseHeader = res==null?null:res.getResponseHeader();
			if(responseHeader!=null&&responseHeader.isSuccess()){
				isOk = true;
			}else{
				msg = responseHeader.getResultMessage();
			}
		} catch (Exception e) {
			LOGGER.error(e.getMessage(),e);
		}

		return new ResponseData<Boolean>(ResponseData.AJAX_STATUS_SUCCESS,msg, isOk);
	}
}

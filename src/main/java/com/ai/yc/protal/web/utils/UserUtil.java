package com.ai.yc.protal.web.utils;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.opt.sso.client.filter.SSOClientConstants;
import com.ai.yc.protal.web.model.sso.GeneralSSOClientUser;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;

/**
 * Created by jackieliu on 16/7/8.
 */
public class UserUtil {
    private UserUtil() {
		// TODO Auto-generated constructor stub
	}

    /**
     * 获取管理员标识
     * @return
     */
    public static String getUserId(){
        GeneralSSOClientUser ssoClientUser = getSsoUser();
        return ssoClientUser!=null?ssoClientUser.getUserId():null;
    }

    /**
     * 获取单点登陆的用户信息
     * @return
     */
    public static GeneralSSOClientUser getSsoUser(){
        HttpSession session = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest().getSession();
        return (GeneralSSOClientUser)session.getAttribute(SSOClientConstants.USER_SESSION_KEY);
    }
    /**
     * 更新单点登陆的用户信息
     * @return
     */
    public static void saveSsoUser(GeneralSSOClientUser user){
        HttpSession session = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest().getSession();
        session.setAttribute(SSOClientConstants.USER_SESSION_KEY,user);
    }
    /**
     * 获取用户安全级别
     * @return
     */
    public static int getUserSecurityLevel(){
    	GeneralSSOClientUser userSSOInfo = UserUtil.getSsoUser();
		int securitylevel=0;
		if (StringUtil.isBlank(userSSOInfo.getEmail())) {
			securitylevel += 33;
		}

		if (StringUtil.isBlank(userSSOInfo.getMobile())) {
			securitylevel += 33;
		}
		securitylevel += 34;//默认有密码
		return securitylevel;
    }
}

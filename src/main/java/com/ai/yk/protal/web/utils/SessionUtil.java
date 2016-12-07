package com.ai.yk.protal.web.utils;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ai.yk.protal.web.constants.Constants;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.model.user.SSOClientUser;

public final class SessionUtil {
	private SessionUtil(){}
	
	public static SSOClientUser getLoginUser() {
	    HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
	    SSOClientUser loginUser = (SSOClientUser) request.getSession().getAttribute(Constants.USER_SESSION_KEY);
        if(loginUser==null){
        	loginUser = new SSOClientUser();
        	loginUser.setUserId("111");
        	loginUser.setUsername("Roy");
        }
	    return loginUser;
	}
	
	public static void setUserConfig(MyCustomizedVo config){
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		request.getSession().setAttribute(Constants.CONFIG_SESSION_KEY, config);
	}
	
	public static MyCustomizedVo getUserConfig(){
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		MyCustomizedVo config = (MyCustomizedVo) request.getSession().getAttribute(Constants.CONFIG_SESSION_KEY);
		return config;
	}
}

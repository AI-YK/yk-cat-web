package com.ai.yk.protal.web.utils;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ai.yk.protal.web.constants.Constants;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.mytopics.MyTopicsVo;
import com.ai.yk.protal.web.model.user.SSOClientUser;

public final class SessionUtil {
	private SessionUtil(){}
	
	public static SSOClientUser getLoginUser() {
	    HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
	    SSOClientUser loginUser = (SSOClientUser) request.getSession().getAttribute(Constants.USER_SESSION_KEY);
        if(loginUser==null){
        	loginUser = new SSOClientUser();
        	loginUser.setUserId("1");
        	loginUser.setBalance("Houg");
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
	
	@SuppressWarnings("unchecked")
	public static List<MyTopicsVo> getTopics(){
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		List<MyTopicsVo> topics = (ArrayList<MyTopicsVo>) request.getSession().getAttribute(Constants.TOPIC_SESSION_KEY);
		return topics;
	}
	
	public static void getTopics(List<MyTopicsVo> topics){
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		request.getSession().setAttribute(Constants.TOPIC_SESSION_KEY, topics);
	}
	
	public static void print(){
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		Enumeration<?>   enumeration    =   request.getSession().getAttributeNames();   
		while( enumeration.hasMoreElements())   {   
		    String sessionName=(String)enumeration.nextElement();   
		    System.out.println("\nsession item name="+sessionName);  
		    System.out.println("\nsession item value="+request.getSession().getAttribute(sessionName));  
		}   
	}
	
}

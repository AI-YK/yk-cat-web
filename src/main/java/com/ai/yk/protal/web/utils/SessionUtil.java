package com.ai.yk.protal.web.utils;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ai.yk.protal.web.constants.Constants;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.mytopics.MyTopicsVo;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.google.gson.Gson;

public final class SessionUtil {
	private SessionUtil(){}
	public static void initUrlConfig(HttpServletRequest request){
		 if(request!=null){
			 HttpSession session = request.getSession();
			 if(session.getAttribute(Constants.YEESIGHT_URL_KEY)==null)
			 session.setAttribute(Constants.YEESIGHT_URL_KEY,ConfigUtil.config); 
		 }
	}
	public static SSOClientUser getLoginUser() {
	    HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
	    SSOClientUser loginUser = (SSOClientUser) request.getSession().getAttribute(Constants.USER_SESSION_KEY);
	    return loginUser;
	}
	
	public static void setLoginUser(SSOClientUser clientUser) {
	    HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
	    request.getSession().setAttribute(Constants.USER_SESSION_KEY, clientUser);
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
		if(topics==null){
			List<MyTopicsVo> list = new ArrayList<MyTopicsVo>();
			MyTopicsVo myTopicsVo = new MyTopicsVo();
			myTopicsVo.setSrcShortTitle("中国航天");
			MyTopicsVo myTopicsVo2 = new MyTopicsVo();
			myTopicsVo2.setSrcShortTitle("时代");
			MyTopicsVo myTopicsVo3 = new MyTopicsVo();
			myTopicsVo3.setSrcShortTitle("生活");
			list.add(myTopicsVo);
			list.add(myTopicsVo2);
			list.add(myTopicsVo3);
			topics = list;
		}
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
		    Object obj = request.getSession().getAttribute(sessionName);
		    Gson gson = new Gson();
		    System.out.println("\nsession item value="+gson.toJson(obj));  
		}   
	}
	
	public static void clearSession(){
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		request.getSession().invalidate();
	}
}

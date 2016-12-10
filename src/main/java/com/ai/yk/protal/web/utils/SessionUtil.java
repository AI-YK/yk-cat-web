package com.ai.yk.protal.web.utils;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ai.yk.protal.web.constants.Constants;
import com.ai.yk.protal.web.content.area.AreaVo;
import com.ai.yk.protal.web.content.mycustomized.InterestVo;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.mytopics.MyTopicsVo;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.google.gson.Gson;

public final class SessionUtil {
	private SessionUtil(){}
	
	public static SSOClientUser getLoginUser() {
	    HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
	    SSOClientUser loginUser = (SSOClientUser) request.getSession().getAttribute(Constants.USER_SESSION_KEY);
        if(loginUser==null){
        	loginUser = new SSOClientUser();
        	loginUser.setUserId("1");
        	loginUser.setUserName("Houg");
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
		if(config==null){
			MyCustomizedVo myCustomizedVo = new MyCustomizedVo();
			AreaVo province = new AreaVo();
			province.setCode("as_100000_340000");
			province.setNameZh("安徽");
			province.setType(1);
			AreaVo city = new AreaVo();
			city.setCode("as_100000_340000_340800");
			city.setNameZh("安庆市");
			city.setType(2);
			AreaVo city2 = new AreaVo();
			city2.setCode("as_100000_340000_340300");
			city2.setNameZh("蚌埠市");
			city2.setType(2);
			
			InterestVo InterestVo = new InterestVo();
			InterestVo.setZhInterest("自然灾害");
			InterestVo InterestVo2 = new InterestVo();
			InterestVo2.setZhInterest("事故灾难");
			InterestVo InterestVo3 = new InterestVo();
			InterestVo3.setZhInterest("公共卫生事件");
			InterestVo InterestVo4 = new InterestVo();
			InterestVo4.setZhInterest("社会安全事件");
			List<InterestVo> interestList = new ArrayList<InterestVo>();
			interestList.add(InterestVo);
			interestList.add(InterestVo2);
			interestList.add(InterestVo3);
			interestList.add(InterestVo4);
			myCustomizedVo.setId(1);
			myCustomizedVo.setCreateId(1);
			myCustomizedVo.setProvince(province);
			myCustomizedVo.setCity(city);
			myCustomizedVo.setInterestList(interestList);
			config = myCustomizedVo;
		}  
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
	
}

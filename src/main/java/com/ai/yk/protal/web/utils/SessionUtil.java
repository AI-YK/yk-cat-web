package com.ai.yk.protal.web.utils;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
	    if(loginUser==null){
	    	loginUser = new SSOClientUser();
	    	loginUser.setUserId("1");
	    	loginUser.setUserName("Houg");
	    	loginUser.setNickName("译见");
        }
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
		
		/**
		 * var configInterestList = '[
		 * {"businessId":"1057","id":453,"pid":215,"zhInterest":"自然灾害"},
		 * {"businessId":"1394","id":454,"pid":215,"zhInterest":"公共卫生事件"}]';
    var provinceCodee='as_100000_340000';
    var cityLists='[
    {"code":"as_100000_340000_340800","id":703,"level":2,"nameEn":"AN QING SHI","nameZh":"安庆市","pid":702,"type":0},
    {"code":"as_100000_340000_340300","id":705,"level":2,"nameEn":"BANG BU SHI","nameZh":"蚌埠市","pid":704,"type":0}]';
		 */
		if(config==null || config.equals("")){
			config = new MyCustomizedVo();
			AreaVo city = new AreaVo();
			city.setId(703);
			city.setLevel(2);
			city.setNameZh("安庆市");
			city.setCode("as_100000_340000_340800");
			city.setPid(701);
			city.setBusCode("");
			city.setType(0);
			
			AreaVo city2 = new AreaVo();
			city2.setId(705);
			city2.setLevel(2);
			city2.setNameZh("蚌埠市");
			city2.setCode("as_100000_340000_340300");
			city2.setPid(704);
			city2.setBusCode("");
			city2.setType(0);
			
			AreaVo province = new AreaVo();
			province.setCode("as_100000_340000");
			province.setId(701);
			
			InterestVo interest = new InterestVo();
			interest.setId(453);
			interest.setBusinessId("1057");
			interest.setPid(215);
			interest.setZhInterest("自然灾害");
			
			InterestVo interest2 = new InterestVo();
			interest2.setId(454);
			interest2.setBusinessId("1394");
			interest2.setPid(215);
			interest2.setZhInterest("公共卫生事件");
			
			List<InterestVo> interestList = new ArrayList<InterestVo>();
			interestList.add(interest);
			interestList.add(interest2);
			List<AreaVo> cityList = new ArrayList<AreaVo>();
			cityList.add(city);
			cityList.add(city2);
			config.setProvince(province);
			config.setCity(cityList);
			config.setInterestList(interestList);
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
	
	public static void clearSession(){
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		request.getSession().invalidate();
	}
}

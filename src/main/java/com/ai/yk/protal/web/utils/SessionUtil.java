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
		if(config==null){
			/*
			 * {"responseHeader":null,"statusCode":"1","statusInfo":"获得领域分类","data":
			 * [{"language":"zh","type":"YQFL","dicValue":"1057","dicName":"自然灾害","dicDesc":"舆情分类"},
			 * {"language":"zh","type":"YQFL","dicValue":"1060","dicName":"事故灾难","dicDesc":"舆情分类"},
			 * {"language":"zh","type":"YQFL","dicValue":"1394","dicName":"公共卫生事件","dicDesc":"舆情分类"},
			 * {"language":"zh","type":"YQFL","dicValue":"1556","dicName":"社会安全事件","dicDesc":"舆情分类"}]}
			 * 
			 * {"responseHeader":null,"statusCode":"1","statusInfo":"获得所有城市","data":[
			 * {"id":"6e444833-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_340800","busCod":340800,"nameEn":"AN QING SHI","name":"安庆市","classify":"city","parentCode":"as_100000_340000","geoLat":"30.5434900000","geoLong":"117.0637500000","createTime":"2016-12-05 20:36:23.0","updateTime":"2016-12-05 20:36:23.0","nameEnFirst":"A"},
			 * {"id":"6e2451c6-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_340300","busCod":340300,"nameEn":"BANG BU SHI","name":"蚌埠市","classify":"city","parentCode":"as_100000_340000","geoLat":"32.9162800000","geoLong":"117.3897100000","createTime":"2016-12-05 20:36:22.0","updateTime":"2016-12-05 20:36:22.0","nameEnFirst":"B"},
			 * {"id":"6e6ce634-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_341600","busCod":341600,"nameEn":"BO ZHOU SHI","name":"亳州市","classify":"city","parentCode":"as_100000_340000","geoLat":"33.8445800000","geoLong":"115.7786700000","createTime":"2016-12-05 20:36:23.0","updateTime":"2016-12-05 20:36:23.0","nameEnFirst":"B"},
			 * {"id":"6e511283-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_341100","busCod":341100,"nameEn":"CHU ZHOU SHI","name":"滁州市","classify":"city","parentCode":"as_100000_340000","geoLat":"32.3015500000","geoLong":"118.3171000000","createTime":"2016-12-05 20:36:23.0","updateTime":"2016-12-05 20:36:23.0","nameEnFirst":"C"},
			 * {"id":"6e732ad3-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_341700","busCod":341700,"nameEn":"CHI ZHOU SHI","name":"池州市","classify":"city","parentCode":"as_100000_340000","geoLat":"30.6648000000","geoLong":"117.4915600000","createTime":"2016-12-05 20:36:23.0","updateTime":"2016-12-05 20:36:23.0","nameEnFirst":"C"},
			 * {"id":"6e59b997-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_341200","busCod":341200,"nameEn":"FU YANG SHI","name":"阜阳市","classify":"city","parentCode":"as_100000_340000","geoLat":"32.8901200000","geoLong":"115.8142000000","createTime":"2016-12-05 20:36:23.0","updateTime":"2016-12-05 20:36:23.0","nameEnFirst":"F"},
			 * {"id":"6e179ca7-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_340100","busCod":340100,"nameEn":"HE FEI SHI","name":"合肥市","classify":"city","parentCode":"as_100000_340000","geoLat":"31.8205800000","geoLong":"117.2272300000","createTime":"2016-12-05 20:36:22.0","updateTime":"2016-12-05 20:36:22.0","nameEnFirst":"H"},
			 * {"id":"6e2ac86c-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_340400","busCod":340400,"nameEn":"HUAI NAN SHI","name":"淮南市","classify":"city","parentCode":"as_100000_340000","geoLat":"32.6254700000","geoLong":"116.9999300000","createTime":"2016-12-05 20:36:22.0","updateTime":"2016-12-05 20:36:22.0","nameEnFirst":"H"},
			 * {"id":"6e378810-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_340600","busCod":340600,"nameEn":"HUAI BEI SHI","name":"淮北市","classify":"city","parentCode":"as_100000_340000","geoLat":"33.9558400000","geoLong":"116.7982600000","createTime":"2016-12-05 20:36:23.0","updateTime":"2016-12-05 20:36:23.0","nameEnFirst":"H"},
			 * {"id":"6e4a95e0-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_341000","busCod":341000,"nameEn":"HUANG SHAN SHI","name":"黄山市","classify":"city","parentCode":"as_100000_340000","geoLat":"29.7146500000","geoLong":"118.3374800000","createTime":"2016-12-05 20:36:23.0","updateTime":"2016-12-05 20:36:23.0","nameEnFirst":"H"
			 * },{"id":"6e6673a2-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_341500","busCod":341500,"nameEn":"LIU AN SHI","name":"六安市","classify":"city","parentCode":"as_100000_340000","geoLat":"31.7337000000","geoLong":"116.5218500000","createTime":"2016-12-05 20:36:23.0","updateTime":"2016-12-05 20:36:23.0","nameEnFirst":"L"},
			 * {"id":"6e311d6d-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_340500","busCod":340500,"nameEn":"MA AN SHAN SHI","name":"马鞍山市","classify":"city","parentCode":"as_100000_340000","geoLat":"31.6704500000","geoLong":"118.5067600000","createTime":"2016-12-05 20:36:23.0","updateTime":"2016-12-05 20:36:23.0","nameEnFirst":"M"},
			 * {"id":"6e6039e7-bae7-11e6-92ee-28d2441cdcd5","code":"as_100000_340000_341300","busCod":341300,"nameEn":"SU ZHOU SHI","name":"宿州市","classify":"city","parentCode":"as_100000_340000","geoLat":"33.6463700000","geoLong":"116.9643500000","createTime":"2016-12-05 20:36:23.0","updateTime":"2016-12-05 20:36:23.0","nameEnFirst":"S"},
			 * {"id":"6e3dc5a2-

			 * */
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
			myTopicsVo.setSrcShortTitle("专题一");
			MyTopicsVo myTopicsVo2 = new MyTopicsVo();
			myTopicsVo2.setSrcShortTitle("专题二");
			MyTopicsVo myTopicsVo3 = new MyTopicsVo();
			myTopicsVo3.setSrcShortTitle("专题三");
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
		    System.out.println("\nsession item value="+request.getSession().getAttribute(sessionName));  
		}   
	}
	
}

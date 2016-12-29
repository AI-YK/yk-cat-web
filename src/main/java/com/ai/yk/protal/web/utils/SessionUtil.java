package com.ai.yk.protal.web.utils;

import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.ai.opt.sdk.util.CollectionUtil;
import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.constants.Constants;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.area.AreaVo;
import com.ai.yk.protal.web.content.mycustomized.InterestVo;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.mytopics.MyTopicsMessage;
import com.ai.yk.protal.web.content.mytopics.MyTopicsResponse;
import com.ai.yk.protal.web.content.mytopics.MyTopicsVo;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.service.mycustomized.MycustomizedService;
import com.ai.yk.protal.web.service.mytopics.MytopicsService;
import com.alibaba.fastjson.JSON;
import com.google.gson.Gson;

public final class SessionUtil {
	private static final Logger log = LoggerFactory
			.getLogger(SessionUtil.class);
	
	private static final int OUT_TIME = 3600;
	
	private static boolean real = false;

	private SessionUtil() {
		
	}
	
	static{
		String model = ConfigUtil.getProperty("model");
		if(StringUtil.isBlank(model)||"0".equals(model)){
			real = true;
		}else{
			real = false;
		}
	}
	
	public static boolean real(){
		return real;
	}

	public static void initUrlConfig(HttpServletRequest request) {
		if (request != null) {
			HttpSession session = request.getSession();
			session.setMaxInactiveInterval(OUT_TIME);
			if (session.getAttribute(Constants.YEESIGHT_URL_KEY) == null)
				session.setAttribute(Constants.YEESIGHT_URL_KEY,ConfigUtil.config);
		}
	}

	public static SSOClientUser getLoginUser(HttpServletRequest request) {
		HttpSession session = request.getSession();
		session.setMaxInactiveInterval(OUT_TIME);
		Object obj = session.getAttribute(Constants.USER_SESSION_KEY);
		log.info("user01:" + obj);
		SSOClientUser loginUser = null;
		if (obj != null) {
			String str = JSON.toJSONString(obj);
			log.info("user02:" + str);
			loginUser = JSON.parseObject(str, SSOClientUser.class);
		}
	    if (!real&&loginUser == null) { 
			 loginUser = new SSOClientUser();
		     loginUser.setUserId("99485"); 
		     loginUser.setUserName("Houg");
		     loginUser.setNickName("译见"); 
		     session.setAttribute(Constants.USER_SESSION_KEY,loginUser);
		 }
		return loginUser;
	}

	public static void setLoginUser(SSOClientUser clientUser) {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();
		HttpSession session = request.getSession();
		session.setMaxInactiveInterval(OUT_TIME);
		session.setAttribute(Constants.USER_SESSION_KEY,clientUser);
	}

	public static void setUserConfig(MyCustomizedVo config) {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();
		HttpSession session = request.getSession();
		session.setMaxInactiveInterval(OUT_TIME);
		session.setAttribute(Constants.CONFIG_SESSION_KEY, JSON.toJSONString(config));
	}

	public static MyCustomizedVo getUserConfig() {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();
		Object obj = request.getSession().getAttribute(Constants.CONFIG_SESSION_KEY);
		MyCustomizedVo config = null;
		if(obj!=null){
			 if(obj instanceof String){
				 config = JSON.parseObject(obj.toString(),MyCustomizedVo.class);
			 }else{
				 config =(MyCustomizedVo) obj;
			 }
		}
		if(config==null){//session清空重新查询
			try {
				MycustomizedService  mycustomizedService =(MycustomizedService) getBean(MycustomizedService.class);
				YJRequest<MyCustomizedListMessage> req = new YJRequest<MyCustomizedListMessage>();
				MyCustomizedListMessage customizedListMessage = new MyCustomizedListMessage();
				customizedListMessage.setCreateId(Integer.valueOf(getLoginUser(request).getUserId()));
				req.setMessage(customizedListMessage);
				YJResponse<MyCustomizedVo> resp = mycustomizedService.queryMyCustomized(req);
				if(resp!=null&&resp.getData()!=null){
					setUserConfig(resp.getData());
					return resp.getData();
				}
			} catch (Exception e) {
				log.error("查询个人定制错误：",e);
			}
		}
		
		if (!real&&config == null) {
			config = new MyCustomizedVo();
			AreaVo city = new AreaVo();
			city.setId(703);
			city.setLevel(2);
			city.setNameZh("安庆市");
			city.setCode("340800");
			city.setPid(701);
			city.setType(0);
			city.setBusCode("340800");

			AreaVo city2 = new AreaVo();
			city2.setId(705);
			city2.setLevel(2);
			city2.setNameZh("蚌埠市");
			city2.setCode("340300");
			city2.setPid(704);
			city2.setType(0);
			city2.setBusCode("340300");

			AreaVo province = new AreaVo();
			province.setCode("340000");
			province.setNameZh("安徽省");
			province.setId(701);
			province.setBusCode("340000");

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
	public static List<MyTopicsVo> getTopics() {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();
		Object obj = request.getSession().getAttribute(Constants.TOPIC_SESSION_KEY);
		List<MyTopicsVo> topics = null;
		if(obj!=null){
			if(obj instanceof String){
				topics = JSON.parseArray(obj.toString(), MyTopicsVo.class);
			}else{
				topics = (List<MyTopicsVo>) obj;
			}
		}
		
		if(topics==null){//session清空重新查询
			try {
				/**专题数据**/
				MytopicsService mytopicsSercice = (MytopicsService) getBean(MytopicsService.class);
				MyTopicsMessage myTopicsMessage=new MyTopicsMessage();
				myTopicsMessage.setPageNo(1);
				myTopicsMessage.setPageSize(99999);
				myTopicsMessage.setCreateId(Integer.parseInt(getLoginUser(request).getUserId()));
				YJRequest<MyTopicsMessage> reqtop=new YJRequest<MyTopicsMessage>();
				reqtop.setMessage(myTopicsMessage);
				YJResponse<MyTopicsResponse> yjr= mytopicsSercice.queryMyTopicsList(reqtop);
				if(yjr!=null&&yjr.getData()!=null&&!CollectionUtil.isEmpty(yjr.getData().getResults())){
					List<MyTopicsVo> topicVos = yjr.getData().getResults();
					SessionUtil.setTopics(topicVos);
					return topicVos;
				}
			} catch (Exception e) {
				log.error("查询个人专题错误：",e);
			}
		}
		if (!real&&topics == null) {
			List<MyTopicsVo> list = new ArrayList<MyTopicsVo>();
			MyTopicsVo myTopicsVo = new MyTopicsVo();
			myTopicsVo.setId("5cf4f1c273fb6d24592ea34f42b1fd75");
			myTopicsVo.setSrcShortTitle("中国航天");
			MyTopicsVo myTopicsVo2 = new MyTopicsVo();
			myTopicsVo2.setId("5cf4f1c273fb6d24592ea34f42b1fd75");
			myTopicsVo2.setSrcShortTitle("时代");
			MyTopicsVo myTopicsVo3 = new MyTopicsVo();
			myTopicsVo3.setId("5cf4f1c273fb6d24592ea34f42b1fd75");
			myTopicsVo3.setSrcShortTitle("生活");
		
			MyTopicsVo myTopicsVo4 = new MyTopicsVo();
			myTopicsVo4.setId("4");
			myTopicsVo4.setSrcShortTitle("公共安全事件");
			MyTopicsVo myTopicsVo5 = new MyTopicsVo();
			myTopicsVo5.setId("5");
			myTopicsVo5.setSrcShortTitle("金融");
			MyTopicsVo myTopicsVo6 = new MyTopicsVo();
			myTopicsVo6.setId("6");
			myTopicsVo6.setSrcShortTitle("财经");
			MyTopicsVo myTopicsVo7 = new MyTopicsVo();
			myTopicsVo7.setId("7");
			myTopicsVo7.setSrcShortTitle("理财");
			
			MyTopicsVo myTopicsVo8 = new MyTopicsVo();
			myTopicsVo8.setId("8");
			myTopicsVo8.setSrcShortTitle("投资");
			MyTopicsVo myTopicsVo9 = new MyTopicsVo();
			myTopicsVo9.setId("9");
			myTopicsVo9.setSrcShortTitle("企业");
			list.add(myTopicsVo);
			list.add(myTopicsVo2);
			list.add(myTopicsVo3);
			list.add(myTopicsVo4);
			list.add(myTopicsVo5);
			list.add(myTopicsVo6);
			list.add(myTopicsVo7);
			list.add(myTopicsVo8);
			list.add(myTopicsVo9);
			list.add(myTopicsVo);
			list.add(myTopicsVo2);
			list.add(myTopicsVo3);
			list.add(myTopicsVo4);
			list.add(myTopicsVo5);
			list.add(myTopicsVo6);
			list.add(myTopicsVo7);
			list.add(myTopicsVo8);
			list.add(myTopicsVo9);
			topics = list;
		}

		return topics;
	}

	public static void setTopics(List<MyTopicsVo> topics) {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();
		HttpSession session = request.getSession();
		session.setMaxInactiveInterval(OUT_TIME);
		session.setAttribute(Constants.TOPIC_SESSION_KEY, JSON.toJSONString(topics));
	}

	public static void print() {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();
		Enumeration<?> enumeration = request.getSession().getAttributeNames();
		while (enumeration.hasMoreElements()) {
			String sessionName = (String) enumeration.nextElement();
			log.info("sessionName:" + sessionName);
			Object obj = request.getSession().getAttribute(sessionName);
			Gson gson = new Gson();
			log.info("sessionValue=" + gson.toJson(obj));
		}
	}

	public static void clearSession() {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();
		request.getSession().invalidate();
	}
	public static Object getBean(Class<?> t){
		 WebApplicationContext web = ContextLoader.getCurrentWebApplicationContext();  
		 return web.getBean(t);
	}
}

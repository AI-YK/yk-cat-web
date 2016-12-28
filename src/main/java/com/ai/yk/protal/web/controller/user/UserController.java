package com.ai.yk.protal.web.controller.user;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.login.LoginVo;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.mytopics.MyTopicsMessage;
import com.ai.yk.protal.web.content.mytopics.MyTopicsResponse;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.service.mycustomized.MycustomizedService;
import com.ai.yk.protal.web.service.mytopics.MytopicsService;
import com.ai.yk.protal.web.utils.ConfigUtil;
import com.ai.yk.protal.web.utils.HttpClientUtil;
import com.ai.yk.protal.web.utils.SessionUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.google.gson.Gson;

@Controller
@RequestMapping("/user")
public class UserController {
	
	private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
    @Autowired
	private MycustomizedService mycustomizedService;
    
    @Autowired
	private MytopicsService mytopicsSercice;

	/**
	 * 用户登录
	 * @param model
	 * @return
	 */
    @RequestMapping("/login")
    public String login(Model model){
    	String loginUrl =ConfigUtil.getProperty("loginUrl");
    	String redirect =ConfigUtil.getProperty("redirect");
    	model.addAttribute("loginUrl", loginUrl);
    	model.addAttribute("url", redirect);
    	return "user/login";
    }
    
	@RequestMapping("/success")
    public String loginSuccess(HttpServletRequest request,Model model,String redirect){
		if(StringUtil.isBlank(redirect)){
    		redirect = "/home/index";
    	}
		SessionUtil.print();
    	SSOClientUser clientUser = SessionUtil.getLoginUser(request);
    	if(clientUser==null){
    		return "redirect:/user/login";
    	}
    	/**专题数据**/
    	MyTopicsMessage myTopicsMessage=new MyTopicsMessage();
    	myTopicsMessage.setPageNo(1);
    	myTopicsMessage.setPageSize(99999);
        myTopicsMessage.setCreateId(Integer.parseInt(clientUser.getUserId()));
    	YJRequest<MyTopicsMessage> reqtop=new YJRequest<MyTopicsMessage>();
    	reqtop.setMessage(myTopicsMessage);
    	YJResponse<MyTopicsResponse> yjr= mytopicsSercice.queryMyTopicsList(reqtop);
    	if(yjr!=null&&yjr.getData()!=null){
    		SessionUtil.setTopics(yjr.getData().getResults());
    	}
    	
    	//配置信息 
    	YJRequest<MyCustomizedListMessage> req = new YJRequest<MyCustomizedListMessage>();
    	MyCustomizedListMessage customizedListMessage = new MyCustomizedListMessage();
    	customizedListMessage.setCreateId(Integer.valueOf(clientUser.getUserId()));
    	req.setMessage(customizedListMessage);
    	YJResponse<MyCustomizedVo> resp = mycustomizedService.queryMyCustomized(req);
    	if(resp==null||resp.getData()==null){
    		 return "redirect:/home/config";
    	}else{
    		 SessionUtil.setUserConfig(resp.getData());
    		 return "redirect:"+redirect;
    	}
       
    }
	/**
     * 退出登录
     * @param model
     * @return
     */
	@RequestMapping("/logout")
	public String logOut(Model model){
		SessionUtil.clearSession();
		return "redirect:/home/index";
	}
	
	@RequestMapping("/log")
	@ResponseBody
	public String log(LoginVo vo,HttpServletRequest request){
		Gson gson = new Gson();
		YJRequest<LoginVo> req = new YJRequest<LoginVo>();
		req.setMessage(vo);;
		String body = "req:"+gson.toJson(req);
		log.info("req:"+gson.toJson(req));
		String result = HttpClientUtil.getYJBaseResponse(ConfigUtil.getProperty("loginRestUrl"), req);
		body =  body +"\n" + "resp:"+result;
		log.info("resp:"+result);
		JSONObject obj = JSON.parseObject(result);
		if(obj!=null&&obj.get("data")!=null){
			request.getSession().setAttribute("user", obj.get("data"));
		}
		return body;
	}
   
}

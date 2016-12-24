package com.ai.yk.protal.web.controller.user;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.mytopics.MyTopicsMessage;
import com.ai.yk.protal.web.content.mytopics.MyTopicsResponse;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.service.mycustomized.MycustomizedService;
import com.ai.yk.protal.web.service.mytopics.MytopicsService;
import com.ai.yk.protal.web.utils.ConfigUtil;
import com.ai.yk.protal.web.utils.SessionUtil;

@Controller
@RequestMapping("/user")
public class UserController {
	
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

    	SSOClientUser clientUser = SessionUtil.getLoginUser(request);
    	if(StringUtil.isBlank(redirect)){
    		redirect = "/home/index";
    	}

    	if(clientUser==null){
    		clientUser = new SSOClientUser();
    		clientUser.setUserId("2");
    		clientUser.setUserName("Houg");
    		clientUser.setNickName("译见");
    		SessionUtil.setLoginUser(clientUser);
        }
    	SessionUtil.print();
    	YJResponse<MyCustomizedVo> resp = null;
    	YJRequest<MyCustomizedListMessage> req = new YJRequest<MyCustomizedListMessage>();
    	MyCustomizedListMessage customizedListMessage = new MyCustomizedListMessage();
    	customizedListMessage.setCreateId(Integer.valueOf(clientUser.getUserId()));
    	req.setMessage(customizedListMessage);
    	resp = mycustomizedService.queryMyCustomized(req);
    	/**专题数据**/
    	MyTopicsMessage myTopicsMessage=new MyTopicsMessage();
    	myTopicsMessage.setPageNo(1);
    	myTopicsMessage.setPageSize(99999);
//    	myTopicsMessage.setCreateId(Integer.parseInt(clientUser.getUserId()));
    	myTopicsMessage.setCreateId(99499);
    	YJRequest<MyTopicsMessage> reqtop=new YJRequest<MyTopicsMessage>();
    	reqtop.setMessage(myTopicsMessage);
    	YJResponse<MyTopicsResponse> yjr=mytopicsSercice.queryMyTopicsList(reqtop);
    	if(resp==null){
    		 return "redirect:/home/config";
    	}else{
    		 SessionUtil.setUserConfig(resp.getData());
    		 if(yjr.getData()!=null){
    			 SessionUtil.setTopics(yjr.getData().getResults());
    		 }
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
   
}

package com.ai.yk.protal.web.controller.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.service.mycustomized.MycustomizedService;
import com.ai.yk.protal.web.utils.ConfigUtil;
import com.ai.yk.protal.web.utils.SessionUtil;

@Controller
@RequestMapping("/user")
public class UserController {
	
    @Autowired
	private MycustomizedService mycustomizedService;

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
    public String loginSuccess(Model model,String redirect){
    	SSOClientUser clientUser = SessionUtil.getLoginUser();
    	if(StringUtil.isBlank(redirect)){
    		redirect = "/home/index";
    	}
    	if(clientUser==null){
    		clientUser = new SSOClientUser();
    		clientUser.setUserId("1");
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
    	if(resp==null){
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
		return "redirect:/user/index";
	}
   
}

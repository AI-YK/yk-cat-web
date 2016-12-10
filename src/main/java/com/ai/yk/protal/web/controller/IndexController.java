package com.ai.yk.protal.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ai.paas.ipaas.i18n.ResWebBundle;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.mytopics.MyTopicsVo;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.service.mycustomized.MycustomizedService;
import com.ai.yk.protal.web.service.mytopics.MytopicsService;
import com.ai.yk.protal.web.utils.SessionUtil;

/**
 * Created by mengbo on 28/11/5.
 */
@Controller
@RequestMapping("/home")
public class IndexController {
	
   // private static final Logger LOGGER = LoggerFactory.getLogger(IndexController.class);
    
    @Autowired
    private ResWebBundle rb;
    
    @Autowired
    private MycustomizedService mycustomizedService;
    
    @Autowired
    private MytopicsService mytopicsService;
    /**
     * 首页
     * @return
     */
    @RequestMapping("/index")
    public String indexView(Model model){
    	SSOClientUser clientUser = SessionUtil.getLoginUser();
    	if(clientUser==null){
    		model.addAttribute("isLogin", false);
    	}else{
    		model.addAttribute("isLogin", true);
    		model.addAttribute("user", clientUser);
    	}
    	MyCustomizedVo config = SessionUtil.getUserConfig();
    	model.addAttribute("config", config);
    	List<MyTopicsVo> topics = SessionUtil.getTopics();
    	if(topics==null||topics.size()==0){
    		model.addAttribute("hasTopic", false);
    	}else{
    		model.addAttribute("hasTopic", true);
    		model.addAttribute("topics", topics);
    	}
        return "/home/index";
    }
    
    /**
     * 配置页面
     */
    @RequestMapping("/config")
    public String configView(Model model){
    	SSOClientUser clientUser = SessionUtil.getLoginUser();
    	model.addAttribute("user", clientUser);
        return "/home/config";
    }
    
    /**
     * 配置页面
     */
	@RequestMapping("/success")
    public String loginSuccess(Model model){
    	SSOClientUser clientUser = SessionUtil.getLoginUser();
    	if(clientUser==null){
    		clientUser = new SSOClientUser();
    		clientUser.setUserId("1");
    		clientUser.setUserName("Houg");
    		clientUser.setNickName("亚信人");
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
    		 return "redirect:/home/index";
    	}
       
    }
    
   
}

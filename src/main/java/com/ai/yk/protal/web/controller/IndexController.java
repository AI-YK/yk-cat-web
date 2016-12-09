package com.ai.yk.protal.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ai.paas.ipaas.i18n.ResWebBundle;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.event.EventListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.service.mycustomized.MycustomizedService;
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
    /**
     * 首页
     * @return
     */
    @RequestMapping("/index")
    public String indexView(Model model){
    	MyCustomizedVo config = SessionUtil.getUserConfig();
    	model.addAttribute("config", config);
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
    @SuppressWarnings("unused")
	@RequestMapping("/success")
    public String loginSuccess(Model model){
    	SSOClientUser clientUser = SessionUtil.getLoginUser();
    	SessionUtil.print();
    	YJResponse<MyCustomizedVo> resp = null;
    	YJRequest<MyCustomizedListMessage> req = new YJRequest<MyCustomizedListMessage>();
    	MyCustomizedListMessage myCustomizedListMessage = new MyCustomizedListMessage();
    	myCustomizedListMessage.setCreateId(Integer.valueOf(clientUser.getUserId()));
    	resp = mycustomizedService.queryMyCustomized(req);
    	if(resp==null){
    		 return "redirect:/home/config";
    	}else{
    		 SessionUtil.setUserConfig(resp.getData());
    		 return "redirect:/home/index";
    	}
       
    }
    
   
}

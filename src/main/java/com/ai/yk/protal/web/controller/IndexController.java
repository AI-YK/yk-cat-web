package com.ai.yk.protal.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ai.opt.sdk.util.CollectionUtil;
import com.ai.paas.ipaas.i18n.ResWebBundle;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.mytopics.MyTopicsVo;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.service.mytopics.MytopicsService;
import com.ai.yk.protal.web.utils.SessionUtil;
import com.alibaba.fastjson.JSON;

/**
 * Created by mengbo on 28/11/5.
 */
@Controller
@RequestMapping("/home")
public class IndexController {
    
    @Autowired
    private ResWebBundle rb;
    
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
    	if(config!=null){
    		model.addAttribute("config", config);
    		if(!CollectionUtil.isEmpty(config.getInterestList())){
    			model.addAttribute("configInterestList", JSON.toJSONString(config.getInterestList()));
    		}
    		if(config.getProvince()!=null){
    			model.addAttribute("provindeCode", config.getProvince().getCode());
    		}
    		if(config.getCity()!=null){
    			model.addAttribute("citylist", JSON.toJSONString(config.getCity()));
    		}
        	
    	}
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
    
   
}

package com.ai.yk.protal.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ai.paas.ipaas.i18n.ResWebBundle;

/**
 * Created by mengbo on 28/11/5.
 */
@Controller
public class IndexController {
	
   // private static final Logger LOGGER = LoggerFactory.getLogger(IndexController.class);
    
    @Autowired
    ResWebBundle rb;
    /**
     * 首页
     * @return
     */
    @RequestMapping("/home")
    public String indexView(Model model){
        
        return "/home/index";
    }
    
    /**
     * 配置页面
     */
    @RequestMapping("/config")
    public String configView(Model model){
        
        return "/home/config";
    }
    
   
}

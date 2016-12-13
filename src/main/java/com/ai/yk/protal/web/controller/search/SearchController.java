package com.ai.yk.protal.web.controller.search;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.utils.SessionUtil;

@Controller
@RequestMapping("/search")
public class SearchController {
	
	 /**
     * 搜索页
     */
    @RequestMapping("/view")
    public String searchView(Model model){
    	SSOClientUser clientUser = SessionUtil.getLoginUser();
    	if(clientUser==null){
    		model.addAttribute("isLogin", false);
    	}else{
    		model.addAttribute("isLogin", true);
    		model.addAttribute("user", clientUser);
    	}
        return "/search/search";
    }
    
    /**
     * 舆情列表页
     */
    @RequestMapping("/public")
    public String publicView(Model model){
    	SSOClientUser clientUser = SessionUtil.getLoginUser();
    	if(clientUser==null){
    		model.addAttribute("isLogin", false);
    	}else{
    		model.addAttribute("isLogin", true);
    		model.addAttribute("user", clientUser);
    	}
        return "/search/public";
    }

}

package com.ai.yk.protal.web.controller.search;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.content.area.AreaVo;
import com.ai.yk.protal.web.content.mycustomized.InterestVo;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.content.mytopics.MyTopicsVo;
import com.ai.yk.protal.web.controller.BaseController;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.utils.SessionUtil;

@Controller
@RequestMapping("/search")
public class SearchController extends BaseController{

	/**
	 * 搜索页
	 */
	@RequestMapping("/view")
	public String searchView(Model model, String _keyword) {
		SSOClientUser clientUser = SessionUtil.getLoginUser(request);
		if (clientUser == null) {
			model.addAttribute("isLogin", false);
		} else {
			model.addAttribute("isLogin", true);
			model.addAttribute("user", clientUser);
		}
		if (!StringUtil.isBlank(_keyword)) {
			try {
				model.addAttribute("_keyword",
						URLDecoder.decode(_keyword, "utf-8"));
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		return "/search/search";
	}

	/**
	 * 舆情列表页
	 */
	@RequestMapping("/public")
	public String publicView(Model mod,
			@RequestParam(value = "model", defaultValue = "") String model) {
		SSOClientUser clientUser = SessionUtil.getLoginUser(request);
		if (clientUser == null) {
			mod.addAttribute("isLogin", false);
		} else {
			mod.addAttribute("isLogin", true);
			mod.addAttribute("user", clientUser);
		}
		mod.addAttribute("model", model);
		MyCustomizedVo config = SessionUtil.getUserConfig();
    	if(config!=null){
    		initConfig(mod, config);
    	}
    	mod.addAttribute("config", config);
    	List<MyTopicsVo> topics = SessionUtil.getTopics();
    	if(topics==null||topics.size()==0){
    		mod.addAttribute("hasTopic", false);
    	}else{
    		mod.addAttribute("hasTopic", true);
    		mod.addAttribute("topics", topics);
    	}
		return "/search/public";
	}
	
	private void initConfig(Model mod,MyCustomizedVo config){
		AreaVo province = config.getProvince();
		if(province!=null){
			mod.addAttribute("province", province.getBusCode());
		}
		List<AreaVo> cities = config.getCity();
		if(cities!=null&&cities.size()>0){
			StringBuffer cityStr = new StringBuffer();
			for(AreaVo city:cities){
				cityStr .append(",").append(city.getCode());
			}
			
			mod.addAttribute("cities", cityStr.substring(1));
		}
		List<InterestVo> interestes =  config.getInterestList();
		if(interestes!=null&&interestes.size()>0){
			String interestStr = "";
			for(InterestVo interest:interestes){
				interestStr = interestStr + ","+interest.getBusinessId();
			}
			interestStr = interestStr.substring(1);
			mod.addAttribute("interestes", interestStr);
		}
		
	}

	/**
	 * 舆情列表页
	 */
	@RequestMapping("/event")
	public String eventView(Model model) {
		SSOClientUser clientUser = SessionUtil.getLoginUser(request);
		if (clientUser == null) {
			model.addAttribute("isLogin", false);
		} else {
			model.addAttribute("isLogin", true);
			model.addAttribute("user", clientUser);
		}
		MyCustomizedVo config = SessionUtil.getUserConfig();
    	if(config!=null){  
    		initConfig(model, config);
    	}
		return "/search/event";
	}

}

package com.ai.yk.protal.web.controller.search;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ai.opt.sdk.util.StringUtil;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.utils.SessionUtil;

@Controller
@RequestMapping("/search")
public class SearchController {

	/**
	 * 搜索页
	 */
	@RequestMapping("/view")
	public String searchView(Model model, String _keyword) {
		SSOClientUser clientUser = SessionUtil.getLoginUser();
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
		SSOClientUser clientUser = SessionUtil.getLoginUser();
		if (clientUser == null) {
			mod.addAttribute("isLogin", false);
		} else {
			mod.addAttribute("isLogin", true);
			mod.addAttribute("user", clientUser);
		}
		mod.addAttribute("model", model);
		return "/search/public";
	}

	/**
	 * 舆情列表页
	 */
	@RequestMapping("/event")
	public String eventView(Model model) {
		SSOClientUser clientUser = SessionUtil.getLoginUser();
		if (clientUser == null) {
			model.addAttribute("isLogin", false);
		} else {
			model.addAttribute("isLogin", true);
			model.addAttribute("user", clientUser);
		}
		return "/search/event";
	}

}

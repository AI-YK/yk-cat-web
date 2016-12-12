package com.ai.yk.protal.web.controller.user;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ai.yk.protal.web.content.RequestHead;
import com.ai.yk.protal.web.content.ResponseHead;
import com.ai.yk.protal.web.content.user.UserRPMessage;
import com.ai.yk.protal.web.service.UserService;
import com.fasterxml.jackson.databind.Module;

@Controller
public class UserController {

	@Autowired
	private UserService userService;
	
	/**
	 * 用户登录
	 * @param model
	 * @return
	 */
    @RequestMapping("/user/login")
    public String login(Model model){
    	
    	
    	return "/login/";
    }
	
}

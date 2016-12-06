package com.ai.yk.protal.web.controller;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ai.paas.ipaas.i18n.ResWebBundle;

/**
 * Created by mengbo on 28/11/5.
 */
@Controller
public class IndexController {
	
    private static final Logger LOGGER = LoggerFactory.getLogger(IndexController.class);
    
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
    
    @RequestMapping("test")
    @ResponseBody
    public String test(){
        return "test";
    }

    /**
     * 适用于点击"登录"按钮后的跳转
     * @return
     */
    @RequestMapping("/p/index")
    public String ssoIndexView(){
        return "redirect:/";
    }

    /**
     * 单点退出
     * @param request
     * @param session
     * @return
     */
    @RequestMapping("/ssologout")
    public String ssoLogout(HttpServletRequest request,HttpSession session){
        /*String logOutServerUrl = SSOClientUtil.getLogOutServerUrlRuntime(request);
        String logOutBackUrl = SSOClientUtil.getLogOutBackUrlRuntime(request);
        try {
            if(UserUtil.getSsoUser()!=null){
                session.removeAttribute(SSOClientConstants.USER_SESSION_KEY);
                session.invalidate();
            }
        } catch (Exception e) {
            LOGGER.error("用户登出失败",e);
        }*/
    	//"redirect:"+logOutServerUrl + "?service=" + logOutBackUrl;
        return null;
    }

    /**
     * 笔译订单
     * @return
     */
    @RequestMapping("/written")
    public String writtenView(){
        return "forward:/order/create/text";
    }

    /**
     * 口译订单
     * @return
     */
    @RequestMapping("/oral")
    public String oralView(){
        return "forward:/order/create/oral";
    }

    /**
     * 关于我们
     * @return
     */
    @RequestMapping("/aboutus")
    public String aboutus(){
        return staticUrl()+"/about";
    }


    private String staticUrl(){
        return Locale.SIMPLIFIED_CHINESE.equals(rb.getDefaultLocale())?"/static":"/staticEs";
    }
}

package com.ai.yk.protal.web.controller;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ai.opt.sso.client.filter.SSOClientConstants;
import com.ai.opt.sso.client.filter.SSOClientUtil;
import com.ai.paas.ipaas.i18n.ResWebBundle;
import com.ai.paas.ipaas.mcs.interfaces.ICacheClient;
import com.ai.yk.protal.web.utils.AiPassUitl;
import com.ai.yk.protal.web.utils.UserUtil;
import com.alibaba.fastjson.JSON;

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
    public String indexView(Model uiModel){
        //获取基础数据
        ICacheClient cacheClient = AiPassUitl.getCacheClient();
        String homeDataStr = cacheClient.get(CacheKey.HOME_DATA_CONFIG_KEY);
        //TODO... 模拟数据
        HomeDataConfig homeDataCon = new HomeDataConfig();
        if (StringUtils.isNotBlank(homeDataStr)) {
            homeDataCon = JSON.parseObject(homeDataStr, HomeDataConfig.class);
        }
        homeDataCon.setCustomNum("54900");//客户
        homeDataCon.setLgdataNum("26783000");//语料
        homeDataCon.setOrderNum("600892");//订单数量
        homeDataCon.setInterpreterNum("78239");//译员数量
        homeDataCon.setLanguageNum("60");//语种
        uiModel.addAttribute("homeData",homeDataCon);
        return "/home";
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
        String logOutServerUrl = SSOClientUtil.getLogOutServerUrlRuntime(request);
        String logOutBackUrl = SSOClientUtil.getLogOutBackUrlRuntime(request);
        try {
            if(UserUtil.getSsoUser()!=null){
                session.removeAttribute(SSOClientConstants.USER_SESSION_KEY);
                session.invalidate();
            }
        } catch (Exception e) {
            LOGGER.error("用户登出失败",e);
        }
        return "redirect:"+logOutServerUrl + "?service=" + logOutBackUrl;
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

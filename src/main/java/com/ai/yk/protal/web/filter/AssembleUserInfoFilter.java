package com.ai.yk.protal.web.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.model.user.SSOClientUser;
import com.ai.yk.protal.web.utils.SessionUtil;


public class AssembleUserInfoFilter implements Filter {
	
	private static final Logger log = LoggerFactory.getLogger(AssembleUserInfoFilter.class);
    private String[] ignor_suffix = {};
    private String ignorSuffixStr = "";
   

    public void init(FilterConfig filterConfig) throws ServletException {
        ignorSuffixStr = filterConfig.getInitParameter("ignore_suffix");
        if (!"".equals(ignorSuffixStr.trim())) {
            this.ignor_suffix = filterConfig.getInitParameter("ignore_suffix").split(",");
        }
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse resp = (HttpServletResponse) response;
        if (shouldFilter(req)) {
            SSOClientUser user = SessionUtil.getLoginUser(req);
            if (user == null) {
            	log.info("用户未登录。。。。。。。。。。。。。。。");
            	resp.sendRedirect(req.getContextPath()+"/user/login");
            	return;
            } 
            log.info("用户已登录。。。。。。。。。。。。。。。");
            MyCustomizedVo customizedVo = SessionUtil.getUserConfig();
			if(!req.getRequestURI().endsWith("config")&&customizedVo==null){
				 log.info("跳转到配置页面。。。。。。。。。。。。。。。");
				resp.sendRedirect(req.getContextPath()+"/home/config");
				return;
			}
        }
        chain.doFilter(req, response);
    }

    @Override
    public void destroy() {

    }

 

    private boolean shouldFilter(HttpServletRequest req) {
        if (ignorSuffixStr==null || "".equals(ignorSuffixStr)){
        	return true;
        }
       if (ignor_suffix != null && ignor_suffix.length > 0) {
            String uri = req.getRequestURI().toLowerCase();
            for (String suffix : ignor_suffix) {
            	if(suffix.endsWith("*")){
            		suffix = suffix.substring(0, suffix.length()-2);
            		if(uri.indexOf(suffix)>-1){
            			 return false; 
            		}
            	}else{
            		if (uri.endsWith(suffix)) {
                         return false; 
                    }
            	}
               
            }
        }
        return true;
       
    }
}

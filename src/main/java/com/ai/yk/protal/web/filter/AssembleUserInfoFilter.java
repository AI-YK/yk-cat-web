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
import javax.servlet.http.HttpSession;

import com.ai.yk.protal.web.constants.Constants;
import com.ai.yk.protal.web.model.user.SSOClientUser;


public class AssembleUserInfoFilter implements Filter {
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
        if (false) {
        	HttpSession session = req.getSession();
            SSOClientUser user = (SSOClientUser) session.getAttribute(Constants.USER_SESSION_KEY);
            if (user == null) {
            	resp.sendRedirect(req.getContextPath()+"/user/login");
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
                if (uri.endsWith(suffix)) {
                    return false;
                }
            }
        }
        return true;
       
    }
}

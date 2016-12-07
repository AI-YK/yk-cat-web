package com.ai.yk.protal.web.model.user;

import java.io.Serializable;

/**
 * @Description: 登录用户信息
 * @author hougang@asiainfo.com
 * @date 2016年12月7日 上午11:55:06 
 * @version V1.0
 */
public class SSOClientUser implements Serializable {

	private static final long serialVersionUID = 801551365014220356L;
	
	//登录名称
    private String username;
    
    //账号ID
    private String userId;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}
    
    

}

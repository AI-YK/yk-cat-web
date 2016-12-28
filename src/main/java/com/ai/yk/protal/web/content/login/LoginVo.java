package com.ai.yk.protal.web.content.login;

import java.io.Serializable;

public class LoginVo implements Serializable{
	
	private static final long serialVersionUID = 8128792418164305223L;

	private String userName;
	
	private String password;
	
	private String loginMode="2";

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getLoginMode() {
		return loginMode;
	}

	public void setLoginMode(String loginMode) {
		this.loginMode = loginMode;
	}
	
	

}

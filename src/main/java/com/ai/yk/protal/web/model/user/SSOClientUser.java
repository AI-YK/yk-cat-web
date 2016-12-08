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

    //账号ID
    private String userId;
	
	//登录名称
    private String userName;
    
    private String fullName;

	private String phone;
	
	private String companyName;
    
    private String balance;
    
    private String expiredTime;
    
    private String industry;
    
    private String password;
    
    private String state;
    
    private String tradeAmount;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getBalance() {
		return balance;
	}

	public void setBalance(String balance) {
		this.balance = balance;
	}

	public String getExpiredTime() {
		return expiredTime;
	}

	public void setExpiredTime(String expiredTime) {
		this.expiredTime = expiredTime;
	}

	public String getIndustry() {
		return industry;
	}

	public void setIndustry(String industry) {
		this.industry = industry;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getTradeAmount() {
		return tradeAmount;
	}

	public void setTradeAmount(String tradeAmount) {
		this.tradeAmount = tradeAmount;
	}
    
    
    
}

package com.ai.yk.protal.web.model.sms;

import java.io.Serializable;

/**
 * 短信发送bean <br>
 * Date: 2016年11月9日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
public class SmsRequest implements Serializable {
	private static final long serialVersionUID = 5133864361386064335L;
	/** 发送手机 **/
	private String phone;
	/** 发送内容 **/
	private String content;
	/** 最多发送次数key **/
	private String maxCountKey;
	/** 最多发送次数超时时间key **/
	private String maxCountOverTimeKey;
	/** 当前发送次数key **/
	private String nowCountKey;
	/** 手机验证码key **/
	private String codeKey;
	/** 手机验证码超时时间 **/
	private String codeOverTimeKey;
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getMaxCountKey() {
		return maxCountKey;
	}
	public void setMaxCountKey(String maxCountKey) {
		this.maxCountKey = maxCountKey;
	}
	public String getMaxCountOverTimeKey() {
		return maxCountOverTimeKey;
	}
	public void setMaxCountOverTimeKey(String maxCountOverTimeKey) {
		this.maxCountOverTimeKey = maxCountOverTimeKey;
	}
	public String getNowCountKey() {
		return nowCountKey;
	}
	public void setNowCountKey(String nowCountKey) {
		this.nowCountKey = nowCountKey;
	}
	public String getCodeKey() {
		return codeKey;
	}
	public void setCodeKey(String codeKey) {
		this.codeKey = codeKey;
	}
	public String getCodeOverTimeKey() {
		return codeOverTimeKey;
	}
	public void setCodeOverTimeKey(String codeOverTimeKey) {
		this.codeOverTimeKey = codeOverTimeKey;
	}
	
}

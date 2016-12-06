package com.ai.yk.protal.web.content;

import java.io.Serializable;

public class RequestHead implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6892804554440244822L;
	/**
	 * 访问口令
	 * 必填：N
	 */
	private String token;
	/**
	 * 客户
	 * 必填：N
	 */
	private String client;
	/**
	 * 版本号
	 * 必填：N
	 */
	private String version;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getClient() {
		return client;
	}
	public void setClient(String client) {
		this.client = client;
	}
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	public RequestHead(String token, String client, String version) {
		super();
		this.token = token;
		this.client = client;
		this.version = version;
	}
	public RequestHead() {
		super();
	}
	
	

}
package com.ai.yk.protal.web.content;

public class RequestHead{
	
	private String result;
	private String message;
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public RequestHead(String result, String message) {
		super();
		this.result = result;
		this.message = message;
	}
	public RequestHead() {
		super();
	}
	
}
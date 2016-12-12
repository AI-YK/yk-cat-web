package com.ai.yk.protal.web.content;

import java.io.Serializable;

public class ResponseHead  implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = -5848001764689033190L;
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
	public ResponseHead(String result, String message) {
		super();
		this.result = result;
		this.message = message;
	}
	public ResponseHead() {
		super();
	}
	

}
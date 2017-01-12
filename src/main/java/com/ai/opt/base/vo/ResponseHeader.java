package com.ai.opt.base.vo;

import java.io.Serializable;

/**
 * 服务返回报文头信息<br>
 * 标识业务处理成功或业务异常原因<br>
 * Date: 2016年2月26日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author mayt
 */
public class ResponseHeader implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 是否业务成功
     */
    private boolean isSuccess;

    private String resultCode;

    private String resultMessage;
    
    //用于异常时，存放堆栈信息
    private Object info="";

    public ResponseHeader(boolean isSuccess, String resultCode, String resultMessage) {
        this.isSuccess = isSuccess;
        this.resultCode = resultCode;
        this.resultMessage = resultMessage;
    }
    
    public ResponseHeader(boolean isSuccess, String resultCode, String resultMessage,Object info) {
    	this.isSuccess = isSuccess;
    	this.resultCode = resultCode;
    	this.resultMessage = resultMessage;
    	this.info=info;
    }

    public ResponseHeader() {

    }

    public String getResultCode() {
        return resultCode;
    }

    public void setResultCode(String resultCode) {
        this.resultCode = resultCode;
    }

    public String getResultMessage() {
        return resultMessage;
    }

    public void setResultMessage(String resultMessage) {
        this.resultMessage = resultMessage;
    }

    public boolean isSuccess() {
        return isSuccess;
    }
    public boolean getIsSuccess() {
    	return isSuccess;
    }

    public void setIsSuccess(boolean isSuccess) {
        this.isSuccess = isSuccess;
    }

	public void setSuccess(boolean isSuccess) {
		this.isSuccess = isSuccess;
	}

	public Object getInfo() {
		return info;
	}

	public void setInfo(Object info) {
		this.info = info;
	}
    
    

}

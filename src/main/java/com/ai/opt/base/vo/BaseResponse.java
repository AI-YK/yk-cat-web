package com.ai.opt.base.vo;

import java.io.Serializable;

/**
 * 服务返回基本信息<br>
 * Date: 2016年2月26日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author mayt
 */
public class BaseResponse implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 服务返回报文头信息
     */
    private ResponseHeader responseHeader;

    public ResponseHeader getResponseHeader() {
        return responseHeader;
    }

    public void setResponseHeader(ResponseHeader responseHeader) {
        this.responseHeader = responseHeader;
    }
}

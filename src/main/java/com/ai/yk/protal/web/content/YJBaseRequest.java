package com.ai.yk.protal.web.content;

import java.io.Serializable;
/**
 * 
 * BaseRequest<br>
 * Date: 2016年12月6日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
public class YJBaseRequest<T>  implements Serializable {
    private static final long serialVersionUID = 6972306996044603094L;
	private RequestHead head;
	private T message;
	public RequestHead getHead() {
		return head;
	}

	public void setHead(RequestHead head) {
		this.head = head;
	}

	public T getMessage() {
		return message;
	}

	public void setMessage(T message) {
		this.message = message;
	}
			
}

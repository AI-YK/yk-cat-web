package com.ai.yk.protal.web.content;

import java.io.Serializable;

public class YJBaseResponse<T> implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -1517508517685384606L;
	private ResponseHead head;
    private T data;
	public ResponseHead getHead() {
		return head;
	}

	public void setHead(ResponseHead head) {
		this.head = head;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}
}


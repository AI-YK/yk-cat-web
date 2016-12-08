package com.ai.yk.protal.web.content.mycustomized;

import java.io.Serializable;

public class MyCustomizedListMessage implements Serializable {
	private static final long serialVersionUID = 5812375878262872787L;
	// 用户id
	private Integer createId;
	public Integer getCreateId() {
		return createId;
	}
	public void setCreateId(Integer createId) {
		this.createId = createId;
	}
}

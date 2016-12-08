package com.ai.yk.protal.web.content.mycustomized;

import java.io.Serializable;

public class MyCustomizedMessage implements Serializable {
	private static final long serialVersionUID = 5812375878262872787L;
	// 用户数据中心id
	private String srcId;
	public String getSrcId() {
		return srcId;
	}
	public void setSrcId(String srcId) {
		this.srcId = srcId;
	}
}

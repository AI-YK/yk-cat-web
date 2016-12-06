package com.ai.yk.protal.web.content.event;

import java.io.Serializable;

public class EventDetailsMessage implements Serializable {
	private static final long serialVersionUID = -3627850423820477791L;
    //数据中心id
	private int srcId;
	public int getSrcId() {
		return srcId;
	}
	public void setSrcId(int srcId) {
		this.srcId = srcId;
	}
    
}

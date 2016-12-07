package com.ai.yk.protal.web.content.publicaffairs;

import java.io.Serializable;
import java.util.List;

public class IocSentimentListResponse implements Serializable {

	private static final long serialVersionUID = 2829934151060810654L;
	private List<IocSentimentVo> locSentimentCount;

	public List<IocSentimentVo> getLocSentimentCount() {
		return locSentimentCount;
	}

	public void setLocSentimentCount(List<IocSentimentVo> locSentimentCount) {
		this.locSentimentCount = locSentimentCount;
	}

}

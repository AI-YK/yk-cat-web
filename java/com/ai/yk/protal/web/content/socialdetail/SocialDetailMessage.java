package com.ai.yk.protal.web.content.socialdetail;

import java.io.Serializable;

public class SocialDetailMessage implements Serializable{
	
	private static final long serialVersionUID = -6360190606915084713L;
	/**资讯id   是否必填：Y**/
	private String informationId;

	public String getInformationId() {
		return informationId;
	}

	public void setInformationId(String informationId) {
		this.informationId = informationId;
	}

	public SocialDetailMessage(String informationId) {
		super();
		this.informationId = informationId;
	}

	public SocialDetailMessage() {
		super();
	}
}
		
		

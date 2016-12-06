package com.ai.yk.protal.web.content.socialdetail;
public class SocialDetailMessage{
	
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
		
		

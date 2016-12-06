package com.ai.yk.protal.web.content.relatedInformation;

import com.ai.yk.protal.web.content.YJRequest;
/**
 * 相关资讯接口入参
 * @author mengbo 
 *
 */
public class RelatedInformationRequest extends YJRequest {

	private RelatedInformationMessage message;

	public RelatedInformationMessage getMessage() {
		return message;
	}

	public void setMessage(RelatedInformationMessage message) {
		this.message = message;
	}
	
	



	

	
}

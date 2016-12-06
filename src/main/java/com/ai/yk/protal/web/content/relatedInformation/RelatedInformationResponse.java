package com.ai.yk.protal.web.content.relatedInformation;

import com.ai.yk.protal.web.content.YJResponse;

/**
 * 相关资讯接口出参
 * @author mengbo 
 *
 */
public class RelatedInformationResponse extends YJResponse{

	private RelatedInformationData data;

	public RelatedInformationData getData() {
		return data;
	}

	public void setData(RelatedInformationData data) {
		this.data = data;
	}

	
	
}

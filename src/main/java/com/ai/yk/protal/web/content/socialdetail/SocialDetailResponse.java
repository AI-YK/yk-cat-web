package com.ai.yk.protal.web.content.socialdetail;

import com.ai.yk.protal.web.content.YJResponse;
/**
 * 社交详情接口出参
 * @author shancong
 *
 */
public class SocialDetailResponse extends YJResponse{

	private SocialDetailData data;

	public SocialDetailData getData() {
		return data;
	}

	public void setData(SocialDetailData data) {
		this.data = data;
	}

	
	
}

package com.ai.yk.protal.web.content.share;

import java.io.Serializable;

public class ShareCountVo implements Serializable {

	private static final long serialVersionUID = 6511354188716578452L;
	/*资讯id*/
	private String id;
	/*分享次数*/
	private String shareCount;
	/*收藏次数*/
	private String collCount;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getShareCount() {
		return shareCount;
	}
	public void setShareCount(String shareCount) {
		this.shareCount = shareCount;
	}
	public String getCollCount() {
		return collCount;
	}
	public void setCollCount(String collCount) {
		this.collCount = collCount;
	}
	
}

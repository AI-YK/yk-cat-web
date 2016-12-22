package com.ai.yk.protal.web.content.socialdetail;

import java.io.Serializable;


public class SocialDetailResponse implements Serializable{
	
	private static final long serialVersionUID = 1998478213894278813L;
	private WeiboVo weibo;
	private Integer isCollection;
	public WeiboVo getWeibo() {
		return weibo;
	}
	public void setWeibo(WeiboVo weibo) {
		this.weibo = weibo;
	}
	public Integer getIsCollection() {
		return isCollection;
	}
	public void setIsCollection(Integer isCollection) {
		this.isCollection = isCollection;
	}
	
}
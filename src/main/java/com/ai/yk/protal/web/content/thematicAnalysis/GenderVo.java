package com.ai.yk.protal.web.content.thematicAnalysis;

import java.io.Serializable;

public class GenderVo implements Serializable {

	private static final long serialVersionUID = 4015923560400242574L;
	private Integer twitter;
	private Integer weixin;
	private Integer facebook;
	private Integer weibo;
	private Integer news;

	public Integer getTwitter() {
		return twitter;
	}

	public void setTwitter(Integer twitter) {
		this.twitter = twitter;
	}

	public Integer getWeixin() {
		return weixin;
	}

	public void setWeixin(Integer weixin) {
		this.weixin = weixin;
	}

	public Integer getFacebook() {
		return facebook;
	}

	public void setFacebook(Integer facebook) {
		this.facebook = facebook;
	}

	public Integer getWeibo() {
		return weibo;
	}

	public void setWeibo(Integer weibo) {
		this.weibo = weibo;
	}

	public Integer getNews() {
		return news;
	}

	public void setNews(Integer news) {
		this.news = news;
	}

}

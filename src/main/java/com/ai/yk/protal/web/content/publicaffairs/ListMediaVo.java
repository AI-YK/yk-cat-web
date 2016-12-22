package com.ai.yk.protal.web.content.publicaffairs;

import java.io.Serializable;

public class ListMediaVo implements Serializable {

	private static final long serialVersionUID = 9032600515949392910L;
	
	private Integer mediaLevel;
	private String mediaName;
	private Integer count;
	public Integer getMediaLevel() {
		return mediaLevel;
	}
	public void setMediaLevel(Integer mediaLevel) {
		this.mediaLevel = mediaLevel;
	}
	public String getMediaName() {
		return mediaName;
	}
	public void setMediaName(String mediaName) {
		this.mediaName = mediaName;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
}

package com.ai.yk.protal.web.content.thematicAnalysis;

import java.io.Serializable;

public class NMSDVo implements Serializable {
	private static final long serialVersionUID = -1239576829447756211L;
	private Integer mediaLevel;
	private String mediaName;
	private Integer cnt;
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
	public Integer getCnt() {
		return cnt;
	}
	public void setCnt(Integer cnt) {
		this.cnt = cnt;
	}
	
}

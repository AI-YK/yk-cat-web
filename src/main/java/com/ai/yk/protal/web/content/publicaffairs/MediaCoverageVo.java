package com.ai.yk.protal.web.content.publicaffairs;

import java.io.Serializable;
/**
 * 媒体覆盖
 */
public class MediaCoverageVo implements Serializable {
	private static final long serialVersionUID = -2642323675106612884L;
	private String name;
	private Integer count;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	
}

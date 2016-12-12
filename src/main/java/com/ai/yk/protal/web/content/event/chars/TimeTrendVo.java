package com.ai.yk.protal.web.content.event.chars;

import java.io.Serializable;

/**
 * 事件态势
 */
public class TimeTrendVo implements Serializable {
	private static final long serialVersionUID = -6927438230646963254L;
	/**
	 * 事件态势
	 */
	private String time;
	/**
	 * 新闻数量
	 */
	private Integer count;

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

}

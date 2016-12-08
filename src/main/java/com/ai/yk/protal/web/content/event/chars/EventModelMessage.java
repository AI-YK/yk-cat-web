package com.ai.yk.protal.web.content.event.chars;

import java.io.Serializable;

/**
 * 事件图表
 */
public class EventModelMessage implements Serializable {

	private static final long serialVersionUID = -4798138066671833197L;
	/**
	 * 事件srcId
	 */
	private String eventId;
	/**
	 * 模型名称
	 * timeTrend 事件态势
	 * spreadTrend 事件传播路径
	 */
	private String models;
	/**
	 * 开始时间
	 */
	private String beginDate;
	/**
	 * 结束时间
	 */
	private String endDate;

	public String getEventId() {
		return eventId;
	}

	public void setEventId(String eventId) {
		this.eventId = eventId;
	}

	public String getModels() {
		return models;
	}

	public void setModels(String models) {
		this.models = models;
	}

	public String getBeginDate() {
		return beginDate;
	}

	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

}

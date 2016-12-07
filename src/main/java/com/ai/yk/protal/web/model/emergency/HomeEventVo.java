package com.ai.yk.protal.web.model.emergency;

import java.io.Serializable;
import java.util.List;

import com.ai.yk.protal.web.content.event.EventVo;

public class HomeEventVo implements Serializable{
	
	/**
	 * 突发事件（列表和chart）
	 */
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -5941119347654017254L;
	/**
	 *突发事件列表
	 */
	private List<EventVo> eventList;
	/**
	 * chart集合
	 */
	private List<ChartGroup> group;
	
	public List<EventVo> getEventList() {
		return eventList;
	}

	public void setEventList(List<EventVo> eventList) {
		this.eventList = eventList;
	}

	public List<ChartGroup> getGroup() {
		return group;
	}

	public void setGroup(List<ChartGroup> group) {
		this.group = group;
	}
	
	

}

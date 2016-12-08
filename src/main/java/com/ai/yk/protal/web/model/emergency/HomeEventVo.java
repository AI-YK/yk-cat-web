package com.ai.yk.protal.web.model.emergency;

import java.io.Serializable;
import java.util.List;

import com.ai.yk.protal.web.content.event.EventVo;
import com.ai.yk.protal.web.content.event.chars.EventModelResponse;

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
	private List<EventModelResponse> groups;
	
	public List<EventVo> getEventList() {
		return eventList;
	}
	public void setEventList(List<EventVo> eventList) {
		this.eventList = eventList;
	}
	public List<EventModelResponse> getGroups() {
		return groups;
	}
	public void setGroups(List<EventModelResponse> groups) {
		this.groups = groups;
	}
	
	
}

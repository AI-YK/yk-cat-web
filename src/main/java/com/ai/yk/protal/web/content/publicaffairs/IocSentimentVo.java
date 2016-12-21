package com.ai.yk.protal.web.content.publicaffairs;

import java.io.Serializable;

/**
 * 舆情走势
 */
public class IocSentimentVo implements Serializable {
	private static final long serialVersionUID = -6002675065589055412L;
	/**
	 * locationId 
	 */
	private Integer locationId;
	/**
	 * cityNameZh
	 */
	private String cityNameZh;
	/**
	 * 正面
	 */
	private Integer positiveCnt;
	/**
	 * 负面
	 */
	private Integer negativeCnt;
	public Integer getLocationId() {
		return locationId;
	}
	public void setLocationId(Integer locationId) {
		this.locationId = locationId;
	}
	public String getCityNameZh() {
		return cityNameZh;
	}
	public void setCityNameZh(String cityNameZh) {
		this.cityNameZh = cityNameZh;
	}
	public Integer getPositiveCnt() {
		return positiveCnt;
	}
	public void setPositiveCnt(Integer positiveCnt) {
		this.positiveCnt = positiveCnt;
	}
	public Integer getNegativeCnt() {
		return negativeCnt;
	}
	public void setNegativeCnt(Integer negativeCnt) {
		this.negativeCnt = negativeCnt;
	}

	
}

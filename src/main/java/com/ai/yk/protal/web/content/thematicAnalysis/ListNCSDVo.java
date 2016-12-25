package com.ai.yk.protal.web.content.thematicAnalysis;

import java.io.Serializable;

public class ListNCSDVo implements Serializable {
	private static final long serialVersionUID = 8745590011579153481L;
	/**
	 * 负面
	 */
	private Integer countNegative;
	/**
	 * 正面
	 */
	private Integer countPositive;
	/**
	 * 城市
	 */
	private String countryName;

	public Integer getCountNegative() {
		return countNegative;
	}

	public void setCountNegative(Integer countNegative) {
		this.countNegative = countNegative;
	}

	public Integer getCountPositive() {
		return countPositive;
	}

	public void setCountPositive(Integer countPositive) {
		this.countPositive = countPositive;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

}

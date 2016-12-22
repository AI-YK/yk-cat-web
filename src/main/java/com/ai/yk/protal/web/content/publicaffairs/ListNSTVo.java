package com.ai.yk.protal.web.content.publicaffairs;

import java.io.Serializable;

public class ListNSTVo implements Serializable {

	private static final long serialVersionUID = -5147297888420767838L;
	
	private String date;
	private Integer count;
	private Integer countPositive;
	private Integer countNegative;
	private Integer countNeutral;
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public Integer getCountPositive() {
		return countPositive;
	}
	public void setCountPositive(Integer countPositive) {
		this.countPositive = countPositive;
	}
	public Integer getCountNegative() {
		return countNegative;
	}
	public void setCountNegative(Integer countNegative) {
		this.countNegative = countNegative;
	}
	public Integer getCountNeutral() {
		return countNeutral;
	}
	public void setCountNeutral(Integer countNeutral) {
		this.countNeutral = countNeutral;
	}
}

package com.ai.yk.protal.web.content.thematicAnalysis;

import java.io.Serializable;

public class GenderVo implements Serializable {

	private static final long serialVersionUID = 4015923560400242574L;
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

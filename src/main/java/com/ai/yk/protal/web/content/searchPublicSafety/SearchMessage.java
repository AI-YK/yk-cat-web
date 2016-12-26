package com.ai.yk.protal.web.content.searchPublicSafety;

public class SearchMessage extends SearchPublicSafetyMessage {

	private static final long serialVersionUID = 7547333516789735953L;
	
	/**专题id(如果opType=1 传srcId 如果opType=2传id)  是否必填：Y**/
	private String id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}

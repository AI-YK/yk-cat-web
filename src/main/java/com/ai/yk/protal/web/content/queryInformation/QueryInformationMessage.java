package com.ai.yk.protal.web.content.queryInformation;
public class QueryInformationMessage{
		
	private String informationId;

	public String getInformationId() {
		return informationId;
	}

	public void setInformationId(String informationId) {
		this.informationId = informationId;
	}

	public QueryInformationMessage(String informationId) {
		super();
		this.informationId = informationId;
	}

	public QueryInformationMessage() {
		super();
	}
	
	
		
}
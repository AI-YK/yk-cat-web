package com.ai.yk.protal.web.content.queryInformation;

import java.io.Serializable;
/**
 *查询资讯详情（新闻）
 */
public class QueryInformationMessage implements Serializable{
		
	private static final long serialVersionUID = -7564101976157362994L;
	/**资讯ID**/
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
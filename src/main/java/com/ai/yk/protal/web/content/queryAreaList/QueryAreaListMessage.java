package com.ai.yk.protal.web.content.queryAreaList;

import java.io.Serializable;

public class QueryAreaListMessage implements Serializable{
	private static final long serialVersionUID = -3060281996207048738L;
	    
	/**上级编码      是否必填：Y**/
	private String parentCode;
	/**所属分类（continent：大洲    country：国家   province：省份    city:城市）**/
	private String classify;
	
	public String getParentCode() {
		return parentCode;
	}

	public void setParentCode(String parentCode) {
		this.parentCode = parentCode;
	}
	public String getClassify() {
		return classify;
	}

	public void setClassify(String classify) {
		this.classify = classify;
	}

	public QueryAreaListMessage(String parentCode, String classify) {
		super();
		this.parentCode = parentCode;
		this.classify = classify;
	}

	public QueryAreaListMessage() {
		super();
	}
}
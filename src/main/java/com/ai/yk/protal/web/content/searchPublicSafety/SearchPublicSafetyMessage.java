package com.ai.yk.protal.web.content.searchPublicSafety;

/**
 * 公共安全事件检索接口入参
 * @author shancong
 */
public class SearchPublicSafetyMessage extends SearchPublicMessage{

	private static final long serialVersionUID = 1661180364723582795L;
	
	/**
	 * 是否是专题 0通用数据  1专题
	 */
	private int isTopic;
	
	/**专题id(如果opType=1 传srcId 如果opType=2传id)  是否必填：Y**/
	private String id;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getIsTopic() {
		return isTopic;
	}

	public void setIsTopic(int isTopic) {
		this.isTopic = isTopic;
	}
	
	
}

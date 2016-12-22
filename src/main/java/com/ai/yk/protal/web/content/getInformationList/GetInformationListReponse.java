package com.ai.yk.protal.web.content.getInformationList;

import java.io.Serializable;

/**
 * 事件内新闻列表接口出参
 * 
 * @author mengbo
 * 
 */
public class GetInformationListReponse implements Serializable {
	private static final long serialVersionUID = 4468075045375099594L;
	
	/**记录数   是否必填：Y**/
	private Integer resultCount;
	private GetInformationListVo resultList;
	public Integer getResultCount() {
		return resultCount;
	}
	public void setResultCount(Integer resultCount) {
		this.resultCount = resultCount;
	}
	public GetInformationListVo getResultList() {
		return resultList;
	}
	public void setResultList(GetInformationListVo resultList) {
		this.resultList = resultList;
	}
}

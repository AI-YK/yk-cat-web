package com.ai.yk.protal.web.content.relatedInformation;

import java.io.Serializable;
import java.util.List;



/**
 * 相关资讯接口出参
 * @author mengbo 
 *
 */
public class RelatedInformationResponse implements Serializable{
	
	private static final long serialVersionUID = -7538617144770263163L;
	/**记录数    是否必填：Y**/
	private Integer resultCount;
	
	private List<RelatedInformationResults> resultList;

	public Integer getResultCount() {
		return resultCount;
	}

	public void setResultCount(Integer resultCount) {
		this.resultCount = resultCount;
	}

	public List<RelatedInformationResults> getResultList() {
		return resultList;
	}

	public void setResultList(List<RelatedInformationResults> resultList) {
		this.resultList = resultList;
	}
	
}

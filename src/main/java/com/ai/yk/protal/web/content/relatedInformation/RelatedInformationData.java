package com.ai.yk.protal.web.content.relatedInformation;

import java.util.List;


public class RelatedInformationData {

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

	public RelatedInformationData(Integer resultCount, List<RelatedInformationResults> resultList) {
		super();
		this.resultCount = resultCount;
		this.resultList = resultList;
	}

	public RelatedInformationData() {
		super();
	}
}

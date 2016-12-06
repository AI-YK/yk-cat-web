package com.ai.yk.protal.web.content.getdatasourcelist;

import java.io.Serializable;
import java.util.List;

/**
 * 搜索数据源列表出参
 * 
 * @author mengbo
 * 
 */
public class GetDataSourceListReponse implements Serializable {
	private static final long serialVersionUID = 8569290408747580559L;
	private int resultCount;
	private List<GetDataSourceVo> resultList;
	public int getResultCount() {
		return resultCount;
	}
	public void setResultCount(int resultCount) {
		this.resultCount = resultCount;
	}
	public List<GetDataSourceVo> getResultList() {
		return resultList;
	}
	public void setResultList(List<GetDataSourceVo> resultList) {
		this.resultList = resultList;
	}
	
}

package com.ai.yk.protal.web.content.mytopics;

import java.io.Serializable;
import java.util.List;

public class MyTopicsResponse implements Serializable {
	private static final long serialVersionUID = 4480381459953262120L;
	/**
	 * 当前页面大小
	 */
    private Integer pageSize;
    /**
	 * 当前页数
	 */
    private Integer pageNo;
    /**
   	 * 总页数
   	 */
    private Integer totalPages;
    /**
   	 * 总条数
   	 */
    private Integer totalRows;
    private List<MyTopicsVo> results;
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public Integer getPageNo() {
		return pageNo;
	}
	public void setPageNo(Integer pageNo) {
		this.pageNo = pageNo;
	}
	public Integer getTotalPages() {
		return totalPages;
	}
	public void setTotalPages(Integer totalPages) {
		this.totalPages = totalPages;
	}
	public Integer getTotalRows() {
		return totalRows;
	}
	public void setTotalRows(Integer totalRows) {
		this.totalRows = totalRows;
	}
	public List<MyTopicsVo> getResults() {
		return results;
	}
	public void setResults(List<MyTopicsVo> results) {
		this.results = results;
	}
    
}

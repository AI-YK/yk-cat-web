package com.ai.yk.protal.web.content.queryKeyword;
public class QueryKeywordMessage{
	
	/**原标题   是否必须：Y**/
	private Integer pageSize;
	private Long beginTime;
	private Long endTime;
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
	public Long getBeginTime() {
		return beginTime;
	}
	public void setBeginTime(Long beginTime) {
		this.beginTime = beginTime;
	}
	public Long getEndTime() {
		return endTime;
	}
	public void setEndTime(Long endTime) {
		this.endTime = endTime;
	}
	public QueryKeywordMessage(Integer pageSize, Long beginTime, Long endTime) {
		super();
		this.pageSize = pageSize;
		this.beginTime = beginTime;
		this.endTime = endTime;
	}
	public QueryKeywordMessage() {
		super();
	}
}
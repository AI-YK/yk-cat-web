package com.ai.yk.protal.web.content.getresultbyconditionv;

import java.io.Serializable;


public class GetresultByconBitionvMessage implements Serializable{
/**
 * 获取条件资讯(传专题id)  入参
 */
	private static final long serialVersionUID = 2087844644378097606L;
	/**专题id(如果opType=1 传srcId 如果opType=2传id)  是否必填：Y**/
	private String id;
	/**查询条件
		新闻news
		社交social
	  是否必填：Y**/
	private String mediaType;
	/**关键字   是否必填：Y**/
	private String keyword;
	/**结束时间   是否必填：N**/
	private String endDate;
	/**开始时间   是否必填：N**/
	private String beginDate;
	/**升序/倒叙desc/asc   是否必填：**/
	private String order;
	/**当前页数   是否必填：**/
	private String pageNo;
	/**当前条数   是否必填：**/
	private String pageSize;
	/**排序字段
	_score：相关度,pubdate：时间，权重mediaLevel, 转载量transfer
    **/
	private String fieldName;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMediaType() {
		return mediaType;
	}
	public void setMediaType(String mediaType) {
		this.mediaType = mediaType;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getBeginDate() {
		return beginDate;
	}
	public void setBeginDate(String beginDate) {
		this.beginDate = beginDate;
	}
	public String getOrder() {
		return order;
	}
	public void setOrder(String order) {
		this.order = order;
	}
	public String getPageNo() {
		return pageNo;
	}
	public void setPageNo(String pageNo) {
		this.pageNo = pageNo;
	}
	public String getPageSize() {
		return pageSize;
	}
	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}
	public String getFieldName() {
		return fieldName;
	}
	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}
}
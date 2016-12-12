package com.ai.yk.protal.web.content.queryMyInformation;

import java.io.Serializable;
/**
 * 查询我的采编详情接口入参
 * @author shancong
 */
public class QueryMyInformationMessage implements Serializable {
	private static final long serialVersionUID = -3627850423820477791L;
	
	/**创建用户ID 是否必填：Y**/
	private  Integer createId;
	private String pageSize;
	private String pageNo;
	public Integer getCreateId() {
		return createId;
	}
	public void setCreateId(Integer createId) {
		this.createId = createId;
	}
	public String getPageSize() {
		return pageSize;
	}
	public void setPageSize(String pageSize) {
		this.pageSize = pageSize;
	}
	public String getPageNo() {
		return pageNo;
	}
	public void setPageNo(String pageNo) {
		this.pageNo = pageNo;
	}
	
}

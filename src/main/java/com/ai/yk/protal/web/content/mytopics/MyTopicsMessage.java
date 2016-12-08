package com.ai.yk.protal.web.content.mytopics;

import java.io.Serializable;
/**
 * 专题列表
 */
public class MyTopicsMessage implements Serializable {
	private static final long serialVersionUID = 3106747517050469415L;
	/**
	 * 创建用户id
	 */
    private Integer createId;
    /**
	 * 当前页
	 */
    private Integer pageNo;
    /**
	 * 页面大小
	 */
    private Integer pageSize;
	public Integer getCreateId() {
		return createId;
	}
	public void setCreateId(Integer createId) {
		this.createId = createId;
	}
	public Integer getPageNo() {
		return pageNo;
	}
	public void setPageNo(Integer pageNo) {
		this.pageNo = pageNo;
	}
	public Integer getPageSize() {
		return pageSize;
	}
	public void setPageSize(Integer pageSize) {
		this.pageSize = pageSize;
	}
    
}

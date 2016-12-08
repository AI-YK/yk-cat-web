package com.ai.yk.protal.web.content.mycustomized;

import java.io.Serializable;
/**
 * 个人定制列表
 */
public class MyCustomizedListVo implements Serializable {
	private static final long serialVersionUID = 492917990889413988L;
	/**
	 * 数据中心id
	 */
    private String srcId;
    /**
	 * createId
	 */
    private Integer createId;
	public String getSrcId() {
		return srcId;
	}
	public void setSrcId(String srcId) {
		this.srcId = srcId;
	}
	public Integer getCreateId() {
		return createId;
	}
	public void setCreateId(Integer createId) {
		this.createId = createId;
	}
    
}

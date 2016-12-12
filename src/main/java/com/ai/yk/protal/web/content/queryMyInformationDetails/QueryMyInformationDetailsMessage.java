package com.ai.yk.protal.web.content.queryMyInformationDetails;

import java.io.Serializable;
/**
 *查询我的采编详情接口入参
 * @author shancong
 */
public class QueryMyInformationDetailsMessage implements Serializable {
	private static final long serialVersionUID = -3627850423820477791L;
	
	/**主键ID是否必填：Y**/
	private String id;
	private  Integer createId;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public Integer getCreateId() {
		return createId;
	}
	public void setCreateId(Integer createId) {
		this.createId = createId;
	}
	
}

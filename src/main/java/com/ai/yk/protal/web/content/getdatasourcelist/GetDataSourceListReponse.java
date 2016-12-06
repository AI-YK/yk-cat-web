package com.ai.yk.protal.web.content.getdatasourcelist;

import java.io.Serializable;

/**
 * 搜索数据源列表出参
 * @author mengbo 
 *
 */
public class GetDataSourceListReponse implements Serializable{
    private static final long serialVersionUID = 8569290408747580559L;
	private GetDataSourceListMessage message;

	public GetDataSourceListMessage getMessage() {
		return message;
	}

	public void setMessage(GetDataSourceListMessage message) {
		this.message = message;
	}
	
	



	

	
}

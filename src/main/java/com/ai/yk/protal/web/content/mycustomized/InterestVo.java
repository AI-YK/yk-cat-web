package com.ai.yk.protal.web.content.mycustomized;

import java.io.Serializable;

public class InterestVo implements Serializable {
	private static final long serialVersionUID = 7085530728169561053L;
	/**
	 * id
	 */
    private Integer id;
    /**
	 * 兴趣 
	 */
    private String zhInterest;
    private Integer pid;
    /**
	 * 业务id（数据字典） 
	 */
    private String businessId;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getZhInterest() {
		return zhInterest;
	}
	public void setZhInterest(String zhInterest) {
		this.zhInterest = zhInterest;
	}
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	public String getBusinessId() {
		return businessId;
	}
	public void setBusinessId(String businessId) {
		this.businessId = businessId;
	}
    
}

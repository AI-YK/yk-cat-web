package com.ai.yk.protal.web.content.savemyCustomized;

public class Interest {

	private String zhInterest;
	private String enInterest;
	private String businessId;
	public String getZhInterest() {
		return zhInterest;
	}
	public void setZhInterest(String zhInterest) {
		this.zhInterest = zhInterest;
	}
	public String getEnInterest() {
		return enInterest;
	}
	public void setEnInterest(String enInterest) {
		this.enInterest = enInterest;
	}
	public String getBusinessId() {
		return businessId;
	}
	public void setBusinessId(String businessId) {
		this.businessId = businessId;
	}
	public Interest(String zhInterest, String enInterest, String businessId) {
		super();
		this.zhInterest = zhInterest;
		this.enInterest = enInterest;
		this.businessId = businessId;
	}
	public Interest() {
		super();
	}
}

package com.ai.yk.protal.web.content.addmyCustomized;

import java.io.Serializable;
import java.util.List;
/**
 * 创建个人定制接口入参
 * @author shancong
 *
 */
public class AddMyCustomizedMessage implements Serializable{
	private static final long serialVersionUID = -2574883913197301738L;
	
	/**用户ID**/
	private String createId;
	private String sourceSystem;
	
	private String zhProvince;
	private String enProvince;
	private String provinceCode;
	
	private List<Interest> interestList;
	private List<City> cityList;
	
	private String srcID;
	
	
	public String getSrcID() {
		return srcID;
	}
	public void setSrcID(String srcID) {
		this.srcID = srcID;
	}
	public String getCreateId() {
		return createId;
	}
	public void setCreateId(String createId) {
		this.createId = createId;
	}
	public String getSourceSystem() {
		return sourceSystem;
	}
	public void setSourceSystem(String sourceSystem) {
		this.sourceSystem = sourceSystem;
	}
	public String getZhProvince() {
		return zhProvince;
	}
	public void setZhProvince(String zhProvince) {
		this.zhProvince = zhProvince;
	}
	public String getEnProvince() {
		return enProvince;
	}
	public void setEnProvince(String enProvince) {
		this.enProvince = enProvince;
	}
	public String getProvinceCode() {
		return provinceCode;
	}
	public void setProvinceCode(String provinceCode) {
		this.provinceCode = provinceCode;
	}
	public List<Interest> getInterestList() {
		return interestList;
	}
	public void setInterestList(List<Interest> interestList) {
		this.interestList = interestList;
	}
	public List<City> getCityList() {
		return cityList;
	}
	public void setCityList(List<City> cityList) {
		this.cityList = cityList;
	}

}
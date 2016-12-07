package com.ai.yk.protal.web.content.savemyCustomized;

import java.io.Serializable;
import java.util.List;
/**
 * 创建个人定制接口入参
 * @author shancong
 *
 */
public class SaveMyCustomizedMessage implements Serializable{
	private static final long serialVersionUID = -2574883913197301738L;
	
	/**用户ID**/
	private String createId;
	private String sourceSystem;
	private String provinceCode;
	
	private List<String> interestList;
	private List<String> cityList;
	
	private String srcID;

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

	public String getProvinceCode() {
		return provinceCode;
	}

	public void setProvinceCode(String provinceCode) {
		this.provinceCode = provinceCode;
	}
	public List<String> getInterestList() {
		return interestList;
	}

	public void setInterestList(List<String> interestList) {
		this.interestList = interestList;
	}

	public List<String> getCityList() {
		return cityList;
	}

	public void setCityList(List<String> cityList) {
		this.cityList = cityList;
	}

	public String getSrcID() {
		return srcID;
	}

	public void setSrcID(String srcID) {
		this.srcID = srcID;
	}
	
}
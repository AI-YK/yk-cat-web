package com.ai.yk.protal.web.content.mycustomized;

import java.io.Serializable;
import java.util.List;

import com.ai.yk.protal.web.content.area.AreaVo;

public class MyCustomizedVo implements Serializable {
	private static final long serialVersionUID = -4666119958910883499L;
	/** 定制id **/
	private int id;
	/****/
	private String fieldType;
	/** 省 **/
	private AreaVo province;
	/** 城市 **/
	private List<AreaVo> city;
	/**兴趣列表**/
	private List<InterestVo> interestList;
	/**数据源ID**/
	private String srcId;
	/**用户id**/
	private Integer createId;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFieldType() {
		return fieldType;
	}
	public void setFieldType(String fieldType) {
		this.fieldType = fieldType;
	}
	public AreaVo getProvince() {
		return province;
	}
	public void setProvince(AreaVo province) {
		this.province = province;
	}
	public List<AreaVo> getCity() {
		return city;
	}
	public void setCity(List<AreaVo> city) {
		this.city = city;
	}
	public List<InterestVo> getInterestList() {
		return interestList;
	}
	public void setInterestList(List<InterestVo> interestList) {
		this.interestList = interestList;
	}
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

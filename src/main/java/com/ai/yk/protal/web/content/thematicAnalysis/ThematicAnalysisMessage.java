package com.ai.yk.protal.web.content.thematicAnalysis;

import java.io.Serializable;
import java.util.List;

/**
 * 查看专题属性按照模型分析
 */
public class ThematicAnalysisMessage implements Serializable {
	private static final long serialVersionUID = 6932014212504508969L;
	/**
	 * if opType = 1 srcId else id 专题id( 1.推送专题定制专题传（id） 2.订阅专题传(srcId) )
	 */
	private String infoId;
	/**
	 * 模型名称 多个逗号隔开
	 */
	private List<String> modelNo;
	/**
	 * 开始时间（格式：2016-07-07）
	 */
	private String startDate;
	/**
	 * 结束时间（格式：2016-07-07）
	 */
	private String endDate;
	/**
	 * 国家名称 【不传】
	 */
	private String countryName;
	/**
	 * 1：运营推送2：源数据来源 【不传】
	 */
	private String source = "1";

	public String getInfoId() {
		return infoId;
	}

	public void setInfoId(String infoId) {
		this.infoId = infoId;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public List<String> getModelNo() {
		return modelNo;
	}

	public void setModelNo(List<String> modelNo) {
		this.modelNo = modelNo;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

}

package com.ai.yk.protal.web.content.common;

import java.io.Serializable;

public class DicVo implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -8383421001946199689L;
	/**
	 * 语言（如zh、en）
	 */
	private String language;
	/**
	 * 类别（ HYFL 行业分类 SJYYXL 数据源影响力 QY 区域 GJ 国家 SJQYJJZZ 世界区域经济组织 YYTX 语言体系 ）
	 */
	private String type;
	/**
	 * 值（当前类型的内容）
	 */
	private String dicValue;
	/**
	 * 名称（用作展示的值）
	 */
	private String dicName;
	/**
	 * 描述
	 */
	private String dicDesc;
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getDicValue() {
		return dicValue;
	}
	public void setDicValue(String dicValue) {
		this.dicValue = dicValue;
	}
	public String getDicName() {
		return dicName;
	}
	public void setDicName(String dicName) {
		this.dicName = dicName;
	}
	public String getDicDesc() {
		return dicDesc;
	}
	public void setDicDesc(String dicDesc) {
		this.dicDesc = dicDesc;
	}
	
}

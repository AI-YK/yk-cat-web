package com.ai.yk.protal.web.content.queryInfoLanguage;

import java.io.Serializable;

public class QueryInfoLanguageVo implements Serializable {
	private static final long serialVersionUID = -2403347502785004022L;

	/**值对应数据中心该值的ID   是否必填：Y**/
	private String srcValue;
	/**语种**/
	private String language;
	/**分类/数据源类型名称**/
	private String name;
	/**简称**/
	private String shortName;
	private String note;
	public String getSrcValue() {
		return srcValue;
	}
	public void setSrcValue(String srcValue) {
		this.srcValue = srcValue;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getShortName() {
		return shortName;
	}
	public void setShortName(String shortName) {
		this.shortName = shortName;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
}

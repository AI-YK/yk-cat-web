package com.ai.yk.protal.web.content.common;

import java.io.Serializable;

/**
 * 数据字典
 */
public class DicMessage implements Serializable {

	private static final long serialVersionUID = -4082030548156955065L;
	/**
	 * 领域分类 YQFL
	 * 行业分类 HYFL
	 * 数据源影响力 SJYYX
	 * 新闻热点 TJSJY 
	 * 社交热点 SJLY 
	 */
    private String type;
    /**
	 *语言（zh中文 en英文）
	 */
    private String language;
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
    
}

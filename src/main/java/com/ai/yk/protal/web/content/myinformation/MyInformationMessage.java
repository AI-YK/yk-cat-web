package com.ai.yk.protal.web.content.myinformation;

import java.io.Serializable;
/**
 * 我的采编
 */
public class MyInformationMessage implements Serializable {

	
	private static final long serialVersionUID = -547458805635492174L;
	/**
	 * 数据源ID（数据中心的token）
	 */
	private String srcId;
	/**
	 * 源语言
	 */
	private String srcLanguage;
	/**
	 * 语言(中文)
	 */
	private String zhLanguage;
	/**
	 * 语言(英文)
	 */
	private String enLanguage;
	/**
	 * 源语言名称
	 */
	private String srcLanguageName;
	/**
	 * （收藏时的）语言
	 */
	private String collectionLanguage;
	/**
	 * 源数据来源（资讯用到）
	 */
	private String srcSource;
	/**
	 * 源中文数据来源（资讯用到）
	 */
	private String zhSource;
	/**
	 * 英文数据来源（资讯用到）
	 */
	private String enSource;
	/**
	 * 源标题
	 */
	private String srcTitle;
	/**
	 * 中文标题
	 */
	private String zhTitle;
	/**
	 * 英文标题
	 */
	private String enTitle;
	/**
	 * 源摘要
	 */
	private String srcSummary;
}

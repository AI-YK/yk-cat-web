package com.ai.yk.protal.web.content.translate;

import java.io.Serializable;

/**
 * 
 * 翻译请求参数<br>
 * Date: 2016年12月16日 <br>
 * Copyright (c) 2016 asiainfo.com <br>
 * 
 * @author xuyw
 */
public class TranslateMessage implements Serializable {
	private static final long serialVersionUID = 6633535123529528099L;
	/**
	 * 源语言 en/zh/es/pt/ru/fr
	 */
	private String srcl = "zh";
	/**
	 * 目标语言 en/zh/es/pt/ru/fr
	 */
	private String tgtl = "en";
	/**
	 * 待翻译文本
	 */
	private String text;
	/**
	 * 是否需要返回翻译文本反转义（建议设为true）
	 */
	private boolean detoken = true;
	/**
	 * 是否需要返回对齐信息
	 */
	private boolean align = true;
	private Integer nBestSize = 5;

	public String getSrcl() {
		return srcl;
	}

	public void setSrcl(String srcl) {
		this.srcl = srcl;
	}

	public String getTgtl() {
		return tgtl;
	}

	public void setTgtl(String tgtl) {
		this.tgtl = tgtl;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isDetoken() {
		return detoken;
	}

	public void setDetoken(boolean detoken) {
		this.detoken = detoken;
	}

	public boolean isAlign() {
		return align;
	}

	public void setAlign(boolean align) {
		this.align = align;
	}

	public Integer getnBestSize() {
		return nBestSize;
	}

	public void setnBestSize(Integer nBestSize) {
		this.nBestSize = nBestSize;
	}
}

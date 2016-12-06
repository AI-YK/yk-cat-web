package com.ai.yk.protal.web.content.getdatasourcelist;

import java.io.Serializable;

public class GetDataSourceVo implements Serializable {
	private static final long serialVersionUID = -978494291093853422L;
	/**
	 *名称
	 */
	private String mediaNameSrc;
	/**
	 *数据源id
	 */
	private int mediaId;
	/**
	 *中文名称
	 */
	private String mediaNameZh;
	/**
	 *英文名称
	 */
	private String mediaNameEn;
	/**
	 *数据源地址
	 */
	private String url;

	public String getMediaNameSrc() {
		return mediaNameSrc;
	}

	public void setMediaNameSrc(String mediaNameSrc) {
		this.mediaNameSrc = mediaNameSrc;
	}

	public int getMediaId() {
		return mediaId;
	}

	public void setMediaId(int mediaId) {
		this.mediaId = mediaId;
	}

	public String getMediaNameZh() {
		return mediaNameZh;
	}

	public void setMediaNameZh(String mediaNameZh) {
		this.mediaNameZh = mediaNameZh;
	}

	public String getMediaNameEn() {
		return mediaNameEn;
	}

	public void setMediaNameEn(String mediaNameEn) {
		this.mediaNameEn = mediaNameEn;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}

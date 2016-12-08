package com.ai.yk.protal.web.content.event.chars;

import java.io.Serializable;

/**
 * 传播态势
 */
public class SpreadTrendVo implements Serializable {
	private static final long serialVersionUID = 6626116663452904282L;
	/**
	 * 传播态势
	 */
	private String time;
	/**
	 * 媒体id
	 */
	private String mediaId;
	/**
	 * 英文名称
	 */
	private String mediaNameEn;
	/**
	 * 中文名称
	 */
	private String mediaNameZh;
	private String mediaLevel;

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getMediaId() {
		return mediaId;
	}

	public void setMediaId(String mediaId) {
		this.mediaId = mediaId;
	}

	public String getMediaNameEn() {
		return mediaNameEn;
	}

	public void setMediaNameEn(String mediaNameEn) {
		this.mediaNameEn = mediaNameEn;
	}

	public String getMediaNameZh() {
		return mediaNameZh;
	}

	public void setMediaNameZh(String mediaNameZh) {
		this.mediaNameZh = mediaNameZh;
	}

	public String getMediaLevel() {
		return mediaLevel;
	}

	public void setMediaLevel(String mediaLevel) {
		this.mediaLevel = mediaLevel;
	}
}

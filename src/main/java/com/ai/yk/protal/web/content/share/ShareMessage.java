package com.ai.yk.protal.web.content.share;

import java.io.Serializable;
/**
 *增加分享接口入参
 */
public class ShareMessage implements Serializable{
		
	private static final long serialVersionUID = -7564101976157362994L;
	/**用户id 是否必填：Y**/
	private String createId;
	/**资讯id  是否必填：Y**/
	private String id;
	/**创建源【1.推送源;2.我的资讯专题定制,3.来自数据中心**/
	private String source;
	/**分享途径：1：微信2：微博**/
	private String shareType;
	public String getCreateId() {
		return createId;
	}
	public void setCreateId(String createId) {
		this.createId = createId;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getShareType() {
		return shareType;
	}
	public void setShareType(String shareType) {
		this.shareType = shareType;
	}
		
}
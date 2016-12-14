package com.ai.yk.protal.web.content.collection;

import java.io.Serializable;

/**
 * 收藏Message
 */
public class CollectionMessage implements Serializable {
	private static final long serialVersionUID = -5420335551120015274L;
	/**
	 * 表主键ID
	 */
	private String id;
	/**
	 * 用户ID
	 */
	private String createId;
	/**
	 * 创建源 1：新闻 2：社交 默认为1
	 */
	private String source;
	/**
	 * 类别1：资讯 2：专题 3：分析报告
	 */
	private String category;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCreateId() {
		return createId;
	}
	public void setCreateId(String createId) {
		this.createId = createId;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source) {
		this.source = source;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	
}

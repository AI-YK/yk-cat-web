package com.ai.yk.protal.web.content.collection;

import java.io.Serializable;
/**
 * 收藏返回
 */
public class CollectionResponse implements Serializable {
	private static final long serialVersionUID = 1545098298604619384L;
	/**
	 * 1收藏；0未收藏。
	 */
    private String isCollection;
	public String getIsCollection() {
		return isCollection;
	}
	public void setIsCollection(String isCollection) {
		this.isCollection = isCollection;
	}
}

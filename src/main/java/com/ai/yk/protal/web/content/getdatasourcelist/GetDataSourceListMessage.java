package com.ai.yk.protal.web.content.getdatasourcelist;

import java.io.Serializable;


public class GetDataSourceListMessage implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -6710894640456352326L;
		/**
		 * 关键字
		 * 必填：Y
		 */
		private String keyword;
		/**
		 * 当前页数
		 * 必填：Y
		 */		
		private String pageNo;
		/**
		 * 当前条数
		 * 必填：Y
		 */	
		private String pageSize;
		/**
		 * 权重
		 * 必填：N
		 */	
		private String level;
		public String getKeyword() {
			return keyword;
		}
		public void setKeyword(String keyword) {
			this.keyword = keyword;
		}
		public String getPageNo() {
			return pageNo;
		}
		public void setPageNo(String pageNo) {
			this.pageNo = pageNo;
		}
		public String getPageSize() {
			return pageSize;
		}
		public void setPageSize(String pageSize) {
			this.pageSize = pageSize;
		}
		public String getLevel() {
			return level;
		}
		public void setLevel(String level) {
			this.level = level;
		}
		
		
		
	}
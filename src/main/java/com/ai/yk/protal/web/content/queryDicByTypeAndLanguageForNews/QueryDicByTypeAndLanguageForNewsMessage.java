package com.ai.yk.protal.web.content.queryDicByTypeAndLanguageForNews;
/**
 * 根据类型和语言获取数据字典中的所有记录接口入参
 * @author shancong
 *
 */
public class QueryDicByTypeAndLanguageForNewsMessage{
		/**
		 * 语言
		 */
		private String language;
		/**
		 * 类别（HYFL 行业分类		SJYYXL 数据源影响力	   是否必填：Y）
		 */
		private String type;

		public String getLanguage() {
			return language;
		}

		public void setLanguage(String language) {
			this.language = language;
		}

		public String getType() {
			return type;
		}

		public void setType(String type) {
			this.type = type;
		}
		
		
		
		
	}
package com.ai.yk.protal.web.content.queryInfoLanguage;

/**
 * 获取资讯语言接口入参
 * @author shancong
 *
 */
public class QueryInfoLanguageMessage{
		/**语种 是否必填：Y**/
		private String language;
		private String languageType;
		
		public String getLanguage() {
			return language;
		}

		public void setLanguage(String language) {
			this.language = language;
		}

		public String getLanguageType() {
			return languageType;
		}

		public void setLanguageType(String languageType) {
			this.languageType = languageType;
		}
		
		
		
	}
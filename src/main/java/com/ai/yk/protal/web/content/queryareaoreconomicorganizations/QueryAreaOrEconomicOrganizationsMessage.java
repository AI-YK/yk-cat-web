package com.ai.yk.protal.web.content.queryareaoreconomicorganizations;
public class QueryAreaOrEconomicOrganizationsMessage{
		/**
		 * 语种
		 * 必填：Y
		 */
		private String language;
		
		private String type;
		
		private String dicValue;

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

		public String getDicValue() {
			return dicValue;
		}

		public void setDicValue(String dicValue) {
			this.dicValue = dicValue;
		}

		
		
	}
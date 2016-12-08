package com.ai.yk.protal.web.content.searchPublicSafety;

import java.io.Serializable;
/**
 * 公共安全事件检索接口入参
 * @author shancong
 */
public class SearchPublicSafetyMessage implements Serializable {
	private static final long serialVersionUID = -3627850423820477791L;
		private String mediaType;
		private String sentimentId;
		private String province;
		private String city;
		private String publicAffairsType;
		private String mediaId;
		private String mediaLevel;
		private String fieldName;
		private String order;
		public String getMediaType() {
			return mediaType;
		}
		public void setMediaType(String mediaType) {
			this.mediaType = mediaType;
		}
		public String getSentimentId() {
			return sentimentId;
		}
		public void setSentimentId(String sentimentId) {
			this.sentimentId = sentimentId;
		}
		public String getProvince() {
			return province;
		}
		public void setProvince(String province) {
			this.province = province;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getPublicAffairsType() {
			return publicAffairsType;
		}
		public void setPublicAffairsType(String publicAffairsType) {
			this.publicAffairsType = publicAffairsType;
		}
		public String getMediaId() {
			return mediaId;
		}
		public void setMediaId(String mediaId) {
			this.mediaId = mediaId;
		}
		public String getMediaLevel() {
			return mediaLevel;
		}
		public void setMediaLevel(String mediaLevel) {
			this.mediaLevel = mediaLevel;
		}
		public String getFieldName() {
			return fieldName;
		}
		public void setFieldName(String fieldName) {
			this.fieldName = fieldName;
		}
		public String getOrder() {
			return order;
		}
		public void setOrder(String order) {
			this.order = order;
		}
}

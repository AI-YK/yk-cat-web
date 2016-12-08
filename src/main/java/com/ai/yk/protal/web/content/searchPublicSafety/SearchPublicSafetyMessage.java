package com.ai.yk.protal.web.content.searchPublicSafety;

import java.io.Serializable;
/**
 * 公共安全事件检索接口入参
 * @author shancong
 */
public class SearchPublicSafetyMessage implements Serializable {
	private static final long serialVersionUID = -3627850423820477791L;
		/**媒体类型**/
		private String mediaType;
		/**情感ID(1正面，0：中性 -1负面)**/
		private String sentimentId;
		
		/**省份**/
		private String provincecityCode;
		/**城市**/
		private String cityCode;
		
		/**舆情分类类型（多个用逗号隔开）**/
		private String publicAffairsType;
		/**数据源类型微信微博新闻等媒体**/
		private String mediaId;
		/**媒体级别id**/
		private String mediaLevel;
		/**指定排序字段**/
		private String fieldName;
		/**排序字段
		_score：相关度,pubdate：时间，权重mediaLevel, 转载量transfer
		**/
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
		public String getProvincecityCode() {
			return provincecityCode;
		}
		public void setProvincecityCode(String provincecityCode) {
			this.provincecityCode = provincecityCode;
		}
		public String getCityCode() {
			return cityCode;
		}
		public void setCityCode(String cityCode) {
			this.cityCode = cityCode;
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

package com.ai.yk.protal.web.content.searchPublicSafety;

import java.io.Serializable;
import java.util.List;
/**
 * 公共安全事件检索接口出参
 * @author shancong
 */
public class SearchPublicSafetyResponse implements Serializable{
		private static final long serialVersionUID = 3037496561666627522L;
		
		private Integer resultCount;
		
		private List<SearchPublicSafetyNewsVo> resultList;
		
		private List<SearchPublicSafetySocialVo> resultSocialList;

		public Integer getResultCount() {
			return resultCount;
		}

		public void setResultCount(Integer resultCount) {
			this.resultCount = resultCount;
		}

		public List<SearchPublicSafetyNewsVo> getResultList() {
			return resultList;
		}

		public void setResultList(List<SearchPublicSafetyNewsVo> resultList) {
			this.resultList = resultList;
		}

		public List<SearchPublicSafetySocialVo> getResultSocialList() {
			return resultSocialList;
		}

		public void setResultSocialList(List<SearchPublicSafetySocialVo> resultSocialList) {
			this.resultSocialList = resultSocialList;
		}
		
	}
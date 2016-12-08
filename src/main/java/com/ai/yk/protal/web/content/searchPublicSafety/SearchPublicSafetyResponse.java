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
		
		private List<SearchPublicSafetyVo> resultList;

		public Integer getResultCount() {
			return resultCount;
		}

		public void setResultCount(Integer resultCount) {
			this.resultCount = resultCount;
		}

		public List<SearchPublicSafetyVo> getResultList() {
			return resultList;
		}

		public void setResultList(List<SearchPublicSafetyVo> resultList) {
			this.resultList = resultList;
		}
		
	}
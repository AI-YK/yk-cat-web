package com.ai.yk.protal.web.content.savemyCustomized;

import java.io.Serializable;
/**
 * 创建个人定制接口出参
 * @author shancong
 *
 */
public class SaveMyCustomizedResponse implements Serializable{
		private static final long serialVersionUID = 3037496561666627522L;
		//数据中心id
		private String srcId;
		public String getSrcId() {
			return srcId;
		}
		public void setSrcId(String srcId) {
			this.srcId = srcId;
		}
	}
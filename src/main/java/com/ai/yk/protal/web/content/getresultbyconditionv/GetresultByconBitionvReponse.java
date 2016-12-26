package com.ai.yk.protal.web.content.getresultbyconditionv;

import java.io.Serializable;
import java.util.List;

 /**
 * 获取条件资讯(传专题id) 新闻/社交 出参
 * shancong
 */
public class GetresultByconBitionvReponse implements Serializable {
	private static final long serialVersionUID = 8569290408747580559L;
	private Integer resultCount;
	private List<GetresultByconBitionvNewsVo> resultList;
	private List<GetresultByconBitionvSocialVo> resultSocialList;
	public Integer getResultCount() {
		return resultCount;
	}
	public void setResultCount(Integer resultCount) {
		this.resultCount = resultCount;
	}
	public List<GetresultByconBitionvNewsVo> getResultList() {
		return resultList;
	}
	public void setResultList(List<GetresultByconBitionvNewsVo> resultList) {
		this.resultList = resultList;
	}
	public List<GetresultByconBitionvSocialVo> getResultSocialList() {
		return resultSocialList;
	}
	public void setResultSocialList(List<GetresultByconBitionvSocialVo> resultSocialList) {
		this.resultSocialList = resultSocialList;
	}
}

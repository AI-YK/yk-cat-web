package com.ai.yk.protal.web.content.queryMyInformation;

import java.io.Serializable;
/**
 * 新闻VO
 * @author lenovo
 *
 */
public class QueryMyInformationVo implements Serializable {
    private static final long serialVersionUID = -931147144629978354L;
   
    /**主键ID  是否必填：Y**/
    private Integer id;
    /**数据源ID（数据中心的token）  是否必填：Y**/
    private String srcId;
    /**源语言  是否必填：Y**/
    private String srcLanguage;
    /**语言(中文)  是否必填：Y**/
    private String zhLanguage;
    /**语言(英文)  是否必填：Y**/
    private String enLanguage;
    /**源语言名称  是否必填：Y**/
    private String srcLanguageName;
    /**收藏时的）语言  是否必填：Y**/
    private String collectionLanguage;
    /**源数据来源（资讯用到）  是否必填：Y**/
    private String srcSource;
    /**中文数据来源（资讯用到）  是否必填：Y**/
    private String zhSource;
    /**英文数据来源（资讯用到）  是否必填：Y**/
    private String enSource;
    /**源标题  是否必填：Y**/
    private String srcTitle;
    /**中文标题  是否必填：Y**/
    private String zhTitle;
    /**英文标题  是否必填：Y**/
    private String enTitle;
    /**源摘要  是否必填：Y**/
    private String srcSummary;
    /**中文摘要  是否必填：Y**/
    private String zhSummary;
    /**英文摘要  是否必填：Y**/
    private String enSummary;
    /**源国家  是否必填：Y**/
    private String srcCountry;
    /**国家(中)  是否必填：Y**/
    private String zhCountry;
    /**国家(英)  是否必填：Y**/
    private String enCountry;
    /**媒体名（源文）  是否必填：Y**/
    private String srcMediaName;
    /**媒体名（中文）  是否必填：Y**/
    private String zhMediaName;
    /**媒体名（英文）  是否必填：Y**/
    private String enMediaName;
    /**转载量  是否必填：Y**/
    private Integer transfer;
    /**情感ID  是否必填：Y**/
    private Integer sentimentId;
    /**数据中心创建时间  是否必填：Y**/
    private Long srcCreateTime;
    /**源内容  是否必填：Y**/
    private String srcContent;
    /**中文内容  是否必填：Y**/
    private String zhContent;
    /**英文内容  是否必填：Y**/
    private String enContent;
    /**头像地址(社交收藏)  是否必填：Y**/
    private String headImgUrl;
    /**评论数(社交收藏)  是否必填：Y**/
    private Integer commentNum;
    /**点赞数(社交收藏)  是否必填：Y**/
    private Integer praiseNum;
    /**操作类型  是否必填：Y**/
    private Integer opType;
    /**行业类型 :   1 : 经济 2 : 体育 3 : 娱乐 4 : 科技 5 : 生活 6 : 未来  是否必填：Y**/
    private Integer industryType;
    /**数据类型	1：主流媒体	2：社交媒体	  是否必填：Y**/
    private Integer sourceType;
    /**用户ID  是否必填：Y**/
    private Integer createId;
    /**创建时间  是否必填：Y**/
    private Long createTime;
    /**修改时间  是否必填：Y**/
    private Long updateTime;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getSrcId() {
		return srcId;
	}
	public void setSrcId(String srcId) {
		this.srcId = srcId;
	}
	public String getSrcLanguage() {
		return srcLanguage;
	}
	public void setSrcLanguage(String srcLanguage) {
		this.srcLanguage = srcLanguage;
	}
	public String getZhLanguage() {
		return zhLanguage;
	}
	public void setZhLanguage(String zhLanguage) {
		this.zhLanguage = zhLanguage;
	}
	public String getEnLanguage() {
		return enLanguage;
	}
	public void setEnLanguage(String enLanguage) {
		this.enLanguage = enLanguage;
	}
	public String getSrcLanguageName() {
		return srcLanguageName;
	}
	public void setSrcLanguageName(String srcLanguageName) {
		this.srcLanguageName = srcLanguageName;
	}
	public String getCollectionLanguage() {
		return collectionLanguage;
	}
	public void setCollectionLanguage(String collectionLanguage) {
		this.collectionLanguage = collectionLanguage;
	}
	public String getSrcSource() {
		return srcSource;
	}
	public void setSrcSource(String srcSource) {
		this.srcSource = srcSource;
	}
	public String getZhSource() {
		return zhSource;
	}
	public void setZhSource(String zhSource) {
		this.zhSource = zhSource;
	}
	public String getEnSource() {
		return enSource;
	}
	public void setEnSource(String enSource) {
		this.enSource = enSource;
	}
	public String getSrcTitle() {
		return srcTitle;
	}
	public void setSrcTitle(String srcTitle) {
		this.srcTitle = srcTitle;
	}
	public String getZhTitle() {
		return zhTitle;
	}
	public void setZhTitle(String zhTitle) {
		this.zhTitle = zhTitle;
	}
	public String getEnTitle() {
		return enTitle;
	}
	public void setEnTitle(String enTitle) {
		this.enTitle = enTitle;
	}
	public String getSrcSummary() {
		return srcSummary;
	}
	public void setSrcSummary(String srcSummary) {
		this.srcSummary = srcSummary;
	}
	public String getZhSummary() {
		return zhSummary;
	}
	public void setZhSummary(String zhSummary) {
		this.zhSummary = zhSummary;
	}
	public String getEnSummary() {
		return enSummary;
	}
	public void setEnSummary(String enSummary) {
		this.enSummary = enSummary;
	}
	public String getSrcCountry() {
		return srcCountry;
	}
	public void setSrcCountry(String srcCountry) {
		this.srcCountry = srcCountry;
	}
	public String getZhCountry() {
		return zhCountry;
	}
	public void setZhCountry(String zhCountry) {
		this.zhCountry = zhCountry;
	}
	public String getEnCountry() {
		return enCountry;
	}
	public void setEnCountry(String enCountry) {
		this.enCountry = enCountry;
	}
	public String getSrcMediaName() {
		return srcMediaName;
	}
	public void setSrcMediaName(String srcMediaName) {
		this.srcMediaName = srcMediaName;
	}
	public String getZhMediaName() {
		return zhMediaName;
	}
	public void setZhMediaName(String zhMediaName) {
		this.zhMediaName = zhMediaName;
	}
	public String getEnMediaName() {
		return enMediaName;
	}
	public void setEnMediaName(String enMediaName) {
		this.enMediaName = enMediaName;
	}
	public Integer getTransfer() {
		return transfer;
	}
	public void setTransfer(Integer transfer) {
		this.transfer = transfer;
	}
	public Integer getSentimentId() {
		return sentimentId;
	}
	public void setSentimentId(Integer sentimentId) {
		this.sentimentId = sentimentId;
	}
	public Long getSrcCreateTime() {
		return srcCreateTime;
	}
	public void setSrcCreateTime(Long srcCreateTime) {
		this.srcCreateTime = srcCreateTime;
	}
	public String getSrcContent() {
		return srcContent;
	}
	public void setSrcContent(String srcContent) {
		this.srcContent = srcContent;
	}
	public String getZhContent() {
		return zhContent;
	}
	public void setZhContent(String zhContent) {
		this.zhContent = zhContent;
	}
	public String getEnContent() {
		return enContent;
	}
	public void setEnContent(String enContent) {
		this.enContent = enContent;
	}
	public String getHeadImgUrl() {
		return headImgUrl;
	}
	public void setHeadImgUrl(String headImgUrl) {
		this.headImgUrl = headImgUrl;
	}
	public Integer getCommentNum() {
		return commentNum;
	}
	public void setCommentNum(Integer commentNum) {
		this.commentNum = commentNum;
	}
	public Integer getPraiseNum() {
		return praiseNum;
	}
	public void setPraiseNum(Integer praiseNum) {
		this.praiseNum = praiseNum;
	}
	public Integer getOpType() {
		return opType;
	}
	public void setOpType(Integer opType) {
		this.opType = opType;
	}
	public Integer getIndustryType() {
		return industryType;
	}
	public void setIndustryType(Integer industryType) {
		this.industryType = industryType;
	}
	public Integer getSourceType() {
		return sourceType;
	}
	public void setSourceType(Integer sourceType) {
		this.sourceType = sourceType;
	}
	public Integer getCreateId() {
		return createId;
	}
	public void setCreateId(Integer createId) {
		this.createId = createId;
	}
	public Long getCreateTime() {
		return createTime;
	}
	public void setCreateTime(Long createTime) {
		this.createTime = createTime;
	}
	public Long getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Long updateTime) {
		this.updateTime = updateTime;
	}
    
}

package com.ai.yk.protal.web.content.mytopics;

import java.io.Serializable;

public class MyTopicsVo implements Serializable {
	private static final long serialVersionUID = -162923765825155525L;
	/**
	 * 操作类型1：专题订阅2：我的（定制专题、编辑资讯、编辑报告）3：我的（收藏资讯、收藏报告）注：只记录收藏的源ID，不记录具体内容4：我的（分享资讯
	 * 、分享专题、分享报告）注：只记录分享的源ID，不记录具体内容5：我的（阅读历史）
	 */
	private Integer opType;
	/**
	 * 专题ID
	 */
	private String id;
	/**
	 * 标题简称
	 */
	private String srcShortTitle;
	/**
	 * 中文标题
	 */
	private String zhShortTitle;
	/**
	 * 英文标题
	 */
	private String enShortTitle;
	/**
	 * 专题、报告实际大小（单位KB）
	 */
	private Double infoFactSize;
	/**
	 * （专题、报告）更新状态
	 */
	private Integer state;
	/**
	 * （专题、报告）更新进度
	 */
	private Float updateSchedule;
	/**
	 * 
	 */
	private String srcTitle;
	/**
	 * 专题、报告预计大小（单位KB）
	 */
	private Float infoEstimateSize;
	/**
	 * 数据中心id
	 */
	private String srcId;
	/**
	 * (专题)消费总量上限(单位：译点)
	 */
	private Double consumeLimit;
	/**
	 * 新闻数据更新总量
	 */
	private Integer newDatas;
	/**
	 * 社交数据更新总量
	 */
	private Integer socialDatas;
	/**
	 * 创建时间
	 */
	private String createTimeView;
	/**
	 * 修改时间
	 */
	private String updateTimeView;
	/**
	 * 是否启用轮询0否1是
	 */
	private Integer isPolling;
	public Integer getOpType() {
		return opType;
	}
	public void setOpType(Integer opType) {
		this.opType = opType;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSrcShortTitle() {
		return srcShortTitle;
	}
	public void setSrcShortTitle(String srcShortTitle) {
		this.srcShortTitle = srcShortTitle;
	}
	public String getZhShortTitle() {
		return zhShortTitle;
	}
	public void setZhShortTitle(String zhShortTitle) {
		this.zhShortTitle = zhShortTitle;
	}
	public String getEnShortTitle() {
		return enShortTitle;
	}
	public void setEnShortTitle(String enShortTitle) {
		this.enShortTitle = enShortTitle;
	}
	public Double getInfoFactSize() {
		return infoFactSize;
	}
	public void setInfoFactSize(Double infoFactSize) {
		this.infoFactSize = infoFactSize;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public Float getUpdateSchedule() {
		return updateSchedule;
	}
	public void setUpdateSchedule(Float updateSchedule) {
		this.updateSchedule = updateSchedule;
	}
	public String getSrcTitle() {
		return srcTitle;
	}
	public void setSrcTitle(String srcTitle) {
		this.srcTitle = srcTitle;
	}
	public Float getInfoEstimateSize() {
		return infoEstimateSize;
	}
	public void setInfoEstimateSize(Float infoEstimateSize) {
		this.infoEstimateSize = infoEstimateSize;
	}
	public String getSrcId() {
		return srcId;
	}
	public void setSrcId(String srcId) {
		this.srcId = srcId;
	}
	public Double getConsumeLimit() {
		return consumeLimit;
	}
	public void setConsumeLimit(Double consumeLimit) {
		this.consumeLimit = consumeLimit;
	}
	public Integer getNewDatas() {
		return newDatas;
	}
	public void setNewDatas(Integer newDatas) {
		this.newDatas = newDatas;
	}
	public Integer getSocialDatas() {
		return socialDatas;
	}
	public void setSocialDatas(Integer socialDatas) {
		this.socialDatas = socialDatas;
	}
	public String getCreateTimeView() {
		return createTimeView;
	}
	public void setCreateTimeView(String createTimeView) {
		this.createTimeView = createTimeView;
	}
	public String getUpdateTimeView() {
		return updateTimeView;
	}
	public void setUpdateTimeView(String updateTimeView) {
		this.updateTimeView = updateTimeView;
	}
	public Integer getIsPolling() {
		return isPolling;
	}
	public void setIsPolling(Integer isPolling) {
		this.isPolling = isPolling;
	}
	
}

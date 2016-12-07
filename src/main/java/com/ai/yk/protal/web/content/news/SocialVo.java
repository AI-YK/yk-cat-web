package com.ai.yk.protal.web.content.news;

import java.io.Serializable;

public class SocialVo implements Serializable {
	private static final long serialVersionUID = 3936741365088237943L;
	/**
	 * 省份id
	 */
	private String provinceId;
	/**
	 * 是否原创1是 0非
	 */
	private int isOri;
	/**
	 * 转发指针
	 */
	private int repostSince;
	/**
	 * 评论数
	 */
	private int cmtCnt;
	/**
	 * 原微博id
	 */
	private String sourceWeiboId;
	/**
	 * 城市id
	 */
	private int cityId;
	/**
	 * 字符长度
	 */
	private int textLen;
	/**
	 * 用户头像
	 */
	private String userAvatar;
	/**
	 * 正文英文
	 */
	private String textEn;
	/**
	 * 状态数
	 */
	private int staCnt;
	/**
	 * 用户类型
	 */
	private String userType;
	/**
	 * 城市
	 */
	private String city;
	/**
	 * 数据唯一id
	 */
	private String id;
	/**
	 * 评论时间
	 */
	private String time;
	/**
	 * 情感倾向
	 */
	private int sentimentOrient;
	/**
	 * 认证原因
	 */
	private String verifiedReason;
	/**
	 * 是否认证
	 */
	private int verified;
	/**
	 * 昵称
	 */
	private String name;
	/**
	 * 用户id
	 */
	private String userId;
	/**
	 *省份
	 */
	private String province;
	/**
	 *粉丝数
	 */
	private int flwCnt;
	/**
	 *性别
	 */
	private int gender;
	/**
	 *更新时间字符串
	 */
	private String updateTimeStr;
	/**
	 *命名实体识别（产品）
	 */
	private String products;
	/**
	 *评论更新指针
	 */
	private int commentSince;
	/**
	 *正文
	 */
	private String text;
	/**
	 *点赞树
	 */
	private int atdCnt;
	/**
	 *关注数
	 */
	private int frdCnt;
	/**
	 *微博发表时间
	 */
	private long updateTime;
	/**
	 *微博发表时间字符串
	 */
	private String timeStr;
	/**
	 *正文中文
	 */
	private String textZh;
	/**
	 *命名实体识别（商家）
	 */
	private String companies;
	/**
	 *
	 */
	private String myId;
	/**
	 *
	 */
	private String languageCode;
	/**
	 *转发数
	 */
	private int rpsCnt;
	/**
	 *社交来源
	 */
	private String sourceType;
	/**
	 *标签
	 */
	private String tags;
	public String getProvinceId() {
		return provinceId;
	}
	public void setProvinceId(String provinceId) {
		this.provinceId = provinceId;
	}
	public int getIsOri() {
		return isOri;
	}
	public void setIsOri(int isOri) {
		this.isOri = isOri;
	}
	public int getRepostSince() {
		return repostSince;
	}
	public void setRepostSince(int repostSince) {
		this.repostSince = repostSince;
	}
	public int getCmtCnt() {
		return cmtCnt;
	}
	public void setCmtCnt(int cmtCnt) {
		this.cmtCnt = cmtCnt;
	}
	public String getSourceWeiboId() {
		return sourceWeiboId;
	}
	public void setSourceWeiboId(String sourceWeiboId) {
		this.sourceWeiboId = sourceWeiboId;
	}
	public int getCityId() {
		return cityId;
	}
	public void setCityId(int cityId) {
		this.cityId = cityId;
	}
	public int getTextLen() {
		return textLen;
	}
	public void setTextLen(int textLen) {
		this.textLen = textLen;
	}
	public String getUserAvatar() {
		return userAvatar;
	}
	public void setUserAvatar(String userAvatar) {
		this.userAvatar = userAvatar;
	}
	public String getTextEn() {
		return textEn;
	}
	public void setTextEn(String textEn) {
		this.textEn = textEn;
	}
	public int getStaCnt() {
		return staCnt;
	}
	public void setStaCnt(int staCnt) {
		this.staCnt = staCnt;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public int getSentimentOrient() {
		return sentimentOrient;
	}
	public void setSentimentOrient(int sentimentOrient) {
		this.sentimentOrient = sentimentOrient;
	}
	public String getVerifiedReason() {
		return verifiedReason;
	}
	public void setVerifiedReason(String verifiedReason) {
		this.verifiedReason = verifiedReason;
	}
	public int getVerified() {
		return verified;
	}
	public void setVerified(int verified) {
		this.verified = verified;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public int getFlwCnt() {
		return flwCnt;
	}
	public void setFlwCnt(int flwCnt) {
		this.flwCnt = flwCnt;
	}
	public int getGender() {
		return gender;
	}
	public void setGender(int gender) {
		this.gender = gender;
	}
	public String getUpdateTimeStr() {
		return updateTimeStr;
	}
	public void setUpdateTimeStr(String updateTimeStr) {
		this.updateTimeStr = updateTimeStr;
	}
	public String getProducts() {
		return products;
	}
	public void setProducts(String products) {
		this.products = products;
	}
	public int getCommentSince() {
		return commentSince;
	}
	public void setCommentSince(int commentSince) {
		this.commentSince = commentSince;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public int getAtdCnt() {
		return atdCnt;
	}
	public void setAtdCnt(int atdCnt) {
		this.atdCnt = atdCnt;
	}
	public int getFrdCnt() {
		return frdCnt;
	}
	public void setFrdCnt(int frdCnt) {
		this.frdCnt = frdCnt;
	}
	public long getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(long updateTime) {
		this.updateTime = updateTime;
	}
	public String getTimeStr() {
		return timeStr;
	}
	public void setTimeStr(String timeStr) {
		this.timeStr = timeStr;
	}
	public String getTextZh() {
		return textZh;
	}
	public void setTextZh(String textZh) {
		this.textZh = textZh;
	}
	public String getCompanies() {
		return companies;
	}
	public void setCompanies(String companies) {
		this.companies = companies;
	}
	public String getMyId() {
		return myId;
	}
	public void setMyId(String myId) {
		this.myId = myId;
	}
	public String getLanguageCode() {
		return languageCode;
	}
	public void setLanguageCode(String languageCode) {
		this.languageCode = languageCode;
	}
	public int getRpsCnt() {
		return rpsCnt;
	}
	public void setRpsCnt(int rpsCnt) {
		this.rpsCnt = rpsCnt;
	}
	public String getSourceType() {
		return sourceType;
	}
	public void setSourceType(String sourceType) {
		this.sourceType = sourceType;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	
}

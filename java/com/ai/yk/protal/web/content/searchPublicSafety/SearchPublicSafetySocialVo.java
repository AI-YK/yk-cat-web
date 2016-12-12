package com.ai.yk.protal.web.content.searchPublicSafety;
/**
 * 社交VO
 * social
 * @author lenovo
 *
 */
public class SearchPublicSafetySocialVo {

	/**省份id 		是否必填：Y**/
	private String provinceId;
	/**是否原创1是 0非		是否必填：Y**/
	private Integer isOri;
	/**转发指针 		是否必填：Y**/
	private Integer repostSince;
	/**评论数 		是否必填：Y**/
	private Integer cmtCnt;
	/**原微博id 		是否必填：Y**/
	private String sourceWeiboId;
	/**城市id 		是否必填：Y**/
	private Integer cityId;
	/**字符长度 		是否必填：Y**/
	private Integer textLen;
	/**用户头像 		是否必填：Y**/
	private String userAvatar;
	/**正文英文 		是否必填：Y**/
	private String textEn;
	/**状态数 		是否必填：Y**/
	private Integer staCnt;
	/**用户类型 		是否必填：Y**/
	private String userType;
	/**城市		是否必填：Y**/
	private String city;
	/**数据唯一id		是否必填：Y**/
	private String id;
	/**评论时间 		是否必填：Y**/
	private String time;
	/**情感倾向 		是否必填：Y**/
	private Integer sentimentOrient;
	/**认证原因		是否必填：Y**/
	private String verifiedReason;
	/**是否认证		是否必填：Y**/
	private Integer verified;
	/**昵称 		是否必填：Y**/
	private String name;
	/**用户id 		是否必填：Y**/
	private String userId;
	/**省份 		是否必填：Y**/
	private String province;
	/**粉丝数 		是否必填：Y**/
	private Integer flwCnt;
	/**性别 		是否必填：Y**/
	private Integer gender;
	/**更新时间字符串 		是否必填：Y**/
	private String updateTimeStr;
	/**命名实体识别（产品） 		是否必填：Y**/
	private String products;
	/**评论更新指针 		是否必填：Y**/
	private Integer commentSince;
	/**正文 		是否必填：Y**/
	private String text;
	/**点赞树		是否必填：Y**/
	private Integer atdCnt;
	/**关注数 		是否必填：Y**/
	private Integer frdCnt;
	/**微博发表时间 		是否必填：Y**/
	private Long updateTime;
	/**微博发表时间字符串 		是否必填：Y**/
	private String timeStr;
	/**正文中文 		是否必填：Y**/
	private String textZh;
	/**命名实体识别（商家）		是否必填：Y**/
	private String companies;
	/** 		是否必填：Y**/
	private String myId;
	/**languageCode 		是否必填：Y**/
	private String languageCode;
	/**转发数 		是否必填：Y**/
	private Integer rpsCnt;
	/**社交来源
		weibo
		weixin
		facebook
		twitter
 	是否必填：Y**/
	private String sourceType;
	/**标签 		是否必填：Y**/
	private String tags;
	public String getProvinceId() {
		return provinceId;
	}
	public void setProvinceId(String provinceId) {
		this.provinceId = provinceId;
	}
	public Integer getIsOri() {
		return isOri;
	}
	public void setIsOri(Integer isOri) {
		this.isOri = isOri;
	}
	public Integer getRepostSince() {
		return repostSince;
	}
	public void setRepostSince(Integer repostSince) {
		this.repostSince = repostSince;
	}
	public Integer getCmtCnt() {
		return cmtCnt;
	}
	public void setCmtCnt(Integer cmtCnt) {
		this.cmtCnt = cmtCnt;
	}
	public String getSourceWeiboId() {
		return sourceWeiboId;
	}
	public void setSourceWeiboId(String sourceWeiboId) {
		this.sourceWeiboId = sourceWeiboId;
	}
	public Integer getCityId() {
		return cityId;
	}
	public void setCityId(Integer cityId) {
		this.cityId = cityId;
	}
	public Integer getTextLen() {
		return textLen;
	}
	public void setTextLen(Integer textLen) {
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
	public Integer getStaCnt() {
		return staCnt;
	}
	public void setStaCnt(Integer staCnt) {
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
	public Integer getSentimentOrient() {
		return sentimentOrient;
	}
	public void setSentimentOrient(Integer sentimentOrient) {
		this.sentimentOrient = sentimentOrient;
	}
	public String getVerifiedReason() {
		return verifiedReason;
	}
	public void setVerifiedReason(String verifiedReason) {
		this.verifiedReason = verifiedReason;
	}
	public Integer getVerified() {
		return verified;
	}
	public void setVerified(Integer verified) {
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
	public Integer getFlwCnt() {
		return flwCnt;
	}
	public void setFlwCnt(Integer flwCnt) {
		this.flwCnt = flwCnt;
	}
	public Integer getGender() {
		return gender;
	}
	public void setGender(Integer gender) {
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
	public Integer getCommentSince() {
		return commentSince;
	}
	public void setCommentSince(Integer commentSince) {
		this.commentSince = commentSince;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public Integer getAtdCnt() {
		return atdCnt;
	}
	public void setAtdCnt(Integer atdCnt) {
		this.atdCnt = atdCnt;
	}
	public Integer getFrdCnt() {
		return frdCnt;
	}
	public void setFrdCnt(Integer frdCnt) {
		this.frdCnt = frdCnt;
	}
	public Long getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Long updateTime) {
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
	public Integer getRpsCnt() {
		return rpsCnt;
	}
	public void setRpsCnt(Integer rpsCnt) {
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

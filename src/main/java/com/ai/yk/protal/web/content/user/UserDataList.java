package com.ai.yk.protal.web.content.user;

import java.util.Date;

public class UserDataList {

	/**
	 * 用户id
	 * 是否必填：
	 */
	private Integer userId;
	/**
	 * 用户名
	 */
	private String userName;
	/**
	 * 昵称
	 */
	private String nickName;
	/**
	 *密码(冗余，存到ucenter)
	 */
	private String password;
	/**
	 * 所属企业ID
	 * 是否必填：Y
	 */
	private Integer pid;
	/**
	 * 所属企业名字
	 * 是否必填：Y
	 */
	private String enterpriseName;
	/**
	 *个性签名
	 */
	private String personalitySign;
	/**
	 *个人简介
	 */
	private String individualResume;
	/**
	 * 性别1:男            2：女            3：保密
	 */
	private Integer sex;
	/**
	 * 地址
	 */
	private String address;
	/**
	 * 头像地址
	 */
	private String headUrl;
	/**
	 * 背景地址
	 */	
	private String backgroundUrl;
	/**
	 *国家
	 */	
	private String country;
	/**
	 * 省份
	 */	
	private String province;
	/**
	 * 城市
	 */	
	private String city;
	/**
	 *国家或地区字母简称（区分手机号所在国家）如中国大陆->CN
	 */
	private String countryShortName;
	/**
	 *国家区号
	 */
	private String areaCode;
	/**
	 * 座机号
	 */
	private String phone;
	/**
	 * 手机号
	 */
	private String mobile;
	/**
	 *邮箱
	 */
	private String email;
	/**
	 * 注册来源
		8：PC端
		9：ios
		10：android
	 */
	private Integer source;
	/**
	 * 修改来源
		8：PC端
		9：ios
		10：android
	 */
	private Integer updateSource;
	/**
	 * 游客ID（APP端手机唯一标识）
	 */
	private String visitorId;
	/**
	 * 第三方用户来源          0：内部系统 gtcom  1：金山jinshan   2：百度用户baidu  3：微信weixin  4：找翻译5：wap端6：新浪   7：QQ
	 */
	private String thirdSource;
	/**
	 * 第三方用户ID
	 */
	private String thirdId;
	/**
	 * 用户状态2：未激活1：有效0：禁用
	 */
	private Integer state;
	/**
	 * 是否管理员  1 是 0 不是
	 */
	private Integer isAdmin;
	/**
	 * 用户类型用户类型 1：一般用户 2：销售 3：管理员
	 */
	private Integer userType;
	/**
	 * 公司名称(公司)
	 */
	private String companyName;
	/**
	 * 所属行业(公司)
	 */
	private String industry;
	/**
	 * 联系电话(公司)
	 */
	private String contactNumber;
	/**
	 * 销售码(注册时来源于哪个销售)
	 */
	private String saleCode;
	
	private Integer tradeAmount;
	
	private Integer balance;
	
	private Integer expiredTime;
	
	private String fullName;
	
	private Date lastLoginTime;
	
	private Integer system;
	
	private Integer enterpriseId;
	
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getNickName() {
		return nickName;
	}
	public void setNickName(String nickName) {
		this.nickName = nickName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	public String getEnterpriseName() {
		return enterpriseName;
	}
	public void setEnterpriseName(String enterpriseName) {
		this.enterpriseName = enterpriseName;
	}
	public String getPersonalitySign() {
		return personalitySign;
	}
	public void setPersonalitySign(String personalitySign) {
		this.personalitySign = personalitySign;
	}
	public String getIndividualResume() {
		return individualResume;
	}
	public void setIndividualResume(String individualResume) {
		this.individualResume = individualResume;
	}
	public Integer getSex() {
		return sex;
	}
	public void setSex(Integer sex) {
		this.sex = sex;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getHeadUrl() {
		return headUrl;
	}
	public void setHeadUrl(String headUrl) {
		this.headUrl = headUrl;
	}
	public String getBackgroundUrl() {
		return backgroundUrl;
	}
	public void setBackgroundUrl(String backgroundUrl) {
		this.backgroundUrl = backgroundUrl;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
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
	public String getCountryShortName() {
		return countryShortName;
	}
	public void setCountryShortName(String countryShortName) {
		this.countryShortName = countryShortName;
	}
	public String getAreaCode() {
		return areaCode;
	}
	public void setAreaCode(String areaCode) {
		this.areaCode = areaCode;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Integer getSource() {
		return source;
	}
	public void setSource(Integer source) {
		this.source = source;
	}
	public Integer getUpdateSource() {
		return updateSource;
	}
	public void setUpdateSource(Integer updateSource) {
		this.updateSource = updateSource;
	}
	public String getVisitorId() {
		return visitorId;
	}
	public void setVisitorId(String visitorId) {
		this.visitorId = visitorId;
	}
	public String getThirdSource() {
		return thirdSource;
	}
	public void setThirdSource(String thirdSource) {
		this.thirdSource = thirdSource;
	}
	public String getThirdId() {
		return thirdId;
	}
	public void setThirdId(String thirdId) {
		this.thirdId = thirdId;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}
	public Integer getIsAdmin() {
		return isAdmin;
	}
	public void setIsAdmin(Integer isAdmin) {
		this.isAdmin = isAdmin;
	}
	public Integer getUserType() {
		return userType;
	}
	public void setUserType(Integer userType) {
		this.userType = userType;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getSaleCode() {
		return saleCode;
	}
	public void setSaleCode(String saleCode) {
		this.saleCode = saleCode;
	}
	public Integer getTradeAmount() {
		return tradeAmount;
	}
	public void setTradeAmount(Integer tradeAmount) {
		this.tradeAmount = tradeAmount;
	}
	public Integer getBalance() {
		return balance;
	}
	public void setBalance(Integer balance) {
		this.balance = balance;
	}
	public Integer getExpiredTime() {
		return expiredTime;
	}
	public void setExpiredTime(Integer expiredTime) {
		this.expiredTime = expiredTime;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public Date getLastLoginTime() {
		return lastLoginTime;
	}
	public void setLastLoginTime(Date lastLoginTime) {
		this.lastLoginTime = lastLoginTime;
	}
	public Integer getSystem() {
		return system;
	}
	public void setSystem(Integer system) {
		this.system = system;
	}
	public Integer getEnterpriseId() {
		return enterpriseId;
	}
	public void setEnterpriseId(Integer enterpriseId) {
		this.enterpriseId = enterpriseId;
	}
	
	public UserDataList(Integer userId, String userName, String nickName, String password, Integer pid,
			String enterpriseName, String personalitySign, String individualResume, Integer sex, String address,
			String headUrl, String backgroundUrl, String country, String province, String city, String countryShortName,
			String areaCode, String phone, String mobile, String email, Integer source, Integer updateSource,
			String visitorId, String thirdSource, String thirdId, Integer state, Integer isAdmin, Integer userType,
			String companyName, String industry, String contactNumber, String saleCode, Integer tradeAmount,
			Integer balance, Integer expiredTime, String fullName, Date lastLoginTime, Integer system,
			Integer enterpriseId) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.nickName = nickName;
		this.password = password;
		this.pid = pid;
		this.enterpriseName = enterpriseName;
		this.personalitySign = personalitySign;
		this.individualResume = individualResume;
		this.sex = sex;
		this.address = address;
		this.headUrl = headUrl;
		this.backgroundUrl = backgroundUrl;
		this.country = country;
		this.province = province;
		this.city = city;
		this.countryShortName = countryShortName;
		this.areaCode = areaCode;
		this.phone = phone;
		this.mobile = mobile;
		this.email = email;
		this.source = source;
		this.updateSource = updateSource;
		this.visitorId = visitorId;
		this.thirdSource = thirdSource;
		this.thirdId = thirdId;
		this.state = state;
		this.isAdmin = isAdmin;
		this.userType = userType;
		this.companyName = companyName;
		this.industry = industry;
		this.contactNumber = contactNumber;
		this.saleCode = saleCode;
		this.tradeAmount = tradeAmount;
		this.balance = balance;
		this.expiredTime = expiredTime;
		this.fullName = fullName;
		this.lastLoginTime = lastLoginTime;
		this.system = system;
		this.enterpriseId = enterpriseId;
	}
	public UserDataList() {
		super();
	}
	
}

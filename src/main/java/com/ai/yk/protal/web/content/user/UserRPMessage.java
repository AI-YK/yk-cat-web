package com.ai.yk.protal.web.content.user;
public class UserRPMessage{
		/**
		 * 用户名
		 * 是否必填：N
		 */
		private String userName;
		/**
		 * 密码
		 * 是否必填：N
		 */
		private String password;
		/**
		 * 所属企业ID
		 */
		private Integer enterpriseId;
		/**
		 * 所属企业名字
		 */
		private String enterpriseName;
		/**
		 * 手机号
		 * 是否必填：N
		 */
		private String mobile;
		/**
		 * 邮箱
		 *  是否必填：N
		 */
		private String email;
		/**
		 * 国家区号
		 * 是否必填：N
		 */
		private String areaCode;
		/**
		 * 国家或地区字母简称（区分手机号所在国家）如 中国大陆->CN
		 * 是否必填：N
		 */
		private String countryShortName;
		/**
		 *  注册来源
			8：PC端
			9：ios
			10：android
		 * 是否必填：Y
		 */
		private String source;
		/**
		 * 第三方系统用户ID
		 * 是否必填：N
		 */
		private Integer thirdUid;
		/**
		 *	0：内部系统 gtcom
		 *	1：金山jinshan
		 *	2：百度用户baidu
		 *	3：微信weixin
		 *	4：找翻译
		 *	5：wap端
		 *	6：新浪
		 *	7：QQ
		 * 是否必填：N
		 */
		private Integer thirdSource;
		/**
		 * 注册ip
		 * 是否必填：N
		 */
		private String regIp;
		
		/**
		 * 登录模式
		 * 默认全部		
		 * 0：全部		
		 * 1：邮箱密码		
		 * 2：手机密码
		 * 3：手机动态密码		
		 * 4：用户名密码	
		 * 是否必填：Y
		 */
		private String loginMode;
		
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public Integer getEnterpriseId() {
			return enterpriseId;
		}
		public void setEnterpriseId(Integer enterpriseId) {
			this.enterpriseId = enterpriseId;
		}
		public String getEnterpriseName() {
			return enterpriseName;
		}
		public void setEnterpriseName(String enterpriseName) {
			this.enterpriseName = enterpriseName;
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
		public String getAreaCode() {
			return areaCode;
		}
		public void setAreaCode(String areaCode) {
			this.areaCode = areaCode;
		}
		public String getCountryShortName() {
			return countryShortName;
		}
		public void setCountryShortName(String countryShortName) {
			this.countryShortName = countryShortName;
		}
		public String getSource() {
			return source;
		}
		public void setSource(String source) {
			this.source = source;
		}
		public Integer getThirdUid() {
			return thirdUid;
		}
		public void setThirdUid(Integer thirdUid) {
			this.thirdUid = thirdUid;
		}
		public Integer getThirdSource() {
			return thirdSource;
		}
		public void setThirdSource(Integer thirdSource) {
			this.thirdSource = thirdSource;
		}
		public String getRegIp() {
			return regIp;
		}
		public void setRegIp(String regIp) {
			this.regIp = regIp;
		}
		public String getLoginMode() {
			return loginMode;
		}
		public void setLoginMode(String loginMode) {
			this.loginMode = loginMode;
		}
		public UserRPMessage(String userName, String password, Integer enterpriseId, String enterpriseName,
				String mobile, String email, String areaCode, String countryShortName, String source, Integer thirdUid,
				Integer thirdSource, String regIp, String loginMode) {
			super();
			this.userName = userName;
			this.password = password;
			this.enterpriseId = enterpriseId;
			this.enterpriseName = enterpriseName;
			this.mobile = mobile;
			this.email = email;
			this.areaCode = areaCode;
			this.countryShortName = countryShortName;
			this.source = source;
			this.thirdUid = thirdUid;
			this.thirdSource = thirdSource;
			this.regIp = regIp;
			this.loginMode = loginMode;
		}
		public UserRPMessage() {
			super();
		}
		
		
		
		
	}
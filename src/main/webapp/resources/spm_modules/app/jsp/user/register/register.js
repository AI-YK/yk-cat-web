define(
		"app/jsp/user/register/register",
		function(require, exports, module) {
			var smsObj; // timer变量，控制时间
			var count = 120; // 间隔函数
			var curCount;// 当前剩余秒数
			var $ = require('jquery'), Widget = require('arale-widget/1.2.0/widget'), Dialog = require("optDialog/src/dialog"), AjaxController = require('opt-ajax/1.0.0/index');
			// 实例化AJAX控制处理对象
			var ajaxController = new AjaxController();
			// 定义页面组件类
			var registerPager = Widget
					.extend({
						/* 事件代理 */
						events : {
							"click #refreshVerificationCode" : "_refreshVerificationCode",
							"click #change_register_type" : "_changeRegisterType",
							"blur #verifyCodeImg" : "_checkImageCode",
							"click #regsiterBtn" : "_submitRegsiter",
							"blur #phone" : "_checkPhoneOrEmail",
							"blur #email" : "_checkPhoneOrEmail",
							"click #send_dynamicode_btn" : "_sendDynamiCode"
						},
						/* 重写父类 */
						setup : function() {
							registerPager.superclass.setup.call(this);
							this._loadCountry();

						},
						/* 加载国家 */
						_loadCountry : function() {
							ajaxController.ajax({
								type : "post",
								processing : false,
								message : "保存中，请等待...",
								url : _base + "/userCommon/loadCountry",
								data : {},
								success : function(json) {
									var data = json.data;
									console.log(currentLan);
									if (json.statusCode == "1" && data) {
										var html = [];
										for (var i = 0; i < data.length; i++) {
											var t = data[i];
											var _code = t.countryCode;
											var name = t.countryNameCn;
											if ("zh_CN" != currentLan) {
												name = t.countryNameEn;
											}
											html.push('<option reg="'
													+ t.regularExpression
													+ '" value="' + _code
													+ '" >' + _code + '+'
													+ name + '</option>');
										}
										$("#country").html(html.join(""));
									}
								}
							});
						},
						/* 切换注册方式 */
						_changeRegisterType : function() {
							var a = $("#change_register_type");
							var register_type = a.attr("register_type");
							var phone_container = $("#li_register_phone_container");
							var phone_code_container = $("#li_register_phone_code_container");
							var email_container = $("#li_register_email_container");
							if ("phone" == register_type) {// 切换到email
								a.attr("register_type", "email");
								a.html('<i class="icon iconfont">&#xe613;</i>'
										+ registerMsg.phone_registered);
								phone_container.hide();
								phone_code_container.hide();
								email_container.show();
							} else if ("email" == register_type) {// 切换到手机
								a.attr("register_type", "phone");
								a.html('<i class="icon iconfont">&#xe614;</i>'
										+ registerMsg.email_registered);
								phone_container.show();
								phone_code_container.show();
								email_container.hide();
							}
						},
						/* 刷新验证码 */
						_refreshVerificationCode : function() {
							var _img = $("#refreshVerificationCode");
							var url = _img.attr("src");
							var versionStr = "?version=";
							var index = url.indexOf(versionStr);
							if (index > 0) {
								url = url.substring(0, index);
							}
							url = url + versionStr + new Date().getTime();
							_img.attr("src", url);

						},
						/* 展示校验信息 */
						_showCheckMsg : function(msg) {
							$("#regsiterMsg").html(msg)
						},
						/* 手机格式校验 */
						_checkPhone : function() {
							var country = $("#country").find("option:selected");
							var reg = country.attr("reg");
							var phone = $("#phone");
							var phoneVal = phone.val();
							if ($.trim(phoneVal) == "") {
								this._showCheckMsg(registerMsg.account_empty);
								//phone.focus();
								return false;
							}
							reg = eval('/' + reg + '/');
							if (!reg.test(phoneVal)) {
								this._showCheckMsg(registerMsg.account_error);
								//phone.focus();
								return false;
							}
							return true;
						},
						/* 邮箱校验 */
						_checkEmail : function() {
							var email = $("#email");
							var emailVal = email.val();
							if ($.trim(emailVal) == "") {
								this._showCheckMsg(registerMsg.account_empty);
								//email.focus();
								return false;
							}
							if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
									.test(emailVal)) {
								this._showCheckMsg(registerMsg.account_error);
								//email.focus();
								return false;
							}
							return true;
						},
						/* 校验注册 */
						_checkRegsiter : function() {
							var register_type = $("#change_register_type")
									.attr("register_type");
							var checkFalg = true;
							if ("phone" == register_type) {// 手机注册
								checkFalg = this._checkPhone();
							} else if ("email" == register_type) {// 邮箱注册
								checkFalg = this._checkEmail();
							}
							if (!checkFalg) {
								return false;
							}
							// 密码校验
							var password = $("#password");
							var passwordVal = password.val();
							if ($.trim(passwordVal) == "") {
								this._showCheckMsg(registerMsg.password_empty);
								//password.focus();
								return false;
							}

							if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/
									.test(passwordVal)) {
								this._showCheckMsg(registerMsg.password_error);
								//password.focus();
								return false;
							}
							// 确认密码
							var confirmPassword = $("#confirmPassword");
							var confirmPasswordVal = confirmPassword.val();
							if ($.trim(confirmPasswordVal) == "") {
								this
										._showCheckMsg(registerMsg.confirm_password_empty);
								//confirmPassword.focus();
								return false;
							}
							if (confirmPasswordVal != passwordVal) {
								this
										._showCheckMsg(registerMsg.confirm_password_error);
								//confirmPassword.focus();
								return false;
							}
							var verifyCodeImg = $("#verifyCodeImg");
							var verifyCodeImgVal = verifyCodeImg.val();
							if ($.trim(verifyCodeImgVal) == "") {
								this
										._showCheckMsg(registerMsg.verify_code_img_empty);
								//verifyCodeImg.focus();
								return false;
							}
							if ("phone" == register_type) {// 手机注册
								var smsCode = $("#smsCode");
								var smsCodeVal = smsCode.val();
								if ($.trim(smsCodeVal) == "") {
									this
											._showCheckMsg(registerMsg.sms_code_empty);
									//smsCode.focus();
									return false;
								}
							}
							
							if ($("[id='agreement']:checked").length < 1) {
								this._showCheckMsg(registerMsg.agreement);
								return false;
							}
							this._showCheckMsg('');
							return true;
						},
						/* 提交注册 */
						_submitRegsiter : function() {
							var regsiterBtn = $("#regsiterBtn");
							if (regsiterBtn.hasClass("biu-btn")) {
								return;
							}
							var falg = this._checkRegsiter();
							if (falg) {
								var _this = this;
								var register_type = $("#change_register_type")
										.attr("register_type");
								if ("phone" == register_type) {
									$("#email").val("");
								} else if ("email" == register_type) {
									$("#phone").val("");
								}
								regsiterBtn.removeClass("btn-blue").addClass(
										"biu-btn").attr("style", "color:#fff;");
								ajaxController
										.ajax({
											type : "post",
											processing : false,
											message : "保存中，请等待...",
											url : _base + "/reg/submitRegister",
											data : $("#regsiterForm")
													.serializeArray(),
											success : function(json) {
												regsiterBtn.removeClass(
														"biu-btn").addClass(
														"btn-blue");
												if (!json.data) {
													_this
															._showCheckMsg(json.statusInfo);
												} else {
													if ("email" == register_type) {
														location.href = _base
																+ "/reg/toEmail?email="
																+ $("#email")
																		.val();
													} else {
														location.href = _base
																+ "/reg/toSuccess";
													}
												}
											}
										});
							}
						},
						/* 异步校验图形验证码 */
						_checkImageCode : function() {
							var imgCode = $("#verifyCodeImg");
							var imgCodeVal = imgCode.val();
							if ($.trim(imgCodeVal).length < 4) {
								return;
							}
							var _this = this;
							ajaxController.ajax({
								type : "post",
								processing : false,
								message : "保存中，请等待...",
								url : _base + "/userCommon/checkImageVerifyCode",
								data : {
									'imgCode' : imgCodeVal
								},
								success : function(json) {
									if (!json.data) {
										//imgCode.focus();
										_this._showCheckMsg(json.statusInfo);
									}
								}
							});
						},
						/* 异步校验邮箱或手机 */
						_checkPhoneOrEmail : function() {
							var register_type = $("#change_register_type")
									.attr("register_type");
							var checkVal = '';
							var checkType = '';
							var checkFalg = true;
							if ("email" == register_type) {// 邮箱校验
								checkVal = $("#email").val();
								checkType = "email";
								checkFalg = this._checkEmail();
							} else if ("phone" == register_type) {// 手机
								checkVal = $("#phone").val();
								checkType = "phone";
								checkFalg = this._checkPhone();
							}
							if (!checkFalg) {
								return;
							}

							var _this = this;
							ajaxController.ajax({
								type : "post",
								processing : false,
								message : "保存中，请等待...",
								url : _base + "/reg/checkPhoneOrEmail",
								data : {
									'checkType' : checkType,
									"checkVal" : checkVal
								},
								success : function(json) {
									if (!json.data) {
										_this._showCheckMsg(json.statusInfo);
									}
								}
							});
						},
						/* 发送验证码 */
						_sendDynamiCode : function() {
							if (this._checkPhone()) {
								var _this = this;
								var btn = $("#send_dynamicode_btn");
								if (btn.hasClass("biu-btn")) {
									return;
								}
								curCount = count;
								ajaxController
										.ajax({
											type : "post",
											processing : false,
											message : "保存中，请等待...",
											url : _base + "/userCommon/sendSmsCode",
											data : {
												'phone' : $("#phone").val(),
												'type':'1'
											},
											success : function(json) {
												if(json.statusCode=="1" && json.data){
													btn.val(
															curCount + " s")
															.removeClass(
																	"btn-green")
															.addClass("biu-btn")
															.attr("style",
																	"color:#fff;");
													smsObj = window.setInterval(
															_this.startSmsTime,
															1000); // 启动计时器，1秒执行一次
												}else{
													_this._showCheckMsg(json.statusInfo);
												}
											}
										});
							}
						},
						startSmsTime : function() {
							if (curCount == 1) {
								window.clearInterval(smsObj);// 停止计时器
								$("#send_dynamicode_btn").val(
										registerMsg.getDynamiCode).removeClass(
										"biu-btn").addClass("btn-green");
							} else {
								curCount = curCount - 1;
								$("#send_dynamicode_btn").val(curCount + " s");
							}
						}
					});
			module.exports = registerPager;
		});
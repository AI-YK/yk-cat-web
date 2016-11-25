define("app/jsp/user/password/password",
		function(require, exports, module) {
			var smsObj; // timer变量，控制时间
			var count = 5; // 间隔函数，1秒执行
			var curCount;// 当前剩余秒数
			var $ = require('jquery'), 
			Widget = require('arale-widget/1.2.0/widget'), 
			Dialog = require("optDialog/src/dialog"), 
			AjaxController = require('opt-ajax/1.0.0/index');
			var showMsg = function(msg){
		    	var d = Dialog({
					content:msg,
					icon:'fail',
					okValue: passwordMsg.showOkValueMsg,
					title: passwordMsg.showTitleMsg,
					ok:function(){
						d.close();
					}
				});
				d.show();
		    };
			// 实例化AJAX控制处理对象
			var ajaxController = new AjaxController();
			// 定义页面组件类
			var passwordPager = Widget
					.extend({
						/* 事件代理 */
						events : {
							/**
							 * 刷新验证码
							 */
							"click #refreshVerificationCode" : "_refreshVerificationCode",
							/**
							 * 发送邮件
							 */
							"click #sendEmailBtn" : "_sendEmail",
							/**
							 * 账号下一步
							 */
							"click #back-btn":"_nextStep", 
							/**
							 * 发送动态码
							 */
							"click #send_dynamicode_btn":"_sendDynamiCode",
							/**
							 * 手机验证身份下一步
							 */
							"click #next-bt1":"_checkDynamicode",
							/**
							 * 输入密码下一步
							 */
							"click #next-bt2":"_checkPassword",
							/**
							 * 邮箱验证下一步
							 */
							"click #next-bt4":"_checkEmailImageCode",
							/**
							 * 邮件密码
							 */
							"click #next-bt5":"_checkEmailPassword"
							
						},
						/* 重写父类 */
						setup : function() {
							passwordPager.superclass.setup.call(this);
							this._loadCountry();
							$(".set-up a").click(function () {
				                $(".set-up a").each(function () {
				                    $(this).removeClass("current");
				                });
				                $(this).addClass("current");
				            });
							$('.set-up a').click(function(){
							  var index=$('.set-up a').index(this);
							     if(index==0){
							     $('#set-table1').show();
							  	 $('#set-table2').hide();
							   }
							   if(index==1){
							   $('#set-table2').show();
							   $('#set-table1').hide();
							   }
							  });

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
						/**
						 * 发送邮件
						 */
						_sendEmail:function(){
							var _this = this;
							var sendEmailBtn =$("#sendEmailBtn");
							sendEmailBtn.attr("disabled", true);
							ajaxController.ajax({
								type : "POST",
								data : {
									"email": $("#passwordEmail").html(),
									"type":'5',
									"uid":$("#userId").val()
								},
								dataType: 'json',
								url :_base+"/userCommon/sendEmail",
								processing: true,
								message : "...",
								success : function(data) {
									var resultCode = data.data;
									if(!resultCode){
										showMsg(passwordMsg.sendMailError);
										sendEmailBtn.removeAttr("disabled"); //移除disabled属性
									}else{
										var step = 59;
										sendEmailBtn.val('60 s');
							            var _res = setInterval(function(){
							            	sendEmailBtn.val(step+" s");
							                step-=1;
							                if(step <= 0){
							                	sendEmailBtn.removeAttr("disabled"); //移除disabled属性
							                	sendEmailBtn.val(passwordMsg.getDynamiCode);
							                clearInterval(_res);//清除setInterval
							                }
							            },1000);
									}
								},
								failure : function(){
									sendEmailBtn.removeAttr("disabled"); //移除disabled属性
								}
							});
						},
					  /**
					   * 账号下一步
					   */
				       _nextStep:function(){
				    	 var userNameVal= $("#userName").val();
						if($.trim(userNameVal)==""){
							showMsg(passwordMsg.account_empty);
							return false;
						 }  
						var imgCodeVal = $("#verifyCodeImg").val();
						if($.trim(imgCodeVal)==""){
							showMsg(passwordMsg.verify_code_img_empty);
							return false;
						}
						ajaxController.ajax({
							type : "post",
							processing : true,
							message : "...",
							url : _base + "/password/checkAccountInfo",
							data : {
								'imgCode' : imgCodeVal,
								'account' : userNameVal
							},
							success : function(json) {
								var data = json.data;
								if (!data.isOk) {
									showMsg(json.statusInfo);
								}else{
									var userId = data.uid;
									$("#userId").val(userId);
									var telphone =data.mobilephone;
									$("#telephone").html(telphone);
									var passwordEmail = data.email;
									$("#passwordEmail").html(passwordEmail);
									var isBindPhone =false;
									if(telphone!=null&&telphone!=""){
										 isBindPhone = true;
									}
									var isBindEmail =false;
									if(passwordEmail!=null&&passwordEmail!=""){
										 isBindEmail = true;
									}
									var accountFlag =false;
									if(isBindPhone||isBindEmail){//绑定任意一个则有帐号
										accountFlag = true;
									}else{
										location.href=_base + "/password/notBind";
										return;
									}
									if(!isBindPhone){//没有绑定手机
										$("#set-table1").html("<div class='recharge-success mt-40'><ul><li class='word'>"+passwordMsg.notBindingPhone+"</li></ul></div>");	
									}
                                    if(!isBindEmail){//没有绑定邮箱
                                    	 $("#set-table2").html("<div class='recharge-success mt-40'><ul><li class='word'>"+passwordMsg.notBindingEmail+"</li></ul></div>");
                                     }
                                    $("#back-pass").hide();
     							    $("#back-pass1").show();
     							   if(isBindEmail&&!isBindPhone){
     								  $("#emailVerification a").click(); 
     							   }
     							}
							}
						});
						
						
				       },
						/* 发送验证码 */
					  _sendDynamiCode : function() {
						var _this = this;
						var btn = $("#send_dynamicode_btn");
						btn.attr("disabled", true);
			            ajaxController
							.ajax({
								type : "post",
								processing : false,
								message : "...",
								url : _base + "/userCommon/sendSmsCode",
								data : {
									'phone' : $("#telephone").html(),
									'type':"2",
									'uid':$("#userId").val()
								},
								success : function(data) {
									if(!data.data){
										showMsg(data.statusInfo);
										btn.removeAttr("disabled"); //移除disabled属性
										btn.val(passwordMsg.getDynamiCode);
										return;
									}else{
                                        var step = 59;
										btn.val('60 s');
							            var _res = setInterval(function(){
							            	btn.attr("disabled", true);//设置disabled属性
							            	btn.val(step+" s");
							                step-=1;
							                if(step <= 0){
							                btn.removeAttr("disabled"); //移除disabled属性
							                btn.val(passwordMsg.getDynamiCode);
							                clearInterval(_res);//清除setInterval
							                }
							            },1000);
							      }
								}
							});
						},
						/**
						 * 校验动态码
						 */
						_checkDynamicode:function(){
							 var phoneDynamicode = $("#phoneDynamicode").val();
							 if($.trim(phoneDynamicode)==""){
								 //$("#dynamicode").show();
								 //$("#dynamicode").text("请输入验证码");
								 showMsg(passwordMsg.smsCodeEmpty);
								 return false;
							 }
							 ajaxController.ajax({
								 type:"post",
				    				url:_base+"/userCommon/checkSmsCode",
				    				data:{
				    					phone:$("#telephone").html(),
				    					type:"2",
				    					code:$("#phoneDynamicode").val(),
				    					isRemove:'true'
				    				},
				    		        success: function(data) {
				    		        	if(!data.data){
				    		        		showMsg(data.statusInfo);
											return false;
				    		        	}else{
				    		        		 $("#tcode").val(phoneDynamicode);
				    		        		 $("#next1").hide();
				 						     $("#next2").show();
				    		        	}
				    		          }
				    				});
							 
						},
						/**
						 * 输入密码下一步
						 */
						_checkPassword:function(){
							// 密码校验
							var password = $("#password");
							var passwordVal = password.val();
							if ($.trim(passwordVal) == "") {
								showMsg(passwordMsg.password_empty);
								return false;
							}
							if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/
									.test(passwordVal)) {
								showMsg(passwordMsg.password_error);
								return false;
							}
							// 确认密码
							var confirmPassword = $("#confirmPassword");
							var confirmPasswordVal = confirmPassword.val();
							if ($.trim(confirmPasswordVal) == "") {
								showMsg(passwordMsg.confirm_password_empty);
								return false;
							}
							if (confirmPasswordVal != passwordVal) {
								showMsg(passwordMsg.confirm_password_error);
								return false;
							}
							ajaxController.ajax({
								type:"post",
			    				url:_base+"/password/updatePassword",
			    				data:{
			    					'uid':$("#userId").val(),
			    					'newpw':passwordVal,
			    					'checke_code':$("#tcode").val()
			    				},
			    		        success: function(json) {
			    		        	if(!json.data){
			    		        		showMsg(json.statusInfo);
			    		        		return false;
			    		        	}else if(json.data){
			    		        		$("#next2").hide();
										$("#next3").show();
			    		        	}
			    		          }
			    				});
						},
						/**
						 * 校验手机密码
						 */
						_checkPasswordValue:function(){
							// 密码校验
							var password = $("#password");
							var passwordVal = password.val();
							if ($.trim(passwordVal) == "") {
								this._showCheckMsg(passwordMsg.password_empty);
								$("#passwordMsg").show();
								password.focus();
								return false;
							}
							if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/
									.test(passwordVal)) {
								this._showCheckMsg(passwordMsg.password_error);
								$("#passwordMsg").show();
								password.focus();
								return false;
							}
							
						},
						/**
						 * 校验确认密码
						 */
						_checkConfirmPasswordValue:function(){
							// 确认密码
							var confirmPassword = $("#confirmPassword");
							var confirmPasswordVal = confirmPassword.val();
							if ($.trim(confirmPasswordVal) == "") {
								this._showCheckMsg(passwordMsg.confirm_password_empty);
								$("#passwordMsg").show();
								return false;
							}
						},
						/* 展示校验信息 */
						_showCheckMsg : function(msg) {
							$("#passwordMsg").html(msg)
						},
						/**
						 * 校验邮件验证码
						 */
						_checkEmailImageCode:function(){
							var emailIdentifyCode = $("#emailIdentifyCode").val();
							if($.trim(emailIdentifyCode)==""){
								showMsg(passwordMsg.emailCodeEmpty);
								return;
							}
							ajaxController.ajax({
								type:"post",
			    				url:_base+"/userCommon/checkEmailCode",
			    				data:{
			    					'email':$("#passwordEmail").html(),
			    					'code':$("#emailIdentifyCode").val(),
			    					'isRemove':'true'
			    				},
			    		        success: function(data) {
			    		        	if(!data.data){
			    		        		showMsg(data.statusInfo);
			    		        		return false;
			    		        	}else{
			    		        		$("#next4").hide();
										$("#next5").show();
										$("#tcode").val($("#emailIdentifyCode").val());
			    		        	}
			    		          }
			    				});
							
						},
						/**
						 * 校验邮箱密码
						 */
						_checkEmailPasswordValue:function(){
							// 密码校验
							var emailPassword = $("#emailPassword");
							var emailPasswordVal = emailPassword.val();
							if ($.trim(emailPasswordVal) == "") {
								showMsg(passwordMsg.password_empty)
								return false;
							}
							if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/
									.test(emailPasswordVal)) {
								showMsg(passwordMsg.password_error);
								return false;
							}
							$("#emailPasswordErrMsg").hide();
						},
						/**
						 * 校验确认密码
						 */
						_checkEmailConfirmPasswordValue:function(){
							// 确认密码
							var emailConfirmPassword = $("#emailConfirmPassword");
							var confirmPasswordVal = emailConfirmPassword.val();
							if ($.trim(confirmPasswordVal) == "") {
								showMsg(passwordMsg.confirm_password_error)
								return false;
							}
							$("#emailPasswordErrMsg").hide();
						},
						/**
						 * 输入邮箱密码下一步
						 */
						_checkEmailPassword:function(){
							// 密码校验
							var password = $("#emailPassword");
							var passwordVal = password.val();
							if ($.trim(passwordVal) == "") {
								showMsg(passwordMsg.password_empty);
								return false;
							}
							if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/
									.test(passwordVal)) {
								showMsg(passwordMsg.password_error);
								return false;
							}
							// 确认密码
							var confirmPassword = $("#emailConfirmPassword");
							var confirmPasswordVal = confirmPassword.val();
							if ($.trim(confirmPasswordVal) == "") {
								showMsg(passwordMsg.confirm_password_empty);
								return false;
							}
							if (confirmPasswordVal != passwordVal) {
								showMsg(passwordMsg.confirm_password_error);
								return false;
							}
							ajaxController.ajax({
								type:"post",
			    				url:_base+"/password/updatePassword",
			    				data:{
			    					'newpw':passwordVal,
			    					'checke_code':$("#tcode").val(),
			    					'uid':$("#userId").val()
			    				},
			    		        success: function(json) {
			    		        	if(!json.data){
			    		        		showMsg(data.statusInfo);
			    		        		return false;
			    		        	}else{
			    		        		$("#next5").hide();
			    		        		$("#next6").show();
			    		        	}
			    		          }
			    				});
						},
					});
			module.exports = passwordPager;
		});
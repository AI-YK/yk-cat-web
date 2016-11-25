define("app/jsp/user/security/updateEmail",
		function(require, exports, module) {
			var smsObj; // timer变量，控制时间
			var count = 5; // 间隔函数，1秒执行
			var curCount;// 当前剩余秒数
			var accountFlag = false;
			var imgCodeFlag = false;
			var isBandPhone = false;
			var isBandEmail = false;
			var showMsg = function(msg){
		    	var d = Dialog({
					content:msg,
					icon:'fail',
					okValue: updatePasswordMsg.showOkValueMsg,
					title: updatePasswordMsg.showTitleMsg,
					ok:function(){
						d.close();
					}
				});
				d.show();
		    };
			
			var $ = require('jquery'), 
			Widget = require('arale-widget/1.2.0/widget'), 
			Dialog = require("optDialog/src/dialog"), 
			AjaxController = require('opt-ajax/1.0.0/index');
			// 实例化AJAX控制处理对象
			var ajaxController = new AjaxController();
			// 定义页面组件类
			var updateEmailPager = Widget
					.extend({
						/* 事件代理 */
						events : {
							/**
							 * 通过手机修改邮箱
							 */
							//发送手机动态码
							"click #send_dynamicode_btn":"_sendDynamiCode",
							//手机验证身份下一步
							"click #next-bt1":"_checkPhoneDynamicode",
							//校验邮箱地址
							//"blur #phoneUEmail":"_pcheckEmail",
							//手机方式验证后发送新邮箱
							"click #phone-send-email-btn":"_psendEmail",
							//校验手机和动态码是否匹配
							"click #pnext-bt2":"_submitEmailValue",

							
							
							/**
							 * 通过邮箱修改邮箱
							 */
							//邮箱方式验证身份发送邮件
							"click #sendEmailBtn" : "_sendEmail",
							//邮箱验证下一步
							"click #next-bt4":"_checkEmailImageCode",
							//通过邮箱修改邮箱,校验邮箱合法性
							"blur #emailUpdateEmail":"_checkEmail",
							//通过邮箱修改邮箱，发送动态码验证
							"click #email-sendCode-btn":"_sendEmailUDynamiCode",
							//校验手机和验证码是否匹配，如果匹配则修改手机号
							"click #next-bt5":"_submitValue",
						},
						/* 重写父类 */
						setup : function() {
							updateEmailPager.superclass.setup.call(this);
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
							if(email==""){
								 $("#set-table2").html("<div class='recharge-success mt-40'><ul><li class='word'>"+updateEmailJs.notBindEmailNoVerify+"</li></ul></div>");
							}
							if(phone==""){
								 $("#set-table1").html("<div class='recharge-success mt-40'><ul><li class='word'>"+updateEmailJs.notBindPhoneNoVerify+"</li></ul></div>");
							}
							if(phone==""&&email!=""){//没有绑定手机选中邮箱
								$('.set-up a:eq(1)').click();
							}
                      },
						/* 加载国家 */
						_loadCountry : function() {
							ajaxController.ajax({
								type : "post",
								processing : false,
								message : updateEmailJs.saveingMsg,
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
						/**
						 * 发送邮件
						 */
						_sendEmail:function(){
							var _this = this;
							$("#sendEmailBtn").attr("disabled", true);
							ajaxController.ajax({
								type : "POST",
								data : {
									"email": email,
									"type":"5"
								},
								dataType: 'json',
								url :_base+"/userCommon/sendEmail",
								processing: true,
								message : updateEmailJs.dealing,
								success : function(data) {
									var resultCode = data.data;
									if(!resultCode){
										//$("#emailErrMsg").show();
										//$("#emailErrMsg").text(updateEmailJs.sendEmailFail);
										showMsg(updateEmailJs.sendEmailFail);
										$("#sendEmailBtn").removeAttr("disabled"); //移除disabled属性
									}else{
										var step = 59;
							            $('#sendEmailBtn').val(updateEmailJs.resend60);
							            $("#sendEmailBtn").attr("disabled", true);
							            var _res = setInterval(function(){
							                $("#sendEmailBtn").attr("disabled", true);//设置disabled属性
							                $('#sendEmailBtn').val(updateEmailJs.resend+step);
							                step-=1;
							                if(step <= 0){
							                $("#sendEmailBtn").removeAttr("disabled"); //移除disabled属性
							                $('#sendEmailBtn').val(updateEmailJs.getOperationCode);
							                clearInterval(_res);//清除setInterval
							                }
							            },1000);
							            //window.location.href = _base+"/user/bandEmail/sendBandEmailSuccess?email="+$("#email").val();
										
									}
								},
								failure : function(){
									$("#sendEmailBtn").removeAttr("disabled"); //移除disabled属性
								},
								error : function(){
									alert(updateEmailJs.networkConnectTimeOut);
								}
							});
						},
						/**
						 * 发送邮件
						 */
						_psendEmail:function(){
							var emailVal = $("#phoneUEmail").val();
							if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
									.test(emailVal)) {
								//$("#phoneUEmailErrMgs").show();
								//$("#phoneUEmailErrMgs").text(updateEmailJs.emailFormatIncorrect);
								showMsg(updateEmailJs.emailFormatIncorrect);
								return;
							}
							var _this = this;
							$("#phone-send-email-btn").attr("disabled", true);
							ajaxController.ajax({
								type : "POST",
								data : {
									"email": emailVal,
									"type":"5"
								},
								dataType: 'json',
								url :_base+"/userCommon/sendEmail",
								processing: true,
								message : updateEmailJs.dealing,
								success : function(data) {
									var resultCode = data.data;
									if(!resultCode){
										//$("#phoneUEmailErrMgs").show();
										//$("#phoneUEmailErrMgs").text(updateEmailJs.sendEmailFail);
										showMsg(updateEmailJs.sendEmailFail);
										$("#phone-send-email-btn").removeAttr("disabled"); //移除disabled属性
									}else{
										var step = 59;
							            $('#phone-send-email-btn').val(updateEmailJs.resend60);
							            $("#phone-send-email-btn").attr("disabled", true);
							            var _res = setInterval(function(){
							                $("#phone-send-email-btn").attr("disabled", true);//设置disabled属性
							                $('#phone-send-email-btn').val(updateEmailJs.resend+step);
							                step-=1;
							                if(step <= 0){
							                $("#phone-send-email-btn").removeAttr("disabled"); //移除disabled属性
							                $('#phone-send-email-btn').val(updateEmailJs.getOperationCode);
							                clearInterval(_res);//清除setInterval
							                }
							            },1000);
										
									}
								},
								failure : function(){
									$("#phone-send-email-btn").removeAttr("disabled"); //移除disabled属性
								},
								error : function(){
									alert(updateEmailJs.networkConnectTimeOut);
								}
							});
						},
					  _sendUDynamiCode:function(){
						  if (this._checkPhone()) {
							  this._sendDynamiCode();
						  }
					  },
						/* 发送动态码 */
					  _sendDynamiCode : function() {
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
									message : updateEmailJs.saveingMsg,
									url : _base + "/userCommon/sendSmsCode",
									data : {
										'phone' : $("#telephone").html(),
										'type':"2"
									},
									success : function(data) {
										if(data.data==false){
											//$("#dynamicode").show();
											//$("#dynamicode").text(data.statusInfo);
											showMsg(data.statusInfo);
											$("#send_dynamicode_btn").removeAttr("disabled"); //移除disabled属性
								            $('#send_dynamicode_btn').val(updateEmailJs.getOperationCode);
											return;
										}else{
											if(data.data){
												var step = 59;
									            $('#send_dynamicode_btn').val(updateEmailJs.resend60);
									            $("#send_dynamicode_btn").attr("disabled", true);
									            var _res = setInterval(function(){
									                $("#send_dynamicode_btn").attr("disabled", true);//设置disabled属性
									                $('#send_dynamicode_btn').val(updateEmailJs.resend+step);
									                step-=1;
									                if(step <= 0){
									                $("#send_dynamicode_btn").removeAttr("disabled"); //移除disabled属性
									                $('#send_dynamicode_btn').val(updateEmailJs.getOperationCode);
									                clearInterval(_res);//清除setInterval
									                }
									            },1000);
									            $("#dynamicode").hide();
											}else{
												$("#send_dynamicode_btn").removeAttr("disabled");
											}
									  }
									}
								});
						},
						/**
						 * 校验身份验证手机和验证码是不是匹配
						 */
						_checkPhoneDynamicode:function(){
							 var phoneDynamicode = $("#phoneDynamicode").val();
							 if(phoneDynamicode==null||phoneDynamicode==""){
								 //$("#dynamicode").show();
								 //$("#dynamicode").text(updateEmailJs.pleaseInputOC);
								 showMsg(updateEmailJs.pleaseInputOC);
								 return false;
							 }
							 ajaxController.ajax({
								 type:"post",
				    				url:_base+"/userCommon/checkSmsCode",
				    				data:{
				    					phone:$("#telephone").html(),
				    					type:"2",
				    					code:$("#phoneDynamicode").val(),
				    				},
				    		        success: function(data) {
				    		        	if(!data.data){
				    		        		//$("#dynamicode").show();
											//$("#dynamicode").text(data.statusInfo);
				    		        		showMsg(data.statusInfo);
											return false;
				    		        	}else{
				    		        		 $("#next1").hide();
				 						     $("#next2").show();
				    		        	}
				    		          },
				    				error: function(error) {
				    						alert("error:"+ error);
				    					}
				    				});
							 
						},
						/**
						 * 校验动态码
						 */
						_checkUpdatePhoneDynamicode:function(){
							 var phoneDynamicode = $("#uphoneDynamicode").val();
							 if(phoneDynamicode==null||phoneDynamicode==""){
								 //$("#updateEmailErrMsg").show();
								 //$("#updateEmailErrMsg").text(updateEmailJs.pleaseInputOC);
								 showMsg(updateEmailJs.pleaseInputOC);
								 return false;
							 }
							 ajaxController.ajax({
								    type:"post",
				    				url:_base+"/userCommon/checkSmsCode",
				    				data:{
				    					phone:$("#uPhone").val(),
				    					type:"2",
				    					code:$("#uphoneDynamicode").val(),
				    				},
				    		        success: function(data) {
				    		        	if(!data.data){
				    		        		//$("#uphoneDynamicode").show();
											//$("#uphoneDynamicode").text(data.statusInfo);
				    		        		showMsg(data.statusInfo);
											return false;
				    		        	}else{
				    		        		 ajaxController.ajax({
				    		        			 type:"post",
								    			 url:_base+"/p/security/updatePhone",
								    			 data:{
								    					phone:$("#uPhone").val(),
								    					type:"2",
								    					code:$("#uphoneDynamicode").val(),
								    				},
								    				success: function(data) {
								    					var jsonData = JSON.parse(data);
								    		        	if(jsonData.statusCode!="1"){
								    		        		alert(updateEmailJs.bindFail)
															return false;
								    		        	}else{
								    		        		$("#next2").hide();
								    		        		$("#next3").show();
								    		        	}
								    		          },
								    				error: function(error) {
								    						alert("error:"+ error);
								    					}
								    				});
				    		        	}
				    		          },
				    				error: function(error) {
				    						alert("error:"+ error);
				    					}
				    				});
						},
						/* 邮箱校验 */
						_checkEmail : function(id) {
							var email = $("#"+id);
							var emailVal = email.val();
							if ($.trim(emailVal) == "") {
								alert(updateEmailJs.emailUErrPleaseMsg);
								//email.focus();
								return false;
							}
							if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
									.test(emailVal)) {
								alert(updateEmailJs.emailUErrLegalMsg);
								return false;
							}
							return true;
						},
						_pcheckEmail:function(){
							var email = $("#phoneUEmail");
							var emailVal = email.val();
							if ($.trim(emailVal) == "") {
								//$("#phoneUEmailErrMgs").show();
								//$("#phoneUEmailErrMgs").text(updateEmailJs.emailUErrPleaseMsg);
								showMsg(updateEmailJs.emailUErrPleaseMsg);
								//email.focus();
								return false;
							}
							if (!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
									.test(emailVal)) {
								//$("#phoneUEmailErrMgs").show();
								//$("#phoneUEmailErrMgs").text(updateEmailJs.emailUErrLegalMsg);
								showMsg(updateEmailJs.emailUErrLegalMsg);
								return false;
							}
							$("#phoneUEmailErrMgs").hide();
							return true;
						},
						/**
						 *  通过邮箱地址修改手机号 
						 */
						_checkEmailUpdatePhone : function() {
							var country = $("#country").find("option:selected");
							var reg = country.attr("reg");
							var phone = $("#emailUpdatePhone");
							var phoneVal = phone.val();
							if ($.trim(phoneVal) == "") {
								//$("#emailUpdatePhoneErrMsg").show();
								//$("#emailUpdatePhoneErrMsg").html(updateEmailJs.phoneNumCanNotEmpty);
								//phone.focus();
								showMsg(updateEmailJs.phoneNumCanNotEmpty);
								return false;
							}else{
								$("#emailUpdatePhoneErrMsg").hide();
								reg = eval('/' + reg + '/');
								if (!reg.test(phoneVal)) {
									//$("#emailUpdatePhoneErrMsg").show();
									//$("#emailUpdatePhoneErrMsg").html(updateEmailJs.pleaseInputRightPhoneNum);
									//phone.focus();
									showMsg(updateEmailJs.pleaseInputRightPhoneNum);
									return false;
								}else{
									$("#emailUpdatePhoneErrMsg").hide();
									ajaxController.ajax({
										type : "post",
										processing : false,
										message : updateEmailJs.saveingMsg,
										url : _base + "/reg/checkPhoneOrEmail",
										data : {
											'checkType' : "phone",
											"checkVal" : $("#emailUpdatePhone").val()
										},
										success : function(json) {
											if (!json.data) {
												//$("#emailUpdatePhoneErrMsg").show();
												//$("#emailUpdatePhoneErrMsg").html(json.statusInfo);
												showMsg(json.statusInfo);
											}else{
												$("#emailUpdatePhoneErrMsg").hide();
											}
										}
									});
								}
							}
							return true;
						},
						/* 发送动态码 */
						  _sendEmailUEmailDynamiCode : function() {
								var _this = this;
								var btn = $("#email-sendCode-btn");
								if (btn.hasClass("biu-btn")) {
									return;
								}
								curCount = count;
								ajaxController
									.ajax({
										type : "post",
										processing : false,
										message : updateEmailJs.saveingMsg,
										url : _base + "/userCommon/sendEmail",
										data : {
											'email' : $("#emailUpdateEmail").val(),
											'type':"5"
										},
										success : function(data) {
											if(data.data==false){
												//$("#emailUErrMsg").show();
												//$("#emailUErrMsg").text(data.statusInfo);
												showMsg(data.statusInfo);
												$("#email-sendCode-btn").removeAttr("disabled"); //移除disabled属性
									            $('#email-sendCode-btn').val(updateEmailJs.getOperationCode);
												return;
											}else{
												if(data.data){
													var step = 59;
										            $('#email-sendCode-btn').val(updateEmailJs.resend60);
										            $("#email-sendCode-btn").attr("disabled", true);
										            var _res = setInterval(function(){
										                $("#email-sendCode-btn").attr("disabled", true);//设置disabled属性
										                $('#email-sendCode-btn').val(updateEmailJs.resend+step);
										                step-=1;
										                if(step <= 0){
										                $("#email-sendCode-btn").removeAttr("disabled"); //移除disabled属性
										                $('#email-sendCode-btn').val(updateEmailJs.getOperationCode);
										                clearInterval(_res);//清除setInterval
										                }
										            },1000);
										            $("#emailUErrMsg").hide();
												}else{
													$("#email-sendCode-btn").removeAttr("disabled");
												}
										  }
										}
									});
							},
						/**
						 * 邮箱修改手机号，获取动态码
						 */
						_sendEmailUDynamiCode:function(){
							if (this._checkEmail('emailUpdateEmail')) {
								  this._sendEmailUEmailDynamiCode();
							  }
						},
						/**
						 * 校验邮件验证码
						 */
						_checkEmailImageCode:function(){
							var emailIdentifyCode = $("#emailIdentifyCode").val();
							if(emailIdentifyCode==""||emailIdentifyCode==null){
								//$("#emailErrMsg").show();
								//$("#emailErrMsg").text(updateEmailJs.pleaseInputOC);
								showMsg(updateEmailJs.pleaseInputOC);
								return;
							}
							ajaxController.ajax({
								type:"post",
			    				url:_base+"/userCommon/checkEmailCode",
			    				data:{
			    					email:email,
			    					code:$("#emailIdentifyCode").val(),
			    				},
			    		        success: function(data) {
			    		        	if(!data.data){
			    		        		//$("#emailErrMsg").show();
			    		        		//$("#emailErrMsg").text(data.statusInfo);
			    		        		showMsg(data.statusInfo);
			    		        		return false;
			    		        	}else{
			    		        		$("#next4").hide();
										$("#next5").show();
			    		        	}
			    		          },
			    				error: function(error) {
			    						alert("error:"+ error);
			    					}
			    				});
							
						},
						_submitValue:function(){
							/**
							 * 校验动态码
							 */
							 var phoneDynamicode = $("#uEmailCode").val();
							 if(phoneDynamicode==null||phoneDynamicode==""){
								 //$("#emailUErrMsg").show();
								 //$("#emailUErrMsg").text(updateEmailJs.pleaseInputOC);
								 showMsg(updateEmailJs.pleaseInputOC);
								 return false;
							 }
							 ajaxController.ajax({
    		        			 type:"post",
				    			 url:_base+"/p/security/updateEmail",
				    			 data:{
				    				 	email:$("#emailUpdateEmail").val(),
				    					type:"5",
				    					code:$("#uEmailCode").val(),
				    				},
				    				success: function(json) {
				    					if(!json.data){
				    		        		alert(json.statusInfo)
										}else{
				    		        		$("#next5").hide();
				    		        		$("#next6").show();
				    		        	}
				    		          },
				    				error: function(error) {
				    						alert("error:"+ error);
				    					}
				    				});
						},
						_submitEmailValue:function(){
							/**
							 * 校验动态码
							 */
							 var emailDynamicode = $("#phoneUEmailCode").val();
							 if(emailDynamicode==null||emailDynamicode==""){
								 //$("#phoneUEmailErrMgs").show();
								 //$("#phoneUEmailErrMgs").text(updateEmailJs.pleaseInputOC);
								 showMsg(updateEmailJs.pleaseInputOC);
								 return false;
							 }
							 ajaxController.ajax({
    		        			 type:"post",
				    			 url:_base+"/p/security/updateEmail",
				    			 data:{
				    				 	'email':$("#phoneUEmail").val(),
				    					'code':$("#phoneUEmailCode").val()
				    				},
				    				success: function(json) {
				    					if(!json.data){
				    		        		alert(json.statusInfo)
											return;
				    		        	}else{
				    		        		$("#next2").hide();
				    		        		$("#next3").show();
				    		        	}
				    		          },
				    				error: function(error) {
				    						alert("error:"+ error);
				    					}
				    				});
						}
					});
			module.exports = updateEmailPager;
		});
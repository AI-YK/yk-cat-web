define("app/jsp/user/security/updateMobilePhone",
		function(require, exports, module) {
			var smsObj; // timer变量，控制时间
			var count = 5; // 间隔函数，1秒执行
			var curCount;// 当前剩余秒数
			var accountFlag = false;
			var imgCodeFlag = false;
			var isBandPhone = false;
			var isBandEmail = false;
			var $ = require('jquery'), 
			Widget = require('arale-widget/1.2.0/widget'), 
			Dialog = require("optDialog/src/dialog"), 
			AjaxController = require('opt-ajax/1.0.0/index');
			var showMsg = function(msg){
		    	var d = Dialog({
					content:msg,
					icon:'fail',
					okValue: updatePhoneJs.showOkValueMsg,
					title: updatePhoneJs.showTitleMsg,
					ok:function(){
						this.close();
					}
				});
				d.show();
		    }

			// 实例化AJAX控制处理对象
			var ajaxController = new AjaxController();
			// 定义页面组件类
			var updatePhonePager = Widget
					.extend({
						/* 事件代理 */
						events : {
							/**
							 * 通过手机修改手机号
							 */
							//发送手机动态码
							"click #send_dynamicode_btn":"_sendDynamiCode",
							//手机验证身份下一步
							"click #next-bt1":"_checkPhoneDynamicode",
							//校验手机号
							"blur #uPhone":"_checkPhone",
							//修改手机号，发送动态码
							"click #usend_dynamicode_btn":"_sendUDynamiCode",
							//校验手机和动态码是否匹配
							"click #unext-bt2":"_checkUpdatePhoneDynamicode",

							
							
							/**
							 * 通过邮箱修改手机号
							 */
							//验证身份发送邮件
							"click #sendEmailBtn" : "_sendEmail",
							//邮箱验证下一步
							"click #next-bt4":"_checkEmailImageCode",
							//通过邮箱修改手机号,校验手机号合法性
							"blur #emailUpdatePhone":"_checkEmailUpdatePhone",
							//通过邮箱修改手机号，发送动态码验证
							"click #emailUpDynamicodeBtn":"_sendEmailUPhoneDynamiCode",
							//校验手机和验证码是否匹配，如果匹配则修改手机号
							"click #next-bt5":"_submitValue",
						},
						/* 重写父类 */
						setup : function() {
							updatePhonePager.superclass.setup.call(this);
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
							if(phone==""){
								 $("#set-table1").html("<div class='recharge-success mt-40'><ul><li class='word'>"+updatePhoneJs.notBindPhoneNoVerify+"/li></ul></div>");
							}
							if(email==""){
								$("#set-table2").html("<div class='recharge-success mt-40'><ul><li class='word'>"+updatePhoneJs.notBindEmailNoVerify+"</li></ul></div>");
							}
							if(phone==""&&email!=""){
								$("#emailVerification a").click();
							}

						},
						/* 加载国家 */
						_loadCountry : function() {
							ajaxController.ajax({
								type : "post",
								processing : false,
								message : updatePhoneJs.saveingMsg,
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
										$("#country2").html(html.join(""));
										$("#country3").html(html.join(""));
									}
								}
							});
						},
						/**
						 * 发送邮件
						 */
						_sendEmail:function(){
							var _this = this;
							var _sendEmailBtn =$("#sendEmailBtn");
							_sendEmailBtn.attr("disabled", true);
							ajaxController.ajax({
								type : "POST",
								data : {
									"email": $("#bindEmail").html(),
									"type":'5'
								},
								dataType: 'json',
								url :_base+"/userCommon/sendEmail",
								processing: true,
								message : updatePhoneJs.dealing,
								success : function(data) {
									var resultCode = data.data;
									if(!resultCode){
										//$("#emailErrMsg").show();
										//$("#emailErrMsg").text(updatePhoneJs.sendEmailFail);
										showMsg(updatePhoneJs.sendEmailFail);
										_sendEmailBtn.removeAttr("disabled"); //移除disabled属性
									}else{
										var step = 59;
										_sendEmailBtn.val(updatePhoneJs.resend60);
							            var _res = setInterval(function(){
							            	_sendEmailBtn.val(step + ' s');
							                step-=1;
							                if(step <= 0){
							                _sendEmailBtn.removeAttr("disabled"); //移除disabled属性
							                $('#sendEmailBtn').val(updatePhoneJs.getOperationCode);
							                clearInterval(_res);//清除setInterval
							                }
							            },1000);
									}
								},
								failure : function(){
									_sendEmailBtn.removeAttr("disabled"); //移除disabled属性
								},
								error : function(){
									showMsg(updatePhoneJs.networkConnectTimeOut);
								}
							});
						},
					  _sendUDynamiCode:function(){
						  if (this._checkPhone()) {
                                var _this = this;
								var _dynamicode_btn = $("#usend_dynamicode_btn");
								_dynamicode_btn.attr("disabled", true);
								ajaxController
									.ajax({
										type : "post",
										processing : false,
										message : updatePhoneJs.saveingMsg,
										url : _base + "/userCommon/sendSmsCode",
										data : {
											'phone' : $("#uPhone").val(),
											'type':"2"
										},
										success : function(data) {
											if(data.data==false){
												//$("#uphoneErrMsg").show();
												//$("#uphoneErrMsg").text(data.statusInfo);
												showMsg(data.statusInfo);
												_dynamicode_btn.removeAttr("disabled"); //移除disabled属性
												_dynamicode_btn.val(updatePhoneJs.getOperationCode);
												return;
											}else{
												if(data.data){
													var step = 59;
													_dynamicode_btn.val(updatePhoneJs.resend60);
										            var _res = setInterval(function(){
										            	_dynamicode_btn.val(step + ' s');
										                step-=1;
										                if(step <= 0){
										                _dynamicode_btn.removeAttr("disabled"); //移除disabled属性
										                _dynamicode_btn.val(updatePhoneJs.getOperationCode);
										                clearInterval(_res);//清除setInterval
										                }
										            },1000);
										            $("#uphoneErrMsg").hide();
												}else{
													_dynamicode_btn.removeAttr("disabled");
												}
										  }
										}
									});
							
						  }
					  },
						/* 身份验证发送动态码 */
					  _sendDynamiCode : function() {
							var _this = this;
							var _dynamicode_btn = $("#send_dynamicode_btn");
							_dynamicode_btn.attr("disabled", true);
							ajaxController
								.ajax({
									type : "post",
									processing : false,
									message : updatePhoneJs.saveingMsg,
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
											_dynamicode_btn.removeAttr("disabled"); //移除disabled属性
											_dynamicode_btn.val(updatePhoneJs.getOperationCode);
											return;
										}else{
											if(data.data){
												var step = 59;
												_dynamicode_btn.val(updatePhoneJs.resend60);
									            var _res = setInterval(function(){
									            	_dynamicode_btn.val(step + ' s');
									                step-=1;
									                if(step <= 0){
									                _dynamicode_btn.removeAttr("disabled"); //移除disabled属性
									                _dynamicode_btn.val(updatePhoneJs.getOperationCode);
									                clearInterval(_res);//清除setInterval
									                }
									            },1000);
									            $("#dynamicode").hide();
											}else{
												_dynamicode_btn.removeAttr("disabled");
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
								 //$("#dynamicode").text(updatePhoneJs.pleaseInputOC);
								 showMsg(updatePhoneJs.pleaseInputOC);
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
				    						showMsg("error:"+ error);
				    					}
				    				});
							 
						},
						/**
						 * 校验动态码
						 */
						_checkUpdatePhoneDynamicode:function(){
							 var phoneDynamicode = $("#uphoneDynamicode").val();
							 if(phoneDynamicode==null||phoneDynamicode==""){
								 //$("#uphoneErrMsg").show();
								 //$("#uphoneErrMsg").text(updatePhoneJs.pleaseInputOC);
								 showMsg(updatePhoneJs.pleaseInputOC);
								 return false;
							 }
							 ajaxController.ajax({
    		        			 type:"post",
				    			 url:_base+"/p/security/updatePhone",
				    			 data:{
				    					phone:$("#uPhone").val(),
				    					type:"2",
				    					code:phoneDynamicode,
				    				},
				    				success: function(json) {
				    					if(!json.data){
				    						showMsg(json.statusInfo);
											return false;
				    		        	}else{
				    		        		$("#next2").hide();
				    		        		$("#next3").show();
				    		        	}
				    		          },
				    				error: function(error) {
				    					showMsg("error:"+ error);
				    					}
				    				});
						},
						/* 手机格式校验 */
						_checkPhone : function() {
							var country = $("#country2").find("option:selected");
							var reg = country.attr("reg");
							var phone = $("#uPhone");
							var phoneVal = phone.val();
							if ($.trim(phoneVal) == "") {
								//$("#uphoneErrMsg").show();
								//$("#uphoneErrMsg").html(updatePhoneJs.phoneNumCanNotEmpty);
								showMsg(updatePhoneJs.phoneNumCanNotEmpty);
//								phone.focus();
								return false;
							}else{
								$("#uphoneErrMsg").hide();
								reg = eval('/' + reg + '/');
								if (!reg.test(phoneVal)) {
									//$("#uphoneErrMsg").show();
									//$("#uphoneErrMsg").html(updatePhoneJs.pleaseInputRightPhoneNum);
									showMsg(updatePhoneJs.pleaseInputRightPhoneNum);
//									phone.focus();
									return false;
								}else{
									$("#uphoneErrMsg").hide();
									ajaxController.ajax({
										type : "post",
										processing : false,
										message : updatePhoneJs.saveingMsg,
										url : _base + "/reg/checkPhoneOrEmail",
										data : {
											'checkType' : "phone",
											"checkVal" : $("#uPhone").val()
										},
										success : function(json) {
											if (!json.data) {
												//$("#uphoneErrMsg").show();
												//$("#uphoneErrMsg").html(json.statusInfo);
												showMsg(json.statusInfo);
											}else{
												$("#uphoneErrMsg").hide();
											}
										}
									});
								}
							}
							return true;
						},
						/**
						 *  通过邮箱地址修改手机号 
						 */
						_checkEmailUpdatePhone : function() {
							var country = $("#country3").find("option:selected");
							var reg = country.attr("reg");
							var phone = $("#emailUpdatePhone");
							var phoneVal = phone.val();
							if ($.trim(phoneVal) == "") {
								//$("#emailUpdatePhoneErrMsg").show();
								//$("#emailUpdatePhoneErrMsg").html(updatePhoneJs.phoneNumCanNotEmpty);
								//phone.focus();
								showMsg(updatePhoneJs.phoneNumCanNotEmpty);
								return false;
							}else{
								$("#emailUpdatePhoneErrMsg").hide();
								reg = eval('/' + reg + '/');
								if (!reg.test(phoneVal)) {
//									$("#emailUpdatePhoneErrMsg").show();
//									$("#emailUpdatePhoneErrMsg").html(updatePhoneJs.pleaseInputRightPhoneNum);
//									phone.focus();
									showMsg(updatePhoneJs.pleaseInputRightPhoneNum);
									return false;
								}else{
									$("#emailUpdatePhoneErrMsg").hide();
									ajaxController.ajax({
										type : "post",
										processing : false,
										message : updatePhoneJs.saveingMsg,
										url : _base + "/reg/checkPhoneOrEmail",
										data : {
											'checkType' : "phone",
											"checkVal" : phoneVal
										},
										success : function(json) {
											if (!json.data) {
//												$("#emailUpdatePhoneErrMsg").show();
//												$("#emailUpdatePhoneErrMsg").html(json.statusInfo);
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
						  _sendEmailUPhoneDynamiCode : function() {
								var _this = this;
								var _emailUpDynamicodeBtn = $("#emailUpDynamicodeBtn");
								_emailUpDynamicodeBtn.attr("disabled", true);
								ajaxController
									.ajax({
										type : "post",
										processing : false,
										message : updatePhoneJs.saveingMsg,
										url : _base + "/userCommon/sendSmsCode",
										data : {
											'phone' : $("#emailUpdatePhone").val(),
											'type':"2"
										},
										success : function(data) {
											if(data.data==false){
												//$("#emailUpdatePhoneErrMsg").show();
												//$("#emailUpdatePhoneErrMsg").text(data.statusInfo);
												showMsg(data.statusInfo);
												_emailUpDynamicodeBtn.removeAttr("disabled"); //移除disabled属性
												_emailUpDynamicodeBtn.val(updatePhoneJs.getOperationCode);
												return;
											}else{
												if(data.data){
													var step = 59;
													_emailUpDynamicodeBtn.val(updatePhoneJs.resend60);
										            var _res = setInterval(function(){
										                _emailUpDynamicodeBtn.val(step + ' s');
										                step-=1;
										                if(step <= 0){
										                _emailUpDynamicodeBtn.removeAttr("disabled"); //移除disabled属性
										                _emailUpDynamicodeBtn.val(updatePhoneJs.inputOperationCode);
										                clearInterval(_res);//清除setInterval
										                }
										            },1000);
										            $("#emailUpdatePhoneErrMsg").hide();
												}else{
													_emailUpDynamicodeBtn.removeAttr("disabled");
												}
										  }
										}
									});
							},
						/**
						 * 邮箱修改手机号，获取动态码
						 */
						_sendEmailPhoneUDynamiCode:function(){
							if (this._checkEmailUpdatePhone()) {
								  this._sendEmailUPhoneDynamiCode();
							  }
						},
						/**
						 * 校验邮件验证码
						 */
						_checkEmailImageCode:function(){
							var emailIdentifyCode = $("#emailIdentifyCode").val();
							if(emailIdentifyCode==""||emailIdentifyCode==null){
								//$("#emailErrMsg").show();
								//$("#emailErrMsg").text(updatePhoneJs.pleaseInputOC);
								showMsg(updatePhoneJs.pleaseInputOC);
								return;
							}
							ajaxController.ajax({
								type:"post",
			    				url:_base+"/userCommon/checkEmailCode",
			    				data:{
			    					'email':$("#bindEmail").html(),
			    					'code':emailIdentifyCode,
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
			    					showMsg("error:"+ error);
			    					}
			    				});
							
						},
						_submitValue:function(){
							/**
							 * 校验动态码
							 */
							 var phoneDynamicode = $("#emailUValidateCode").val();
							 if(phoneDynamicode==null||phoneDynamicode==""){
								 //$("#emailUpdatePhoneErrMsg").show();
								 //$("#emailUpdatePhoneErrMsg").text(updatePhoneJs.pleaseInputOC);
								 showMsg(updatePhoneJs.pleaseInputOC);
								 return false;
							 }
							 ajaxController.ajax({
    		        			 type:"post",
				    			 url:_base+"/p/security/updatePhone",
				    			 data:{
				    					'phone':$("#emailUpdatePhone").val(),
				    					'type':"2",
				    					'code':phoneDynamicode,
				    				},
				    				success: function(json) {
				    					if(!json.data){
				    						showMsg(json.statusInfo)
											return false;
				    		        	}else{
				    		        		$("#next5").hide();
				    		        		$("#next6").show();
				    		        	}
				    		          },
				    				error: function(error) {
				    					showMsg("error:"+ error);
				    					}
				    				});
						}
					});
			module.exports = updatePhonePager;
		});
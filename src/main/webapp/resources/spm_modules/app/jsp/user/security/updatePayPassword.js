define("app/jsp/user/security/updatePayPassword", function(require, exports, module) {
	var $ = require('jquery'), Widget = require('arale-widget/1.2.0/widget'),
	Dialog = require("optDialog/src/dialog"),
	AjaxController = require('opt-ajax/1.0.0/index');
	// 实例化AJAX控制处理对象
	var ajaxController = new AjaxController();
	var showMsg = function(msg){
    	var d = Dialog({
			content:msg,
			icon:'fail',
			okValue: updatePayPasswordMsg.showOkValueMsg,
			title: updatePayPasswordMsg.showTitleMsg,
			ok:function(){
				d.close();
			}
		});
		d.show();
    };
	// 定义页面组件类
	var updatePayPasswordPager = Widget.extend({
		/* 事件代理 */
		events : {
			"click #phoneVerification":"_phoneVerification",
			"click #emailVerification":"_emailVerification",
			"click #next-bt1":"_phoneNext",
			"click #next-bt2":"_phoneNext2",
			"click #next-bt4":"_emailNext1",
			"click #next-bt5":"_emailNext2",
			"click #sendEmailBtn" : "_sendEmail",
			"click #send_dynamicode_btn":"_sendDynamiCode",
		},
		/* 重写父类 */
		setup : function() {
			updatePayPasswordPager.superclass.setup.call(this);
			this._initUpdateType();
            },
        /*判断邮箱和手机方式*/
        _initUpdateType:function(){
        	if(phone==""){
        		$("#set-table1").html("<div class='recharge-success mt-40'><ul><li class='word'>"+updatePayPasswordMsg.notBindingPhone+"</li></ul></div>");
            }
        	if(email==""){
        		$("#set-table2").html("<div class='recharge-success mt-40'><ul><li class='word'>"+updatePayPasswordMsg.notBindingEmail+"</li></ul></div>");
             }
        	if(phone==""&&email!=""){
        		$("#emailVerification").click();
        	}
        },
        _phoneVerification:function(){
        	$("#emailVerification").removeClass("current");
        	$("#phoneVerification").addClass("current");
        	$("#set-table1").show();
        	$("#set-table2").hide();
        },
        _emailVerification:function(){
        	$("#phoneVerification").removeClass("current");
        	$("#emailVerification").addClass("current");
        	$("#set-table2").show();
        	$("#set-table1").hide();
        },
        _phoneNext:function(){
			 var phoneDynamicode = $("#phoneDynamicode").val();
			 if(phoneDynamicode==""){
				 //$("#dynamicode").show();
				 //$("#dynamicode").text("请输入验证码");
				 showMsg(updatePayPasswordMsg.dynamicCodeEmpty);
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
    		        		//$("#dynamicode").show();
							//$("#dynamicode").text(data.statusInfo);
    		        		showMsg(data.statusInfo);
							return false;
    		        	}else{
    		        		 $("#next1").hide();
 						     $("#next2").show();
 						     $("#code").val($("#phoneDynamicode").val());
    		        	}
    		          },
    				error: function(error) {
    						//alert("error:"+ error);
    					}
    				});
			 
		},
        _phoneNext2:function(){
			// 密码校验
			var password = $("#password");
			var passwordVal = password.val();
			if ($.trim(passwordVal) == "") {
				//$("#passwordMsg").html("密码不能为空");
				//$("#passwordMsg").show();
				//password.focus();
				showMsg(updatePayPasswordMsg.passwordEmpty);
				return false;
			}
			if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/
					.test(passwordVal)) {
				//$("#passwordMsg").html("密码格式错误");
				//$("#passwordMsg").show();
				//password.focus();
				showMsg(updatePayPasswordMsg.passwordError);
				return false;
			}
			// 确认密码
			var confirmPassword = $("#confirmPassword");
			var confirmPasswordVal = confirmPassword.val();
			if ($.trim(confirmPasswordVal) == "") {
				//$("#passwordMsg").html("确认密码不能为空");
				//$("#passwordMsg").show();
				showMsg(updatePayPasswordMsg.passwordEmpty);
				return false;
			}
			if (confirmPasswordVal != passwordVal) {
				//$("#passwordMsg").html("密码不一致");
				//$("#passwordMsg").show();
				showMsg(updatePayPasswordMsg.confirmPasswordError);
				return false;
			}
			ajaxController.ajax({
				type:"post",
				url:_base+"/p/security/sendPayPassword",
				data:{
					'payPwd':passwordVal
				},
		        success: function(json) {
		        	if(!json.data){
		        		showMsg(json.statusInfo);
		        		return false;
		        	}else if(json.data){
		        		$("#next2").hide();
						$("#next3").show();
		        	}
		          },
				error: function(error) {
						//alert("error:"+ error);
					}
				});
		},
        _emailNext1:function(){
        	var emailIdentifyCode = $("#emailIdentifyCode").val();
			if($.trim(emailIdentifyCode)==""){
				showMsg(updatePayPasswordMsg.dynamicCodeEmpty);
				return;
			}
			var _this = this;
			var codeVal = $("#emailIdentifyCode").val();
			ajaxController.ajax({
				type:"post",
				url:_base+"/userCommon/checkEmailCode",
				data:{
					email:$("#passwordEmail").html(),
					code:codeVal,
					isRemove:'true'
				},
		        success: function(json) {
		        	if(!json.data){
		        	 showMsg(json.statusInfo);
		        	}else{
		        		$("#code").val(codeVal);
		        		$("#next4").hide();
						$("#next5").show();
		        	}
		          }
				});
        },
        _emailNext2:function(){
			// 密码校验
			var password = $("#emailPassword");
			var passwordVal = password.val();
			if ($.trim(passwordVal) == "") {
				//$("#emailPasswordErrMsg").show();
				//$("#emailPasswordErrMsg").text("密码不能为空");
				//password.focus();
				showMsg(updatePayPasswordMsg.passwordEmpty);
				return false;
			}
			if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/
					.test(passwordVal)) {
				//$("#emailPasswordErrMsg").text("密码格式错误");
				//$("#emailPasswordErrMsg").show();
				//password.focus();
				showMsg(updatePayPasswordMsg.passwordError);
				return false;
			}
			// 确认密码
			var confirmPassword = $("#emailConfirmPassword");
			var confirmPasswordVal = confirmPassword.val();
			if ($.trim(confirmPasswordVal) == "") {
				//$("#emailPasswordErrMsg").text("确认密码为空");
				//$("#emailPasswordErrMsg").show();
				showMsg(updatePayPasswordMsg.passwordEmpty);
				return false;
			}
			if (confirmPasswordVal != passwordVal) {
				//$("#emailPasswordErrMsg").text("密码不一致");
				//$("#emailPasswordErrMsg").show();
				showMsg(updatePayPasswordMsg.confirmPasswordError);
				return false;
			}
			ajaxController.ajax({
				type:"post",
				url:_base+"/p/security/sendPayPassword",
				data:{
					'payPwd':passwordVal
				},
		        success: function(json) {
		        	if(!json.data){
		        		showMsg(json.statusInfo);
		        		return false;
		        	}else if(json.data){
		        		$("#next5").hide();
		        		$("#next6").show();
		        	}
		          },
				error: function(error) {
						//alert("error:"+ error);
					}
				});
		},
        _showMsg:function(msg){
        	alert(msg);
        },
        _sendEmail:function(){
          var _this = this;
          var sendEmailBtn= $("#sendEmailBtn");
          sendEmailBtn.attr("disabled", true);
			ajaxController.ajax({
				type : "POST",
				data : {
					"email": $("#passwordEmail").html(),
					"type":'5'
				},
				dataType: 'json',
				url :_base+"/userCommon/sendEmail",
				processing: true,
				message : "...",
				success : function(data) {
					var resultCode = data.data;
					if(!resultCode){
						sendEmailBtn.removeAttr("disabled"); //移除disabled属性
						//$("#emailErrMsg").show();
						//$("#emailErrMsg").text("发送邮件失败");
						showMsg(updatePayPasswordMsg.sendMailError);
					}else{
						var step = 59;
						sendEmailBtn.val('60 s');
			            var _res = setInterval(function(){
			            	sendEmailBtn.val(step+" s");
			                step-=1;
			                if(step <= 0){
			                sendEmailBtn.removeAttr("disabled"); //移除disabled属性
			                sendEmailBtn.val(updatePayPasswordMsg.sendEmailCode);
			                clearInterval(_res);//清除setInterval
			                }
			            },1000);						
					}
				},
				failure : function(){
					sendEmailBtn.removeAttr("disabled"); //移除disabled属性
				},
				error : function(){
					sendEmailBtn.removeAttr("disabled"); //移除disabled属性
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
					message : "保存中，请等待...",
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
							btn.removeAttr("disabled"); //移除disabled属性
							btn.val(updatePayPasswordMsg.getDynamiCode);
							return;
						}else{
							if(data.data){
								var step = 59;
								btn.val('60 s');
					            var _res = setInterval(function(){
					                btn.val(step+" s");
					                step-=1;
					                if(step <= 0){
					                	btn.removeAttr("disabled"); //移除disabled属性
					                	btn.val(updatePayPasswordMsg.getDynamiCode);
					                clearInterval(_res);//清除setInterval
					                }
					            },1000);
					            //$("#dynamicode").hide();
							}else{
								btn.removeAttr("disabled");
							}
					  }
					}
				});
			}
	 });
	module.exports = updatePayPasswordPager;
});
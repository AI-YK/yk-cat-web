define("app/jsp/user/security/securitycenter", function(require, exports, module) {
	var $ = require('jquery'), Widget = require('arale-widget/1.2.0/widget'),
	Dialog = require("optDialog/src/dialog"),
	AjaxController = require('opt-ajax/1.0.0/index');
	var showMsg = function(msg){
    	var d = Dialog({
			content:msg,
			icon:'fail',
			okValue: secCenterMsg.showOkValueMsg,
			title: secCenterMsg.showTitleMsg,
			ok:function(){
				d.close();
			}
		});
		d.show();
    };
	// 实例化AJAX控制处理对象
	var ajaxController = new AjaxController();
	// 定义页面组件类
	var secXXXPager = Widget.extend({
		/* 事件代理 */
		events : {
			"click #modify-close" : "_hidePassWordWindow",
			"click #pay_modify-close" : "_hidePayPassWordWindow",
			"click #modify-determine":"_updatePassword",
			"click #pay_modify-determine":"_updatePayPassword"
		},
		_hidePassWordWindow:function(){
			$('#eject-mask').fadeOut(100);
			$('#modify-password').slideUp(100);
		},
		_hidePayPassWordWindow:function(){
			$('#pay_eject-mask').fadeOut(100);
			$('#pay_modify-password').slideUp(100);
		},
		/* 重写父类 */
		setup : function() {
			secXXXPager.superclass.setup.call(this);
			this._setSecSettingList();
            },
            _setSecSettingList : function () {
            	if(isexistemail == "true") {
            		$("#login_email_icon").attr("class","icon-ok-sign");
            		$("#login_email_icon_color").attr("class","green");
            		var userEmailWithStart = this._getEmailWithStart(userEmail);
            		$("#login_email_text").html(secCenterMsg.email_set + userEmailWithStart );
            	}
            	if(isexistphone == "true") {
            		$("#login_phone_icon").attr("class","icon-ok-sign");
            		$("#login_phone_icon_color").attr("class","green");
            		var userMobileWithStart = this._getMobileWithStart(userMobile);
            		$("#login_phone_text").html(secCenterMsg.login_phone_set + " " + userMobileWithStart);
            	}
            	if(isexistpaypassword == "true") {
            		$("#pay_password_icon").attr("class","icon-ok-sign");
            		$("#pay_password_icon_color").attr("class","green");
            		$("#pay_password_text").html(secCenterMsg.paypassword_set);
            	}
            },
            _getEmailWithStart : function (orginalEmail) {
            	var emailPart = orginalEmail.split("@");
            	var partone = emailPart[0].substring(0,1);
            	var parttwo = "******";
            	var StartEmail = partone + parttwo + "@" + emailPart[1];
            	return StartEmail;
            },
            _getMobileWithStart : function (orginalMobile) {
            	var part1 = orginalMobile.substring(0,3);
            	var part2 = "******";
            	var part3 = orginalMobile.substring(9,11);
            	return part1 + part2 + part3;
            },
             /*修改密码*/
            _updatePassword:function(){

    			// 密码校验
    			var password = $("#currentPassword");
    			var passwordVal = password.val();
    			if ($.trim(passwordVal) == "") {
    				showMsg(secCenterMsg.currentPasswordEmpty);
    				return false;
    			}
    			
    			// 新密码
    			var newPassword = $("#newPassword");
    			var newPasswordVal = newPassword.val();
    			if ($.trim(newPasswordVal) == "") {
    				showMsg(secCenterMsg.newPasswordEmpty);
    				return false;
    			}
    			if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/
    					.test(newPasswordVal)) {
    				showMsg(secCenterMsg.newPasswordError);
    				return false;
    			}
    			// 确认新密码
    			var newPassword2 = $("#newPassword2");
    			var newPassword2Val = newPassword2.val();
    			if ($.trim(newPassword2Val) == "") {
    				showMsg(secCenterMsg.newPasswordEmpty);
    				return false;
    			}
    			if (newPassword2Val != newPasswordVal) {
    				showMsg(secCenterMsg.repeatPasswordError);
    				return false;
    			}
    			ajaxController.ajax({
    				type:"post",
    				url:_base+"/password/updatePassword",
    				data:{
    					'newpw':passwordVal,
    					'oldPwd':newPasswordVal
    				},
    		        success: function(json) {
    		        	if(!json.data){
    		        		showMsg(json.statusInfo);
    		        		return false;
    		        	}else{
    		        		$("#modify-determine").click();
    		        	}
    		          }
    				});
    		
            },
             /*修改支付密码*/
            _updatePayPassword:function(){

    			// 密码校验
    			var password = $("#pay_currentPassword");
    			var passwordVal = password.val();
    			if ($.trim(passwordVal) == "") {
    				showMsg(secCenterMsg.currentPasswordEmpty);
    				return false;
    			}
    			
    			// 新密码
    			var newPassword = $("#pay_currentPassword");
    			var newPasswordVal = newPassword.val();
    			if ($.trim(newPasswordVal) == "") {
    				showMsg(secCenterMsg.newPasswordEmpty);
    				return false;
    			}
    			if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,16}$/
    					.test(newPasswordVal)) {
    				showMsg(secCenterMsg.newPasswordError);
    				return false;
    			}
    			// 确认新密码
    			var newPassword2 = $("#pay_newPassword2");
    			var newPassword2Val = newPassword2.val();
    			if ($.trim(newPassword2Val) == "") {
    				showMsg(secCenterMsg.newPasswordEmpty);
    				return false;
    			}
    			if (newPassword2Val != newPasswordVal) {
    				showMsg(secCenterMsg.repeatPasswordError);
    				return false;
    			}
    			ajaxController.ajax({
    				type:"post",
    				url:_base+"/p/security/sendPayPassword",
    				data:{
    					'payPwd':newPasswordVal,
    					'oldPwd':passwordVal
    				},
    		        success: function(json) {
    		        	if(!json.data){
    		        		showMsg(json.statusInfo);
    		        		return false;
    		        	}else{
    		        		$("#modify-determine").click();
    		        	}
    		          }
    				});
    		
            }
	 });
	module.exports = secXXXPager;
});
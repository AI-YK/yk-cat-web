define('app/jsp/order/payOrder', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
	    Widget = require('arale-widget/1.2.0/widget');

	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');
    var payOrderPager = Widget.extend({
    	
    	//事件代理
    	events: {
			"click #recharge-popo":"_payOrder",
			"click #payment-method ul":"_changePayType",
			"click #depositBtn":"_toDeposit",
			"click #completed":"_submitYEpay",//余额支付确认
			"click #close-completed":"_closeCompleted"//余额支付取消
           	},
            
    	//重写父类
    	setup: function () {
			payOrderPager.superclass.setup.call(this);
			this._changePayType();
			//初始化国际化
			$.i18n.properties({//加载资浏览器语言对应的资源文件
				name: ["payOrder"], //资源文件名称，可以是数组
				path: _i18n_res, //资源文件路径
				mode: 'both',
				language: currentLan,
				async: true
				//callback: function() {//加载成功后设置显示内容
				//	alert($.i18n.prop('com.ai.paas.ipaas.common.auth_null'));
				//	//用户名
				//	alert($.i18n.prop('pay.pass.null'));
				//}
			});
    	},
		//支付订单
		_payOrder:function(){
			//获取支付方式
			var payType = $("#payment-method .current").eq(0).attr("payType");
			//当前地址
			var merchantUrl = "";
			$("#payType").val(payType);
			//若为余额支付,则进行余额支付流程
			if("YE" != payType){
				$("#merchantUrl").val(window.location.href);
				//提交
				$("#toPayForm").submit();
			}//余额支付,需要密码
			else if("YE" === payType && needPayPass==="1"){
				$("#payPass").val("");
				$('#eject-mask').fadeIn(100);
				$('#rechargepop').slideDown(100);
			}//余额支付不需要密码
			else if("YE" === payType){
				$("#yePayForm").submit();
			}

		},
		//变更支付方式
		_changePayType:function(){
			var _this = this;
			$("#payment-method ul").each(function () {
				$(this).click(function () {
					$(this).children('label').remove();
					$(this).addClass("current");
					$(this).append('<label><i class="icon iconfont">&#xe617;</i></label>');

					$($(this).siblings()).removeClass("current");
					$($(this).siblings()).children('label').remove();
				});
			});
		},
		//关闭支付密码弹出框
		_closeCompleted:function(){
			$('#eject-mask').fadeOut(200);
			$('#rechargepop').slideUp(200);
		},
		//提交余额支付
		_submitYEpay:function(){
			var payPass=$("#payPass").val().trim();
			//密码不能为空
			if(payPass==""||payPass==null){
				alert($.i18n.prop('pay.pass.null'));
				return;
			}
			$("#balancePass").val(payPass);
			//提交
			$("#yePayForm").submit();
		},
		//调转到充值页面
		_toDeposit:function(){
			window.location.href=_base+"/p/balance/depositFund";
		}
		
    });
    
    module.exports = payOrderPager;
});
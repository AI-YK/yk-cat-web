define('app/jsp/balance/depositFund', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
	    Widget = require('arale-widget/1.2.0/widget');

	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');
    var depositFundPager = Widget.extend({
    	
    	//事件代理
    	events: {
			"click #recharge-popo":"_payOrder",
           	},
            
    	//重写父类
    	setup: function () {
			depositFundPager.superclass.setup.call(this);
    	},
		//支付订单
		_payOrder:function(){
			//当前地址
			var merchantUrl = "";
			//若为余额支付,则进行余额支付流程
			if("YE" != payType){
				$("#merchantUrl").val(window.location.href);
				//提交
				$("#toPayForm").submit();
			}

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
			window.location.href=_base+"/balance/depositFund";
		}
		
    });
    
    module.exports = depositFundPager;
});
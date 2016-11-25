define('app/jsp/customerOrder/orderInfo', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
	    Widget = require('arale-widget/1.2.0/widget'),
	    AjaxController = require('opt-ajax/1.0.0/index');
    
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    
    var orderInfoPage = Widget.extend({
    	
    	//事件代理
    	events: {
			"click #payOrder":"_orderPay",
    	},
    	
    	//跳转支付
    	_orderPay:function() {
    		window.location.href="${_base}/p/customer/order/payOrder/"+$("#orderId").val()+"?unit="+$("#unit").val();
    	},
    	
//    	下载文件
    	_downLoad:function(fileId, fileName) {
    		window.open(_base + "/p/customer/order/download?fileId="+fileId+"&fileName="+fileName);
    	}
        
    });
    module.exports = orderInfoPage;
});
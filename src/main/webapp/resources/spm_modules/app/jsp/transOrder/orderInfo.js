define('app/jsp/transOrder/orderInfo', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
	    Widget = require('arale-widget/1.2.0/widget'),
		Dialog = require("optDialog/src/dialog"),
	    AjaxController = require('opt-ajax/1.0.0/index');
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    
    var orderInfoPage = Widget.extend({
    	
    	//事件代理
    	events: {
			"click #textSave":"_textSave",
			"click #submit": "_orderSubmit",
			"click #trans": "_trans",
			"click #editText": "_editText",
			"change input[type='file']": "_upload",
			//领取订单
			"click #received":"_getOrder"
    	},
		//重写父类
		setup: function () {
			orderInfoPage.superclass.setup.call(this);
			//初始化国际化
			$.i18n.properties({//加载资浏览器语言对应的资源文件
				name: ["orderInfo"], //资源文件名称，可以是数组
				path: _i18n_res, //资源文件路径
				mode: 'both',
				language: currentLan,
				async: true
			});
		},
    	
//    	下载文件
    	_downLoad:function(fileId, fileName) {
    		window.open(_base + "/p/customer/order/download?fileId="+fileId+"&fileName="+fileName);
    	},
    	
    	//上传译文
    	_upload:function() {
			 var formData = new FormData($( "#uploadForm" )[0]); 
			 $.ajax({  
		         url: _base +"/p/trans/order/upload" ,  
		         type: 'POST',  
		         data: formData,  
		         async: false,  
		         cache: false,  
		         contentType: false,  
		         processData: false,  
		         success: function (data) {  
		        	 if ("1" === data.statusCode) {
							//保存成功
							//刷新页面
				    		window.location.reload();
					 }

					 if ("FAIL" == data.statusInfo) {
						 alert($.i18n.prop('order.submit.fail'));
					 } else if ("FAIL_0" == data.statusInfo) {
						 alert($.i18n.prop('order.submit.reason.transNull'));
					 } else { //FAIL_1
						 alert($.i18n.prop('order.submit.reason.transFileNull'));
					 }
		         },  
		         error: function (data) {  
					 alert($.i18n.prop('order.submit.fail'));
		         }
		    });  
    	},
    	
    	//删除译文
    	_delFile:function(fileId) {
    		ajaxController.ajax({
				type: "post",
				url: _base + "/p/trans/order/deleteFile",
				data: {
					orderId: $("#orderId").val(),
					fileId: fileId
				},
				success: function (data) {
					if ("1" === data.statusCode) {
						//删除成功
						//刷新页面
			    		window.location.reload();
					}
				}
			});
    	},
    	
    	//保存译文
    	_textSave:function() {
    		ajaxController.ajax({
				type: "post",
				url: _base + "/p/trans/order/updateInfo",
				data: {
					orderId: $("#orderId").val(),
					translateInfo: $("#transTextArea").val()
				},
				success: function (data) {
					if ("1" === data.statusCode) {
						//保存成功
						//刷新页面
			    		window.location.reload();
					}
				}
			});
    	},
    	
    	//修改按钮 触发的效果
    	_editText:function() {
    		$("#editText").parent().next().hide();
    		$("#editText").parent().parent().next("ul").show();
    		$("#editText").parent().next().next().show();
    	},
    	
    	//从已领取到翻译状态
    	_trans:function() {
    		ajaxController.ajax({
				type: "post",
				url: _base + "/p/trans/order/updateState",
				data: {
					orderId: $("#orderId").val(),
					state: "23",
					displayFlag: "23",
				},
				success: function (data) {
					if ("1" === data.statusCode) {
						//成功
						//刷新页面
			    		window.location.reload();
					}
				}
			});
    	},
    	
    	  //提交订单
        _orderSubmit:function() {
        	ajaxController.ajax({
				url: _base + "/p/trans/order/save",
				data: {
					orderId: $("#orderId").val(),
				},
				success: function (data) {
					if ("1" === data.statusCode) {
						//提交成功
						//刷新页面
			    		window.location.reload();
					}
				}
			});
        },
        
		//领取订单
		_getOrder:function(){
			new Dialog({
				content:$.i18n.prop('order.info.claimed.confirm'),
				icon:'prompt',
				okValue: $.i18n.prop('order.info.dialog.ok'),
				cancelValue:$.i18n.prop('order.info.dialog.cancel'),
				title: $.i18n.prop('order.info.claimed.order'),
				ok:function(){
					ajaxController.ajax({
						type: "post",
						url: _base+"/p/taskcenter/claim",
						data: {'orderId': orderId,"lspId":lspId},
						success: function(data){
							//领取成功,刷新页面
							if("1"===data.statusCode){
								window.location.reload();
							}
						}
					});
				},
				cancel:function(){
					this.close();
				}
			}).show();
		}
        
    });
    module.exports = orderInfoPage;
});
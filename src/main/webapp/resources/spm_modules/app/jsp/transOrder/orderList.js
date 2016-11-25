define('app/jsp/transOrder/orderList', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
	    Widget = require('arale-widget/1.2.0/widget'),
	    AjaxController = require('opt-ajax/1.0.0/index');
    require("jsviews/jsrender.min");
    require("jsviews/jsviews.min");
    require("app/util/jsviews-ext");
	require("opt-paging/aiopt.pagination");
    
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    
    var orderListPage = Widget.extend({
    	//属性，使用时由类的构造函数传入
    	attrs: {
    		clickId:""
    	},
    	
    	Statics: {
    		DEFAULT_PAGE_SIZE: 10
    	},
    	
    	//事件代理
    	events: {
			"click #submitQuery":"_orderList",
			"change #state":"_change",
			"change #fieldCode":"_orderList",
			"change #useCode":"_orderList",
			"change #stateListStr":"_orderList",	
    	},
    	
      	//重写父类
    	setup: function () {
    		orderListPage.superclass.setup.call(this);
			this._initPage();
    	},

		//初始化页面查询
		_initPage:function () {
			var state = $("#stateP").val();
			if (state == '') {
				this._orderList();
			} else {
				this._orderListByType(state);
			}
		},
    	
    	//状态改变并查询
    	_change:function() {
	    	$(".oder-table a").removeClass('current');
			$(".oder-table a").eq(0).addClass('current');
			this._getOrderList();
    	},
    	
        //表单查询订单列表
        _orderList:function() {
        	this._getOrderList();
        },
        
        //根据状态查询订单
        _orderListByType:function(state) {
        	var reqdata = {'state': state, 
        			'interperId': $("#interperId").val(),
        			'lspId': $("#lspId").val()
        		};
        	$("#state").val(state);
        	this._getOrderList(reqdata);
        },
        
        //查询订单 reqdata不传时，表单数据序列化
        _getOrderList:function(reqdata) {
        	var _this = this;
        	var data;
        	if (reqdata == undefined)
        		data = $('#orderQuery').serializeArray();
        	else
        		data = reqdata;
        	
          	$("#pagination-ul").runnerPagination({
	 			url: _base+"/p/customer/order/orderList",
	 			method: "POST",
	 			dataType: "json",
	 			renderId:"searchOrderData",
	 			messageId:"showMessageDiv",
//	 			 $('#orderQuery').serializeArray()
	 			data:  data,
	           	pageSize: orderListPage.DEFAULT_PAGE_SIZE,
	           	visiblePages:5,
	            render: function (data) {
	            	if(data != null && data != 'undefined' && data.length>0){
	            		//把返回结果转换
		            	for(var i=0;i<data.length;i++){
		            		//订单完成剩余时间 转为 剩余x天x小时x分
		            		var remainingTime = _this.ftimeDHS(data[i].endTime - new Date().getTime());
		            		data[i].finishRemTime = remainingTime;
		            		data[i].finishTakeDays = remainingTime.days;
		            		data[i].finishTakeHours = remainingTime.hours;
		            		data[i].finishTakeMinutes =  remainingTime.minutes;
		            	    
		            		data[i].currentLan = currentLan; //当前语言
		            	}
	            		var template = $.templates("#searchOrderTemple");
	            	    var htmlOutput = template.render(data);
	            	    $("#searchOrderData").html(htmlOutput);
	            	}
	            }
    		});
        },
        
        //提交订单
        _orderSubmit:function(orderId) {
        	ajaxController.ajax({
				type: "post",
				url: _base + "/p/trans/order/save",
				data: {
					orderId: orderId,
				},
				success: function (data) {
					if ("1" === data.statusCode) {
						//提交成功
					}
				}
			});
        },
        
        //把毫秒数转为 x天x小时x分钟x秒
        ftimeDHS:function(ts) {
        	var res = {};
        	res.days = parseInt( ts / (1000 * 60 * 60 * 24) );
        	res.hours = parseInt( (ts % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
        	res.minutes = parseInt( (ts % (1000 * 60 * 60)) / (1000 * 60) );
        	res.seconds = parseInt( (ts % (1000 * 60)) / 1000 );
        	
        	return res;
        }
    });
    module.exports = orderListPage;
});
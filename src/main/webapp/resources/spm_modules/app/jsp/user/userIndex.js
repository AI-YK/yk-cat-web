define("app/jsp/user/userIndex",function(require, exports, module) {
	var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Dialog = require("optDialog/src/dialog"), 
	AjaxController = require('opt-ajax/1.0.0/index');
	require("jsviews/jsrender.min");
	require("jsviews/jsviews.min");
	require("app/util/jsviews-ext");
	// 实例化AJAX控制处理对象
	var ajaxController = new AjaxController();
	// 定义页面组件类
	var userIndexPager = Widget
			.extend({
				/* 事件代理 */
				events : {
					 
				},
				/* 初始化 */
				_init:function(){
					this._orderStatusCount();
					this._queryOrder();
					//this._queryBalanceInfo();
				},
		        //取消订单
		        _cancelOrder:function(orderId) {
		        	ajaxController.ajax({
						type: "post",
						url: _base+"/p/customer/order/cancelOrder",
						data: {'orderId': orderId},
						success: function(data){
							//取消成功
							if("1"===data.statusCode){
								//成功
								//刷新页面
								window.location.reload();
							}
						}
					});
		        },
		      //确认订单
		        _confirm:function(orderId) {
		        	ajaxController.ajax({
						type: "post",
						url: _base + "/p/trans/order/updateState",
						data: {
							orderId: orderId,
							state: "51",
							displayFlag: "52",
						},
						success: function (data) {
							if ("1" === data.statusCode) {
								//成功
								//刷新页面
					    		window.location.reload();
							}
						}
					});
		        } ,
				/*查询余额*/
				_queryBalanceInfo:function(){
					ajaxController.ajax({
						 type:"post",
		    				url:_base+"/p/security/queryBalanceInfo",
		    				data:{},
		    		        success: function(data) {
		    		        	
		    		        }
		    		});
				},
				/* 获取订单数量 */
				_orderStatusCount:function(){
					ajaxController.ajax({
						 type:"post",
		    				url:_base+"/p/security/orderStatusCount",
		    				data:{'statusList':'11,23,50,52'},
		    		        success: function(data) {
		    		        	//data = {"52":1,"23":2,"11":3,"50":4};
		    		        	$("#unPaidCount").html(data['11']);
		    		        	$("#translateCount").html(data['23']);
		    		        	$("#unConfirmCount").html(data['50']);
		    		        	$("#unEvaluateCount").html(data['52']);
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
		        },
				/* 获取订单 */
				_queryOrder:function(){
					var _this = this;
					ajaxController.ajax({
						 type:"post",
		    				url:_base+"/p/customer/order/orderList",
		    				data:{
		    					'pageSize':10,
		    					'pageNo':1,
		    					'userId':userId
		    					},
		    		        success: function(json) {
		    		        	var data = json.data;
		    		        	if(data){
		    		        		data =data.result;
		    		        	}
		    		        	if(data != null && data != undefined && data.length>0){
		    	            		//把返回结果转换
		    		            	for(var i=0;i<data.length;i++){
		    		            		//确认截止时间转为 剩余x天x小时x分
		    		            		var remainingTime = _this.ftimeDHS(data[i].remainingTime);
		    		            		data[i].confirmTakeDays = remainingTime.days;
		    		            		data[i].confirmTakeHours = remainingTime.hours;
		    		            		data[i].confirmTakeMinutes =  remainingTime.minutes;
		    		            		
		    		            		data[i].currentLan = currentLan; //当前语言
		    		            	}
		    	            		var template = $.templates("#orderTemple1");
		    	            	    var htmlOutput = template.render(data);
		    	            	    $("#order_list").html(htmlOutput);
		    	            	    if(false){
		    	            	    	$("table th[order_mode='hide']").remove();
		    	            	    	$("#order_list table td[order_mode='hide']").remove();
		    	            	    	$("#order_list table th[order_mode_colspan='hide']").attr("colspan","5");
		    	            	    }
		    	            	    $("#no_order_container").hide();
		    	            		$("#have_order_container").show();
		    	            	}else{
		    	            		$("#no_order_container").show();
		    	            		$("#have_order_container").hide();
		    	            	}
		    		        }
		    		});
				},
				/* 重写父类 */
				setup : function() {
					userIndexPager.superclass.setup.call(this);
					this._init();
				}
			});
	module.exports = userIndexPager;
});
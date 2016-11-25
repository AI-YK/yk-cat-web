define("app/jsp/user/interpreter/interpreterIndex",function(require, exports, module) {
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
	var interpreterIndexPager = Widget
			.extend({
				/* 事件代理 */
				events : {
					 
				},
				/* 初始化 */
				_init:function(){
					var interperId = $("#interperId").val();
					if(interperId){//译员ok
						this._orderStatusCount();
						this._queryOrder();
						this._queryLspInfo();
					}else{
						 $("#no_rz_container").show();
 	            	}
					
				},
				/* 获取订单数量 */
				_orderStatusCount:function(){
					ajaxController.ajax({
						 type:"post",
		    				url:_base+"/p/security/orderStatusCount",
		    				data:{
		    					'statusList':'21,23',
		    					'isInterpreter':'true',
		    					'lspRole':$("#lspRole").val()
		    					},
		    		        success: function(data) {
		    		        	//data = {"21":3,"23":4};
		    		        	$("#receiveCount").html(data['21']);
		    		        	$("#translateCount").html(data['23']);
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
					var interperId = $("#interperId").val();
					var lspId = $("#lspId").val();
					var lspRole = $("#lspRole").val();
					var sendData ={};
					sendData.pageSize=10;
					sendData.pageNo=1;
					sendData.interperId=interperId;
					sendData.lspId=lspId;
					sendData.lspRole=lspRole;
					if(!interperId){
						var userId = $("#userId").val();
						sendData.interperId=userId;
					}
					
					ajaxController.ajax({
						 type:"post",
		    				url:_base+"/p/customer/order/orderList",
		    				data:sendData,
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
		    	            		var template = $.templates("#orderTemple");
		    	            	    var htmlOutput = template.render(data);
		    	            	    $("#order_list").html(htmlOutput);
		    	            	    $("#have_order_container").show();
		    	            	    $("#no_order_container").hide();
		    	            	}else{
		    	            		$("#have_order_container").hide();
		    	            		$("#no_order_container").show();
		    	            	}
		    		        }
		    		});
				},
				/* 获取lsp信息 */
				_queryLspInfo:function(){
					var lspId = $("#lspId").val();
					if(!lspId){
						return;
					}
					ajaxController.ajax({
						 type:"post",
		    				url:_base+"/p/security/queryLspInfo",
		    				data:{'lspId':lspId},
		    		        success: function(json) {
		    		        	if(json.statusCode=="1"){
		    		        		if(json.data&&json.data.length>0){
		    		        			$("#lspName").html(json.data[0].lspName);
		    		        		}
		    		        	}
		    		        }
		    		});
				},
				/* 重写父类 */
				setup : function() {
					interpreterIndexPager.superclass.setup.call(this);
					this._init();
				}
			});
	module.exports = interpreterIndexPager;
});
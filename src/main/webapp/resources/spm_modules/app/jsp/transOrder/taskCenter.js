define('app/jsp/transOrder/taskCenter', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
	    Widget = require('arale-widget/1.2.0/widget'),
		Dialog = require("optDialog/src/dialog"),
	    AjaxController = require('opt-ajax/1.0.0/index');
    require("jsviews/jsrender.min");
    require("jsviews/jsviews.min");
    require("app/util/jsviews-ext");
	require("opt-paging/aiopt.pagination");
	require("my97DatePicker/WdatePicker");
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');

    var ajaxController = new AjaxController();
    var taskCenterPage = Widget.extend({
    	//属性，使用时由类的构造函数传入
    	attrs: {
    		clickId:""
    	},
    	
    	Statics: {
    		DEFAULT_PAGE_SIZE: 10
    	},
    	
    	//事件代理
    	events: {
			"change #fieldCode":"_getOrderList",
			"change #useCode":"_getOrderList",
			"keyup #endDate":"_getOrderList",
			"click #searchBtn":"_getOrderList",
			"click #feeSort":"_feeSortFun",
			"click #endSort":"_endSortFun",
			"click #pdateAec":"_pDateAec",
			"click #pdateDesc":"_pdateDesc"
    	},
    	
      	//重写父类
    	setup: function () {
			taskCenterPage.superclass.setup.call(this);
    		this._getOrderList();
			//初始化国际化
			$.i18n.properties({//加载资浏览器语言对应的资源文件
				name: ["taskCenter"], //资源文件名称，可以是数组
				path: _i18n_res, //资源文件路径
				mode: 'both',
				language: currentLan,
				async: true
			});
    	},
		//改变查询的结束时间
		_changeEndDate:function(dp){
			//若截止时间发生变更,则刷新页面
			if(dp.cal.getDateStr() != dp.cal.getNewDateStr()){
				this._getOrderList();
			}
		},
		//金额排序处理
		_feeSortFun:function(){
			//获取当前排序
			var nowSort = $("#feeSort").attr("sortFlag");
			var sort = nowSort=="1"?"0":"1";
			$("#feeSort").attr("sortFlag",sort);
			$("#sortFlag").val(sort);
			$("#sortField").val("2");
			this._getOrderList();
		},
		//截止时间排序处理
		_endSortFun:function(){
			//获取当前排序
			var nowSort = $("#endSort").attr("sortFlag");
			var sort = nowSort=="1"?"0":"1";
			$("#endSort").attr("sortFlag",sort);
			$("#sortFlag").val(sort);
			$("#sortField").val("1");
			this._getOrderList();
		},
		//发布时间正序
		_pDateAec:function(){
			$("#sortFlag").val("0");
			$("#sortField").val("0");
			this._getOrderList();
		},
		//发布时间倒序
        _pdateDesc:function(){
			$("#sortFlag").val("1");
			$("#sortField").val("0");
			this._getOrderList();
		},
        //查询订单
        _getOrderList:function() {
        	var _this = this;
			if(window.console)
				console.log("quer list");
          	$("#pagination-ul").runnerPagination({
	 			url: _base+"/p/taskcenter/list",
	 			method: "POST",
	 			dataType: "json",
	 			renderId:"orderInfoTable",
	 			messageId:"showMessageDiv",
//	 			 $('#orderQuery').serialize()
	 			data: $("#orderQuery").serializeArray(),
	           	pageSize: taskCenterPage.DEFAULT_PAGE_SIZE,
	           	visiblePages:5,
	            render: function (data) {
	            	if(data != null && data != 'undefined' && data.length>0){
	            		var template = $.templates("#searchOrderTemple");
	            	    var htmlOutput = template.render(data);
	            	    $("#orderInfoTable").html(htmlOutput);
	            	}
	            }
    		});
        }
    });
    module.exports = taskCenterPage;
});
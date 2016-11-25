define('app/jsp/balance/account', function (require, exports, module) {
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
    
    var accountListPage = Widget.extend({
    	//属性，使用时由类的构造函数传入
    	attrs: {
    		clickId:""
    	},
    	
    	Statics: {
    		DEFAULT_PAGE_SIZE: 10
    	},
    	
    	//事件代理
    	events: {
			"click #shouru":"_incomeList",
			"click #zhichu":"_incomeList",
			"click #chongzhi":"_incomeList",
			"click #tixian":"_incomeList",
			"click #xiadan":"_incomeList",
			"click #tuikuan":"_incomeList",
			"click #today":"_incomeList",
			"click #oneMonth":"_incomeList",
			"click #threeMonth":"_incomeList",
			"click #oneyear":"_incomeList"

		},
    	
      	//重写父类
    	setup: function () {
			accountListPage.superclass.setup.call(this);
    		this._incomeList();
    	},
    	
        //表单查询收支列表
		_incomeList:function() {
        	var _this = this;
        	/*var incomeBalance = $("#incomeBalance").val();
        	var beginDate  = $("#beginDate").val();
        	var endDate  = $("#endDate").val();
        	var optType = $("#optType").val();*/
        	_this._getIncomerList();
        },
		
        //查询收支列表
		_getIncomerList:function() {
        	var _this = this;
          	$("#pagination-ul").runnerPagination({
	 			url: _base+"/p/balance/accountList",
	 			method: "POST",
	 			dataType: "json",
	 			renderId:"searchAccountData",
	 			messageId:"showAccountDiv",
//	 			 $('#orderQuery').serialize()
	 			data: $("#accountQuery").serializeArray(),
	           	pageSize: accountListPage.DEFAULT_PAGE_SIZE,
	           	visiblePages:5,
	            render: function (data) {
	            	console.log(data);
	            	if(data != null && data != 'undefined' && data.length>0){
						// for(var i=0;i<data.length;i++) {
						var currencyUnit = data[0].currencyUnit;
						var incomeBalance =  data[0].incomeBalance;
						var outBalance =  data[0].outBalance;
						$("#income").html("收入:"+incomeBalance+currencyUnit);
						$("#out").html("支出:"+outBalance+currencyUnit);

						var template = $.templates("#searchAccountTemple");
	            	    var htmlOutput = template.render(data);
	            	    $("#searchAccountData").html(htmlOutput);
	            	}
	            }
    		});
        },
		
    });
    module.exports = accountListPage;
});
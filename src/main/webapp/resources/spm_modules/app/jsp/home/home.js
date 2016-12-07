define('app/jsp/home/home', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
        Widget = require('arale-widget/1.2.0/widget'),
        AjaxController = require('opt-ajax/1.0.0/index');
    require("jsviews/jsrender.min");
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
	require("echarts/echarts.min");
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();

	var sourYiWen="";
    var homePage = Widget.extend({
        //属性，使用时由类的构造函数传入
        attrs: {
            clickId:""
        },

        //事件代理
        events: {
            
        },

        //重写父类
        setup: function () {
            homePage.superclass.setup.call(this);
            
        	//初始化国际化
		/*	$.i18n.properties({//加载资浏览器语言对应的资源文件
				name: ["home"], //资源文件名称，可以是数组
				path: _i18n_res, //资源文件路径
				mode: 'both',
				language: currentLan,
			});*/
            $(document).on("mouseenter",".list-left ul li",function(){
            	 $(".list-left ul li").each(function () {
                     $(this).removeClass("current");
                     var index=$('.list-left ul li').index(this);
                     $("#chart-date"+index).hide();
                 });
                 $(this).addClass("current");
                 var index=$('.list-left ul li').index(this);
                 $("#chart-date"+index).show();
			});
            
            $(document).on("mouseenter",".list-left ul li",function(){
           	 $(".list-left ul li").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
			});
            
			this._load();
			
        },
        _load:function(){
        	this._initEventData();
        	this._loadEventChart();
        	
        },
        _initEventData:function(){
        	var url = "/emergency/getEmergencyIndexList";
        	var param = {};
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: _base + url,
				data: param,
				success: function (rs) {
					var data = rs.data;
					var emergencyHtml = $("#emergencyTempl").render(data);
					$("#eventList").html(emergencyHtml);
					var chartHtml = $("#chartTempl").render(data);
					$("#eventChartList").html(chartHtml);
					$("#chart_0_0").load("../jsp/chart/bar.html");
		        	$("#chart_1_0").load("../jsp/chart/area.html");
				}
			});
        },
        _loadEventChart:function(){
        
        	$("#test2").load("../jsp/chart/bar2.html");
        	$("#test3").load("../jsp/chart/pie.html");
        }
        
    });

    module.exports = homePage;
});

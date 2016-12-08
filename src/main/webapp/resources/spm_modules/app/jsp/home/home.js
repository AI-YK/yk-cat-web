define('app/jsp/home/home', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
        Widget = require('arale-widget/1.2.0/widget'),
        AjaxController = require('opt-ajax/1.0.0/index');
    require("jsviews/jsrender.min");
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
	var HomeChart = require("app/jsp/home/charts");
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    
    var homeChart = new HomeChart();

    var homePage = Widget.extend({
        //属性，使用时由类的构造函数传入
        attrs: {
            clickId:""
        },

        //事件代理
        events: {
            "click #login":"_login"
        },

        //重写父类
        setup: function () {
        	var _this = this;
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
            
           $(".trend").on("click",".locSentimentCount ul li a",function(){
            	$(".locSentimentCount ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
                _this._loadPubTrend('locSentimentCount', $(this).attr("id"));
                
   			});
          
            $(".trend").on("click",".mediaCoverage ul li a",function(){
            	$(".mediaCoverage ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
                _this._loadPubTrend('mediaCoverage', $(this).attr("id"));
   			});
            
			this._load();
			
        },
        _load:function(){
        	this._initEventData();
        	this._loadPubTrend('locSentimentCount', '0');
        	this._loadPubTrend('mediaCoverage', '0');
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
					//$("#chart_0_0").load("../jsp/chart/bar.html");
		        	//$("#chart_1_0").load("../jsp/chart/area.html");
				}
			});
        },
        _login:function(){
        	$("#loginJumpFormId").attr("action","http://buzz.yeesight.com/login");
        	var end = window.location.href.indexOf(_base);
        	var href = window.location.href.substring(0,end) + _base+"/home/success";
        	alert(href);
        	$("#loginSuccessUrl").val(href);
        	$('#loginJumpFormId').submit();
        },
        _loadPubTrend:function(modelNo,timeType){
        	var url = "/trend/pubTrend";
        	var param = {};
        	param.modelNo = modelNo;
        	param.timeType = timeType;
        	param.province = '';
        	param.city = '';
        	param.publicAffairsType = '';
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: _base + url,
				data: param,
				success: function (rs) {
					var data = rs.data;
					if(modelNo=='mediaCoverage'){
						homeChart._initMediaCoverageChart('mediaCoverage',data.mediaCoverage);
					}else if(modelNo=='locSentimentCount'){
						homeChart._initIocSentimentChart('locSentimentCount',data.locSentimentCount);
					}
				}
			});
        }
        
    });

    module.exports = homePage;
});

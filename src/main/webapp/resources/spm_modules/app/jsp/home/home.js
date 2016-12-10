define('app/jsp/home/home', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
        Widget = require('arale-widget/1.2.0/widget'),
        AjaxController = require('opt-ajax/1.0.0/index');
    var Dialog = require("optDialog/src/dialog");
    require("app/util/jsviews-yi");
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
	var HomeChart = require("app/jsp/home/charts");
	require("jsviews/jsrender.min");
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    
    var showErrorDialog = function(error){
    	var d = Dialog({
			content:error,
			icon:'fail',
			okValue: '确 定',
			title: '提示',
			ok:function(){
				this.close();
			}
		});
		d.showModal();
    }
    
    var homeChart = new HomeChart();

    var homePage = Widget.extend({
        //属性，使用时由类的构造函数传入
        attrs: {
            clickId:"",
            chartGroups:{}
        },

        //事件代理
        events: {
            "click #login":"_login",
            "click #regist":"_regist"
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
                 homeChart._initTimeTrendChart("chart_right",_this.chartGroups[index].timeTrend);
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
            
            $(document).on("click","#hot-tab ul li a",function(){
            	$("#hot-tab ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
   			});
            
            $(document).on("click","#news-tab ul li a",function(){
            	$("#news-tab ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
                var mediaId = $(this).next().attr("value");
                _this._getHotInfoList("news",mediaId);
   			});
            
            $(document).on("click","#social-tab ul li a",function(){
            	$("#social-tab ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
                var mediaId = $(this).next().attr("value");
                _this._getHotInfoList("social",mediaId);
   			});
            
            this._bindEvent();
			this._load();
			
        },
        _bindEvent:function(){
        	//昵称
        	 $('.breadcrumb-main ul .right .posi').mouseenter(function () {
        			$('#user-show').show(1);
        	 });
            $("#user-show").click(function () {
        	        $(this).hide(1);
        	 });	
        	 $('.breadcrumb-main').mouseleave(function () {
        	        $('#user-show').hide(1);
        	        $('#erw-show').hide(1);
        	 });	
        	 
        	 //二维码
        	 $('.breadcrumb-main ul .iphone').mouseenter(function () {
        			$('#erw-show').show(1);
        	 })
        	 $("#erw-show").click(function () {
        	         $(this).hide(1);
        	  });	
        	  $('.breadcrumb-main').mouseleave(function () {
        	        $('#erw-show').hide(1);
        	        $('#user-show').hide(1);
        	 });	
        	  
        	 //专题
        	  $('.right-list ul #in-border1').mouseenter(function () {
        			$('#special-one').show(1);
        	  })
        	  $("#special-one").click(function () {
        	                $(this).hide(1);
        	  });	
        	  $('.right-list ul #in-border1').mouseleave(function () {
        	        $('#special-one').hide(1);
        	  });	
        	  
        	  $('.right-list ul #in-border2').mouseenter(function () {
        			$('#special-tow').show(1);
        	    })
        		$("#special-tow").click(function () {
        	          $(this).hide(1);
        	     });	
        		$('.right-list ul #in-border2').mouseleave(function () {
        	        $('#special-tow').hide(1);
        	    });	
        		
        		$(".ahov1").click(function(){
        			$("#in-border2").hide();
        			$(".left-list").show();
        			$(".inbtn").show();
        			var abovalue=$("#ahov1Id").text();
        			$("#border1Id").text(abovalue);
        		});
        		$(".ahov2").click(function(){
        			$("#in-border2").show();
        			$(".left-list").hide();
        			$(".inbtn").hide();
        			var abovalue=$("#ahov2Id").text();
        			$("#border1Id").text(abovalue);
        		});	
        		
        		$(".ahov").click(function(){
        			var text =$(this).text();
        			$("#border2Id").text(text);
        		});
        },
        _load:function(){
        	this._initEventData();
        	this._loadPubTrend('locSentimentCount', '0');
        	this._loadPubTrend('mediaCoverage', '0');
        	this._getDics('TJSJY');
        	this._getDics('SJLY');
        	this._getHotInfoList("news",null);
        	this._getHotInfoList("social",null);
        	this._getNegativeList("news");
        	this._getNegativeList("social");
        },
        _initEventData:function(){
        	var _this = this;
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
					$("#chartGroup").show();
					_this.chartGroups = data.groups;
					homeChart._initTimeTrendChart("chart_right",_this.chartGroups[0].timeTrend);
				}
			});
        },
        _login:function(){
        	//http://192.168.59.17:8066/sso/login
        	//http://buzz.yeesight.com/login
        	$("#loginJumpFormId").attr("action","http://192.168.59.17:8066/sso/login");
        	var end = window.location.href.indexOf(_base);
        	var href = window.location.href.substring(0,end) + _base+"/home/success";
        	$("#loginSuccessUrl").val(href);
        	$('#loginJumpFormId').submit();
        },
        _regist:function(){
        	showErrorDialog("哈哈");
        	//location.href= 'http://buzz.yeesight.com/register';
        },
        _loadPubTrend:function(modelNo,timeType){
        	var url = "/trend/pubTrend";
        	var param = {};
        	param.modelNo = modelNo;
        	param.timeType = timeType;
        	param.categoryId = '';
        	param.idList = '';
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: _base + url,
				data: param,
				success: function (rs) {
					var data = rs.data;
					if(modelNo=='mediaCoverage'){
						homeChart._initMediaCoverageChart('mediaCoverage','mediaCoverage-ul',data.mediaCoverage);
					}else if(modelNo=='locSentimentCount'){
						homeChart._initIocSentimentChart('locSentimentCount',data.locSentimentCount);
					}
				}
			});
        },
        /**
    	 * 新闻热点 TJSJY 
    	 * 社交热点 SJLY 
    	 */
        _getDics:function(type){ 
        	var url = "/common/getDic";
        	var param = {};
        	param.type = type;
        	param.language = 'zh';
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: _base + url,
				data: param,
				success: function (rs) {
					var list = rs.data;
					if(type=='TJSJY'){
						var newsMediaHtml = $("#newsMediaTempl").render({'dics':list});
						$("#news-media").html(newsMediaHtml);
					}else if(type=='SJLY'){
						var socialMediaHtml = $("#socialMediaTempl").render({'dics':list});
						$("#social-media").html(socialMediaHtml);
					}
				}
			});
        },
        /**媒体类型 新闻热点：news，社交热点：social **/
        _getHotInfoList:function(mediaType,mediaId){ 
        	var url = "/news/getHotInfoList";
        	var param = {};
        	param.mediaType = mediaType;
        	if(mediaId){
        		param.mediaId = mediaId;
        	}
        	param.provincecityCode = "";
        	param.cityCode = "";
        	param.publicAffairsType = "";
        	param.fieldName="transfer"
            param.order = "desc";
        	param.language = 'zh';
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: _base + url,
				data: param,
				success: function (rs) {
					var data = rs.data;
					if(mediaType=='news'){
						var newsHotHtml = $("#newsHotTempl").render(data.resultList);
						$("#news-div").html(newsHotHtml);
		        	}else if(mediaType=='social'){
		        		var socialHotHtml = $("#socialHotTempl").render(data.resultSocialList);
						$("#social-div").html(socialHotHtml);
		        	}
				}
			});
        },
        /**媒体类型 新闻热点：news，社交热点：social **/
        _getNegativeList:function(mediaType){ 
        	var url = "/negative/getNegativeList";
        	var param = {};
        	param.mediaType = mediaType;
        	param.provincecityCode = "";
        	param.cityCode = "";
        	param.publicAffairsType = "";
        	param.fieldName="pubdate"
            param.order = "desc";
        	param.language = 'zh';
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: _base + url,
				data: param,
				success: function (rs) {
					var data = rs.data;
					if(mediaType=='news'){
						var newsHtml = $("#newsTempl").render(data.resultList);
						$("#newsDiv").html(newsHtml);
		        	}else if(mediaType=='social'){
		        		var socialHtml = $("#socialTempl").render(data.resultSocialList);
						$("#socialDiv").html(socialHtml);
		        	}
				}
			});
        }
        
    });

    module.exports = homePage;
});

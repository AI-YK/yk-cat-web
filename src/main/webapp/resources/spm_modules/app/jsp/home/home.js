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
	require("cookie"); 
    // 实例化AJAX控制处理对象
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
    var chartGroupMap = {};
    var homePage = Widget.extend({
        // 属性，使用时由类的构造函数传入
        attrs: {
            chartGroup:{}
        },

        // 事件代理
        events: {
           "click #saveId":"_saveProvinceAndCity",
           "click #saveDicId":"_saveDic"
        },

        // 重写父类
        setup: function () {
        	var _this = this;
            homePage.superclass.setup.call(this);
        	// 初始化国际化
            
            
            
            $(document).on("click",".list-left ul li",function(){
              	 $(".list-left ul li").each(function () {
                       $(this).removeClass("current");
                       var index=$('.list-left ul li').index(this);
                       $("#chart-date"+index).hide();
                   });
                   $(this).addClass("current");
                   var srcId = $(this).attr("id");
                   _this._getEventModel(srcId);
                 
   			});
            
            //左侧突发事件点击操作
            $(document).on("click",".list-left ul li .ptitle",function(){
           	    var srcId = $(this).parent().attr("id");
	           	var url =_base+"/event/detail/"+srcId;
	        	window.open (url, '_blank' ) ;
            });
            //新闻媒体预警点
            $(document).on("click","#newsDiv ul",function(){
            	var _this = $(this);
           	    var uuid = _this.attr("uuid");
	           	var url =_base+"/news/detail/"+uuid;
	           	/*var keyword = _this.attr("keyword");
	           	if(keyword){
	           		url = url+"?keyword="+encodeURI(encodeURI(keyword));
	           	}*/
	        	window.open (url, '_blank' ) ;
            });
          //社交媒体预警
            $(document).on("click","#socialDiv ul",function(){
            	var _this = $(this);
           	    var myid = _this.attr("myid");
           	    var url =_base+"/social/detail/"+myid;
           	    /*var keyword = _this.attr("keyword");
        	    if(keyword){
	           		url = url+"?keyword="+encodeURI(encodeURI(keyword));
	           	}*/
	        	window.open (url, '_blank' ) ;
            });
            //新闻热点
            $(document).on("click","#news-div ul",function(){
            	var _this = $(this);
           	    var uuid = _this.attr("uuid");
           	    var url =_base+"/news/detail/"+uuid;
           	   /* var keyword = _this.attr("keyword");
           	    if(keyword){
	           		url = url+"?keyword="+encodeURI(encodeURI(keyword));
	           	}*/
	        	window.open (url, '_blank' ) ;
            });
          //社交热点
            $(document).on("click","#social-div ul",function(){
            	var _this = $(this);
            	var myid = _this.attr("myid");
            	var url =_base+"/social/detail/"+myid;
           	   /* var keyword = _this.attr("keyword");
           	    if(keyword){
	           		url = url+"?keyword="+encodeURI(encodeURI(keyword));
	           	}*/
	        	window.open (url, '_blank' ) ;
            });
            
            $("#merge ul li a").click(function () {
                $("#merge ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
                var index = $('#merge ul li a').index(this);
                if(index==0){
                 	if(_this.chartGroup){
                 		homeChart._initTimeTrendChart("chart_event",_this.chartGroup.timeTrend);  
                 	}
                }
                if(index==1){
                 	if(_this.chartGroup){
                 		homeChart._initSpreadStateChart("chart_event",_this.chartGroup.spreadTrend);
                 	}
                }
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
            
            $(document).on("click",".eject-small-list ul li a",function(){
            	if($(this).hasClass("current")){
            		$(this).removeClass("current");
            	}else{
            		$(this).addClass("current");
            	}
            })
            
            this._bindEvent();
			this._load();
			
        },
        _bindEvent:function(){
        	var _this = this;
        	//数据 
            $('.mainbav  #shuj').mouseenter(function () {
        		$('#data-show').show(1);
        		$('#user-show').hide(1);
            })
        	$("#data-show").click(function () {
                        $(this).hide(1);
            });	
        	$('.mainbav').mouseleave(function () {
                $('#data-show').hide(1);
            });	
        	
        	 //更多
        	$('.right-list  #more').click(function () {
        		$('#more-show').show(1);
            })
        	$("#more-show").click(function () {
                $(this).hide(1);
            });	
        	$('.right-list').mouseleave(function () {
                $('#more-show').hide(1);
            });	
        	
        	
        	//通用数据  定制数据	
        	$("#data-show ul .ahov1").click(function(){
        		$("#topicDiv").hide();
        		$(".right-list").hide();
        		$("#commDiv").show();
        	    //$.cookie('_data_type','0');
        	});
        	$("#data-show ul .ahov3").click(function(){
        		$("#commDiv").hide();
        		$("#topicDiv").show();
        		$(".right-list").show();
        		//$.cookie('_data_type','1');
        	});	
        		
        	//选择城市
        	$('.left-list ul li #choice-city').click(function () {
        		$('#index-city').toggle();
            });
        	
            $('#btn-close').click(function () {
        		$('#index-city').hide();
            });
            
            //选择专题
            $(document).on("click",".topic",function(){
             	  $(".topic").each(function () {
                      $(this).removeClass("current");
                  });
                  $(this).addClass("current");
  			});
            
            //修改领域分类
            $('#modify-btn').click(function(){
            	$('#eject-mask').fadeIn(100);
            	$('#classification').slideDown(100);
             })
             $('#i-close').click(function(){
            	$('#eject-mask').fadeOut(200);
            	$('#classification').slideUp(200);
             });
             $('#eject-btn-close').click(function(){
            	$('#eject-mask').fadeOut(200);
                $('#classification').slideUp(200);
             });
        		
        		$(document).on("click",".choice-left-title ul li a",function(){
                	$(".choice-left-title ul li a").each(function () {
                        $(this).removeClass("current");
                        var index=$('.choice-left-title ul li a').index(this)+1;
                        $("#citi-tab"+index).hide();
                    });
                    $(this).addClass("current");
                    var index=$('.choice-left-title ul li a').index(this)+1;
                    $("#citi-tab"+index).show();
    			});
                
                $(document).on("click",".choice-list ul li a",function(){
                	$(".choice-list ul li a").each(function () {
                        $(this).removeClass("current");
                    });
                    $(this).addClass("current");
                    var next = $(this).next();
                    _this._getCity(next.val());
    			});
        		
        },
        _load:function(){
        	
        	//var dataType = $.cookie('_data_type');
        	/*if(dataType==undefined||dataType=='0'){
        		$("#topicDiv").hide();
        		$(".right-list").hide();
        		$("#commDiv").show();
        	}else if(dataType=='1'){
        		$("#commDiv").hide();
        		$("#topicDiv").show();
        		$(".right-list").show();
        	}*/
        	
        	this._initEventData();
        	this._loadPubTrend('locSentimentCount', '0');
        	this._loadPubTrend('mediaCoverage', '0');
        	this._getDics('TJSJY');
        	this._getDics('SJLY');
        	this._getHotInfoList("news",null);
        	this._getHotInfoList("social",null);
        	this._getNegativeList("news");
        	this._getNegativeList("social");
        	this._getProvince();
        	this._getDomains();
        },
        _initEventData:function(){
        	var _this = this;
        	var url = "/emergency/getEmergencyIndexList";
        	var param = {};
        	if(provinceCodee!=''){
        		param.provinceCode=provinceCodee;
        	}
        	if(cityLists!=''){
        		var cityList=eval("("+cityLists+")");
            	var cityCodeList="";
            	for(var i=0;i<cityList.length;i++){
            		cityCodeList=cityCodeList+","+cityList[i].code;
            	}
            	if(cityCodeList!=""){
            		cityCodeList= cityCodeList.substring(1,cityCodeList.length);
            	}
            	param.cityCode=cityCodeList;
        	}
        	
        	param.pageSize=7;
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
					$("#chart-date").show();
					var event = data.eventList[0];
                    if(event){
                    	_this._getEventModel(event.srcId);
                    }
					
				}
			});
        },
        _getEventModel:function(srcId){
        	
        	var _this = this;
        	if(!srcId){
        		return;
        	}
        	var chartGroup = chartGroupMap[srcId];
        	if(chartGroup){
        		_this._initEventChart(chartGroup);
        		return;
        	}
        	
        	var url = "/emergency/getEventModel";
        	var param = {};
        	param.srcId = srcId;
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: _base + url,
				data: param,
				success: function (rs) {
					var data = rs.data;
					chartGroupMap[srcId] = data;
					_this._initEventChart(data);
					
				}
			});
        },
        _initEventChart:function(chartGroup){
        	 this.chartGroup = chartGroup;
        	 if($("#chuanbo").hasClass('current')){
           		 homeChart._initSpreadStateChart("chart_event",this.chartGroup.spreadTrend);  
           	 }else if($("#event").hasClass('current')){
           		 homeChart._initTimeTrendChart("chart_event",this.chartGroup.timeTrend);
           	 }
        },
        _loadPubTrend:function(modelNo,timeType){
        	var url = "/trend/pubTrend";
        	var param = {};
        	if(cityLists!=''){
        		var cityList=eval("("+cityLists+")");
            	var cityCodeList="";
            	for(var i=0;i<cityList.length;i++){
            		cityCodeList=cityCodeList+","+cityList[i].code;
            	}
            	if(cityCodeList!=""){
            		cityCodeList= cityCodeList.substring(1,cityCodeList.length);
            	}
            	param.busCode=cityCodeList;
        	}
        	param.modelNo = modelNo;
        	param.timeType = timeType;
        	param.categoryId = '';
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
		 * 新闻热点 TJSJY 社交热点 SJLY
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
        /** 媒体类型 新闻热点：news，社交热点：social * */
        _getHotInfoList:function(mediaType,mediaId){ 
        	var url = "/news/getHotInfoList";
        	var param = {};
        	if(provinceCodee!=''){
        		param.provinceCode=provinceCodee;
        	}
        	if(cityLists!=''){
        		var cityList=eval("("+cityLists+")");
            	var cityCodeList="";
            	for(var i=0;i<cityList.length;i++){
            		cityCodeList=cityCodeList+","+cityList[i].code;
            	}
            	if(cityCodeList!=""){
            		cityCodeList= cityCodeList.substring(1,cityCodeList.length);
            	}
            	param.cityCode=cityCodeList;
        	}
        	
        	param.mediaType = mediaType;
        	if(mediaId){
        		param.mediaList = mediaId;
        	}
        	
        	
        	param.language = 'zh';
        	param.pageNo='1';
        	if(mediaType=='news'){
        		param.pageSize='11';
        		param.fieldName="transfer"
                param.order = "desc";
        	}else if(mediaType =='social'){
        		param.pageSize='7';
        		param.fieldName="transCount"
                param.order = "desc";
        	}
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
        /** 媒体类型 新闻热点：news，社交热点：social * */
        _getNegativeList:function(mediaType){ 
        	var url = "/negative/getNegativeList";
        	var param = {};
        	if(provinceCodee!=''){
        		param.provinceCode=provinceCodee;
        	}
        	if(cityLists!=''){
        		var cityList=eval("("+cityLists+")");
            	var cityCodeList="";
            	for(var i=0;i<cityList.length;i++){
            		cityCodeList=cityCodeList+","+cityList[i].code;
            	}
            	if(cityCodeList!=""){
            		cityCodeList= cityCodeList.substring(1,cityCodeList.length);
            	}
            	param.cityCode=cityCodeList;
        	}
        	
        	param.mediaType = mediaType;
        	if("news"==mediaType){
        		param.fieldName="pubdate";
        	}else{
        		param.fieldName="time";
        	}
        	
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
        },
        _getProvince:function(){
        	var _this = this;
        	var url = "/common/getProvince";
        	var param = {};
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: _base + url,
				data: param,
				success: function (rs) {
					var map = rs.data;
					var provinceInfo = {};
					var letters = [];
					var provinces = []
					var i = 0;
					var letterId = "";
					for (var key in map){
						letters[i] = {'letter':key};
						provinces[i] = {'list':map[key]};
						var pro=map[key];
						if(letterId == ""){
							for(var j=0;j<pro.length;j++){
								if(provinceCodee==pro[j].busCode){
									letterId = "letter_"+key;
								}
							}
						}
						i = i + 1;
					}
					provinceInfo.letters = letters;
					provinceInfo.provinces = provinces;
					var provinceHtml = $("#provinceTempl").render(provinceInfo);
					$(".choice-left").html(provinceHtml);
					$(".choice-left-title ul li a").each(function () {
						var index=$('.choice-left-title ul li a').index(this)+1;
						var id = $(this).attr("id");
						if(letterId==''&&index==1||id==letterId){
							 $(this).addClass("current");
							 $("#citi-tab"+index).show();
						}else{
							$(this).removeClass("current");
		                    $("#citi-tab"+index).hide();
						}
	                    
	                });
					$("#pro_"+provinceCodee).addClass("current");
					_this._getCity(null);
				}
			});
        },
        _getCity:function(parent){
            if(!parent || parent==undefined||parent=='' || parent==null){
            	var curr = $(".choice-list .current");
            	if(curr){
            		 var next = curr.next();
                     parent = next.val();
            	}else{
            		return;
            	}
            }
        	var url = "/common/getCity";
        	var param = {};
        	param.parentCode = parent;
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: _base + url,
				data: param,
				success: function (rs) {
					var list = rs.data;
					var cityHtml = $("#cityTempl").render(list);
					$("#cityList").html(cityHtml);
					if(cityList!=""){
						var citys = eval('('+cityLists+")");
						for(var i=0;i<citys.length;i++){
							var id = citys[i].code;
							$("#city_"+id).attr("checked","checked");
						}
					}
				}
			});
        },
        _getDomains:function(){
            
        	var url = "/common/getDic";
        	var param = {};
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: _base + url,
				data: param,
				success: function (rs) {
					var list = rs.data;
					var dicHtml = $("#dicTempl").render({'dics':list});
					$("#dicUl").html(dicHtml);
					if(configInterestList!=""){
						var interestList = eval('('+configInterestList+")");
						for(var i=0;i<interestList.length;i++){
							var id = interestList[i].businessId;
							$("#dic_"+id).addClass("current");
						}
					}
					
				}
			});
        },
        _saveProvinceAndCity:function(){
        	var _this = this;
        	var provinceCode = "";
            var province = $(".choice-list .current");
        	  if(province){
        		  var next = province.next();
        		  provinceCode = next.val();
        	  }else{
        		$("#tishiId").text("请选择省份");
        		return;
        	  }
     		  var cityStr="";
     		  $(".city").each(function(){
     			  if(this.checked){
     				  cityStr=cityStr+","+$(this).val();
     			  }
     		  });
     		  if(cityStr==""){
     			$("#tishiId").text("至少选择一个城市");
     			return;
     		  }else{
     			  cityStr=cityStr.substring(1,cityStr.length);
     		  }
     		  var url="/common/saveConf";
     		  var param={};
     		  param.provinceCode=provinceCode;
     		  param.cityStr=cityStr;
     		 ajaxController.ajax({
      			  type:"POST",
      			  processing: false,
      			  message: "保存数据中，请等待...",
      			  url: _base + url,
      			  dataType:"json",
      			  data:param,
      			  success:function(rs){
      				  /*var proName=$(".choice-list .current").text();
      				  var cityName="";
      				  var ss=0;
      				  $(".city").each(function(){
      					  if(this.checked){
      						  ss+=1;
      						  if(cityName==""){
      							  cityName=$(this).next().val();
      						  }
      					  }
      				  });
      				  if(ss==1){
      					  $("#choice-city").html(proName+","+cityName);
      				  }else{
      					$("#choice-city").html(proName+","+cityName+"等");
      				  }*/
      				location.href = _base + '/home/index';
      				$('#index-city').hide();
      				_this._initEventData();
      				_this._loadPubTrend('locSentimentCount', '0');
      	        	_this._loadPubTrend('mediaCoverage', '0');
      	        	_this._getHotInfoList("news",null);
      	        	_this._getHotInfoList("social",null);
      	        	_this._getNegativeList("news");
      	        	_this._getNegativeList("social");
      				 /* location.href = _base + '/home/index'; */
      			  }
      		  });
        },
        _saveDic:function(){
        	var interestStr = "";
            $(".dic").each(function(){
          	  if($(this).hasClass("current")){
          		  interestStr = interestStr + ","+($(this).next()).val();
          	  }
            });
            if(interestStr ==""){
          	  $("#tishiDicId").text("领域分类至少选择一个");
          	  return;
            }else{
          	  interestStr = interestStr.substring(1,interestStr.length);
            }
            var url="/common/saveConf";
     		var param={};
     		param.interestStr=interestStr;
     		ajaxController.ajax({
     			  type:"POST",
     			  processing: false,
     			  message: "保存数据中，请等待...",
     			  url: _base + url,
     			  dataType:"json",
     			  data:param,
     			  success:function(rs){
     				  location.href=_base+"/home/index";
     			  }
     		  });
        }
        
    });

    module.exports = homePage;
});

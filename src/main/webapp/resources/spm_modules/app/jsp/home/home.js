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
           "click #saveId":"_saveProvinceAndCity",
           "click #saveDicId":"_saveDic"
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
					$("#chartGroup").show();
					_this.chartGroups = data.groups;
					//homeChart._initSpreadStateChart("chart_left",_this.chartGroups[0].spreadTrend);
					homeChart._initTimeTrendChart("chart_right",_this.chartGroups[0].timeTrend);
				}
			});
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
        	param.pageNo='1';
        	if(mediaType=='news'){
        		param.pageSize='6';
        	}else if(mediaType =='social'){
        		param.pageSize='4';
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
					for (var key in map){
						letters[i] = {'letter':key};
						provinces[i] = {'list':map[key]};
						var pro=map[key];
						for(var j=0;j<pro.length;j++){
							if(provinceCodee==pro[j].code){
								$("#letter_1").addClass("current");
							}
						}
						i = i + 1;
					}
					provinceInfo.letters = letters;
					provinceInfo.provinces = provinces;
					//alert(JSON.stringify(provinceInfo));
					var provinceHtml = $("#provinceTempl").render(provinceInfo);
					$(".choice-left").html(provinceHtml);
					$("#pro_"+provinceCodee).addClass("current");
					_this._getCity(null);
				}
			});
        },
        _getCity:function(parent){
            if(!parent){
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
						var citys = eval('('+cityList+")");
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
      				  location.href = _base + '/home/index';
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
     				  location.href = _base + '/home/index';
     			  }
     		  });
        }
        
    });

    module.exports = homePage;
});

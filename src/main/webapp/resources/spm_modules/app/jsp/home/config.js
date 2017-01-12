define('app/jsp/home/config', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
        Widget = require('arale-widget/1.2.0/widget'),
        AjaxController = require('opt-ajax/1.0.0/index');
	require("jsviews/jsrender");
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();

    var configPage = Widget.extend({
        //属性，使用时由类的构造函数传入
        attrs: {
            clickId:""
        },

        //事件代理
        events: {
            "click #finish":"_saveConfig"
        },

        //重写父类
        setup: function () {
        	var _this = this;
            configPage.superclass.setup.call(this);
         
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
            
			this._load();
        },
        _load:function(){
        	this._getProvince();
        	this._getDomains();
        },
        _getProvince:function(){
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "both",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
           
        	var _this = this;
        	var url = "/common/getProvince";
        	var param = {};
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "正在为您查询数据..",
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
						i = i + 1;
					}
					provinceInfo.letters = letters;
					provinceInfo.provinces = provinces;
					//alert(JSON.stringify(provinceInfo));
					var provinceHtml = $("#provinceTempl").render(provinceInfo);
					$(".choice-left").html(provinceHtml);
					_this._getCity(null);
				}
			});
        },
        _getCity:function(parent){
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "both",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
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
				message: "正在为您查询数据..",
				url: _base + url,
				data: param,
				success: function (rs) {
					var list = rs.data;
					var cityHtml = $("#cityTempl").render(list);
					$("#cityList").html(cityHtml);
					
				}
			});
        },
        _getDomains:function(){
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "both",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
        	var url = "/common/getDic";
        	var param = {};
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: "正在为您查询数据..",
				url: _base + url,
				data: param,
				success: function (rs) {
					var list = rs.data;
					var dicHtml = $("#dicTempl").render({'dics':list});
					$("#dicUl").html(dicHtml);
					
				}
			});
        },
        _saveConfig:function(){
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "both",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
          var interestStr = "";
          $(".dic").each(function(){
        	  if(this.checked){
        		  interestStr = interestStr + ","+$(this).val();
        	  }
          });
          if(interestStr ==""){
        	  $("#tishiId").text("领域分类至少选择一个");
        	  return;
          }else{
        	  interestStr = interestStr.substring(1,interestStr.length);
          }
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
   		  param.interestStr=interestStr;
   		  param.cityStr=cityStr;
   		  $.ajax({
   			  type:"POST",
   			  url: _base + url,
   			  dataType:"json",
   			  data:param,
   			  success:function(rs){
   				  if(!rs.statusCode){
   					location.href = _base + "/user/login";
   					return;
   				  }
   				  if(rs.statusCode=='1'){
   					location.href = _base + '/home/index';
   				  }else{
   					$("#tishiId").text(rs.statusInfo);  
   				  }
   				  
   			  },
   			  error:function(er){
   				$("#tishiId").text("数据保存中，请等待");
   			  }
   		  });
        }
        
    });

    module.exports = configPage;
});

define('app/jsp/top/header', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
        Widget = require('arale-widget/1.2.0/widget'),
        AjaxController = require('opt-ajax/1.0.0/index');
       	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
       	require("cookie"); 

    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    
    var headerPage = Widget.extend({
        //属性，使用时由类的构造函数传入
        attrs: {
           
        },

        //事件代理
        events: {
            
        },

        //重写父类
        setup: function () {
        	var _this = this; 
        	//初始化菜单选中状态
        	var current = $("#current").val();
        	var current_menu = $.cookie('current_menu');
        	var $a ;
        	var index = 0;
        	if(current!=''){//优先隐藏域
        		index = parseInt(current);
        	}else if(current_menu!=undefined && current_menu!=null && current_menu!=''){
        		index = current_menu*1;
        	}
        	$a = $("#menu").find("a").eq(index);
        	$a.addClass("current");
        	//$a.attr("href","javascript:void(0);");
        	if(index!=1){//专题是其他系统不需要设置
        		$.cookie('current_menu', index,{path:'/'});
        	}
        	this._bindEvent();
        },
        _bindEvent:function(){
        	var _this = this;
        	//昵称
        	$('.mainbav ul .iphone-show').mouseenter(function () {
        		$("#user-show").show(1);
        		$("#data-show").hide(1);
    	    });
    		$("#user-show").click(function () {
    	     $(this).hide(1);
    	    });	
    		$('.mainbav').mouseleave(function () {
    	        $('#user-show').hide(1);
    	    });
        		
        	 $("#user-show ul .ahov3").click(function(){
        		_this._logOut();
        	 });
        	
        	 $("#_searchBtn").click(function(){
         		var _keyword = $("#_keyword").val();
         		if(_keyword!=''){
         			location.href = _base + "/search/view?_keyword="+encodeURI(encodeURI(_keyword));
         		}
         		
         	 });
        	 document.onkeydown = function(e){ 
        		    var ev = document.all ? window.event : e;
        		    if(ev.keyCode==13) {
                    $("#_searchBtn").click();
                    }
        		};
            $("#menu").find("li").eq(2).click(function(){
            	var dataType = $.cookie(_data_type);
            	if(dataType==undefined||dataType==0){
            		window.location.href=_base + "/newsbmap/toHeat";
            	}else{
            		window.location.href=_base + "/social/toHotView";
            	}
            });	
          //语言切换
        	$('.mainbav ul .language').mouseenter(function () {
        		$('#language-show').show(1);
        		$('#data-show').hide(1);
        		$('#user-show').hide(1);
            })
        		$("#language-show").click(function () {
                        $(this).hide(1);
                   });	
        		$('.mainbav').mouseleave(function () {
                $('#language-show').hide(1);
            });
        },
        _logOut:function(){
        	var url="/user/logout"
        		console.log(url);
        	var param={};
        	ajaxController.ajax({
        		type:"post",
        		processing:false,
        		message:"保存数据中，请等待...",
        		url:_base+url,
        		data:param,
        		success:function(rs){
        			location.reload();
        		}
        	});
        },
        _login:function(){
        	$("#loginJumpFormId").attr("action","http://192.168.59.17:8066/sso/login");
        	var curr =  window.location.href;
        	var end = curr.indexOf(_base);
        	var redirect = curr.substring(end,curr.length);
        	redirect = redirect.replace(_base,"");
        	var href = curr.substring(0,end) + _base+"/user/success?redirect="+redirect;
        	$("#loginSuccessUrl").val(href);
        	$('#loginJumpFormId').submit();
        },
        _regist:function(){
        	location.href= 'http://buzz.yeesight.com/register';
        }
    });

    module.exports = headerPage;
});

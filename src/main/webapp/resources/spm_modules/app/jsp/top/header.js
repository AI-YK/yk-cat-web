define('app/jsp/top/header', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
        Widget = require('arale-widget/1.2.0/widget'),
        AjaxController = require('opt-ajax/1.0.0/index');
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
	

    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    
    var headerPage = Widget.extend({
        //属性，使用时由类的构造函数传入
        attrs: {
           
        },

        //事件代理
        events: {
            "click #login":"_login",
            "click #regist":"_regist"
        },

        //重写父类
        setup: function () {
        	var _this = this; 
        	//初始化菜单选中状态
        	var current = $("#current").val();
        	var $a ;
        	if(current==''){
        		$a = $("#menu").find("a").eq(0);
        	}else{
        		var index = parseInt(current);
        		$a = $("#menu").find("a").eq(index);
        	}
        	$a.addClass("current");
        	//$a.attr("href","javascript:void(0);");
        	
            this._bindEvent();
        },
        _bindEvent:function(){
        	var _this = this;
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
        		
        	 $(".ahov3").click(function(){
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
        		}
        },
        _logOut:function(){
        	var url="/user/logout"
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
        	//http://192.168.59.17:8066/sso/login
        	//http://buzz.yeesight.com/login
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

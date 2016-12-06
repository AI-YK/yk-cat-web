define('app/jsp/home', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
        Widget = require('arale-widget/1.2.0/widget'),
        AjaxController = require('opt-ajax/1.0.0/index');
    require("jsviews/jsrender.min");
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
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
			$.i18n.properties({//加载资浏览器语言对应的资源文件
				name: ["home"], //资源文件名称，可以是数组
				path: _i18n_res, //资源文件路径
				mode: 'both',
				language: currentLan,
			});
			this._load();
			
        },
        _load:function(){
        	
        }
        
    });

    module.exports = homePage;
});

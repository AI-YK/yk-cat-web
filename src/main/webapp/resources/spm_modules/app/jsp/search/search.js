define('app/jsp/search/search', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),  
    Widget = require('arale-widget/1.2.0/widget'),
    AjaxController = require('opt-ajax/1.0.0/index');
    var Dialog = require("optDialog/src/dialog");
    require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
	require("jsviews/jsrender.min");
	var SelectUtil = require("app/jsp/search/select");
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    
    var selectUtil = new SelectUtil();

    var searchPage = Widget.extend({
        //属性，使用时由类的构造函数传入
        attrs: {
            clickId:""
        },
        //事件代理
        events: {
          
        },

        //重写父类
        setup: function () {
        	var _this = this;
            configPage.superclass.setup.call(this);
           
        }
    });

    module.exports = searchPage;
});

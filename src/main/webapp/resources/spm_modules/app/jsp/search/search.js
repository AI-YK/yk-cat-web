define('app/jsp/search/search', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),  
    Widget = require('arale-widget/1.2.0/widget'),
    AjaxController = require('opt-ajax/1.0.0/index');
    var Dialog = require("optDialog/src/dialog");
    require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
	require("jsviews/jsrender.min");
	require("bootstrap-paginator/bootstrap-paginator.min");
	require("opt-paging/aiopt.pagination");
	require("twbs-pagination/jquery.twbsPagination.min");
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
        	searchPage.superclass.setup.call(this);
            
            _this.search("news");
           
        },
        _getSearchParams:function(mediaType){
        	var param = {};
        	param.mediaType = mediaType;
        	return param;
        },
        /**媒体类型news/social**/
        search:function(mediaType){
        	var _this = this;
			var url = _base +"/news/getSearchPublicSafety";
			var param = null;
			var pagination;
			var renderId = null;
			var messageId = null;
			if('news'==mediaType){
				param = _this._getSearchParams('news');
				pagination = $("#news-paging");
				renderId = 'news-list';
				messageId = 'news-message';
			}else{
				param = _this._getSearchParams('social');
				pagination = $("#social-paging");
				renderId = 'social-list';
				messageId = 'social-message';
			}		
			pagination.runnerPagination({
				url:url,
				method: "POST",
				dataType: "json",
				messageId:messageId,
				renderId:renderId,
				data : param,
				pageSize: 8,
				visiblePages:5,
				message: "正在为您查询数据..",
				render: function (data) {
					//alert(JSON.stringify(data))
					if('news'==mediaType){
					   var listHtml = $("#levelNewsTempl").render(data);
					   $("#news-list").html(listHtml);
					}else if('social'==mediaType){
						 var listHtml = $("#levelNewsTempl").render(data);	
						 $("#social-list").html(listHtml);
					}
				}
			});
        }
    });

    module.exports = searchPage;
});

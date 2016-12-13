define('app/jsp/search/public',function(require, exports, module) {
			'use strict';
			require("jsviews/jsrender.min");
			var $ = require('jquery'), Widget = require('arale-widget/1.2.0/widget'), AjaxController = require('opt-ajax/1.0.0/index');
			var Dialog = require("optDialog/src/dialog");
			require('jquery-i18n/1.2.2/jquery.i18n.properties.min');
			require("app/util/jsviews-yi");
			require("bootstrap-paginator/bootstrap-paginator.min");
			require("opt-paging/aiopt.pagination");
			require("twbs-pagination/jquery.twbsPagination.min");
			require("my97DatePicker/WdatePicker");
			var SelectUtil = require("app/jsp/search/select");
			// 实例化AJAX控制处理对象
			var ajaxController = new AjaxController();

			var selectUtil = new SelectUtil();

			var publicPage = Widget.extend({
				// 属性，使用时由类的构造函数传入
				attrs : {
					clickId : "",
					model:""
						
				},
				// 事件代理
				events : {

				},

				// 重写父类
				setup : function() {
					var _this = this;
					publicPage.superclass.setup.call(this);
                    this.model = $("#model").val(); 
                    if(this.model=='news'){
                    	$("#le-tba1").show();
                    }else if(this.model=='social'){
                    	$("#le-tba2").show();
                    }else{
                    	$("#le-tba1").show();
                    	$("#le-tba2").show();
                    }
					_this._bindEvent();
					_this._search("news");
					_this._search("social");
					_this._loadTopics();
					selectUtil.initOrgSelect(['orgnizationId1','orgnizationId2']);
					selectUtil.initDicSelect(['dicId1','dicId2']);

				},
				_bindEvent : function() {
					var _this = this;
					$(".level-left-table ul li a").click(function() {
						$(".level-left-table ul li a").each(function() {
							$(this).removeClass("current");
						});
						$(this).addClass("current");
						var index = $('.level-left-table ul li a').index(this);
						if (index == 0) {
							$('#le-tba1').show();
							$('#le-tba2').hide();
						}
						if (index == 1) {
							$('#le-tba2').show();
							$('#le-tba1').hide();
						}
					});
					
					//日期控件
					$(document).on("click",".calendar",function(){
						var timeId = $(this).attr('id');
						WdatePicker({el:timeId,readOnly:true,dateFmt:'yyyy-MM-dd'});
					});
					
					$("#searchBtn1").click(function(){
						_this._search("news");
					});
					$("#searchBtn2").click(function(){
						_this._search("social");
					});
				},
				_getSearchParams : function(mediaType) {
					var param = {};
					param.mediaType = mediaType;
					param.highlight = true;
					var keyword='';
					var fieldName='';
					if ('news' == mediaType) {
						param.sentimentId = $("#sentimentId1").val();
						keyword = $("#keyword1").val();
						fieldName = $("#fieldName1").val();
						
					}else if ('social' == mediaType) {
						param.sentimentId = $("#sentimentId2").val();
						keyword = $("#keyword2").val();
						fieldName = $("#fieldName2").val();
					}
					if(keyword!=''){
						param.keyword = keyword;
					}
					if(fieldName&&fieldName!=''){
						param.fieldName = fieldName;
						param.order = 'desc';
					}
					return param;
				},
				/** 媒体类型news/social* */
				_search : function(mediaType) {
					var _this = this;
					var url = _base + "/news/getSearchPublicSafety";
					var param = {};
					var pagination;
					var renderId = null;
					var messageId = null;
					if ('news' == mediaType) {
						param = _this._getSearchParams('news');
						pagination = $("#news-paging");
						renderId = 'news-list';
						messageId = 'news-message';
					} else {
						param = _this._getSearchParams('social');
						pagination = $("#social-paging");
						renderId = 'social-list';
						messageId = 'social-message';
					}
					
					pagination.runnerPagination({
						url : url,
						method : "POST",
						dataType : "json",
						messageId : messageId,
						renderId : renderId,
						data : param,
						pageSize : 8,
						visiblePages : 7,
						first : false,
						last : false,
						message : "正在为您查询数据..",
						callback:function(data){
							if ('news' == mediaType) {
								$("#news-num").html(data.count);
							}else if ('social' == mediaType) {
								$("#social-num").html(data.count);
							}
						},
						render : function(data) {
							if ('news' == mediaType) {
								$("#news-num").val();
								var listHtml = $("#levelNewsTempl").render(data);
								$("#news-list").html(listHtml);
							} else if ('social' == mediaType) {
								var listHtml = $("#levelSocialTempl").render(data);
								$("#social-list").html(listHtml);
							}
						}
					});
				},
				_loadTopics:function(){
		        	var _this = this;
		        	var url = "/emergency/getHotTopic";
		        	var param = {};
		        	param.pageSize= 10;
		        	param.pageNo = 1;
		        	ajaxController.ajax({
						type: "post",
						processing: false,
						message: "保存数据中，请等待...",
						url: _base + url,
						data: param,
						success: function (rs) {
							var data = rs.data;
							var topicHtml = $("#topicTempl").render(data);
							$("#topic-list").html(topicHtml);
							
						}
					});
		        }
			});

			module.exports = publicPage;
		});

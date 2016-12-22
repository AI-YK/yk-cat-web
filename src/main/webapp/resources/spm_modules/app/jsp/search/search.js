define(
		'app/jsp/search/search',
		function(require, exports, module) {
			//'use strict';
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
			var SearchChart = require("app/jsp/search/charts");
			// 实例化AJAX控制处理对象
			var ajaxController = new AjaxController();

			var selectUtil = new SelectUtil();
			
			var searchChart = new SearchChart();

			var searchPage = Widget.extend({
				// 属性，使用时由类的构造函数传入
				attrs : {
					clickId : ""
				},
				// 事件代理
				events : {
					
				},

				// 重写父类
				setup : function() {
					var _this = this;
					searchPage.superclass.setup.call(this);

					_this._bindEvent();
					_this.search("news");
					_this.search("social");
					_this._loadTopics();
					selectUtil.initOrgSelect(['orgnizationId1','orgnizationId2']);
					selectUtil.initLanguageSelect(['languageId1']);
					selectUtil.initDicSelect(['dicId1','dicId2']);
					
					_this._loadChartData();

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
						WdatePicker({el:timeId,readOnly:true,dateFmt:'yyyy.MM.dd'});
					});
					
					$("#searchBtn").click(function(){
						_this.search("news");
						_this.search("social");
					});
					$("#searchBtn1").click(function(){
						_this.search("news");
					});
					$("#searchBtn2").click(function(){
						_this.search("social");
					});
				},
				_loadChartData:function(){
					var param = {};
					searchChart._queryMediaCoverageTrend(param);
				},
				_getSearchParams : function(mediaType) {
					var param = {};
					param.mediaType = mediaType;
					var keyword = $("#keyword").val();
					if(keyword!=''){
						param.keyword = keyword;
					}
					if ('news' == mediaType) {
						if($("#orgnizationId1").val()!="-1" && $("#orgnizationId1").val()!=null){
							param.provincecityCode= $("#orgnizationId1").val();
						}
						if($("#languageId1").val()!="全部"){
							param.languageCode= $("#languageId1").val();
						}
						if($("#dicId1").val()!="时间"){
							param.dicValue= $("#dicId1").val();
						}
						if($("#timeId1").val()!=""){
							param.beginTime= $("#timeId1").val();
						}
						if($("#medialId1").val()!=""){
							param.mediaLevel=$("#medialId1").val();
						}
						if($("#fileId1").val()!="全部"){
							param.fieldName= $("#fileId1").val();
						}
					}else if ('social' == mediaType) {
						if($("#orgnizationId2").val()!="-1" && $("#orgnizationId2").val()!=null){
							param.provincecityCode= $("#orgnizationId2").val();
						}
						if($("#dicId2").val()!="全部"){
							param.dicValue= $("#dicId2").val();
						}
						if($("#timeId2").val()!=""){
							param.beginTime= $("#timeId2").val();
						}
						if($("#fileId2").val()!="全部"){
							param.fieldName= $("#fileId2").val();
						}
						if($("#medialId2").val()!=""){
							param.mediaLevel= $("#medialId2").val();
						}
						if($("#qingId2").val()!="全部"){
							param.sentimentId= $("#qingId2").val();
						}
					}
					return param;
				},
				/** 媒体类型news/social* */
				search : function(mediaType) {
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
							//alert(JSON.stringify(data));
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

			module.exports = searchPage;
		});

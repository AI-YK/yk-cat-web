define('app/jsp/search/event',function(require, exports, module) {
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

			var eventPage = Widget.extend({
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
					eventPage.superclass.setup.call(this);

					_this._bindEvent();
					_this.search();
					_this._loadTopics();
					
					searchChart._initTimeTrendChart('timeChart',null);
					searchChart._initMediaChart('mediaChart',null);

				},
				_bindEvent : function() {
					var _this = this;
				
				},
				_getSearchParams : function() {
					var param = {};
					
					var keyword = $("#keyword").val();
					if(keyword!=''){
						param.keyword = keyword;
					}
					var provincecityCode = $("#province").val();
					if(provincecityCode!=""){
						param.provinceCode = provincecityCode;
					}
					var idList = $("#cities").val();
					if(idList!=""){
						param.cityCode = idList;
					}
					return param;
				},
				search : function() {
					var _this = this;
					var url = _base + "/emergency/queryEmergencyPage";
					var param = _this._getSearchParams();
					$("#news-paging").runnerPagination({
						url : url,
						method : "POST",
						dataType : "json",
						messageId : 'news-message',
						renderId : 'news-list',
						data : param,
						pageSize : 8,
						visiblePages : 7,
						first : false,
						last : false,
						message : "正在为您查询数据..",
						callback:function(data){
							$("#news-num").html(_this._fdigit(data.count));
						},
						render : function(data) {
							var listHtml = $("#levelNewsTempl").render(data);
							$("#news-list").html(listHtml);
						}
					});
				},
				_loadTopics:function(){
		        	var _this = this;
		        	var url = "/emergency/getHotTopic";
		        	var param = {};
		        	param.pageSize= 10;
		        	param.pageNo = 1;
		        	param.isTimeSort='0'
		        	ajaxController.ajax({
						type: "post",
						processing: false,
						message: "保存数据中，请等待...",
						url: _base + url,
						data: param,
						success: function (rs) {
							var data = rs.data;
							for(var i=0;i<data.length;i++){
								data[i].detailsUrl = _base + "/event/detail/"+ data[i].srcId;
							}
							var topicHtml = $("#topicTempl").render(data);
							$("#topic-list").html(topicHtml);
							
						}
					});
		        },
		        _fdigit:function (s) {  
				    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")) + "";  
				    var l = s.split(".")[0].split("").reverse();  
				    var t = "";  
				    for (i = 0; i < l.length; i++) {  
				        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
				    }  
				    return t.split("").reverse();  
				}  
			});

			module.exports = eventPage;
		});

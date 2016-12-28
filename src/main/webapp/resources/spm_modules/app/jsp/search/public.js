define('app/jsp/search/public',function(require, exports, module) {
			//'use strict';
			require("jsviews/jsrender");
			var $ = require('jquery'), Widget = require('arale-widget/1.2.0/widget'), AjaxController = require('opt-ajax/1.0.0/index');
			var Dialog = require("optDialog/src/dialog");
			require('jquery-i18n/1.2.2/jquery.i18n.properties.min');
			require("app/util/jsviews-yi");
			require("bootstrap-paginator/bootstrap-paginator.min");
			require("opt-paging/aiopt.pagination");
			require("twbs-pagination/jquery.twbsPagination.min");
			require("my97DatePicker/WdatePicker");
			require("cookie"); 
			var moment = require("moment/2.9.0/moment");
			var SelectUtil = require("app/jsp/search/select");
			var SearchChart = require("app/jsp/search/charts");
			// 实例化AJAX控制处理对象
			var ajaxController = new AjaxController();

			var selectUtil = new SelectUtil();
			var searchChart = new SearchChart();

			var publicPage = Widget.extend({
				// 属性，使用时由类的构造函数传入
				attrs : {
					clickId : "",
					model:"",
					_dataType:0
						
				},
				// 事件代理
				events : {
					"change .searchNews":"_searchNews",
					"change .searchSocial":"_searchSocial"
				},

				// 重写父类
				setup : function() {
					var _this = this;
					publicPage.superclass.setup.call(this);
					

					//通用数据  定制数据	
		        	$("#data-show ul .ahov1").click(function(){
		        		$("#topicDiv").hide();
		        		$(".right-list").hide();
		        		$("#commDiv").show();
		        		_this._dataType = 0;
		        		_this._load();
		        	});
		        	$("#data-show ul .ahov3").click(function(){
		        		$("#commDiv").hide();
		        		$("#topicDiv").show();
		        		$(".right-list").show();
		        		_this._dataType = 1;
		        		_this._load();
		        	});	
		        	
		        	 //选择领域
		            $(document).on("click",".domain",function(){
		             	  $(".domain").each(function () {
		                      $(this).removeClass("current");
		                  });
		                  $(this).addClass("current");
		                  _this._load();
		  			});
		        	
		            //选择专题
		            $(document).on("click",".topic",function(){
		             	  $(".topic").each(function () {
		                      $(this).removeClass("current");
		                  });
		                  $(this).addClass("current");
		                  _this._load();
		  			});
		            
		           //更多
		        	$('.right-list  #more').click(function () {
		        		$('#more-show').show(1);
		            })
		        	$("#more-show").click(function () {
		                $(this).hide(1);
		            });	
		        	$('.right-list').mouseleave(function () {
		                $('#more-show').hide(1);
		            });	
		        	
					
                    this.model = $("#model").val(); 
                    if(this.model=='news'){
                    	$("#le-tba1").show();
                    }else if(this.model=='social'){
                    	$("#le-tba2").show();
                    }else{
                    	$("#le-tba1").show();
                    }
					
					var dicSelectConfig = [];
					 dicSelectConfig.push({"id":"dicId1","callback":function(){
						_this._searchNews();
					 }});
					 dicSelectConfig.push({"id":"dicId2","callback":function(){
							_this._searchSocial();
						 }});
					selectUtil.initDicSelect(dicSelectConfig);
					//加载排序下拉
					var sortSelectConfig = [];
					sortSelectConfig.push({"id":"fileId1","callback":function(){
						_this._searchNews();
					 }});
					sortSelectConfig.push({"id":"fileId2","callback":function(){
							_this._searchSocial();
						 }});
					selectUtil.initSortSelect(sortSelectConfig[0],"news");
					selectUtil.initSortSelect(sortSelectConfig[1],"social");
					//加载情感下拉
					var qingSelectConfig= [];
					qingSelectConfig.push({"id":"qingId1","callback":function(){
						_this._searchNews();
					}});
					qingSelectConfig.push({"id":"qingId2","callback":function(){
						_this._searchSocial();
					}});
					selectUtil.initFeelSelect(qingSelectConfig);
					//加载时间选择
					var timeSelectConfig = [];
					timeSelectConfig.push({"id":"timeId1","callback":function(){
						_this._searchNews();
					 }});
					timeSelectConfig.push({"id":"timeId2","callback":function(){
							_this._searchSocial();
						 }});
					selectUtil.initTimeSelect(timeSelectConfig);
					
					_this._bindEvent();
					_this._init();

				},
				_init:function(){
					var dataType = $.cookie(_data_type);
					if(dataType!=undefined&&dataType=='1'){
						this._dataType = 1;
						$("#commDiv").hide();
		        		$("#topicDiv").show();
		        		$(".right-list").show();
					}else{
						this._dataType = 0;
						$("#topicDiv").hide();
		        		$(".right-list").hide();
		        		$("#commDiv").show();
					}
					//初始化领域
					var domainId = $.cookie(_domain_id);
					
					if(domainId==undefined){
						$(".domain").eq(0).addClass("current");
					}else{
						$(".domain").each(function(){
							var id = $(this).attr("id");
							if(id==domainId){
								$(this).addClass("current");
							}
						});
					}
					
					//初始化专题
					var topicId = $.cookie(_topic_id);
					if(topicId==undefined){
						$(".topic").eq(0).addClass("current");
					}else{
						$(".topic").each(function(){
							var len = $(".topic.current").length;
							if(len==0){
								var id = $(this).attr("id");
								var opType = $(this).attr("opType");
					        	var id = $(this).attr("id");
					        	var srcId = $(this).attr("srcId");
					        	if (opType==1&&srcId==topicId||opType!=1&&id==topicId){
					        		$(this).addClass("current");
					        	}	
							}
							
						});
					}
					
					this._load();
					 
				},
				_load:function(){
					var _this = this;
					if(this.model=='news'){
						_this._search("news");
                    }else if(this.model=='social'){
                    	_this._search("social");
                    }else{
                    	_this._search("news");
    					_this._search("social");
                    }
					_this._loadTopics();
					_this._loadChartData();
				},
				_searchNews:function(){
					this._search("news");
				},
				_searchSocial:function(){
					this._search("social");
				},
				_bindEvent : function() {
					var _this = this;
					//数据 
		            $('.mainbav  #shuj').mouseenter(function () {
		        		$('#data-show').show(1);
		        		$('#user-show').hide(1);
		            })
		        	$("#data-show").click(function () {
		                        $(this).hide(1);
		            });	
		        	$('.mainbav').mouseleave(function () {
		                $('#data-show').hide(1);
		            });	
					
					
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
					
					$("#searchBtn1").click(function(){
						_this._search("news");
					});
					$("#searchBtn2").click(function(){
						_this._search("social");
					});
					
					$(document).on("click","#news-list ul li.title",function(){
						var _this = $(this).parent();
		            	var uuid = _this.attr("uuid");
		            	var url =_base+"/news/detail/"+uuid;
		 	        	window.open (url, '_blank' ) ;
					});

					$(document).on("click","#social-list ul li.title",function(){
		            	var _this = $(this).parent();;
		           	    var myid = _this.attr("myid");
		           	    var url =_base+"/social/detail/"+myid;
			        	window.open (url, '_blank' ) ;
		            });
					
					
					selectUtil._mediaSelect('retrieval',function(value){
						_this._searchNews();
					});
					
				},
				 _getTopicId:function(){
			        	var opType = $(".topic.current").attr("opType");
			        	var id = $(".topic.current").attr("id");
			        	var srcId = $(".topic.current").attr("srcId");
			        	if (opType==1)
			        		return srcId 
			        	else 
			        	  return id;	
			     },
				_loadChartData:function(){
					var param = {};

		        	if(this._dataType==0){
		        		var idList = $("#cities").val();
						if(idList!=""){
							param.busCode = idList;
						}
						//领域分类
						var domainId = $(".domain.current").attr("id");
		            	param.categoryId = domainId;
		        	}else if(this._dataType==1){  
		        		var topicId = this._getTopicId();
		        		if(topicId){
		        			param.infoId = topicId;
		        		}
		        	}
		        	
					var nowDate = moment().format('YYYY-MM-DD');
					var pre7Date = moment().add(-6,'days').format('YYYY-MM-DD');
					$("#tDate").html("选择时间："+pre7Date+" 至 "+nowDate);
					$("#mDate").html("选择时间："+pre7Date+" 至 "+nowDate);
					param.endTime = nowDate + " 23:59:59";
					param.beginTime = pre7Date + " 00:00:00";
					searchChart._queryMediaCoverageTrend(param);
				},
				_getSearchParams : function(mediaType) {

					var param = {};
		        	if(this._dataType==0){
		        		param.isTopic = 0;
		        		var provincecityCode = $("#province").val();
						if(provincecityCode!=""){
							param.provincecityCode = provincecityCode;
						}
						var idList = $("#cities").val();
						if(idList!=""){
							param.cityCode = idList;
						}
						var domainId = $(".domain.current").attr("id");
		            	param.categoryId = domainId;
		        	}else if(this._dataType==1){  
		        		param.isTopic = 1;
		        		var topicId = this._getTopicId();
		        		if(topicId){
		        			param.id = topicId;
		        		}
		        	}
					param.mediaType = mediaType;
					
					param.highlight = "true";
					var keyword='';
					if ('news' == mediaType) {
						keyword = $("#keyword1").val();
						var dicId1 = $("#dicId1_input").val();
						if(dicId1&&dicId1!=""){
							param.dicValue= dicId1;
						}
						var begintime=$("#timeId1_begin_input").val();
						var endtime=$("#timeId1_end_input").val();
						if(begintime!="" && endtime!=""){
							param.beginTime=begintime;
							param.endTime=endtime;
						}
						if($("#retrieval-store").val()!=""){
							param.mediaId=$("#retrieval-store").val();
						}
						var fileId1 = $("#fileId1_input").val();
						if(fileId1&&fileId1!=""){
							param.fieldName= fileId1;
							param.order = 'desc';
						}
						if($("#qingId1_input").val()!=""){
							param.sentimentId= $("#qingId1_input").val();
						}
					}else if ('social' == mediaType) {
						keyword = $("#keyword2").val();
						var dicId2 = $("#dicId2_input").val()
						if(dicId2&&dicId2!=""){
							param.dicValue= dicId2;
						}
						
						var begintime=$("#timeId2_begin_input").val();
						var endtime=$("#timeId2_end_input").val();
						if(begintime!="" && endtime!=""){
							param.beginTime=begintime;
							param.endTime=endtime;
						}
						var fileId2 = $("#fileId2_input").val();
						if(fileId2&&fileId2!=""){
							param.fieldName= fileId2;
							param.order = 'desc';
						}
						if($("#medialId2").val()!=""){
							param.mediaLevel= $("#medialId2").val();
						}
						if($("#qingId2_input").val()!=""){
							param.sentimentId= $("#qingId2_input").val();
						}
					}
					if(keyword!=''){
						param.keyword = keyword;
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
						pageSize : 10,
						visiblePages : 7,
						first : false,
						last : false,
						message : "正在为您查询数据..",
						callback:function(data){
							if ('news' == mediaType) {
								$("#news-num").html(_this._fdigit(data.count));
							}else if ('social' == mediaType) {
								$("#social-num").html(_this._fdigit(data.count));
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
		        	var provincecityCode = $("#province").val();
					if(provincecityCode!=""){
						param.provinceCode = provincecityCode;
					}
					var idList = $("#cities").val();
					if(idList!=""){
						param.cityCode = idList;
					}
					//领域分类
					var categoryId = $("#interestes").val();
					if(categoryId!=""){
						param.categoryId = categoryId;
					}
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

			module.exports = publicPage;
		});

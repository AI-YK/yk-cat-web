define(
		'app/jsp/news/social',
		function(require, exports, module) {
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

			var searchPage = Widget.extend({
				// 属性，使用时由类的构造函数传入
				attrs : {
					clickId : "",
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
					searchPage.superclass.setup.call(this);

					_this._bindEvent();
				
					/*selectUtil.initOrgSelect(['orgnizationId1','orgnizationId2']);*/
					selectUtil.initLanguageSelect({"id":"languageId1","callback":function(){
						_this._searchNews();
					 }});
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
					//加载译文下拉
					selectUtil.initTranSelect({"id":"tran","callback":function(){
						//_this._searchNews();
					 }});
					//加载情感下拉
					selectUtil.initFeelSelect({"id":"qingId2","callback":function(){
						_this._searchSocial();
					}});
					//加载时间选择
					var timeSelectConfig = [];
					timeSelectConfig.push({"id":"timeId1","callback":function(){
						_this._searchNews();
					 }});
					timeSelectConfig.push({"id":"timeId2","callback":function(){
							_this._searchSocial();
						 }});
					selectUtil.initTimeSelect(timeSelectConfig);
					//媒体下拉
					selectUtil._mediaSelect("retrieval1",function(){
						_this._searchNews();
					});
					selectUtil._mediaSelect("retrieval2",function(){
						_this._searchSocial();
					});
					
					
					/*_this._getsocialDic();*/
					$(document).on("click","#gengduo",function(){
				    		$('#more-show').toggle();
					});
					$(document).on("click",".topic",function(){
						$('#more-show').hide();
					});
					
					_this._init();
				},
				
				//初始化页面
				_init : function(){
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
				_load : function(){
					this.search("news");
					this.search("social");
				    this._loadTopics();
					this._loadChartData();
				},
				_bindEvent : function() {
					var _this = this;
					//数据 
		            $('.mainbav  #shuj').mouseenter(function () {
		        		$('#data-show').show(1);
		        		$('#user-show').hide(1);
		            });
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
							$('#ditu').show();
						}
						if (index == 1) {
							$('#le-tba2').show();
							$('#le-tba1').hide();
							$('#ditu').hide();
						}
					});
					
					$("#data-show ul .ahov1").click(function(){
						$("#commDiv").show();
						$("#topicDiv").hide();
						_this._dataType = 0;
						_this._load();
					});
					$("#data-show ul .ahov3").click(function(){
						$("#topicDiv").show();
						$("#commDiv").hide();
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
					
					//日期控件
					$(document).on("click",".calendar",function(){
						var timeId = $(this).attr('id');
						WdatePicker({
							el:timeId,
							readOnly:true,
							dateFmt:'yyyy.MM.dd',
							onpicked:function(p){
								if(timeId=="timeId1"){
									_this._searchNews();
								}else if(timeId=="timeId2"){
									_this._searchSocial();
								}
							},
							oncleared:function(p){
								if(timeId=="timeId1"){
									_this._searchNews();
								}else if(timeId=="timeId2"){
									_this._searchSocial();
								}
							}
						});
					});
					
					$("#searchBtn").click(function(){
						_this.search("news");
						_this.search("social");
					});
					
					$(document).on("click","#news-list ul",function(){
						var _this = $(this);
		            	var uuid = _this.attr("uuid");
		            	var url =_base+"/news/detail/"+uuid;
		 	        	window.open (url, '_blank' ) ;
					});

					$(document).on("click","#social-list ul",function(){
		            	var _this = $(this);
		           	    var myid = _this.attr("myid");
		           	    var url =_base+"/social/detail/"+myid;
			        	window.open (url, '_blank' ) ;
		            });
					
					$(document).on("click","#news-type-mainId ul li a",function(){
						$("#news-type-mainId ul li a").each(function(){
							$(this).removeClass("current");
						});
						$(this).addClass("current");
						_this.search("news");
						_this.search("social");
					});
					
				},
				_searchNews:function(){
					this.search("news");
				},
				_searchSocial:function(){
					this.search("social");
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
					param.beginTime = pre7Date + " 00:00:00";
					param.endTime = nowDate + " 23:59:59";
					searchChart._queryMediaCoverageTrend(param);
				},
				_getSearchParams : function(mediaType) {
					var param = {};
					param.mediaType = mediaType;
					if ('news' == mediaType) {
						
						if($("#languageId1_input").val()!="" && $("#languageId1_input").val()!=undefined){
							param.languageCode= $("#languageId1_input").val();
						}
						if($("#dicId1_input").val()!="" && $("#dicId1_input").val()!=undefined){
							param.mediaLevel= $("#dicId1_input").val();
						}
						
						var begintime=$("#timeId1_begin_input").val();
						var endtime=$("#timeId1_end_input").val();
						if(begintime!="" && endtime!=""){
							param.beginTime=begintime;
							param.endTime=endtime;
						}
						if($("#retrieval1-store").val()!=""){
							param.mediaList=$("#retrieval1-store").val();
						}
						if($("#fileId1_input").val()!=""){
							param.fieldName= $("#fileId1_input").val();
							param.order = "desc";
						}
					}else if ('social' == mediaType) {
						
						if($("#dicId2_input").val()!=""){
							param.mediaLevel= $("#dicId2_input").val();
						}
						var begintime=$("#timeId1_begin_input").val();
						var endtime=$("#timeId1_end_input").val();
						if(begintime!="" && endtime!=""){
							param.beginTime=begintime;
							param.endTime=endtime;
						}
						if($("#fileId2_input").val()!=""){
							param.fieldName= $("#fileId2_input").val();
							param.order = "desc";
						}
						if($("#retrieval2-store").val()!=""){
							param.mediaList= $("#retrieval2-store").val();
						}
						if($("#qingId2_input").val()!=""){
							param.sentimentId= $("#qingId2_input").val();
						}
					}
				
		        	if(this._dataType==0){
						//领域分类
						var domainId = $(".domain.current").attr("id");
		            	param.categoryId = domainId;
		        	}else if(this._dataType==1){  
		        		var topicId = this._getTopicId();
		        		if(topicId){
		        			param.id = topicId;
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
						pageSize : 10,
						visiblePages : 7,
						first : false,
						last : false,
						message : "正在为您查询数据..",
						callback:function(data){
							//alert(JSON.stringify(data));
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
		        _getsocialDic:function(){
		        	var url="/common/getDic";
		        	var param={};
		        	ajaxController.ajax({
		        		type:"post",
		        		processing:false,
		        		message:"保存数据中，请等待...",
		        		url:_base+url,
		        		data:param,
		        		success:function(rs){
		        			var data=rs.data;
		        			var dataType = $.cookie(_data_type);
		        			if(dataType=='1'){
		        				var tops=eval("("+topicss+")");
		        				var top1={};
		        				var top2={};
		        				if(tops.length>7){
		        					top1=tops.slice(0,7);
		        					top2=tops.slice(7,tops.length);
		        				}else{
		        					top1=tops;
		        				}
		        				var top=$("#topTempl").render({"tops":top1});
		        				$("#news-type-mainId").html(top);
		        				var v2=$.cookie(_topic_id);
		        				$("#news-type-mainId ul li a").each(function(){
		        					var v1=$(this).next().val();
		        					var opType=$(this).next().next().next().val();
		        					var srcId=$(this).next().next().val();
		        					if(opType==1){
		        						if(srcId==v2 && v2!=undefined){
		        							$(this).addClass("current");
		        						}
		        					}else{
		        						if(v1==v2 && v2!=undefined){
		        							$(this).addClass("current");
		        						}
		        					}
			        			});
		        			}else if(dataType==undefined||dataType=='0'){
		        				var dic=$("#typeTempl").render({"Dic":data});
			        			$("#news-type-mainId").html(dic);
		        			}
		        			
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

			module.exports = searchPage;
		});

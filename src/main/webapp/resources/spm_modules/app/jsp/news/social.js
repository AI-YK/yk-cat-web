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
					clickId : ""
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
					_this.search("news");
					_this.search("social");
					_this._loadTopics();
					selectUtil.initOrgSelect(['orgnizationId1','orgnizationId2']);
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
					
					_this._loadChartData();
					/*_this._getsocialDic();*/
					$(document).on("click","#gengduo",function(){
				    		$('#more-show').toggle();
					});
					$(document).on("click",".topic",function(){
						$('#more-show').hide();
					});
					/*$(document).on("mouseout",".moveul",function(){
						$('#more-show').hide();
					});*/

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
							$('#ditu').show();
						}
						if (index == 1) {
							$('#le-tba2').show();
							$('#le-tba1').hide();
							$('#ditu').hide();
						}
					});
					$("#data-show ul .ahov3").click(function(){
						$("#topcId").show();
						$("#interId").hide();
					});
					$("#data-show ul .ahov1").click(function(){
						$("#interId").show();
						$("#topcId").hide();
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
		            	/*var keyword = _this.attr("keyword");
		 	           	if(keyword){
		 	           		url = url+"?keyword="+encodeURI(encodeURI(keyword));
		 	           	}*/
		 	        	window.open (url, '_blank' ) ;
					});

					$(document).on("click","#social-list ul",function(){
		            	var _this = $(this);
		           	    var myid = _this.attr("myid");
		           	    var url =_base+"/social/detail/"+myid;
		           	    /*var keyword = _this.attr("keyword");
		           	    if(keyword){
			           		url = url+"?keyword="+encodeURI(encodeURI(keyword));
			           	}*/
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
					
					//selectUtil.autocompleteDic('mediaIn1','mediaId1');
					//selectUtil.autocompleteDic('mediaIn2','mediaId2');
					selectUtil.queryMediaName($("#mediaIn1"),'mediaId1');
					selectUtil.queryMediaName($("#mediaIn2"),'mediaId2');
				},
				_searchNews:function(){
					this.search("news");
				},
				_searchSocial:function(){
					this.search("social");
				},
				_loadChartData:function(){
					var param = {};
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
						if($("#orgnizationId1").val()!="-1" && $("#orgnizationId1").val()!=null){
							param.provincecityCode= $("#orgnizationId1").val();
						}
						if($("#languageId1_input").val()!="" && $("#languageId1_input").val()!=undefined){
							param.languageCode= $("#languageId1_input").val();
						}
						if($("#dicId1_input").val()!="" && $("#dicId1_input").val()!=undefined){
							param.dicValue= $("#dicId1_input").val();
						}
						/*var timeStr = $("#timeId1").val();
						if(timeStr!=""){
							timeStr = timeStr.replace(/\./g,"-");
							param.beginTime= timeStr + " 00:00:00";
							param.endTime= timeStr + " 23:59:59";
						}*/
						var begintime=$("#timeId1_begin_input").val();
						var endtime=$("#timeId1_end_input").val();
						if(begintime!="" && endtime!=""){
							param.beginTime=begintime;
							param.endTime=endtime;
						}
						if($("#mediaId1").val()!=""){
							param.mediaId=$("#mediaId1").val();
						}
						if($("#fileId1_input").val()!=""){
							param.fieldName= $("#fileId1_input").val();
							param.order = "desc";
						}
					}else if ('social' == mediaType) {
						if($("#orgnizationId2").val()!="-1" && $("#orgnizationId2").val()!=null){
							param.provincecityCode= $("#orgnizationId2").val();
						}
						if($("#dicId2_input").val()!=""){
							param.dicValue= $("#dicId2_input").val();
						}
						/*var timeStr = $("#timeId2").val();
						if(timeStr!=""){
							timeStr = timeStr.replace(/\./g,"-");
							param.beginTime= timeStr + " 00:00:00";
							param.endTime= timeStr + " 23:59:59";
						}*/
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
						if($("#medialId2").val()!=""){
							param.mediaLevel= $("#medialId2").val();
						}
						if($("#qingId2_input").val()!=""){
							param.sentimentId= $("#qingId2_input").val();
						}
					}
					var dataType = $.cookie(_data_type);
					var current = $("#news-type-mainId ul li .current");
					if(current){
						var categoryId = current.next().val();
						if(categoryId!=undefined&&categoryId!="0"){
							if(dataType==undefined || dataType=="0"){
								param.isTopic="0";
								param.categoryId = categoryId;
							}else{
								if(current.next().next().next().val()==1){
									categoryId=current.next().next().val();
								}
								param.isTopic="1";
								param.id=categoryId;
							}
							
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

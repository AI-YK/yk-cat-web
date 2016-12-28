define("app/jsp/event/eventDetail", function(require, exports, module) {
	var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Dialog = require("optDialog/src/dialog"), 
	AjaxController = require('opt-ajax/1.0.0/index');
	var ajaxController = new AjaxController();
	var Charts = require("app/jsp/home/charts");
	var charts = new Charts();
	var translatePage = require("app/jsp/translate/translate");
	var translate = new translatePage();
	require("app/util/jsviews-yi");
	require("bootstrap-paginator/bootstrap-paginator.min");
	require("opt-paging/aiopt.pagination");
	require("twbs-pagination/jquery.twbsPagination.min");
	var common = require("app/jsp/common/common");
	var eventDetailPage = Widget.extend({
		/* 事件代理 */
		events : {
			 
		},
		/* 重写父类 */
		setup : function() {
			eventDetailPage.superclass.setup.call(this);
			this._init();
		},
		/* 初始化动画 */
		_initAnimation:function(){
			//专题
			$(function () {
			    var st = 100;
			    $('.news-detail-information ul #yuyan').mouseenter(function () {
			  	  	$(this).css("background-image","url("+uedroot+"/images/yy-2.png)");
					$('#typesetting').show(1);
			    });
				$("#typesetting").click(function () {
			           $(this).hide(1);
			           $('.news-detail-information ul #yuyan').css("background-image","url("+uedroot+"/images/yy-1.jpg)");
			     });	
					$('.news-detail-information ul #yuyan').mouseleave(function () {
			        $('#typesetting').hide(1);
			        $('.news-detail-information ul #yuyan').css("background-image","url("+uedroot+"/images/yy-1.jpg)");
			    });	
					//分享
				$(function () {
				  var st = 100;
					$('.news-detail-information ul #share1').mouseenter(function () {
					  	  	$('.news-detail-information ul #share1 .shareicon').css("color","#3382ee");
							$('#share-show').show(1);
					});
				  $("#share-show").click(function () {
					                $(this).hide(1);
					                $('.news-detail-information ul #share1 .shareicon').css("color","#ddd");
					           });	
							$('.news-detail-information ul #share1').mouseleave(function () {
					        $('#share-show').hide(1);
					        $('.news-detail-information ul #share1 .shareicon').css("color","#ddd");
				});		
			 }); 
				 /*解决样式冲突
			$("#typesetting li").css("font-size","12px");
			$("#share-show li").css("font-size","12px");
			var $xiding = $("#xuanf1");
			    $(window).on("scroll",function(){
			        var $this = $(this);
			        var st = $this.scrollTop();
			        if(st>100){
				       $('#xuanf1').css("background","#fff");
				       $('#xuanf1').addClass("additional");
				       $xiding.stop(true,true).show();   
			        }  else {
				       $('#xuanf1').css("background","#fff");
				       $xiding.stop(true,true).show();
				       $('#xuanf1').removeClass("additional");
			        }
			    });*/
		});
		},
		/*处理原文格式*/
		showSrcContent:function(){
			var srcContent = $("#srcContent").html();
			if(srcContent){
				srcContent= srcContent.replace("/<BR//>/g","<br>").split("<br>");
				var html = [];
				for(var i=0;i<srcContent.length;i++){
					html.push("<li>"+srcContent[i]+"</li>");
				}
				$("#eventDetailContent").html(html.join(""));
			}
		},
		/*显示译文*/
		showTranslation:function(){
			//终止上一次
			translate.stopTranslate();
			$("#eventDetailContent").html('');
			this.queryTranslation($("#srcContent").html(),function(json){
				json ="<li>"+json+"</li>";
				$("#eventDetailContent").append(json);
				});
		},
		/*显示原文*/
		showOriginal:function(){
			//终止上一次
			translate.stopTranslate();
			this.showSrcContent();
		},
		/*显示混合*/
		showSynchysis:function(){
			//终止上一次
			translate.stopTranslate();
			$("#translateContent").html('');
			$("#translateTitle").html('');
			this.showSrcContent();
			$('#drag').show();
			this.queryTranslation($("#srcTitle").html(),function(json){
				$("#translateTitle").append(json);
			 });
			this.queryTranslation($("#srcContent").html(),function(json){
				json ="<p>"+json+"</p>";
				$("#translateContent").append(json);
			 });
		},
		//翻译
		queryTranslation:function(text,callBack){
			//目标语言
			var tgtl ="zh";
			var srcLanguage = $("#srcLanguage").val();
			if(srcLanguage=="zh"){
				tgtl ="en";
			}
			var param = {};
			//原语言
			param.srcl=srcLanguage;
        	param.text = text;
        	param.tgtl = tgtl;
        	translate.execTranslate(param,callBack);
		},
		/*图表*/
		_initChart:function(){
			var param ={};
			param.models="timeTrend,spreadTrend";
			param.eventId=$("#srcId").val();
			param.beginDate=$("#beginTime").val();
			param.endDate=$("#endTime").val();
			var configParam ={};
			configParam.backgroundColor='#f2f2f2';
			$.get(_base+"/common/queryEventModel",param,function(json){
				if(json.data&&json.data.timeTrend){
					charts._initTimeTrendChart("timeTrend",json.data.timeTrend,configParam);
				}
				if(json.data&&json.data.spreadTrend){
					charts._initSpreadStateChart("spreadState",json.data.spreadTrend,configParam);
				}
			});

		},
		_bindEvent:function(){
			var _this = this;
			$("#showTranslation").on("click",function(){
				_this.showTranslation();
			});
			$("#showOriginal").on("click",function(){
				_this.showOriginal();
			});
			$("#showSynchysis").off("click").on("click",function(){
				_this.showSynchysis();
			});
			$(document).on("click","#news-list ul li.title",function(){
				var _this = $(this).parent();
            	var uuid = _this.attr("uuid");
            	var url =_base+"/news/detail/"+uuid;
            	/*var keyword = _this.attr("keyword");
 	           	if(keyword){
 	           		url = url+"?keyword="+encodeURI(encodeURI(keyword));
 	           	}*/
 	        	window.open (url, '_blank' ) ;
   			});
		},
		queryEventInformation:function(){
			var srcId = $("#srcId").val();
			if(!srcId){
				return;
			}
			$("#news-paging").runnerPagination({
				url : _base+"/event/queryEventInformation",
				method : "POST",
				dataType : "json",
				messageId : 'news-message',
				renderId : 'news-list',
				data : {"srcId":srcId,"mediaType":"news"},
				pageSize : 10,
				visiblePages : 7,
				first : false,
				last : false,
				message : "正在为您查询数据..",
				callback:function(data){
					$("#news-num").html(data.count);
				},
				render : function(data) {
					var listHtml = $("#levelNewsTempl").render(data);
					$("#news-list").html(listHtml);
				}
			});
		}
		,
		_init:function(){
			this._initAnimation();
			this._bindEvent();
			this._initChart();
			this.showSrcContent();
			this.queryEventInformation();
			common.showSubnav();
		}
		
	});
	module.exports = eventDetailPage;
});
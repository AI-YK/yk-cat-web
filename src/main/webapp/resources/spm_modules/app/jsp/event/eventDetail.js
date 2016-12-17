define("app/jsp/event/eventDetail", function(require, exports, module) {
	var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Dialog = require("optDialog/src/dialog"), 
	AjaxController = require('opt-ajax/1.0.0/index');
	var ajaxController = new AjaxController();
	var Charts = require("app/jsp/home/charts");
	var charts = new Charts();
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
			//解决样式冲突
			$("#typesetting li").css("font-size","12px");
			$("#share-show li").css("font-size","12px");
		});
		},
		/*显示译文*/
		showTranslation:function(){
			this.queryTranslation(function(){
				 $("#eventDetailContent").html('');
				},function(json){
				 $("#eventDetailContent").html(json);
				});
		},
		/*显示原文*/
		showOriginal:function(){
			var text =$("#srcContent").html();
			$("#eventDetailContent").html(text);
		},
		/*显示混合*/
		showSynchysis:function(){
			//debugger;
			this.queryTranslation(function(){
			 $("#translateContent").html('');
			},function(json){
			 $("#eventDetailContent").html($("#srcContent").html());
			 $("#translateContent").html(json);
			 $('#drag').show();
			});
		},
		//翻译
		queryTranslation:function(begin,callBack){
			var text =$("#srcContent").html();
			begin();
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
        	ajaxController.ajax({
				type: "post",
				processing: true,
				message: " ",
				url: _base+"/common/translate",
				data: param,
				success: function (json) {
					callBack(json);
				}
			});
		},
		/*图表*/
		_initChart:function(){
			var param ={};
			param.models="timeTrend";
			param.eventId=$("#srcId").val();
			$.get(_base+"/common/queryEventModel",param,function(json){
				if(json.data&&json.data.timeTrend){
					var configParam ={};
					configParam.backgroundColor='#f2f2f2';
					charts._initTimeTrendChart("timeTrend",json.data.timeTrend,configParam);
					var data = [];
					
					charts._initSpreadStateChart("spreadState",data,configParam);
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
		},
		_init:function(){
			this._initAnimation();
			this._bindEvent();
			this._initChart();
		}
		
	});
	module.exports = eventDetailPage;
});
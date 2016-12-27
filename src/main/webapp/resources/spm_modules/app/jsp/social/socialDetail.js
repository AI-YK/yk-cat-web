define("app/jsp/social/socialDetail", function(require, exports, module) {
	var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Dialog = require("optDialog/src/dialog"), 
	AjaxController = require('opt-ajax/1.0.0/index');
	var ajaxController = new AjaxController();
	var translatePage = require("app/jsp/translate/translate");
	var translate = new translatePage();
	var yiConfig = require("app/util/jsviews-yi");
	require("jsviews/jsrender.min");
	var common = require("app/jsp/common/common");
	var socialDetailPage = Widget.extend({
		/* 事件代理 */
		events : {
			 
		},
		/* 重写父类 */
		setup : function() {
			socialDetailPage.superclass.setup.call(this);
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
			    });
		});
		},
		/*处理原文格式*/
		showSrcContent:function(){
			var srcContent = $("#srcContent").html();
			if(srcContent){
				srcContent= srcContent.replace("<BR/>","<br>").split("<br>");
				var html = [];
				for(var i=0;i<srcContent.length;i++){
					html.push("<li>"+srcContent[i]+"</li>");
				}
				$("#newsDetailContent").html(html.join(""));
			}
		},
		/*显示译文*/
		showTranslation:function(){
			//终止上一次
			translate.stopTranslate();
			$("#newsDetailContent").html('');
			this.queryTranslation($("#srcContent").html(),function(json){
				json ="<li>"+json+"</li>";
				$("#newsDetailContent").append(json);
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
			$(document).on("click","#relatedInformation ul",function(){
				var _this = $(this);
            	var uuid = _this.attr("uuid");
            	var url =_base+"/news/detail/"+uuid;
            	/*var keyword = _this.attr("keyword");
 	           	if(keyword){
 	           		url = url+"?keyword="+encodeURI(encodeURI(keyword));
 	           	}*/
 	        	window.open (url, '_blank' ) ;
   			});
		},
		queryRelatedInformation:function(){
			var keyword = $("#keyword").val();
			var html='<div  class="not-query pt-20 pb-20"><li class="dialog-icon-notquery"></li><li>抱歉没有查询到相关数据</li></div>';
			
			if(!keyword){
				$("#relatedInformation").html(html);
				return;
			}
			var temp = keyword.split(",");
			var tempArray =[];
			for(var i=0;i<temp.length;i++){
				if(i>2){
					break;
				}
				tempArray.push(temp[i]);
			}
			keyword = tempArray.join(",");
			var param ={};
			param.srcTitle = keyword;
			$.post(_base+"/news/queryRelatedInformation",param,function(json){
				if(json&&json.length>0){
					 html = $("#relatedInformationTempl").render(json);
				}
				$("#relatedInformation").html(html);
			});
		},
		_init:function(){
			var sourceType = $("#sourceType");
			var source = sourceType.html();
			source=yiConfig.convertSource(source);
			//转换来源
			sourceType.html(source);
			this._initAnimation();
			this._bindEvent();
			this.showSrcContent();
			this.queryRelatedInformation();
			common.showSubnav();
		}
		
	});
	module.exports = socialDetailPage;
});
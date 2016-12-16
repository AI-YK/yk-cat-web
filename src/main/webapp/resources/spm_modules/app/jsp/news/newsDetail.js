define("app/jsp/news/newsDetail", function(require, exports, module) {
	var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Dialog = require("optDialog/src/dialog"), 
	AjaxController = require('opt-ajax/1.0.0/index');
	
	var newsDetailPage = Widget.extend({
		/* 事件代理 */
		events : {
			 
		},
		/* 重写父类 */
		setup : function() {
			newsDetailPage.superclass.setup.call(this);
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
		/*查询分享收藏数*/
		_queryCollOrShareCount:function(){
			$.get(_base+"/news/collOrShareCount",{'id':newsDetailsId},function(json){
				if(json.shareCount!=""){
					$("#collCount").html(json.shareCount);
				}
			});
		},
		/*收藏操作*/
		_collectionHandle:function(type){
			$.get(_base+"/news/collectionHandle",{'id':newsDetailsId,"type":type},function(json){
				if(3==type){
				//查询是否收藏
					console.log(JSON.stringify(json));
				}
			});
		},
		_init:function(){
			this._initAnimation();
			this._queryCollOrShareCount();
			this._collectionHandle(3);
			$("#gotsina").on("click",function(){
				alert("aa");
			});
		}
		
	});
	module.exports = newsDetailPage;
});
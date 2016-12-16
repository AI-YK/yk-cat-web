define("app/jsp/news/newsDetail", function(require, exports, module) {
	var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Dialog = require("optDialog/src/dialog"), 
	AjaxController = require('opt-ajax/1.0.0/index');
	var ajaxController = new AjaxController();
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
		/*显示译文*/
		showTranslation:function(){
			alert("译文");
		},
		/*显示原文*/
		showOriginal:function(){
			$('#drag').show();
		},
		/*显示混合*/
		showSynchysis:function(){
			//debugger;
			this.queryTranslation();
			$('#drag').show();
		},
		//翻译
		queryTranslation:function(){
			var text ='新华社北京12月16日（韩洁、王优玲）16日闭幕的中央经济工作会议明确了2017年中国楼市发展方向，强调要促进房地产市场平稳健康发展，坚持“房子是用来住的，不是用来炒的”的定位，综合运用金融、土地、财税、投资、立法等手段，加快研究建立符合国情、适应市场规律的基础性制度和长效机制，既抑制房地产泡沫，又防止出现大起大落。'

				　　+'“这意味着决策层进一步明晰了我国房地产市场的定位，强调房地产发展的首要目标是实现‘住有所居’，让住房回归其居住属性。”中国社科院城市与竞争力研究中心主任倪鹏飞说，将房地产业定位为支撑经济社会发展的民生产业，有助于挤出泡沫，促进市场健康平稳发展。'

				　　　+'2016年，部分一二线热点城市房价一度迅猛上涨，专家指出其背后与巨额资金涌入楼市直接相关，与货币、信贷政策的宽松有直接关系。';
			
			var param = {};
        	param.text = text;
        	ajaxController.ajax({
				type: "post",
				processing: true,
				message: "翻译中...",
				url: _base+"/common/translate",
				data: param,
				success: function (json) {
					$("#translateContent").html('<p>'+json+'</p>');
				}
			});
		},
		/*查询分享收藏数*/
		_queryCollOrShareCount:function(){
			/*$.get(_base+"/news/collOrShareCount",{'id':newsDetailsId},function(json){
				if(json.shareCount!=""){
					$("#collCount").html(json.shareCount);
				}
			});*/
		},
		/*收藏操作*/
		_collectionHandle:function(type){
			/*$.get(_base+"/news/collectionHandle",{'id':newsDetailsId,"type":type},function(json){
				if(3==type){
				//查询是否收藏
					console.log(JSON.stringify(json));
				}
			});*/
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
			//this._queryCollOrShareCount();
			//this._collectionHandle(3);
			/*$("#gotsina").on("click",function(){
				alert("aa");
			});*/
		}
		
	});
	module.exports = newsDetailPage;
});
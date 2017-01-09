define("app/jsp/translate/translate", function(require, exports, module) {
	var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Dialog = require("optDialog/src/dialog"), 
	AjaxController = require('opt-ajax/1.0.0/index');
	var ajaxController = new AjaxController();
	var currentAjax  = null;
	var translatePage = Widget.extend({
		/* 事件代理 */
		events : {
			 
		},
		/* 重写父类 */
		setup : function() {
			translatePage.superclass.setup.call(this);
		},
		/* 翻译 */
		execTranslateNews:function(param,callBack){
			var dataArray = param.text.replace("/<BR/>/g","<br>").split("<br>");
			this.sendTranslate(dataArray, param, callBack);
		},
		execTranslateSocial:function(param,callBack){
			var dataArray = param.text.replace(/。/g,"<br>").split("<br>");
			this.sendTranslate(dataArray, param, callBack);
		},
		/*异步翻译内容*/
		sendTranslate:function(dataArray,param,callBack){
			var _this = this;
			//移除第一个元素
			if(dataArray&&dataArray.length>0){
				param.text=dataArray.shift();
			}else{
				return;
			}
			currentAjax = $.ajax({
				type: "post",
				processing: false,
				message: " ",
				url: _base+"/common/translate",
				data: param,
				success: function (json) {
					//执行回调
					callBack(json);
					//继续请求
					_this.sendTranslate(dataArray, param, callBack);
				}
			});
		},
		stopTranslate:function(){
			if(currentAjax) {
				currentAjax.abort();
			}  
		}
 });
 module.exports = translatePage;
});
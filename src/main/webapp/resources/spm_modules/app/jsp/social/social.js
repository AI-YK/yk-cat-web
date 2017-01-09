define("app/jsp/social/social", function(require, exports, module) {
	var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Dialog = require("optDialog/src/dialog"), 
	AjaxController = require('opt-ajax/1.0.0/index');
	var ajaxController = new AjaxController();
	
	var socialPage = Widget.extend({
		/* 事件代理 */
		events : {
			 
		},
		/* 重写父类 */
		setup : function() {
			var _this = this;
			socialPage.superclass.setup.call(this);
			_this._one();
		},
		_one:function(){
			$("#news-type-mainId ul li a").click(function(){
				alert("111");
			});
		}
		
	});
	module.exports = socialPage;
});
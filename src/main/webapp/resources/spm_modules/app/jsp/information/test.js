define("app/jsp/information/test", function(require, exports, module) {
	var $ = require('jquery'), 
	Widget = require('arale-widget/1.2.0/widget'), 
	Dialog = require("optDialog/src/dialog"), 
	AjaxController = require('opt-ajax/1.0.0/index');
	
	var testPage = Widget.extend({
		/* 事件代理 */
		events : {
			 
		},
		/* 重写父类 */
		setup : function() {
			testPage.superclass.setup.call(this);
			this._init();
		},
		_init:function(){
			
		}
		
	});
	module.exports = testPage;
});
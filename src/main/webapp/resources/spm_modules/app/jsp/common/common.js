define("app/jsp/common/common", function(require, exports, module) {
	var $ = require('jquery');
	require("cookie"); 
	/*展示面包屑导航*/
	exports.showSubnav = function() {
		var a = $("#menu li a.current");
		
		var html = [];
		html.push('<a href="'+_base+'">首页</a>');
        if(a.html()!='首页'){
        	html.push('> <a href="'+a.attr("href")+'">'+a.html()+'</a>');	
		}
		$("#p_subnav").html(html.join(""));
	};
});
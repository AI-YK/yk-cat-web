define(function (require, exports, module) {

	require("jsviews/jsrender");
	require("jsviews/jsviews");
	var AjaxController = require('opt-ajax/1.0.0/index');
	var ajaxController = new AjaxController();
	
	var colorMap = new jMap();
	colorMap.put("0", "red");
	colorMap.put("1", "orange");
	colorMap.put("2", "yellow");
	colorMap.put("defualt", "blue");
	
	var socialIconMap = new jMap();
	socialIconMap.put("weibo", "&#xe65e;");
	socialIconMap.put("weixin", "&#xe65c;");
	socialIconMap.put("twitter", "&#xe65d;");
	socialIconMap.put("facebook", "&#xe660;");
	
	
	/**
	 * 获取订单后厂状态名称
	 */
	$.views.helpers({
		"getRankColor": function (transfer){	
			if(transfer<100){
				return "blue";
			}else if(transfer>=100&&transfer<1000){
				return "yellow";
			}else if(transfer>=1000&&transfer<10000){
				return "orange";
			}else if(transfer>=10000){
				return "red";
			}
			return "";
		 },
		 "getRankIndex": function (transfer){	
			 if(transfer<100){
					return "4";
			 }else if(transfer>=100&&transfer<1000){
					return "3";
			 }else if(transfer>=1000&&transfer<10000){
					return "2";
			 }else if(transfer>=10000){
					return "1";
			 }
		  },
		 "getSocialIcon": function (social){	
		        return socialIconMap.get(social);
		  }
	});
	
	
	
	function jMap(){
        //私有变量
        var arr = {};
        //增加
        this.put = function(key,value){
            arr[key] = value;
        }
        //查询
        this.get = function(key){
            if(arr[key]){
                return arr[key]
            }else{
                return null;
            }
        }
        //删除
        this.remove = function(key){
            //delete 是javascript中关键字 作用是删除类中的一些属性
            delete arr[key]
        }
        //遍历
        this.eachMap = function(fn){
            for(var key in arr){
                fn(key,arr[key])
            }
        }
    }

});

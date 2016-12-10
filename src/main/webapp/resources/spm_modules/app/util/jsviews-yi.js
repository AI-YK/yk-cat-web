define(function(require, exports, module) {

	require("jsviews/jsrender");
	require("jsviews/jsviews");
	require("app/util/date");
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

	var sourceMap = new jMap();
	sourceMap.put("weixin", "微信");
	sourceMap.put("weibo", "微博");
	sourceMap.put("twitter", "twitter");
	sourceMap.put("facebook", "facebook");
	
	/**
	 * 获取订单后厂状态名称
	 */
	$.views.helpers({
		"conventSource": function(val){
			return sourceMap.get(val);
		},
		
		/* 自定义展示时间 */
		"getCustomTime" : function(time) {
			//time ='2016-12-10 14:00:00';
			//debugger;
			try {
				var date;
				if(!isNaN(time)){//数字long类型
					date = new Date(time);
				}else{
					//处理传入时间字符串
					var str = time;
					str = str.replace(/-/g, "/");
					date = new Date(str);
				}
			
				var now = new Date();
				//时间差
				var diffValue = (now.getTime())-(date.getTime());
				diffValue = diffValue/1000;
				var minute = 1 * 60;
				var hour = minute * 60;
				var day = hour * 24;
				//var halfamonth = day * 15;
				//var month = day * 30;
				//var monthC = diffValue / month;
				//var weekC = diffValue / (7 *day);
				var dayC = diffValue / day;
				var hourC = diffValue / hour;
				var minC = diffValue / minute;
				/*if (monthC >= 1) {
					result = "发表于" + parseInt(monthC) + "个月前";
				} else if (weekC >= 1) {
					result = "发表于" + parseInt(weekC) + "周前";
				} */
				
				if (dayC >=1 && dayC < 2) {
					result = parseInt(dayC)+ "天前";
				} else if (hourC >= 1 && hourC<24) {
					result = parseInt(hourC) + "小时前";
				} else if (minC >= 1 && minC<60) {
					result = parseInt(minC)+ "分钟前";
				} else if (diffValue>0 && diffValue < 60) {
					result = "刚刚";
				}else{
					result=date.format("yyyy-MM-dd")
				}
				return result;
			} catch (e) {

			}
			return time;
		},
		"getRankColor" : function(transfer) {
			if (transfer < 100) {
				return "blue";
			} else if (transfer >= 100 && transfer < 1000) {
				return "yellow";
			} else if (transfer >= 1000 && transfer < 10000) {
				return "orange";
			} else if (transfer >= 10000) {
				return "red";
			}
			return "";
		},
		"getRankIndex" : function(transfer) {
			if (transfer < 100) {
				return "4";
			} else if (transfer >= 100 && transfer < 1000) {
				return "3";
			} else if (transfer >= 1000 && transfer < 10000) {
				return "2";
			} else if (transfer >= 10000) {
				return "1";
			}
		},
		"getSocialIcon" : function(social) {
			return socialIconMap.get(social);
		}
	});

	function jMap() {
		// 私有变量
		var arr = {};
		// 增加
		this.put = function(key, value) {
			arr[key] = value;
		}
		// 查询
		this.get = function(key) {
			if (arr[key]) {
				return arr[key]
			} else {
				return null;
			}
		}
		// 删除
		this.remove = function(key) {
			// delete 是javascript中关键字 作用是删除类中的一些属性
			delete arr[key]
		}
		// 遍历
		this.eachMap = function(fn) {
			for ( var key in arr) {
				fn(key, arr[key])
			}
		}
	}

});

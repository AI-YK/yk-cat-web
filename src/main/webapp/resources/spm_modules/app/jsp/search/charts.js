define('app/jsp/search/charts', function(require, exports, module) {
	'use strict';
	var $ = require('jquery');
	require("echarts/echarts.min");
	var Base = require('arale-base/1.2.0/base');

	var SearchChart = Base.extend({
		// 重写父类
		setup : function() {
			SearchChart.superclass.setup.call(this);
		},

		// 时间态势
		_initTimeTrendChart : function(container, data) {
			var categorys = [ '12-10', '12-11', '12-12', '12-13', '12-14' ];
			var values = [ 5000, 2500, 9000, 7500, 6500 ];
			var option = {
				calculable : true,
				backgroundColor : '#f2f2f2',
				tooltip : {
					trigger : 'item',
					backgroundColor : '#e6ebf2',
					borderColor : '#6ca3ef',
					borderWidth : 0.5,
					formatter : '{b}</br>{a}:{c}',
					textStyle : {
						color : '#999999',
						baseline : 'top',
						fontSize : 12
					}
				},
				grid : {
					x : 50,
					y : 30,
					x2 : 30,
					y2 : 30
				},

				xAxis : [ {
					type : 'category',
					boundaryGap : false,
					data : categorys,
					axisLine : {
						lineStyle : {
							color : '#d0cfcf',
							width : 1.4
						}
					},
					axisTick : {
						inside : true,
						length : 3,
						lineStyle : {
							color : '#d0cfcf'
						}
					},
					axisLabel : {
						textStyle : {
							color : '#666666',
							fontSize : 12
						}
					}
				} ],
				yAxis : [ {
					type : 'value',
					axisTick : {
						show : false
					},
					axisLabel : {
						margin : 2,
						textStyle : {
							color : '#666666',
							fontSize : 13,
							align : 'right'
						}
					},
					axisLine : {
						lineStyle : {
							color : '#d0cfcf',
							width : 1.2
						}
					},
					splitLine : {
						lineStyle : {
							type : 'dashed',
							color : '#d0cfcf',
							width : 0.5
						}
					}
				} ],
				series : [ {
					name : '信号量',
					type : 'line',
					data : values,
					smooth : true,
					itemStyle : {
						normal : {
							color : '#3a86ee',
							lineStyle : {
								color : '#3a86ee'
							}
						}
					}
				} ]
			};
			var chart = echarts.init(document.getElementById(container));
			chart.setOption(option);
		},
		_initMediaChart : function(container, data) {
			var _this = this;
			var categorys = [ '华龙网', '人民网', '新华网', '四川新闻网', '中国兰州网' ];
			var values = [ 7893, 10040, 11640, 42940, 42940 ];
			var option = {
				calculable : true,
				backgroundColor : '#f2f2f2',
				grid : {
					x : 70,
					y : 30,
					x2 : 30,
					y2 : 30
				},
				tooltip : {
					trigger : 'item',
					backgroundColor : '#e6ebf2',
					borderColor : '#6ca3ef',
					borderWidth : 0.5,
					formatter : '{b}</br>{a}:{c}',
					textStyle : {
						color : '#999999',
						baseline : 'top',
						fontSize : 12
					}
				},
				xAxis : [ {
					type : 'value',
					axisLine : {
						lineStyle : {
							color : '#d0cfcf',
							width : 1.4
						}
					},
					splitLine : {
						show : false
					},
					axisTick : {
						inside : true,
						length : 2,
						lineStyle : {
							color : '#d0cfcf'
						}
					},
					axisLabel : {
						textStyle : {
							color : '#666666',
							fontSize : 12
						}
					}
				} ],
				yAxis : [ {
					type : 'category',
					data : categorys,
					axisTick : {
						show : false
					},
					axisLine : {
						lineStyle : {
							color : '#d0cfcf',
							width : 1.2
						}
					},
					splitLine : {
						show : true,
						lineStyle : {
							type : 'dashed',
							color : '#d0cfcf',
							width : 0.5
						}
					},
					axisLabel : {
						margin : 2,
						textStyle : {
							color : '#666666',
							fontSize : 13,
							align : 'right'
						}
					}
				} ],
				series : [ {
					name : '媒体统计',
					type : 'bar',
					data : values,
					barMaxWidth : 22,
					itemStyle : {
						normal : {
							color : '#3a86ee',
							barBorderRadius : [0,5,5,0],
							barBorderWidth:1,
							label : {
								show : true,
								position : 'right',
								formatter: function(p){				
									return _this.formatNum(p.value);
								},
								textStyle : {
									color : '#666666',
									fontSize : 13
								}
							}
						}
					}
				} ]
			};
			var chart = echarts.init(document.getElementById(container));
			chart.setOption(option);
		},
		formatNum : function(strNum) {
			if (strNum.length <= 3) {
				return strNum;
			}
			if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
				return strNum;
			}
			var a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;
			var re = new RegExp();
			re.compile("(\\d)(\\d{3})(,|$)");
			while (re.test(b)) {
				b = b.replace(re, "$1,$2$3");
			}
			return a + "" + b + "" + c;
		}

	});

	module.exports = SearchChart;
});

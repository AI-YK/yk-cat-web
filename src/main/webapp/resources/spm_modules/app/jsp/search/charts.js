define('app/jsp/search/charts', function(require, exports, module) {
	'use strict';
	var $ = require('jquery');
	require("echarts/echarts.min");
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
	var Base = require('arale-base/1.2.0/base');
	var AjaxController = require('opt-ajax/1.0.0/index');
	var ajaxController = new AjaxController();


	var SearchChart = Base.extend({
		// 重写父类
		setup : function() {
			SearchChart.superclass.setup.call(this);
			// 初始化国际化
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "both",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: true 
			 });
		},

		// 时间态势
		_initTimeTrendChart : function(container, data) {
			if(!data){
				return;
			}
			var categorys = [];
			var values = [];
			for(var i=0;i<data.length;i++){
				categorys[i] = data[i].date;
				values[i] = data[i].count;
			}
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
					x2 : 35,
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
						interval:'auto',
						textStyle : {
							color : '#666666',
							fontSize : 12,
							align : 'center'
						},
						formatter:function(value, index){
							if(value.length>10){
								return value.substring(0,10);
							}
							return value;
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
					name : $.i18n.prop('search.charts.signal'),
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
			if(!data){
				return;
			}
			var categorys = [];
			var values = [];
			var len = data.length;
			if(len>8){
				len = 8;
			}
			for(var i=0;i<len;i++){
				var mediaName = data[i].mediaName;
				if(mediaName.length>5){
					mediaName = mediaName.substring(0,5);
				}
				categorys[i] = mediaName;
				values[i] = data[i].count;
			}
			var xData = [];
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
						},
						formatter : function(val) {
							xData.push(val);
							if (val > 10000) {
								return val / 10000 + "W";
							} else {
								return val;
							}

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
				}],
				series : [ {
					name:$.i18n.prop('search.charts.event'),
					type : 'bar',
					data : values,
					barMaxWidth : 24,
					itemStyle : {
						normal : {
							color : '#3a86ee',
							barBorderRadius : [ 0, 6, 6, 0 ],
							barBorderWidth : 1,
							label : {
								show : true,
								position : 'right',
								formatter : function(p) {
									return _this.formatNum(p.value);
								},
								textStyle : {
									color : '#666666',
									fontSize : 13,
									align:'center'
								}
							}
						}
					}
				} ]
			};
			
			var chart = echarts.init(document.getElementById(container));
			chart.setOption(option);
			var diff = 0
			if(xData.length>1){
				diff = xData[1]-xData[0];
			}
			var max = xData[xData.length-1] + diff;
			var temps = [];
			for(var i=0;i<values.length;i++){
				temps[i] = max;
			}
			option.series.push({
				type : 'bar',
				silent : true,
				yAxisIndex : 1,
				data : temps,
				barMaxWidth : 24,
				itemStyle : {
					normal : {
						color : '#d8d8d8',
						barBorderRadius : [ 0, 6, 6, 0 ],
						barBorderWidth : 1
					}
				}
			});
			option.series.reverse();
			option.yAxis.push({
				// 辅助 y 轴
				show : false,
				data : categorys
			});
			chart.clear();
			
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
		},
		_queryMediaCoverageTrend:function(param){
			var _this = this;
        	var url = "/trend/queryMediaCoverageTrend";
        	param.modelNo = "listMedia,listNST";
        	ajaxController.ajax({
				type: "post",
				processing: false,
				message: $.i18n.prop('detail.find.data')+"..",
				url: _base + url,
				data: param,
				success: function (rs) {
					var data = rs.data;
					_this._initTimeTrendChart('timeChart',data.listNST);
					_this._initMediaChart('mediaChart',data.listMedia);
				}
			});
        }

	});

	module.exports = SearchChart;
});

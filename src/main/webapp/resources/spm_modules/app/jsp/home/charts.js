define('app/jsp/home/charts', function (require, exports, module) {
    'use strict';
    var $=require('jquery');
	require("echarts/echarts.min");
	var  Base = require('arale-base/1.2.0/base');
 
    var HomeChart = Base.extend({
        // 重写父类
        setup: function () {
        	HomeChart.superclass.setup.call(this); 
        },
        // 传播态势
        _initSpreadStateChart:function(container,data,configParam){
        	if(!configParam){
        		configParam ={};
        	}
        	//背景色
        	var backgroundColor ='#212532';
        	if(configParam.backgroundColor){
        		backgroundColor =configParam.backgroundColor;
        	}
        	var edata2 = {};
    		edata2.media = [ '网易', '新华网', '搜狐网', 'BBC', 'CNN' ];
    		edata2.time = [ '10-08', '10-09', '10-10', '10-11' ];
    		edata2.data = [ [ 52.0, 94.9, 94.9 ], [ 86.0, 18.9, 94.9 ],
    				[ 112.0, 14.9, 94.9 ], [ 32.0, 154.9, 94.9 ],
    				[ 32.0, 154.9, 94.9 ], [ 32.0, 154.9, 94.9 ] ];
        	var chart = echarts.init(document.getElementById(container));
        	var series = [];
        
			var option = {
				color : [ '#174879' ],
				backgroundColor : backgroundColor,
				tooltip : {
					show : false,
					trigger : 'axis'
				},
				 grid : {
 					x : 25,
 					y : 15,
 					x2 : 0,
 					y2 : 25
 				},
				legend : {
					show : false,
					data : edata2.media
				},
				xAxis : [ {
					axisLabel : {
						margin:10,
						textStyle : {
							color : '#697398',
							fontSize:13
						}
					},
					axisLine:{
  					  lineStyle:{
  					    color:'#3a415a',
  						width:2
  					  }
  					},
  					axisTick : {
						show:false
					},
					type : 'category',
					data : edata2.time
				} ],
				yAxis : [ {
					type : 'value',
					splitNumber : 3,
					axisLabel : {
						margin : 10,
						textStyle : {
							color : '#697398',
							fontSize:13
						},
						formatter : function(value, index) {
							switch (index) {
							case 0:
								return 0;
							case 1:
								return "低";
//								return "热 ";
							case 2:
								return "中";
//								return "热度或转载量中";
							case 3:
								return "高";
//								return "热度或转载量高";
							}
						}
					},
					axisLine : {
						show : false
					},
					axisTick : {
						show : false
					},
					splitLine : {
						lineStyle : {
							color : '#3a415a',
							type: 'dashed'
						}
					}
				} ],
				series : [ {
					name : edata2.media[0],
					type : 'bar',
					barWidth : 1,
					barGap : '17px',
					label : {
						normal : {
							show : true,
							color:'#3382ee',
							position : 'top',
							formatter : function(param) {
								var arry = param.seriesName.split('');
								var str = '';
								if (arry.length > 3) {
									for (var i = 0; i < 3; i++) {
										str += arry[i] + '\n';
									}
								} else {
									str = arry.join('\n') + '\n'
								}
								return str;
							},
							textStyle : {
								color : '#55739e'
							}
						}
					},
					markPoint : {
						symbol : 'circle',
						symbolSize : 7,
						label : {
							normal : {
								show : false
							}
						},
						itemStyle : {
							normal : {
								color : '#b72f61'
							}
						},
						data : [ {
							yAxis : edata2.data[0][0],
							xAxis : edata2.time[0]
						}, {
							yAxis : edata2.data[0][1],
							xAxis : edata2.time[1]
						}, {
							yAxis : edata2.data[0][2],
							xAxis : edata2.time[2]
						} ]
					},
					data : edata2.data[0]
				}, {
					name : edata2.media[1],
					type : 'bar',
					barWidth : 1,
					barGap : '17px',
					label : {
						normal : {
							show : true,
							position : 'top',
							formatter : function(param) {
								var arry = param.seriesName.split('');
								var str = '';
								if (arry.length > 5) {
									for (var i = 0; i < 5; i++) {
										str += arry[i] + '\n';
									}
								} else {
									str = arry.join('\n') + '\n'
								}
								return str;
							},
							textStyle : {
								color : '#55739e'
							}
						}
					},
					markPoint : {
						symbol : 'circle',
						symbolSize : 7,
						label : {
							normal : {
								show : false
							}
						},
						itemStyle : {
							normal : {
								color : '#ee9245'
							}
						},
						data : [ {
							yAxis : edata2.data[1][0],
							xAxis : edata2.time[0]
						}, {
							yAxis : edata2.data[1][1],
							xAxis : edata2.time[1]
						}, {
							yAxis : edata2.data[1][2],
							xAxis : edata2.time[2]
						} ]
					},
					data : edata2.data[1]
				}, {
					name : edata2.media[2],
					type : 'bar',
					barWidth : 1,
					barGap : '17px',
					label : {
						normal : {
							show : true,
							position : 'top',
							formatter : function(param) {
								var arry = param.seriesName.split('');
								var str = '';
								if (arry.length > 5) {
									for (var i = 0; i < 5; i++) {
										str += arry[i] + '\n';
									}
								} else {
									str = arry.join('\n') + '\n'
								}
								return str;
							},
							textStyle : {
								color : '#55739e'
							}
						}
					},
					markPoint : {
						symbol : 'circle',
						symbolSize : 7,
						label : {
							normal : {
								show : false
							}
						},
						itemStyle : {
							normal : {
								color : '#edde53'
							}
						},
						data : [ {
							yAxis : edata2.data[2][0],
							xAxis : edata2.time[0]
						}, {
							yAxis : edata2.data[2][1],
							xAxis : edata2.time[1]
						}, {
							yAxis : edata2.data[2][2],
							xAxis : edata2.time[2]
						}

						]
					},
					data : edata2.data[2]
				}, {
					name : edata2.media[3],
					type : 'bar',
					barWidth : 1,
					barGap : '17px',
					label : {
						normal : {
							show : true,
							position : 'top',
							formatter : function(param) {
								var arry = param.seriesName.split('');
								var str = '';
								if (arry.length > 5) {
									for (var i = 0; i < 5; i++) {
										str += arry[i] + '\n';
									}
								} else {
									str = arry.join('\n') + '\n'
								}
								return str;
							},
							textStyle : {
								color : '#55739e'
							}
						}
					},
					markPoint : {
						symbol : 'circle',
						symbolSize : 7,
						label : {
							normal : {
								show : false
							}
						},
						itemStyle : {
							normal : {
								color : '#3caf5b'
							}
						},
						data : [ {
							yAxis : edata2.data[3][0],
							xAxis : edata2.time[0]
						}, {
							yAxis : edata2.data[3][1],
							xAxis : edata2.time[1]
						}, {
							yAxis : edata2.data[3][2],
							xAxis : edata2.time[2]
						} ]
					},
					data : edata2.data[3]
				}, {
					name : edata2.media[4],
					type : 'bar',
					barWidth : 1,
					barGap : '17px',
					label : {
						normal : {
							show : true,
							position : 'top',
							formatter : function(param) {
								var arry = param.seriesName.split('');
								var str = '';
								if (arry.length > 5) {
									for (var i = 0; i < 5; i++) {
										str += arry[i] + '\n';
									}
								} else {
									str = arry.join('\n') + '\n'
								}
								return str;
							},
							textStyle : {
								color : '#55739e'
							}
						}
					},
					markPoint : {
						symbol : 'circle',
						symbolSize : 7,
						label : {
							normal : {
								show : false
							}
						},
						itemStyle : {
							normal : {
								color : '#9e2bbe'
							}
						},
						data : [ {
							yAxis : edata2.data[4][0],
							xAxis : edata2.time[0]
						}, {
							yAxis : edata2.data[4][1],
							xAxis : edata2.time[1]
						}, {
							yAxis : edata2.data[4][2],
							xAxis : edata2.time[2]
						}

						]
					},

					data : edata2.data[4]
				}]
			};
			chart.setOption(option, true);
        },
        // 事件态势
        _initTimeTrendChart:function(container,data,configParam){
        	if(!configParam){
        		configParam ={};
        	}
        	var times = [];
        	var counts = [];
        	for(var i=0;i<data.length;i++){
        		times[i] = data[i].time.substring(5,10);
        		counts[i] = data[i].count;
        	}
        	
        	var option = {
        			
        		    calculable : true,
        		    backgroundColor:'#212532',
        		    grid : {
    					x : 5,
    					y : 15,
    					x2 : 0,
    					y2 : 25
    				},
        		    xAxis : [
        		        {
        		            type : 'category',
        		            boundaryGap : false,
        		            data : times,
        					axisLine:{
        					  lineStyle:{
        					    color:'#3a415a',
        						width:2
        					  }
        					},
        					axisTick : {
        						inside : true,
        						length : 4,
        						lineStyle : { color : '#314a5a', width:2 }
        					},
        					axisLabel : {
        						margin:10,
        						textStyle : {
        							color : '#697398',
        							fontSize : 13
        						},
        						formatter: function (value, index) {
        						    if(0==index||times.length-1==index){
        						    	return "";
        						    }else{
        						    	return value;
        						    }
        						}
        					},
        					splitLine:{
        						show:false
        					}
        		        }
        		    ],
        		    yAxis : [
        		        {
        		            type : 'value',
        		            //offset:10,
        					axisLine:{
        					  lineStyle:{
        						width:0,
        					    color:'#2c88db'
        					  }
        					},
        					axisLabel : {
        						margin : -20,
        						textStyle : {
        							color : '#697398',
        							fontSize : 13,
        							align:'right',
        							baseline:'bottom'
        						},
        						formatter:function(val){
        							return val;
        						}
        					},
        					axisTick:{
        						show:false
        					},
        					splitLine:{
        					  lineStyle:{
        		                color:'#3a415a',
        					    type:'dashed'
        					  }
        					}
        		        }
        		    ],
        		    series : [
        		        {
        		            name:'事件态势',
        		            type:'line',
        					symbol:'none',
        					width:0,
        		            smooth:true,
        		            z:0,
        		            itemStyle: {
        						normal: {
        							color:'#2f6fc8',
        							areaStyle: {
        								type: 'default'
        							},
        							lineStyle:{
        								width:0
        							}
        						}
        					},
        					areaStyle:{
        					  color:'#2f6fc8'
        					},
        		            data:counts
        		        }
        		    ]
        		};
        	
	        	if(configParam.backgroundColor){//设置背景色
	        		option.backgroundColor =configParam.backgroundColor;
	        	}
        	    var chart = echarts.init(document.getElementById(container));
        	    chart.setOption(option);
        		 
        },
        _initIocSentimentChart:function(container,data){
        
        	var cities = [];
        	var positiveCnts = [];
        	var negativeCnts = [];
        	var len = data.length;
        	if(len>10){
        		len = 10;
        	}
        	for(var i=0;i<len;i++){
        		cities[i] = data[i].cityNameZh;
        		positiveCnts[i] = data[i].positiveCnt;
        		negativeCnts[i] = data[i].negativeCnt;
        	}
        	var option = {
        			tooltip : {
    					trigger : 'item'
    				},
        		    grid : {
    					x : 40,
    					y : 30,
    					x2 : 15,
    					y2 : 22
    				},
        		    legend: {
        				show: true,
        		        data:['正面','负面'],
        				textStyle :{
        					color: '#697398',
        					fontSize:13
        				},
        				x:'right'
        		    },
        		    toolbox: {
        		        show : false,
        		        feature : {
        		            mark : {show: true},
        		            dataView : {show: true, readOnly: false},
        		            magicType : {show: true, type: ['line', 'bar']},
        		            restore : {show: true},
        		            saveAsImage : {show: true}
        		        }
        		    },
        		    calculable : true,
        		    xAxis : [
        		        {
        		            type : 'category',
        		            data : cities,
        					axisLabel: { 
        						show: true, 
        						textStyle: { 
        							color: '#697398',
        							fontSize:13
        						} 
        		            },
        		            axisTick:{
       		            	    show: false 
       		                },
       		                axisLine:{
    		            	    show: true,
    		            	    lineStyle:{
    		            	    	color:'#3a415a',
    		            	    	width:2
    		            	    }
    		                }
        		        }
        				
        		    ],
        		    yAxis : [
        		        {
        		            type : 'value',
        					axisLabel:{ 
        						show: true, 
        						textStyle: { 
        							color: '#697398',
        							fontSize:13
        						},
        						formatter:function(val){
        							if(val>1000){
        								return val/1000+"K";
        							}else{
        							    return val;	
        							}
        							
        						}
        		             },
        		             axisTick:{
        		            	 show: false 
        		             },
        		             axisLine:{
        		            	 show: false
        		             },
        		             splitLine:{
           					  lineStyle:{
           		                color:'#2e344b',
           					    type:'dashed',
           					    width:0.8
           					  }
           					}
        		        }
        		    ],
        		    series : [
        		        {
        		            name:'正面',
        		            type:'bar',
        		            clickable: false,
        		            barWidth : 20,// 柱图宽度
        		            barGap:'0.1px',
        		            data:positiveCnts,
        					itemStyle: {
        		               normal: {
        		              	   color:'#eb4d38'
        					   }
        					} 
        					
        				},{
        		            name:'负面',
        		            type:'bar',
        		            barWidth : 20,// 柱图宽度
        		            barGap:'0.1px',
        		            data:negativeCnts,
        					itemStyle: {
        		                normal: {
        		               		color:'#90c823'
        						}
        					} 
        		        }
        		    ]
        		};	                    
        		var chart = echarts.init(document.getElementById(container));
        		chart.setOption(option);
        },
        _initMediaCoverageChart:function(container,ul,data){
        	var colors = ['#80c823','#0067b4','#eb4d38','#f9983a','#1b84ed','#af67ef'];	
        	var series = [];
        	for(var i=0;i<data.length;i++){
        		series.push({'name':data[i].name,'value':data[i].count});
        	}
        	if(data.length%colors.length==1){
        		colors.push(colors[1]);
        	}
        	var cache = [];
            var option = {
        			animation:false,
        			color:colors,
        			grid : {
    					x : 40,
    					y : 50,
    					x2 : 30,
    					y2 : 50
    				},
        		    series : [
        		        {
        		           name: '媒体覆盖',
        		           type: 'pie',
        		           roseType : 'radius',
        		           data:series,
        		            itemStyle: {
        		            	normal : {
        		                     label : {
        		                         show : false
        		                     },
        		                     labelLine : {
        		                         show : false
        		                     }
        		                },
        		                emphasis: {
        		                	 label : {
        		                         show : true,
        		                         formatter: function(param){
        		                        	cache.push(param);
        		                        	return param.name+"\n"+param.percent+"%";
        		                         }
        		                     },
        		                     labelLine : {
        		                         show : true,
        		                         lineStyle:{
        		                        	 color:'#ffffff',
        		                        	 type:'solid'
        		                         }
        		                     },
        		                    shadowBlur : 10,
        		                    shadowOffsetX : 10,
        		                    shadowColor : 'rgba(0, 0, 0, 0.5)'
        		                }
        		            }
        		        }
        		    ]
        		};
        		var chart = echarts.init(document.getElementById(container));
        		chart.setOption(option);
        		var lis = "";
        		for(var i=0;i<cache.length;i++){
        			var li = "<li><p>"+cache[i].name+"：</p><p style='color:"+cache[i].color+";'>"+cache[i].percent+"%</p></li>";
        			lis = lis + li;
        		}
        		$("#"+ul).html(lis);

        		chart.on('mouseover', function (params) {
        			if(params.componentType=="series"&&params.seriesType=="pie"){
        				//console.log(cache[params.seriesIndex].name);
        			}
        		});
        }
        
    });

    module.exports = HomeChart;
});

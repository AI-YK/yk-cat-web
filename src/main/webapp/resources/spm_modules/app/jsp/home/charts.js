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
        _initSpreadStateChart:function(container,data){
        	 var hours = ['24', '1', '2', '3', '4', '5', '6',
        	              '7', '8', '9','10','11',
        	              '12', '13', '14', '15', '16', '17',
        	              '18', '19', '20', '21', '22', '23'];
        	/*
			 * var days = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
			 */
        	 var days = ['','','','2016-12-05','2016-12-06','2016-12-07','2016-12-08'];
// var days =
// ['2016-12-01','2016-12-02','2016-12-03','2016-12-04','2016-12-05','2016-12-06','2016-12-07'];
        	// 天，小时，数值
        	var data = [// [0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],
        	         // [0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],
        	         // [0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],
        	            [1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],// [1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],
        	         // [1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],
        	          // [2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],
        	         // [2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],
        	            [3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],
        	        // [3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],
        	      // [4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],
        	            [4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],
        	      // [5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],
        	     // [6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],
        	            [6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

        	var data1 = [[3,0,6],[3,1,2],[3,2,1],[3,3,1],[3,4,1]];

        	var data2 = [[1,23,6],[1,20,6],[1,18,6],[1,16,6]];

        	var option = {
        	    title: {
        	        show : false
        	    },
        	    legend: {
        	        show :true,
        	        data: ['权重高','权重中','权重低'],
        	        y : 'bottom',
        	        textStyle:{
        	        	color:'#2e9bed'
        	        }
        	    },
        	    polar: {},
        	    tooltip: {
        	        formatter: function (params) {
        	            return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
        	        }
        	    },
        	    angleAxis: {
        	        type: 'category',
        	        data: hours,
        	        boundaryGap: false,
        	        splitLine: {
        	            show: true,
        	            lineStyle: {
        	                color: '#999',
        	                type: 'dashed'
        	            }
        	        },
        	        axisLabel: {
        	        	textStyle:{
        	        		color : '#2791df'
        	        	}
        	        },
        	        axisLine: {
        	            show: false
        	        }
        	    },
        	    radiusAxis: {
        	        type: 'category',
        	        data: days,
        	        axisLine: {
        	            show: false
        	        },
        	        axisLabel: {
        	        	textStyle:{
        	        		color : '#2791df'
        	        	},
        	            rotate: 45
        	        },
        	    splitArea:{
        	    show:true,
        	    areaStyle:{
        	    color: [
        	         '#1470b9',
        	         '#126cb3',
        	         '#0a60a3'
        	        ]
        	       }
        	     } 
        	    },
        	    series: [{
        	        name: '权重高',
        	        type: 'scatter',
        	        coordinateSystem: 'polar',
        	        data: data,
        	        animationDelay: function (idx) {
        	            return idx * 5;
        	        },
        			itemStyle: {
        	            normal: {
        	                shadowBlur: 10,
        	                shadowColor: 'rgba(120, 36, 50, 0.5)',
        	                shadowOffsetY: 5,
        	                color:'#ec4040'
        	            }
        			},
        			symbolSize: function (val) {
    		            return val[2] * 0.7;
    		        }
        	    },
        	    {
        	        name: '权重中',
        	        type: 'scatter',
        	        coordinateSystem: 'polar',
        	        data: data1,
        	        animationDelay: function (idx) {
        	            return idx * 5;
        	        },
        			itemStyle: {
        	            normal: {
        	                shadowBlur: 10,
        	                shadowColor: 'rgba(120, 36, 50, 0.5)',
        	                shadowOffsetY: 5,
        	                color:'#ed8633'
        	            }
        			},
        			symbolSize: function (val) {
    		            return val[2] * 0.7;
    		        }
        	    },
        	    {
        	        name: '权重低',
        	        type: 'scatter',
        	        coordinateSystem: 'polar',
        	        data: data2,
        	        animationDelay: function (idx) {
        	            return idx * 5;
        	        },
        			itemStyle: {
        	            normal: {
        	                shadowBlur: 10,
        	                shadowColor: 'rgba(120, 36, 50, 0.5)',
        	                shadowOffsetY: 5,
        	                color: '#3dcce2'
        	            }
        			},
        			symbolSize: function (val) {
    		            return val[2] * 0.7;
    		        }
        	    }
        	    
        	    ]
        	};
        	var chart = echarts.init(document.getElementById(container));
    		chart.setOption(option);
        },
        // 时间态势
        _initTimeTrendChart:function(container,data){
        	var times = [];
        	var counts = [];
        	for(var i=0;i<data.length;i++){
        		times[i] = data[i].time.substring(5,10);
        		counts[i] = data[i].count;
        	}
        	var interval = 1;
        	var max = 6;
        	if(times.length>max){
        		interval  = parseInt(times.length/max)+times.length%max;
        	}
        	var option = {
        		    tooltip : {
        		        trigger: 'axis'
        		    },
        		    calculable : true,
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
        					    color:'#314a5a',
        						width:2
        					  }
        					},
        					axisTick : {
        						inside : true,
        						length : 4
        						/*
								 * lineStyle : { color : '#314a5a', width:2 }
								 */
        					},
        					axisLabel : {
        						margin:12,
        						textStyle : {
        							color : '#697398',
        							fontSize : 13
        						},
        						interval:function(index,value){
        							if(index>0&&index+1<times.length&&index%interval==0)
        							  return true;
        							else
        								return false;	
        						}
        					}
        		        }
        		    ],
        		    yAxis : [
        		        {
        		            type : 'value',
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
        		            itemStyle: {
        						normal: {
        							color:'#2f6fc8',
        							areaStyle: {
        								type: 'default'
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
        	    var chart = echarts.init(document.getElementById(container));
        	    chart.setOption(option);
        		 
        },
        _initIocSentimentChart:function(container,data){
        
        	var cities = [];
        	var positiveCnts = [];
        	var negativeCnts = [];
        	for(var i=0;i<data.length;i++){
        		cities[i] = data[i].cityNameZh;
        		positiveCnts[i] = data[i].positiveCnt;
        		negativeCnts[i] = data[i].negativeCnt;
        	}
        	var option = {
        		    tooltip : {
        		        trigger: 'axis',
        				axisPointer: false,
        				show :false
        		    },
        		    grid : {
    					x : 40,
    					y : 30,
    					x2 : 20,
    					y2 : 20
    				},
        		    legend: {
        				show: true,
        		        data:['正面','负面'],
        				textStyle :{
        					color: '#1180d3'
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
        							color: '#215198' 
        						} 
        		            },
       		                axisLine:{
    		            	    show: true,
    		            	    lineStyle:{
    		            	    	color:'#596593',
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
        							color: '#215198' 
        						} 
        		             },
        		             axisLine:{
        		            	 show: false
        		             },
        		             splitLine:{
           					  lineStyle:{
           		                color:'#596593',
           					    type:'dashed'
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
        		              	   color:'#eb6100'
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
        		               		color:'#8fc31f'
        						}
        					} 
        		        }
        		    ]
        		};	                    
        		var chart = echarts.init(document.getElementById(container));
        		chart.setOption(option);
        },
        _initMediaCoverageChart:function(container,ul,data){
        	var colors = ['#eb4d38','#80c823','#0067b4','#af67ef','#f9983a'];	
        	var series = [];
        	for(var i=0;i<data.length;i++){
        		series.push({'name':data[i].name,'value':data[i].count});
        	}
        	if(data.length%5==1){
        		colors.splice(0,1);
        	}
        	var cache = [];
            var option = {
        			animation:false,
        			color:colors,
        			grid : {
    					x : 50,
    					y : 30,
    					x2 : 30,
    					y2 : 30
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
        	    // console.log(JSON.stringify(cache));
        }
        
    });

    module.exports = HomeChart;
});

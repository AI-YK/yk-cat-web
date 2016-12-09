define('app/jsp/home/charts', function (require, exports, module) {
    'use strict';
    var $=require('jquery');
	require("echarts/echarts.min");
	var  Base = require('arale-base/1.2.0/base');
 
    var HomeChart = Base.extend({
        //重写父类
        setup: function () {
        	HomeChart.superclass.setup.call(this); 
        },
        _initTimeTrendChart:function(container,data){
        	var times = [];
        	var counts = [];
        	for(var i=0;i<data.length;i++){
        		times[i] = data[i].time;
        		counts[i] = data[i].count;
        	}
        	var option = {
        		    tooltip : {
        		        trigger: 'axis'
        		    },
        		    calculable : true,
        		    xAxis : [
        		        {
        		            type : 'category',
        		            boundaryGap : false,
        		            data : times,
        					axisLine:{
        					  lineStyle:{
        					    color:'#2e8ad3',
        						width:3
        					  }
        					}
        		        }
        		    ],
        		    yAxis : [
        		        {
        		            type : 'value',
        					axisLine:{
        					  lineStyle:{
        					    color:'#2c88db'
        					  }
        					},
        					splitLine:{
        					  lineStyle:{
        		                color:'#1162a1',
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
        							color:'#1687d7',
        							areaStyle: {
        								type: 'default'
        							}
        						}
        					},
        					areaStyle:{
        					  color:'#1687d7'
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
        		            barWidth : 20,//柱图宽度
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
        		            barWidth : 20,//柱图宽度
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
        	
        	if(data.length%5==1){
        		colors.splice(0,1);
        	}
        	var cache = [];
            var option = {
        			animation:false,
        			color:colors,
        		    series : [
        		        {
        		           name: '媒体覆盖',
        		           type: 'pie',
        		           roseType : 'radius',
        		           data:data,
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
        		                        	 color:'#ffffff'
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
        	    //console.log(JSON.stringify(cache));
        }
        
    });

    module.exports = HomeChart;
});

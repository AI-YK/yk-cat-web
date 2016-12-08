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
        					axisLabel: { show: true, textStyle: { color: 'blue' } } 
        		        }
        				
        		    ],
        		    yAxis : [
        		        {
        		            type : 'value',
        					axisLabel: { show: true, textStyle: { color: 'blue' } }
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
        _initMediaCoverageChart:function(container,data){
            var option = {
        			animation:false,
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
        		                        	//console.log(JSON.stringify(param));
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
        }
        
    });

    module.exports = HomeChart;
});

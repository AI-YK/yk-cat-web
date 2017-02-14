define('app/jsp/home/charts', function (require, exports, module) {
    'use strict';
    var $=require('jquery');
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
	require("echarts/echarts.min");


	var  Base = require('arale-base/1.2.0/base');
 
    var HomeChart = Base.extend({
        // 重写父类
        setup: function () {
        	HomeChart.superclass.setup.call(this); 
        	// 初始化国际化
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "both",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: true 
			 });
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
        	edata2.time = [];
        	edata2.media =[];
        	if(data==null || data=="" || data == undefined){
        			data=[];
        	}
        		var timeKey =[];
            	for (var time in data)
                {   
            		timeKey.push(time);
            	}
            	
            	//时间反转截取5个
            	timeKey = timeKey.sort(function(t1,t2){
            		return t1>t2;
            	});
            	if(timeKey.length>5){
            		timeKey = timeKey.slice(timeKey.length-5,timeKey.length);
            	}
            	edata2.time=timeKey;
            	var first =[];
            	if(edata2.time.length > 0){
            		first = data[edata2.time[0]];
            	}
            	for (var i = 0;i<first.length;i++)
                {   if(edata2.media.length>4){
                	   break;
                    }
                    if(first[i].nameZh){
                    	edata2.media.push(first[i].nameZh);
                    }
            		
            	}
        	
            	edata2.data =[];
    
            	for(var i=0;i<edata2.media.length;i++){
            		var media = edata2.media[i];
            		var mediaData = [];
            		for(var j=0;j<edata2.time.length;j++){
            			var tempTime = edata2.time[j];
            			var tempData = data[tempTime];
            			for(var k=0;k<tempData.length;k++){
            				if(media==tempData[k].nameZh){
            					mediaData.push(tempData[k].level);
            					break;
            				}
            				if(k==tempData.length-1){//没有值set 0
            					mediaData.push(0);
            					break;
            				}
            			}
            		}
            		edata2.data.push(mediaData);
            	}
    		
        	var chart = echarts.init(document.getElementById(container));
        	var seriesData = [];
        	
        	//点的颜色集合
        	var pointArr = ['#b72f61','#ee9245','#edde53','#3caf5b','#9e2bbe'];
        	for(var i=0;i<edata2.media.length;i++){
        		//markPointd点坐标集合
            	var xyData = [];
        		var nameData =  {
    					name : "",
    					type : 'bar',
    					barWidth : 1,
    					barGap : '12px',
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
    						symbolSize : 8,
    						label : {
    							normal : {
    								show : false
    							}
    						},
    						itemStyle : {
    							normal : {
    								color : ''
    							}
    						},
    						
    						data : []
    					},
    					data : []
        	};
        		nameData.name=edata2.media[i];
        		for(var j =0;j<edata2.time.length;j++){
        			//markPoint坐标
                	var xyAxis = {
                    		yAxis : 0,
            				xAxis : 0
                    	};
        			xyAxis.yAxis = edata2.data[i][j];
        			xyAxis.xAxis = edata2.time[j];
        			xyData.push(xyAxis);
        		}
        	//	console.log(JSON.stringify(xyData));
        		nameData.markPoint.data = xyData;
        		nameData.markPoint.itemStyle.normal.color = pointArr[i];
        		nameData.data = edata2.data[i];
        		seriesData.push(nameData);
        	}
			var option = {
				color : [ '#174879' ],
				backgroundColor : backgroundColor,
				tooltip : {
					show : true,
					trigger : 'axis'
				},
				 grid : {
 					x : 40,
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
						},
						formatter: function (value, index) {
							var length= edata2.time.length;
						    /*if(length>1&&(0==index||length-1==index)){
						    	return "";
						    }else{
						    	var len = value.length;
						    	//yyyy-MM-dd HH:mm
						    	if(len>10){
						    		return value.substring(11,len);
						    	}
						    	return value;
						    }*/
							if(value.length <= 10){
								return value;
							}else{
								var len = value.length;
						    		return value.substring(11,len);
							}
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
					max : 6,
//					splitNumber : 1,
					axisLabel : {
						margin : 10,
						textStyle : {
							color : '#697398',
							fontSize:13
						},
						formatter : function(value, index) {
							/*switch (index) {
							case 0:
								return 0;
							case 1:
								return "1K";
//								return "热 ";
							case 2:
								return "1.5K";
//								return "热度或转载量中";
							case 3:
								return "2K";
//								return "热度或转载量高";
							}*/
							if(value>1000){
								return value/1000+"K";
							}else{
							    return value;	
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
				series : seriesData
				/*series : [ 
				           {
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
				},
				
				
				{
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
				}]*/
			};
			chart.setOption(option, true);
        },
        // 事件态势
        _initTimeTrendChart:function(container,data,configParam){
        	if(!configParam){
        		configParam ={};
        	}
        	if(!data){
             	data = [];  
            }
        	var times = [];
        	var counts = [];
        	var num='';
        	for(var i=0;i<data.length;i++){
        		times[i] = data[i].time.substring(0,data[i].time.length);
        		counts[i] = data[i].count;
        	}
        	//结果反转截取10个
        	/*if(times.length>10){
        		times = times.slice(0,10);
        		counts = counts.slice(0,10);
        	}*/
        	times = times.reverse();
        	counts = counts.reverse();
        	var option = {  
        			tooltip : {
			                trigger: 'axis',
			                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			                    type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
					                }
					         },
        		    calculable : true,
        		    backgroundColor:'#212532',
        		    grid : {
    					x :40,
    					y : 15,
    					x2 : 35,
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
        						//interval : 3,
        						interval: 'auto',
        						margin:10,
        						textStyle : {
        							color : '#697398',
        							fontSize : 13
        						},
        						formatter: function (value, index) {
        							
        							var len = value.length;
    						    	//yyyy-MM-dd HH:mm
    						    	if(len>10){
    						    		return value.substring(11,len);
    						    	}
    						    	return value;
        							/*if(times.length >2){
        								
        							
        						    if(0==index||times.length-1==index){
        						    	return "";
        						    }else{
        						    	var len = value.length;
        						    	//yyyy-MM-dd HH:mm
        						    	if(len>10){
        						    		return value.substring(11,len);
        						    	}
        						    	return value;
        						    }
        						 }else{
        							 if(0==index){
        								 return "";
        							 }else{
        								 return value;
        							 }
        						 }*/
        						}
        						/*
        							if(value.length <=10){
        								return value;
        							}else{
        								return value.substring(11,value.length);
        							}
        							
        						}*/
        							
        					},
        					splitLine:{
        						show:false
        					}
        		        }
        		    ],
        		    yAxis : [
        		        {
        		        	show :true,
        		            type : 'value',
//        		            offset:20,
        					axisLine:{
        					  lineStyle:{
        						width:0,
        					    color:'#2c88db'
        					  }
        					},
        					axisLabel : {
        						margin : 10,
        						textStyle : {
        							color : '#697398',
        							fontSize : 13,
        							align:'left',
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
        		            name:$.i18n.prop('charts.event.trend'),
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
            if(!data){
            	data = [];
            }
        	var cities = [];
        	var positiveCnts = [];
        	var negativeCnts = [];
        	var temp = $.grep(data,function(element,index){
        		return element.cityNameZh!="其他";
        	});
        
            var positive = $.i18n.prop('charts.positive');
            var nagative = $.i18n.prop('charts.nagative');
            
        	var len = temp.length;
        	if(len>5){
        		len = 5;
        	}
        	for(var i=0;i<len;i++){
        		cities[i] = temp[i].cityNameZh;
        		positiveCnts[i] = temp[i].positiveCnt;
        		negativeCnts[i] = temp[i].negativeCnt;
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
        		        data:[positive,nagative],
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
        		            name:$.i18n.prop('charts.positive'),
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
        		            name:$.i18n.prop('charts.nagative'),
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
        //媒体覆盖
        _initMediaCoverageChart:function(container,ul,data){
            if(!data){
             	data = [];
            }
        	var colors = ['#80c823','#0067b4','#eb4d38','#f9983a','#1b84ed','#af67ef'];	
        	var series = [];
        	var otherCount;
        	if(data.length<=6){
        		for(var i=0;i<data.length;i++){
        			if(data[i].name =='weixin'){
        				data[i].name ='wechat';
        			}
        			series.push({'name':data[i].name,'value':data[i].count});
        		}
        	}else{
        		var otherIndex;
        		for(var i = 0;i<data.length;i++){
        			if(data[i].name =='weixin'){
        				data[i].name ='wechat';
        			}
        			if(data[i].name =="其他"){
        				otherIndex = i;
        				otherCount= data[i].count;
        			}
        		}
        		data.splice(otherIndex,1);
        		for(var i=0;i<data.length;i++){
        			if(i<5){
        				series.push({'name':data[i].name,'value':data[i].count});
        			}else{
        				otherCount += data[i].count;
        			}
        		}
        		series.push({'name':$.i18n.prop('charts.other'),'value':otherCount});
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
        		           name: $.i18n.prop('charts.madial.fugai'),
        		           type: 'pie',
        		           //roseType : 'radius',
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
        			var li = "<li><p style='text-align: left;'>"+cache[i].name+"：</p><p style='color:"+cache[i].color+";text-align: right;'>"+cache[i].percent+"%</p></li>";
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

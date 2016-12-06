<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<script>
	   var myChart = echarts.init(document.getElementById('main'));
        var option = {
    tooltip : {
        show: true,
        trigger: 'item'
    },
    legend: {
		show:false,
        data:['新浪网','BBC','CNN','人民网','搜狐网']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',

            data : ['08-01','08-02','08-03','08-04']
        }
    ],
    yAxis : [
        {
           show:false
        }
		
    ],
    series : [
        {
            name:'新浪网',
            type:'bar',
            barGap: 10,
            barMaxWidth:2,
            itemStyle: {        // 系列级个性化样式，纵向渐变填充
          		normal:{
          			label: {
	                    show: true,
	                    position: 'top',
	                    formatter: function(a) {
	                    	var labelName = a.seriesName || '';
	                    	return resetStr(labelName);
	                    }
                	}
            	},
                emphasis: {
                    barBorderWidth: 1,
                    barBorderColor:'green',
                    color: '#54FF9F',
                    label : {
                        show : true,
                        position : 'top',
                        formatter : "{a} {b} {c}",
                        textStyle : {
                            color: 'blue'
                        }
                    }
                }
            },
            data:[120, 150, 80, 60],
			markLine:{
               symbol:['circle'],
			   itemStyle:{
				   normal:{
                     lineStyle:{
					 
					 },
				     label:{
                       show:true,
					   position:'left',
					   formatter:function(item){
					     return item.name;
					   }
					 }
				   }
			   },
			   data:[
			     {name: '低', xAxis: '-1', yAxis: 50},
				 {name: '中', xAxis: '-1', yAxis: 100}
			   ]
			}
        },
        {
            name:'BBC',
            type:'bar',
            barGap: 10,
            barMaxWidth:2,
            itemStyle: {        // 系列级个性化样式，纵向渐变填充
          		normal:{
          			label: {
	                    show: true,
	                    position: 'top',
	                    formatter: function(a) {
	                    	var labelName = a.seriesName || '';
	                    	return resetStr(labelName);
	                    }
                	}
            	},
                emphasis: {
                    barBorderWidth: 1,
                    barBorderColor:'green',
                    color: '#54FF9F',
                    label : {
                        show : true,
                        position : 'top',
                        formatter : "{a} {b} {c}",
                        textStyle : {
                            color: 'blue'
                        }
                    }
                }
            },
            data:[56, 88, 101, 125]
        },
        {
            name:'CNN',
            type:'bar',
            barGap: 10,
            barMaxWidth:2,
             
            itemStyle: {        // 系列级个性化样式，纵向渐变填充
       			normal:{
          			label: {
	                    show: true,
	                    position: 'top',
	                    formatter: function(a) {
	                    	var labelName = a.seriesName || '';
	                    	return resetStr(labelName);
	                    }
                	}
            	},
                emphasis: {
                    barBorderWidth: 1,
                    barBorderColor:'green',
                    color: '#54FF9F',
                    label : {
                        show : true,
                        position : 'top',
                        formatter : "{a} {b} {c}",
                        textStyle : {
                            color: 'blue'
                        }
                    }
                }
            },
            data:[98, 25, 130, 78]
        },
        {
            name:'人民网',
            type:'bar',
            barGap: 10,
            barMaxWidth:2,
            itemStyle: {        // 系列级个性化样式，纵向渐变填充
          		normal:{
          			label: {
	                    show: true,
	                    position: 'top',
	                    formatter: function(a) {
	                    	var labelName = a.seriesName || '';
	                    	return resetStr(labelName);
	                    }
                	}
            	},
                emphasis: {
                    barBorderWidth: 1,
                    barBorderColor:'green',
                    color: '#54FF9F',
                    label : {
                        show : true,
                        position : 'top',
                        formatter : "{a} {b} {c}",
                        textStyle : {
                            color: 'blue'
                        }
                    }
                }
            },
            data:[24, 128, 56, 77]
        },
        {
            name:'搜狐网',
            type:'bar',
            barGap: 10,
            barMaxWidth:2,
            itemStyle: {        // 系列级个性化样式，纵向渐变填充
          		normal:{
          			label: {
	                    show: true,
	                    position: 'top',
	                    formatter: function(a) {
	                    	var labelName = a.seriesName || '';
	                    	return resetStr(labelName);
	                    }
                	}
            	},
                emphasis: {
                    barBorderWidth: 1,
                    barBorderColor:'green',
                    color: '#54FF9F',
                    label : {
                        show : true,
                        position : 'top',
                        formatter : "{a} {b} {c}",
                        textStyle : {
                            color: 'blue'
                        }
                    }
                }
            },
            data:[220, 232, 101, 234]
        }


    ]
};
                    
        myChart.setOption(option);


        function  resetStr(str) {
        	var rlt = [];
        	for(var i = 0, len = str.length; i < len; i++) {
        		rlt.push(str.charAt(i));
        	}
        	return rlt.join('\r\n');
        }

</script>
<!--负面舆情-->
<div class="journalism-sentiment">
	<div class="sentiment-main">
		<div class="sentiment-title">
			<ul>
				<li>负面舆情</li>
				<li class="right"><a href="#"><i class="icon iconfont">&#xe65b;</i></a></li>
			</ul>
		</div>
		<div class="sentiment-list">
			<div class="sentiment-list-conter border-right">
				<div class="sentiment-list-conter-title">新闻媒体预警</div>
				<div class="sentiment-list-conter-news">
					<ul>
						<li class="block red">1</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block orange">2</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block yellow">3</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>

				</div>

			</div>
			<div class="sentiment-list-conter">
				<div class="sentiment-list-conter-title">新闻媒体预警</div>
				<div class="sentiment-list-conter-news">
					<ul>
						<li class="block red">1</li>
						<li class="icon iconfont i-color">&#xe65e;</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block orange">2</li>
						<li class="icon iconfont i-color">&#xe65c;</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block yellow">3</li>
						<li class="icon iconfont i-color">&#xe65d;</li>
						<li><a href="#">度被视为大韩民族英雄，地位等同于中国刘翔、孙杨的游泳</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li class="icon iconfont i-color">&#xe660;</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li class="icon iconfont i-color">&#xe65e;</li>
						<li><a href="#">度被视为大韩民族英雄，地位等同于中国刘翔、孙杨的游泳</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li class="icon iconfont i-color">&#xe65c;</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li class="icon iconfont i-color">&#xe65d;</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li class="icon iconfont i-color">&#xe65d;</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>
					<ul>
						<li class="block blue">4</li>
						<li class="icon iconfont i-color">&#xe65e;</li>
						<li><a href="#">昨天，结束了亚锦赛征程的朴泰桓</a></li>
						<li class="date">50分钟前</li>
					</ul>

				</div>

			</div>
		</div>
	</div>
</div>
<!--/负面舆情结束-->
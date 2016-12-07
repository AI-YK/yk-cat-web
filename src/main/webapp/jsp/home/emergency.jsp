<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!--图表-->
<div class="yeesight-banner">
	<div class="banner-main">
		<div class="banner-title">突发事件</div>
		<div class="banner-list">
			<div class="list-left">
				<ul id="eventList">
				
				</ul>
			</div>
			<div class="list-right" id="eventChartList">
				
			</div>
		</div>

	</div>
</div>
<!-- / 图表结束-->
<script id="emergencyTempl" type="text/x-jsrender">
  {{for eventList}}
     <li class="bot-none {{if #index==0}}current{{/if}}">
		 <p>
			<span>{{:zhCountry}}.{{:zhCity}}</span> <span>{{:dayTime}}</span>
		 </p>
		 <p>{{:zhTitle}}</p>
	 </li>
  {{/for}}
</script>
<script id="chartTempl" type="text/x-jsrender">
  {{for eventList}}
     <div id="chart-date{{:#index}}" {{if #index!=0}}style="display: none;"{{/if}}>
		 <!--图表1-->
         <div class="chart1">
			<div class="chart1-title">传播态势</div>
				<div class="chart1-conter"></div>
				<!--图表嵌套区域-->
				<div id="chart_0_{{:#index}}" class="chart1-main">chart_0_{{:#index}}</div>
				<!--/图表嵌套结束-->
			</div>
			<!--/图表1结束-->
			<!--图表2-->
			<div class="chart1 ml-20">
				<div class="chart1-title">事件态势</div>
				<div class="chart1-conter"></div>
				<!--图表嵌套区域-->
				<div id="chart_1_{{:#index}}" class="chart1-main" id="test1">chart_1_{{:#index}}</div>
				<!--/图表嵌套结束-->
			</div>
		    <!--/图表2结束-->
	</div>
  {{/for}}
</script>
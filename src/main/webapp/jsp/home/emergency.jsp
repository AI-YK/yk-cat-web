<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div class="yeesight-banner">
	<div class="banner-main">
		<div class="banner-title">
		<ul>
				<li style="font-size:24px">突发事件</li>
<%-- 				<li class="right"><a target="_blank" href="${_base}/search/event"><i class="icon iconfont"  style="font-size:24px;color:white;">&#xe65b;</i></a></li>
 --%>			</ul>
		</div>
		<div class="banner-list" id="chartGroup" style="display: none;">
			<div class="list-left">
				<ul id="eventList"></ul>
			</div>
			<div class="list-right">
				<div>
					<!--图表1-->
					<div class="chart1">
						<div class="chart1-title">传播态势</div>
						<div class="chart1-conter"></div>
						<!--图表嵌套区域-->
						 <img src="${uedroot}/images/chuan.png" class="chart1-main" />
						<!-- <div style="height: 390px;"></div> -->
							<!-- <div id="chart_left" class="chart1-main" style="height: 368px;"></div>
						 -->
						<!--/图表嵌套结束-->
					</div>
					<!--/图表1结束-->
					<!--图表2-->
					<div class="chart1 ml-20">
						<div class="chart1-title">事件态势</div>
						<div class="chart1-conter"></div>
						<!--图表嵌套区域-->
						<div id="chart_right" class="chart1-main"style="height: 390px;"></div>
						<!--/图表嵌套结束-->
					</div>
					<!--/图表2结束-->
				</div>
			</div>
		</div>
	</div>
</div>
<!-- 图表结束-->
<script id="emergencyTempl" type="text/x-jsrender">
  {{for eventList}}
     <li class="{{if #index+1<size}}bot-none{{/if}}  {{if #index==0}}current{{/if}}">
		 <p>
			<span>{{:zhCountry}}.{{:zhCity}}</span> <span>{{:dayTime}}</span>
		 </p>
		 <p style="width:300px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{:zhTitle}}</p>
	 </li>
  {{/for}}
</script>
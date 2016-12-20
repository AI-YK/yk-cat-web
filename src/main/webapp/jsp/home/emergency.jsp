<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div class="yeesight-banner">
	<div class="banner-main">
		<div class="banner-title">
		<ul>
		   <li style="font-size:24px;float:left;">突发事件</li>
           <li class="right" style="font-size:33px;float:right;"><a target="_blank" href="${_base}/search/event"><i class="icon iconfont"  style="font-size:33px;color:white;">&#xe65b;</i></a></li>
			</ul>
		</div>
		<div class="banner-list" id="chartGroup" style="display: none;">
			<div class="list-left">
				<ul id="eventList"></ul>
			</div>
			<div class="list-right">
                <div id="chart-date">
				    <div class="merge" id="merge">
						 <ul>
							  <li><a  class="current">传播态势</a></li>
							  <li><a>事件态势</a></li>
						 </ul>
					</div>
					<div id="mtab1">
						  <div id="chart_left" class="merge-list"></div>
					</div>
					 <div id="mtab2" style="display:none;">
						  <div id="chart_right" class="merge-list"></div>
					 </div>
						
				</div>			    
			</div>
		</div>
	</div>
</div>
<!-- 图表结束-->
<script id="emergencyTempl" type="text/x-jsrender">
  {{for eventList}}
     <li class="{{if #index+1<size}}bot-none{{/if}}  {{if #index==0}}current{{/if}}">
		 <p style="width:300px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{:zhTitle}}</p>
	     <p>
			<span>{{:zhCountry}}.{{:zhCity}}</span> <span class="eventSpan">{{:dayTime}}</span>
		 </p> 
   </li>
  {{/for}}
</script>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div class="yeesight-banner">
	<div class="banner-main">
		<div class="banner-title">
		<ul>
		   <li style="font-size:24px;float:left;"><spring:message code="home.nav.content.event"/></li>
           <li class="right" style="font-size:33px;float:right;"><a target="_blank" href="${_base}/search/event"><i class="icon iconfont"  style="font-size:33px;color:white;">&#xe65b;</i></a></li>
			</ul>
		</div> 
		<div class="banner-list">
			<div class="list-left">
				<ul id="eventList"></ul>
			</div>
			<div class="list-right" id="chart-date" style="display: none;">
                <div>
				    <div class="merge" id="merge">
						 <ul>
							  <li><a id="event" class="current"><spring:message code="home.nav.content.trend"/></a></li>
							  <li><a  id="chuanbo" ><spring:message code="home.nav.content.dissemination"/></a></li>
						 </ul>
					</div>
					<div>
						  <div id="chart_event" class="merge-list" style="padding: 10px"></div>
					</div>
						
				</div>			    
			</div>
		</div>
	</div>
</div>
<!-- 图表结束-->
<script id="emergencyTempl" type="text/x-jsrender">

{{if "${_currentLan}" == "zh_CN"}}
 {{for eventList}}
     <li id="{{:srcId}}" class="{{if #index+1<size}}bot-none{{/if}}  {{if #index==0}}current{{/if}}">
		 <p style="width:95%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor:pointer;">{{:zhTitle}}</p>
	     <p>
			<span style="width:75px;text-align:left;">中国
				{{:~getValue(zhCity)}}
			</span> 
			
			<span class="eventSpan">{{:dayTime}}</span>
			<span class="ptitle" style="width:20px;text-align:right;cursor:pointer;"><i class="icon iconfont">&#xe671;</i></span>
		 </p> 
   </li>
  {{/for}}
{{/if}}
{{if "${_currentLan}" == "en_US"}}
 {{for eventList}}
     <li id="{{:srcId}}" class="{{if #index+1<size}}bot-none{{/if}}  {{if #index==0}}current{{/if}}">
		 <p style="width:95%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor:pointer;">{{:enTitle}}</p>
	     <p>
			<span style="width:75px;text-align:left;">China
				{{:~getValue(enCity)}}
			</span> 
			
			<span class="eventSpan">{{:dayTime}}</span>
			<span class="ptitle" style="width:20px;text-align:right;cursor:pointer;"><i class="icon iconfont">&#xe671;</i></span>
		 </p> 
   </li>
  {{/for}}
{{/if}}
 
</script>

<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div class="levle-right-chart">
	 <div class="levle-right-chart-title">
		<p><spring:message code="hot.context.timetrend"/></p>
		<p class="right" id="tDate"></p>
	</div> 
	<!--图表嵌套区域-->
	<div  class="levle-right-chart-list chart-bg" style="margin-top: 10px;">
		 <div id="timeChart" style="height:100%;width: 100%;"></div>
	</div>
	<!--/图表嵌套区域结束-->

</div>
<div class="levle-right-chart">
	 <div class="levle-right-chart-title">
		<p><spring:message code="hot.context.mediastatistics"/></p>
		<p class="right" id="mDate"></p>
	</div> 
	<!--图表嵌套区域-->
	<div class="levle-right-chart-list chart-bg" style="margin-top: 10px;">
		 <div id="mediaChart" style="height:100%;width: 100%;"></div>
	</div>
	<!--/图表嵌套区域结束-->
</div>
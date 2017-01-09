<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<div class="levle-right-chart">
	 <div class="levle-right-chart-title">
		<p><spring:message code="opiniots.timetrent"/></p>
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
		<p><spring:message code="opiniots.mediastatistics"/></p>
		<p class="right" id="mDate"></p>
	</div> 
	<!--图表嵌套区域-->
	<div class="levle-right-chart-list chart-bg" style="margin-top: 10px;">
		 <div id="mediaChart" style="height:100%;width: 100%;"></div>
	</div>
	<!--/图表嵌套区域结束-->
</div>
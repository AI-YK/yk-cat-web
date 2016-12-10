<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div class="trend">
	<div class="trend-main">
		<div class="trend-conter">
			<div class="trend-conter-title locSentimentCount">
				<p>舆情走势</p>
				<ul>
					<li><a id="0" onclick="return false;" href="javascipt:void(0);" class="current">今日</a></li>
					<li><a id="1" onclick="return false;" href="javascipt:void(0);">本周</a></li>
					<li><a id="2" onclick="return false;" href="javascipt:void(0);">一个月</a></li>
				</ul>
			</div>
			<div id="locSentimentCount" style="height: 295px; margin-top: 54px;">
			</div>
		</div>
		<div class="trend-conter ml-20">
			<div class="trend-conter-title mediaCoverage">
				<p>媒体覆盖</p>
				<ul>
					<li><a id="0" onclick="return false;" href="javascipt:void(0);" class="current">今日</a></li>
					<li><a id="1" onclick="return false;" href="javascipt:void(0);">本周</a></li>
					<li><a id="2" onclick="return false;" href="javascipt:void(0);">一个月</a></li>
				</ul>
			</div>
			<div id="mediaCoverage" class="piechart-left" style="height: 295px;"></div>
			<div class="piechart-right">
				<ul id="mediaCoverage-ul">
					
				</ul>
			</div>
		</div>
	</div>
</div>
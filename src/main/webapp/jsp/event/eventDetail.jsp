<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title>事件详情</title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css"/>
<link href="${uedroot}/css/modular/index.css" rel="stylesheet" type="text/css" />
<style type="text/css">
/* 百度地图去logo */
.anchorBL{  
       display:none;  
   } 
</style>
</head>
<body>
	<!--面包屑导航-->
	<%@ include file="/inc/topHead.jsp"%>
	<!--子导航-->
	<div class="subnav">
		<div class="subnav-main">
			<div class="breadcrumb">
				<p>
					<i class="icon iconfont">&#xe600;</i>
				</p>
				<p>您当前的位置：</p>
				<p>
					<a href="${_base}">首页</a>>
				</p>
				<p style="width:300px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">${eventDetail.srcTitle}</p>
			</div>
		</div>
	</div>
	<!--二级框架-->
	<div class="level-wrapper">
		<div class="level-left-conter">
			<div class="news-detail">
				<div class="news-detail-title" style="width:600px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">${eventDetail.srcTitle}</div>
				<div class="news-detail-information" id="xuanf1" style="background: rgb(255, 255, 255);">
					<ul>
						<li>${eventDetail.zhCountry}.${eventDetail.zhCity}</li>
						<li style="margin-left: 30px;">
						<fmt:parseDate value="${eventDetail.createTimeView}" pattern="yyyy-MM-dd HH:mm:ss" var="pubdate"/>
						<fmt:formatDate value="${pubdate}" pattern="yyyy.MM.dd HH:mm" />
						</li>
						<!--<li>中文</li>
						<li>${eventDetail.zhCountry}&nbsp;&nbsp;<img height="20px" width="30px" src="${uedroot}/images/country/${eventDetail.enCountry}@2x.png" /></li>
						<li class="zhuanz">热度：<span>${eventDetail.heatValue}</span></li>
						 <li class="yuyan" id="yuyan"><a href="javascrpt:;"></a>
							<div class="user-show" id="typesetting">
								<span><i class="icon iconfont">&#xe65a;</i></span>
								<ul>
									<a id="showTranslation" href="javascrpt:;" class="ahov1"><li>译文排版</li></a>
									<a id="showOriginal" href="javascrpt:;" class="ahov2"><li>原文排版</li></a>
									<a id="showSynchysis" href="javascrpt:;" class="ahov3"><li>原译混排</li></a>
								</ul>
							</div></li> -->
						<!--<li><a href="#"><i class="icon iconfont">&#xe665;</i></a></li>
						 <li class="x-red"><a href="#"><i class="icon iconfont">&#xe666;</i><span id="collCount">0</span></a></li>
						<li class="share" id="share1"><a href="#"><i
								class="icon iconfont shareicon">&#xe667;</i></a>
							<div class="share-show" id="share-show">
								<span><i class="icon iconfont">&#xe65a;</i></span>
								<ul >
									<a href="javascrpt:;" class="ahov1"><li><i class="icon iconfont">&#xe65c;</i>分享到新浪微博</li></a>
									<a href="javascrpt:;" class="ahov2"><li><i class="icon iconfont">&#xe65e;</i>分享到腾讯微博</li></a>
									<a href="javascrpt:;" class="ahov3"><li><i class="icon iconfont">&#xe65e;</i>分享到微信</li></a>
								</ul>
							</div></li> -->
					</ul>
				</div>
				<div class="news-detail-news">
				 <ul id="eventDetailContent" style="text-indent:2em">
				 
				 </ul>
				</div>
				<!-- <div class="news-detail-share">
					<ul class="bdsharebuttonbox">
						<li>分享到：</li>
						<li id="bottom_share" class="right">
							<p class="red">
								<a id="gotsina" data-cmd="tsina" href="javascrpt:;"></a>
							</p>
							<p class="green">
								<a  data-cmd="weixin" href="javascrpt:;"></a>
							</p>
							<p class="blue">
								<a  data-cmd="sqq" href="javascrpt:;"></a>
							</p>
						</li>
					</ul>
				</div> -->
				<div class="level-news" style="margin-top:100px;">
						<div class="level-news-title"><p>共有相关数据</p> <p class="blue">0</p></div>
						<div class="level-news-list" id="news-list">
							
						</div>
						<div id="news-message"></div>
						<div class="biu-paging">
							<ul id="news-paging">
								
							</ul>
						</div>
					</div>
			</div>
		</div>
		<div class="levle-right">
		<!--拖拽-->
				<div id="drag" style="z-index: 999;">
					<div class="drag-title">
						<p><img src="${uedroot}/images/drag-yw.jpg"></p>
						<p class="right"><i class="icon iconfont" id="deag-close">&#xe618;</i></p>
					</div>
					<div class="drag-list">
						<div class="drag-list-bt" id="translateTitle">${eventDetails.enTitle}</div>
					<div class="drag-list-word" id="translateContent">
					</div>
					</div>
					 <div id="coor"></div>
				</div>
			<!-- / 拖拽结束-->
			<div class="levle-right-map" id="baiduContainer">
		
			</div>
			<div class="levle-right-chart">
				<div class="levle-right-chart-title">
					<p>传播态势</p>
					<p class="right">选择时间：${begin} 至 ${end}</p>
				</div>
				<!--图表嵌套区域-->
				<div class="levle-right-chart-list" id="spreadState">
				
				</div>
				<!--/图表嵌套区域结束-->

			</div>
			<div class="levle-right-chart">
				<div class="levle-right-chart-title">
					<p>事件走势</p>
					<p class="right">选择时间：${begin} 至 ${end}</p>
				</div>
				<!--图表嵌套区域-->
				<div class="levle-right-chart-list" id="timeTrend">
				
				</div>
				<!--/图表嵌套区域结束-->

			</div>
		</div>
	</div>
	<!--底部-->
	<input id="srcLanguage" type="hidden" value="zh"/>
	<input id="srcId" type="hidden" value="${eventDetail.srcId}"/>
	<div id="srcTitle" style="display: none;">
	  ${eventDetail.srcTitle}
	</div>
	<div id="srcContent" style="display: none;">
	  ${eventDetail.srcSummary}
	</div>
	<%@include file="/inc/indexFoot.jsp"%>
    <%@include file="/inc/incJs.jsp"%>
    <script src="${uedroot}/scripts/modular/drag.js"></script>
    <script id="levelNewsTempl" type="text/x-jsrender">
 <ul>
								<li class="title" style="cursor: pointer;" onclick="goTest();">{{:titleSrc}}</li>
								<li class="list">
									<p>
										<span><a href="#">新浪网</a></span>
										<span>{{:pubdate}}</span>
									</p>
									<p class="right">
										<span>中文</span>
										<span>中国<img src="${uedroot}/images/cn.jpg" /></span>
										<span>转载：6890</span>
									</p>
								</li>
								<li class="news">从乌镇讲起创新，讲到网络创客 、网络医疗、智慧中国梦旅游，讲到乌镇是一个传统文化电动车和网络运用结合，体现了一个互联网大国在世界互联网发展中的责任和贡献。邬贺铨总结自己参加开幕式的感受。</li>
	</ul>
</script>
	<script type="text/javascript">
    var pager;
    (function () {
        seajs.use('app/jsp/event/eventDetail', function (eventDetail) {
            pager = new eventDetail({element: document.body});
            pager.render();

        });
    })();
	function initialize() {  
		var map = new BMap.Map("baiduContainer");          // 创建地图实例  
		
		var point = new BMap.Point("${eventDetail.longitude}"*1, "${eventDetail.latitude}"*1);  // 创建点坐标  
		map.centerAndZoom(point, 22);                 // 初始化地图，设置中心点坐标和地图级别  
		map.enableScrollWheelZoom(true); 
		
		var marker = new BMap.Marker(point); // 创建点
		map.addOverlay(marker);    //增加点
	} 

	function loadScript() {
		        var script = document.createElement("script");
		        script.src = "http://api.map.baidu.com/api?v=1.4&callback=initialize";
		        document.body.appendChild(script);
	}
	window.onload = loadScript;
	function goTest(){
		var url = '${_base}/news/detail/491482147686549663E5C1A43E9293D';
		window.open (url, '_blank' ) ;
	}
</script>
</body>
</html>
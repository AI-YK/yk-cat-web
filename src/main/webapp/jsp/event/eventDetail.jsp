<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title><spring:message code="detail.event.ternd"/></title>
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
				<p><spring:message code="detail.current.location"/>：</p>
				<p id="p_subnav">
					
				</p>
				<p style="width:70%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">>
				<c:if test="${pageContext.response.locale=='zh_CN'}">
				${eventDetail.zhTitle}
				</c:if>
				<c:if test="${pageContext.response.locale=='en_US'}">
				${eventDetail.enTitle}
				</c:if>
				</p>
			</div>
		</div>
	</div>
	<!--二级框架-->
	<div class="level-wrapper">
		<div class="level-left-conter">
			<div class="news-detail">
			
				<c:if test="${pageContext.response.locale=='zh_CN'}">
				<div class="news-detail-title" >
			
				
			
				${eventDetail.zhTitle}</div>
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
						 <li class="yuyan" id="yuyan"><a href="javascript:void(0);"></a>
							<div class="user-show" id="typesetting">
								<span><i class="icon iconfont">&#xe65a;</i></span>
								<ul>
									<a id="showTranslation" href="javascript:void(0);" class="ahov1"><li>译文排版</li></a>
									<a id="showOriginal" href="javascript:void(0);" class="ahov2"><li>原文排版</li></a>
									<a id="showSynchysis" href="javascript:void(0);" class="ahov3"><li>原译混排</li></a>
								</ul>
							</div></li> -->
						<!--<li><a href="#"><i class="icon iconfont">&#xe665;</i></a></li>
						 <li class="x-red"><a href="#"><i class="icon iconfont">&#xe666;</i><span id="collCount">0</span></a></li>
						<li class="share" id="share1"><a href="#"><i
								class="icon iconfont shareicon">&#xe667;</i></a>
							<div class="share-show" id="share-show">
								<span><i class="icon iconfont">&#xe65a;</i></span>
								<ul >
									<a href="javascript:;" class="ahov1"><li><i class="icon iconfont">&#xe65c;</i>分享到新浪微博</li></a>
									<a href="javascript:;" class="ahov2"><li><i class="icon iconfont">&#xe65e;</i>分享到腾讯微博</li></a>
									<a href="javascript:;" class="ahov3"><li><i class="icon iconfont">&#xe65e;</i>分享到微信</li></a>
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
								<a id="gotsina" data-cmd="tsina" href="javascript:;"></a>
							</p>
							<p class="green">
								<a  data-cmd="weixin" href="javascript:;"></a>
							</p>
							<p class="blue">
								<a  data-cmd="sqq" href="javascript:;"></a>
							</p>
						</li>
					</ul>
				</div> -->
				</c:if>
				
				<c:if test="${pageContext.response.locale=='en_US'}">
				<div class="news-detail-title" >
			
				
			
				${eventDetail.enTitle}</div>
				<div class="news-detail-information" id="xuanf1" style="background: rgb(255, 255, 255);">
					<ul>
						<li>${eventDetail.enCountry}.${eventDetail.enCity}</li>
						<li style="margin-left: 30px;">
						<fmt:parseDate value="${eventDetail.createTimeView}" pattern="yyyy-MM-dd HH:mm:ss" var="pubdate"/>
						<fmt:formatDate value="${pubdate}" pattern="yyyy.MM.dd HH:mm" />
						</li>
						<!--<li>中文</li>
						<li>${eventDetail.zhCountry}&nbsp;&nbsp;<img height="20px" width="30px" src="${uedroot}/images/country/${eventDetail.enCountry}@2x.png" /></li>
						<li class="zhuanz">热度：<span>${eventDetail.heatValue}</span></li>
						 <li class="yuyan" id="yuyan"><a href="javascript:void(0);"></a>
							<div class="user-show" id="typesetting">
								<span><i class="icon iconfont">&#xe65a;</i></span>
								<ul>
									<a id="showTranslation" href="javascript:void(0);" class="ahov1"><li>译文排版</li></a>
									<a id="showOriginal" href="javascript:void(0);" class="ahov2"><li>原文排版</li></a>
									<a id="showSynchysis" href="javascript:void(0);" class="ahov3"><li>原译混排</li></a>
								</ul>
							</div></li> -->
						<!--<li><a href="#"><i class="icon iconfont">&#xe665;</i></a></li>
						 <li class="x-red"><a href="#"><i class="icon iconfont">&#xe666;</i><span id="collCount">0</span></a></li>
						<li class="share" id="share1"><a href="#"><i
								class="icon iconfont shareicon">&#xe667;</i></a>
							<div class="share-show" id="share-show">
								<span><i class="icon iconfont">&#xe65a;</i></span>
								<ul >
									<a href="javascript:;" class="ahov1"><li><i class="icon iconfont">&#xe65c;</i>分享到新浪微博</li></a>
									<a href="javascript:;" class="ahov2"><li><i class="icon iconfont">&#xe65e;</i>分享到腾讯微博</li></a>
									<a href="javascript:;" class="ahov3"><li><i class="icon iconfont">&#xe65e;</i>分享到微信</li></a>
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
								<a id="gotsina" data-cmd="tsina" href="javascript:;"></a>
							</p>
							<p class="green">
								<a  data-cmd="weixin" href="javascript:;"></a>
							</p>
							<p class="blue">
								<a  data-cmd="sqq" href="javascript:;"></a>
							</p>
						</li>
					</ul>
				</div> -->
				</c:if>
				<div class="level-news" style="margin-top:10px;">
						<div class="level-news-title"><p><spring:message code="detail.share.data"/></p> <p id="news-num" class="blue">0</p></div>
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
					<p><spring:message code="detail.diss.trend"/></p>
					<p class="right"><spring:message code="detail.time"/>：${begin} <spring:message code="detail.to"/> ${end}</p>
				</div>
				<!--图表嵌套区域-->
				<div class="levle-right-chart-list" id="spreadState">
				
				</div>
				<!--/图表嵌套区域结束-->

			</div>
			<div class="levle-right-chart">
				<div class="levle-right-chart-title">
					<p><spring:message code="detail.event.ternd"/></p>
					<p class="right"><spring:message code="detail.time"/>：${begin} <spring:message code="detail.to"/> ${end}</p>
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
	<input id="beginTime" type="hidden" value="${begin} 00:00:00"/>
	<input id="endTime" type="hidden" value="${end} 23:59:59"/>
	 <input id="srcId" type="hidden" value="${eventDetail.srcId}"/>
	<div id="srcTitle" style="display: none;">
	  ${eventDetail.srcTitle}
	</div>
	<c:if test="${pageContext.response.locale=='zh_CN'}">
	<div id="srcContent" style="display: none;">
	  ${eventDetail.zhSummary}
	  <p style="color:#999;margin-top:40px;float:left;">本文由译见转码生成，版权及观点归原文著作权人，不代表译见立场。</p>
	</div>
	</c:if>
	<c:if test="${pageContext.response.locale=='en_US'}">
	<div id="srcContent" style="display: none;">
	  ${eventDetail.enSummary}
	  <p style="color:#999;margin-top:40px;float:left;">Copyright of this article reserved by original author, YeeSight keep full text and holds no standpoint.</p>
	</div>
	</c:if>
	
	<%@include file="/inc/indexFoot.jsp"%>
    <%@include file="/inc/incJs.jsp"%>
    <script src="${uedroot}/scripts/modular/drag.js"></script>
    <script id="levelNewsTempl" type="text/x-jsrender">
{{if "${_currentLan}" == "zh_CN"}}
 <ul uuid ="{{:uuid}}">
								<li  class="title" style="cursor: pointer;">{{:titleZh}}</li>
								<li class="list">
									<p>
										<span><a href="{{:url}}" target="_blank">{{:mediaNameZh}}</a></span>
										<span>{{:pubdate}}</span>
									</p>
									<p class="right">
										<span>{{:languageTname}}</span>
										<span>{{:countryNameZh}}<img class="eventcountry" height="20px" width="30px" src="${uedroot}/images/country/{{:countryNameEn}}@2x.png" /></span>
										<span><spring:message code="detail.reprint"/>：{{:transfer}}</span>
									</p>
								</li>
								<li title="{{:abstractZh}}" class="news" style="width:80%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">{{:abstractZh}}</li>
	</ul>
{{/if}}
{{if "${_currentLan}" == "en_US"}}
 <ul uuid ="{{:uuid}}">
								<li  class="title" style="cursor: pointer;">{{:titleEn}}</li>
								<li class="list">
									<p>
										<span><a href="{{:url}}" target="_blank">{{:mediaNameEn}}</a></span>
										<span>{{:pubdate}}</span>
									</p>
									<p class="right">
										<span>{{:languageTname}}</span>
										<span>{{:countryNameEn}}<img class="eventcountry" height="20px" width="30px" src="${uedroot}/images/country/{{:countryNameEn}}@2x.png" /></span>
										<span><spring:message code="detail.reprint"/>：{{:transfer}}</span>
									</p>
								</li>
								<li title="{{:abstractEn}}" class="news" style="width:80%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">{{:abstractEn}}</li>
	</ul>
{{/if}}
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
</script>
</body>
</html>
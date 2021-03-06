<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title><spring:message code="home.nav.bar.hot"/></title>
<%@ include file="/inc/inc.jsp"%>
<%@ include file="/inc/incJs.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="com.ai.yk.protal.web.utils.SessionUtil"%>
<%
  SessionUtil.initUrlConfig(request);
%>
<link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css" />
<link href="${uedroot}/css/modular/select2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${spmRes }/app/jsp/news/social.js"></script>
<script type="text/javascript" src="${spmRes }/jquery-i18n/1.2.2/jquery.i18n.properties.min.js"></script>
<style type="text/css">

.moveul{position:absolute; top:68px; left:900px; width: 50px;color: #666; font-size: 12px;}
.more{line-height:28px;position:relative;height:35px;}
.more a{color: #666; font-size: 14px;}
.more .more-show{width:300px;height:216px;background:#23283b;position:absolute;display:none; top:32px;right:-120px;border:1px solid #7c85a8;border-radius:8px;z-index:99;}
.more .more-show ul{width:100%;float:left;height:216px;overflow-y:auto;padding:10px 20px;}
.more .more-show ul li{width:100%;float:left;line-height:40px;}
.more .more-show ul li p{width:45%;float:left;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;margin: 2px 0px;}
.more .more-show ul li p a{color:#7c85a8;cursor: pointer; line-height: 29px;}
.more .more-show ul li p a:hover{color: #fff;}
.more .more-show ul li p .current{height:29px;background:#3382ee;padding:0 10px;text-align:center;line-height:29px;color:#fff;float:left;border-radius:15px;}
.more .more-show  span{position:absolute;top:-19px;right:140px;z-index:111;}
.more .more-show  span i{color:#DDD;font-size:24px}
.more-show ul::-webkit-scrollbar {width: 14px;  height: 14px;}  
.more-show ul::-webkit-scrollbar-track,  
.more-show ul::-webkit-scrollbar-thumb {border-radius: 999px;  border: 5px solid transparent;  }  
.more-show ul::-webkit-scrollbar-track {box-shadow: 1px 1px 5px rgba(0,0,0,.2) inset; }    
.more-show ul::-webkit-scrollbar-thumb {min-height: 20px;  background-clip: content-box;  box-shadow: 0 0 0 5px rgba(0,0,0,.2) inset;  }  
.more-show ul::-webkit-scrollbar-corner { background: transparent;  }
</style>
<link href="${uedroot}/css/modular/modular.css" rel="stylesheet"
	type="text/css" />
</head>
<body>
	<!--面包屑导航-->
	<c:set var="noSearch" value="true"/>
	<c:set var="current" value="2"/>
	<%@ include file="/inc/indexHead.jsp"%>

<form id="loginJumpFormId" method="post" style="visibility: hidden;">
      <input type="hidden" name="url" id="loginSuccessUrl">
</form>
<!--子导航-->
<!-- 	
	<div class="subnav">
		<div class="subnav-main">
			<div class="breadcrumb" style="padding-top: 5px;">
				<p><i class="icon iconfont">&#xe600;</i></p>
				<p>您当前的位置：</p>
				<p><a href="#">首页</a>></p>
				<p>热点发现</p>
			</div>
		</div>
	</div> -->
	<!---->
	
	<div class="subnav" >
		<div class="subnav-main">
			<div id="commDiv" class="left-list" style="display: block;">
				<ul style="width: 1200px;">
					<li><a><spring:message code="home.nav.bar.generaldata"/>：</a></li>
					<c:forEach items="${interestList }" var="interest">
					<li class="inbtn"><a id="${interest.businessId}"  class="domain" href="#">${interest.zhInterest }</a><input type="hidden" value="${interest.businessId }"/></li>
					</c:forEach>
					<li id="ditu" style="float: right;line-height: 26px;"><a style="padding: 0px;" href="${_base}/newsbmap/toHeat"><img src="${uedroot }/images/map.png"></a></li>
				</ul>
			</div>
			<!-- 专题数据 -->
			<div id="topicDiv" class="left-list" style="display: none;">
			<c:if test="${hasTopic}">
			   <ul style="width: 1200px;">
				    <li><a><spring:message code="home.nav.bar.generaldata"/>：</a></li>
					<c:forEach items="${topics }" var="topic" varStatus="t">
						<c:if test="${t.index<7}">
						<li class="inbtn"><a id="${topic.id}" class="topic" href="#">${topic.srcShortTitle }</a><input type="hidden" value="${topic.id }"/><input type="hidden" value="${topic.srcId }"/><input type="hidden" value="${topic.opType }"/></li>
						</c:if>
					</c:forEach>
				</ul> 
			</c:if>
			</div>
			<c:if test="${hasTopic}">
			<div class="right-list" style="display: block;position: absolute;top:60px; right:70px;">
			    <c:if test="${fn:length(topics)>7}">
				<ul>
					<li class="more" id="more"><a href="#" onclick="show();" id="gengduo" ><spring:message code="home.nav.bar.more"/><i class="icon iconfont">&#xe659;</i></a>
						<div class="more-show" id="more-show">
							<span><img src="${uedroot}/images/xf-sj.png"></span>
							<ul>
							    <li class="inbtn">
								    <c:forEach items="${topics}" var="topic" varStatus="t">
						               <c:if test="${t.index>=7}">
										    <p><a id="${topic.id}" onclick="morehide();"  opType="${topic.opType}" srcId="${topic.srcId}"  class="topic">${topic.srcShortTitle}</a></p>
						               </c:if>
						            </c:forEach>
					            </li>
							</ul>
						</div>
					</li>
				</ul>
				</c:if>
			</div> 
			</c:if>
		</div>
	</div>
	
	
	<!--二级框架-->
	<div class="level-wrapper">
		<div class="level-left-conter">
			<div class="level-left-table">
				<ul>
					<li><a href="#" class="current"><spring:message code="hot.context.mediadata"/></a></li>
					<li><a href="#"><spring:message code="hot.context.socialdata"/></a></li>
				</ul>
			</div>
			<!--tab1-->
			<div id="le-tba1">
				<div class="level-left-list">
					<div class="list-form">
						<ul>
							
								<!-- 语言 -->
							<li id="languageId1">
									
							</li>
							<!-- 影响力 -->
							<li id="dicId1">
									
							</li>
							<!-- <li>
								<p>
									<input id="timeId1" placeholder="时间" type="text" readonly="readonly" class="select select-small calendar searchNews"/>
								</p>
							</li> -->
							<li id="timeId1">
								
							</li>
							<!-- 排序 -->
                           <li id="fileId1">
								
							</li>
							<!-- <li id="tran">
								
							</li> -->
							<!-- <li>
								<p>媒体</p>
								<p style="display: none;">
									<input id="mediaIn1" type="text" class="searchNews" style="width: 80px">
									<input id="mediaId1" type="hidden">
								</p>
							</li> -->
							<!-- 媒体 -->
							<li id="retrieval1">
								
							</li>
							<!-- <li>
								<input type="button" class="btn btn-serch radius btn-deepblue" id="searchBtn1" value="搜索">
							</li> -->
						</ul>
					</div>
					<div class="level-news" >
						<div class="level-news-title">
							<p><spring:message code="opiniots.sharerelevantdata"/></p>
							<p class="blue" id="news-num" >0</p>
						</div>
						<div class="level-news-list" id="news-list">
							
						</div>
						<div id="news-message"></div>
						<div class="biu-paging" >
							<ul id="news-paging">
								
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--/tab1结束-->
			<!--tab2-->
			<div id="le-tba2" style="display: none;">
				<div class="level-left-list">
					<div class="list-form">
						<ul>
							
							<!-- <li id="dicId2">
								
							</li> -->
							<li id="fileId2">
								
							</li>
							<li id="timeId2">
								
							</li>
							<li id="qingId2">
							<!-- <p>
									<select id="qingId2" class="select select-mini searchSocial">
										<option value="">情感</option>
										<option value="1">正面</option>
										<option value="0">中性</option>
										<option value="-1">负面</option>
									</select>
								</p> --> 
							</li>
							<li id="retrieval2">
								
							</li>
						</ul>
						
					</div>
					<div class="level-news" >
						<div class="level-news-title">
							<p><spring:message code="opiniots.sharerelevantdata"/></p>
							<p class="blue" id="social-num">0</p>
						</div>
						<div class="level-news-list  pl-40 user-por" id="social-list">
							
						</div>
						<div id="social-message"></div>
						<div class="biu-paging">
							<ul id="social-paging">
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--/tab2结束-->
		</div>
		<div class="levle-right">
			<%@include file="topic.jsp"%>
			<%@include file="chart.jsp"%>
		</div>
	</div>
	<!--底部-->
	<%@include file="/inc/indexFoot.jsp"%>
</body>
<script id="levelNewsTempl" type="text/x-jsrender">
<ul uuid="{{:uuid}}">
	<li class="title" style="width:90%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"><span style="cursor:pointer;">{{:titleZh}}</span></li>
	<li class="list">
		<p>
			<span><a href="{{:url}}">{{:mediaNameZh}}</a></span><span>{{:pubdate}}</span>
		</p>
		<p class="right">
			<span>{{:languageTname}}</span>
            <span>{{:countryNameZh}}<img style="height:14px;" src="${uedroot}/images/country/{{:countryNameEn}}@2x.png" /></span> 
			<span><spring:message code="hot.context.reprintamount"/>：{{:transfer}}</span>
		</p>
	</li>
	<li class="news" style="width:90%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">
        {{:abstractZh}}
	</li>
</ul>
</script>
<script id="levelSocialTempl" type="text/x-jsrender">
<div class="hot-list">
   <div class="portrait">
     {{if userAvatar==null}}
        <img src="${uedroot}/images/user.jpg" />
     {{else}}
        <img src="{{:userAvatar}}" />
     {{/if}}
   </div>
   <ul myid="{{:myId}}">
	 <li class="title"><span style="cursor:pointer;">{{:name}}</span></li>
	 <li class="list">
		<p>
			<span><i class="icon iconfont">{{:~getSocialIcon(sourceType)}}</i></span>
			<span>{{:timeStr}}</span>
		</p>
			<p class="right">
				<!--
				<span>{{:countryNameZh}}<img style="height:14px;" src="${uedroot}/images/country/{{:countryNameEn}}@2x.png" /></span>
				 -->
				<span><spring:message code="hot.context.reprintamount"/>：{{:cmtCnt}}</span>
				<span>点赞：{{:atdCnt}}</span>
				<span>转载量：{{:rpsCnt}}</span>
			</p>
	  </li>
	  <li class="news" style="width:90%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">{{:text}}</li>
	</ul>
</div>
</script>
<script id="typeTempl" type="text/x-jsrender">
<ul>
	<li><a href="#" class="current">全部</a><input type="hidden" value="0"/></li>
	{{for Dic}}
	<li><a href="#">{{:dicName }}</a><input type="hidden" value="{{:dicValue}}"/></li>
	{{/for}}
	<li id="ditu" style="float: right;line-height: 26px;"><a style="padding: 0px;" href="${_base}/newsbmap/toHeat"><img src="${uedroot }/images/map.png"></a></li>
</ul>
</script>
<script id="topTempl" type="text/x-jsrender">
<ul>
	{{for tops}}
	<li><a href="#">{{:srcShortTitle }}</a><input type="hidden" value="{{:id}}"/><input type="hidden" value="{{:srcId}}"/><input type="hidden" value="{{:opType}}"/></li>
	{{/for}}
					
	<li id="ditu" style="float: right;line-height: 26px;"><a style="padding: 0px;" href="${_base}/newsbmap/toHeat"><img src="${uedroot }/images/map.png"></a></li>
</ul>
					<div class="moveul" >
					<div class="more" id="more"><a href="javascript:void(0)" onclick="show();" id="gengduo">更多<i class="icon iconfont">&#xe659;</i></a>
						<div class="more-show" id="more-show">
							<span><img src="${uedroot}/images/xf-sj.png"></span>
							<ul>
							    <li>
								    <c:forEach items="${topics}" var="topic" varStatus="t">
						               <c:if test="${t.index>=7}">
										    <p><a id="${topic.id}" class="topic" onclick="morehide();">${topic.srcShortTitle}</a><input type="hidden" value="${topic.id}"/></p>
						               </c:if>
						            </c:forEach>
					            </li>
								
							</ul>
						</div>
					</div>
					</div>
</script>

<script type="text/javascript">
	var topicss='${topicss}';
    var pager;
    (function () {
        seajs.use('app/jsp/news/social', function (searchPage) {
            pager = new searchPage({element: document.body});
            pager.render();

        });
    })();
    

</script>
</html>

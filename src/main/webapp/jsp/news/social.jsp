<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>热点发现</title>
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
</head>
<body>
	<!--面包屑导航-->
	<c:set var="noSearch" value="true"/>
	<c:set var="current" value="2"/>
	<%@ include file="/inc/topHead.jsp"%>

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
	<div class="news-type-big">
		<div id="news-type-mainId" class="news-type-main">
			<%-- <ul>
				<li><a href="#" class="current">全部</a></li>
				<li><a href="#">政治治理</a></li>
				<li><a href="#">官员腐败</a></li>
				<li><a href="#">公共安全</a></li>
				<li><a href="#">司法公正</a></li>
				<li><a href="#">伦理道德</a></li>
				<li style="float: right;line-height: 26px;"><a style="padding: 0px;" href="${_base}/newsbmap/news_heat_n.jsp"><img src="${uedroot }/images/map.png"></a></li>
			</ul> --%>
		</div>
	</div>
	<!--二级框架-->
	<div class="level-wrapper">
		<div class="level-left-conter">
			<div class="level-left-table">
				<ul>
					<li><a href="#" class="current">媒体数据</a></li>
					<li><a href="#">社交数据</a></li>
				</ul>
			</div>
			<!--tab1-->
			<div id="le-tba1">
				<div class="level-left-list">
					<div class="list-form">
						<ul>
							<li>
								<!-- <p>省份</p> -->
								<p style="display: none;">
									<select id="orgnizationId1" class="searchNews" style="width: 80px;">
									</select>
								</p>
							</li>
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
							<li id="tran">
								<!-- <p>译文</p> -->
								<!-- <p>
									<select class="select select-mini searchNews" style="width: 70px">
									    <option value="">译文</option>
										<option>仅显示译文</option>
										<option>仅显示原文</option>
										<option>显示译文和原文</option>
									</select>
								</p> -->
							</li>
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
							<p>共有相关数据</p>
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
							<li>
							<!-- <!-- 	<p>省份</p> --> 
								<p style="display: none;">
									<select id="orgnizationId2" class="searchSocial" style="width: 90px">
									</select>
								</p>
							</li>
							<li id="dicId2">
								
							</li>
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
							<p>共有相关数据</p>
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
<ul>
	<li class="title" style="width:80%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">{{:titleZh}}</li>
	<li class="list">
		<p>
			<span><a href="#">{{:mediaNameZh}}</a></span><span>{{:pubdate}}</span>
		</p>
		<p class="right">
			<span>{{:languageTname}}</span>
            <span>{{:countryNameZh}}<img style="height:14px;" src="${uedroot}/images/country/{{:countryNameEn}}@2x.png" /></span> 
			<span>转载量：{{:transfer}}</span>
		</p>
	</li>
	<li class="news" style="-webkit-line-clamp: 2;-webkit-box-orient: vertical;display: -webkit-box;text-overflow:ellipsis;overflow:hidden;">
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
   <ul>
	 <li class="title">{{:name}}</li>
	 <li class="list">
		<p>
			<span><i class="icon iconfont">{{:~getSocialIcon(sourceType)}}</i></span>
			<span>{{:timeStr}}</span>
		</p>
			<p class="right">
				<!--
				<span>{{:countryNameZh}}<img style="height:14px;" src="${uedroot}/images/country/{{:countryNameEn}}@2x.png" /></span>
				 -->
				<span>评论：{{:cmtCnt}}</span>
				<span>点赞：{{:atdCnt}}</span>
				<span>转载量：{{:rpsCnt}}</span>
			</p>
	  </li>
	  <li class="news" style="-webkit-line-clamp: 2;-webkit-box-orient: vertical;display: -webkit-box;text-overflow:ellipsis;overflow:hidden;">{{:text}}</li>
	</ul>
</div>
</script>
<script id="typeTempl" type="text/x-jsrender">
<ul>
	<li><a href="#" class="current">全部</a><input type="hidden" value="0"/></li>
	{{for Dic}}
	<li><a href="#">{{:dicName }}</a><input type="hidden" value="{{:dicValue}}"/></li>
	{{/for}}
	<li id="ditu" style="float: right;line-height: 26px;"><a style="padding: 0px;" href="${_base}/newsbmap/news_heat_n.jsp"><img src="${uedroot }/images/map.png"></a></li>
</ul>
</script>
<script id="topTempl" type="text/x-jsrender">
<ul>
	{{for tops}}
	<li><a href="#">{{:srcShortTitle }}</a><input type="hidden" value="{{:id}}"/><input type="hidden" value="{{:srcId}}"/><input type="hidden" value="{{:opType}}"/></li>
	{{/for}}
					
	<li id="ditu" style="float: right;line-height: 26px;"><a style="padding: 0px;" href="${_base}/newsbmap/news_heat_n.jsp"><img src="${uedroot }/images/map.png"></a></li>
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

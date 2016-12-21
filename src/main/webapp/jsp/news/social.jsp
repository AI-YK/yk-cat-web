<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>社交热点</title>
<%@ include file="/inc/inc.jsp"%>
<%@ include file="/inc/incJs.jsp"%>
<%@page import="java.util.Locale"%>
<%@page import="com.ai.yk.protal.web.utils.SessionUtil"%>
<%
  SessionUtil.initUrlConfig(request);
%>
<link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css" />
<link href="${uedroot}/css/modular/select2.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<!--面包屑导航-->
	<c:set var="noSearch" value="true"/>
	<%@ include file="/inc/topHead.jsp"%>

<form id="loginJumpFormId" method="post" style="visibility: hidden;">
      <input type="hidden" name="url" id="loginSuccessUrl">
</form>
	<!--子导航-->
	<div class="subnav">
		<div class="subnav-main">
			<div class="breadcrumb">
				<p><i class="icon iconfont">&#xe600;</i></p>
				<p>您当前的位置：</p>
				<p><a href="#">首页</a>></p>
				<p>热点发现</p>
			</div>
		</div>
	</div>
	<!---->
	<div class="news-type-big">
		<div class="news-type-main">
			<ul>
				<li><a href="#" class="current">全部</a></li>
				<li><a href="#">政治治理</a></li>
				<li><a href="#">官员腐败</a></li>
				<li><a href="#">公共安全</a></li>
				<li><a href="#">司法公正</a></li>
				<li><a href="#">伦理道德</a></li>
				<li style="float: right;line-height: 26px;"><a style="padding: 0px;" href="${_base}/newsbmap/news_heat_n.jsp"><img src="${uedroot }/images/map.png"></a></li>
			</ul>
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
								<p>地区</p>
								<p>
									<select id="orgnizationId1"  style="width: 85px">
										<!-- <option>全部</option> -->
									</select>
								</p>
							</li>
							<li>
								<p>语言</p>
								<p>
									<select id="languageId1" class="select select-mini" style="width: 100px">
										<option>全部</option>
									</select>
								</p>
							</li>
							<li>
								<p>影响力</p>
								<p>
									<select id="dicId1" class="select select-mini" style="width: 100px">
										<option>时间</option>
									</select>
								</p>
							</li>
							<li>
								<p>时间</p>
								<p>
									<input id="timeId1" type="text" readonly class="select select-small calendar"/>
								</p>
							</li>
						</ul>
						<ul>
							<li>
								<p>媒体</p>
								<p>
									<input  type="text" class="int-text select-mini">
								</p>
							</li>
							<li>
								<p>排序</p>
								<p>
									<select class="select select-mini">
										<option>全部</option>
										<option value="score">相关度</option>
										<option value="pubdate">时间</option>
										<option value="mediaLevel">权重</option>
										<option value="transfer">转载量</option>
									</select>
								</p>
							</li>
							<li>
								<p>译文</p>
								<p>
									<select class="select select-small">
										<option>仅显示译文</option>
										<option>仅显示原文</option>
										<option>显示译文和原文</option>
									</select>
								</p>
							</li>
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
								<p>地区</p>
								<p>
									<select id="orgnizationId2" style="width: 82px">
										<!-- <option>全部</option> -->
									</select>
								</p>
							</li>
							<li>
								<p>影响力</p>
								<p>
									<select id="dicId2" class="select select-mini">
										<option>全部</option>
									</select>
								</p>
							</li>
							<li>
								<p>排序</p>
								<p>
									<select class="select select-mini">
										<option>全部</option>
										<option value="score">相关度</option>
										<option value="pubdate">时间</option>
										<option value="mediaLevel">权重</option>
										<option value="transfer">转载量</option>
									</select>
								</p>
							</li>
							<li>
								<p>时间</p>
								<p>
									<input id="timeId2" readonly type="text" class="select select-small calendar">
								</p>
							</li>
							<li>
								<p>媒体</p>
								<p>
									<input  type="text" class="int-text select-mini">
								</p>
							</li>
						</ul>
						<ul>
							<li>
								<p>情感</p>
								<p>
									<select class="select select-mini">
										<option>全部</option>
										<option value="1">正面</option>
										<option value="0">中性</option>
										<option value="-1">负面</option>
									</select>
								</p>
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
<script type="text/javascript">
    var pager;
    (function () {
        seajs.use('app/jsp/search/search', function (searchPage) {
            pager = new searchPage({element: document.body});
            pager.render();

        });
    })();
</script>
</html>

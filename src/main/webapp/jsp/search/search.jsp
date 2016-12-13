<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>搜索结果</title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/modular.css" rel="stylesheet"
	type="text/css" />
</head>
<body>
	<!--面包屑导航-->
	<%@ include file="/inc/topHead.jsp"%>
	<!--子导航-->
	<div class="subnav">
		<div class="subnav-main">
			<div class="breadcrumb">
				<p>
					<input id="keyword" type="text" class="int-text int-large radius"><a
						href="#"><i id="searchBtn" class="icon iconfont suos">&#xe658;</i></a>
				</p>
			</div>
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
								<p>媒体</p>
								<p>
									<select class="select select-mini">
										<option>全部</option>
									</select>
								</p>
							</li>
							<li>
								<p>时间</p>
								<p>
									<select class="select select-small">
										<option>2015.08.30</option>
									</select>
								</p>
							</li>
							<li>
								<p>地区</p>
								<p>
									<select class="select select-mini">
										<option>全部</option>
									</select>
								</p>
							</li>
							<li>
								<p>语言</p>
								<p>
									<select class="select select-mini">
										<option>全部</option>
									</select>
								</p>
							</li>
							<li>
								<p>影响力</p>
								<p>
									<select class="select select-mini">
										<option>时间</option>
									</select>
								</p>
							</li>
						</ul>
						<ul>
							<li>
								<p>排序</p>
								<p>
									<select class="select select-mini">
										<option>时间</option>
									</select>
								</p>
							</li>
							<li>
								<p>译文</p>
								<p>
									<select class="select select-small">
										<option>仅现实译文</option>
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
								<p>媒体</p>
								<p>
									<select class="select select-mini">
										<option>全部</option>
									</select>
								</p>
							</li>
							<li>
								<p>时间</p>
								<p>
									<select class="select select-small">
										<option>2015.08.30</option>
									</select>
								</p>
							</li>
							<li>
								<p>地区</p>
								<p>
									<select class="select select-mini">
										<option>全部</option>
									</select>
								</p>
							</li>
							<li>
								<p>影响力</p>
								<p>
									<select class="select select-mini">
										<option>全部</option>
									</select>
								</p>
							</li>
							<li>
								<p>排序</p>
								<p>
									<select class="select select-mini">
										<option>时间</option>
									</select>
								</p>
							</li>
						</ul>
						<ul>
							<li>
								<p>情感</p>
								<p>
									<select class="select select-mini">
										<option>全部</option>
									</select>
								</p>
								<p>
									<input type="text" class="int-text int-large radius"><a
										href="#"><i class="icon iconfont">&#xe658;</i></a>
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
	<li class="title">{{:titleZh}}</li>
	<li class="list">
		<p>
			<span><a href="#">{{:mediaNameZh}}</a></span><span>{{:pubdate}}</span>
		</p>
		<p class="right">
			<span>{{:languageTname}}</span>
            <span>{{:countryNameZh}}<img style="height:14px;" src="${uedroot}/images/country/{{:countryNameEn}}@2x.png" /></span> 
            <span>转载：{{:transfer}}</span>
		</p>
	</li>
	<li class="news">
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
				<span>{{:countryNameZh}}<img style="height:14px;" src="${uedroot}/images/country/{{:countryNameEn}}@2x.png" /></span>
				<span>评论：{{:cmtCnt}}</span>
				<span>点赞：{{:atdCnt}}</span>
				<span>转载量：{{:rpsCnt}}</span>
			</p>
	  </li>
	  <li class="news">从乌镇讲起<b>创新</b>，讲到网络创客 、网络医疗、智慧<b>中国梦</b>旅游，讲到乌镇是一个传统文化<b>电动车</b>和网络运用结合，体现了一个互联网大国在世界互联网发展中的责任和贡献。邬贺铨总结自己参加开幕式的感受。</li>
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
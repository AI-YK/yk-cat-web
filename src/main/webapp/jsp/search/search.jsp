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
					<input type="text" class="int-text int-large radius"><a
						href="#"><i class="icon iconfont suos">&#xe658;</i></a>
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
									<select id="orgnizationId1" class="select select-mini">
										<!-- <option>全部</option> -->
									</select>
								</p>
							</li>
							<li>
								<p>语言</p>
								<p>
									<select id="languageId" class="select select-mini">
										<option>全部</option>
									</select>
								</p>
							</li>
							<li>
								<p>影响力</p>
								<p>
									<select id="dicId1" class="select select-mini">
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
									<select id="orgnizationId2" class="select select-mini">
										<option>全部</option>
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
						<div class="level-news-list" id="social-list">
							
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
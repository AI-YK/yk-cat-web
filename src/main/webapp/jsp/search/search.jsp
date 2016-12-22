<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>搜索结果</title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css" />
<link href="${uedroot}/css/modular/select2.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<!--面包屑导航-->
	<c:set var="noSearch" value="true"/>
	<%@ include file="/inc/topHead.jsp"%>
	<!--子导航-->
	<div class="subnav">
		<div class="subnav-main">
			<div class="breadcrumb">
				<p>
					<input id="keyword" type="text" value="${_keyword}" class="int-text int-large radius"><a
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
								<p>省份</p>
								<p>
									<select id="orgnizationId1" style="width: 90px">
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
									<input id="medialId1" type="text" class="int-text select-mini">
								</p>
								<ul style="display:block;padding-top: 10px;">
                                <li class="seach_box" style="width: 205px;height: 70px;line-height: 40px;position: absolute;background: #fff;box-shadow: 1px 1px 5px #000;z-index: 999;padding-left: 20px;padding-top: 10px;">
                                   <input id="websit_search" type="text" style="border: 1px solid #eee;width: 120px;height: 38px;vertical-align: middle;" name="websit_text" maxlength="50" placeholder="如：新浪"><a style="background: #52acfd;color: #fff;border: 1px solid #eee;padding: 11px 10px;line-height: normal;vertical-align: middle;"href="javascript:;">确定</a>
                                </li>
                            </ul>
							</li>
							<li>
								<p>排序</p>
								<p>
									<select id="fileId1" class="select select-mini">
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
							<li>
								<input type="button" class="btn btn-serch radius btn-deepblue" id="searchBtn1" value="搜索">
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
								<p>省份</p>
								<p>
									<select id="orgnizationId2" style="width: 90px">
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
									<select id="fileId2" class="select select-mini">
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
						</ul>
						<ul>
							<li>
									<p>媒体</p>
									<p>
										<input id="medialId2"  type="text" class="int-text select-mini">
									</p>
							</li>
							<li>
								<p>情感</p>
								<p>
									<select id="qingId2" class="select select-mini">
										<option>全部</option>
										<option value="1">正面</option>
										<option value="0">中性</option>
										<option value="-1">负面</option>
									</select>
								</p>
							</li>
							<li>
								<input type="button" class="btn btn-serch radius btn-deepblue" id="searchBtn2" value="搜索">
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
            <span>转载：{{:transfer}}</span>
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

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

</head>
<body>
	<!--面包屑导航-->
	<c:set var="noSearch" value="true"/>
	<%@ include file="/inc/topHead.jsp"%>
	<!--子导航-->
	<%-- <div class="subnav">
		<div class="subnav-main">
			<div class="breadcrumb">
				<p>
					<input id="keyword" type="text" value="${_keyword}" class="int-text int-large radius"><a
						href="#"><i id="searchBtn" class="icon iconfont suos">&#xe658;</i></a>
				</p>
			</div>
		</div>
	</div> --%>
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
							<li id="orgnizationId1">
								
							</li>
							<!-- 语言 -->
							<li id="languageId1">
									
							</li>
							<!-- 影响力 -->
							<li>
							<li id="dicId1">
									
							</li>
							<li id="timeId1">
								
							</li>
						   <!-- 排序 -->
                           <li id="fileId1">
								
							</li>
							<li id="tran" style="display: none;">
							</li>							
							
					
							<li>
							<!-- 	<p>媒体</p> -->
								<p style="display: none;">
									<input id="mediaIn1" type="text" class="searchNews" style="width: 80px">
									<input id="mediaId1" type="hidden">
								</p>
							</li>
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
							<li id="orgnizationId2">
							
							</li>
							<li id="dicId2">
								
							</li>
							<li id="fileId2">
								
							</li>
							<li id="timeId2">
								
							</li>
							<li id="qingId2">
							
							</li>
						
							<li id="retrieval2">
								
							</li>
							<li>
								<!-- <p>情感</p> -->
								<!-- <p>
									<select id="qingId2" class="select select-mini searchSocial">
										<option value="">情感</option>
										<option value="1">正面</option>
										<option value="0">中性</option>
										<option value="-1">负面</option>
									</select>
								</p> -->
							</li>
							<!-- <li>
								<input type="button" class="btn btn-serch radius btn-deepblue" id="searchBtn2" value="搜索">
							</li> -->
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
<ul uuid="{{:uuid}}">
	<li class="title" style="cursor:pointer;width:80%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">{{:titleZh}}</li>
	<li class="list">
		<p>
			<span><a href="#">{{:mediaNameZh}}</a></span><span>{{:pubdate}}</span>
		</p>
		<p class="right">
			<span>{{:languageTname}}</span>
            <span>{{:countryNameZh}}<img style="height:14px;" src="${uedroot}/images/country/{{:countryNameEn}}@2x.png" /></span> 
            {{if transfer>0}}
               <span>转载：{{:transfer}}</span>
            {{/if}}
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
      <img src="{{:userAvatar}}" onerror="javascript:this.src='${uedroot}/images/user.jpg';"/>
   </div>
   <ul myid="{{:myId}}">
	 <li class="title" style="cursor:pointer;">{{:name}}</li>
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

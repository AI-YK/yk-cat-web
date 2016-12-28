<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html>
<html>
<head>
<%@ include file="/inc/inc.jsp"%>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title><c:choose>
		<c:when test="${'news'==model}">新闻热点</c:when>
		<c:when test="${'social'==model}">社交热点</c:when>
		<c:otherwise>舆情动态</c:otherwise>
	</c:choose></title>

<link href="${uedroot}/css/modular/modular.css" rel="stylesheet"
	type="text/css" />
</head>
<body>
	<c:choose>
		<c:when test="${'news'==model||'social'==model}">
			<c:set var="current" value="2" />
		</c:when>
		<c:otherwise>
			<c:set var="current" value="3" />
		</c:otherwise>
	</c:choose>
	<!--面包屑导航-->
	<%@ include file="/inc/indexHead.jsp"%>
	<!--子导航-->
	<div class="subnav" >
		<div class="subnav-main">
			<input value="${config.interestList}" type="hidden" />
			<input value="${topics}" type="hidden" />
			<div id="commDiv" class="left-list" style="display: block;">
				通用数据
				<ul>
					<c:forEach items="${config.interestList}" var="interestVo">
						<li class="inbtn"><a href="javascript:void(0);">${interestVo.zhInterest }</a></li>
					</c:forEach>
				</ul>
			</div>
			<!-- 专题数据 -->
			<div id="topicDiv" class="left-list" style="display: block;">
			专题数据
			<c:if test="${hasTopic}">
			   <ul>
				    <li><a>专题数据：</a></li>
					<c:forEach items="${topics}" var="topic" varStatus="t">
					   <c:if test="${t.index<10}">
					       <li class="inbtn" >
					         <a id="${topic.id}" opType="${topic.opType}" srcId="${topic.srcId}"  ${t.index==0?'class="topic current"':'class="topic"'} href="javascript:void(0);">${topic.srcShortTitle}</a>
					       </li>
					   </c:if>
					</c:forEach>
				</ul> 
			</c:if>
			</div>
			<c:if test="${hasTopic}">
			<div class="right-list" style="display: none;">
			    <c:if test="${fn:length(topics)>10}">
				<ul>
					<li class="more" id="more"><a href="#">更多<i class="icon iconfont">&#xe659;</i></a>
						<div class="more-show" id="more-show">
							<span><img src="${uedroot}/images/xf-sj.png"></span>
							<ul>
							    <li>
								    <c:forEach items="${topics}" var="topic" varStatus="t">
						               <c:if test="${t.index>=10}">
										    <p><a id="${topic.id}"  opType="${topic.opType}" srcId="${topic.srcId}"  class="topic">${topic.srcShortTitle}</a></p>
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
	
	<%-- <div class="subnav" style="display:none;">
		<div class="subnav-main">
			<div class="breadcrumb" >
				<p>
					<i class="icon iconfont">&#xe600;</i>
				</p>
				<p>您当前的位置：</p>
				<p>
					<a href="${_base}/home/index">首页</a>&gt;
				</p>
				<p>
					<c:choose>
						<c:when test="${'news'==model}">新闻热点</c:when>
						<c:when test="${'social'==model}">社交热点</c:when>
						<c:otherwise>舆情动态</c:otherwise>
					</c:choose>
				</p>
			</div>
		</div>
	</div> --%>
	<input type="hidden" id="model" value="${model}" />
	<input type="hidden" id="province" value="${province}" />
	<input type="hidden" id="cities" value="${cities}" />
	<input type="hidden" id="interestes" value="${interestes}" />
	<!--二级框架-->
	<div class="level-wrapper">
		<div class="level-left-conter">
			<c:if test="${'news'!=model && 'social'!=model}">
				<div class="level-left-table">
					<ul>
						<li><a href="#" class="current">媒体数据</a></li>
						<li><a href="#">社交数据</a></li>
					</ul>
				</div>
			</c:if>

			<!--tab1-->
			<div id="le-tba1" style='display: none;'>
				<div class="level-left-list">
					<div class="list-form">
						<ul>
							<li id="dicId1">
									
							</li>
							<li id="timeId1">
								
							</li>
							<li id="retrieval">
								
							</li> 
							<!-- 排序 -->
                           <li id="fileId1">
								
							</li>
							<li id="qingId1">
							
							</li>
							<%-- <li>
								<p>
									<select id="sentimentId1" class="searchNews select select-mini">
										<option value="">情感</option>
										<option value="1">正面</option>
										<option value="0">中性</option>
										<c:choose>
											<c:when test="${'negative'==model}">
												<option value="-1" selected="selected">负面</option>
											</c:when>
											<c:otherwise>
												<option value="-1">负面</option>
											</c:otherwise>
										</c:choose>

									</select>
								</p>
								<!-- <p>
									<input id="keyword1" type="text"
										class="searchNews int-text int-large radius">
									 <a href="javascript:void(0);"><i id="searchBtn1" class="icon iconfont suos">&#xe658;</i></a>
								</p>
 -->							</li> --%>
							<!-- <li><input type="button"
								class="btn btn-serch radius btn-deepblue" id="searchBtn1"
								value="搜索"></li> -->
						</ul>
						
					</div>
					<div class="level-news">
						<div class="level-news-title">
							<p>共有相关数据</p>
							<p class="blue" id="news-num">0</p>
						</div>
						<div class="level-news-list" id="news-list"></div>
						<div id="news-message"></div>
						<div class="biu-paging">
							<ul id="news-paging">

							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--/tab1结束-->
			<!--tab2-->
			<div id="le-tba2" style='display: none;'>
				<div class="level-left-list">
					<div class="list-form">
						<ul>
							<li id="dicId2">
								
							</li>
							<li id="timeId2">
								
							</li>
							<!-- <li>
								<p>媒体</p>
								<p>
									<input id="mediaIn2" type="text" class="searchSocial">
									<input id="mediaId2" type="hidden">
								</p>
							</li> -->
							<!-- 排序 -->
                           <li id="fileId2">
								
							</li>
							<li id="qingId2">
							 
							</li>
							<%-- <li>
								<!-- <p>情感</p> -->
								<p>
									<select id="sentimentId2" class="searchSocial select select-mini">
										<option value="">情感</option>
										<option value="1">正面</option>
										<option value="0">中性</option>
										<c:if test="">
										</c:if>
										<c:choose>
											<c:when test="${'negative'==model}">
												<option value="-1" selected="selected">负面</option>
											</c:when>
											<c:otherwise>
												<option value="-1">负面</option>
											</c:otherwise>
										</c:choose>

									</select>
								</p>
								<!-- <p>
									<input id="keyword2" type="text"
										class="searchSocial int-text int-large radius">
									<a href="javascript:void(0);"><i id="searchBtn2" class="icon iconfont suos">&#xe658;</i></a>
								</p> -->
							</li> --%>
						</ul>
						
					</div>
					<div class="level-news">
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
			<span><a href="javascript:void(0);">{{:mediaNameZh}}</a></span><span>{{:pubdate}}</span>
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
	(function() {
		seajs.use('app/jsp/search/public', function(publicPage) {
			pager = new publicPage({
				element : document.body
			});
			pager.render();

		});
	})();
</script>
</html>

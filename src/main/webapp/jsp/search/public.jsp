<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html>
<html>
<head>
<%@ include file="/inc/inc.jsp"%>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>
<c:choose>
    <c:when test="${'news'==model}">新闻热点</c:when>
     <c:when test="${'social'==model}">社交热点</c:when>
	<c:otherwise>舆情动态</c:otherwise>
</c:choose>
</title>

<link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css" />
<link href="${uedroot}/css/modular/select2.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <c:choose>
       <c:when test="${'news'==model||'social'==model}">
           <c:set var="current" value="2"/>
       </c:when>
       <c:otherwise>
           <c:set var="current" value="3"/>
       </c:otherwise>
    </c:choose>
	<!--面包屑导航-->
	<%@ include file="/inc/topHead.jsp"%>
	<!--子导航-->
	<div class="subnav">
		<div class="subnav-main">
			<div class="breadcrumb">
				<p><i class="icon iconfont">&#xe600;</i></p>
				<p>您当前的位置：</p>
				<p><a href="${_base}/home/index">首页</a>&gt;</p>
				<p>
				   <c:choose>
                        <c:when test="${'news'==model}">新闻热点</c:when>
                        <c:when test="${'social'==model}">社交热点</c:when>
	                    <c:otherwise>舆情动态</c:otherwise>
                   </c:choose>
				</p>
			</div>
		</div>
	</div>
	<input type="hidden" id="model" value="${model}"/>
	<input type="hidden" id="province" value="${province}"/>
	<input type="hidden" id="cities" value="${cities}"/>
	<input type="hidden" id="interestes" value="${interestes}"/>
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
			<div id="le-tba1" style='display: none;' >
				<div class="level-left-list"  >
					<div class="list-form">
						<ul>
							<li>
								<p>省份</p>
										<p>
											<select id="orgnizationId1" style="width: 90px">
												<!-- <option>全部</option> -->
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
							<li>
								<p>媒体</p>
								<p>
									<input  type="text" class="int-text select-mini">
								</p>
							</li>
						</ul>
						<ul>
						<li>
								<p>排序</p>
								<p>
									<select id="fieldName1" class="select select-mini" style="width: 85px">
										<option value="">全部</option>
										<option value="score">相关度</option>
										<option value="pubdate">时间</option>
										<option value="mediaLevel">权重</option>
										<option value="transfer">转载量</option>
									</select>
								</p>
							</li>
							<li>
								<p>情感</p>
								<p>
									<select id="sentimentId1" class="select select-mini">
										<option>全部</option>
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
								<p>
					              <input id="keyword1" type="text" class="int-text int-large radius">
					             <!--  <a href="#"><i id="searchBtn1" class="icon iconfont suos">&#xe658;</i></a> -->
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
			<div id="le-tba2" style='display: none;'>
				<div class="level-left-list">
					<div class="list-form">
						<ul>
							<li>
								<p>省份</p>
								<p>
									<select id="orgnizationId2" style="width: 90px">
										<!-- <option>全部</option> -->
									</select>
								</p>
							</li>
							<li>
								<p>影响力</p>
								<p>
									<select id="dicId2" class="select select-mini"  style="width: 100px">
										<option>全部</option>
									</select>
								</p>
							</li>
							<li>
								<p>排序</p>
								<p>
									<select id="fieldName2" class="select select-mini"  style="width: 85px">
										<option value="">全部</option>
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
									<input  type="text" class="int-text select-mini">
								</p>
							</li>
							<li>
								<p>情感</p>
								<p>
									<select id="sentimentId2" class="select select-mini">
										<option>全部</option>
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
								<p>
					              <input id="keyword2" type="text" class="int-text int-large radius">
					              <!-- <a href="#"><i id="searchBtn2" class="icon iconfont suos">&#xe658;</i></a> -->
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
<ul uuid="{{:uuid}}" keyword="{{:~getFirstKeyword(keywordsZh)}}>
	<li class="title" style="cursor:pointer;width:80%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">{{:titleZh}}</li>
	<li class="list">
		<p>
			<span><a href="javascript:void(0);">{{:mediaNameZh}}</a></span><span>{{:pubdate}}</span>
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
        seajs.use('app/jsp/search/public', function (publicPage) {
            pager = new publicPage({element: document.body});
            pager.render();

        });
    })();
</script>
</html>

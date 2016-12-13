<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title>新闻详情</title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css"/>
<link href="${uedroot}/css/modular/index.css" rel="stylesheet" type="text/css" />

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
				<p>您当前的位置：</p>
				<p>
					<a href="#">首页</a>>
				</p>
				<p>${newsDetails.zhTitle}</p>
			</div>
		</div>
	</div>
	<!--二级框架-->
	<div class="level-wrapper">
		<div class="level-left-conter">
			<div class="news-detail">
				<div class="news-detail-title">${newsDetails.zhTitle}</div>
				<div class="news-detail-information">
					<ul>
						<li>
						<c:choose>
						  <c:when test="${newsDetails.zhSource!=null && _currentLan == 'zh_CN'}">
						   ${newsDetails.zhSource}
						  </c:when>
						   <c:when test="${newsDetails.enSource!=null && _currentLan != 'zh_CN'}">
						   ${newsDetails.enSource}
						  </c:when>
						  <c:otherwise>
						  ${newsDetails.srcSource}
						  </c:otherwise>
						  </c:choose>
						</li>
						<li>${newsDetails.pubdate}</li>
						<li>${newsDetails.languageTName}</li>
						<li>${newsDetails.countryNameZh}<img height="14px" src="${uedroot}/images/country/${newsDetails.countryNameEn}@2x.png" /></li>
						<li class="zhuanz">转载量：<span>${newsDetails.view}</span></li>
						<li class="yuyan" id="yuyan"><a href="#"></a>
							<div class="user-show" id="typesetting">
								<span><i class="icon iconfont">&#xe65a;</i></span>
								<ul>
									<a href="#" class="ahov1"><li>译文排版</li></a>
									<a href="#" class="ahov2"><li>原文排版</li></a>
									<a href="#" class="ahov3"><li>原译混排</li></a>
								</ul>
							</div></li>
						<li><a href="#"><i class="icon iconfont">&#xe665;</i></a></li>
						<li class="x-red"><a href="#"><i class="icon iconfont">&#xe666;</i><span>28</span></a></li>
						<li class="share" id="share1"><a href="#"><i
								class="icon iconfont shareicon">&#xe667;</i></a>
							<div class="share-show" id="share-show">
								<span><i class="icon iconfont">&#xe65a;</i></span>
								<ul>
									<a href="#" class="ahov1"><li><i class="icon iconfont">&#xe65c;</i>分享到新浪微博</li></a>
									<a href="#" class="ahov2"><li><i class="icon iconfont">&#xe65e;</i>分享到腾讯微博</li></a>
									<a href="#" class="ahov3"><li><i class="icon iconfont">&#xe65e;</i>分享到微信</li></a>
								</ul>
							</div></li>
					</ul>
				</div>
				<div class="news-detail-news">
				  <c:choose>
				  <c:when test="${newsDetails.zhContent!=null && _currentLan == 'zh_CN'}">
				   ${newsDetails.zhContent}
				  </c:when>
				   <c:when test="${newsDetails.enContent!=null && _currentLan != 'zh_CN'}">
				   ${newsDetails.enContent}
				  </c:when>
				  <c:otherwise>
				  ${newsDetails.srcContent}
				  </c:otherwise>
				  </c:choose>
				 
				</div>
				<div class="news-detail-share">
					<ul class="bdsharebuttonbox">
						<li>分享到：</li>
						<li id="bottom_share" class="right">
							<p class="red">
								<a style="background: none;" data-cmd="tsina" href="javascrpt:;"><i class="icon iconfont">&#xe66b;</i></a>
							</p>
							<p class="green">
								<a style="background: none;" data-cmd="weixin" href="javascrpt:;"><i class="icon iconfont">&#xe675;</i></a>
							</p>
							<p class="blue">
								<a style="background: none;" data-cmd="sqq" href="javascrpt:;"><i class="icon iconfont">&#xe668;</i></a>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="levle-right">
			<div class="levle-right-map">1</div>
			<div class="levle-right-chart">
				<div class="levle-right-chart-title">
					<p>时间趋势</p>
					<p class="right">选择时间：2016-11-15 至 2016-11-19</p>
				</div>
				<!--图表嵌套区域-->
				<div class="levle-right-chart-list">图表嵌套区域</div>
				<!--/图表嵌套区域结束-->

			</div>
			<div class="levle-right-chart">
				<div class="levle-right-chart-title">
					<p>媒体统计</p>
					<p class="right">选择时间：2016-11-15 至 2016-11-19</p>
				</div>
				<!--图表嵌套区域-->
				<div class="levle-right-chart-list">图表嵌套区域</div>
				<!--/图表嵌套区域结束-->

			</div>
		</div>
	</div>
	<!--底部-->
	<%@include file="/inc/indexFoot.jsp"%>
		<%@include file="/inc/incJs.jsp"%>
	<script type="text/javascript">
    var pager;
    (function () {
        seajs.use('app/jsp/news/newsDetail', function (newsDetailPage) {
            pager = new newsDetailPage({element: document.body});
            pager.render();

        });
    })();
</script>
<script>
	window._bd_share_config = {
		common : {
			bdText : '自定义分享内容',	
			bdDesc : '自定义分享摘要',	
			bdUrl : '自定义分享url地址', 	
			bdPic : '自定义分享图片'
		},
		share : [{}],
		slide : [{}],
		image : [{
			 "viewList":["tsina","sqq","weixin"],
			 "viewText":"分享到：","viewSize":"16"
        }]
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
</script>
</body>
</html>
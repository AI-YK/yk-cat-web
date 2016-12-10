<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>首页</title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/index.css" rel="stylesheet" type="text/css" />
</head>

<body>
	<!--面包屑导航-->
	<%@ include file="/inc/topHead.jsp"%>
	<!--子导航-->
	<div class="subnav">
		<div class="subnav-main">
			<div class="left-list">
				<p>
					<i class="icon iconfont">&#xe657;</i>
				</p>
				<ul>
					<li><a href="#">北京.朝阳<i class="icon iconfont">&#xe659;</i></a>
					</li>
				</ul>
			</div>
			<div class="right-list">
				<ul>
					<li class="in-border" id="in-border1"><a href="#" id="border1Id">通用数据</a><i class="icon iconfont">&#xe659;</i>
						<div class="special-show" id="special-one">
							<span><i class="icon iconfont">&#xe65a;</i></span>
							<ul>
								<a href="#" class="ahov1"><li id="ahov1Id">通用数据</li></a>
								<a href="#" class="ahov2"><li id="ahov2Id">专题数据</li></a>
							</ul>
						</div>
					</li>
					<li class="in-border" id="in-border2"><a href="#"><c:forEach items="${topics }" var="topic" begin="0" end="0">${topic.srcShortTitle }</c:forEach><i class="icon iconfont">&#xe659;</i></a>
						<div class="special-show" id="special-tow">
							<span><i class="icon iconfont">&#xe65a;</i></span>
							<ul>
								<!-- <a href="#" class="ahov1"><li>专题一</li></a>
								<a href="#" class="ahov2"><li>专题二</li></a>
								<a href="#" class="ahov3"><li>专题三</li></a> -->
								<c:forEach items="${topics }" var="topic" varStatus="t">
									<a href="#" class="ahov"><li id="ahovvId${t.index }">${topic.srcShortTitle }</li></a>
								</c:forEach>
							</ul>
						</div>
					</li>
					<!-- <li class="inbtn"><a href="#">政治管理</a></li>
					<li class="inbtn"><a href="#">公共安全</a></li> -->
					<c:forEach items="${config.interestList }" var="interestVo">
						<li class="inbtn"><a href="#">${interestVo.zhInterest }</a></li>
					</c:forEach>
					<li class="inbtn"><a href="#">修改</a></li>
				</ul>
			</div>
		</div>
	</div>
	
	<%@include file="emergency.jsp"%>
	<%@include file="public.jsp"%>
	<%@include file="hot.jsp"%>
	<%@include file="trend.jsp"%>

	<!--底部-->
	<%@include file="/inc/indexFoot.jsp"%>
</body>
<%@ include file="/inc/incJs.jsp"%>
<script type="text/javascript" src="${uedroot}/scripts/modular/index.js"></script>
<script type="text/javascript">
    var pager;
    (function () {
        seajs.use('app/jsp/home/home', function (homePage) {
            pager = new homePage({element: document.body});
            pager.render();

        });
    })();
    

</script>

</html>

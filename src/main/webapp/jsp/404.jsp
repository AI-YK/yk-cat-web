<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=0.6, user-scalable=no" />
    <title>404</title>
    <%@ include file="/inc/inc.jsp" %>
    <link href="${uedroot}/css/iconfont.css" rel="stylesheet" type="text/css">
    <link href="${uedroot}/css/modular/global.css" rel="stylesheet" type="text/css"/>
    <link href="${uedroot}/css/modular/headr-footer.css" rel="stylesheet" type="text/css"/>
    <link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css"/>
</head>

<body class="level-bj">
		<!--面包屑导航-->	
	<%@ include file="/inc/topHead.jsp" %>
		
	<!--/ 主导航结束-->
	<div class="error-four">
		<div class="error-main">
			<ul>
				<li class="img"><img src="${uedroot}/images/404-2.png" style="width:230px;"></li>
				<li class="word">哎呀，你访问的页面未找到~</li>
				<li><a href="${_base}/">点击返回首页</a></li>
			</ul>
		</div>
	</div>

	<%@ include file="/inc/indexFoot.jsp" %>
	
<script type="text/javascript" src="${uedroot}/scripts/modular/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="${uedroot}/scripts/modular/frame.js"></script>
</body>
</html>

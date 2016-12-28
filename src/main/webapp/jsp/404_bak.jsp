<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>404</title>
	<%@ include file="/inc/inc.jsp" %>
	<link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css"/>
</head>
<body class="level-bj">
	<!--面包屑导航-->
	<%@ include file="/inc/topHead.jsp" %>
		<div class="error-four">
		<div class="error-main">
			<ul>
				<li><img src="${uedroot}/images/404-1.png"></li>
				<li><p>没</p><p>有</p><p>找</p><p>到</p><p>页</p><p>面</p></li>
				<li><input type="button" onclick="location.href='${_base}';"  class="btn btn-120 btn-blue radius" value="点击返回"/></li>
			</ul>
		</div>
	</div>
	<%@ include file="/inc/indexFoot.jsp" %>
</body>
</html>

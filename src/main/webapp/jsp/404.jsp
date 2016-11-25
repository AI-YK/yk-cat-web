<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>错误</title>
	<%@ include file="/inc/inc.jsp" %>
</head>
<body>
	<!--面包屑导航-->
	<%@ include file="/inc/topHead.jsp" %>
	<%@ include file="/inc/topMenu.jsp" %>
		<!--主体-->
		<div class="placeorder-container">
		<div class="placeorder-wrapper">
			<div class="fourhundred"><img src="${uedroot}/images/404.jpg" usemap="#Map" />
              <map name="Map">
                <area shape="rect" coords="398,306,504,340" href="${_base}">
              </map>
		  </div>
		</div>
		</div>
<script type="text/javascript" src="${uedroot}/scripts/modular/jqueryrotate.2.3.js"></script>
</body>
</html>

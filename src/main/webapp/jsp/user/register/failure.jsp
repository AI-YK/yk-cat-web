<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="_base" value="${pageContext.request.contextPath}" />
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<%@ include file="/inc/inc.jsp"%>
<title><spring:message code="ycregister.register" />
</title>
<link href="${uedroot}/css/modular/login-regsiter.css" rel="stylesheet" type="text/css" />
</head>
<body class="login-body">
	<div class="login-big">
		<div class="login-headr">
			<p>
				<img src="${uedroot}/images/login-logo.png" />
			</p>
			<p class="word"><spring:message code="ycregister.registerTitle" /></p>
		</div>
		<div class="login-wrapper">
			<div class="login-left">
				<img src="${uedroot}/images/login-bj.png">
			</div>
			<div class="register-right radius">

				<div class="verification">
					<ul>
						<li><img src="${uedroot}/images/rech-fail.png" /></li>
						<li class="word"><spring:message code="ycregister.registerSuccessMsg2" /></li>
						<li><spring:message code="ycregister.registerMailErrorMsg" /></li>
					</ul>
				</div>

			</div>
		</div>


	</div>
</body>
<%@ include file="/inc/incJs.jsp"%>
<script type="text/javascript">
	var intervalObj; // timer变量，控制时间
	var count = 5; // 间隔函数
	var curCount=count;// 当前剩余秒数
	intervalObj = window.setInterval(startSmsTime, 1000); // 启动计时器，1秒执行一次
	function startSmsTime() {
		if (curCount == 1) {
			window.clearInterval(intervalObj);// 停止计时器
			location.href="http://www.yeecloud.com/index";
		} else {
			curCount = curCount - 1;
			$(".verification ul li span").html(curCount);
		}
	}
</script>
</html>

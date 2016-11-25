<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<%@ include file="/inc/inc.jsp" %>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title><spring:message code="ycfindpassword.forgetPassword"/></title>
<link href="${uedroot}/css/modular/login-regsiter.css" rel="stylesheet" type="text/css" />
</head>
<body class="login-body">
	<div class="login-big">
		<div class="login-headr">
			<p>
				<img src="${uedroot}/images/login-logo.png" />
			</p>
			<p class="word"><spring:message code="ycfindpassword.forgetPassword"/></p>
		</div>
		<div class="password-bj">
			<div class="recharge-success">
				<ul>
					<li><img src="${uedroot}/images/rech-fail.png" /></li>
					<li class="list mt-50"><spring:message code="ycfindpassword.notBindAccountInfo"/>
					</li>
				</ul>
			</div>
		</div>
	</div>
</body>
</html>
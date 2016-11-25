<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>邮箱注册验证码</title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/login-regsiter.css" rel="stylesheet"
	type="text/css" />
</head>
<body class="login-body">
	<div class="login-big">
		<div class="login-headr">
			<p>
				<img src="${uedroot}/images/login-logo.png" />
			</p>
			<p class="word"><spring:message code="ycregister.register" /></p>
		</div>
		<div class="login-wrapper">
			<div class="login-left">
				<img src="${uedroot}/images/login-bj.png">
			</div>
			<div class="register-right radius">

				<div class="verification">
					<ul>
						<li><img src="${uedroot}/images/rech-win.png" /></li>
						<li class="word"><spring:message code="ycregister.registerMailSuccessMsg1" />${email}</li>
						<li><spring:message code="ycregister.registerMailSuccessMsg2" />
						</li>
					</ul>
				</div>

			</div>
		</div>


	</div>
</body>
<%@ include file="/inc/incJs.jsp" %>
<script src="${_base}/resources/spm_modules/email/emailHandle.js"></script>
<script type="text/javascript">
	var email = "${email}";
	$(document).ready(function(){
		$("#goEmail").click(function(){
			$emailHandle.goEmail(email);
		});
	});
</script>
</html>
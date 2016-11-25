<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title><spring:message code="ycregister.register" /></title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/login-regsiter.css" rel="stylesheet"
	type="text/css" />
<%@ include file="/inc/incJs.jsp" %>
</head>
<body class="login-body">
	<div class="login-big">
		<div class="login-headr">
			<p>
				<img src="${uedroot}/images/login-logo.png" />
			</p>
			<p class="word">
				<spring:message code="ycregister.registerTitle" />
			</p>
		</div>
		<div class="login-wrapper">
			<div class="login-left">
				<img src="${uedroot}/images/login-bj.png">
			</div>
			<div class="register-right radius">
				<div class="login-title">
					<spring:message code="ycregister.register" />
				</div>
				<div class="login-form-title">
					<ul>
						<label class="ml-70" id="regsiterMsg"></label>
						<p class="right">
							<a id="change_register_type" href="javascript:void(0);"
								register_type="phone"><i class="icon iconfont">&#xe614;</i>
								<spring:message code="ycregister.register.email" /></a>
						</p>
					</ul>
				</div>
				<form id="regsiterForm" method="post">
					<div class="regsiter-form">
						<ul>
							<li id="li_register_phone_container">
								<p class="word">
									<spring:message code="ycregister.phone" />
								</p>
								<p>
									<select id="country" class="select select-in radius"></select>
								</p>
								<p class="ml-20">
									<input id="phone" name="phone" maxlength="100" type="text"
										class="int-text int-in-bi radius">
								</p>
							</li>

							<li id="li_register_email_container" style="display: none;">
								<p class="word">
									<spring:message code="ycregister.email" />
								</p>
								<p>
									<input id="email" maxlength="100" name="email" type="text"
										class="int-text int-in-big radius">
								</p>
							</li>
							<li>
								<p class="word">
									<spring:message code="ycregister.password" />
								</p>
								<p>
									<input id="password" maxlength="16" name="password"
										type="password" class="int-text int-in-big radius">
								</p>
							</li>
							<li>
								<p class="word">
									<spring:message code="ycregister.confirmPassword" />
								</p>
								<p>
									<input id="confirmPassword" maxlength="16"
										name="confirmPassword" type="password"
										class="int-text int-in-big radius">
								</p>
							</li>
							<li>
								<p class="word">
									<spring:message code="ycregister.verificationCode" />
								</p>
								<p>
									<input id="verifyCodeImg" name="imgCode" maxlength="4"
										type="text" class="int-text int-in-280 radius">
								</p>
								<p class="img">
									<img id="refreshVerificationCode"
										src="${_base}/userCommon/imageVerifyCode" height="44"
										style="cursor: pointer">
								</p>
							</li>
							<li id="li_register_phone_code_container">
								<p class="word">
									<spring:message code="ycregister.dynamiCode" />
								</p>
								<p>
									<input id="smsCode" name="smsCode" maxlength="6" type="text" class="int-text int-in-280 radius">
								</p>
								<p>
									<input id="send_dynamicode_btn" type="button" class="btn btn-green btn-280 radius ml-20"
										value="<spring:message code="ycregister.getDynamiCode"/>">
								</p>
							</li>

							<li class="alink">
								<p class="ml-100">
									<input id="agreement" type="checkbox" class="radio"
										checked="checked">
								</p>
								<p>
									<spring:message code="ycregister.agreement" />
								</p>
								<p class="right">
									<a href="${ssoLoginUrl}"><spring:message
											code="ycregister.haveAccounts" /></a>
								</p>
							</li>
							<li class="ml-100"><input id="regsiterBtn" type="button"
								class="btn btn-blue btn-415 radius20" value="<spring:message code="ycregister.registerNow" />"></li>

</ul>
					</div>
				</form>
			</div>
		</div>


	</div>
</body>
<script type="text/javascript">
	var pager;
	(function() {
		seajs.use('app/jsp/user/register/register', function(registerPager) {
			pager = new registerPager({
				element : document.body
			});
			pager.render();
		});
	})();
	var registerMsg = {
		"account_empty" : '<spring:message code="ycregisterMsg.accountEmpty" />',
		"account_error" : '<spring:message code="ycregisterMsg.accountError" />',
		"password_empty" : '<spring:message code="ycregisterMsg.passwordEmpty" />',
		"password_error" : '<spring:message code="ycregisterMsg.passwordError" />',
		"confirm_password_empty" : '<spring:message code="ycregisterMsg.passwordEmpty" />',
		"confirm_password_error" : '<spring:message code="ycregisterMsg.confirmPasswordError" />',
		"verify_code_img_empty" : '<spring:message code="ycregisterMsg.verificationCodeEmpty" />',
		"verify_code_img_error" : '<spring:message code="ycregisterMsg.verificationCodeError" />',
		"agreement" : '<spring:message code="ycregisterMsg.agreement" />',
		"phone_registered" : '<spring:message code="ycregister.register.phone" />',
		"email_registered" : '<spring:message code="ycregister.register.email" />',
		"sms_code_empty":'<spring:message code="ycregisterMsg.smsEmpty"/>',
		"sms_code_error":'<spring:message code="ycregisterMsg.smsError"/>',
		"getDynamiCode":'<spring:message code="ycregister.getDynamiCode"/>'
	};
</script>

</html>
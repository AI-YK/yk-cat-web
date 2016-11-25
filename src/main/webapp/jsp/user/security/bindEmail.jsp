<%@ page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title></title>
<%@ include file="/inc/inc.jsp"%>
</head>
<body>
	<!--头部-->
	<%@ include file="/inc/userTopMenu.jsp"%>
	<!--二级主体-->
	<!--外侧背景-->
	<div class="cloud-container">
		<!--内侧内容区域-->
		<div class="cloud-wrapper">
			<!--左侧菜单-->
			<div class="left-subnav">
				<%@ include file="/inc/leftmenu.jsp"%>
			</div>
			<!--右侧内容-->
			<!--右侧大块-->
			<div class="right-wrapper">
  		<!--右侧第一块-->
	
  		<!--右侧第二块-->
  		<div class="right-list mt-0">
  			<div class="right-list-title pb-10 pl-20">
  				<p> <spring:message code="ycaccountcenter.bindemial.right.title"/> </p>	
  			</div>
  			<!--充值-->
 			<div class="recharge mt-30">
 				<div class="recharge-content binding">
 					<div class="recharge-form-label mt-20">
 						<ul>
 							<li><label class="ml-70" id="emailUErrMsg" style="display: none;"></label></li>
 							<li>
 								<p class="word"><spring:message code="ycaccountcenter.bindemial.label.word1"/></p>
 								<p><input type="text" class="int-text int-large radius" id="bindEmail"></p>
 							</li>
 							<li>
 								<p class="word"><spring:message code="ycaccountcenter.bindemial.label.word2"/></p>
 								<p><input type="text" class="int-text int-in radius" id="emailValue"></p>
 								<p><input type="button" class="btn border-green border-sma radius btn-medium" id="email-sendCode-btn" value='<spring:message code="ycaccountcenter.bindemial.getcode"/>'></p>
 								<p><a id="goEmail" href="javascript:void(0);"><spring:message code="ycaccountcenter.bindemial.enteremail"/></a></p>
 							</li>
 						</ul>
 					</div>
 					
 				</div>
 				<!--按钮-->
 				<div class="recharge-btn">
 						<input type="button" id="recharge-popo" class="btn btn-green btn-xxxlarge radius10" id="bandEmailSubmit" value='<spring:message code="ycaccountcenter.bindemial.submit"/>'>
 					</div>
 			</div>
  		</div>	
	  </div>
	</div>

	</div>
</body>
<%@ include file="/inc/incJs.jsp"%>
<script src="${_base}/resources/spm_modules/email/emailHandle.js"></script>

<script type="text/javascript">
    var current = "seccenterSettings";
	var phone = "${user.mobile}";
	var email = "${user.email}";
	$(document).ready(function(){
		$("#goEmail").click(function(){
			$emailHandle.openEmail($("#bindEmail").val());
		});
	});
	
	var emailBindMsg = {
		showOkValueMsg	: '<spring:message code="ycaccountcenter.js.showOkValueMsg"/>',
		showTitleMsg : '<spring:message code="ycaccountcenter.js.showTitleMsg"/>',
		emailUErrPleaseMsg : '<spring:message code="ycaccountcenter.js.emailUErrPleaseMsg"/>',
		emailUErrLegalMsg : '<spring:message code="ycaccountcenter.js.emailUErrLegalMsg"/>',
		saveingMsg : '<spring:message code="ycaccountcenter.js.saveingMsg"/>',
		getOperationCode : '<spring:message code="ycaccountcenter.js.getOperationCode"/>',
		resend60 : '<spring:message code="ycaccountcenter.js.resend60"/>',
		resend : '<spring:message code="ycaccountcenter.js.resend"/>',
		inputOperationCode : '<spring:message code="ycaccountcenter.js.inputOperationCode"/>',
		pleaseInputOC : '<spring:message code="ycaccountcenter.js.pleaseInputOC"/>',
		bindFail : '<spring:message code="ycaccountcenter.js.bindFail"/>',
		bingSuccess : '<spring:message code="ycaccountcenter.js.bingSuccess"/>'
	};
	
	var pager;
	(function() {
		seajs.use('app/jsp/user/security/bindEmail', function(bindEmailPager) {
			pager = new bindEmailPager({
				element : document.body
			});
			pager.render();
		});
	})();
</script>

</html>

<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>
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
  		<div class="right-wrapper">
  		<!--右侧第一块-->
	
  		<!--右侧第二块-->
  		<div class="right-list mt-0">
  			<div class="right-list-title pb-10 pl-20">
  				<p><spring:message code="ycaccountcenter.bindphone.title"/></p>	
  			</div>
  			<!--充值-->
 			<div class="recharge mt-30">
 				<div class="recharge-content binding">
 					<div class="recharge-form-label mt-20">
 						<ul>
 							<li>
 							   <p class="word"><spring:message code="ycaccountcenter.bindphone.phonenumber"/></p>
 								<p><select id="country" class="select select-in"></select></p>
 								<p><input id="telephone" type="text" class="int-text int-large radius"></p>
 								<label id="telephoneErrMsg"></label>
 								
 							</li>
 							<li>
 								<p class="word"><spring:message code="ycaccountcenter.bindphone.dynamicnumber"/></p>
 								<p><input id="dynamicode" type="text" class="int-text int-in radius"></p>
 								<p><input type="button" id="send_dynamicode_btn" class="btn border-green border-sma radius btn-medium" value='<spring:message code="ycaccountcenter.bindphone.getdynamiccode"/>'></p>
 							   <label id="dynamicodeErrMsg"></label>
 							</li>
 						</ul>
 					</div>
 					
 				</div>
 				<!--按钮-->
 				<div class="recharge-btn">
 						<input type="button" id="submitPhoneBtn" class="btn btn-green btn-xxxlarge radius10" value='<spring:message code="ycaccountcenter.bindphone.submit"/>'>
 					</div>
 			</div>
 			</div>
  		</div>	
	  </div>
	</div>

	</div>
</body>
<%@ include file="/inc/incJs.jsp"%>
<script type="text/javascript">
var current = "seccenterSettings";
var phoneBindMsg = {
		showOkValueMsg	: '<spring:message code="ycaccountcenter.js.showOkValueMsg"/>',
		showTitleMsg : '<spring:message code="ycaccountcenter.js.showTitleMsg"/>',
		saveingMsg : '<spring:message code="ycaccountcenter.js.saveingMsg"/>',
		getOperationCode : '<spring:message code="ycaccountcenter.js.getOperationCode"/>',
		resend60 : '<spring:message code="ycaccountcenter.js.resend60"/>',
		resend : '<spring:message code="ycaccountcenter.js.resend"/>',
		inputOperationCode : '<spring:message code="ycaccountcenter.js.inputOperationCode"/>',
		pleaseInputOC : '<spring:message code="ycaccountcenter.js.pleaseInputOC"/>',
		bindFail : '<spring:message code="ycaccountcenter.js.bindFail"/>',
		bingSuccess : '<spring:message code="ycaccountcenter.js.bingSuccess"/>',
		phoneNumCanNotEmpty :'<spring:message code="ycaccountcenter.js.phoneNumCanNotEmpty"/>',
		pleaseInputRightPhoneNum:'<spring:message code="ycaccountcenter.js.pleaseInputRightPhoneNum"/>'
		};
	var pager;
	(function() {
		seajs.use('app/jsp/user/security/bindPhone', function(updatePhonePager) {
			pager = new updatePhonePager({
				element : document.body
			});
			pager.render();
		});
	})();
</script>
</html>

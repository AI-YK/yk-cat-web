<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<%@ include file="/inc/inc.jsp" %>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title><spring:message code="ycupdateemail.updateemail"/>  </title>
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
  				<p></p>	
  			</div>
  			<!--充值-->
 			<div class="recharge mt-30">
 				<div class="recharge-content">
 					<div class="recharge-unionPay set-up">
 						<ul>
 							<li id="phoneVerification"><a href="#" class="current"><i class="icon iconfont def">&#xe60b;</i><br><spring:message code="ycupdateemail.verifyby.phone"/><label></label></a></li>
 							<li id="emailVerification"><a href="#" class="ml-50"><i class="icon iconfont def">&#xe62f;</i><br><spring:message code="ycupdateemail.verifyby.email"/><label></label></a></li>
 						</ul>
 					</div>
 					</div>
 				<div id="set-table1">
 				<div class="binding" id="next1">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindemail"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-form-label mt-30 ">
 						<ul>
 							<li>
 								<label class="ml-70" id="dynamicode" style="display: none;"></label>
 								<p class="word"><spring:message code="ycupdateemail.phone"/></p>
 								<p>
									<select id="country" class="select select-in radius"></select>
									<input id="tempCode" type="hidden"/>
								</p>
 								
 								<p id="telephone">${sessionScope.user_session_key.mobile}</p>
 							</li>
 							<li>
 								<p class="word"><spring:message code="ycupdateemail.dynamiccode"/></p>
 								<p><input type="text" class="int-text int-in radius" id="phoneDynamicode"></p>
 								<p><input type="button" class="btn border-green border-sma radius btn-medium" id="send_dynamicode_btn" value='<spring:message code="ycupdateemail.getdynamiccode"/>'>
 								</p>
 								
 							</li>
 						</ul>
 					</div>
 				
 				
 				<!--按钮-->
 				<div class="recharge-btn">
 						<input type="button" id="next-bt1" class="btn btn-green btn-xxxlarge radius10" value='<spring:message code="ycupdateemail.nextstep"/>'>
 				</div>
 				</div>
 				<div class="binding" id="next2">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindemail"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-form-label mt-30 ">
 						<ul>
 							<li>
 								<label class="ml-70" id="phoneUEmailErrMgs" style="display: none;"></label>
 								<p class="word"><spring:message code="ycupdateemail.email"/></p>
 								<p><input type="text" class="int-text int-xlarge radius" id="phoneUEmail"></p>
 							</li>
 							<li>
 								<p class="word"><spring:message code="ycupdateemail.verifycode"/></p>
 								<p><input type="text" class="int-text int-in radius" id="phoneUEmailCode"></p>
 								<p><input type="button" class="btn border-green border-sma radius btn-medium" id="phone-send-email-btn" value='<spring:message code="ycupdateemail.getdynamiccode"/>'></p>
 								<p><a id="goEmail1" href="javascript:void(0);"><spring:message code="ycupdateemail.immediatelyentryemail"/></a></p>
 							</li>
 						</ul>
 					</div>
 				<!--按钮-->
 				<div class="recharge-btn">
 						<input type="button" id="pnext-bt2" class="btn btn-green btn-xxxlarge radius10" value='<spring:message code="ycupdateemail.submit"/>'>
 				</div>
 				</div>
 				<div class="binding" id="next3">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindemail"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-success mt-40">
 						<ul>
 							<li><img src="${uedroot }/images/rech-win.png"></li>
 							<li class="word"><spring:message code="ycupdateemail.modifybindemail.success"/></li>
 						</ul>
 					</div>
 			
 				</div>
 				</div>
 				<div id="set-table2" style="display:none">
 				<div class="binding" id="next4">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindemail"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-form-label mt-30 ">
 						<ul>
 							<li>
 								<label class="ml-70" id="emailErrMsg" style="display: none;"></label>
 								<p class="word"><spring:message code="ycupdateemail.bindedemail"/></p>
 								<p id="goEmail2Val">${sessionScope.user_session_key.email}</p>
 							</li>
 							<li>
 								<p class="word"><spring:message code="ycupdateemail.dynamiccode"/></p>
 								<p><input type="text" class="int-text int-in radius" id="emailIdentifyCode"></p>
 								<p><input type="button" class="btn border-green border-sma radius btn-medium" id="sendEmailBtn" value='<spring:message code="ycupdateemail.getdynamiccode"/>'></p>
 								<p><a href="javascript:void(0);" id="goEmail2"><spring:message code="ycupdateemail.immediatelyentryemail"/></a></p>
 							</li>
 						</ul>
 					</div>
 				
 				
 				<!--按钮-->
 				<div class="recharge-btn">
 						<input type="button" id="next-bt4" class="btn btn-green btn-xxxlarge radius10" value='<spring:message code="ycupdateemail.nextstep"/>'>
 				</div>
 				</div>
 				<div class="binding" id="next5">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindemail"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-form-label mt-30 ">
 						<ul>
 							<li>
 								<label class="ml-70" id="emailUErrMsg" style="display: none;"></label>
 								<p class="word"><spring:message code="ycupdateemail.email"/></p>
 								<p><input type="text" class="int-text int-xlarge radius" id="emailUpdateEmail"></p>
 							</li>
 							<li>
 								<p class="word"><spring:message code="ycupdateemail.veritycode"/></p>
 								<p><input type="text" class="int-text int-in radius" id="uEmailCode"></p>
 								<p><input type="button" class="btn border-green border-sma radius btn-medium" id="email-sendCode-btn" value='<spring:message code="ycupdateemail.getveritycode"/>'></p>
 								<p><a href="javascript:void(0);" id="goEmail3"><spring:message code="ycupdateemail.immediatelyentryemail"/></a></p>
 							</li>
 						</ul>
 					</div>
 				<!--按钮-->
 				<div class="recharge-btn">
 						<input type="button" id="next-bt5" class="btn btn-green btn-xxxlarge radius10" value='<spring:message code="ycupdateemail.submit"/>'>
 				</div>
 				</div>
 				<div class="binding" id="next6">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindemail"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-success mt-40">
 						<ul>
 							<li><img src="${uedroot }/images/rech-win.png"></li>
 							<li class="word"><spring:message code="ycupdateemail.modifybindemail.success"/></li>
 						</ul>
 					</div>
 				
 				</div>
 				</div>
 			</div>
  	</div>
  </div>
  </div>
  </div>
<%@ include file="/inc/incJs.jsp" %>
<script src="${_base}/resources/spm_modules/email/emailHandle.js"></script>
<script type="text/javascript">
var current = "seccenterSettings";
var pager;
(function() {
	seajs.use('app/jsp/user/security/updateEmail', function(updateEmailPager) {
		pager = new updateEmailPager({
			element : document.body
		});
		pager.render();
	});
})();
</script>
<script type="text/javascript">
	var phone = "${sessionScope.user_session_key.mobile}";
	var email = "${sessionScope.user_session_key.email}";
	$(document).ready(function(){
		$("#goEmail1").click(function(){
			$emailHandle.openEmail($("#phoneUEmail").val());
		});
		$("#goEmail2").click(function(){
			$emailHandle.openEmail(email);
		});
		$("#goEmail3").click(function(){
			$emailHandle.openEmail($("#emailUpdateEmail").val());
		});
	});
	var updateEmailJs = {
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
			pleaseInputRightPhoneNum:'<spring:message code="ycaccountcenter.js.pleaseInputRightPhoneNum"/>',
			emailUErrPleaseMsg : '<spring:message code="ycaccountcenter.js.emailUErrPleaseMsg"/>',
			emailUErrLegalMsg : '<spring:message code="ycaccountcenter.js.emailUErrLegalMsg"/>',
			phoneNumCanNotEmpty : '<spring:message code="ycaccountcenter.js.phoneNumCanNotEmpty"/>',
			pleaseInputRightPhoneNum : '<spring:message code="ycaccountcenter.js.pleaseInputRightPhoneNum"/>',
			dealing : '<spring:message code="ycaccountcenter.js.dealing"/>',
			networkConnectTimeOut : '<spring:message code="ycaccountcenter.js.networkConnectTimeOut"/>',
			notBindEmailNoVerify : '<spring:message code="ycaccountcenter.js.notBindEmailNoVerify"/>',
			notBindPhoneNoVerify : '<spring:message code="ycaccountcenter.js.notBindPhoneNoVerify"/>',
			sendEmailFail : '<spring:message code="ycaccountcenter.js.sendEmailFail"/>',
			emailFormatIncorrect : '<spring:message code="ycaccountcenter.js.emailFormatIncorrect"/>'
		};
	
	/* var updateEmailMsg = {
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
			"getDynamiCode":'<spring:message code="ycregister.getDynamiCode"/>'
		}; */
</script>

</body>
</html>
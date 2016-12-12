<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<%@ include file="/inc/inc.jsp" %>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title><spring:message code="ycupdateemail.updatephone" /></title>
   
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
 							<li id="phoneVerification"><a href="#" class="current"><i class="icon iconfont def">&#xe60b;</i><br><spring:message code="ycupdateemail.verifyby.phone" /><label></label></a></li>
 							<li id="emailVerification"><a href="#" class="ml-50"><i class="icon iconfont def">&#xe62f;</i><br><spring:message code="ycupdateemail.verifyby.email" /><label></label></a></li>
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
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindphone" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-form-label mt-30 ">
 						<ul>
 							<li>
 								<label class="ml-70" id="dynamicode" style="display: none;"></label>
 								<p class="word"><spring:message code="ycupdateemail.phone" /></p>
 								<p>
									<select id="country" class="select select-in radius"></select>
								</p>
 								
 								<p id="telephone">${sessionScope.user_session_key.mobile}</p>
 							</li>
 							<li>
 								<p class="word"><spring:message code="ycupdateemail.dynamiccode" /></p>
 								<p><input type="text" class="int-text int-in radius" id="phoneDynamicode"></p>
 								<p><input type="button" class="btn border-green border-sma radius btn-medium" id="send_dynamicode_btn" value='<spring:message code="ycupdateemail.getdynamiccode" />'>
 								</p>
 								
 							</li>
 						</ul>  
 					</div>
 				
 				
 				<!--按钮-->
 				<div class="recharge-btn">
 						<input type="button" id="next-bt1" class="btn btn-green btn-xxxlarge radius10" value='<spring:message code="ycupdateemail.nextstep" />'>
 				</div>
 				</div>
 				<div class="binding" id="next2">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindphone" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-form-label mt-30 ">
 						<ul>
 							<li>
 								<label class="ml-70" id="uphoneErrMsg" style="display: none;"></label>
 								<p class="word"><spring:message code="ycupdateemail.phone" /></p>
 								<p>
									<select id="country2" class="select select-in radius"></select>
									<input type="text"  class="" id="uPhone">
								</p>
 								<p></p>
 							</li>
 							<li>
 								<p class="word"><spring:message code="ycupdateemail.dynamiccode" /></p>
 								<p><input type="text" class="int-text int-in radius" id="uphoneDynamicode"></p>
 								<p><input type="button" class="btn border-green border-sma radius btn-medium" id="usend_dynamicode_btn" value='<spring:message code="ycupdateemail.getdynamiccode" />'>
 								</p>
 							</li>
 						</ul>
 					</div>
 				<!--按钮-->
 				<div class="recharge-btn">
 						<input type="button" id="unext-bt2" class="btn btn-green btn-xxxlarge radius10" value="提交">
 				</div>
 				</div>
 				<div class="binding" id="next3">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindphone" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-success mt-40">
 						<ul>
 							<li><img src="${uedroot }/images/rech-win.png"></li>
 							<li class="word"><spring:message code="ycupdateemail.modifybindphone.success" /></li>
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
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindphone" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-form-label mt-30 ">
 						<ul>
 							<li>
 								<label class="ml-70" id="emailErrMsg" style="display: none;"></label>
 								<p class="word" ><spring:message code="ycupdateemail.bindedemail" /></p>
 								<p id="bindEmail">${sessionScope.user_session_key.email}</p>
 							</li>
 							<li>
 								<p class="word"><spring:message code="ycupdateemail.dynamiccode" /></p>
 								<p><input type="text" class="int-text int-in radius" id="emailIdentifyCode"></p>
 								<p><input type="button" class="btn border-green border-sma radius btn-medium" id="sendEmailBtn" value='<spring:message code="ycupdateemail.getdynamiccode" />'></p>
 								<p><a href="#" id="goEmail"><spring:message code="ycupdateemail.immediatelyentryemail" /></a></p>
 							</li>
 						</ul>
 					</div>
 				
 				
 				<!--按钮-->
 				<div class="recharge-btn">
 						<input type="button" id="next-bt4" class="btn btn-green btn-xxxlarge radius10" value=<spring:message code="ycupdateemail.nextstep" />>
 				</div>
 				</div>
 				<div class="binding" id="next5">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindphone" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-form-label mt-30 ">
 						<ul>
 							<li>
 								<label class="ml-70" id="emailUpdatePhoneErrMsg" style="display: none;"></label>
 								<p class="word"><spring:message code="ycupdateemail.phone" /></p>
 								<p>
									<select id="country3" class="select select-in radius"></select>
								</p>
 								<p><input type="text" class="int-text int-large radius" id="emailUpdatePhone"></p>
 							</li>
 							<li>
 								<p class="word"><spring:message code="ycupdateemail.veritycode" /></p>
 								<p><input type="text" class="int-text int-in radius" id="emailUValidateCode"></p>
 								<p><input type="button" class="btn border-green border-sma radius btn-medium" id="emailUpDynamicodeBtn" value='<spring:message code="ycupdateemail.getveritycode" />'></p>
 							</li>
 						</ul>
 					</div>
 				<!--按钮-->
 				<div class="recharge-btn">
 						<input type="button" id="next-bt5" class="btn btn-green btn-xxxlarge radius10" value='<spring:message code="ycupdateemail.submit" />'>
 				</div>
 				</div>
 				<div class="binding" id="next6">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word"><spring:message code="ycupdateemail.verify.identity" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word"><spring:message code="ycupdateemail.modify.bindphone" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word"><spring:message code="ycupdateemail.achieve" /></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-success mt-40">
 						<ul>
 							<li><img src="${uedroot }/images/rech-win.png"></li>
 							<li class="word"><spring:message code="ycupdateemail.modifybindphone.success" /></li>
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
<script type="text/javascript">
var current = "seccenterSettings";
var pager;
(function() {
	seajs.use('app/jsp/user/security/updateMobilePhone', function(updatePhonePager) {
		pager = new updatePhonePager({
			element : document.body
		});
		pager.render();
	});
})();
</script>
<script src="${_base}/resources/spm_modules/email/emailHandle.js"></script>
<script type="text/javascript">
	
	var phone = "${sessionScope.user_session_key.mobile}";
	var email = "${sessionScope.user_session_key.email}";
	$(document).ready(function(){
		$("#goEmail").click(function(){
			$emailHandle.openEmail(email);
		});
	});
	var updatePhoneJs = {
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
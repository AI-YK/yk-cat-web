<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<c:set var="_base" value="${pageContext.request.contextPath}"/>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>忘记密码</title>
   <%@ include file="/inc/inc.jsp" %>
</head>
<body>
	<!--头部-->
	<jsp:include page="/inc/userTopMenu.jsp"/>
  <!--二级主体-->
  <!--外侧背景-->
  <div class="cloud-container">
  <!--内侧内容区域-->
  <div class="cloud-wrapper">
  	
  	<!--右侧内容-->
  	<!--右侧大块-->
  	<div class="right-wrapper">
  		<!--右侧第一块-->
	
  		<!--右侧第二块-->
  		<form method="post">
  		<div class="login-big">
			<div class="login-headr"><p><img src="${uedroot }/images/login-logo.png" /></p><p class="word">忘记密码</p></div>
			
			<div class="password-bj">
				<!--输入账号-->
				<div class="back" id="back-pass">
				
				<!--修改手机号操作-->
				<div class="forget" id="back-pass1">
					<div class="recharge-unionPay set-up">
 						<ul>
 							<li id="phoneVerification"><a href="#" class="current"><i class="icon iconfont def">&#xe60b;</i><br>通过已验证手机验证<label></label></a></li>
 							<li id="emailVerification"><a href="#" class="ml-50"><i class="icon iconfont def">&#xe62f;</i><br>通过已验证邮箱验证<label></label></a></li>
 						</ul>
 					</div>
 				<!--tab1-->	
 				<div id="set-table1">
 					<div id="next1">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word">验证身份</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word">设置密码</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word">完成</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-form-label mt-30">
 						<ul>
 							<li>
 								<label class="ml-70" id="dynamicode" style="display: none;"></label>
 								<p class="word">手机:</p>
 								<p>
									<select id="country" class="select select-in radius"></select>
								</p>
 								
 								<p id="telephone"></p>
 							</li>
 							<li>
 								<p class="word">动态码:</p>
 								<p><input type="text" class="int-text int-in radius" id="phoneDynamicode"></p>
 								<p><input type="button" class="btn border-green border-sma radius btn-medium" id="send_dynamicode_btn" value="获取动态码">
 								</p>
 								
 							</li>
 						</ul>
 					</div>
 				
 				<!--按钮-->
 				<div class="recharge-btn btn40">
 						<input type="button" id="next-bt1" class="btn btn-green btn-xxxlarge radius10" value="下一步">
 				</div>	
				</div>
					<div id="next2">
	 					<!--步骤-->
	 					<div class="set-up-step">
	 						<!--进行的状态-->
				 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
				 			<ul>
				 				<li class="circle">1</li>
				 				<li class="word">验证身份</li>
				 			</ul>
				 			<p class="line"></p>
				 		</div>
				 		<!--未进行的状态-->
				 		<div class="place-step-none adopt-stgreen-bj shezh-line">
				 			<ul>
				 				<li class="circle">2</li>
				 				<li class="word">设置密码</li>
				 			</ul>
				 			<p class="line"></p>
				 		</div>
				 		<!--未进行的状态-->
				 		<div class="place-step-none adopt-stash-bj shezh-line">
				 			<ul>
				 				<li class="circle">3</li>
				 				<li class="word">完成</li>
				 			</ul>
				 			<p class="line"></p>
				 		</div>
	 					</div>
	 					<!--表单-->
	 					<div class="recharge-form-label mt-30 ">
	 						<ul>
	 							<li>
	 								<label class="ml-70" id="passwordMsg" style="display: none;">输入账号错误</label>
	 								<p class="word">密码:</p>
	 								<p><input type="text" class="int-text int-xlarge radius" id="password"></p>
	 							</li>
	 							<li>
	 								<p class="word">确认密码:</p>
	 								<p><input type="text" class="int-text int-xlarge radius" id="confirmPassword"></p>
	 							</li>
	 						</ul>
	 					</div>
	 				
	 				<!--按钮-->
	 				<div class="recharge-btn btn40">
	 						<input type="button" id="next-bt2" class="btn btn-green btn-xxxlarge radius10" value="下一步">
	 				</div>	
					</div>

					<div id="next3">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word">验证身份</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word">设置密码</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word">完成</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-success mt-40">
 						<ul>
 							<li><img src="${uedroot }/images/rech-win.png"></li>
 							<li class="word">密码设置成功</li>
 						</ul>
 					</div>
 				
				</div>
				</div>
				<!--tab1-->	
 				<div id="set-table2" style="display:none">
 					<div id="next4">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word">验证身份</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word">设置密码</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stash-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word">完成</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-form-label mt-30 ">
 						<ul>
 							<li>
 								<label class="ml-70" id="emailErrMsg" style="display: none;"></label>
 								<p class="word">邮箱:</p>
 								<p id="passwordEmail"></p>
 							</li>
 							<li>
 								<p class="word">验证码:</p>
 								<p><input type="text" class="int-text int-in radius" id="emailIdentifyCode"></p>
 								<p><input type="button" class="btn biu-btn radius btn-medium" value="发送验证邮件" id="sendEmailBtn"></p>
 								<p><a href="#" id="goEmail">立即进入邮箱</a></p>
 							</li>
 						</ul>
 					</div>
 				
 				<!--按钮-->
 				<div class="recharge-btn btn40">
 						<input type="button" id="next-bt4" class="btn btn-green btn-xxxlarge radius10" value="下一步">
 				</div>	
				</div>
					<div id="next5">
	 					<!--步骤-->
	 					<div class="set-up-step">
	 						<!--进行的状态-->
				 		<div class="place-step-none adopt-lightgreen-bj shezh-line" >
				 			<ul>
				 				<li class="circle">1</li>
				 				<li class="word">验证身份</li>
				 			</ul>
				 			<p class="line"></p>
				 		</div>
				 		<!--未进行的状态-->
				 		<div class="place-step-none adopt-stgreen-bj shezh-line">
				 			<ul>
				 				<li class="circle">2</li>
				 				<li class="word">设置密码</li>
				 			</ul>
				 			<p class="line"></p>
				 		</div>
				 		<!--未进行的状态-->
				 		<div class="place-step-none adopt-stash-bj shezh-line">
				 			<ul>
				 				<li class="circle">3</li>
				 				<li class="word">完成</li>
				 			</ul>
				 			<p class="line"></p>
				 		</div>
	 					</div>
	 					<!--表单-->
	 					<div class="recharge-form-label mt-30 ">
	 						<ul>
	 							<li>
	 								<label class="ml-70" id="emailPasswordErrMsg" style="display: none;"></label>
	 								<p class="word">密码:</p>
	 								<p><input type="text" class="int-text int-xlarge radius" id="emailPassword"></p>
	 							</li>
	 							<li>
	 								<p class="word">确认密码:</p>
	 								<p><input type="text" class="int-text int-xlarge radius" id="emailConfirmPassword"></p>
	 							</li>
	 						</ul>
	 					</div>
	 				
	 				<!--按钮-->
	 				<div class="recharge-btn btn40">
	 						<input type="button" id="next-bt5" class="btn btn-green btn-xxxlarge radius10" value="下一步">
	 				</div>	
					</div>

					<div id="next6">
 					<!--步骤-->
 					<div class="set-up-step">
 						<!--进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">1</li>
			 				<li class="word">验证身份</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-lightgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">2</li>
			 				<li class="word">设置密码</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-stgreen-bj shezh-line">
			 			<ul>
			 				<li class="circle">3</li>
			 				<li class="word">完成</li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
 					</div>
 					<!--表单-->
 					<div class="recharge-success mt-40">
 						<ul>
 							<li><img src="${uedroot }/images/rech-win.png"></li>
 							<li class="word">密码设置成功</li>
 						</ul>
 					</div>
 			
				</div>
				</div>
			
		</div>	
		</div>
		
  	</div>
  	</form>
  </div>
  </div>
  </div>
<%@ include file="/inc/incJs.jsp" %>
<script type="text/javascript">
var pager;
(function() {
	seajs.use('app/jsp/user/password/password', function(passwordPager) {
		pager = new passwordPager({
			element : document.body
		});
		pager.render();
	});
})();
</script>
<script src="${_base}/resources/spm_modules/email/emailHandle.js"></script>
<script type="text/javascript">
	var email = "${data.email}";
	$(document).ready(function(){
		$("#goEmail").click(function(){
			$emailHandle.openEmail(email);
		});
	});
	var passwordMsg = {
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
		};
</script>

</body>
</html>
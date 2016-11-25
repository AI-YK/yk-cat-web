<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title><spring:message code="ycaccountcenter.title"/> </title>

 	<%@ include file="/inc/inc.jsp"%>
</head>
<body>
<!--弹出-->	
<div class="eject-big">
		<div class="prompt-samll" id="modify-password">
		<div class="prompt-samll-title"><spring:message code="ycaccountcenter.updatePassword.title"/></div>
		<!--确认删除-->
		<div class="prompt-samll-confirm">
			<ul class="pass-list">
			<li>
				<p class="word"><spring:message code="ycaccountcenter.updatePassword.currentPassword"/></p>
				<p><input maxlength="16" id="currentPassword" type="password" class="int-text int-in-200 radius"></p>
			</li>
			<li>
				<p class="word"><spring:message code="ycaccountcenter.updatePassword.newPassword"/></p>
				<p><input maxlength="16" id="newPassword" type="password" class="int-text int-in-200 radius"></p>
			</li>
			<li>
				<p class="word"><spring:message code="ycaccountcenter.updatePassword.repeatPassword"/></p>
				<p><input maxlength="16" id="newPassword2" type="password" class="int-text int-in-200 radius"></p>
			</li>
			<li class="eject-btn">
				<input type="button" id="modify-determine" class="btn btn-green btn-120 radius20" value="<spring:message code="ycaccountcenter.updatePassword.confirm"/>">
				<input type="button" id="modify-close" class="btn border-green btn-120 radius20" value="<spring:message code="ycaccountcenter.updatePassword.cancel"/>">
			</li>		
			</ul>
		</div>
		</div>	
	<div class="mask" id="eject-mask"></div>
</div>

<!--弹出-->	
<div class="eject-big">
		<div class="prompt-samll" id="pay_modify-password">
		<div class="prompt-samll-title"><spring:message code="ycaccountcenter.updatePassword.title"/></div>
		<!--确认删除-->
		<div class="prompt-samll-confirm">
			<ul class="pass-list">
			<li>
				<p class="word"><spring:message code="ycaccountcenter.updatePassword.currentPassword"/></p>
				<p><input maxlength="16" id="pay_currentPassword" type="password" class="int-text int-in-200 radius"></p>
			</li>
			<li>
				<p class="word"><spring:message code="ycaccountcenter.updatePassword.newPassword"/></p>
				<p><input maxlength="16" id="pay_newPassword" type="password" class="int-text int-in-200 radius"></p>
			</li>
			<li>
				<p class="word"><spring:message code="ycaccountcenter.updatePassword.repeatPassword"/></p>
				<p><input maxlength="16" id="pay_newPassword2" type="password" class="int-text int-in-200 radius"></p>
			</li>
			<li class="eject-btn">
				<input type="button" id="pay_modify-determine" class="btn btn-green btn-120 radius20" value="<spring:message code="ycaccountcenter.updatePassword.confirm"/>">
				<input type="button" id="pay_modify-close" class="btn border-green btn-120 radius20" value="<spring:message code="ycaccountcenter.updatePassword.cancel"/>">
			</li>		
			</ul>
		</div>
		</div>	
	<div class="mask" id="pay_eject-mask"></div>
</div>
<!--/弹出结束-->	
  <!--头部-->
  <c:if test="${source=='user'}">
      <%@ include file="/inc/userTopMenu.jsp"%>
  </c:if>
  <c:if test="${source=='interpreter'}">
      <%@ include file="/inc/transTopMenu.jsp"%>
  </c:if>
  <!--二级主体-->
  <!--外侧背景-->
  <div class="cloud-container">
  <!--内侧内容区域-->
  <div class="cloud-wrapper">
  	<!--左侧菜单-->
  	<div class="left-subnav">
  	 <c:if test="${source=='user'}">
  	<%@ include file="/inc/leftmenu.jsp"%>
  	</c:if>
  <c:if test="${source=='interpreter'}">
  <%@ include file="/inc/transLeftmenu.jsp"%>
  </c:if>
  	</div>
  	<!--右侧内容-->
  	<!--右侧大块-->
  	<div class="right-wrapper">
  		<!--右侧第一块-->
	
  		<!--右侧第二块-->
  		<div class="right-list mt-0">
  			<div id="sec-level" class="security-title">
  			
  				<div class="security-chart">
  					<!-- <img  src="${uedroot}/images/anq.jpg" /> -->
  					<div id="indicatorContainer"></div>
  				</div>
  				
  				<div  id="sec-level-info"  class="security-word">
  					<ul>
  						<li ><spring:message code="ycaccountcenter.accountleveltip"/></li>
  						<li id="sec-level-info-account-level" class="red"><spring:message code="ycaccountcenter.acc.level.danger"/></li>
  						<li id="sec-level-info-account-warn" class="ash"><spring:message code="ycaccountcenter.acc.level.danger.warning"/></li>
  					</ul>
  				</div>
  			</div>
  			<div class="security-list">
  				<ul>
  					<li id="login_password_icon_color" class="green"><i id="login_password_icon" class="icon-ok-sign"></i></li>
  					<li class="word"><spring:message code="ycaccountcenter.setting.loginpassword"/></li>
  					<li><spring:message code="ycaccountcenter.setting.loginpassword.tip"/></li>
  					<li class="right">
  					  <a href="javascript:void(0)" onclick="showUpdatePwd();"><spring:message code="ycaccountcenter.setting.set"/></a>
  					 </li>
  				</ul>
  				<ul>
  					<li id="login_email_icon_color" class="red"><i id="login_email_icon" class="icon-remove-sign"></i></li>
  					<li class="word"><spring:message code="ycaccountcenter.setting.email"/></li>
  					<li id="login_email_text"><spring:message code="ycaccountcenter.setting.email.unset"/></li>
  					<li class="right">
  					 <c:if test="${!isexistemail}">
  					  <a href="${_base}/p/security/bindEmail"><spring:message code="ycaccountcenter.setting.set"/></a>
  					 </c:if>
  					  <c:if test="${isexistemail}">
  					 <a href="${_base}/p/security/editEmail"><spring:message code="ycaccountcenter.setting.update"/></a>
  					 </c:if>
  					</li>
  				</ul>
  				<ul>
  					<li id="login_phone_icon_color" class="red"><i id="login_phone_icon" class="icon-remove-sign"></i></li>
  					<li class="word"><spring:message code="ycaccountcenter.setting.loginphone"/></li>
  					<li id="login_phone_text"><spring:message code="ycaccountcenter.setting.loginphone.unset"/></li>
  					<li class="right">
  					<c:if test="${!isexistphone}">
  					 <a href="${_base}/p/security/bindPhone"><spring:message code="ycaccountcenter.setting.set"/></a>
  					</c:if>
  					<c:if test="${isexistphone}">
  					 <a href="${_base}/p/security/editPhone"><spring:message code="ycaccountcenter.setting.set"/></a>
  					</c:if>
  					</li>
  				</ul>
  				<ul>
  					<li id="pay_password_icon_color"  class="red"><i id="pay_password_icon" class="icon-remove-sign"></i></li>
  					<li class="word"><spring:message code="ycaccountcenter.setting.paypassword"/></li>
  					<li id="pay_password_text"><spring:message code="ycaccountcenter.setting.paypassword.unset"/></li>
  					<li class="right"><a href="javascript:void(0);"onclick="showUpdatePayPwd();"><spring:message code="ycaccountcenter.setting.set"/></a></li>
  				</ul>
  			</div>
 			
  		</div>	
  	</div>
  	
  	
  </div>
  		
  </div>
</body>

<%@ include file="/inc/incJs.jsp" %>

<script src="${_base}/resources/spm_modules/radia/radialIndicator.js"></script>

<script type="text/javascript">
   var current = "seccenterSettings";
   
   
   
   
	var pager;
	(function() {
		seajs.use('app/jsp/user/security/securitycenter', function(secXXXPager) {
			pager = new secXXXPager({
				element : document.body
			});
			pager.render();
		});
	})();
	
	var isexistemail = "${isexistemail}";
	var isexistphone = "${isexistphone}";
	var isexistpaypassword = "${isexistpaypassword}"
	var securitylevel = "${securitylevel}";
	var userEmail = "${userinfo.email}"
	var userMobile = "${userinfo.mobile}";
	var secCenterMsg = {
			"showOkValueMsg" : '<spring:message code="ycaccountcenter.js.showOkValueMsg"/>',
    		"showTitleMsg" : '<spring:message code="ycaccountcenter.js.showTitleMsg"/>',
    		"currentPasswordEmpty" : '<spring:message code="ycaccountcenter.updatePassword.currentPasswordEmpty"/>',
    		"newPasswordEmpty" : '<spring:message code="ycaccountcenter.updatePassword.newPasswordEmpty"/>',
    		"newPasswordError" : '<spring:message code="ycaccountcenter.updatePassword.newPasswordError"/>',
    		"repeatPasswordError" : '<spring:message code="ycaccountcenter.updatePassword.repeatPasswordError"/>',
			"email_set"       : '<spring:message code="ycaccountcenter.setting.email.set"/>',
			"login_phone_set" : '<spring:message code="ycaccountcenter.setting.loginphone.set"/>',
			"paypassword_set" : '<spring:message code="ycaccountcenter.setting.paypassword.set"/>'
		};

	$(document).ready(function(){
		var accLevelInfo = $("#sec-level-info-account-level");
		if(parseInt(securitylevel) < 60)
		{
			accLevelInfo.html('<spring:message code="ycaccountcenter.acc.level.danger"/>');
			$("#sec-level-info-account-warn").html('<spring:message code="ycaccountcenter.acc.level.danger.warning"/>');
		}
		if(parseInt(securitylevel) >= 60 && parseInt(securitylevel) < 100)
		{
			accLevelInfo.html('<spring:message code="ycaccountcenter.acc.level.warn"/>');
			$("#sec-level-info-account-warn").html('<spring:message code="ycaccountcenter.acc.level.warn.warning"/>');
		}
		if(parseInt(securitylevel) == 100)
		{
			accLevelInfo.html('<spring:message code="ycaccountcenter.acc.level.safe"/>');
			$("#sec-level-info-account-warn").html('<spring:message code="ycaccountcenter.acc.level.safe.warning"/>');
		}
		
		// 环形
		$('#indicatorContainer').radialIndicator({
				radius : 100,
				barColor: {
	                0: '#FF0000',
	                33: '#FFFF00',
	                66: '#0066FF',
	                100: '#33CC33'
	            },
	            frameTime : 20,
	            percentage: true
		});
		var radialObj = $('#indicatorContainer').data('radialIndicator');
		radialObj.animate(parseInt(securitylevel));
		
	});
	function showUpdatePwd(){
		if(isexistpaypassword){
			$('#eject-mask').fadeIn(100);
			$('#modify-password').slideDown(100);
		}else{
			location.href="${_base}/p/security/updatePassword";
		}
	}
	function showUpdatePayPwd(){
		if(isexistpaypassword){
			$('#pay_eject-mask').fadeIn(100);
			$('#pay_modify-password').slideDown(100);
		}else{
			location.href="${_base}/p/security/updatePayPassword";
		}
	}
</script>
   
</html>
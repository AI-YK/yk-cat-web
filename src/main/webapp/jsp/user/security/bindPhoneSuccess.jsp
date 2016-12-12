<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title></title>
<%@ include file="/inc/inc.jsp"%>
</head>
<body>
	<!--头部-->
	<jsp:include page="/inc/userTopMenu.jsp"/>
	<!--二级主体-->
	<!--外侧背景-->
	<div class="cloud-container">
		<!--内侧内容区域-->
		<div class="cloud-wrapper">
			<!--左侧菜单-->
			<div class="left-subnav">
				<jsp:include page="/inc/leftmenu.jsp" />
			</div>
			<!--右侧内容-->
			<!--右侧大块-->
			<div class="right-wrapper">
  		<div class="right-wrapper">
  			<div class="right-wrapper">
  		<!--右侧第一块-->
	
  		<!--右侧第二块-->
  		<div class="right-list mt-0">
  			<div class="right-list-title pb-10 pl-20">
  				<p><spring:message code="ycaccountcenter.bindphone.title"/></p>	
  			</div>
  			<!--绑定手机-->
 			<div class="recharge mt-30">
 				<!--绑定成功-->
 					<div class="recharge-success mt-170">
 						<ul>
 							<li><img src="${uedroot}/images/rech-win.png" /></li>
 							<li class="word"><spring:message code="ycaccountcenter.bindphone.success"/></li>
 						</ul>
 					</div>
 			</div>
 			</div>
 			</div>
  		</div>
	  </div>
	</div>

	</div>
</body>
<%@ include file="/inc/incJs.jsp"%>
<script type="text/javascript" src="${uedroot}/scripts/modular/frame.js"></script>
<script type="text/javascript" src="${uedroot}/scripts/modular/eject.js"></script>

<script type="text/javascript">
	var phone = "${user.mobile}";
	var email = "${user.email}";
</script>
</html>

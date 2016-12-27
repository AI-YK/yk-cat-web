<%@page import="com.ai.yk.protal.web.utils.SessionUtil"%>
<%@page import="java.util.Locale"%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ include file="/inc/incJs.jsp"%>
<%
  SessionUtil.initUrlConfig(request);
%>
<!--主导航-->
<div class="yeesight-nav">
	<div class="nav-main">
		<div class="yeesight-logo">
			<a href="${_base}/home/index"><img src="${uedroot}/images/logo.png" /></a>
		</div>
		<div class="mainbav right">
		        <input id="current" type="hidden" value="${current}"/>
				<ul id="menu">
					<li><a href="${_base}/home/index">首页</a></li>
					<li><a target="_bank" href="${yeesightUrls.yeesightSubjectAnalysisUrl}">专题分析</a></li>
					<li><a href="${_base}/newsbmap/toHeat">热点发现</a></li>
					<li><a href="${_base}/search/public">舆情动态</a></li>
					<li class="search">
					 <input type="text" id="_keyword" value="${_keyword}" class="search-medium" onfocus="this.placeholder=''" onblur="this.placeholder='搜索'" placeholder="搜索"/><a id="_searchBtn" href="javascript:void(0);"><i class="icon iconfont">&#xe658;</i></a>
					</li>
					<li class="iphone-show"><img src="${uedroot}/images/user.png" /></li>
					<div class="user-show" id="user-show" style="right: -45px;">
						<span><img src="${uedroot}/images/xf-sj.png"></span>
						<ul>
							<a href="${yeesightUrls.accountUrl}" target="_blank" class="ahov1"><li><i class="icon iconfont">&#xe661;</i>我的译见</li></a>
							<a href="${yeesightUrls.dataUrl}" target="_blank" class="ahov2"><li><i class="icon iconfont">&#xe662;</i>数据管理</li></a>
							<a href="#" class="ahov3"><li><i class="icon iconfont">&#xe663;</i>退出登录</li></a>
						</ul>
					</div>
				</ul>
		</div>
	</div>
</div>
<form id="loginJumpFormId" method="post" style="visibility: hidden;">
      <input type="hidden" name="url" id="loginSuccessUrl">
</form>
<script type="text/javascript">
 var topPage;
(function () {
    seajs.use('app/jsp/top/header', function (headerPage) {
    	topPage = new headerPage({element: document.body});
    	topPage.render();
    });
})();
</script>


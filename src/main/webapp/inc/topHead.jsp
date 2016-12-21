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
			<img src="${uedroot}/images/logo.png" />
		</div>
		<div class="mainbav right">
		        <input id="current" type="hidden" value="${current}"/>
				<ul id="menu">
					<li><a href="${_base}/home/index">首页</a></li>
					<li><a target="_bank" href="${yeesightUrls.yeesightSubjectAnalysisUrl}">专题分析</a></li>
					<li><a href="${_base}/newsbmap/news_heat_n.jsp">热点发现</a></li>
					<li><a href="${_base}/search/public">舆情动态</a></li>
					<c:if test="${!noSearch}">
					 <li class="search">
					 <input id="_keyword" onfocus="this.placeholder=''" onblur="this.placeholder='搜索'" type="text" class="search-medium" placeholder="搜索"><a id="_searchBtn" style="cursor: pointer;"><i class="icon iconfont">&#xe658;</i></a>
					 </li>
					</c:if>
					<li class="iphone-show">
					 <i class="ico_user"></i>
					</li>
					<div class="user-show" id="user-show">
						<span><i class="icon iconfont">&#xe65a;</i></span>
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


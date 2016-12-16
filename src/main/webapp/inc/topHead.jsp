<%@page import="java.util.Locale"%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ include file="/inc/incJs.jsp"%>
<!--面包屑－导航--> 
<div class="heard-breadcrumb">
	<div class="breadcrumb-main">
		<ul>
			<c:if test="${!isLogin}">
			<li class="left">
				<p>
					<a id="login" href="javascript:void(0);">登录</a>|
				</p>
				<p>
					<a id="regist" href="javascript:void(0);">注册</a>
				</p>
			</li>
			</c:if>
			<li class="right">
					<c:if test="${isLogin}">
					<p class="posi">
						<a href="#">${user.nickName}<i class="icon iconfont">&#xe659;</i>
						</a>|
					</p>
					<div class="user-show" id="user-show">
						<span><i class="icon iconfont">&#xe65a;</i></span>
						<ul>
							<a href="#" class="ahov1"><li><i class="icon iconfont">&#xe63b;</i>我的译见</li></a>
							<a href="#" class="ahov2"><li><i class="icon iconfont">&#xe63b;</i>数据管理</li></a>
							<a href="#" class="ahov3"><li><i class="icon iconfont">&#xe63d;</i>退出登录</li></a>
						</ul>
					</div>
					</c:if>
					<p class="iphone">
						<a href="#">
						<span><i class="icon iconfont">&#xe613;</i></span>

						<span>手机版</span>
						</a>
					</p>
					<div class="erw-show" id="erw-show">
						<span><i class="icon iconfont">&#xe65a;</i></span>
						<p><img src="${uedroot}/images/erwnew.jpg"></p>
					</div>
						<!--<p><a href="#">EN</a>|</p>

					<p><a href="#">中文</a></p>-->
			</li>
		</ul>
	</div>
</div>
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
					<li><a target="_bank" href="${subjectAnalysisUrl}">专题分析</a></li>
					<li><a href="#">热点发现</a></li>
					<li><a href="${_base}/search/public">舆情动态</a></li>
					<c:if test="${!noSearch}">
					 <li class="search">
					 <input id="_keyword" onfocus="this.placeholder=''" onblur="this.placeholder='搜索'" type="text" class="search-medium" placeholder="搜索"><a id="_searchBtn" style="cursor: pointer;"><i class="icon iconfont">&#xe658;</i></a>
					 </li>
					</c:if>
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


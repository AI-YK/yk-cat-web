<%@page import="java.util.Locale"%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!--面包屑－导航-->
<div class="heard-breadcrumb">
	<div class="breadcrumb-main">
		<ul>
			<li class="left">
				<p>
					<a id="login" href="javascript:void(0);">登录</a>|
				</p>
				<p>
					<a id="regist" href="http://buzz.yeesight.com/register">注册</a>
				</p>
			</li>
			<li class="right">
				<p>
					<a href="#"> <span><i class="icon iconfont">&#xe613;</i></span>
						<span>手机版</span>
					</a>
				</p>
				<p>
					<a href="#">EN</a>|
				</p>
				<p>
					<a href="#">中文</a>
				</p>
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
			<ul>
				<li><a href="#" class="current">首页</a></li>
				<li><a href="#">专题</a></li>
				<li><a href="#">热点</a></li>
				<li><a href="#">预警</a></li>
				<li><a href="#">简报</a></li>
				<li><a href="#">海外媒体</a></li>
				<li><a href="#"><i class="icon iconfont">&#xe658;</i></a></li>
			</ul>
		</div>
	</div>
</div>
<form id="loginJumpFormId" method="post" style="visibility: hidden;">
      <input type="hidden" name="url" id="loginSuccessUrl">
</form>

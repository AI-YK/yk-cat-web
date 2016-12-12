<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page import="java.util.Locale"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
	<div class="header-big">
  	<div class="cloud-header">
  		<div class="logo">
			<a href="${pageContext.request.contextPath}/">
			<img src="${pageContext.request.contextPath}/resources/template/images/logo<%= !Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())?"_en":""%>.png" />
			</a>
		</div>
  		<!--导航-->
  		<div class="cloud-nav">
  			<ul>
  				<li ><a href="${_base}/p/security/index"><spring:message code="user.topMenu.iClient"/></a></li>
  				<li class="current"><a href="${_base}/p/security/interpreterIndex"><spring:message code="user.topMenu.iLsp"/></a></li>
  			</ul>
  		</div>
  		<!--导航-->
  		<div class="cloud-breadcrumb">
  			<ul>
  				<li>
					<select id="langHeadSel" class="select select-topmini none-select" onchange="changeLang()">
						<option value="<%= Locale.SIMPLIFIED_CHINESE%>">简体中文</option>
						<option value="<%= Locale.US%>"
								<%= !Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())?"selected":""%>
						>ENGLISH</option>
					</select>
  					<i class="icon-caret-down dingw"></i>
  				</li>
  				<li class="nav-icon"><a href="#"><i class="icon iconfont">&#xe60b;</i></a></li>
  				<li class="nav-icon mt-2"><a href="#"><i class="icon iconfont">&#xe60a;</i><span class="message">3</span></a></li>
				<li class="user"><a href="javaScript:void(0)" class="yonh">爱大脸大脸<i class="icon-caret-down btg" id="icon2"></i></a>
  					<div class="show">
  						<ul>
  							<li><i class="icon-user"></i><a href="#"><spring:message code="user.topMenu.perProfile"/></a></li>
  							<li><i class="icon-lock"></i><a href="#"><spring:message code="user.topMenu.secSetting"/></a></li>
  							<li><i class="icon-off"></i><a href="${_base}/ssologout"><spring:message code="user.topMenu.exit"/></a></li>
  						</ul>
  					</div>
  				</li>
  			</ul>
  		</div>
  	</div>
  </div>
<script type="application/javascript">
		function changeLang(){
			var toLang = document.getElementById("langHeadSel").value;
			if (window.console){
				console.log("the new lange is "+toLang);
			}
			var nowUrl = window.location.href;
			var lInd = nowUrl.indexOf("lang=");
			//已存在
			if (lInd>0){
				var i = nowUrl.indexOf("&",lInd);
				var endStr = i>0?nowUrl.substring(i):"";
				nowUrl = nowUrl.substring(0,lInd)+"lang="+toLang+endStr;
			}//不存在
			else if(nowUrl.indexOf("?")>0){
				nowUrl = nowUrl + "&lang="+toLang;
			}else {
				nowUrl = nowUrl + "?lang="+toLang;
			}

			window.location.replace(nowUrl);//刷新当前页面
		}
</script>
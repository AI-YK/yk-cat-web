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
		<%-- <div class="yeesight-logo">
			<a href="${_base}/home/index"><img src="${uedroot}/images/logo.png" /></a>
		</div> --%>
		<div class="yeesight-logo"><img src="${uedroot}/images/logo<%= !Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())?"-en":"-ch"%>.png" usemap="#Map"/>
              <map name="Map">
                <area shape="rect" coords="0,0,112,40" href="http://www.yeesight.com/" onfocus="blur(this);" >
                <area shape="rect" coords="115,0,240,40" href="${_base}/home/index" onfocus="blur(this);"  >
              </map>
		  </div>
		  <div class="ind-hid">
            <p><i class="icon iconfont ishow">&#xe659;</i></p>
            <div class="ind-show" id="ind-show">
                <span><img src="${uedroot}/images/xf-sj.png"></span>
                <ul>
                    <h4 style="color:white;text-align:center;"><spring:message code="home.nav.ind.general"/></h4>
                    <a href="http://buzz.yeesight.com" target="_self" class="ahov2"><li><spring:message code="home.nav.bar.agentanalysis"/></li></a>
                    <a href="http://news.yeesight.com" target="_self" class="ahov2"><li><spring:message code="home.nav.ind.globalhot"/></li></a>
                    <li style="text-align:center;">--------------</li>
                    <h4 style="color:white;text-align:center;"><spring:message code="home.nav.ind.industry"/></h4>
                    <a href="http://www.yeesight.com/" target="_self" class="ahov2"><li><spring:message code="home.nav.ind.safety"/></li></a>
                    <a href="http://media.yeesight.com" target="_self" class="ahov2"><li><spring:message code="home.nav.ind.news"/></li></a>
                    <a href="http://finance.yeesight.com" target="_self" class="ahov3"><li><spring:message code="home.nav.ind.finance"/></li></a>
                </ul>
            </div>
          </div>
		<div class="mainbav right">
		        <input id="current" type="hidden" value="${current}"/>
				<ul id="menu">
					<li><a href="${_base}/home/index"><spring:message code="home.nav.bar.home"/></a></li>
					<li><a target="_bank" href="${yeesightUrls.yeesightSubjectAnalysisUrl}"><spring:message code="home.nav.bar.agentanalysis"/></a></li>
					<li><a href="javascript:void(0);"><spring:message code="home.nav.bar.hot"/></a></li>
					<li><a href="${_base}/search/public"><spring:message code="home.nav.bar.public"/></a></li>
					<li class="search">
					    <input onfocus="this.placeholder=''" onblur="this.placeholder='<spring:message code="home.nav.bar.search"/>'"  type="text" id="_keyword" value="${_keyword}" class="search-medium" placeholder="<spring:message code="home.nav.bar.search"/>"/><a id="_searchBtn" href="#"><i class="icon iconfont">&#xe658;</i></a>
					</li>
					<li class="language" ><c:if test="${_currentLan=='en_US'}">中文</c:if><c:if test="${_currentLan=='zh_CN'}">EN</c:if><i class="icon iconfont">&#xe659;</i></li>
					<div class="language-show" id="language-show" >
						<span><img src="${uedroot}/images/xf-sj.png"></span>
						<ul>
							<a href="${_realPath}?lang=zh_CN" class="ahov1"><li style="text-align:center;">中文</li></a>
							<a href="${_realPath}?lang=en_US" class="ahov3"><li style="text-align:center;">EN</li></a>
						</ul>
					</div>
					<li class="iphone-show"><img src="${uedroot}/images/user.png" /></li>
					<div class="user-show" id="user-show">
						<span><img src="${uedroot}/images/xf-sj.png"></span>
						<ul>
							<a href="${yeesightUrls.accountUrl}" target="_blank" class="ahov1"><li><i class="icon iconfont">&#xe661;</i><spring:message code="home.nav.bar.myyeeSight"/></li></a>
							<a href="${yeesightUrls.dataUrl}" target="_blank" class="ahov2"><li><i class="icon iconfont">&#xe662;</i><spring:message code="home.nav.bar.datamanagement"/></li></a>
							<a href="javascript:void(0);" class="ahov3"><li><i class="icon iconfont">&#xe663;</i><spring:message code="home.nav.bar.logout"/></li></a>
						</ul>
					</div>
					<li class="s-dh" id="shuj"><i class="icon iconfont">&#xe66a;</i></li>
					<div class="data-show" id="data-show">
						<span><img src="${uedroot}/images/xf-sj.png"></span>
						<ul>
							<a href="javascript:void(0);" class="ahov1" id="currency-btn"><li><spring:message code="home.nav.bar.generaldata"/></li></a>
							<c:if test="${hasTopic}">
							   <a href="javascript:void(0);" class="ahov3"><li><spring:message code="home.nav.bar.customized"/></li></a>
							</c:if>
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


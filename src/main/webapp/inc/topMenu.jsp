<%@page import="java.util.Locale"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!--主导航-->
<div class="placeorder-subnav-big">
    <div class="placeorder-subnav">
        <ul>
            <li class="logo"><a href="${_base}/">
                <img src="${pageContext.request.contextPath}/resources/template/images/logo1<%= !Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())?"_en":""%>.png" /></a></li>
            <li class="right">
                <%--首页--%>
                <p><a href="${_base}/"><spring:message code="topMenue.home"/></a></p>
                    <%--笔译--%>
                <p><a href="${_base}/written"><spring:message code="topMenue.written"/></a></p>
                    <%--口译--%>
                <p><a href="${_base}/oral"><spring:message code="topMenue.oral"/></a></p>
                    <%--服务--%>
                <p><a href="${_base}/service"><spring:message code="topMenue.Services"/></a></p>
                    <%--APP--%>
                <p><a href="${_base}/findyee"><spring:message code="topMenue.APP"/></a></p>
                    <%--字幕--%>
                <p><a href="${_base}/yeecaption"><spring:message code="topMenue.YeeCaption"/></a></p>
                    <%--译库网翻译--%>
                <p><a href="http://web.yeekit.com/" target="_blank"><spring:message code="topMenue.YeeWeb"/></a></p>
                    <%--社区--%>
                <p><a href="http://club.yeecloud.com" target="_blank"><spring:message code="topMenue.Club"/></a></p>
            </li>
        </ul>
    </div>
</div>
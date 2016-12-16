<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<fmt:setTimeZone value="${sessionScope.USER_TIME_ZONE}" scope="session"/>
<c:set var="_base" value="${pageContext.request.contextPath}"/>
<c:set var="rootRes" value="${_base}/resources"/>
<c:set var="spmRes" value="${_base}/resources/spm_modules"/>
<c:set var="uedroot" value="${pageContext.request.contextPath}/resources/template"/>
<%
    response.setHeader("Cache-Control", "no-cache");
    response.setDateHeader("Expires", 0);
    response.setHeader("Pragma", "No-cache");
%>



<link href="${uedroot}/css/iconfont.css" rel="stylesheet" type="text/css">
<link href="${uedroot}/css/modular/global.css" rel="stylesheet" type="text/css"/>
<link href="${uedroot}/css/modular/headr-footer.css" rel="stylesheet" type="text/css"/>
<link href="${uedroot}/css/modular/ext.css" rel="stylesheet" type="text/css"/>
<link href="${uedroot}/css/modular/prompt.css" rel="stylesheet" type="text/css"/>


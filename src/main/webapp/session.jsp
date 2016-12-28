<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.util.*,com.google.gson.Gson" %>
<%@page import="com.ai.yk.protal.web.utils.ConfigUtil" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>session</title>
</head>
<body>
<%
    Enumeration<?> enumeration = request.getSession().getAttributeNames();
    while (enumeration.hasMoreElements()) {
	   String sessionName = (String) enumeration.nextElement();
	   Object obj = request.getSession().getAttribute(sessionName);
	   Gson gson = new Gson();
	   out.print(sessionName+":");
	   out.print(gson.toJson(obj));
	   out.print("<br/><br/>");
    }
    
%>
<br/>
<a href="http://buzz.yeesight.com/person/account">个人中心</a>
</body>
</html>

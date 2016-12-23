<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*" %>
<html>
<body>

<%
   // 转发到新地址
   String url = new String("/newsbmap/news_heat_n.jsp");
   request.getRequestDispatcher(url).forward(request, response);
%>

</body>
</html>
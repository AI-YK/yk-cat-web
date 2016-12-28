<%@page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>登录</title>
</head>
<body>
<form action="${pageContext.request.contextPath}/user/log" method="post">
   用户名：<input name="userName" value="18589043750"/><br/>
   密码：<input name="password" value="123456"/><br/>
 <input type="submit" value="登录"/>  
</form>
</body>
</html>

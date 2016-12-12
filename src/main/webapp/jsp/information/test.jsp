<%@ page language="java" contentType="text/html;charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<title></title>
<%@ include file="/inc/inc.jsp"%>
</head>
<body>
	<div style="display: block;">
		<script id="editor" type="text/plain"
			style="width:800px;height:300px;">22</script>
	</div>
	<div id="btns">
	<input type="button" onclick="getContent()" value="获得内容"/>
    
</div>
	
</body>
<%@ include file="/inc/incJs.jsp"%>
<%@ include file="/inc/incUmeditor.jsp"%>

<script type="text/javascript">
	var um = UM.getEditor('editor');
	function getContent(){
		 alert(um.getContent());

	}
</script>
</html>
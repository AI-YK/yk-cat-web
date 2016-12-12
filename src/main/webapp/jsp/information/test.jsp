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
			style="width:800px;height:300px;"></script>
	</div>
</body>
<%@ include file="/inc/incJs.jsp"%>

<script
	src="${_base}/resources/spm_modules/umeditor/third-party/jquery.min.js"></script>
<script src="${_base}/resources/spm_modules/umeditor/umeditor.config.js"></script>
<script src="${_base}/resources/spm_modules/umeditor/umeditor.min.js"></script>
<script
	src="${_base}/resources/spm_modules/umeditor/lang/zh-cn/zh-cn.js"></script>
<link
	href="${_base}/resources/spm_modules/umeditor/themes/default/css/umeditor.css"
	rel="stylesheet" type="text/css"/>
<script type="text/javascript">
	var um = UM.getEditor('editor');

	
</script>
</html>
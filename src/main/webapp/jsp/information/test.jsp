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
	<!-- 加载编辑器的容器 -->
	<script id="container" name="content" type="text/plain"  style="width:800px;height:400px;">
        这里写你的初始化内容
    </script>
</body>
<%@ include file="/inc/incJs.jsp"%>
<script src="${_base}/resources/spm_modules/ueditor/ueditor.simple.config.js"></script>
<script src="${_base}/resources/spm_modules/ueditor/ueditor.all.js"></script>
<script src="${_base}/resources/spm_modules/ueditor/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript">
	var ue = UE.getEditor('container');

	(function() {
		var pager;
		seajs.use('app/jsp/information/test', function(testPage) {
			pager = new testPage({
				element : document.body
			});
			pager.render();
		});
	})();
</script>
</html>
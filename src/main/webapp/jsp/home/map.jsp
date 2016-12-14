<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>  
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
<title>地图</title>  
<style type="text/css">  
  html{height:100%}  
body{height:100%;margin:0px;padding:0px}   
 #container{height:100%}    
</style>  
</head>

<body>  
<div id="container"></div> 
<script type="text/javascript"> 
function initialize() {  
	var map = new BMap.Map("container");          // 创建地图实例  
	var point = new BMap.Point(121.2134, 31.0576);  // 创建点坐标  
	map.centerAndZoom(point, 20);                 // 初始化地图，设置中心点坐标和地图级别  
} 

function loadScript() {
	        var script = document.createElement("script");
	        script.src = "http://api.map.baidu.com/api?v=1.4&callback=initialize";
	        document.body.appendChild(script);
}
window.onload = loadScript;

</script>  
</body>  
</html>
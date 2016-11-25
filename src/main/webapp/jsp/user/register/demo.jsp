<%--
  Created by IntelliJ IDEA.
  User: jackieliu
  Date: 16/10/31
  Time: 下午7:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="_base" value="${pageContext.request.contextPath}"/>
<html>
<head>
    <title>Title</title>
    <script src="${_base}/resources/spm_modules/jquery/1.9.1/jquery.min.js"></script>
    <script type="text/javascript">
	    $(function(){
	    	var flag = false;
	    	
	    	 $("#bmt").click(function(){
	    		 var mtstr = $("#selectid").val();
	    		 var datastr;
	    		 if (mtstr == "zh2en") {
	    			 datastr = 'from=zh&to=en';
	    		 } else {
	    			 datastr = 'from=en&to=zh';
	    		 }
	    		 datastr += '&text='+$.trim($("#iform").val());
	    		 $.ajax({   
	    			    url:'<%=request.getContextPath()%>/mt',   
	    			    type:'post',   
	    			    data: datastr,   
	    			    async : false, //默认为true 异步   
	    			    error:function(){   
	    			       alert('error');   
	    			    },   
	    			    success:function(data){   
	    			    	//var restr =encodeURIComponent(data.data.text);
	    			    	console.log(data.data.text);
	    			    	$("#ito").val(data.data.text);
	    			    }
	    		});
	    	 });
	    	 
	    	 
	    	
	    	 $("#bss").click(function(){
	    		 var mtstr = $("#selectid").val();
	    		 var myAudio = document.getElementById('audio1');
		    	  if(myAudio.paused){
	 		        	var itostr = $.trim($("#ito").val());
	 		        	if(itostr != null){
	 		        		 var playUrl = '<%=request.getContextPath()%>/Hcicloud/text2audio';
	 		        		 if (mtstr == "zh2en") {
	 		        			 playUrl += '?lan=en';
	 		        		 } else {
	 		        			 playUrl += '?lan=zh';
	 		        		 }
	 		        		 playUrl += '&text='+$.trim($("#ito").val());
	 		        		 $("#audio1").attr("src", playUrl);
	 		        		 console.log(playUrl);
	 		        		 myAudio.play();
	 		        	}
	 		        }else{
	 		            myAudio.pause();
	 		        }
	    	 });
	    });
	    
	  
    </script>
</head>
<body>
	<select id="selectid"> 
  		<option value ="zh2en">中-英</option>
  		<option value ="en2zh">英-中</option>
  	</select>
  	<button type="button" id="bmt">翻译</button>
  	
  	<div>
  		<textarea rows="3" cols="20" id="iform">
  		</textarea>
  	</div>
  	<div>
  		<textarea rows="3" cols="20"  id="ito">
  		</textarea>
  	</div>
  	<button type="button" id="bss">播放/暂停</button>
  	
  	
  	<audio src="" controls="controls" id="audio1">
		Your browser does not support the audio tag.
	</audio>
</body>
</html>

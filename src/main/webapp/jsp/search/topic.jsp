<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<div class="levle-right-news">
	<div class="levle-right-title">热点资讯</div>
	<div id="topic-list" class="sentiment-list-conter-news">
		
	</div>
</div>
<script id="topicTempl" type="text/x-jsrender">
   <ul class="bordernone">
	   <li class="block {{if #index>2}}ash{{else}}orange{{/if}}">{{:#index+1}}</li>
	   <li style="width:80%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">
             <a href="#" >{{:zhTitle}}</a>
       </li>
	   <li class="date">{{:heatValue}}</li>
   </ul>
</script>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!--热点新闻-->
<div class="hot-news">
	<div class="hot-news-main">
		<div class="hot-news-main-left">
			<div class="sentiment-title blue">
				<ul>
					<li>新闻热点</li>
					<li class="right"><a href="#"><i class="icon iconfont">&#xe65b;</i></a></li>
				</ul>
			</div>
			<div class="news-tabtitle">
				<div class="hot-news-main-tab" id="news-tab">
					<ul id="news-media">
					</ul>
				</div>
				<div>
					<div class="hot-news-main-list" id="news-div">
						
					</div>
				</div>
			</div>
		</div>
		<div class="hot-news-main-left ml-20">
			<div class="sentiment-title blue">
				<ul>
					<li>社交热点</li>
					<li class="right"><a href="#"><i class="icon iconfont">&#xe65b;</i></a></li>
				</ul>
			</div>
			<div class="news-tabtitle">
				<div class="hot-news-main-tab" id="social-tab">
					<ul id="social-media">
					
					</ul>
				</div>
				<div>
					<div class="hot-news-main-list socialhot" id="social-div">
						
					</div>
				</div>


			</div>
		</div>

	</div>
</div>
<!--/热点新闻-->
<script id="newsHotTempl" type="text/x-jsrender">
 {{if #getIndex()<6}}
  <ul>
		<li>
			<p style="width:340px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
				<a href="javascript:void(0);">{{:titleZh}}</a>
			</p>
			<p>
				<span>{{:pubdate}}</span> <span class="blue">{{:mediaNameZh}}</span>
			</p>
		</li>
		<li class="right">{{:transfer}}</li>
	</ul>
  {{/if}}
</script>
<script id="socialHotTempl" type="text/x-jsrender">
 {{if #getIndex()<4}}
 <div class="socialhot-list">
			<div class="social-user">
                {{if userAvatar==null}}
				  <img src="${uedroot}/images/user.jpg" />
                {{else}}
                   <img src="{{:userAvatar}}" />
                {{/if}}
			</div>
			<ul>
				  <li>
					 <p class="word">
						<a href="#">{{:name}}</a>
					 </p>
					 <p style="width:340px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
						<a href="javascript:void(0);">{{:textZh}}</a>
					 </p>
					 <p>
						<span>{{:updateTimeStr}}</span> <span>{{:~conventSource(sourceType)}}</span>
					 </p>
				  </li>
				  <li class="right">{{:rpsCnt}}</li>
			</ul>
</div>
{{/if}}
</script>
<script id="newsMediaTempl" type="text/x-jsrender">
   <li><a href="javascript:void(0);" class="current">全部</a></li>
   {{for dics}}
     {{if #getIndex()<7}}
     <li>
       <a href="javascript:void(0);" style="text-align: center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor:hand;">{{:dicName}}</a>
       <intput type="hidden" value="{{:dicValue}}"/>
     </li>
     {{/if}}
   {{/for}}
</script>
<script id="socialMediaTempl" type="text/x-jsrender">
   <li><a href="javascript:void(0);" class="current">全部</a></li>
   {{for dics}}
    {{if #getIndex()<7}}
       <li><a href="javascript:void(0);" style="text-align:center;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;cursor:hand;
">{{:dicName}}</a><intput type="hidden" value="{{:dicValue}}"/></li>
    {{/if}}
  {{/for}}
</script>
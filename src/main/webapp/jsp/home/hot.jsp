<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!--热点新闻-->
<div class="hot-news">
	<div class="hot-news-main">
		<div class="hot-news-main-left">
			<div class="sentiment-title blue">
				<ul>
					<li><spring:message code="home.nav.content.newshot"/></li>
					<li class="right"><a target="_blank" href="${_base}/search/public?model=news"><i class="icon iconfont">&#xe65b;</i></a></li>
				</ul>
			</div>
			<div class="news-tabtitle">
				<div class="hot-news-main-tab" id="news-tab">
					<ul id="news-media">
					</ul>
					<ul id="topic-news-media" style="display: none;">
					   <li><a href="javascript:void(0);" class="current">全部</a></li>
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
					<li><spring:message code="home.nav.content.socialhot"/></li>
					<li class="right"><a target="_blank" href="${_base}/search/public?model=social"><i class="icon iconfont">&#xe65b;</i></a></li>
				</ul>
			</div>
			<div class="news-tabtitle">
				<div class="hot-news-main-tab" id="social-tab">
					<ul id="social-media">
					
					</ul>
					<ul id="topic-social-media" style="display: none;">
					   <li><a href="javascript:void(0);" class="current">全部</a></li>
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
 {{if #getIndex()<11}}
  <ul uuid="{{:uuid}}" >
		<li>
			<p style="width:340px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
				<a href="javascript:void(0);">{{:titleZh}}</a>
			</p>
			<p>
				<span>{{:pubdate}}</span> <span class="blue">{{:mediaNameZh}}</span>
			</p>
		</li>
		<li class="right">
           {{if transfer>0}}{{:transfer}}{{/if}}  
        </li>
	</ul>
  {{/if}}
</script>
<script id="socialHotTempl" type="text/x-jsrender">
 {{if #getIndex()<7}}
 <div class="socialhot-list">
			<div class="social-user">
                <img src="{{:userAvatar}}" onerror="javascript:this.src='${uedroot}/images/user.jpg';"/>
			</div>
			<ul myid="{{:myId}}">
				  <li>
					 <p class="word">
						<a href="javascript:void(0);">{{:name}}22</a>
					 </p>
					 <p style="width:340px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
						<a href="javascript:void(0);">
                             {{if title!=null&&title!=""}}
                                 {{:~filterCharacter(title)}} 
                             {{else}}
                                  {{:~filterCharacter(textZh)}}
                             {{/if}}  
                        </a>
					 </p>
					 <p>
						<span>{{:updateTimeStr}}</span> <span>{{:~conventSource(sourceType)}}</span>
					 </p>
				  </li>
				  <li class="right">
                        {{if rpsCnt>0}}{{:rpsCnt}}{{/if}}  
                  </li>
			</ul>
</div>
{{/if}}
</script>
<script id="HotMediaSorry" type="text/x-jsrender">
<div class="socialhot-list">
			<span style="color:#909cc8;"><spring:message code="detail.sorry.info"/></span>
</div>
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
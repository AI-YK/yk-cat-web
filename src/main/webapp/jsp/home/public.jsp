<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!--负面舆情-->
<div class="journalism-sentiment">
	<div class="sentiment-main">
		<div class="sentiment-title">
			<ul>
				<li>负面舆情</li>
				<li class="right"><a target="_blank" href="${_base}/search/public?model=negative"><i class="icon iconfont">&#xe65b;</i></a></li>
			</ul>
		</div>
		<div class="sentiment-list">
			<div class="sentiment-list-conter border-right">
				<div class="sentiment-list-conter-title">新闻媒体预警</div>
				<div class="sentiment-list-conter-news" id="newsDiv">
					
				</div>

			</div>
			<div class="sentiment-list-conter">
				<div class="sentiment-list-conter-title">社交媒体预警</div>
				<div class="sentiment-list-conter-news" id="socialDiv">
					
				</div>

			</div>
		</div>
	</div>
</div>
<!--/负面舆情结束-->
<script id="newsTempl" type="text/x-jsrender">
  {{if #getIndex()<9}}
  <ul uuid="{{:uuid}}" keyword="{{:~getFirstKeyword(keywordsZh)}}">
	 <li class="block {{:~getRankColor(transfer)}}">{{:~getRankIndex(transfer)}}</li>
	 <li style="width:340px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;"><a href="javascript:void(0);">{{:titleZh}}</a></li>
	 <li class="date">{{:~getCustomTime(pubdate)}}</li>
   </ul>
 {{/if}}
</script>
<script id="socialTempl" type="text/x-jsrender">
  {{if #getIndex()<9}}
  <ul>
	 <li class="block {{:~getRankColor(rpsCnt)}}">{{:~getRankIndex(rpsCnt)}}</li>
	 <li class="icon iconfont i-color">{{:~getSocialIcon(sourceType)}}</li>
	 <li style="width:340px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;"><a href="javascript:void(0);">{{:textZh}}</a></li>
	 <li class="date">{{:~getCustomTime(updateTime)}}</li>
  </ul>
  {{/if}}
</script>
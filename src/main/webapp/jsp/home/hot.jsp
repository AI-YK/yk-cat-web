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
					<div class="hot-news-main-list">
						<ul>
							<li>
								<p>
									<a href="#">运动员，一度只能自费在拥挤的小游泳馆</a>
								</p>
								<p>
									<span>2016.8.23 10:09</span> <span class="blue">新浪网</span>
								</p>
							</li>
							<li class="right">30</li>
						</ul>
						<ul>
							<li>
								<p>
									<a href="#">因为没有出席朴槿惠活动遭受政府打压，加上韩</a>
								</p>
								<p>
									<span>2016.8.23 10:09</span> <span class="blue">新浪网</span>
								</p>
							</li>
							<li class="right">60</li>
						</ul>
						<ul>
							<li>
								<p>
									<a href="#">运动员，一度只能自费在拥挤的小游泳馆</a>
								</p>
								<p>
									<span>2016.8.23 10:09</span> <span class="blue">新浪网</span>
								</p>
							</li>
							<li class="right">32</li>
						</ul>
						<ul>
							<li>
								<p>
									<a href="#">运动员，一度只能自费在拥挤的小游泳馆</a>
								</p>
								<p>
									<span>2016.8.23 10:09</span> <span class="blue">新浪网</span>
								</p>
							</li>
							<li class="right">8</li>
						</ul>
						<ul>
							<li>
								<p>
									<a href="#">运动员，一度只能自费在拥挤的小游泳馆</a>
								</p>
								<p>
									<span>2016.8.23 10:09</span> <span class="blue">新浪网</span>
								</p>
							</li>
							<li class="right">30</li>
						</ul>
						<ul class="none-border">
							<li>
								<p>
									<a href="#">运动员，一度只能自费在拥挤的小游泳馆</a>
								</p>
								<p>
									<span>2016.8.23 10:09</span> <span class="blue">新浪网</span>
								</p>
							</li>
							<li class="right">30</li>
						</ul>
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
					<div class="hot-news-main-list socialhot">
						<div class="socialhot-list">
							<div class="social-user">
								<img src="images/user.jpg" />
							</div>
							<ul>
								<li>
									<p class="word">
										<a href="#">好听的昵称</a>
									</p>
									<p>
										<a href="#">昨天，结束了亚锦赛征程的朴泰桓在东京亚锦赛上完美的表现让他有底1</a>
									</p>
									<p>
										<span>2016.8.23 10:09</span> <span>新浪网</span>
									</p>
								</li>
								<li class="right">30</li>
							</ul>
						</div>
						<div class="socialhot-list">
							<div class="social-user">
								<img src="images/user.jpg" />
							</div>
							<ul>
								<li>
									<p class="word">
										<a href="#">好听的昵称</a>
									</p>
									<p>
										<a href="#">昨天，结束了亚锦赛征程的朴泰桓在东京亚锦赛上完美的表现让他有底</a>
									</p>
									<p>
										<span>2016.8.23 10:09</span> <span>新浪网</span>
									</p>
								</li>
								<li class="right">30</li>
							</ul>
						</div>
						<div class="socialhot-list">
							<div class="social-user">
								<img src="images/user.jpg" />
							</div>
							<ul>
								<li>
									<p class="word">
										<a href="#">好听的昵称</a>
									</p>
									<p>
										<a href="#">昨天，结束了亚锦赛征程的朴泰桓在东京亚锦赛上完美的表现让他有底</a>
									</p>
									<p>
										<span>2016.8.23 10:09</span> <span>新浪网</span>
									</p>
								</li>
								<li class="right">30</li>
							</ul>
						</div>
						<div class="socialhot-list">
							<div class="social-user">
								<img src="images/user.jpg" />
							</div>
							<ul class="none-border">
								<li>
									<p class="word">
										<a href="#">好听的昵称</a>
									</p>
									<p>
										<a href="#">昨天，结束了亚锦赛征程的朴泰桓在东京亚锦赛上完美的表现让他有底</a>
									</p>
									<p>
										<span>2016.8.23 10:09</span> <span>新浪网</span>
									</p>
								</li>
								<li class="right">30</li>
							</ul>
						</div>

					</div>
				</div>


			</div>
		</div>

	</div>
</div>
<!--/热点新闻-->
<script id="newsHotTempl" type="text/x-jsrender">
  <ul>
	 <li class="block {{:~getRankColor(#index)}}">{{:#index+1}}</li>
	 <li><a href="#">{{:titleZh}}</a></li>
	 <li class="date">{{if updated==null}}{{:pubdate}}{{else}}{{:updated}}{{/if}}</li>
   </ul>
</script>
<script id="socialHotTempl" type="text/x-jsrender">
  <ul>
	 <li class="block {{:~getRankColor(#index)}}">{{:#index+1}}</li>
	 <li class="icon iconfont i-color">&#xe65e;</li>
	 <li><a href="#">{{:titleZh}}</a></li>
	 <li class="date">{{if updated==null}}{{:pubdate}}{{else}}{{:updated}}{{/if}}</li>
  </ul>
</script>
<script id="newsMediaTempl" type="text/x-jsrender">
   <li><a href="javascript:void(0);" class="current">全部</a></li>
   {{for dics}}
       <li><a href="javascript:void(0);">{{:dicName}}</a><intput type="hidden" value="{{:dicValue}}"/></li>
   {{/for}}
</script>
<script id="socialMediaTempl" type="text/x-jsrender">
   <li><a href="javascript:void(0);" class="current">全部</a></li>
   {{for dics}}
       <li><a href="javascript:void(0);">{{:dicName}}</a><intput type="hidden" value="{{:dicValue}}"/></li>
   {{/for}}
</script>
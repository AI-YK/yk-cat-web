<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script src="${_base}/resources/spm_modules/jquery/1.9.1/jquery.min.js"></script>
   <!--二级主体-->
  <!--外侧背景-->
  	<!--左侧菜单-->
  	<div class="left-subnav">
  		<div class="left-title">
  			<ul>
  				<li class="user"><img src="${uedroot}/images/icon.jpg" /></li>
  				<li class="word">
  					<p>${user_session_key.username}</p>
  					<p class="vip1"></p>
  				</li>
  			</ul>
  		</div>
  		<div class="left-list" id="left_menu_list">
  			<ul>
  				<li id="index" class="current">
  					<a href="${_base}/p/security/index">
  					<span><i class="icon iconfont">&#xe600;</i></span>
  					<span><spring:message code="ycleftmenu.mymainpage"/></span>
  					</a>
  				</li>
  				<li id="orderList">
  					<a href="${_base}/p/customer/order/list/view">
  					<span><i class="icon iconfont">&#xe601;</i></span>
  					<span><spring:message code="ycleftmenu.myorder"/></span>
  					</a>
  				</li>
				<li id="myaccount">
					<a href="${_base}/p/balance/account">
						<span><i class="icon iconfont">&#xe602;</i></span>
						<span><spring:message code="ycleftmenu.myaccount"/></span>
					</a>
				</li>
  				<li>
  					<a href="优惠卷.html">
  					<span><i class="icon iconfont">&#xe603;</i></span>
  					<span><spring:message code="ycleftmenu.discount"/></span>
  					</a>
  				</li>
  				<li>
  					<a href="我的级别.html">
  					<span><i class="icon iconfont">&#xe604;</i></span>
  					<span><spring:message code="ycleftmenu.mylevel"/></span>
  					</a>
  				</li>
  				<li>
  					<a href="我的积分.html">
  					<span><i class="icon iconfont">&#xe605;</i></span>
  					<span><spring:message code="ycleftmenu.mycredit"/></span>
  					</a>
  				</li>
  				<li>
  					<a href="发票管理.html">
  					<span><i class="icon iconfont">&#xe606;</i></span>
  					<span><spring:message code="ycleftmenu.myfapiao"/></span>
  					</a>
  				</li>
  				<li>
  					<a href="企业中心.html">
  					<span><i class="icon iconfont">&#xe607;</i></span>
  					<span><spring:message code="ycleftmenu.companycenter"/></span>
  					</a>
  				</li>
  				<li id="interpreterInfo">
  					<a href="${_base}/p/interpreter/interpreterInfoPager?source=user">
  					<span><i class="icon iconfont">&#xe60c;</i></span>
  					<span><spring:message code="ycleftmenu.myinfo"/></span>
  					</a>
  				</li>
  				<li id="seccenterSettings">
  					<a  href="${_base}/p/security/seccenter?source=user">
  					<span><i class="icon iconfont">&#xe609;</i></span>
  					<span><spring:message code="ycleftmenu.mysecurity"/></span>
  					</a>
  				</li>
  			</ul>
  		</div>
		<!--定位-->
		<div class="locationaaa">
			<div class="left-phone">
				<p><i class="icon iconfont">&#xe60d;</i></p>
				<p class="phone-word">
					<span><spring:message code="ycleftmenu.time"/></span>
					<span class="red">400-119-8080</span>
				</p>
			</div>
			<div class="left-tplist"><a hrel="#"><img src="${uedroot}/images/to.jpg" /></a><i class="icon-remove-circle"></i></div>
		</div>
  	</div>
  	<script type="text/javascript">
  	  $(function(){
  		var currentEle = $("#"+current);
    	  if(current!=""&&currentEle){
    		$("#left_menu_list ul li").removeClass("current");
    		currentEle.addClass("current");
    	  } 
  	  });
  	</script>
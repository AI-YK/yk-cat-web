<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!--[if !IE]><!-->
    <script>
       /*  if (/*@cc_on!@*//*true) {
            document.documentElement.className += ' ie' + document.documentMode;
        } */
    </script>
    <!--<![endif]-->	
		<!-- <link rel="stylesheet" href="css/news/news_seltime.css" />
		<link href="css/news/jquery.mCustomScrollbar.css" rel="stylesheet" />
		<script type="text/javascript" src="js/news/news_seltime.js"></script>
		<script src="js/layer/layer.js"></script> -->
<!-- <script type="text/javascript" src="js/news/type.js"></script> -->
<html>
<body>
				<%-- <!-- lixiang 2016-12-15 -->
		    	<div class="subnav">
		    		<div class="subnav-main">
		    			<div class="left-list">
		    			
						    <div class="nav2topl" <c:if test="${!isLogin}">style="display: block;"</c:if> >
								<p><i class="icon iconfont">&#xe657;</i></p>
								<ul>
									<li>
										<a href="#" id="choice-city">${config.province.nameZh }.
											<c:if test="${fn:length(config.city)>1 }"> 多城市</c:if>
											<c:if test="${fn:length(config.city)==1}">
											<c:forEach items="${config.city }" var="city">
												${city.nameZh }
											</c:forEach>
											</c:if>
											<i class="icon iconfont">&#xe659;</i>
										</a>
									</li>
								</ul>	
						    </div>
		    			</div>
		    		</div>
		    	</div> --%>
<div class="nav2" style="height: 55px; vertical-align:middle; background-color: #1b2031"> 
		<!-- 显示专题 -->
		<div class="subnav">
		<div class="subnav-main">
			<div id="commDiv" class="left-list" style="display: block;">
				<p><i class="icon iconfont">&#xe657;</i></p>
				<ul>
				    <li>
				    <a href="#" id="choice-city">
				    <c:choose>
				       <c:when test="${config!=null&&config.province!=null}">
				         ${config.province.nameZh}.${config.city[0].nameZh}<c:if test="${fn:length(config.city)>1 }">等</c:if>
				       </c:when>
				       <c:otherwise>
				                           请选择省市
				       </c:otherwise>
				    </c:choose>
						<i class="icon iconfont"></i></a> 
					</li>
					<c:forEach items="${config.interestList}" var="interestVo">
						<li class="inbtn"><a href="javascript:void(0);">${interestVo.zhInterest }</a></li>
					</c:forEach>
					<li class="inbtn current"><a class="current" href="javascript:void(0);" id="modify-btn">修改</a></li>
				</ul>
				
				
			</div>
			<!-- 专题数据 -->
			<c:if test="${hasTopic}">
			<div id="topicDiv" class="left-list" style="display: block;">
			   <ul>
				    <li><a>专题数据：</a></li>
					<c:forEach items="${topics}" var="topic" varStatus="t">
					   <c:if test="${t.index<7}">
					       <li class="inbtn" >
					         <a id="${topic.id}" opType="${topic.opType}" srcId="${topic.srcId}"  ${t.index==0?'class="topic current"':'class="topic"'} href="javascript:void(0);">${topic.srcShortTitle}</a>
					       </li>
					   </c:if>
					</c:forEach>
				</ul> 
			</div>
			</c:if>
			<c:if test="${hasTopic}">
			<div class="right-list" style="display: block;">
			    <c:if test="${fn:length(topics)>7 }">
				<ul>
					<li class="more" id="more"><a href="#">更多<i class="icon iconfont">&#xe659;</i></a>
						<div class="more-show" id="more-show">
							<span><img src="${uedroot}/images/xf-sj.png"></span>
							<ul>
							    <li>
								    <c:forEach items="${topics}" var="topic" varStatus="t">
						               <c:if test="${t.index>=7}">
										    <p><a id="${topic.id}"  opType="${topic.opType}" srcId="${topic.srcId}"  class="topic">${topic.srcShortTitle}</a></p>
						               </c:if>
						            </c:forEach>
					            </li>
							</ul>
						</div>
					</li>
				</ul>
				</c:if>
			</div> 
			</c:if>
		</div>
			<a class="menu" title="列表模式" href="${_base}/jsp/news/social.jsp"><img src="${_base }/newsbmap/images/tohotsacial.png"></a>
	</div>
		<!-- 显示专题结束 -->
		<div class="nav2top" style="padding-top: 5px; display:none;">
			<div class="nav2topl">
			
				<div class="nav_left" style="cursor:pointer">
					<span class="s1"></span><span style="background-color: transparent;color: #41566e;"></span><span class="guojia">全国<!-- 全球 --></span><img src="images/news/xiala.png" class="xiala" >
				</div>
				<ul class="xzzhou">
					<li class="sanjiao"></li>
					<li class="xzgj">
						<span class="gj_sz">选择国家<!-- 选择国家 --></span>
					</li>
					<li class="qq_xz">
						<span class="sj_xz"></span>
					</li>
					<li class="xzcs">
						<span class="cs_sz">选择城市<!-- 选择城市 --></span>
					</li>
					
					<li class="xz_nr" >
					    <dl class="guojia_xz content" id="guojia_xz">
					    		
					    		<dd><a href="javascript:" name="中国">中国</a><i class="gj_jd">104.071000</i><i class="gj_wd">30.670000</i></dd>
					    <!--  全球国家注释掉 
					    	<dd><a href="javascript:" class="quanqiu">全球</a><i class="gj_jd"></i><i class="gj_wd"></i></dd><!-- 全球 -->
					    <!--  
					    		   <dd><a href="javascript:" name="巴西">巴西</a><i class="gj_jd">-47.929722</i><i class="gj_wd">-15.77972</i></dd>
					    	
					    		   <dd><a href="javascript:" name="泰国">泰国</a><i class="gj_jd">100.51667</i><i class="gj_wd">13.75</i></dd>
					    	
					    		   <dd><a href="javascript:" name="委内瑞拉">委内瑞拉</a><i class="gj_jd">-66.879189</i><i class="gj_wd">10.48801</i></dd>
					    	
					    		   <dd><a href="javascript:" name="克罗地亚">克罗地亚</a><i class="gj_jd">16.523331</i><i class="gj_wd">45.665001</i></dd>
					    	
					    		   <dd><a href="javascript:" name="尼日利亚">尼日利亚</a><i class="gj_jd">7.48976</i><i class="gj_wd">9.05735</i></dd>
					    	
					    		   <dd><a href="javascript:" name="约旦">约旦</a><i class="gj_jd">35.783939</i><i class="gj_wd">32.219898</i></dd>
					    	
					    		   <dd><a href="javascript:" name="新西兰">新西兰</a><i class="gj_jd">174.75</i><i class="gj_wd">-41.316669</i></dd>
					    	
					    		   <dd><a href="javascript:" name="柬埔寨">柬埔寨</a><i class="gj_jd">104.8</i><i class="gj_wd">11.6</i></dd>
					    	
					    		   <dd><a href="javascript:" name="朝鲜">朝鲜</a><i class="gj_jd">125.754318</i><i class="gj_wd">39.033852</i></dd>
					    	
					    		   <dd><a href="javascript:" name="莫桑比克">莫桑比克</a><i class="gj_jd">32.589169</i><i class="gj_wd">-25.965281</i></dd>
					    	
					    		   <dd><a href="javascript:" name="伊拉克">伊拉克</a><i class="gj_jd">43.118889</i><i class="gj_wd">36.334999</i></dd>
					    	
					    		   <dd><a href="javascript:" name="加纳">加纳</a><i class="gj_jd">-2.24046</i><i class="gj_wd">4.86992</i></dd>
					    	
					    		   <dd><a href="javascript:" name="挪威">挪威</a><i class="gj_jd">10.74609</i><i class="gj_wd">59.912731</i></dd>
					    	
					    		   <dd><a href="javascript:" name="越南">越南</a><i class="gj_jd">105.504997</i><i class="gj_wd">21.137779</i></dd>
					    	
					    		   <dd><a href="javascript:" name="阿根廷">阿根廷</a><i class="gj_jd">-65.712181</i><i class="gj_wd">-28.00927</i></dd>
					    	
					    		   <dd><a href="javascript:" name="美国">美国</a><i class="gj_jd">-86.495819</i><i class="gj_wd">34.31815</i></dd>
					    	
					    		   <dd><a href="javascript:" name="肯尼亚">肯尼亚</a><i class="gj_jd">36.8167</i><i class="gj_wd">-1.28333</i></dd>
					    	
					    		   <dd><a href="javascript:" name="卡塔尔">卡塔尔</a><i class="gj_jd">51.533333</i><i class="gj_wd">25.286667</i></dd>
					    	
					    		   <dd><a href="javascript:" name="韩国">韩国</a><i class="gj_jd">126.521942</i><i class="gj_wd">33.50972</i></dd>
					    	
					    		   <dd><a href="javascript:" name="尼加拉瓜">尼加拉瓜</a><i class="gj_jd">-85.956017</i><i class="gj_wd">11.92988</i></dd>
					    	
					    		   <dd><a href="javascript:" name="巴林">巴林</a><i class="gj_jd">50.5831</i><i class="gj_wd">26.2361</i></dd>
					    	
					    		   <dd><a href="javascript:" name="哥伦比亚">哥伦比亚</a><i class="gj_jd">-76.522499</i><i class="gj_wd">3.43722</i></dd>
					    	
					    		   <dd><a href="javascript:" name="巴拿马">巴拿马</a><i class="gj_jd">-85.659828</i><i class="gj_wd">30.15946</i></dd>
					    	
					    		   <dd><a href="javascript:" name="德国">德国</a><i class="gj_jd">10.13489</i><i class="gj_wd">54.321331</i></dd>
					    	
					    		   <dd><a href="javascript:" name="埃塞俄比亚">埃塞俄比亚</a><i class="gj_jd">41.866112</i><i class="gj_wd">9.59306</i></dd>
					    	
					    		   <dd><a href="javascript:" name="摩纳哥">摩纳哥</a><i class="gj_jd">7.41667</i><i class="gj_wd">43.73333</i></dd>
					    	
					    		   <dd><a href="javascript:" name="捷克共和国">捷克共和国</a><i class="gj_jd">13.37759</i><i class="gj_wd">49.747471</i></dd>
					    	
					    		   <dd><a href="javascript:" name="英国">英国</a><i class="gj_jd">-2.23743</i><i class="gj_wd">53.480949</i></dd>
					    	
					    		   <dd><a href="javascript:" name="印度">印度</a><i class="gj_jd">77.2</i><i class="gj_wd">28.6</i></dd>
					    	
					    		   <dd><a href="javascript:" name="瑞士">瑞士</a><i class="gj_jd">6.14569</i><i class="gj_wd">46.202221</i></dd>
					    	
					    		   <dd><a href="javascript:" name="伊朗">伊朗</a><i class="gj_jd">51.421509</i><i class="gj_wd">35.694389</i></dd>
					    	
					    		   <dd><a href="javascript:" name="奥地利">奥地利</a><i class="gj_jd">16.37208</i><i class="gj_wd">48.208488</i></dd>
					    	
					    		   <dd><a href="javascript:" name="意大利">意大利</a><i class="gj_jd">16.287189</i><i class="gj_wd">39.398499</i></dd>
					    	
					    		   <dd><a href="javascript:" name="土耳其">土耳其</a><i class="gj_jd">32.854271</i><i class="gj_wd">39.919868</i></dd>
					    	
					    		   <dd><a href="javascript:" name="芬兰">芬兰</a><i class="gj_jd">24.93545</i><i class="gj_wd">60.169521</i></dd>
					    	
					    		   <dd><a href="javascript:" name="苏丹">苏丹</a><i class="gj_jd">23.5</i><i class="gj_wd">13.5</i></dd>
					    	
					    		   <dd><a href="javascript:" name="阿尔及利亚">阿尔及利亚</a><i class="gj_jd">3.05056</i><i class="gj_wd">36.7631</i></dd>
					    	
					    		   <dd><a href="javascript:" name="比利时">比利时</a><i class="gj_jd">4.34878</i><i class="gj_wd">50.850449</i></dd>
					    	
					    		   <dd><a href="javascript:" name="也门">也门</a><i class="gj_jd">44.206669</i><i class="gj_wd">15.35472</i></dd>
					    	
					    		   <dd><a href="javascript:" name="埃及">埃及</a><i class="gj_jd">32.526272</i><i class="gj_wd">29.973709</i></dd>
					    	
					    		   <dd><a href="javascript:" name="利比亚">利比亚</a><i class="gj_jd">20.066669</i><i class="gj_wd">32.116669</i></dd>
					    	
					    		   <dd><a href="javascript:" name="叙利亚">叙利亚</a><i class="gj_jd">36.291279</i><i class="gj_wd">33.510201</i></dd>
					    	
					    		   <dd><a href="javascript:" name="拉脱维亚">拉脱维亚</a><i class="gj_jd">24.1</i><i class="gj_wd">56.950001</i></dd>
					    	
					    		   <dd><a href="javascript:" name="喀麦隆">喀麦隆</a><i class="gj_jd">10.01248</i><i class="gj_wd">5.88724</i></dd>
					    	
					    		   <dd><a href="javascript:" name="爱尔兰">爱尔兰</a><i class="gj_jd">-6.26719</i><i class="gj_wd">53.34399</i></dd>
					    	
					    		   <dd><a href="javascript:" name="中国">中国</a><i class="gj_jd">104.071000</i><i class="gj_wd">30.670000</i></dd>
					    	
					    		   <dd><a href="javascript:" name="阿尔巴尼亚">阿尔巴尼亚</a><i class="gj_jd">19.73472</i><i class="gj_wd">40.598888</i></dd>
					    	
					    		   <dd><a href="javascript:" name="澳大利亚">澳大利亚</a><i class="gj_jd">150.883331</i><i class="gj_wd">-34.433331</i></dd>
					    	
					    		   <dd><a href="javascript:" name="印度尼西亚">印度尼西亚</a><i class="gj_jd">114.099541</i><i class="gj_wd">-7.72528</i></dd>
					    	
					    		   <dd><a href="javascript:" name="格鲁吉亚">格鲁吉亚</a><i class="gj_jd">44.833679</i><i class="gj_wd">41.694111</i></dd>
					    	
					    		   <dd><a href="javascript:" name="土库曼斯坦">土库曼斯坦</a><i class="gj_jd">58.383331</i><i class="gj_wd">37.950001</i></dd>
					    	
					    		   <dd><a href="javascript:" name="毛里求斯">毛里求斯</a><i class="gj_jd">57.535278</i><i class="gj_wd">-20.10556</i></dd>
					    	
					    		   <dd><a href="javascript:" name="丹麦">丹麦</a><i class="gj_jd">12.56553</i><i class="gj_wd">55.675941</i></dd>
					    	
					    		   <dd><a href="javascript:" name="塞尔维亚">塞尔维亚</a><i class="gj_jd">20.46513</i><i class="gj_wd">44.804008</i></dd>
					    	
					    		   <dd><a href="javascript:" name="巴基斯坦">巴基斯坦</a><i class="gj_jd">73.043289</i><i class="gj_wd">33.721481</i></dd>
					    	
					    		   <dd><a href="javascript:" name="海地">海地</a><i class="gj_jd">-72.334999</i><i class="gj_wd">18.539169</i></dd>
					    	
					    		   <dd><a href="javascript:" name="洪都拉斯">洪都拉斯</a><i class="gj_jd">-88.066673</i><i class="gj_wd">14.86667</i></dd>
					    	
					    		   <dd><a href="javascript:" name="古巴">古巴</a><i class="gj_jd">-82.383041</i><i class="gj_wd">23.13302</i></dd>
					    	
					    		   <dd><a href="javascript:" name="黎巴嫩">黎巴嫩</a><i class="gj_jd">35.494419</i><i class="gj_wd">33.888939</i></dd>
					    	
					    		   <dd><a href="javascript:" name="哥斯达黎加">哥斯达黎加</a><i class="gj_jd">-84.241699</i><i class="gj_wd">9.91491</i></dd>
					    	
					    		   <dd><a href="javascript:" name="尼泊尔">尼泊尔</a><i class="gj_jd">81.6001</i><i class="gj_wd">28.6033</i></dd>
					    	
					    		   <dd><a href="javascript:" name="罗马尼亚">罗马尼亚</a><i class="gj_jd">26.10626</i><i class="gj_wd">44.432251</i></dd>
					    	
					    		   <dd><a href="javascript:" name="卢旺达">卢旺达</a><i class="gj_jd">29.739441</i><i class="gj_wd">-2.59667</i></dd>
					    	
					    		   <dd><a href="javascript:" name="沙特阿拉伯">沙特阿拉伯</a><i class="gj_jd">46.721851</i><i class="gj_wd">24.687731</i></dd>
					    	
					    		   <dd><a href="javascript:" name="秘鲁">秘鲁</a><i class="gj_jd">-69.583328</i><i class="gj_wd">-11.35</i></dd>
					    	
					    		   <dd><a href="javascript:" name="厄瓜多尔">厄瓜多尔</a><i class="gj_jd">-78.833328</i><i class="gj_wd">-2.2</i></dd>
					    	
					    		   <dd><a href="javascript:" name="玻利维亚">玻利维亚</a><i class="gj_jd">-67.383331</i><i class="gj_wd">-14.31667</i></dd>
					    	
					    		   <dd><a href="javascript:" name="安哥拉">安哥拉</a><i class="gj_jd">16.34096</i><i class="gj_wd">-9.54015</i></dd>
					    	
					    		   <dd><a href="javascript:" name="以色列">以色列</a><i class="gj_jd">35.234169</i><i class="gj_wd">31.77667</i></dd>
					    	
					    		   <dd><a href="javascript:" name="阿联酋">阿联酋</a><i class="gj_jd">55.304722</i><i class="gj_wd">25.258169</i></dd>
					    	
					    		   <dd><a href="javascript:" name="墨西哥">墨西哥</a><i class="gj_jd">-99.127663</i><i class="gj_wd">19.428471</i></dd>
					    	
					    		   <dd><a href="javascript:" name="象牙海岸">象牙海岸</a><i class="gj_jd">-3.49639</i><i class="gj_wd">6.72972</i></dd>
					    	
					    		   <dd><a href="javascript:" name="危地马拉">危地马拉</a><i class="gj_jd">-91.449997</i><i class="gj_wd">14.53333</i></dd>
					    	
					    		   <dd><a href="javascript:" name="阿富汗">阿富汗</a><i class="gj_jd">62.199669</i><i class="gj_wd">34.348171</i></dd>
					    	
					    		   <dd><a href="javascript:" name="希腊">希腊</a><i class="gj_jd">21.783331</i><i class="gj_wd">38.299999</i></dd>
					    	
					    		   <dd><a href="javascript:" name="亚美尼亚">亚美尼亚</a><i class="gj_jd">44.513611</i><i class="gj_wd">40.18111</i></dd>
					    	
					    		   <dd><a href="javascript:" name="百慕大">百慕大</a><i class="gj_jd">-64.777969</i><i class="gj_wd">32.291489</i></dd>
					    	
					    		   <dd><a href="javascript:" name="新喀里多尼亚">新喀里多尼亚</a><i class="gj_jd">167.264603</i><i class="gj_wd">-20.91687</i></dd>
					    	
					    		   <dd><a href="javascript:" name="保加利亚">保加利亚</a><i class="gj_jd">27.76667</i><i class="gj_wd">42.26667</i></dd>
					    	
					    		   <dd><a href="javascript:" name="匈牙利">匈牙利</a><i class="gj_jd">19.039909</i><i class="gj_wd">47.498009</i></dd>
					    	
					    		   <dd><a href="javascript:" name="波兰">波兰</a><i class="gj_jd">17.33437</i><i class="gj_wd">50.473789</i></dd>
					    	
					    		   <dd><a href="javascript:" name="法国">法国</a><i class="gj_jd">2.3488</i><i class="gj_wd">48.853409</i></dd>
					    	
					    		   <dd><a href="javascript:" name="俄罗斯">俄罗斯</a><i class="gj_jd">37.615555</i><i class="gj_wd">55.75222</i></dd>
					    	
					    		   <dd><a href="javascript:" name="斯里兰卡">斯里兰卡</a><i class="gj_jd">79.847778</i><i class="gj_wd">6.93194</i></dd>
					    	
					    		   <dd><a href="javascript:" name="荷兰">荷兰</a><i class="gj_jd">5.39028</i><i class="gj_wd">51.5075</i></dd>
					    	
					    		   <dd><a href="javascript:" name="哈萨克斯坦">哈萨克斯坦</a><i class="gj_jd">71.445976</i><i class="gj_wd">51.180099</i></dd>
					    	
					    		   <dd><a href="javascript:" name="阿塞拜疆">阿塞拜疆</a><i class="gj_jd">49.89201</i><i class="gj_wd">40.37767</i></dd>
					    	
					    		   <dd><a href="javascript:" name="黑山">黑山</a><i class="gj_jd">19.100281</i><i class="gj_wd">42.09306</i></dd>
					    	
					    		   <dd><a href="javascript:" name="瑞典">瑞典</a><i class="gj_jd">18.064899</i><i class="gj_wd">59.332581</i></dd>
					    	
					    		   <dd><a href="javascript:" name="摩洛哥">摩洛哥</a><i class="gj_jd">-8.00828</i><i class="gj_wd">31.631479</i></dd>
					    	
					    		   <dd><a href="javascript:" name="西班牙">西班牙</a><i class="gj_jd">2.15899</i><i class="gj_wd">41.38879</i></dd>
					    	
					    		   <dd><a href="javascript:" name="巴哈马群岛">巴哈马群岛</a><i class="gj_jd">-77.76667</i><i class="gj_wd">24.700001</i></dd>
					    	
					    		   <dd><a href="javascript:" name="乌克兰">乌克兰</a><i class="gj_jd">30.516666</i><i class="gj_wd">50.433334</i></dd>
					    	
					    		   <dd><a href="javascript:" name="乌拉圭">乌拉圭</a><i class="gj_jd">-56.1708</i><i class="gj_wd">-34.8581</i></dd>
					    	
					    		   <dd><a href="javascript:" name="智利">智利</a><i class="gj_jd">-72.349998</i><i class="gj_wd">-37.466671</i></dd>
					    	
					    		   <dd><a href="javascript:" name="突尼斯">突尼斯</a><i class="gj_jd">10.16579</i><i class="gj_wd">36.81897</i></dd>
					    	
					    		   <dd><a href="javascript:" name="乌干达">乌干达</a><i class="gj_jd">31.790899</i><i class="gj_wd">3.37786</i></dd>
					    	
					    		   <dd><a href="javascript:" name="加拿大">加拿大</a><i class="gj_jd">-75.69812</i><i class="gj_wd">45.411171</i></dd>
					    	
					    		   <dd><a href="javascript:" name="日本">日本</a><i class="gj_jd">140.868057</i><i class="gj_wd">42.46806</i></dd>
					    	
					    		   <dd><a href="javascript:" name="南非">南非</a><i class="gj_jd">26.865931</i><i class="gj_wd">-28.10391</i></dd>
					    	
					    		   <dd><a href="javascript:" name="爱沙尼亚">爱沙尼亚</a><i class="gj_jd">24.753531</i><i class="gj_wd">59.436958</i></dd>
					    	
					    		   <dd><a href="javascript:" name="马来西亚">马来西亚</a><i class="gj_jd">100.73333</i><i class="gj_wd">4.85</i></dd>
					    	
					    		   <dd><a href="javascript:" name="马里">马里</a><i class="gj_jd">-4.89562</i><i class="gj_wd">13.30335</i></dd>
					    	
					    		   <dd><a href="javascript:" name="葡萄牙">葡萄牙</a><i class="gj_jd">-9.13333</i><i class="gj_wd">38.716671</i></dd>
					    	
					    		   <dd><a href="javascript:" name="新加坡">新加坡</a><i class="gj_jd">103.850067</i><i class="gj_wd">1.28967</i></dd>
					    	
					    		   <dd><a href="javascript:" name="津巴布韦">津巴布韦</a><i class="gj_jd">30.9481</i><i class="gj_wd">-17.9078</i></dd>
					    	
					    		   <dd><a href="javascript:" name="科威特">科威特</a><i class="gj_jd">47.9783</i><i class="gj_wd">29.3697</i></dd>
					    	
					    		   <dd><a href="javascript:" name="菲律宾">菲律宾</a><i class="gj_jd">120.982201</i><i class="gj_wd">14.6042</i></dd>
					    	
					    		   <dd><a href="javascript:" name="孟加拉国">孟加拉国</a><i class="gj_jd">89.054901</i><i class="gj_wd">25.67403</i></dd>
					    	
					    		   <dd><a href="javascript:" name="牙买加">牙买加</a><i class="gj_jd">-77.6833</i><i class="gj_wd">17.9167</i></dd>
					    	-->
					        <!-- 
					        <dd><a href="javascript:"></a><i class="gj_jd"></i><i class="gj_wd"></i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">2</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">3</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">4</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">5</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">6</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">7</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">8</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">9</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">10</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">11</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">12</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">13</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">14</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">15</i><i class="gj_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="gj_jd">16</i><i class="gj_wd">13.2222</i></dd> 
					         --!>
					    </dl>
					    <dl class="chengshi_xz content close" id="city">
					    
					        <!-- <dd><a href="javascript:">北京</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd>
					        <dd><a href="javascript:">中非共和国</a><i class="cs_jd">1</i><i class="cs_wd">13.2222</i></dd> -->
					    </dl>
					</li>
					<li class="xz_bottom">
					    <p class="xz_bottom_left"><span class="xz_guojia">国家</span><span style="background-color: transparent;color: #1d78d2;" class="dian"><span class="dot">&#8226;</span></span><span class="xz_chengshi">城市</span></p>
					    <p class="xz_bottom_right">
					        <input type="text" value="" class="ssk"/><button class="shousuo"><a href="javascript:"  class="sslj">搜索<!-- 搜索 --></a></button>    
					    </p>
					</li>
				</ul>
				<div style="position: absolute; top:5px; right: -1030px;">
					<a title="列表模式" href="${_base }/jsp/news/social.jsp"><img src="${_base }/newsbmap/images/tohotsacial.png"></a>
				</div>
			</div>

			 <ul class="nav2topr" id="type">
				<li class=" menu onnx">全部<!-- 全部 --></li>
			</ul>

		</div>
		<ul class="navtbot">
		
		</ul>
</div>
<input type="hidden" id="language" name="language" value="null"/>
<input type="hidden" id="ns1" value="全部"/>
<input type="hidden" id="ns2" value="搜索的国家不存在!"/>
<input type="hidden" id="ns3" value="信息"/>
<input type="hidden" id="ns4" value="确定"/>
<script src="js/news/jquery.mCustomScrollbar.concat.min.js"></script>
</body>
</html>
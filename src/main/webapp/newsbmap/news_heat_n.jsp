
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt"  prefix="fmt"%>

<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
	String language = (String) session.getAttribute("language");
	String heatpath=path+"/newsbmap";
	request.setAttribute("heatpath", heatpath);
    request.setAttribute("basePath", basePath);
%>
<c:set var="heatpath" value="${pageContext.request.contextPath}/newsbmap"/>
<script type="text/javascript">var path ="${pageContext.request.contextPath}";</script>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="renderer" content="webkit">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<%-- <title><fmt:message key="news_heat_n.1"/>全球热点</title> --%><!-- 全球热点 -->
		<title>热点发现</title>
		<link rel="shortcut icon" href="images/favicon.ico" />
		<link rel="stylesheet" href="css/public.css" /><!--公共-->
		<script src="js/jquery-1.10.2.min.js"></script>
		<!-- 时间轴样式引入开始 -->
		<link rel="stylesheet" href="css/news/news_seltime.css" />
		<link href="css/news/jquery.mCustomScrollbar.css" rel="stylesheet" />
		<script type="text/javascript" src="js/news/news_seltime.js"></script>
		<link rel="stylesheet" href="css/news_heat_n.css"/><!--新闻大数据-->
		<!-- <link href="${pageContext.request.contextPath}/resources/template/css/modular/headr-footer.css" rel="stylesheet" type="text/css" />
		 --><script src="js/layer/layer.js"></script>
		<!-- 时间轴样式引入结束 -->
		<script src="js/map.js"></script>
		<script src="js/layer.js"></script>
		<script src="js/Scrollbar.js"></script>
		<script src="js/yeesightDomain.js"></script>
		<script src="js/WdatePicker.js"></script><!--日期插件-->
		<style type="text/css">
				/*去除百度地图版权*/
				.anchorBL{display:none;} 
 
				.rdzz{position:absolute;top:190px;left:35px;height:auto;width:223px;}
				.rdzz .title{color:#1f78d6;font-size:24px;border-bottom:1px solid #202f3e;width:223px;height:50px;line-height:50px;background: url(images/news/arrowbottom.png) right no-repeat;}
				.rdzz ul li{border-bottom:1px solid #202f3e;width:223px;width:223px;height:40px;line-height:40px;font-size:16px;}
				.rdzz a{color:#a9b9c8}
				.rdzz a:hover{color:#ff0000}
				a.span2:hover{color:#ff0000}
				.sman_selectedStyle{display:block;background:#E1E6EF;width:427px;;line-height:25px; text-align:left;text-decoration:none;}
				.layui-layer-close2{position:absolute;right:-28px;top:-28px;width:30px;height:30px;margin-left:0;background-position:-149px -31px;*right:-18px;_display:none}
				.layui-layer-close2:hover{background-position:-180px -31px}
				body .theme{background:transparent;filter:'alpha(Opacity=0);-moz-opacity:0;opacity: 0';}
				.layui-layer-load{background:url(images/article/loading-0.gif) center center no-repeat #000;filter:alpha(opacity=50);-moz-opacity:0.50;opacity:0.50;}

				.left_box{ position: absolute; right: 60px; bottom: 80px;font-family:"Microsoft Yahei"}
				.left_box .ico_yujing{ background: url(images/news/yj.png) no-repeat; width: 36px; height: 36px; display: inline-block;}
				.left_box .ico_shangsheng{ background: url(images/news/ss.png) no-repeat; width: 36px; height: 36px;display: inline-block;}
				
				.left_box .tit{ height: 30px; line-height: 30px; font-size: 20px; color: #FFFFFF;}
				.left_box .count{ height: 49px; line-height: 30px; border-bottom: 1px solid #FFFFFF;}
				.left_box .count .num{ font-size: 36px; color: #2c87da;}
				.left_box .count .yj{ position: relative; width: 36px; height: 36px; display: inline-block; vertical-align: middle; margin-top: -9px;}
				.left_box .count .ss{position: relative; width: 36px; height: 36px; display: inline-block;vertical-align: middle; margin-top: -9px;}
				.left_box .count b{ position:absolute; top:0; right:0;display: block; background-color: #e60012; width: 18px; height: 18px; line-height: 18px;text-align: center; border-radius: 50%; color: #FFFFFF; font-size:8px;}
				.left_box .sum{ clear: both;}
				.left_box .sum span{ width: 50%; float: left; color: #FFFFFF; padding: 10px 0;}
				.left_box .sum span .p_t{ font-size: 12px; line-height: 22px; height: 22px;}
				.left_box .sum span .p_n{ font-size: 24px; }
				
				.left_box .time{ clear: both; color: #adcf25; font-size: 12px; height: 20px; line-height: 20px;}
                
				.scrDiv_note{width: 5px; position: absolute;top: 0; background: #5c7591;cursor: pointer;}

				#echartTips{position: absolute;top: 0;left: 0;z-index: 500}

				.echart_tip{position:absolute;left:0;top:0;opacity:1;  }

				.echart_tip.fade_out{opacity:0;
					transition: opacity 11000ms;
					-moz-transition: opacity 11000ms;
					-webkit-transition: opacity 11000ms;
					-o-transition: opacity 11000ms;
				}

				.echart_tip.fade_in{opacity:1;
					transition: opacity 300ms;
					-moz-transition: opacity 300ms;
					-webkit-transition: opacity 300ms;
					-o-transition: opacity 300ms;
				}

				.echart_tip.left.top>.echart_content{bottom:67px;right:42px;}
				.echart_tip.left.top>.echart_tip_arrow{transform: rotate(-32deg);-ms-transform:rotate(-32deg);-moz-transform:rotate(-32deg);-webkit-transform:rotate(-32deg);-o-transform:rotate(-32deg);}
				.echart_tip.right.top>.echart_content{bottom:67px;left:42px;}
				.echart_tip.right.top>.echart_tip_arrow{transform: rotate(32deg);-ms-transform:rotate(32deg);-moz-transform:rotate(32deg);-webkit-transform:rotate(32deg);-o-transform:rotate(32deg);}
				.echart_tip.left.bottom>.echart_content{top:67px;right:42px;}
				.echart_tip.left.bottom>.echart_tip_arrow{transform: rotate(-148deg);-ms-transform:rotate(-148deg);-moz-transform:rotate(-148deg);-webkit-transform:rotate(-148deg);-o-transform:rotate(-148deg);}
				.echart_tip.right.bottom>.echart_content{top: 67px;left: 42px;}
				.echart_tip.right.bottom>.echart_tip_arrow{transform: rotate(148deg);-ms-transform:rotate(148deg);-moz-transform:rotate(148deg);-webkit-transform:rotate(148deg);-o-transform:rotate(148deg);}
				.echart_tip.bottom>.dialog_title.echart_content{top: auto;  bottom: -68px;}

				.dialog_title{border-bottom:1px #1f78d6 solid;color:#ffffff;padding-left:10px;padding-bottom:5px;position: absolute;
					width:300px;font-size:14px;text-align:left;z-index:10;}
				.dialog_title>a{color: #ffffff;font-size: 14px;
					line-height: 1.4em;max-height: 2.8em;display:block;
					display: -webkit-box;text-overflow: ellipsis;word-break: break-all;
					-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow : hidden;
				}
				.dialog_label{border:1px #1f78d6 solid;z-index:10;padding:10px;position: absolute;}
				.dialog_label>a{
					line-height: 1.4em;max-height: 2.8em;color:#afff00;font-size:18px;display:block;
					display: -webkit-box;text-overflow:ellipsis;  word-break: break-all;
					-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow : hidden;
					}

				.echart_tip_arrow{  position: absolute;  top: 0;  left: 0;  width: 0;  height: 0;  }
				.echart_tip_arrow>.echart_tip_head{
					width: 30px;height: 30px;border-radius: 100%;border: 2px solid #1f78d6;
					position: absolute;top: -15px;left: -15.5px;}
				.echart_tip_arrow>.echart_tip_line{height: 64px;left: 0;top: -80px;border-left: 1px solid #1f78d6;position: absolute;}
		
		


		</style>
		<script type="text/javascript">
				//function openDia(globaleventid){
				<%-- 	var url = '<%=heatpath%>/search/articleDetail?id='+globaleventid; --%>
				  //官网欢迎页search/articleDetail?id=171463422778417CE0F1E5B5050E4F1
					/* layer.open({
						skin:'theme',
				        id: 'view_iframe',
				        scrollbar:false,
				        type: 2,
				        title: false,
				        closeBtn:0,
				        maxmin: false,
				        shadeClose: true, //点击遮罩关闭层
				        area: ['100%', '100%'],
						content:url,
						success:function(layero, index){
							 
						}
				    }); */
				//}
		</script>
	</head>
	<body>
	        <!--头部开始-->
	        <%@ include file="./news_header.jsp" %>
            <!--头部结束-->
 
            <!--时间轴开始-->
            <%@include file="./news_seltime.jsp" %>
            <!--时间轴结束--> 
 
		    <!--echarts开始-->
		   
			<div class="container" style="top: 100px; height: 570px;">  
				
				<div id="echates"></div>
				
				<div id="echatesq" style="width:100%; height: 100%; display:none;"></div>

				<div id="echartTips"></div>

				<div class="echarts_name" style="display: none;"></div>
			       <!--  -->
				<!-- <div  id="echart_bmap" style=" position:absolute; top:0; left:0;height: 100%; width: 100%; display: none;">
					<Iframe src="news/bmap" width="100%" height="100%" scrolling="no" valign="center"align="left" frameborder="0" name="kuang" id="kuang"></iframe>
				</div> -->
				
			</div>
			
			<!--echarts结束-->
            
            <!-- 热点追踪开始 -->
            <%--
            <div class="rdzz" style="display: none;">
                <div class="title">热点追踪</div>
                <ul>
                   <li><a href="http://buzz.yeesight.com/analysisMap/dataIndex?id=ff80808156b233350156b5757c3000f4&opType=2&srcId=0081471922926028E3C87EB6ED171E42&source=2" target="_blank">G20峰会</a></li>
                   <li><a href="http://buzz.yeesight.com/analysisMap/dataIndex?id=ff80808156b233350156b56177d800e7&opType=2&srcId=0001471921604580F27F43C7B5748488&source=2" target="_blank">一带一路</a></li>
                   <li><a href="http://buzz.yeesight.com/analysisMap/dataIndex?id=ff80808156b233350156b551e53b00e3&opType=2&srcId=01214719217801729178A9678C276B96&source=2"  target="_blank">亚投行</a></li>
                   <li><a href="http://buzz.yeesight.com/analysisMap/dataIndex?id=ff80808156b233350156b5500bdc00df&opType=2&srcId=0091471920417729B19876E081D4BA03&source=2" target="_blank">南海事件</a></li>
                </ul>
            </div>
            --%>
            <!-- 热点追踪结束 -->

		  	<!--筛选菜单开始--> 
			<div class="menu_box" style="display: none;">
				 <div class="menu_left">
				 	  <span>
							<input id="dstart" name="start_time" type="text" maxlength="" readonly="readonly" onfocus="WdatePicker({onpicked:pickedFunc,doubleCalendar:false,dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'dend\')||\'%y-%M-%d\'}'})"><!--skin:'whyGreen',-->
							至 <input id="dend" name="end_time" type="text" maxlength="" readonly="readonly" onfocus="WdatePicker({onpicked:pickedFunc,doubleCalendar:false,dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'dstart\')}',maxDate:'%y-%M-%d'})"><!--skin:'whyGreen',-->
				 	  </span>
				 	  <ul class="date_qj">
					 	  	<li data-day="90"><a href="javascript:;">三月前</a></li>
					 	  	<li data-day="182"><a href="javascript:;">半年前</a></li>
					 	  	<li data-day="365"><a href="javascript:;">一年前</a></li>
				 	  </ul>
				 </div>
				 <div class="menu_right">
				 	<ul>
				 		<li class="on"><a href="javascript:;">国际政治</a></li>
				 		<li><a href="javascript:;">经济</a></li>
				 		<li><a href="javascript:;">自然科学</a></li>
				 		<li><a href="javascript:;">体育</a></li>
				 		<li><a href="javascript:;">科技</a></li>
				 		<li class="">
				 			<a href="javascript:;">更多<i></i></a>
				 			<dl>
				 				<dd><a href="javascript:;">经济</a></dd>
				 				<dd class="on"><a href="javascript:;">经济经济</a></dd>
				 				<dd><a href="javascript:;">经济经济</a></dd>
				 				<dd><a href="javascript:;">经济</a></dd>
				 			</dl>
				 		</li>
				 	</ul>
				 </div>
			</div>
			<!--筛选菜单结束-->
 
		    <!--底部开始-->
		    <!--底部开始-->
			<!-- <div class="footer_box">
				<p class="footer_left">中译语通科技（北京）有限公司 版权所有</p>
				<p class="footer_left">
					<a title="关于我们"  href="http://buzz.yeesight.com/help/about" target="_blank">关于我们</a><span>|</span>
					<a title="跨语言大数据"  href="http://buzz.yeesight.com/help/bigData" target="_blank">跨语言大数据</a><span>|</span>
					<a title="解决方案" href="http://buzz.yeesight.com/help/solution" target="_blank">解决方案</a>
				</p>
				<p class="footer_right">Copyright @2016 www.yeesight.com All rights reserved.京ICP备13002826号-9</p>
			</div> -->
			<!--底部结束-->
		    <!--底部结束-->
 
            
            <!--右侧悬浮菜单开始-->
            <%--<div class="levitate_menu" style="display: none;">
            	<ul>
            		<li class="on"><a href="javascript:;">全球话题热力图<i></i></a></li>
            		<li><a href="javascript:;">全球热点事件<i></i></a></li>
            	</ul>
            </div>--%>
            <!--右侧悬浮菜单结束-->
            
            <!--数据统计开始-->
            <%--<div class="left_box">
            	<div class="tit">数据总计</div>
            	<div class="count">
            		<span class="num" id="alldata" style="font-size:30px;">7.7192亿</span>
            		<span class="ss"><a href="javascript:;"><i class="ico_shangsheng"></i></a></span>
            	</div>
            	<div class="sum">
            		<span>
            			 <!--<p class="p_t"></p>-->
            			 <p class="p_n" id='todaydata' style="font-size:20px;width:200px;"> 今天&nbsp;1,346,021&nbsp;</p>
            		</span>
            	</div>
            	<div class="time">
            		<p id="time_data">1979-12-01 至 ${currentTime }</p>
            	</div>
            </div>--%>
            <!--数据统计结束-->
            
            <!--国家 种族 宗教 开始-->
            <%--<div class="type_class" style="display:none;">
            	<ul>
            		<li class="on" data-value="0"><i></i>国家</li>
            		<li data-value="1"><i></i>种族</li>
            		<li data-value="2"><i></i>宗教</li>
            	</ul>
            </div>--%>
            <!--国家 种族 宗教 结束-->
            
            <!-- 左侧列表-->
            <%--
				<div class="div0" style="display: none;">
					<div class="div1">热点事件</div>
					<div class="leftdiv3">
					    <img class="leftdiv4" src="images/news/img_boxbg_light.png">
						<ul class="ul1">
							<!--<li><span class="span1"><img src="images/news/num/no_01.png" /></span><span class="span2">22</span></li>-->
						</ul>
					</div>
				</div>
			--%>
            <!-- 左侧列表结束-->
 
            <!--右侧悬浮按钮开始-->
            <!-- lixiang 2016-12-15 隐藏右侧悬浮图标-->
            <div class="right_btn" style="display:none;">
            	<div class="news_list">
            		<div class="news_list_bg"></div>
            		<div class="list_box">
            			<ul  class="tab_list">
            				<li class="on"><fmt:message key="news_heat_n.4"/><!-- 热点 --></li>
            				<li><fmt:message key="newliebiaotinews"/><!-- 资讯 --></li>
            			</ul>
            			<div class="div_list">


            				<div id="mainBox_note1" class="con_notes">
            				    <ul class="ul_list" id="newsinfo">
	            					<!-- <li>
	            						<i class="num">5</i>num
	            						<dl>
	            							<dt><a href="javascript:;">北京18座地铁站早晚高峰限流缩短</a></dt>
	            							<dd style="font-size:12px;color:#777;margin-bottom:12px;">2016-10-19  11:30</dd>
	            							<dd class="info">
	            								<p class="img_p"><img alt="" src="" width="90" height="70"/></p>
	            								<p class="txt_p">京华时报讯（记者黄海蕾）北京地铁进入夏令时，76座车站开启地铁进入夏...<a title="点击查看详情" href="###" style="float: right;">查看更多&gt;</a><p>
	            							</dd>
	            							<dd class="item">
	            								<p class="item1">政治</p>
	            								<p class="item2">北美洲·美国</p>
	            								<p class="item3">来源：54个国家 123个媒体</p>
	            							</dd>
	            						</dl>
	            					</li> --> 
	            					<li class="more_box"><a title="" target="_blank" href="news/topicsList" ><i></i><fmt:message key="news_heat_n.6"/><!-- 查看更多 --></a></li>
            				    </ul>
            				</div>
            				<div id="mainBox_note2" class="con_notes" style="display: none;">
	                            <ul class="ul_list" id="newsVal">
	            					<!--<li>
	            						<i class="hot">1</i> 
	            						<dl>
	            							<dt><a href="javascript:;">北京18座地铁站早晚高峰限流缩短</a></dt>
	            							<dd style="font-size:12px;color:#777;margin-bottom:12px;">2016-10-19  11:30</dd>
	            							<dd class="info">
	            								<p class="img_p"><img alt="" src="" width="90" height="70"/></p>
	            								<p class="txt_p">京华时报讯（记者黄海蕾）北京地铁进入夏令时，76座车站开启地铁进入夏...<a title="点击查看详情" href="###" style="float: right;">查看更多&gt;</a><p>
	            							</dd>
	            							<dd class="item">
	            								<p class="item1">政治</p>
	            								<p class="item2">北美洲·美国</p>
	            								<p class="item3">来源：54个国家 123个媒体</p>
	            							</dd>
	            						</dl>
	            					</li>-->
	            					<li class="more_box"><a title="" target="_blank" href="news/newsList"><i></i><fmt:message key="news_heat_n.6"/><!-- 查看更多 --></a></li>
	            				</ul>
            				</div>
            			</div>
            		</div>
            	</div>
            	<a class="bottom_btn open" href="javascript:;"><i></i></a><!--close-->
            </div>
            <input type="text" id="basePath" style="display: none;" value="<%=basePath%>">
            <!--js取值国际化  -->
            <input type="hidden" id="language" name="language" value="<%=language%>"/>
            <input type="hidden" id="nhn1" value="<fmt:message key="news_heat_nJS.1"/>">
            <input type="hidden" id="nhn2" value="<fmt:message key="news_heat_nJS.2"/>">
            <input type="hidden" id="nhn3" value="<fmt:message key="news_heat_nJS.3"/>">
            <input type="hidden" id="nhn4" value="<fmt:message key="news_heat_nJS.4"/>">
            <input type="hidden" id="nhn5" value="<fmt:message key="news_heat_nJS.5"/>">
            <input type="hidden" id="nhn6" value="<fmt:message key="news_heat_nJS.6"/>">
            <input type="hidden" id="nhn7" value="<fmt:message key="news_heat_nJS.7"/>">
            <input type="hidden" id="nhn8" value="<fmt:message key="news_heat_nJS.8"/>">
            <input type="hidden" id="nhn9" value="<fmt:message key="news_heat_nJS.9"/>">
            <input type="hidden" id="nhn10" value="<fmt:message key="news_heat_nJS.10"/>">
            <input type="hidden" id="nhn11" value="<fmt:message key="news_heat_nJS.11"/>">
            <input type="hidden" id="nhnl1" value="<fmt:message key="news_heat_n_lJS.1"/>">
            <input type="hidden" id="nhnl2" value="<fmt:message key="news_heat_n_lJS.2"/>">
            <input type="hidden" id="nhnl3" value="<fmt:message key="news_heat_n_lJS.3"/>">
            <input type="hidden" id="nhnl4" value="<fmt:message key="news_heat_n_lJS.4"/>">
            <input type="hidden" id="nhnl5" value="<fmt:message key="news_heat_n_lJS.5"/>">
            <input type="hidden" id="nhnl6" value="<fmt:message key="news_heat_n_lJS.6"/>">
            <input type="hidden" id="nhnl7" value="<fmt:message key="news_heat_n_lJS.7"/>">
            <input type="hidden" id="nhnl8" value="<fmt:message key="news_heat_n_lJS.8"/>">
            <input type="hidden" id="nhn19" value="<fmt:message key="news_seltime.21"/>"/>
			<input type="hidden" id="nhn20" value="<fmt:message key="news_seltime.22"/>"/>
            
            
      
            <!--右侧悬浮按钮结束-->
            <!--echarts3-->
			<script src="js/bmap/echarts.min.js"></script>
			<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=ZUONbpqGBsYGXNIYHicvbAbM"></script>
	        <script type="text/javascript" src="js/bmap/bmap.min.js"></script>
	        <script type="text/javascript" src="js/bmap/dataTool.min.js"></script>
	        <script type="text/javascript" src="js/bmap/china.js"></script>
	        <script type="text/javascript" src="js/bmap/world.js"></script>
       
            <!--echarts2-->
            <script type="text/javascript" src="js/bmap/esl.js"></script>
			<script type="text/javascript" src="js/bmap/echarts.js"></script>

			<script src="js/jquery.dotdotdot.min.js"></script>

			<script src="js/data.js"></script>
			<script src="js/map_heat.js"></script>
           <!--  <script src="js/news_heat_n_l.js"></script>
            <script src="js/news_heat_n.js"></script> -->
            <script type="text/javascript" src="${_base }/resources/spm_modules/jquery-cookie/1.4.1/jquery.cookie2.js"></script>
			
	</body>

</html>
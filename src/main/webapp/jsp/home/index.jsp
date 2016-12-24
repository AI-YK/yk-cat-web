<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>首页</title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/index.css" rel="stylesheet" type="text/css" />
</head>

<body class="index-bj">
<!--弹出-->
  <div class="eject-big">
		<div class="eject-small" id="classification">
			<div class="eject-small-title">选择领域分类<i  class="icon iconfont" id="i-close">&#xe618;</i><span id="tishiDicId" style="color: red; font-size:12px;"></span></div>
			<div class="eject-small-list">
				<ul id="dicUl">
					
				</ul>
			</div>
			<div class="index-city-btn btn-bottom">
				<ul>
					<li>
						<input type="button" class="btn btn-120 radius btn-deepblue" id="saveDicId" value="提 交"/>
						<input type="button" class="btn btn-120 radius btn-ash" id="eject-btn-close" value="取 消"/>
					</li>
				</ul>
		 	</div>
		</div>
		
		<div class="mask" id="eject-mask"></div>
  </div>
<!--/弹出结束-->
	<!--面包屑导航-->
	<%@ include file="/inc/indexHead.jsp"%>
	<!--子导航-->
	<div class="subnav">
		<div class="subnav-main">
			<div id="commDiv" class="left-list" style="display: none;">
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
						<i class="icon iconfont">&#xe659;</i></a>
					</li>
					<div class="index-city" id="index-city">
						<div class="city-sj"><img src="${uedroot}/images/city-sj.jpg" /></div>
						<div class="choice-city">
						<div class="choice-title">
							<ul>
								<li class="word">城市地区：</li>
								<li><input type="text" class="choice-int" value="请选择省市区" readonly="readonly"><span id="tishiId" style="color: red; font-size:12px;"></span></li>
							</ul>
						</div>
						<div class="choice-main">
							<!--左侧-->
							<div class="choice-left">
								
							</div>
							<!--/左侧结束-->
							<!--ABCDEFG 第一个-->
							<div id="one">
								<!--tab1-->
								<div id="province1">
								<div class="choice-right">
									<ul id="cityList">
										
									</ul>
								</div>
							</div>
								
							</div>
							<!--/ ABCDEFG 第一个结束-->
						</div>
						
					</div>
						<div class="index-city-btn">
							<ul>
								<li>
									<input type="button" class="btn btn-120 radius btn-deepblue" id="saveId" value="提 交"/>
									<input type="button" class="btn btn-120 radius btn-ash" id="btn-close" value="取 消"/>
								</li>
							</ul>
						</div>
					</div>
					<c:forEach items="${config.interestList}" var="interestVo">
						<li class="inbtn"><a href="javascript:void(0);">${interestVo.zhInterest }</a></li>
					</c:forEach>
					<li class="inbtn"><a href="javascript:void(0);" id="modify-btn">修改</a></li>
				</ul>
				
				
			</div>
			<!-- 专题数据 -->
			<div id="topicDiv" class="left-list" style="display: none;">
			   <ul>
				    <li><a>专题数据：</a></li>
					<c:forEach items="${topics}" var="topic" varStatus="t">
					   <c:if test="${t.index<7}">
					       <li class="inbtn" ><a href="javascript:void(0);">${topic.zhShortTitle}</a></li>
					   </c:if>
					</c:forEach>
				</ul> 
			</div>
			
			<div class="right-list" style="display: none;">
			    <c:if test="${fn:length(topics)>7 }">
				<ul>
					<li class="more" id="more"><a href="#">更多<i class="icon iconfont">&#xe659;</i></a>
						<div class="more-show" id="more-show">
							<span><img src="${uedroot}/images/xf-sj.png"></span>
							<ul>
							    <li>
								    <c:forEach items="${topics}" var="topic" varStatus="t">
						               <c:if test="${t.index>=7}">
										    <p><a>${topic.zhShortTitle}</a></p>
						               </c:if>
						            </c:forEach>
					            </li>
							</ul>
						</div>
					</li>
				</ul>
				</c:if>
			</div> 
		</div>
	</div>
	
	<%@include file="emergency.jsp"%>
	<%@include file="public.jsp"%>
	<%@include file="hot.jsp"%>
	<%@include file="trend.jsp"%>

	<!--底部-->
	<%@include file="/inc/indexFoot.jsp"%>
</body>
<script id="provinceTempl" type="text/x-jsrender">
  <!--左侧tab-->
  <div class="choice-left-title">
	  <ul>
         {{for letters}}
		    <li><a href="#" id="letter_{{:letter}}" {{if #index==0}}class="current"{{/if}}>
               {{if letter=='1'}}ABCDEFG{{/if}}
               {{if letter=='2'}}HIJK{{/if}}
               {{if letter=='3'}}LMIOPQRS{{/if}}
               {{if letter=='4'}}TUVWXVZ{{/if}}
           </a></li>
         {{/for}}
	  </ul>
   </div>
  
  {{for provinces}}
     <!--/左侧tab结束-->
     {{if #index==0}}
     <div id="citi-tab{{:#getIndex()+1}}">
       <div class="choice-list" >
		  <ul>
             {{for list}}
			    <li><a href="#" id="pro_{{:busCode}}" >{{:name}}</a><input type="hidden" value="{{:busCode}}"/></li>
             {{/for}}
		  </ul>
       </div>
     </div>
    {{else}}
      <div id="citi-tab{{:#getIndex()+1}}" style="display:none;">
       <div class="choice-list" >
		  <ul>
             {{for list}}
			    <li><a href="#" id="pro_{{:busCode}}">{{:name}}</a><input type="hidden" value="{{:busCode}}"/></li>
             {{/for}}
		  </ul>
       </div>
     </div>
    {{/if}}
   {{/for}}
</script>
<script id="cityTempl" type="text/x-jsrender">
   <li>
	  <p>
		 <input id="city_{{:busCode}}" type="checkbox" class="checkbox-fie city"  value="{{:busCode}}" /><input type="hidden" value="{{:name}}"/>
	  </p>
	  <p>{{:name}}</p>
   </li>
</script>
<script id="dicTempl" type="text/x-jsrender">
   {{for dics}}
   <li>
		<a id="dic_{{:dicValue}}" href="#" class="dic">{{:dicName}}</a><input type="hidden" value="{{:dicValue}}"/>
   </li>
   {{/for}}
</script>
<script type="text/javascript">
    var configInterestList = '${configInterestList}';
    var provinceCodee='${provindeCode}';
    var cityLists='${citylist}';
    var pager;
    (function () {
        seajs.use('app/jsp/home/home', function (homePage) {
            pager = new homePage({element: document.body});
            pager.render();

        });
    })();
    

</script>

</html>

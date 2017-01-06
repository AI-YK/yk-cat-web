<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title><spring:message code="com.page.first.label"/></title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/index.css" rel="stylesheet" type="text/css" />
</head>

<body class="index-bj">

<!--设置基本信息弹出-->
  <div class="eject-big">
		<div class="eject-medium" id="currency" style="top:60%; left: 40%;">
			<div class="eject-medium-title">
				<p>设置基本信息&nbsp;<span id="tishiId" style="color: red; font-size:12px;"></span></p>
				<p class="right"><i class="icon iconfont" id="currency-close">&#xe618;</i></p>
			</div>
			<div class="field-title">
				<ul id="dicUl">
					
				</ul>
			</div>
			<div class="eject-choice-city">
				<div class="eject-choice-title">
					<ul>
						<li class="word">城市地区：</li>
						<li><input type="text"  class="choice-int" value="请选择省市区"></li>
					</ul>
				</div>
				<div class="eject-choice-main">
					<!--左侧-->
					<div class="choice-left">
						
					</div>
					<!--/左侧结束-->
					<!--ABCDEFG 第一个-->
					<div id="one">
						<!--tab1-->
						<div id="eject-province1">
								<div class="eject-choice-right">
									<ul id="cityList">
										
									</ul> 
								</div>
						</div>
					</div>
					<!--/ ABCDEFG 第一个结束-->
				</div>
				
			</div>
			<div class="eject-medium-btn"><input type="button" class="btn btn-xxxlarge btn-blue radius" id="medium-btn-close" value="完成"></div>
		</div>
		<div class="mask" id="eject-mask"></div>
  </div>
<!--/弹出结束-->
    <c:set var="current" value="0"></c:set>
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
				         ${config.province.nameZh}<c:if test="${config.city[0]!=null }">.</c:if>${config.city[0].nameZh}<c:if test="${fn:length(config.city)>1 }">等</c:if>
				       </c:when>
				       <c:otherwise>
				                           请选择省市
				       </c:otherwise>
				    </c:choose>
						<i class="icon iconfont"></i></a> 
					</li>
					<c:forEach items="${config.interestList}" var="interestVo" varStatus="t">
						<li class="inbtn"><a id="${interestVo.businessId}"  href="javascript:void(0);" ${t.index==0?'class="domain current"':'class="domain"'}>${interestVo.zhInterest }</a></li>
					</c:forEach>
					<li class="current" ><a href="javascript:void(0);" id="modify-btn" style="color:#3382ee">修改</a></li>
				</ul>
				
				
			</div>
			<!-- 专题数据 -->
			<c:if test="${hasTopic}">
			<div id="topicDiv" class="left-list" style="display: none;">
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
			<div class="right-list" style="display: none;">
			    <c:if test="${fn:length(topics)>7}">
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
  <div class="eject-choice-left-title">
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
     <div id="eject-citi-tab{{:#getIndex()+1}}">
       <div class="eject-choice-list" >
		  <ul>
             {{for list}}
			    <li><a href="#" id="pro_{{:busCode}}" >{{:name}}</a><input type="hidden" value="{{:busCode}}"/></li>
             {{/for}}
		  </ul>
       </div>
     </div>
    {{else}}
      <div id="eject-citi-tab{{:#getIndex()+1}}" style="display:none;">
       <div class="eject-choice-list" >
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
	<li class="blue">领域分类：</li>
   {{for dics}}
   <li>
		<!-- <a id="dic_{{:dicValue}}" href="#" class="dic">{{:dicName}}</a><input type="hidden" value="{{:dicValue}}"/> -->
		<p><input id="dic_{{:dicValue}}" type="checkbox" class="checkbox-fie check-dic" value="{{:dicValue}}"/></p>
		<p>{{:dicName}}</p>
   </li>
   {{/for}}
</script>
<script type="text/javascript">
    var configInterestList = '${configInterestList}';
    var provinceCodee='${provindeCode}';
    var cityLists='${citylist}';
    var hasTopic = ${hasTopic};
    var pager;
    (function () {
        seajs.use('app/jsp/home/home', function (homePage) {
            pager = new homePage({element: document.body});
            pager.render();

        });
    })();
    

</script>

</html>

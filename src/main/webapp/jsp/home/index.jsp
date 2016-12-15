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
	<%@ include file="/inc/topHead.jsp"%>
	<!--子导航-->
	<div class="subnav">
		<div class="subnav-main">
			<div class="left-list" <c:if test="${!isLogin}">style="display: none;"</c:if> >
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
						<i class="icon iconfont">&#xe659;</i></a>
					</li>
					<div class="index-city" id="index-city">
						<div class="city-sj"><img src="${uedroot}/images/city-sj.jpg" /></div>
						<div class="choice-city">
						<div class="choice-title">
							<ul>
								<li class="word">城市地区：</li>
								<li><input type="text" class="choice-int" value="请选择省市区"><span id="tishiId" style="color: red; font-size:12px;"></span></li>
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
				</ul>
			</div>
			<div class="right-list" <c:if test="${!isLogin}">style="display: none;"</c:if>>
				<ul>
					<li class="in-border" id="in-border1"><a href="#"><label id="border1Id" style="font-size: 12px;">${hasTopic?'专题数据':'通用数据'}</label><i class="icon iconfont">&#xe659;</i></a>
						<div class="special-show" id="special-one">
							<span><i class="icon iconfont">&#xe65a;</i></span>
							<ul>
								<a href="#" class="ahov1"><li id="ahov1Id">通用数据</li></a>
								<a href="#" class="ahov2"><li id="ahov2Id">专题数据</li></a>
							</ul>
						</div>
					</li>
					<li class="in-border" id="in-border2"><a href="#"><label id="border2Id" style="font-size: 12px;">${topics[0].srcShortTitle}</label><i class="icon iconfont">&#xe659;</i></a>
						<div class="special-show" id="special-tow" <c:if test="${!hasTopic}">style="display: none;"</c:if>>
							<span><i class="icon iconfont">&#xe65a;</i></span>
							<ul>
								<c:forEach items="${topics}" var="topic">
									<a href="javascript:void(0);" class="ahov"><li id="${topic.id}">${topic.srcShortTitle }</li></a>
								</c:forEach>
							</ul>
						</div>
					</li>
					<c:forEach items="${config.interestList}" var="interestVo">
						<li class="inbtn" <c:if test="${hasTopic}">style="display: none;"</c:if> ><a href="javascript:void(0);">${interestVo.zhInterest }</a></li>
					</c:forEach>
					<li class="inbtn" <c:if test="${hasTopic}">style="display: none;"</c:if> ><a href="javascript:void(0);" id="modify-btn">修改</a></li>
					
				</ul>
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
<script type="text/javascript" src="${uedroot}/scripts/modular/index.js"></script>
<script id="provinceTempl" type="text/x-jsrender">
  <!--左侧tab-->
  <div class="choice-left-title">
	  <ul>
         {{for letters}}
		    <li><a href="#" {{if #index==0}}class="current"{{/if}}>
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
			    <li><a href="#" id="pro_{{:code}}" >{{:name}}</a><input type="hidden" value="{{:code}}"/></li>
             {{/for}}
		  </ul>
       </div>
     </div>
    {{else}}
      <div id="citi-tab{{:#getIndex()+1}}" style="display:none;">
       <div class="choice-list" >
		  <ul>
             {{for list}}
			    <li><a href="#">{{:name}}</a><input type="hidden" value="{{:code}}"/></li>
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
		 <input id="city_{{:code}}" type="checkbox" class="checkbox-fie city"  value="{{:code}}" />
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
    var cityList='${citylist}';
    var pager;
    (function () {
        seajs.use('app/jsp/home/home', function (homePage) {
            pager = new homePage({element: document.body});
            pager.render();

        });
    })();
    

</script>

</html>

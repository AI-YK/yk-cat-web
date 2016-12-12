<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>登录后配置信息</title>
<%@ include file="/inc/inc.jsp"%>
<link href="${uedroot}/css/modular/modular.css" rel="stylesheet" type="text/css"/>
</head>

<body class="configure-bj">
	<div class="configure-main">
		<div class="configure-title">
			<img src="${uedroot}/images/logo.png">
		</div>
		<div class="configure-city-bj">
			<div class="city-title">设置基本信息&nbsp;<span id="tishiId" style="color: red; font-size:12px;"></span></div>
			<div class="field-title">
				<ul id="dicUl">
		
				</ul>
			</div>
			<div class="choice-city">
				<div class="choice-title">
					<ul>
						<li class="word">城市地区：</li>
						<li><input type="text" class="choice-int" value="请选择省市区"></li>
					</ul>
				</div>
				<div class="choice-main">
					<!--左侧-->
					<div class="choice-left"></div>
					<!--/左侧结束-->
					<!--ABCDEFG 第一个-->
					<div id="one">
						<!--tab1-->
						<div id="province">
							<div class="choice-right">
								<ul id="cityList">
									
								</ul>
							</div>
						</div>

					</div>
					<!--/ ABCDEFG 第一个结束-->
				</div>

			</div>

		</div>

		<div class="configure-btn">
			<input id="finish" type="button"
				class="btn btn-blue btn-large radius5" value="完成" />
		</div>
	</div>
</body>
<%@ include file="/inc/incJs.jsp"%>
<script type="text/javascript"
	src="${uedroot}/scripts/modular/configure.js"></script>
<script type="text/javascript">
	/* $(function() {
		$("#finish").click(function() {
			location.href = _base + '/home/index';
		});
	}); */
</script>

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
			    <li><a href="#"   {{if #getIndex()==0}}class="current"{{/if}}>{{:name}}</a><input type="hidden" value="{{:code}}"/></li>
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
		 <input type="checkbox" class="checkbox-fie city"  value="{{:code}}" />
	  </p>
	  <p>{{:name}}</p>
   </li>
</script>
<script id="dicTempl" type="text/x-jsrender">
   <li class="blue">领域分类：</li>
   {{for dics}}
   <li>
	  <p>
		 <input type="checkbox" class="checkbox-fie dic"  value="{{:dicValue}}"/>
	  </p>
	  <p>{{:dicName}}</p>
   </li>
   {{/for}}
</script>
<script type="text/javascript">
	var pager;
	(function() {
		seajs.use('app/jsp/home/config', function(configPage) {
			pager = new configPage({
				element : document.body
			});
			pager.render();

		});
	})();
</script>
</html>

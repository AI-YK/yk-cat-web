<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>登录后配置信息</title>
    <%@ include file="/inc/inc.jsp"%>
</head>

<body class="configure-bj">
 <div class="configure-main">
		<div class="configure-title"><img src="${uedroot}/images/logo.png"></div>
		<div class="configure-city-bj">
			<div class="city-title">设置基本信息</div>
			<div class="field-title">
				<ul>
					<li class="blue">领域分类：</li>
					<li>
						<p><input type="checkbox" class="checkbox-fie"/></p>
						<p>政治治理</p>
					</li>
					<li>
						<p><input type="checkbox" class="checkbox-fie"/></p>
						<p>官员腐败</p>
					</li>
					<li>
						<p><input type="checkbox" class="checkbox-fie"/></p>
						<p>公共安全</p>
					</li>
					<li>
						<p><input type="checkbox" class="checkbox-fie"/></p>
						<p>司法公正</p>
					</li>
					<li>
						<p><input type="checkbox" class="checkbox-fie"/></p>
						<p>伦理道德</p>
					</li>
				</ul>
			</div>
			<div class="choice-city">
				<div class="choice-title">
					<ul>
						<li class="word">城市地区：</li>
						<li><input type="text"  class="choice-int" value="请选择省市区"></li>
					</ul>
				</div>
				<div class="choice-main">
					<!--左侧-->
					<div class="choice-left">
						<!--左侧tab-->
						<div class="choice-left-title">
							<ul>
								<li><a href="#" class="current">ABCDEFG</a></li>
								<li><a href="#">HIJK</a></li>
								<li><a href="#">LMIOPQRS</a></li>
								<li><a href="#">TUVWXVZ</a></li>
							</ul>
						</div>
						<!--/左侧tab结束-->
						<div id="citi-tab1">
							<div class="choice-list" id="city-one">
								<ul>
									<li><a href="#" class="current">安徽</a></li>
									<li><a href="#">重庆</a></li>
									<li><a href="#">甘肃</a></li>
									<li><a href="#">广西</a></li>
									<li><a href="#">北京</a></li>
									<li><a href="#">福建</a></li>
									<li><a href="#">广东</a></li>
									<li><a href="#">贵州</a></li>
								</ul>
							</div>
						</div>
						<div id="citi-tab2"  style="display:none;">
							<div class="choice-list">
								<ul>
									<li><a href="#" class="current">湖南</a></li>
									<li><a href="#">重庆</a></li>
									<li><a href="#">甘肃</a></li>
									<li><a href="#">广西</a></li>
									<li><a href="#">北京</a></li>
									<li><a href="#">福建</a></li>
									<li><a href="#">广东</a></li>
									<li><a href="#">贵州</a></li>
								</ul>
							</div>
						</div>
						<div id="citi-tab3"  style="display:none;">
							<div class="choice-list">
								<ul>
									<li><a href="#" class="current">辽宁</a></li>
									<li><a href="#">重庆</a></li>
									<li><a href="#">甘肃</a></li>
									<li><a href="#">广西</a></li>
									<li><a href="#">北京</a></li>
									<li><a href="#">福建</a></li>
									<li><a href="#">广东</a></li>
									<li><a href="#">贵州</a></li>
								</ul>
							</div>
						</div>
						<div id="citi-tab4" style="display:none;">
							<div class="choice-list">
								<ul>
									<li><a href="#" class="current">天津</a></li>
									<li><a href="#">重庆</a></li>
									<li><a href="#">甘肃</a></li>
									<li><a href="#">广西</a></li>
									<li><a href="#">北京</a></li>
									<li><a href="#">福建</a></li>
									<li><a href="#">广东</a></li>
									<li><a href="#">贵州</a></li>
								</ul>
							</div>
						</div>
					</div>
					<!--/左侧结束-->
					<!--ABCDEFG 第一个-->
					<div id="one">
						<!--tab1-->
						<div id="province1">
						<div class="choice-right">
							<ul>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
							</ul>
						</div>
					</div>
						<div id="province2" style="display:none;">
						<div class="choice-right">
							<ul>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州2</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
							</ul>
						</div>
					</div>
						<div id="province3" style="display:none;">
						<div class="choice-right">
							<ul>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州3</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
							</ul>
						</div>
					</div>
						<div id="province4" style="display:none;">
						<div class="choice-right">
							<ul>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州4</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
							</ul>
						</div>
					</div>
						<div id="province5" style="display:none;">
						<div class="choice-right">
							<ul>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州5</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
							</ul>
						</div>
					</div>
						<div id="province6" style="display:none;">
						<div class="choice-right">
							<ul>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州6</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
							</ul>
						</div>
					</div>
						<div id="province7" style="display:none;">
						<div class="choice-right">
							<ul>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州7</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
							</ul>
						</div>
					</div>
						<div id="province8" style="display:none;">
						<div class="choice-right">
							<ul>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州8</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>广州</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>韶光</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>深圳</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>珠海</p>
								</li>
								<li>
									<p><input type="checkbox" class="checkbox-fie"/></p>
									<p>汕头</p>
								</li>
							</ul>
						</div>
					</div>
					</div>
					<!--/ ABCDEFG 第一个结束-->
				</div>
				
			</div>
			
		</div>	
		
		<div class="configure-btn">
			<input id="finish" type="button" class="btn btn-blue btn-large radius5" value="完成"/>
		</div>
 </div>
</body>
<%@ include file="/inc/incJs.jsp"%>
<script type="text/javascript" src="${uedroot}/scripts/modular/configure.js"></script>
<script type="text/javascript">
  $(function(){
	  $("#finish").click(function(){
		  location.href = _base + '/home/index';
	  });
  });
</script>
</html>

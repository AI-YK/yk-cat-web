<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<script type="text/javascript"></script>
<script src="js/layer/layer.js"></script>
</head>
<body>
<!--新的头部--> 
<style type="text/css">
	.header_box .right .menu_list li .m_list .m_list_bg .m_list_bg_no{color: #1C232B;cursor: default;}
	.header_box{ position: relative;z-index: 1001;clear: both; height: 50px; line-height: 50px;background-color: #0f161c;  font: 12px/1.5 "Helvetica Neue", arial, "Microsoft Yahei", "微软雅黑", 'Hiragino Sans GB', sans-serif;}
	.header_box .ico_logo{ background: url(images/head/logo.png) no-repeat; width: 110px; height: 37px; display: block; margin: 6px 0; overflow: hidden;}
	.header_box .ico_search{ background: url(images/head/search.png) no-repeat; width: 20px; height: 20px; display: inline-block; overflow: hidden;}
	
	.header_box .ico_menu1{background: url(images/head/menu1.png) no-repeat;width:34px; height: 34px; display: inline-block; overflow: hidden;}
	.header_box .ico_menu2{background: url(images/head/menu2.png) no-repeat;width:34px; height: 34px; display: inline-block; overflow: hidden;}
	.header_box .ico_menu3{background: url(images/head/menu3.png) no-repeat;width:34px; height: 34px; display: inline-block; overflow: hidden;}
	
	.header_box .ico_menu4{background: url(images/head/login.png) no-repeat;width:34px; height: 34px; display: inline-block; overflow: hidden;}
	
	.header_box .ico_lan1{background: url(images/head/lan1.png) no-repeat;width:30px; height: 30px; display: inline-block; overflow: hidden; vertical-align: middle; margin-right: 10px;}
	.header_box .ico_lan2{background: url(images/head/lan2.png) no-repeat;width:30px; height: 30px; display: inline-block; overflow: hidden; vertical-align: middle;margin-right: 10px;}

	.header_box .left{float: left;height: 50px; line-height: 50px; padding: 0 20px;}
	.header_box .left a{ display: block;}
	.header_box .center{float: left;height: 50px; line-height: 50px; position: relative;}
	.header_box .center .title{height: 30px; line-height: 30px; overflow: hidden; display: inline-block; margin: 10px 0; padding-left:10px;border-left: 1px solid #253242;}
	.header_box .center .title h1{line-height: 30px;  color: #1a7cc9; font-size: 24px; font-family: "microsoft yahei"; font-weight:lighter;display: inline-block;}
	.header_box .center .header_top_list{height:50px; display: inline-block; overflow: hidden; position: relative; margin-left: 25px;}
	.header_box .center .header_top_list li{height:50px;font-size: 14px;line-height: 50px;float: left;width: 100px;text-align: center;color: #fff;}
	.header_box .center .header_top_list li a{color: #D0CFD8; display: block;} 
	.header_box .center .header_top_list li.on{ background: #242a32;border-top: 2px solid #2e95f3;line-height: 48px;}
	.header_box .center .header_top_list li:hover{ background-color: #242a32;}
	
	
	.header_box .right{float: right;height: 50px; line-height: 50px; position: relative; padding-right: 20px;}
	.header_box .right .search_box{ position: relative; display: inline-block;  margin-right: 20px;float: left;margin-top:10px}
	.header_box .right .search_box .search_txt{ font-family:"Microsoft Yahei"; font-size:14px;width:200px; height: 30px; line-height: 30px; border:none;background: #050709; vertical-align: middle; border-radius: 15px; padding-left: 15px; padding-right: 35px; overflow: hidden; position: relative; color: #257acf; outline: none;border: 1px solid #273f53;}
	.header_box .right .search_box a{width: 20px; height: 20px;display: block; position: absolute; top: 6px; right:8px;}
	
	.header_box .right .menu_list{position: relative;  height: 50px; display: inline-block; list-style: none;  float: left;}
	.header_box .right .menu_list li{height: 50px; min-width: 50px; position: relative; display: inline-block; text-align: center;vertical-align: top;}
	.header_box .right .menu_list li .btn_menu{width:34px; height: 34px; display: inline-block; margin: 8px 0; overflow: hidden;}
	.header_box .right .menu_list li .ico_menu1{ background-position: 0 0;}
	.header_box .right .menu_list li .ico_menu2{ background-position: 0 0;}
	.header_box .right .menu_list li .ico_menu3{ background-position: 0 0;}
	
	.header_box .right .menu_list li:hover .ico_menu1{ background-position:-34px 0;}
	.header_box .right .menu_list li:hover .ico_menu2{background-position: -34px 0;}
	.header_box .right .menu_list li:hover .ico_menu3{background-position: -34px 0;}
	
	.header_box .right .menu_list li:hover .ico_menu4{background: url(images/head/login_hover.png) no-repeat;}
	
	.header_box .right .menu_list li .m_list{ position: absolute;right:-77px; top: 50px;  z-index: 9999; display: none; padding-top: 10px; background-color: transparent; }
	.header_box .right .menu_list li .m_list .m_list_up{ position: absolute; display: block; top: 0px; left: 50%; margin-left: -5px;width:0;height:0;border-width:0 10px 10px;border-style:solid;border-color:transparent transparent #257acf; }
	.header_box .right .menu_list li .m_list .m_list_up i{position: relative;top:2px; left:-9px; display: block; width:0;height:0;border-width:0 9px 9px;border-style:solid;border-color:transparent transparent #10161d; }
	.header_box .right .menu_list li .m_list .m_list_bg{background-color: #10161d; width: 210px; border:1px solid #257acf;}
	.header_box .right .menu_list li .m_list dl{font-family:"Microsoft Yahei"; display: block; text-align: center;padding: 10px 0;}
	.header_box .right .menu_list li .m_list dl dt{font-family:"Microsoft Yahei";color: #257acf; font-size: 18px;display: block;}
	.header_box .right .menu_list li .m_list dl dd{ font-size:14px;font-family:"Microsoft Yahei";height: 30px; line-height: 30px; display: block;color:#273442; clear:both;}
	.header_box .right .menu_list :nth-child(1) .m_list dl dd a{font-family:"Microsoft Yahei";color: #4f657b;font-size:14px; float: left;display：block;padding-left: 70px;}
	.header_box .right .menu_list :nth-child(2) .m_list dl dd a{font-family:"Microsoft Yahei";color: #4f657b;font-size:16px; float: left;display：block;padding-left: 10px;}
	.header_box .right .menu_list li .m_list dl dd a:hover{ color: #3497f2;}
	.header_box .right .menu_list li .m_list dl dd.on{background: url(images/head/left_point.png) left 50px top 7px no-repeat ;}
	.header_box .right .menu_list li .m_list dl dd.on a{color: #3497f2;}
	
	.header_box .right .menu_list li .m_list dl dd:hover{}
	.header_box .right .menu_list li:hover .m_list{display: block;}
 
	.header_box .clear{ clear: both;}
	
	.ico_fave{background:url(images/icons/fav.png) no-repeat left center;padding-left:25px;display: inline-block;height: 30px;vertical-align: middle;}
	.ico_coll{background:url(images/icons/sjgl.png) no-repeat left center;padding-left:25px;display: inline-block;height: 30px;vertical-align: middle;}
	.ico_acco{background:url(images/icons/zhanghao.png) no-repeat left center;padding-left:25px;display: inline-block;height: 30px;vertical-align: middle;}
	.ico_data{background:url(images/icons/caibian.png) no-repeat left center;padding-left:25px;display: inline-block;height: 30px;vertical-align: middle;}
	.ico_sugg{background:url(images/icons/yjfk.png) no-repeat left center;padding-left:25px;display: inline-block;height: 30px;vertical-align: middle;}
	.ico_exit{background:url(images/icons/exit.png) no-repeat left center;padding-left:25px;display: inline-block;height: 30px;vertical-align: middle;}


	
		.wrap {cursor:pointer;position:relative;top:9px;right:0px;}
              
        .langue{width:80px;height:32px;border-radius:16px;background: #050709;line-height:32px;text-align: center;position:relative;}
       .lantab{width:80px;height:64px;border-radius:15px;border:1px solid #1b6ec1;background: rgba(0,0,0,0.7);position: absolute;top:0px;left:0px;display:none;z-index:999999;font-size:14px;}
        .langsel{ width: 50px; margin-left:15px;height:31px;cursor:pointer;color:#4f6b92;text-align: center;}
        .langsel:hover{color:#1d78d2;}
        #select_lan{color:#257acf;} 
        #select_div{font-size:14px;} 
        
.layui-layer-close2{position:absolute;right:-28px;top:-28px;width:30px;height:30px;margin-left:0;background-position:-149px -31px;*right:-18px;_display:none}
.layui-layer-close2:hover{background-position:-180px -31px}
body .logintheme{background:transparent;filter:'alpha(Opacity=0);-moz-opacity:0;opacity: 0';}
.layui-layer-load{background:url(images/article/loading-0.gif) center center no-repeat #000;filter:alpha(opacity=50);-moz-opacity:0.50;opacity:0.50;}
.layui-layer-content {
	position:absolute;
	width: 100%; 
} 
</style>
<div class="header_box">
	<div class="left">
		<a title="返回首页" href="http://www.yeesight.com"><i class="ico_logo"></i></a>
	</div>
	<div class="center">
		<span class="title"><h1>
		
		热点发现</h1>
        	
        </span>
		<!-- <ul class="header_top_list">
			<li class="on"><a href="analysisMap/dataIndex">地图</a></li>
			<li><a href="javascript:;">列表</a></li>
		</ul> -->
		
	</div>
	
	
	
	<div class="right" style="display:none;">
		<span class="search_box">
			   <input type="text" class="search_txt" name="keyword" placeholder="">
			   <a title="点击搜索" class="btn_search" href="javascript:;"><i class="ico_search"></i></a>
		</span>
		<ul class="menu_list">
			<li>
				<a class="btn_menu" title="菜单"><i class="ico_menu1"></i></a>
				<div class="m_list" style="">
					<b class="m_list_up"><i></i></b>
					<div class="m_list_bg">
					<dl>
					 	<dt><i class="ico_lan2"></i>通用大数据产品</dt>
					 	<dd><a href="http://buzz.yeesight.com/analysisMap/dataIndex">专题分析</a></dd>
					 	<dd><a href="javascript:;" class="m_list_bg_no">产品分析</a></dd>
					 	<dd><a href="javascript:;" class="m_list_bg_no">企业分析</a></dd>
					 	<dt><i class="ico_lan1"></i>行业大数据产品</dt>
					 	
					 	<dd class="on"><a href="http://news.yeesight.com">全球热点</a></dd>
					 	<dd><a href="javascript:;" class="m_list_bg_no">汽车分析</a></dd>
					 	<dd><a href="javascript:;" class="m_list_bg_no">出版分析</a></dd>
					 	<dd><a href="javascript:;" class="m_list_bg_no">旅游分析</a></dd>
					 	<dd><a href="javascript:;" class="m_list_bg_no">医疗分析</a></dd>
					</dl>
					</div>
				</div>
			</li>
			<li>
				
				<a href="javascript:loginClick();" class="btn_menu" title="用户登录"><i class="ico_menu2"></i></a>
				
				
			</li>
			<li>
				<a class="btn_menu" title="扫描二维码" onclick="ewm();" style="cursor: pointer;"><i class="ico_menu3"></i></a>
			</li>
			<li>
					
				 <div class="wrap">
		   			 <div class="langue">
		   			   <!--  <div id="select_div">
							<span id="select_lan">中文</span><img src="images/xla.png"style="padding-left:10px;" >
						</div>
						<div class="lantab">
							<div class="langsel" data-val="zh_CN" data-text="中文">中文<img src="images/xla.png"style="padding-left:10px;"></div>
							<div class="langsel" data-val="en_US" data-text="EN" style="border-top:1px solid #253545;text-align: left;padding-left:13px;width:37px;">EN</div>
						</div> -->
					</div> 
				</div>
				
				
				
				
				
			</li>
		</ul>
	</div>
	<div class="clear"></div>
</div>

<div id="imgId" style="display: none;"><img src="images/head/1469689565.png"><span style="color: white;font-size:24px;"><br>&nbsp;&nbsp;&nbsp;&nbsp;手机扫码,下载客户端</span></div>
<div style="display:none">
   <form action="http://buzz.yeesight.com/login" id="loginJumpFormId" method="post">
        <input type="hidden" name="url" id="jumpUrlId">
   </form>
</div>

<script type="text/javascript">
	//按回车即搜索
	$(function() {      
		
   		 if("zh"=='en')
			 {
   			 $('#select_div').remove();
   			  var htmlml='<div id="select_div">'
		      				+	'<span id="select_lan">EN</span><img src="images/xla.png"style="padding-left:10px;" >'
		      				+	'</div>'
		      				+	'<div class="lantab">'
		      				+		'<div class="langsel" data-val="en_US" data-text="EN">EN<img src="images/xla.png"style="padding-left:10px;"></div>'
		      				+		'<div class="langsel" data-val="zh_CN" data-text="中文" style="border-top:1px solid #253545;text-align: left;padding-left:15px;width:37px;">中文</div>'
		      				+	'</div>'
   			  $('.langue').append(htmlml);
   			  window.localStorage.setItem('langue','en');
   		  
   		  }else{
   			  $('#select_div').remove();
   			  var htmlml='<div id="select_div">'
   			 			+	 '<span id="select_lan">中文</span><img src="images/xla.png"style="padding-left:10px;" >'
			    			+	'</div>'
			    			+	'<div class="lantab">'
			    			+		'<div class="langsel" data-val="zh_CN" data-text="中文">中文<img src="images/xla.png"style="padding-left:10px;"></div>'
			    			+		'<div class="langsel" data-val="en_US" data-text="EN" style="border-top:1px solid #253545;text-align: left;padding-left:13px;width:37px;">EN</div>'
			    			+	'</div>'
			    			
   			  $('.langue').append(htmlml);
   			  window.localStorage.setItem('langue','en');
   			  
   		  }
   		if("null"=='en'){   
			$('#mListId').css('right','-55px');
			$('#userMenuId').css('width','170px');
		}else{
			$('#mListId').css('right','-30px');
			$('#userMenuId').css('width','120px');
		}
   		 $("#codeDown").click(function(){
				$("#imgId").height($(document).height()).show();
			})
//			$("#imgId").click(function(){
//				$(this).hide();
//			})
			$(".chahca img").click(function(){
				$("#imgId").hide();
			});	

   		
			$('.langsel').bind('click',function(){
				$('#select_lan').text($(this).attr('data-text'));
				$('.lantab').hide();
				var lang = $(this).attr('data-val');
				if(lang!=''){
       			  $.ajax({
         	    	    url: "lanage/change",
         	    	    data: {"locale" : lang,"lanage":lang,"time":new Date().getTime()},
         	    	    dataType: "json",
         	    	    success:function(){
         	    	    	window.location.reload();
         	    	    	
         	    	    }
         	    	});  
       		  }
			});
			$('#select_div').bind('click',function(){
				$("#select_lan").text('');
				$(this).find('img').hide();
				$('.lantab').show();
				$('.lantab>:first').css('color','#257acf');
			});
			
			$("#codeDown").click(function(){
				$("#imgId").height($(document).height()).show();
			})
//			$("#imgId").click(function(){
//				$(this).hide();
//			})
			$(".chahca img").click(function(){
				$("#imgId").hide();
			});	
		

                //搜索回车
				$('input[name="keyword"]').keyup(function(event) {
					if (event.keyCode == 13) {
						var k = $.trim($('input[name="keyword"]').val());
						if (k) {
							window.location = 'http://buzz.yeesight.com/search?keyword=' + k;
						} else {
							$('.search1').addClass('err');
						}
						return false;
					}
				});
				
				//搜索按钮
				$('.btn_search').bind('click',function(event) {
						var k = $.trim($('input[name="keyword"]').val());
						if (k) {
							window.location = 'http://buzz.yeesight.com/search?keyword=' + k;
						} else {
							$('.search1').addClass('err');
						}
						return false;
				});
				

	});
	
	function ewm(){	 
		layer.open({
			skin:'logintheme',
			 type : 1,
			 title : false,
			 fix:false,
			 shadeClose : true,
			 shade : 0.8,
			  area: ['305px', '340px'],
			  content: $('#imgId') //iframe的urlcontent: $('#imgId') //这里content是一个DOM
			});  
	}

	function initSelectList(){
		var $selectList = $('.select_list');

		$selectList.on('click','.select_item',function(e){
			var $delegate = $(e.delegateTarget),
				$target = $(e.target);
			if($delegate.hasClass('opened')){
				$target.siblings('.selected').removeClass('selected');
				$target.addClass('selected');
				$delegate.removeClass('opened');

				var lang = $target.attr('data-val');
			}else{
				$delegate.addClass('opened');
				$target.prependTo($delegate);
			}
		});
	}

	initSelectList();
	
	function loginClick(){
		var href = window.location.href;
		$('#jumpUrlId').val(href);
		$('#loginJumpFormId').submit();
	}
</script>
</body>
</html>
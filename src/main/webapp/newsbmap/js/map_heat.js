var domain="";
var myChart,myChart3,myBmapChart;
var fg="1";//默认所有分类
var fg_1="1";//默认为选中时间
var start_datetime='';//开始时间
var end_datetime='';//结束时间
var event_code='';//事件分类表
var country_class='';//国家种族分类
var classify='';//新闻分类
var sourceType ='';
var imgs="images/temp/nopic.jpg";///zypublish-web/src/main/webapp/resources/images/news/nopic.jpg
var imgszx="images/temp/nopic.jpg";///zypublish-web/src/main/webapp/resources/images/news/nopic.jpg
var flags=true;//控制第一次
var flagszt=true;//控制第一次
var timeId;
var bmap = null;//百度地图数据
//临时经纬度
var lang="";//经度
var lat="";//维度
/**2016-12-17 新加字段*/
var categoryId;
var countryCode;
var provinceCode;
var cityCode;
/**
 * 提示渐隐时间
 * @type {number}
 */
var TIP_SETTIMEOUT_TIME = 10000;

/**
 * 每次显示的数量，新闻的数量
 * @type {number}
 */
var SHOW_NEWS_NUM = 2;
/**
 * echartTips内的提元素
 * @type {Array}
 */
var $elList = [];

/**
 * echart容器
 * @type {*|jQuery|HTMLElement}
 */
var $echart = $('#echates');

/**
 * echart弹出新闻提示的容器
 * @type {*|jQuery|HTMLElement}
 */
var $echartTips = $('#echartTips');

$(function(){
	domain=$("#buzzYeesight").val();//获取访问的域名地址
	//时间轴拖拽功能
	trinkFunc();
	//初始化
	//$('.echarts_name').html('<h1>全球热点事件<font color="#1d78d2">分布图</font></h1>')
	$('.container').css({'height':$('body').height()-137});
	$('.news_list .news_list_bg,.news_list .list_box').css({'height':$('body').height()-93});
	$('.news_list .div_list').css({'height':$('body').height()-223});

	//默认时间轴日期
	/*if(undefined !=$('.rqxz').eq(0).parent().attr('data-value')){
		start_datetime=$('.rqxz').eq(0).parent().attr('data-value')+" 00:00:00";  //开始时间
		end_datetime=$('.rqxz').eq($('.rqxz').length-1).parent().attr('data-value')+" 23:59:59";     //结束时间
	}*/

	//前后7天
	var curDate = new Date();
	end_datetime= formatDate(new Date(curDate.getTime()))+" 23:59:59";  //后一天
	start_datetime= formatDate(new Date(curDate.getTime() - (30*24*60*60*1000)))+" 00:00:00";  //前一天

	/*//右侧切换
	$('.tab_list li').unbind().bind('click',function(){
		 $(this).addClass('on').siblings().removeClass('on');
		 $('.div_list .con_notes').hide().eq($(this).index()).show();

	     if(!$('.con_notes').eq(0).is(":hidden") && $('#mainBox_note1 .scrDiv_note').length<1){
		      addscoll_new_note1=new addScroll('mainBox_note1','newsinfo','scrDiv_note');
		 }
	     if(!$('.con_notes').eq(1).is(":hidden") && $('#mainBox_note2 .scrDiv_note').length<1){
		     addscoll_new_note2=new addScroll('mainBox_note2','newsVal','scrDiv_note');
		 }
	});  */  //宽高变换
    $(window).resize(function(){
         $('.container').css({'height':$('body').height()-137});
         $('.news_list .news_list_bg,.news_list .list_box').css({'height':$('body').height()-93});
         $('.news_list .div_list').css({'height':$('body').height()-223});
         //右侧热点咨询点滚动条
         if(!$('.con_notes').eq(0).is(":hidden")){
		      addscoll_new_note1=new addScroll('mainBox_note1','newsinfo','scrDiv_note');
		 }else{
		 	$('#mainBox_note1 .scrDiv_note').remove();
		 }
	     if(!$('.con_notes').eq(1).is(":hidden")){
		     addscoll_new_note2=new addScroll('mainBox_note2','newsVal','scrDiv_note');
		 }else{
		 	 $('#mainBox_note1 .scrDiv_note').remove();
		 }
	     $(".echart_tip").remove();//清空所有提示框
	 	 if(ympd=='0'){
	    	 try{myChart.resize();}catch(e){};
	     }else{
	    	 try{myBmapChart.resize();}catch(e){};
	    	 setBMap();
	     }
    });

   //右侧热点咨询点击事件
   /* $('.bottom_btn').bind('click',function(){
    	guojiaFunc();//隐藏国家选择
    	 if($(this).hasClass('open')){
			 var $navTop = $('.nav2topr'),
				 $navBottom = $('.navtbot'),
				 $sideList = $('.right_btn .news_list');

			 $navTop.addClass('expanded');
			 $navBottom.addClass('expanded');
			 $sideList.show();
			 $sideList.css('transform');
			 $sideList.addClass('expanded');

    	 	$(this).removeClass('open').addClass('close');
   	 	
    	 	//container盒子
    	 	$('.container').width($('body').width()-$('.news_list').width());
    	//窗口变化
    	 	$('.container').css({'height':$('body').height()-137});
            $('.news_list .news_list_bg,.news_list .list_box').css({'height':$('body').height()-93});
            $('.news_list .div_list').css({'height':$('body').height()-223});
            //右侧热点咨询滚动条
            if(!$('.con_notes').eq(0).is(":hidden")){
   		      addscoll_new_note1=new addScroll('mainBox_note1','newsinfo','scrDiv_note');
            }else{
   		 		$('#mainBox_note1 .scrDiv_note').remove();
   		 	}
   	     	if(!$('.con_notes').eq(1).is(":hidden")){
   	     		addscoll_new_note2=new addScroll('mainBox_note2','newsVal','scrDiv_note');
   	     	}else{
   	     		$('#mainBox_note1 .scrDiv_note').remove();
   	     	}
	   	    $(".echart_tip").remove();//清空所有提示框
	   	    listenAnimationEnd($sideList,function(){
				 if(ympd=='0'){
	    	    	 try{myChart.resize();}catch(e){};
	    	     }else{
	    	    	 try{myBmapChart.resize();}catch(e){};
	    	    	 setBMap();
	    	     }
			 });
	   	     
    	 	//$('#echates').width($('body').width()-$('.news_list').width());
		 	 
		 	//列表
	    	 	$('.nav2topr').css('margin-right','15px');
    	 }else{
			 var $navTop = $('.nav2topr'),
				 $navBottom = $('.navtbot'),
				 $sideList = $('.right_btn .news_list');

			 $navTop.removeClass('expanded');
			 $navBottom.removeClass('expanded');
			 $sideList.removeClass('expanded');
			 $sideList.hide();
			 
    	 	$(this).removeClass('close').addClass('open');
    	 	
    	 	$('.container').width('100%');
    	 	$(".echart_tip").remove();//清空所有提示框
    	 	//listenAnimationEnd($sideList,function(){
			 //});
    	    $('#echates').width('100%');
    	 	 if(ympd=='0'){
    	    	 try{myChart.resize();}catch(e){};
    	     }else{
    	    	 try{myBmapChart.resize();}catch(e){};
    	    	 setBMap();
    	     }
    	 	//列表
     	 	$('.nav2topr').css('margin-right','50px');
    	 }
       //右侧热点咨询滚动条
    	 if(!$('.con_notes').eq(0).is(":hidden") && $('#mainBox_note1 .scrDiv_note').length<1){
		      addscoll_new_note1=new addScroll('mainBox_note1','newsinfo','scrDiv_note');
		 }
	     if(!$('.con_notes').eq(1).is(":hidden") && $('#mainBox_note2 .scrDiv_note').length<1){
		     addscoll_new_note2=new addScroll('mainBox_note2','newsVal','scrDiv_note');
		 }
    });*/
    //$(".echart_tip").remove();
	init();//加载分类
	//get_event_point();//地图显示突发事件数据
	//get_event_point_data();//地图显示新闻和社交热点数据
	
	
	//get_event_point_data_zixun();//资讯
//	get_event_point_data_new();//右侧新闻数据
	smilNewsData();
	smilEventData();
	//全球选择鼠标离开隐藏
	$(document).on('mouseleave','.xzzhou',function(){
		//移除国家城市滚动条
		$('.guojia_xz').removeClass("content"); 
		$('.chengshi_xz').removeClass("content");
		//收起全球
		shouqiFunc();
	})
	
  //单击全球
	$(document).on('click',".quanqiu",function(){
		ympd="0";
		//收起全球
		shouqiFunc();
		//不跳转城市页面
		$(".xzzhou .xz_nr .guojia_xz").addClass("show").removeClass("close");
	    $(".xzzhou .xz_nr .chengshi_xz").addClass("close").removeClass("show");
	    $(".xzzhou .xzgj .gj_sz").addClass("tzbj");
	    $(".xzzhou .xzcs .cs_sz").removeClass("tzbj");
	    $(".xzzhou .qq_xz").removeClass("tzbj1");

		gj="全球";
		cs='';
		bs=1;
		var csCode = $(this).attr("arr");
		selectCity1(mc,jd,wd,gj,cs,start_datetime,end_datetime,classify,csCode);
	})
  //单机城市事件
	$(document).on('click',".chengshi_a",function(){
		ympd="0";
    	$('.xz_bottom_left .xz_chengshi').text($(this).html());
		$(".dian").show();
		$(".xz_chengshi").show();
    	$(".ssk").val("");
    	jd=$(this).next().html();
		wd=$(this).next().next().html();
		//收起全球
		shouqiFunc();
		mc=$('.xz_bottom_left .xz_chengshi').text();
		gj=$('.xz_bottom_left .xz_guojia').text();
		cs=$('.xz_bottom_left .xz_chengshi').text();
		bs=10;
		var csCode = $(this).attr("arr");
		$('.nav_left .guojia').html(gj+$('.dian').html()+cs);
    	selectCity1(mc,jd,wd,gj,cs,start_datetime,end_datetime,classify,csCode);
    })
 //单击搜索事件
	$(document).on("click",'.shousuo',function(){
		
		//单击全部
		if($('.xz_bottom_left .xz_guojia').text()!="国家" && ($(this).text()=='全部' || $(this).text()=='All')){
			quanbuFunc();
			return;
		}
		//移除滚动条
		$('.guojia_xz').removeClass("content");
		$('.chengshi_xz').removeClass("content");
		//alert("-----111----"+$(".ssk").val());
    	if($(".ssk").val()!=""){//判断搜索框里有没有值 
    		mc=$(".ssk").val();//搜索
    		if(pd=='1'){//国家框内
    		    var gjName=mc;
        		if("全球"!=gjName && "Global"!=gjName){
        			initCity(gjName);
        		}
    			gj=mc;
    			if(isData=='1'){//存在
    				pd='2';
    				$('.chengshi_xz').addClass("content");
                	$('.guojia_xz').removeClass("content");
        			$(".xzzhou .xz_nr .guojia_xz").removeClass("show").addClass("close");
        		    $(".xzzhou .xz_nr .chengshi_xz").removeClass("close").addClass("show");
        		    $(".xzzhou .xzgj .gj_sz").removeClass("tzbj");
        		    $(".xzzhou .xzcs .cs_sz").addClass("tzbj");
        		    $(".xzzhou .qq_xz").addClass("tzbj1");
    				
    				$('.nav_left .guojia').html(gj);
        			$('.xz_bottom_left .xz_guojia').text(gj);
        			$(".xz_guojia").show();
        			$(".ssk").val('');
        			//加载滚动条
        			$(".content").mCustomScrollbar({
						autoHideScrollbar:true,
						theme:"light-thin"
					});
    			}
    		}else{
    			mc=$(".ssk").val();
        		gj=$('.xz_bottom_left .xz_guojia').text();
        		cs=mc;
        		bs=10;
        		var csCode = $(this).attr("arr");
    	    	selectCity1(mc,jd,wd,gj,cs,start_datetime,end_datetime,classify,csCode);
    		}	
    	}
    	else if($('.xz_bottom_left .xz_guojia').text()!="国家" && $('.xz_bottom_left .xz_chengshi').text()=="城市"){//判断国家
    		mc=$('.xz_bottom_left .xz_guojia').text();
    		gj=$('.xz_bottom_left .xz_guojia').text();
    		cs='';
    		bs=5;
			//alert(mc+"--"+jd+"--"+wd+"--"+bs+"--"+gj+"--"+cs);
    		var csCode = $(this).attr("arr");
	    	selectCity1(mc,jd,wd,gj,cs,start_datetime,end_datetime,classify,csCode);
	    	
    	}
    	else if($('.xz_bottom_left .xz_guojia').text()!="国家" && $('.xz_bottom_left .xz_chengshi').text()!="城市"){//判断城市
    		mc=$('.xz_bottom_left .xz_chengshi').text();
    		gj=$('.xz_bottom_left .xz_guojia').text();
    		cs=$('.xz_bottom_left .xz_chengshi').text();
    		bs=10;
			//alert(mc+"--"+jd+"--"+wd+"--"+bs+"--"+gj+"--"+cs);
    		var csCode = $(this).attr("arr");
	    	selectCity1(mc,jd,wd,gj,cs,start_datetime,end_datetime,classify,csCode);
    	}else{//什么都没选的情况
    		layer.alert($("#nhn9").val(),{
	 			 title:$("#ns3").val(),
	 			 btn:$("#ns4").val()
	 		  }/*"请选择国家"*/);
    		return false;
    	}		
	})

});

//时间轴拖拽功能
function trinkFunc(){
	//时间轴拖拽功能 开始
	var startval=null,eleEndValue=null;
	$('.time').bind('mousedown',function(){
		startval=parseInt($(this).attr('value'));
		return false;
		//console.log(startval);
	});
	//时间轴拖拽功能结束
	$('.time').bind('mouseup',function(){
		eleEndValue=parseInt($(this).attr('value'));
		//console.log($('.time[value='+ startval +']').hasClass('rqxz'));
		if($('.time[value='+ startval +']').hasClass('rqxz')&&(!$(this).hasClass('rqxz'))){
			if($('.rqxz').length<=1){
				startval=startval;
			};
			if($('.rqxz').length>1){
				if(eleEndValue>=startval){
					startval=$('.rqxz').eq(0).attr('value');
				}else{
					startval=$('.rqxz').eq($('.rqxz').length-1).attr('value');
				}
			};
		}

		if(Math.abs(startval-eleEndValue)<=6){
					$('.time').removeClass('rqxz');           //取消状态
					$('.timeleft').remove();
					$('.timeright').remove();
					if(startval>=eleEndValue){    //向左
						//console.log('向左')
						for(var i=eleEndValue-1;i<startval;i++){
							$('.time').eq(i).addClass('rqxz');
							if(i==(eleEndValue-1)){
								$('.time').eq(i).append('<img id="timeleft" class="timeleft" style="margin-right:3px;vertical-align:middle;" src="images/news/time_left.png">');
							};
							if(i==(startval-1)){
								$('.time').eq(i).append('<img id="timeright"  class="timeright" style="margin-left:3px;vertical-align:middle;" src="images/news/time_right.png">');
							};

						};
					}else{     //向右
						//console.log('向右')
						for(var i=startval-1;i<eleEndValue;i++){
							$('.time').eq(i).addClass('rqxz');
							if(i==(startval-1)){
								$('.time').eq(i).append('<img id="timeleft" class="timeleft" style="margin-right:3px;vertical-align:middle;" src="images/news/time_left.png">')
							};
							if(i==(eleEndValue-1)){
								$('.time').eq(i).append('<img id="timeright"  class="timeright" style="margin-left:3px;vertical-align:middle;" src="images/news/time_right.png">')
							};

						};
					};
				};

				var newdate=document.getElementsByClassName('rqxz');
				start_datetime=$('.rqxz').eq(0).parents('.time1').attr('data-value')+" 00:00:00";  //开始时间
				end_datetime=$('.rqxz').eq($('.rqxz').length-1).parents('.time1').attr('data-value')+" 23:59:59";     //结束时间
				//country_class="";
				fg_1="0";
				fg="0";
				/**
				 * 切换地图
				 */
				//$("#echates").show();
			    //$("#echart_bmap").hide();
			    guojiaFunc();
			    
			    //$(".echart_tip").remove();
			    if(ympd=='0'){//全球热点
			    	//隐藏国家选择
//			    	get_event_point_data();
			    	smilEventData();
			    }else{
			    	getBMapData();
			    }
			 //   get_event_point_data_zixun();//资讯
			//	get_event_point_data_new();//右侧新闻数据
				return false;
	});
}

//初始化分类列表
/**
 * lixiang 2016-12-15
 * 舆情分类
 */
function init(){
	$.ajax({
	   // url: "news/classify/selectAll",
//		url:path + "/newsbmap/json/selectAllJson.json",
		url:path + "/common/getDic",
	    data: '',
	    dataType: "json",
	    success: function(data){
	    	var data =eval(data.data);
	    	$("#type").empty();
	    	var s="";
//	    	var html='<li class=" menu onnx" onclick="go(this,\''+s+'\')">'+$("#nhn7").val()+/*'全部'*/'</li>';
	    	var html='<li class=" menu onnx" onclick="go(this,\''+s+'\')">'+'全部'+'</li>';
	    	$("#type").append(html);
	    	if(data!=''){
	    		var num=0;
//	    		$.each(data.data.results, function(commentIndex, dv){
	    		$.each(data, function(commentIndex, dv){
	    			var htmlV='';
	    			if(commentIndex < 10){
	    				htmlV+='<li class="menu " onclick="go(this,\''+dv.dicValue+'\')">'+(($("#language").val()=="en")? dv.dicNameEn : dv.dicName)+'</li>';
	    				$("#type").append(htmlV);
	    			}
	    			if(commentIndex == 10){
	    			/*更多*/	htmlV+='<li class="gengduo">'+$("#nhn6").val()+'<span class="ico_gd"></span>';
	    					htmlV+='<div class="gdxiala">';
	    					htmlV+='<div class="sanjiao"></div>';
	    					htmlV+='<div class="qiaol"></div>';
	    					htmlV+='<ul class="liebiao" id="typechild">';
	    					htmlV+='<li class="menu" onclick="go(this,\''+dv.dicValue+'\')">'+dv.dicName+'</li>';
	    					htmlV+='</ul>';
	    					htmlV+='</div>';
	    					htmlV+='</li>';
	    					$("#type").append(htmlV);
	    			}
	    			if(commentIndex > 10){
	    				htmlV+='<li class="menu" onclick="go(this,\''+dv.dicValue+'\')">'+dv.dicName+'</li>'
	    				$("#typechild").append(htmlV);
	    			}

	            });

	    	}

        }
	});

}

//隐藏国家选择
function guojiaFunc(){
    if($('.nav_left').hasClass('top')){
    shouqiFunc();
    $('.chengshi_xz').removeClass("content");
	$('.guojia_xz').removeClass("content");
    }
}
//
//2.0百度地图展示
function setBMap(){
	$(".echart_tip").remove();
	 var option = {
			    title: {
			    	show:false,
			        text: '',
			        left: 'left',
			        textStyle: {
			            color: '#ffffff'
			        }
			    },
			    backgroundColor: 'transparent',
			    visualMap: {
			    	show:false,
			    	type:'continuous',
			    	itemWidth: 10,
	                itemHeight: 180,
			        min: 0,
			        max: 10,
			        left: 20,
					bottom: 20,
			        inRange: {
						color: ['#d71345','#ffd400','#45b97c','#145b7d'].reverse()//控制数值翻转
			        },
			        calculable: true,
			        textStyle: {
			            color: '#fff'
			        }
			    },
			     tooltip : {
			    	show:true,
			    	showContent:true,
			    	enterable:true,
			        trigger: 'item',
//			        showDelay:100,
				    hideDelay:1000,
			        position: function(p){
			            return [p[0]-130,p[1]-90];
			        },
			        padding:[0,0,0,0],
			        width:207,
			        height:110,
			        //backgroundColor: 'rgba(13,43,67,0.7)',
			        //borderColor:'rgba(31,120,214,1)',
			        formatter: function(data){
						$elList = [];
						$echartTips.empty();

						stopNewsShown();

						var $el = addNewsElem(data.data);



			      		return '';
			          },
			        textStyle:{ 
			        	color:'#ffffff'
			        }
			    },
	            bmap: {
			            center: [116.46, 39.92],
			            zoom: 1.1,
			            roam: 'move',
			            mapStyle: {
			              'styleJson': [
			                            {"featureType": "administrative",
						                    "elementType": "geometry",
						                    "stylers": {
						                    	"color": "#0d1f34",
						                    	"weight": "0.1"
						                    }
						                },
						                {
						                    "featureType": "label",
						                    "elementType": "labels.text.fill",
						                    "stylers": {//显示地图
						                              "color": "#999999",
						                              "weight": "1.1",
						                              "visibility": "off"
						                    }
						                },
						                {
						                    "featureType": "label",
						                    "elementType": "labels.text.stroke",
						                    "stylers": {
						                              "color": "#060f1a",
						                              "weight": "0.1"
						                    }
						                },
						                {"featureType": "poi",
						                    "elementType": "all",
						                    "stylers": {"visibility": "off"}
						                },
						                {//国道
						                    "featureType": "highway",
						                    "elementType": "all",
						                    "stylers": {
						                        "color": "#262e34",
						                        "weight": "0.1"
						                    }
						                },
						                {//铁路
					                    "featureType": "railway",
					                    "elementType": "geometry",
					                    "stylers": {
					                              "visibility": "off"
					                     }
					                    },
					                    {
					                        "featureType": "road",
					                        "elementType": "geometry",
					                        "stylers": {
					                        		  "color": "#262e34",
					                                  "weight": "0.1",
					                                  "visibility": "on"
					                        }
					                    },
						                {"featureType": "road",//街道
						                    "elementType": "labels",       //labels
						                    "stylers": {
						                        "color": "#262e34",
						                        "visibility": "off"
						                    }
						                },
						                {
						                    "featureType": "local",
						                    "elementType": "all",
						                    "stylers": {
						                        "color": "#262e34"
						                    }
						                },
						                 {"featureType": "building",
						                    "elementType": "all",
						                    "stylers": {"color": "#060f1a"}
						                 },
						                 {
						                    "featureType": "manmade",
						                    "elementType": "geometry",
						                    "stylers": { "color": "#060f1a"}
						                },
						                {"featureType": "land",
						                    "elementType": "all",
						                    "stylers": {"color": "#060f1a"}
						                },
						                {"featureType": "water",
						                    "elementType": "all",
						                    "stylers": { "visibility": "off"}
						                },
						                {"featureType": "green",
						                    "elementType": "all",
						                    "stylers": {"color": "#0d1f34"}
						                }
						                 

			              ]
			            }
	            },
	           
			    series: [
			    {
		            name: 'Top 5',
		            type: 'effectScatter',
		            coordinateSystem: 'bmap',
		            effectType:'ripple',
		            symbol:'circle',
		            data:bigData,//[[116.46, 39.92]]
		            symbolSize:function (val) {
		                return val[2]*1.2;
		            },
		            showEffectOn: 'render',
					rippleEffect: {
						brushType: 'fill',
						scale: 3,
						period: 2
					},
		            hoverAnimation: true,
		            label: {
		                normal: {
		                	 formatter: function(param){
					         },
		                    position: 'right',
		                    show: false
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#f4e925',
		                    shadowBlur: 10,
		                    shadowColor: '#333'
		                }
		            },
		            zlevel: 1
		        }
			    ]
			};
	 
	 //alert(jd+"------"+wd);
  		if(lang!='' && lat!=''){
  			option.bmap.center=[lang,lat];
  		}else{
  			option.bmap.center=[jd,wd];
  		}
		option.bmap.zoom=bs;
		/* option.bmap.center=[-0.1929180000,51.5055190000]; */
	  	    /* option.bmap.zoom=11; */
	  	//option.bmap.enableScrollWheelZoom(true);
		myBmapChart.setOption(option,true);
		

		bmap=myBmapChart.getModel().getComponent('bmap').getBMap();
		$('.ec-extension-bmap').css('background-color','transparent');//背景透明
		
		showBigDataIndex = 0;
		startBigDataShown();//
}

//获取热力图

var p_map_geo={};
var p_map_point=[];
var p_map_pointTop=[];
var p_map_pointNews=[];

var bigData = [];

var count = 0;
var isBig=0;
//新闻热点 lixiang 2016-12-19
function smilNewsData(){
	 p_map_geo={};
	 p_map_point = [];
	 p_map_pointNews=[];
//	var ajax_url='news/getNewsHeatPointListInteface';//小框
//	var ajax_url=path + '/getNewsHeatPointListInteface';//小框
//	var ajax_url= path + '/newsbmap/json/NewsHeatPointListInteface.json';//小框
	var ajax_url= path + '/bmap/getTopicListIntefaceData';//小框
//	alert(ajax_url);
	var count=300;
	/*if(fg=='1' && '1'==fg_1){
		count=300;
	}
	if(fg=='0' && '0'==fg_1){
		count=300;
	}
	if(fg=='1' && '0'==fg_1){
		count=300;
	}
	vresult =count-preCount;*/
	var ajax_data={
		 	'beginDate':start_datetime,
		 	'endDate':end_datetime,
//		 	'countrychinaname':country_class,
		 	'countryCode':countryCode,//国家code
//		 	'classify':classify,
		 	'provinceCode':provinceCode,//省份code
		 	'cityCode':cityCode,//城市code
		 	'mediaType':'news',//新闻热点
		 	'categoryId' : categoryId,//舆情分类
		 	'pageNo':1,
		 	'pageSize':count,
		 	'fg':fg,
		 	'gj':gj,
		 	'cs':cs
		 };
	 		//热点 地图数据
			$.post(ajax_url,ajax_data,function(data){
//	 	    var result=JSON.parse(data);
			var result = eval(data.data.resultList);
	 	    $('.div0 .ul1').empty();
	 	    $.each(result,function(i,o){
	 	    	 if(o.titleZh && o.titleZh!='' && o.latitude && o.latitude!='' && o.longitude && o.longitude!=''){
	 	    	    p_map_geo[o.titleZh]=[];
	 	    	    p_map_geo[o.titleZh].push(o.longitude);
	 	    	    p_map_geo[o.titleZh].push(o.latitude);

	 	    	    var url = "";
	    		   /* if(o.uuid!=null && o.globaleventId!=null && o.id!="" && o.globaleventId!=""){
		 	    	    url = 'news/detail/info?globaleventid='+o.globaleventId;
	    		    }*/
	 	    	    if(o.uuid !=null && o.uuid !=""){
	 	    	    	url = path + '/news/detail/'+o.uuid;
	 	    	    }
	 	    	    var data_list={
	 		 	    	 	 'name': valid(o.titleZh),
	 		 	    	     'value':6, //o.avgtone_num<30?o.avgtone_num:14,//颜色显示
	 		 	    	 	 'geoLat': o.latitude,
	 		 	    	 	 'geoLong': o.longitude,
	 		 	    	 	 'eventchinaname': valid(o.titleZh),
//	 		 	    	 	 'eventcode': o.eventcode,
//	 		 	    	 	 'globaleventid':o.globaleventId,
	 		 	    	 	 'globaleventid':o.uuid,
	 		 	    	 	 'sourceurl':valid(o.url),
	 		 	    	 	 'countryengname': valid(o.titleZh),
//	 		 	    	 	 'avgtone_num':valid(o.avgtoneNum),
	 		 	    	 	 'newsdateview':valid(o.pubdate),
//	 		 	    	 	 'heatnum':valid(fmoney(10,2)),
	 		 	    	 	 'lat':o.latitude,
	 		 	    	 	 'lng':o.longitude,
//	 		 	    	 	 'source':valid(o.source),
	 		 	    	 	 'chineseTopic':valid(o.titleZh),
//	 		 	    	 	 'chineseKeywords':valid(o.chineseKeyWords),
	 		 	    	 	 'topicId':o.categoryId,
	 		 	    	 	 'countrychinaname':valid(o.countryNameZh),//countrychinaname中文国家
	 		 	    	 	 'id':o.uuid,
	 		 	    	 	 'url':url,
	 		 	    	 	 'type':"0",
	 		 	    	 	 'city':o.districtNameZh,//中文城市
	 		 	    	 	 'cityEnglish':o.districtNameEn,//英文城市
	 		 	    	 	 'topicChinese':valid(o.titleZh),//中文主题
	 		 	    	 	 'topicEnglish':valid(o.titleEn),//英文主题
//	 		 	    	 	 'classifyChinese':valid(o.classify),//中文分类
//	 		 	    	 	 'classifyEnglish':valid(o.classifyEnglish),//英文分类
	 		 	    	 	 'countryNameEn':valid(o.countryNameEn),//英文国家
	 		 	    	 	 'summaryChinese':valid(o.abstractZh)//中文摘要
	 		 	     }
	 	    	   //console.log("data_list-----小框----",data_list);
	 		 	     p_map_point.push(data_list);
	 	    	     p_map_pointNews.push(data_list);
	 	    	 }

	 	    });
	 	    echart1();
	 	});
}
function smilEventData(){
	 p_map_geo={};
	 p_map_point = [];
	 p_map_pointTop=[];
//	var ajax_url='news/getNewsHeatPointListInteface';//小框
//	var ajax_url=path + '/getNewsHeatPointListInteface';//小框
//	var ajax_url= path + '/newsbmap/json/NewsHeatPointListInteface.json';//小框
//	var ajax_url= path + '/bmap/getTopicListIntefaceData';//小框
	var ajax_url=path + '/emergency/queryEmergencyPage';
	//alert(ajax_url);
	var count=300;
	/*if(fg=='1' && '1'==fg_1){
		count=300;
	}
	if(fg=='0' && '0'==fg_1){
		count=300;
	}
	if(fg=='1' && '0'==fg_1){
		count=300;
	}
	vresult =count-preCount;*/
	var ajax_data={
		 	'beginDate':start_datetime,
		 	'endDate':end_datetime,
//		 	'countrychinaname':country_class,
		 	'countryCode':countryCode,
//		 	'classify':classify,
//		 	'type':type,
		 	'provinceCode':provinceCode,//省份code
		 	'cityCode':cityCode,//城市code
//		 	'mediaType':'news',//新闻热点
		 	'type' : categoryId,//舆情分类
		 	'pageNo':'1',
		 	'pageSize':count,
		 	'fg':fg,
		 	'gj':gj,
		 	'cs':cs
		 };
	 		//热点 地图数据
			$.post(ajax_url,ajax_data,function(data){
//	 	    var result=JSON.parse(data);
			var result = eval(data.data.result);
	 	    $('.div0 .ul1').empty();
	 	    $.each(result,function(i,o){
	 	    	 if(o.zhTitle && o.zhTitle!='' && o.latitude && o.latitude!='' && o.longitude && o.longitude!=''){
	 	    	    p_map_geo[o.zhTitle]=[];
	 	    	    p_map_geo[o.zhTitle].push(o.longitude);
	 	    	    p_map_geo[o.zhTitle].push(o.latitude);

	 	    	    var url = "";
	    		   /* if(o.uuid!=null && o.globaleventId!=null && o.id!="" && o.globaleventId!=""){
		 	    	    url = 'news/detail/info?globaleventid='+o.globaleventId;
	    		    }*/
	 	    	    if(o.id !=null && o.id !=""){
	 	    	    	//url = path + '/news/detail/'+o.id;//新闻详细地址
	 	    	    	  url = path + '/event/detail/'+o.srcId;//事件详细地址
	 	    	    }
	 	    	    var data_list={
	 		 	    	 	 'name': valid(o.zhTitle),
	 		 	    	   //  'value':o.avgtoneNum, //o.avgtone_num<30?o.avgtone_num:14,
	 		 	    	 	 'value':6,
	 		 	    	 	 'geoLat': o.latitude,
	 		 	    	 	 'geoLong': o.longitude,
	 		 	    	 	 'eventchinaname': valid(o.zhTitle),
//	 		 	    	 	 'eventcode': o.eventcode,
//	 		 	    	 	 'globaleventid':o.globaleventId,
	 		 	    	 	 'globaleventid':o.id,
//	 		 	    	 	 'sourceurl':valid(o.url),
	 		 	    	 	 'countryengname': valid(o.zhTitle),
//	 		 	    	 	 'avgtone_num':valid(o.avgtoneNum),
	 		 	    	 	 'newsdateview':valid(o.dayTime),
//	 		 	    	 	 'heatnum':valid(fmoney(o.heatNum,2)),
	 		 	    	 	 'heatnum':o.heatValue,
	 		 	    	 	 'lat':o.latitude,
	 		 	    	 	 'lng':o.longitude,
//	 		 	    	 	 'source':valid(o.source),
	 		 	    	 	 'chineseTopic':valid(o.zhTitle),
//	 		 	    	 	 'chineseKeywords':valid(o.chineseKeyWords),
//	 		 	    	 	 'topicId':o.categoryId,
	 		 	    	 	 'countrychinaname':valid(o.zhCountry),//countrychinaname中文国家
	 		 	    	 	 'id':o.id,
	 		 	    	 	 'url':url,
	 		 	    	 	 'type':"1",//事件
	 		 	    	 	 'city':o.zhCity,//中文城市
	 		 	    	 	 'cityEnglish':o.enCity,//英文城市
	 		 	    	 	 'topicChinese':valid(o.zhTitle),//中文主题
	 		 	    	 	 'topicEnglish':valid(o.enTitle),//英文主题
//	 		 	    	 	 'classifyChinese':valid(o.classify),//中文分类
//	 		 	    	 	 'classifyEnglish':valid(o.classifyEnglish),//英文分类
	 		 	    	 	 'countryNameEn':valid(o.enCountry),//英文国家
	 		 	    	 	 'summaryChinese':valid(o.zhCountry)//中文摘要
	 		 	     }
	 	    	   //console.log("data_list-----小框----",data_list);
	 		 	     p_map_point.push(data_list);
	 	    	   p_map_pointTop.push(data_list);
	 	    	 }

	 	    });
	 	    echart1();
	 	});
}

//采用echarts2(正式使用)
function echart1(){
	$(".echart_tip").remove();
		stopNewsShown();
	  require.config({
		      paths:{
		         echarts: './js/news/echarts-2.2.7/build/dist'
		      }
	  });
	  require(['echarts','echarts/chart/map'],
	  function(ec){
	        myChart  = ec.init(document.getElementById('echates'));
	        var option = {
				    //backgroundColor: 'rgba(0,0,0,0)',
				    //color: ['gold','aqua','lime'],
				    title : {
				    	show:false,
				    	text: '',
				    	x:'left',
				    	y:'top',
				    	textStyle:{
				    		fontFamily: '微软雅黑',
							fontSize: 20,
							fontStyle: 'normal',
							fontWeight: 'normal',
				    		color:'#ffffff'
				    	}
				    },
				    calculable : false,
				    tooltip : {
				    	show:true,
				    	showContent:true,
				    	enterable:true,
				        trigger: 'item',
//				        showDelay:100,
 				        hideDelay:300,
				        position: function(p){
				            return [p[0]-130,p[1]-90];
				        },
				        padding:[0,0,0,0],
				        width:207,
				        height:110,
				        //backgroundColor: 'rgba(13,43,67,0.7)',
				        //borderColor:'rgba(31,120,214,1)',
				        formatter: function(param){
							if(param.seriesName!=''){
								var news = param.data;

							 	$elList=[];
								$echartTips.empty();

								stopNewsShown();

								var $el = addNewsElem(news);

								return '';

				        	 }else{
								return '';
				        	 }
						},
				        textStyle:{
				        	color:'#ffffff'
				        }
				    },
				    legend: {
				    	show: false,
				        orient:  'vertical' ,
				        x:'left',
				        y:530,
				        data:['zy_world','zy_hotpoint'],
				        selectedMode: 'single',
				        textStyle : {color: '#fff'}
				    },
				    dataRange: {
				    	show:false,
				        orient:'vertical',
				        x:'right',
				        y:'bottom',
				        min : 0,
				        max : 10,
				        calculable : false,
				        selectedMode:false,
				        itemWidth: 10,
				        itemHeight:14,
				        padding:10,
				        color: ['#d71345','#ffd400','#45b97c','#145b7d'],
				        textStyle:{
				             color:'#fff'
				        }
				    },
				    series : [
				        {
				            name: 'zy_world',
				            type: 'map',
//				            mapType: 'world',
				            mapType: 'china',
				            roam: false,
				            hoverable: false,//控制是否显示国家
				            mapLocation:{
				            	x: "center",
				            	y: "center"
				            },
				            itemStyle:{
				                normal:{
				                	color:'#050c16',
				                    borderColor:'#050c16',
				                    borderWidth:1,
				                    areaStyle:{
				                        color: '#050c16'
				                    },
				                    label:{
				                    	show:false,
				                    	textStyle:{
				                    		color:'#050c16'//,
				                    		//fontSize:0
				                    	}

				                    }
				                },
				                emphasis:{
				                	areaStyle:{
				                        //color: '#02899f'
				                    },
				                	label:true
				                }
				            },
				            data:[],
				            markLine : {
				                smooth:true,
				                symbol: ['none', 'circle'],
				                symbolSize : 1,
				                itemStyle : {
				                    normal: {
				                        color:'#fff',
				                        borderWidth:1,
				                        borderColor:'#677fa0'
				                    },
				                    emphasis:{
				                	    label:false
				                    }
				                },
				                data : []
				            },
				            geoCoord: p_map_geo,
				            nameMap:{
				                'Afghanistan':'阿富汗',
				                'Angola':'安哥拉',
				                'Albania':'阿尔巴尼亚',
				                'United Arab Emirates':'阿联酋',
				                'Argentina':'阿根廷',
				                'Armenia':'亚美尼亚',
				                'French Southern and Antarctic Lands':'法属南半球和南极领地',
				                'Australia':'澳大利亚',
				                'Austria':'奥地利',
				                'Azerbaijan':'阿塞拜疆',
				                'Burundi':'布隆迪',
				                'Belgium':'比利时',
				                'Benin':'贝宁',
				                'Burkina Faso':'布基纳法索',
				                'Bangladesh':'孟加拉国',
				                'Bulgaria':'保加利亚',
				                'The Bahamas':'巴哈马',
				                'Bosnia and Herzegovina':'波斯尼亚和黑塞哥维那',
				                'Belarus':'白俄罗斯',
				                'Belize':'伯利兹',
				                'Bermuda':'百慕大',
				                'Bolivia':'玻利维亚',
				                'Brazil':'巴西',
				                'Brunei':'文莱',
				                'Bhutan':'不丹',
				                'Botswana':'博茨瓦纳',
				                'Central African Republic':'中非共和国',
				                'Canada':'加拿大',
				                'Switzerland':'瑞士',
				                'Chile':'智利',
				                'China':'中国',
				                'Ivory Coast':'象牙海岸',
				                'Cameroon':'喀麦隆',
				                'Democratic Republic of the Congo':'刚果民主共和国',
				                'Republic of the Congo':'刚果共和国',
				                'Colombia':'哥伦比亚',
				                'Costa Rica':'哥斯达黎加',
				                'Cuba':'古巴',
				                'Northern Cyprus':'北塞浦路斯',
				                'Cyprus':'塞浦路斯',
				                'Czech Republic':'捷克共和国',
				                'Germany':'德国',
				                'Djibouti':'吉布提',
				                'Denmark':'丹麦',
				                'Dominican Republic':'多明尼加共和国',
				                'Algeria':'阿尔及利亚',
				                'Ecuador':'厄瓜多尔',
				                'Egypt':'埃及',
				                'Eritrea':'厄立特里亚',
				                'Spain':'西班牙',
				                'Estonia':'爱沙尼亚',
				                'Ethiopia':'埃塞俄比亚',
				                'Finland':'芬兰',
				                'Fiji':'斐',
				                'Falkland Islands':'福克兰群岛',
				                'France':'法国',
				                'Gabon':'加蓬',
				                'United Kingdom':'英国',
				                'Georgia':'格鲁吉亚',
				                'Ghana':'加纳',
				                'Guinea':'几内亚',
				                'Gambia':'冈比亚',
				                'Guinea Bissau':'几内亚比绍',
				                'Equatorial Guinea':'赤道几内亚',
				                'Greece':'希腊',
				                'Greenland':'格陵兰',
				                'Guatemala':'危地马拉',
				                'French Guiana':'法属圭亚那',
				                'Guyana':'圭亚那',
				                'Honduras':'洪都拉斯',
				                'Croatia':'克罗地亚',
				                'Haiti':'海地',
				                'Hungary':'匈牙利',
				                'Indonesia':'印尼',
				                'India':'印度',
				                'Ireland':'爱尔兰',
				                'Iran':'伊朗',
				                'Iraq':'伊拉克',
				                'Iceland':'冰岛',
				                'Israel':'以色列',
				                'Italy':'意大利',
				                'Jamaica':'牙买加',
				                'Jordan':'约旦',
				                'Japan':'日本',
				                'Kazakhstan':'哈萨克斯坦',
				                'Kenya':'肯尼亚',
				                'Kyrgyzstan':'吉尔吉斯斯坦',
				                'Cambodia':'柬埔寨',
				                'South Korea':'韩国',
				                'Kosovo':'科索沃',
				                'Kuwait':'科威特',
				                'Laos':'老挝',
				                'Lebanon':'黎巴嫩',
				                'Liberia':'利比里亚',
				                'Libya':'利比亚',
				                'Sri Lanka':'斯里兰卡',
				                'Lesotho':'莱索托',
				                'Lithuania':'立陶宛',
				                'Luxembourg':'卢森堡',
				                'Latvia':'拉脱维亚',
				                'Morocco':'摩洛哥',
				                'Moldova':'摩尔多瓦',
				                'Madagascar':'马达加斯加',
				                'Mexico':'墨西哥',
				                'Macedonia':'马其顿',
				                'Mali':'马里',
				                'Myanmar':'缅甸',
				                'Montenegro':'黑山',
				                'Mongolia':'蒙古',
				                'Mozambique':'莫桑比克',
				                'Mauritania':'毛里塔尼亚',
				                'Malawi':'马拉维',
				                'Malaysia':'马来西亚',
				                'Namibia':'纳米比亚',
				                'New Caledonia':'新喀里多尼亚',
				                'Niger':'尼日尔',
				                'Nigeria':'尼日利亚',
				                'Nicaragua':'尼加拉瓜',
				                'Netherlands':'荷兰',
				                'Norway':'挪威',
				                'Nepal':'尼泊尔',
				                'New Zealand':'新西兰',
				                'Oman':'阿曼',
				                'Pakistan':'巴基斯坦',
				                'Panama':'巴拿马',
				                'Peru':'秘鲁',
				                'Philippines':'菲律宾',
				                'Papua New Guinea':'巴布亚新几内亚',
				                'Poland':'波兰',
				                'Puerto Rico':'波多黎各',
				                'North Korea':'北朝鲜',
				                'Portugal':'葡萄牙',
				                'Paraguay':'巴拉圭',
				                'Qatar':'卡塔尔',
				                'Romania':'罗马尼亚',
				                'Russia':'俄罗斯',
				                'Rwanda':'卢旺达',
				                'Western Sahara':'西撒哈拉',
				                'Saudi Arabia':'沙特阿拉伯',
				                'Sudan':'苏丹',
				                'South Sudan':'南苏丹',
				                'Senegal':'塞内加尔',
				                'Solomon Islands':'所罗门群岛',
				                'Sierra Leone':'塞拉利昂',
				                'El Salvador':'萨尔瓦多',
				                'Somaliland':'索马里兰',
				                'Somalia':'索马里',
				                'Republic of Serbia':'塞尔维亚共和国',
				                'Suriname':'苏里南',
				                'Slovakia':'斯洛伐克',
				                'Slovenia':'斯洛文尼亚',
				                'Sweden':'瑞典',
				                'Swaziland':'斯威士兰',
				                'Syria':'叙利亚',
				                'Chad':'乍得',
				                'Togo':'多哥',
				                'Thailand':'泰国',
				                'Tajikistan':'塔吉克斯坦',
				                'Turkmenistan':'土库曼斯坦',
				                'East Timor':'东帝汶',
				                'Trinidad and Tobago':'特里尼达和多巴哥',
				                'Tunisia':'突尼斯',
				                'Turkey':'土耳其',
				                'United Republic of Tanzania':'坦桑尼亚联合共和国',
				                'Uganda':'乌干达',
				                'Ukraine':'乌克兰',
				                'Uruguay':'乌拉圭',
				                'United States of America':'美国',
				                'Uzbekistan':'乌兹别克斯坦',
				                'Venezuela':'委内瑞拉',
				                'Vietnam':'越南',
				                'Vanuatu':'瓦努阿图',
				                'West Bank':'西岸',
				                'Yemen':'也门',
				                'South Africa':'南非',
				                'Zambia':'赞比亚',
				                'Zimbabwe':'津巴布韦'
				            }
				        }, //添加背景线
				        {
				            name: 'zy_hotpoint',
				            type: 'map',
//				            mapType: 'world',
				            mapType: 'china',
				            itemStyle:{
				            	normal:{label:{show:false}},
				            	emphasis:{label:{show:true}}
				            },
				            data:[],
				            markLine : {
				                smooth:true,
				                effect : {
				                    show: false,
				                    scaleSize: 2,
				                    period: 40,
				                    shadowBlur: 10,
				                    shadowColor: '#fff'
				                },
				                itemStyle : {
				                    normal: {
				                        borderWidth:0,
				                         lineStyle: {
				                            type: 'solid',
				                            shadowBlur: 10
				                        }
				                    }
				                },
				                data : []//data_1995
				            },
				            markPoint : {
				                symbol:'emptyCircle',
				                symbolSize : function(v){
				                    return v/1.2
				                },
				                effect : {
				                    show: true,
				                    type:'scale',//圈圈
				                    loop:true,
				                    shadowBlur : 0
				                },
				                itemStyle:{
					                normal:{label:{ show:false}},
					                emphasis:{label:{show:false}}
					            },
				                data : p_map_point
				            }
				        }//添加资讯
				    ]
			};

			//console.log('00000=',p_map_geo,p_map_point)
			//console.log('aaaa=',data_geo,data_1995t)
	        /*window.onresize = function () {
	        	myChart.resize(); //使第一个图表适应
	        	myChart_pieMain.resize(); // 使第二个图表适应
	        }*/

		  myChart.setOption(option,true);

		 /* myChart.on('mouseout', function (params) {
			  fadeOutElList();

			  startNewsShown();
		  });*/

		  showNewsIndex = 0;
		  showTopicIndex = 0;
		  startNewsShown();
	       /*
	        //触发鼠标事件
	        /*var ecConfig = require('echarts/config');
            myChart.on(ecConfig.EVENT.HOVER, function (param){
                  var selected = param;

		          //write your code here
		          //console.log('selected=',selected);//打印参数
		          //hoverin();调用自定义函数
		          //document.getElementById(‘wrong-message‘).innerHTML = str;
            });*/
	  });
}


/**
 * 生成新闻元素
 * @param currentPoint
 * @returns {*|jQuery|HTMLElement}
 */
function getNewsHtml(currentPoint){
	var name = currentPoint.chineseTopic || currentPoint.name;
	var city=currentPoint.countrychinaname || currentPoint.city;
	if($("#language").val()=="en"){
		if(currentPoint.topicEnglish!=''){
			name=currentPoint.topicEnglish;
		}
	    if(isNull(currentPoint.countryNameEn)!=''){
			city=currentPoint.countryNameEn;
		}else{
			city=currentPoint.cityEnglish;
			if(isNull(currentPoint.cityEnglish)==''){
				city="";
			}
		}
	}else {//中文
		if(currentPoint.topicChinese!=''){
			name=currentPoint.topicChinese;
		}
		if(isNull(currentPoint.countrychinaname)!=''){
			city=currentPoint.countrychinaname;
		}else{
			city=currentPoint.city;
		}
	}
	//alert(123);
	
// '+'【'+$("#nhn3").val()+'】'+'
	return $('<div class="echart_tip"><div class="dialog_title echart_content"><a title="'+currentPoint.name+'"  href="'+currentPoint.url+'" target="_blank" ><span style="color:#c82139;font-size:14px;"></span>'+valid(name)+'</a>'+valid(city)  +'&nbsp;&nbsp;'+strDate(currentPoint.newsdateview)+'</div>' +
	'<div class="echart_tip_arrow"><div class="echart_tip_line"></div><div class="echart_tip_head"></div></div></div>');
}

/**
 * 生成事件元素
 * @param currentPoint
 * @returns {*|jQuery|HTMLElement}
 */
function getTopicHtml(currentPoint){
	var city=currentPoint.city;
	var classify=currentPoint.classifyChinese;
	if(classify=="" || classify==null || classify==undefined){
		classify="";
	}
	var countrychinaname=currentPoint.countrychinaname;
	
	var name = currentPoint.chineseTopic || currentPoint.name;
	if($("#language").val()=="en"){
		if(currentPoint.topicEnglish!=''){
			name=currentPoint.topicEnglish;
		}
		if(isNull(currentPoint.cityEnglish)!=''){
			city=currentPoint.cityEnglish;
		}
		
		if(isNull(currentPoint.countryNameEn) !=""){
			countrychinaname=currentPoint.countryNameEn;//英文国家
		}
	    if(countrychinaname!=city){
	    	if(isNull(currentPoint.cityEnglish)!=''){
	    		city="."+currentPoint.cityEnglish;
	    	}else{
	    		city="";
	    	}
	    }else{
	    	city="";
	    }
	    
	    if(isNull(currentPoint.classifyEnglish) !=""){
	    	classify=currentPoint.classifyEnglish;//英文国家
		}
	}else {
		if(currentPoint.topicChinese!=''){
			name=currentPoint.topicChinese;
		}
		if(currentPoint.city!=''){
			city="."+currentPoint.city;
		}
		if(isNull(currentPoint.countrychinaname) !=""){
			countrychinaname=currentPoint.countrychinaname;//英文国家
		}
	    if(countrychinaname==currentPoint.city && isNull(currentPoint.city)!=''){
	    	city="";
	    }
	    if(isNull(currentPoint.classifyChinese) !=""){
	    	classify=currentPoint.classifyChinese;//英文国家
		}
		
	}
	var heatnum = currentPoint.heatnum;
//	alert(heatnum);
//	if(currentPoint.heatnum==null || currentPoint.heatnum=='' || currentPoint.heatnum.indexOf('null')!=-1){
		if(currentPoint.heatnum==null || currentPoint.heatnum=='' ){
		heatnum = 0;
	}
	//console.log("-----countrychinaname-----",countrychinaname,city);
// '+ '【'+$("#nhn4").val()+'】'+'
	return $('<div class="echart_tip"><div class="dialog_label echart_content">'+
/*事件*/	'<a title="'+valid(name)+'" href="'+currentPoint.url+'" target="_blank" >'+'<span style="color:#c82139;font-size:18px;"></span>'+valid(name)+'</a>' +
		'<div style="width:275px;color:#98bad8;font-size:12px;padding-top:10px;">'+classify+ '&nbsp;&nbsp;'+valid(countrychinaname)+''+valid(city)+'&nbsp;&nbsp;'+strDate(currentPoint.newsdateview)+'</div>'+
		'<div style="width:275px;color:#ffffff;font-size:20px;font-weight:bold;padding-top:10px;">'+
			'<ul><li style="float:left;"><a href="'+currentPoint.url+'" target="_blank"><img src="images/news/tjtbg_1.png" width="100%" height="100%" /></a></li>'+
			'<li style="float:left;font-weight:bold;font-size:20px;color:#d0e7ff;font-family:arial;">&nbsp;&nbsp;'+heatnum+'</li>'+
			'<li style="float:right;"><a href="'+currentPoint.url+'" target="_blank"><img src="images/news/arrow.png" width="23" height="13"/></a></li>' +
			'</ul>' +
		'</div>'+
		'</div>'+
		'<div class="echart_tip_arrow"><div class="echart_tip_line"></div><div class="echart_tip_head"></div></div></div>');
}
/**
 * 初始化资讯及新闻轮循
 */
function stopNewsShown(){
	clearInterval(timeId);
	timeId = null;
}

/**
 * 初始化资讯及新闻轮循
 */
function startNewsShown(){
	if(timeId==null){
		timeId = setInterval(showNews,TIP_SETTIMEOUT_TIME);
	}
}
/***
 * 格式化时间
 */
var formatDate = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};
function valid(v){
	if(v=='' || v==null || v==undefined || v=="undefined" || v==NaN || v=="NaN"|| v=="null" ||v==".null" ){
		return "";
	}else{
		return v;
	}
}
/**
 * 每格一定时间显示资讯及新闻
 */
function showNews(){
	if(document.hidden){
		return;
	}

	$elList = [];

	showNewsIndex = addEl(p_map_pointNews,showNewsIndex);
	showTopicIndex = addEl(p_map_pointTop,showTopicIndex);

	fadeOutElList();


	function addEl(list,index){
		if(list.length==0){
			return;
		}

		for(var num=0;num<SHOW_NEWS_NUM;num++){
			var $el = addNewsElem(list[index]);
			//console.log(index,num);
			if($el){
				if((++index)>=list.length){
					return 0;
				}
			}else{
				return index;
			}
		}

		return index;
	}
}

/**
 * 每格一定时间显示资讯及新闻
 */
function showBigData(){
	if(document.hidden){
		return;
	}

	$elList = [];

	showBigDataIndex = addEl(bigData,showBigDataIndex);

	fadeOutElList();

	function addEl(list,index){
		if(list.length==0){
			return;
		}

		for(var num=0;num<SHOW_NEWS_NUM;num++){
			var $el = addNewsElem(list[index]);

			if($el){
				if((++index)>=list.length){
					return 0;
				}
			}else{
				return index;
			}
		}

		return index;
	}
}
/**
 * 添加提示元素，若与其他提示元素重叠，则返回false
 * @param news对象
 * @returns {boolean}
 */
function addNewsElem(news){
	var $el;
//alert(news.type);
	if(news.type=='0'){//小框
//		alert("news");
		$el=getNewsHtml(news);
	}else{
//		alert("event");
		$el=getTopicHtml(news);
	}

	var divideLeft = $echart.width()/ 2;
	var	divideTop = $echart.height()/2;
	
	var left,top;
	if(ympd=='0'){//全球热点
		var arr = [news.geoLong,news.geoLat];
//		var xypoint = myChart.chart.map.getPosByGeo("world",arr); //坐标
		var xypoint = myChart.chart.map.getPosByGeo("china",arr); //坐标
		left = xypoint[0];
		top=xypoint[1];
	}else{
		 var xypoint = bmap.pointToPixel({lng:news.geoLong,lat:news.geoLat});  //坐标
		 left = xypoint.x;
		 top=xypoint.y;
		 //console.log(top);
	}
	
	  $echartTips.append($el);
	

	$el.css({left:left,top:top});

	if(left>divideLeft){
		$el.addClass('left');
	}else{
		$el.addClass('right');
	}

	if(top>divideTop){
		$el.addClass('top');
	}else{
		$el.addClass('bottom');
	}

	var $content = $el.children('.echart_content'),
		contentOffset = $content.offset();

	var offset = {left:contentOffset.left,top:contentOffset.top,height:$content.outerHeight(),width:$content.outerWidth()};

	if(isElOverlap(offset)){
		$el.remove();
	}else{
		$el.data('offset',offset);

		$elList.push($el);

		if(!isSupportWebkitLineClamp){
			$el.find('a').dotdotdot({
				wrap: 'letter',
				watch: "window"
			});
		}

		$el.hover(function(){
			fadeInElList([$el]);

			stopNewsShown();

		},function(){
			fadeOutElList();

			if(ympd=='0'){//全球热点
				startNewsShown();
			}else{
				startBigDataShown();
			}
		});

		return $el;
	}

	return null;
}
/**
 * 渐隐 elList
 */
function fadeOutElList(){
	$.each($elList,function(i,$el){
		$el.removeClass('fade_in').addClass('fade_out');
		 listenAnimationEnd($el,function(){
			 $el.remove();
		 });
	});

	$elList = [];
}

/**
 * 渐入 elList
 */
function fadeInElList($list){
	$.each($list,function(i,$el){
		$el.off('transitionend');
		$el.removeClass('fade_out').addClass('fade_in');
	});

	$elList = $list;
}

/**
 * 每格一定时间显示资讯及新闻
 */
function showNews(){
	if(document.hidden){
		return;
	}

	$elList = [];

	showNewsIndex = addEl(p_map_pointNews,showNewsIndex);
	showTopicIndex = addEl(p_map_pointTop,showTopicIndex);

	fadeOutElList();


	function addEl(list,index){
		if(list.length==0){
			return;
		}

		for(var num=0;num<SHOW_NEWS_NUM;num++){
			var $el = addNewsElem(list[index]);
			//console.log(index,num);
			if($el){
				if((++index)>=list.length){
					return 0;
				}
			}else{
				return index;
			}
		}

		return index;
	}
}

/***
 * 判断是否为空
 * @param v
 * @returns
 */
function isNull(v){
	if(""==v || null ==v || "null" ==v || undefined ==v  || 'undefined'==v){
		return "";
	}else{
		return v;
	}
}

//截取日期
function strDate(s, n) {
   var str=s;
   if(s!=null || s!=''){
	   if(s.length>16){
		   str=s.substring(0,16);
	   }
   }else{
	   str="";
   }
   return str;
}
/**
 * 是否支持css3的webkitLineClamp
 * @type {boolean}
 */
var isSupportWebkitLineClamp = document.documentElement.style.hasOwnProperty('webkitLineClamp');

/**
 * 判断offset是否与$elList的元素重叠
 * @param offset
 * @returns {boolean}
 */
function isElOverlap(offset){
	var result = false;
	$.each($elList,function(i,$el){
		if(isOverlap(offset,$el.data('offset'))){
			result=true;
			return false;
		}
	});
	return result;
}


//动画
function listenAnimationEnd($el,fn){
	$el.on('transitionend',function(){
		$el.off('transitionend');
		fn.call();
	})
}

/**
 * 根据2个offset判断是否重叠
 * @param offset1
 * @param offset2
 * @returns {boolean}
 */
function isOverlap(offset1,offset2){
	var isXSplit = (offset2.left>offset1.left)?(offset2.left>(offset1.left+offset1.width)):
		((offset2.left+offset2.width)<offset1.left);

	var isYSplit = (offset2.top>offset1.top)?(offset2.top>(offset1.top+offset1.height)):
		((offset2.top+offset2.height)<offset1.top);
	return !(isXSplit || isYSplit);
}

//获取分类
function go(t,v){
	//classify=v;
	categoryId=v;
//	alert(categoryId);
	if($(t).hasClass('onnx')){
	}else{
		$('.menu').removeClass('onnx');
		$(t).addClass('onnx');
	}
	if(""==v){
		fg="1";//所有
		//隐藏时间轴
		$('.navtbot li div').removeClass('rqxz');
		$('.timeleft').remove();
		$('.timeright').remove();
		var curDate = new Date();
		start_datetime= formatDate(new Date(curDate.getTime() - (30*24*60*60*1000)))+" 00:00:00";  //前一天
		end_datetime= formatDate(new Date(curDate.getTime()))+" 23:59:59";  //后一天

	}else{
		fg="0";//选择分类
	}
	//隐藏国家选择
    guojiaFunc();
    smilNewsData();
    smilEventData();
    //$(".echart_tip").remove();
   /* if(ympd=='0'){//全球热点
    	//隐藏国家选择
    	get_event_point_data();
    }else{
    	getBMapData();
    }*/
  //  get_event_point_data_zixun();//资讯
  //	get_event_point_data_new();//右侧新闻数据
}
/*
 * 收起全球
 */
function shouqiFunc(){
	$('.xzzhou').hide();
    $('.xiala').attr('src','images/news/xiala.png');
    $('.nav_left').removeClass('top');
}
/**
 * 城市点击事件
 * @param mc
 * @param jd
 * @param wd
 * @param gj
 * @param cs
 * @param start_datetime
 * @param end_datetime
 * @param classify
 * @param csCode
 */
function selectCity1(mc,jd, wd, gj, cs, start_datetime, end_datetime, classify,csCode) {
	gj = "中国";
	cs = cs;
	cityCode= csCode;
	start_datetime = start_datetime;
	end_datetime = end_datetime;
	
	
	if ($(".ssk").val() == '') {
        if ($('.xz_bottom_left .xz_chengshi').text() != "城市") {
            $('.nav_left .guojia').html(gj + $('.dian').html() + cs);
        } else {
            $('.nav_left .guojia').html(gj);
        }
    } else {
        $('.xz_bottom_left .xz_chengshi').text($(".ssk").val());
        gj = $('.xz_bottom_left .xz_guojia').text();
        cs = $(".ssk").val();
        $(".dian").show();
        $(".xz_chengshi").show();
        if ($('.xz_bottom_left .xz_guojia').text() != "国家") {
            $('.nav_left .guojia').html(gj + $('.dian').html() + mc);
        } else {
            $('.nav_left .guojia').html($(".ssk").val());
        }
    }
	$('.xzzhou').hide();
    $('.xiala').attr('src', 'images/news/xiala.png');
    $('.nav_left').removeClass('top');
//    ympd = "1";//控制页面是否在新闻大数据页面      还是在百度地图页面
    stopNewsShown();
   // $("#echates").hide();
 	$("#echatesq").show();
 	
 	if(!bmap){
 		//实例化百度地图
 		myBmapChart = echarts.init(document.getElementById('echatesq'));
 	}
    lang = jd;//经度
    lat = wd;//维度
    init();
   
    smilEventData();
    smilNewsData();
}




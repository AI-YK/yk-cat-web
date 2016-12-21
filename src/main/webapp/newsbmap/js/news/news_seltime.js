//新闻的时间轴通用组件
		var begindate='';
		var enddate='';
	
	var cj="";
	var mc="";
	var jd="";
	var wd="";
	var bs="";		//cj==场景    mc==名称  jd==经度  wd==纬度  bs==倍数
    var cs="";
    var gj="";        //cs 城市名字  gj  国家名字
	var pd="";        //pd 国家城市判断
	var ympd="0";    //判断在那个页面里  默认全球热点
	var isData="1";//是否存在国家数据 1 存在，0不存在
	$(function(){
		$(".xz_guojia").hide();
		$(".dian").hide();
		$(".xz_chengshi").hide();
		$('.dzh').bind('mouseleave',function(){
			$('.area_gj').empty();
			$(this).find('.area_top').find('span').removeClass('onny');
		});
		//全球选择鼠标离开
		$(document).on('mouseleave','.xzzhou',function(){
			$('.guojia_xz').removeClass("content");
			$('.chengshi_xz').removeClass("content");
			$('.xzzhou').hide();
			$('.xiala').attr('src','images/news/xiala.png');
			$('.nav_left').removeClass('top');
		})
		//全球 选择国家城市 初始化
		$(".xzzhou .xzgj .gj_sz").addClass("tzbj");
		$(".xzzhou .xz_nr .guojia_xz").addClass("show");
		$(".xzzhou .xz_nr .chengshi_xz").addClass("close");
		
		$(".xzzhou .xzgj .gj_sz").click(function(){
	    	jd=0;wd=0;pd='1';
	    	$('.xz_bottom_left .xz_guojia').text("国家");
	    	$('.xz_bottom_left .xz_chengshi').text("城市");
		    $(".xzzhou .xz_nr .chengshi_xz").removeClass("show").addClass("close");
		    $(".xzzhou .xz_nr .guojia_xz").removeClass("close").addClass("show");
		    $(".xzzhou .xzcs .cs_sz").removeClass("tzbj");
		    $(".xzzhou .xzgj .gj_sz").addClass("tzbj");
		    $(".xzzhou .qq_xz").removeClass("tzbj1");
		    $(".xz_guojia").hide();
			$(".dian").hide();
			$(".xz_chengshi").hide();
			$('.guojia_xz').addClass("content");
			$(".ssk").val("");
		})
        
        $(".xz_nr .guojia_xz dd a").on('click',function(){
        	pd='2';
        	$('.chengshi_xz').addClass("content");
        	$('.guojia_xz').removeClass("content");
        	$('.xz_bottom_left .xz_guojia').text($(this).html());
        	$(".xz_guojia").show();
		    $(".xzzhou .xz_nr .guojia_xz").removeClass("show").addClass("close");
		    $(".xzzhou .xz_nr .chengshi_xz").removeClass("close").addClass("show");
		    $(".xzzhou .xzgj .gj_sz").removeClass("tzbj");
		    $(".xzzhou .xzcs .cs_sz").addClass("tzbj");
		    $(".xzzhou .qq_xz").addClass("tzbj1");
		    $(".ssk").val("");
		    jd=$(this).next().html();
    		wd=$(this).next().next().html();
    		
    		var gjName=$(this).html();
    		if("全球"!=gjName && "Global"!=gjName){
    			initCity(gjName);
    		}
    		//alert(gjName);//----------------------------------------------
    		
        })
        $(document).on('click',".chengshi_a",function(){
        	$('.xz_bottom_left .xz_chengshi').text($(this).html());
    		$(".dian").show();
    		$(".xz_chengshi").show();
        	$(".ssk").val("");
        	jd=$(this).next().html();
    		wd=$(this).next().next().html();
        })
		//时间计算加载数字
		var time=new Date();
		var lastdate=time.getDate();
		var timehtml='';
		function timg(cunt){
			var timestamp=new Date().getTime();
			var datatime1=timestamp-1000*60*60*24*29+1000*60*60*24*cunt;
			var qrdat=new Date(parseInt(datatime1)).getDate();
			if(qrdat==1){
				switch (new Date(parseInt(datatime1)).getMonth()+1){
				
		 		case 1: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Jan</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 2: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Feb</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 3: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Mar</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 4: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Apr</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 5: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">May</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 6: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Jun</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 7: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Jul</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 8: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Aug</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 9: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Sep</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 10: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Oct</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 11: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Nov</a>'+'&nbsp;'+'&nbsp;';break;
		 		case 12: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Dec</a>'+'&nbsp;'+'&nbsp;';break;	
	 		}
			}else{
				if(qrdat<10){
					return '0'+ qrdat;
				}else{
					return qrdat;
				}
			}
			
			
		};
		function dateval(cut){    //添加日期自定义属性
			var timestamp1=new Date().getTime();
			var datatime2=timestamp1-1000*60*60*24*29+1000*60*60*24*cut;
			var  datevalue= new Date(parseInt(datatime2));
			return datevalue.getFullYear()+'-'+(datevalue.getMonth()+1)+'-'+datevalue.getDate();
		};
		function time2(x){         //返回月份
			var timestamp=new Date().getTime();
			var datatime1=timestamp-1000*60*60*24*29+1000*60*60*24*x;
			switch (new Date(parseInt(datatime1)).getMonth()+1){
		 		case 1: return 'Jan';break;
		 		case 2: return 'Feb';break;
		 		case 3: return 'Mar';break;
		 		case 4: return 'Apr';break;
		 		case 5: return 'May';break;
		 		case 6: return 'Jun';break;
		 		case 7: return 'Jul';break;
		 		case 8: return 'Aug';break;
		 		case 9: return 'Sep';break;
		 		case 10: return 'Oct';break;
		 		case 11: return 'Nov';break;
		 		case 12: return 'Dec';break;
	 		}
		};
		
		//添加上月月份
		function timgNew(cunt){
			var timestamp=new Date().getTime();
			var datatime1=timestamp-1000*60*60*24*30+1000*60*60*24*cunt;
			var qrdat=new Date(parseInt(datatime1)).getDate();
			//alert(qrdat);
			if(qrdat==1){
				return '';
			}else{
				switch (new Date(parseInt(datatime1)).getMonth()){
				case 1: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Jan</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 2: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Feb</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 3: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Mar</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 4: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Apr</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 5: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">May</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 6: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Jun</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 7: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Jul</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 8: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Aug</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 9: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Sep</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 10: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Oct</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 11: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Nov</span>'+'&nbsp;'+'&nbsp;';break;
		 		case 12: return '&nbsp;'+'&nbsp;'+'<span style="color:#d0e7ff;">Dec</span>'+'&nbsp;'+'&nbsp;';break;	

				}
			}
		}
			
			
	
		function fun(curr){
			
			switch (curr){
	 		case 1: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Jan</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 2: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Feb</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 3: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Mar</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 4: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Apr</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 5: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">May</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 6: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Jun</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 7: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Jul</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 8: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Aug</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 9: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Sep</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 10: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Oct</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 11: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Nov</a>'+'&nbsp;'+'&nbsp;';break;
	 		case 12: return '&nbsp;'+'&nbsp;'+'<a style="color:#d0e7ff;">Dec</a>'+'&nbsp;'+'&nbsp;';break;
			}
		}

		
		timehtml+='<li class="time1 ts" style="width:3.22%;text-align:center;cursor:default;user-select:none;"><div class="time3" style="user-select:none;cursor:default;">'+timgNew(new Date().getMonth()+1)+'</div></li>';

		for(var i=0;i<30;i++){     //添加时间轴日期
			if(i==30){     //初始化默认选择最近1天
				timehtml+='<li  id="time'+i+'"  data-xh="'+ i +'" data-value="'+ dateval(i) +'" class="time1" style="width:3.22%;text-align:center;"><img id="timeleft" class="timeleft" style="margin-right:3px;vertical-align:middle;" src="images/news/time_left.png"><div value="'+(parseInt(i)+1)+'" class="time rqxz">'+ timg(i) +'</div><img id="timeright" class="timeright" style="margin-left:3px;vertical-align:middle;" src="images/news/time_right.png"></li>'
			}else{
				timehtml+='<li id="time'+i+'"  data-xh="'+ i +'" data-value="'+ dateval(i) +'" class="time1" style="width:3.22%;text-align:center;"><div value="'+(parseInt(i)+1)+'"  class="time">'+ timg(i) +'</div></li>'
			}
		    //$('.navtbot').append(timehtml);
			
		};
		
		$('.navtbot').append(timehtml);
		//初始化获得时间
		begindate=$('.rqxz').parent().attr('data-value');   //开始时间
		enddate=$('.rqxz').parent().attr('data-value');     //结束时间

		
		$('.time').bind('click',function(){     //时间轴单机事件只能选择1天
			$(this).addClass('rqxz');
			$('.timeleft').remove();
			$('.timeright').remove();
			$(this).before('<img id="timeleft" class="timeleft" style="margin-right:3px;vertical-align:middle;" src="images/news/time_left.png">');
			$(this).after('<img id="timeright"  class="timeright" style="margin-left:3px;vertical-align:middle;" src="images/news/time_right.png">')
			$(this).parent().siblings().find('.time').removeClass('rqxz');
			begindate=$(this).parent().attr('data-value');   //开始时间
			enddate=$(this).parent().attr('data-value');     //结束时间
		});
	
		$('.nav_left').bind('click',function(){     //单机国家地区下拉框
			if($('.guojia_xz').hasClass('show')){
				pd='1';
			}else if($('.chengshi_xz').hasClass('show')){
				pd='2';
			}
			
			if($(this).hasClass('top')){
				$(this).removeClass('top');
				$(this).find('.xiala').attr('src','images/news/xiala.png');
				$('.xzzhou').hide();
				$('.guojia_xz').removeClass("content");
				$('.chengshi_xz').removeClass("content");
			}else{
				$(this).addClass('top');
				$(this).find('.xiala').attr('src','images/news/nav_topsh.png');
				$('.xzzhou').show();
				if($('.guojia_xz').hasClass('content')){
					$(".content").mCustomScrollbar({
						autoHideScrollbar:true,
						theme:"light-thin"
					});
					}
			}
		});
	});
	//实例化中国城市
	function initCity(city){
//		 var ajax_url='news/searchCityInteface';
//		 var ajax_url=path + '/newsbmap/json/searchCityInteface.json';
		 var ajax_url=path + '/common/getCity';
		 var ajax_data={
//		 	'countrychinaname':city,
//		 	'region':''
			'parentCode':'100000',
			'classify':'city'
		 };
//		 alert(ajax_url);
		 $.ajax({
				type:'post',
			    url: ajax_url,
			    data:ajax_data,
			    async : false,
			    dataType: "json",
			    success: function(data){
				 	    $('.chengshi_xz .close').remove();                         /*全部*/
				 	    var html='<dd><a href="javascript:;;" class="shousuo">'+$("#ns1").val()+'</a><i class="cs_jd"></i><i class="cs_wd"></i></dd>';
				 	    
				 	    $.each(data.data,function(i,o){
				 	    	html+='<dd><a href="javascript:" class="chengshi_a" arr='+o.busCode+'>'+(($("#language").val()=="en")?(o.nameEn) :( o.name)) +'</a><i class="cs_jd">'+o.geoLong+'</i><i class="cs_wd">'+o.geoLat+'</i></dd>';
				 	    });
//				 	    alert(html);
				 	    $('#city').html(html);
				 	    $(".content").mCustomScrollbar({
							autoHideScrollbar:true,
							theme:"light-thin"
						});
					 	if(html.length==97 || html.length==98){
					 		  layer.alert($("#ns2").val(),{
					 			 title:$("#ns3").val(),
					 			 btn:$("#ns4").val()
					 		  });
					 		  isData="0";//不存在国家
					 	}else{
					 		isData="1";//在国家
					 	}
		        }
		});
		 
		 /***
		 $.post(ajax_url,ajax_data,function(result){
		 	    var result=JSON.parse(result);
		 	    $('.chengshi_xz .close').remove();
		 	    var html='';
		 	    $.each(result.data,function(i,o){
		 	    	html+='<dd><a href="javascript:" class="chengshi_a">'+o.region+'</a><i class="cs_jd">'+o.geo_long+'</i><i class="cs_wd">'+o.geo_lat+'</i></dd>';
		 	    });
		 	   
		 	    $('#city').html(html);
		 	    $(".content").mCustomScrollbar({
					autoHideScrollbar:true,
					theme:"light-thin"
				});
			 	if(html==''){
			 		  layer.alert("搜索的国家不存在!");
			 		  isData="0";//不存在国家
			 		  return false;
			 	}else{
			 		isData="1";//不存在国家
			 		return true
			 	}
		 });**/
	}
	
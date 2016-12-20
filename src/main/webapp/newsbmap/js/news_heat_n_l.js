////////////////////////////////////////////////////////////////////////////////
//切换右侧新闻列表
//获取右侧热点新闻数据  新 误删
function get_event_point_data_new(){
//lixiang 2016-12-16 模拟数据
//	var ajax_url='news/getNewsHeatPointListNewInteface';
//	var ajax_url=path + '/newsbmap/json/NewsHeatPointListNewInteface.json';
//	var ajax_url=path + '/bmap/NewsHeatPointListNewInteface';
	var ajax_url=path + '/bmap/getTopicListIntefaceData';
	
	 var ajax_data={
		'beginDate':start_datetime,
	 	'endDate':end_datetime,
//	 	'countrychinaname':country_class,
	 	'countryCode':countryCode,
//	 	'countryCode':country_class,
	 //	'classify':classify,
	 	'provinceCode':provinceCode,
	 	'cityCode':cityCode,
	 	'mediaType':'news',//社交
	 	'pageNo':1,
	 	'pageSize':5,
	 	'gj':gj,
	 	'cs':cs
	 };
	 //if(flags || fg=='1'){
	//	ajax_data.beginDate="";
	//	ajax_data.endDate="";
	//	flags=false;
	 //}
	 //console.log("------资讯------------",ajax_data);
	 var cnum=1;
	 $.post(ajax_url,ajax_data,function(data){
//	 	    var result=JSON.parse(data);
		 	var result = eval(data.data.resultList);
	 	    $('#newsVal li:not([class])').remove();
	 	    var html='';
	 	    $.each(result,function(i,o){
	 	    	html+='<li>';
	 	    	cnum=i;
	 	    	if(i<3){
	 	    		html+='<i class="hot">'+(i+1)+'</i><!--num-->';
	 	    	}else{
	 	    		html+='<i class="num">'+(i+1)+'</i><!--num-->';
	 	    	}
	 	    	var sftj="";
    			/*if(o.source=='0'){//推荐
    				sftj="<span class='zt'>"+$("#nhnl1").val()+"</span>";
    				
    			}*/
	 	    	var topic=o.srcTitle;//原标题
    			//if(topic!=null && topic.length>20){
    				//topic=o.srcTitle.substring(0,20);
    			//}
    			var summary=isNull(o.srcSummary);//摘要
    			var type=isNull(o.type);//舆情分类
    			var city=isNull(o.city);//城市名称
    			var zhCountry=isNull(o.zhCountry);//国家名称
    			
    			if(summary!=null && summary.length>35){
    				summary=o.srcSummary.substring(0,35)+"...";
    			}
    			if($("#language").val()=="en"){
    				if(isNull(o.topicEnglish)!=''){
    					topic=o.topicEnglish;
    				}
    				if(isNull(o.summaryEnglish)!='' && o.summaryEnglish.length>35 ){
    					summary=o.summaryEnglish.substring(0,35)+"...";
    				}
    				if(isNull(o.classifyEnglish)!=''){
    					type=o.classifyEnglish;
    				}
    				if(isNull(o.countryNameEnglish)!=''){
    					zhCountryName=o.countryNameEnglish;
    				}
    				if(isNull(o.cityEnglish)!=''){
    					city=o.cityEnglish;
    				}
    				if(zhCountryName==city){
    					city="";
    				}else{
    					city="."+city;
    				}
    				//console.log("----------",type,city,zhCountryName,zhCountryName==city);
    			}else{
				 	if(isNull(o.city)!=''){
					 city="."+o.city;
	 		        }
	 		        
			        if(o.zhCountryName==o.city && isNull(o.city)!=''){
			        	city="";
			        }
			        if(isNull(o.topicChinese)!=''){//中文标题
    					topic=o.topicChinese;
    				}
			        if(isNull(o.summaryChinese)!='' && o.summaryChinese.length>35){//中文摘要
			        	summary=o.summaryChinese.substring(0,35)+"...";
			        }
			        if(isNull(o.type)!=''){
			        	type=o.type;
    				}
			        if(isNull(o.topicChinese)!=''){//中文标题
    					topic=o.topicChinese;
    				}
			        if(isNull(o.zhCountryName)!=''){
			        	zhCountryName=o.zhCountryName;
    				}
    			}
    			var hf="javascript:;;";//javascript:layer.alert('暂无生成专题');
    			if(o.srcId!='' && o.srcId!=null){//新闻ID
    				hf="news/detail/info?globaleventid="+o.srcId;
    			}
    			var imgdis="none";//图片地址（没有）
    			if(o.imgurl!='无'  && "null"!=o.imgurl && null!=o.imgurl  && ""!=o.imgurl){
    				imgszx=o.imgurl;
    				imgdis="inline";
    			}
    			
 		       
	 	    	html+='<dl>';
	 	    	html+='	<dt><a href="'+hf+'" target="_blank">'+topic+"&nbsp;&nbsp;"+'</a>'+sftj+'</dt>';
	 	    	html+='<dd style="font-size:12px;color:#777;margin-bottom:12px;height:14px;">';
	 	    	html+='<p style="float:left;">'+o.dayTime+'</p>';
	 	    	html+='<p style="display:none" title='+$("#nhn3").val()+' class="item3">'+$("#nhnl5").val()+'：'+isNull(o.refercountrynum)+$("#nhnl6").val()/*'个国家 '*/+isNull(o.refermedianum)+$("#nhnl7").val()+'</p>';/*"资讯"来源个媒体*/
	 	    	html+='</dd>';
	 	    	html+='	<dd class="info">';//images/temp/
	 	    	html+='<p class="img_p"><img  style="display:'+imgdis+'" src="'+imgszx+'"  onerror="this.src=\'images/temp/nopic.jpg\'" width="90" height="70"/></p>';
	 	    	html+='<p class="txt_p">'+summary+'<a title='+$("#nhnl3").val()+'  href="'+hf+'"  target="_blank" style="float: right;display: none;">'+$("#nhnl3").val()+'&gt;</a><p>';/*"点击查看详情"查看详情*/
	 	    	html+='</dd>';
	 	    	html+='<dd class="item">';
	 	    	html+='<p class="item1">'+type+'</p>';
	 	    	html+='<p class="item2">'+zhCountry+""+city+'</p>';
	 	    	
	 	    	html+='</dd>';
	 	    	html+='</dl>';
	 	    	html+='</li>';
	 	    });
	 	    //$('#newsVal').append(html);
	 	   if(html==''){
	 		  $('#newsVal .more_box').hide();
	 	   }else{
	 		  $('#newsVal .more_box').show();
	 	   }
	 	   $('#newsVal .more_box').before(html);
	 	   
	 	   smilData(result.length);
	 });
	 
}

function smilData(preCount){
//	var ajax_url='news/getNewsHeatPointListInteface';//小框
//	var ajax_url=path + '/getNewsHeatPointListInteface';//小框
//	var ajax_url= path + '/newsbmap/json/NewsHeatPointListInteface.json';//小框
	var ajax_url= path + '/bmap/getTopicListIntefaceData';//小框
	//alert(ajax_url);
	var count=300;
	if(fg=='1' && '1'==fg_1){
		count=300;
	}
	if(fg=='0' && '0'==fg_1){
		count=300;
	}
	if(fg=='1' && '0'==fg_1){
		count=300;
	}
	vresult =count-preCount;
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
		 	'pageSize':vresult,
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
	 		 	    	     'value':8, //o.avgtone_num<30?o.avgtone_num:14,//颜色显示
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

function promptwaring(){
	layer.alert($("#nhnl8").val());/*'暂无生成专题'*/
}
//查询 话题  左侧 专题5条 
//result_heat_topic
function get_event_point_data_zixun(){
// lixiang 2016-12-16 模拟数据	 
//	 var ajax_url='news/getNewsHeatPointListInformationInteface';
//	 var ajax_url=path + '/newsbmap/json/NewsHeatPointListInformationInteface.json';
//	alert(123);
//	 var ajax_url=path + '/bmap/getTopicListIntefaceData';
	 var ajax_url=path + '/emergency/queryEmergencyPage';
	 var ajax_data1={
		'beginDate':start_datetime,
	 	'endDate':end_datetime,
	 	'countrychinaname':country_class,
	 	'classify':classify,
	 //	'mediaType' : 'news',//事件热点
	 	'type':'1',
	 	'pageNo':1,
	 	'pageSize':50,
	 	'gj':gj,
	 	'cs':cs
	 };
	 //if(flagszt || fg=='1'){
	//	 ajax_data1.beginDate="";
	//	 ajax_data1.endDate="";
	//	 flagszt=false;
	 //}
	// console.log("------专题------------",ajax_data1);
	 $.post(ajax_url,ajax_data1,function(data){
//		 	alert(data);
//	 	    var result=JSON.parse(data.data.result);
	 	    var result=eval(data.data.result);
	 	    
	 	    $('#newsinfo li:not([class])').remove();
	 	    //$('#newsinfo .more_box').empty();
	 	    var html='';
	 	    $.each(result,function(i,o){
	 	    	html+='<li>';
	 	    	if(i<3){
	 	    		html+='<i class="hot">'+(i+1)+'</i><!--num-->';
	 	    	}else{
	 	    		html+='<i class="num">'+(i+1)+'</i><!--num-->';
	 	    	}
	 	    	var sftj="";
	 	    	//alert(o.source);
    			if(o.gnsource=='0'){
    				sftj="<span class='zt'>"+$("#nhnl1").val()+"</span>";/*推荐*/
    			}
	 	    	//var topic=isNull(o.topic);
	 	    	var city=isNull(o.city);
	 	    	//var countryChinaName=isNull(o.countryChinaName);
	 	    	//var classify=isNull(o.classifyChinese);
    			var topicDigest="";
    			//console.log("----------",countryChinaName,classify,topicDigest);
    			if(topicDigest!=null && topicDigest.length>35){
    				topicDigest=topicDigest.substring(0,35)+"...";
    			} 
    			//源标题
    			var srcTitle = isNull(o.srcTitle);
    			//中文标题
    			var zhTitle = o.zhTitle;
    			/**中文城市名称**/
    			var city = isNull(o.zhCity);
    			
    			var zhCountry = isNull(o.zhCountry);
    			
    			var type = isNull(o.type);
    			
    			if($("#language").val()=="en"){
    				if(isNull(o.topicEnglish)!=''){
    					topic=o.topicEnglish;
    				}
    				if(isNull(o.cityEnglish)!=''){
    					city=o.cityEnglish;
    				}
    				if(isNull(o.countryEnName)!=''){
    					countryChinaName=o.countryEnName;
    				}
    				if(countryChinaName==city){
    					city="";
    				}else{
    					city="."+city;
    				}
    				if(isNull(o.classifyEnglish)!=''){
    					classify=o.classifyEnglish;
    				}
    				if(isNull(o.zhSummary)!='' && o.zhSummary.length>35){
    	    			topicDigest=o.zhSummary.substring(0,35)+"...";
    				}
    			}else{
    				
     		      if(isNull(o.zhTitle)!=''){
     		    	 topic=o.zhTitle;
   				  }
     		      if(isNull(o.zhCountry)!=''){
     		    	 zhCountry=o.zhCountry;
  				  }
     		      if(isNull(o.type)!='' ){
     		    	 type=o.type;
  				  }
     		      if(isNull(o.srcTitle)!='' && o.srcTitle.length>35){
	    				topicDigest=o.srcTitle.substring(0,35)+"...";
	    			}
     		      if(isNull(o.zhCity)!=''){
   		        	city="."+o.zhCity;
   		          }
   		          if(city==o.zhCity && isNull(o.zhCity)!=''){
   		        	city="";
   		          }
    			}
    			
    			
    			//special/topic/news?infoId=40288c9054710a790154710e357a0002
    			var hf="";
    			var viewhf = "";
    			if(o.id=='' || o.id==null ||  o.id==-1){
    				var top_ic="";
    				if(null!=zhTitle && "null"!=zhTitle && ""!=zhTitle){
    					top_ic=zhTitle;
    				}
    				hf='<a href="javascript:promptwaring();" title="'+top_ic+'">'+top_ic+"&nbsp;&nbsp;"+'</a>'+sftj;
    				viewhf='<a href="javascript:promptwaring();" style="float: right;display:none">'+$("#nhnl4").val()+'&gt;</a>';/*查看详情*/
    			}else{
    				var top_ic="";
    				if(null!=zhTitle && "null"!=zhTitle && ""!=zhTitle){
    					top_ic=zhTitle;
    				} 
    				//hf='<a href="special/topic/news?infoId='+o.subjectId+'&source=4" title="'+top_ic+'" target="_blank">'+top_ic+"&nbsp;&nbsp;"+sftj+'</a>';
    				//viewhf='<a href="special/topic/news?infoId='+o.subjectId+'&source=4" style="float: right;display:none" target="_blank">查看详情&gt;</a>';
    				//&keyWord='+encodeURIComponent(o.keyWord)+'
    				hf='<a href="'+domain+'/analysis/topic/index?id='+o.id+'&source=4&opType=&srcId=&newsFlag=-1" title="'+top_ic+'" target="_blank">'+top_ic+"&nbsp;&nbsp;"+'</a>'+sftj;
    				viewhf='<a href="'+domain+'/analysis/topic/index?id='+o.id+'&source=4&opType=&srcId=&newsFlag=-1" style="float: right;display:none" target="_blank">'+$("#nhnl4").val()+'&gt;</a>';/*查看详情*/

    			} 
    			var imgdis="none";
    			if(o.imgUrl!='' && null !=o.imgUrl && "null"!=o.imgUrl){
    				imgs = o.imgUrl;
    				imgs="";
    				imgdis="inline";
    			}
    			//alert(imgs);
    			var disgj="none";
    			/*if(""!=o.referCountryNum || null !=o.referCountryNum || "null" !=o.referCountryNum){
    				disgj="inline";
    			}*/
    			var dismt="none";
    			/*if(""!=o.referMediaNum || null !=o.referMediaNum || "null" !=o.referMediaNum){
    				dismt="inline";
    			}*/
    			var all="none";
    			if("none"!=disgj && "none"!=dismt){
    				all="inline";
    			}
    			
 		        
	 	    	html+='<dl>';
	 	    	html+='	<dt>'+hf+'</dt>';
	 	    	html+='<dd style="font-size:12px;color:#777;margin-bottom:12px;height:14px;">';
	 	    	html+='<p style="float:left;">'+o.dayTime+'</p>';
	 	    	html+='<p class="item3" title='+$("#nhn3").val()+' id="ly" style="display:'+all+'">'/*+$("#nhnl5").val()*/+'<span id="gj" style="display:'+disgj+'">'+$("#nhnl6").val()+'</span>&nbsp;&nbsp;<span id="mt" style="display:'+dismt+'">'+$("#nhnl7").val()+'</span></p>';/*"专题"  来源个国家'个媒体
*/	 	    	html+='</dd>';
	 	    	html+='	<dd class="info">';//images/temp/
	 	    	html+='<p class="img_p"><img alt=""  style="display:'+imgdis+'" src="'+imgs+'" onerror="this.src=\'images/temp/nopic.jpg\'" width="90" height="70"/></p>';
	 	    	html+='<p class="txt_p">'+zhTitle+viewhf+'<p>';
	 	    	html+='</dd>';
	 	    	html+='<dd class="item">';
	 	    	html+='<p class="item1">'+type+'</p>';
	 	    	html+='<p class="item2">'+zhCountry+""+city+'</p>';
	 	    	html+='</dd>';
	 	    	html+='</dl>';
	 	    	html+='</li>';
	 	    });
	 	  
	 	   if(html==''){
	 		 $('#newsinfo .more_box').hide();
	 	   }else{
	 		  $('#newsinfo .more_box').show();
	 	   }
	 	   $('#newsinfo .more_box').before(html);
	 });
}

/***
 * 判断是否为空
 * @param v
 * @returns
 */
function isNull(v){
	if(""==v || null ==v || "null" ==v || undefined ==v ){
		return "";
	}else{
		return v;
	}
}

/***
 * 
 * 控制国家或者媒体数据为空 默认为1
 * @param v
 * @returns
 */
function isNullOrNum(v){
	//var vn=v.toString();
	//var vm=v.toString().length;
	if(""==v || null ==v || "null" ==v || 0==v || "0"==v){
		return "1";
	}else{
		return v;
	}
}
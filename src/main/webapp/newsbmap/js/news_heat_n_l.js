////////////////////////////////////////////////////////////////////////////////
//切换右侧新闻列表
//获取右侧热点新闻数据  新 误删
function get_event_point_data_new(){
	var ajax_url='news/getNewsHeatPointListNewInteface';
	 var ajax_data={
		'beginDate':start_datetime,
	 	'endDate':end_datetime,
	 	'countrychinaname':country_class,
	 	'classify':classify,
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
	 	    var result=JSON.parse(data);
	 	    $('#newsVal li:not([class])').remove();
	 	    var html='';
	 	    $.each(result.data,function(i,o){
	 	    	html+='<li>';
	 	    	cnum=i;
	 	    	if(i<3){
	 	    		html+='<i class="hot">'+(i+1)+'</i><!--num-->';
	 	    	}else{
	 	    		html+='<i class="num">'+(i+1)+'</i><!--num-->';
	 	    	}
	 	    	var sftj="";
    			if(o.source=='0'){
    				sftj="<span class='zt'>"+$("#nhnl1").val()+"</span>";
    				
    			}
	 	    	var topic=o.srcTitle;
    			//if(topic!=null && topic.length>20){
    				//topic=o.srcTitle.substring(0,20);
    			//}
    			var summary=isNull(o.srcSummary);
    			var type=isNull(o.type);
    			var city=isNull(o.city);
    			var zhCountryName=isNull(o.zhCountryName);
    			
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
			        if(isNull(o.topicChinese)!=''){
    					topic=o.topicChinese;
    				}
			        if(isNull(o.summaryChinese)!='' && o.summaryChinese.length>35){
			        	summary=o.summaryChinese.substring(0,35)+"...";
			        }
			        if(isNull(o.type)!=''){
			        	type=o.type;
    				}
			        if(isNull(o.topicChinese)!=''){
    					topic=o.topicChinese;
    				}
			        if(isNull(o.zhCountryName)!=''){
			        	zhCountryName=o.zhCountryName;
    				}
    			}
    			var hf="javascript:;;";//javascript:layer.alert('暂无生成专题');
    			if(o.srcId!='' && o.srcId!=null){
    				hf="news/detail/info?globaleventid="+o.srcId;
    			}
    			var imgdis="none";
    			if(o.imgurl!='无'  && "null"!=o.imgurl && null!=o.imgurl  && ""!=o.imgurl){
    				imgszx=o.imgurl;
    				imgdis="inline";
    			}
    			
 		       
	 	    	html+='<dl>';
	 	    	html+='	<dt><a href="'+hf+'" target="_blank">'+topic+"&nbsp;&nbsp;"+'</a>'+sftj+'</dt>';
	 	    	html+='<dd style="font-size:12px;color:#777;margin-bottom:12px;height:14px;">';
	 	    	html+='<p style="float:left;">'+strDate(o.createTime)+'</p>';
	 	    	html+='<p style="display:none" title='+$("#nhn3").val()+' class="item3">'+$("#nhnl5").val()+'：'+isNull(o.refercountrynum)+$("#nhnl6").val()/*'个国家 '*/+isNull(o.refermedianum)+$("#nhnl7").val()+'</p>';/*"资讯"来源个媒体*/
	 	    	html+='</dd>';
	 	    	html+='	<dd class="info">';//images/temp/
	 	    	html+='<p class="img_p"><img  style="display:'+imgdis+'" src="'+imgszx+'"  onerror="this.src=\'images/temp/nopic.jpg\'" width="90" height="70"/></p>';
	 	    	html+='<p class="txt_p">'+summary+'<a title='+$("#nhnl3").val()+'  href="'+hf+'"  target="_blank" style="float: right;display: none;">'+$("#nhnl3").val()+'&gt;</a><p>';/*"点击查看详情"查看详情*/
	 	    	html+='</dd>';
	 	    	html+='<dd class="item">';
	 	    	html+='<p class="item1">'+type+'</p>';
	 	    	html+='<p class="item2">'+zhCountryName+""+city+'</p>';
	 	    	
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
	 });
	 
}

function promptwaring(){
	layer.alert($("#nhnl8").val());/*'暂无生成专题'*/
}
//查询 话题  左侧 专题5条 
//result_heat_topic
function get_event_point_data_zixun(){
	 
	 var ajax_url='news/getNewsHeatPointListInformationInteface';
	 var ajax_data1={
		'beginDate':start_datetime,
	 	'endDate':end_datetime,
	 	'countrychinaname':country_class,
	 	'classify':classify,
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
	 	    var result=JSON.parse(data);
	 	    $('#newsinfo li:not([class])').remove();
	 	    //$('#newsinfo .more_box').empty();
	 	    var html='';
	 	    $.each(result.data.results,function(i,o){
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
    			
	 	    	var topic=isNull(o.topic);
    			//if(topic!=null && topic.length>15){
    				//topic=topic.substring(0,15);
    			//}
	 	    	var city=isNull(o.city);
	 	    	var countryChinaName=isNull(o.countryChinaName);
	 	    	var classify=isNull(o.classifyChinese);
    			var topicDigest=isNull(o.topicDigest);
    			//console.log("----------",countryChinaName,classify,topicDigest);
    			if(topicDigest!=null && topicDigest.length>35){
    				topicDigest=topicDigest.substring(0,35)+"...";
    			} 
    			
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
    				if(isNull(o.summaryEnglish)!='' && o.summaryEnglish.length>35){
    	    			topicDigest=o.summaryEnglish.substring(0,35)+"...";
    				}
    			}else{
    				
     		      if(isNull(o.topicChinese)!=''){
     		    	 topic=o.topicChinese;
   				  }
     		      if(isNull(o.countryChinaName)!=''){
     		    	 countryChinaName=o.countryChinaName;
  				  }
     		      if(isNull(o.classifyChinese)!='' ){
     		    	 classify=o.classifyChinese;
  				  }
     		      if(isNull(o.summaryChinese)!='' && o.summaryChinese.length>35){
	    				topicDigest=o.summaryChinese.substring(0,35)+"...";
	    			} 
     		      if(isNull(o.city)!=''){
   		        	city="."+o.city;
   		          }
   		          if(countryChinaName==o.city && isNull(o.city)!=''){
   		        	city="";
   		          }
    			}
    			
    			
    			//special/topic/news?infoId=40288c9054710a790154710e357a0002
    			var hf="";
    			var viewhf = "";
    			if(o.subjectId=='' || o.subjectId==null ||  o.subjectId==-1){
    				var top_ic="";
    				if(null!=topic && "null"!=topic && ""!=topic){
    					top_ic=topic;
    				}
    				hf='<a href="javascript:promptwaring();" title="'+top_ic+'">'+top_ic+"&nbsp;&nbsp;"+'</a>'+sftj;
    				viewhf='<a href="javascript:promptwaring();" style="float: right;display:none">'+$("#nhnl4").val()+'&gt;</a>';/*查看详情*/
    			}else{
    				var top_ic="";
    				if(null!=topic && "null"!=topic && ""!=topic){
    					top_ic=topic;
    				} 
    				//hf='<a href="special/topic/news?infoId='+o.subjectId+'&source=4" title="'+top_ic+'" target="_blank">'+top_ic+"&nbsp;&nbsp;"+sftj+'</a>';
    				//viewhf='<a href="special/topic/news?infoId='+o.subjectId+'&source=4" style="float: right;display:none" target="_blank">查看详情&gt;</a>';
    				//&keyWord='+encodeURIComponent(o.keyWord)+'
    				hf='<a href="'+domain+'/analysis/topic/index?id='+o.subjectId+'&source=4&opType=&srcId=&newsFlag=-1" title="'+top_ic+'" target="_blank">'+top_ic+"&nbsp;&nbsp;"+'</a>'+sftj;
    				viewhf='<a href="'+domain+'/analysis/topic/index?id='+o.subjectId+'&source=4&opType=&srcId=&newsFlag=-1" style="float: right;display:none" target="_blank">'+$("#nhnl4").val()+'&gt;</a>';/*查看详情*/

    			} 
    			var imgdis="none";
    			if(o.picture!='' && null !=o.picture && "null"!=o.picture){
    				imgs=o.picture;
    				imgdis="inline";
    			}
    			//alert(imgs);
    			var disgj="none";
    			if(""!=o.referCountryNum || null !=o.referCountryNum || "null" !=o.referCountryNum){
    				disgj="inline";
    			}
    			var dismt="none";
    			if(""!=o.referMediaNum || null !=o.referMediaNum || "null" !=o.referMediaNum){
    				dismt="inline";
    			}
    			var all="none";
    			if("none"!=disgj && "none"!=dismt){
    				all="inline";
    			}
    			
 		        
	 	    	html+='<dl>';
	 	    	html+='	<dt>'+hf+'</dt>';
	 	    	html+='<dd style="font-size:12px;color:#777;margin-bottom:12px;height:14px;">';
	 	    	html+='<p style="float:left;">'+strDate(o.newDate)+'</p>';
	 	    	html+='<p class="item3" title='+$("#nhn3").val()+' id="ly" style="display:'+all+'">'/*+$("#nhnl5").val()*/+'<span id="gj" style="display:'+disgj+'">'+isNullOrNum(o.referCountryNum)+$("#nhnl6").val()+'</span>&nbsp;&nbsp;<span id="mt" style="display:'+dismt+'">'+isNullOrNum(o.referMediaNum)+$("#nhnl7").val()+'</span></p>';/*"专题"  来源个国家'个媒体
*/	 	    	html+='</dd>';
	 	    	html+='	<dd class="info">';//images/temp/
	 	    	html+='<p class="img_p"><img alt=""  style="display:'+imgdis+'" src="'+imgs+'" onerror="this.src=\'images/temp/nopic.jpg\'" width="90" height="70"/></p>';
	 	    	html+='<p class="txt_p">'+topicDigest+viewhf+'<p>';
	 	    	html+='</dd>';
	 	    	html+='<dd class="item">';
	 	    	html+='<p class="item1">'+classify+'</p>';
	 	    	html+='<p class="item2">'+countryChinaName+""+city+'</p>';
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
 
var myChart;

var start_datetime='';//开始时间
var end_datetime='';//结束时间
var event_code='';//事件分类表
var country_class='';//国家种族分类
 


var p_map_geo={};
var p_map_point=[];
var count = 0;


$(function(){
                //初始化
//				$('#mainHeight').height($('.main_left').outerHeight()+10);
//				$(document.body).height($('.main_left').outerHeight()+90);

	//初始化翻译
	var lang=$('.item_1').attr('data-lanage');
	if(lang!=''){
		//翻译标题
		var title=$('.tit_src').html();
		var title_arry=title.split('<br>');
		$('.tit_tra').empty();
		for(var i=0;i<title_arry.length;i++){
			Translate('.tit_tra',title_arry[i],lang,false);
		}

		Translate('#tranSource',$('#srcSource').text(),lang,false);

		//翻译内容
		var content=$('.con_src').html();
		content=content.replace(/<br\/>/gi,'<br>');
		var content_arry  = content.split('<br>');
		$('.con_tra').empty();

		var lastDeferred = null;
		for(var i=0;i<content_arry.length;i++){
			var content = content_arry[i];
			var splitChar = lang=='zh'?'。':'.';
			if(content && content.length>300){
				var contentArr = content.split(splitChar);
				for(var j=0;j<contentArr.length;j++){
					if(j==0){
						lastDeferred = TranslateHtml('.con_tra',contentArr[j],lang,true,0,lastDeferred);
					}else if(j==contentArr.length-1){
						lastDeferred = TranslateHtml('.con_tra',contentArr[j],lang,true,2,lastDeferred);
					}else{
						lastDeferred = TranslateHtml('.con_tra',contentArr[j],lang,true,1,lastDeferred);
					}
				}
			}else{
				lastDeferred = Translate('.con_tra',content_arry[i],lang,true,lastDeferred);
			}
		}

	}

	initShareBox();

	/**
	 * 初始化浮动在右侧的分享盒子
	 */
	function initShareBox(){
		var SHARE_BOX_OPEN_CLS = 'opened';

		//分享的点击
		$('.share_box').on('click','a',function(e){
			if($(this).hasClass('ico_return')){
				$('.share_ul').toggleClass(SHARE_BOX_OPEN_CLS);
			}
			e.stopPropagation();
		});

		//document的点击
		$(document).on('click',function(e){
			var $shareUl = $('.share_ul');
			if($shareUl.hasClass(SHARE_BOX_OPEN_CLS)){
				$shareUl.removeClass(SHARE_BOX_OPEN_CLS);
			}
		});
	}
});



//翻译接口 用递归
function Translate(obj,content,lang,ishtml,deferred){
		var newDeferred = $.Deferred();
	     var ajax_url='news/Translate';
	    
         var ajax_data={
        	'content':content,
        	'lanage':lang
         };
     	$.ajax({
     		type:'post',
		    url:ajax_url,
		    data: ajax_data,
		    dataType: "json",
		    success: getHandle(deferred,handle)
		});

	function handle(result){
		if(result!=null && result.content!=null && result.content!=""  && result.content!="null"){
			if(ishtml){
				if(lang!='zh'){//中文
					$(obj).append('<p style="text-indent: 2em;">'+result.content+'</p>');
				}else{//外文
					$(obj).append('<p style="font-family: arial; font-size:16px;">'+result.content+'</p>');
				}
			}else{
				$(obj).append(result.content);
			}
			resizeHeight();
		}

		newDeferred.resolve();
	}

	return newDeferred;
}

/**
 * 若无deferred，返回handle,否则，返回一个延迟处理handle的函数
 * @param deferred
 * @param handle
 * @returns {*}
 */
function getHandle(deferred,handle){
	if(deferred){
		return function(result){
			deferred.done(function(){
				handle(result);
			});
		}
	}else{
		return handle;
	}
}

//翻译接口 用递归
function TranslateHtml(obj,content,lang,ishtml,isLoction,deferred){
	var newDeferred = $.Deferred();
	     var ajax_url='news/Translate';
	    
         var ajax_data={
        	'content':content,
        	'lanage':lang
         };
     	$.ajax({
			type: 'post',
			url: ajax_url,
			data: ajax_data,
			dataType: "json",
			success: getHandle(deferred, handle)
		});

		function handle(result){
			if(result!=null && result.content!=null && result.content!=""  && result.content!="null"){
				if(ishtml){
					if(lang!='zh'){//中文
						if(isLoction==0){
							$(obj).append('<p style="text-indent: 2em;">');
							$(obj).append(result.content);
						}else if(isLoction==2){
							$(obj).append(result.content);
							$(obj).append('</p>');
						}else{
							$(obj).append(result.content);
						}
					}else{//外文
						if(isLoction==0){
							$(obj).append('<p style="font-family: arial; font-size:16px;">');
							$(obj).append(result.content);
						}else if(isLoction==2){
							$(obj).append(result.content);
							$(obj).append('</p>');
						}else{
							$(obj).append(result.content);
						}
					}
				}else{
					$(obj).append(result.content);
				}
				resizeHeight();
			}

			newDeferred.resolve();
		}

	return newDeferred;
}

function resizeHeight(){
	if($('.content_items').outerHeight()<$('.item_2').outerHeight()){
  	  $('.content_items').height($('.item_2').outerHeight());
    }
}




var $tran = $('.con_tra');


var $transEditor = $('<textarea class="trans-editor"></textarea>');

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
			translate(title_arry[i],lang,function(data){
				$('.tit_tra').html(data[0].text);
			});
		}

		translate($('#srcSource').text(),lang,function(data){
			$('#tranSource').html(data[0].text);
		});

		//翻译内容
		var content=$('#srcText').html();
		content = content.replace(/<br\/?>/gi,'');
		translate(content,lang,function(result){
			var id= 0,
				srcHtmls = [],
				tgtHtmls = [];
console.log(result);
			$.each(result,function(i,passage){
				console.log(passage);
				var srcs = passage["src-tokenized"].split(' '),
					tgts = passage["tgt-tokenized"].split(' ');

				$.each(passage["alignment-raw"],function(i,fragment){
					var srcStart = fragment["src-start"],
						srcEnd = fragment["src-end"],
						tgtStart = fragment["tgt-start"],
						tgtEnd = fragment["tgt-end"];

					for(var s=srcStart;s<=srcEnd;s++){
						var curSrc = srcs[s];
						if(typeof curSrc === 'string'){
							srcs[s]= {id:id,text:curSrc};
						}
					}

					for(var t=tgtStart;t<=tgtEnd;t++){
						var curTgt = tgts[t];
						if(typeof curTgt === 'string'){
							tgts[t]= {id:id,text:curTgt};
						}
					}
					id++;
				});
				srcHtmls.push(joinTextArray(srcs,'src'));
				tgtHtmls.push(joinTextArray(tgts,'tgt'));
			});

			$('.con_src').html(srcHtmls.join(' '));
			$tran.html(tgtHtmls.join(' '));
		});
	}

	function joinTextArray(array,cls){
		var resultArray = [],
			lastId,
			lastArray = [];
		$.each(array,function(i,cur){
			if(typeof cur==="string"){
				resultArray.push(cur);
				return;
			}

			if(lastId!==cur.id && lastArray.length>0){
				resultArray.push('<span class="'+cls+'" data-id="'+lastId+'" >'+lastArray.join(' ')+'</span>');
				lastArray.length=0;
			}

			lastArray.push(cur.text);

			lastId=cur.id;
		});

		return resultArray.join(' ');
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

	var $curEditting = null;

	$('.con_src').on('mouseenter','.src',
		function(e){
			var $this = $(this);
			$this.addClass('hover');

			$tran.children('[data-id="'+$this.attr('data-id')+'"]').addClass('hover');

	}).on('mouseleave','.src',
		function(e){
			var $this = $(this);
			$this.removeClass('hover');
			$tran.children('[data-id="'+$this.attr('data-id')+'"]').removeClass('hover');
	}).on('click','.src',
		function(e){
			var $this = $(this);
			var $that =$tran.children('[data-id="'+$this.attr('data-id')+'"]');

			if($curEditting){
				endEdit($curEditting);
			}

			startEdit($curEditting = $that);
	});
});

function startEdit($el){
	$el.hide();
	$el.after($transEditor);
	$transEditor.show().val($el.html());
}

function endEdit($el){
	$el.show();
	$el.html($transEditor.val());

	$transEditor.hide();
}

//翻译接口 用递归
function translate(content,lang,callback){
	//alert(content);
	$.ajax({
		type:'post',
		url:'news/TranslateNew',
		data: {
			'content':content,
			'lanage':lang
		},
		success: function(result){
			result = parseTranslateResult(result);
			if(result!=null){

				var translation = result.translation[0].translated;
				callback && callback(translation);
			}
		}
	});
}

function parseTranslateResult(result){
	//console.log(result);
	result = eval(result);
	
	if(result){
		result = JSON.parse(result.replace(/&quot;/g,'\"'));
		//console.log(result);
	}else{
		result = null;
	}

	return result;
}



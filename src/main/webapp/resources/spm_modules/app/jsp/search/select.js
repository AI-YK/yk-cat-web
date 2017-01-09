define('app/jsp/search/select', function (require, exports, module) {
    'use strict';
    var $=require('jquery');
	require("echarts/echarts.min");
	//require("select2/select2.min");
	//require("select2/select2.css");
	//require("select2/select2_locale_zh-CN");
	require('jquery/1.9.1/jquery-migrate')
	require("jquery-autocomplete/jquery.autocomplete");
	require("jquery-autocomplete/jquery.autocomplete.css");
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');
	var moment = require("moment/2.9.0/moment");
	var Base = require('arale-base/1.2.0/base');
    var AjaxController = require('opt-ajax/1.0.0/index');
    
    var ajaxController = new AjaxController();
    
    var SelectUtil = Base.extend({
        //重写父类
        setup: function () {
        	SelectUtil.superclass.setup.call(this); 
        	// 初始化国际化
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "map",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
        },
        initOrgSelect:function(selectConfig){
            var _this = this;
        	var url = _base +"/common/getChProvince";
        	var param={};
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "map",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
        	param.language="zh";
        	param.type="3";
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: $.i18n.prop('detail.find.data')+"..",
				url: url,
				data: param,
				success:function(rs){
					var data = rs.data;
					if(!data){
						data =[];
					}
					var data2 = [];
					data2.push({"id":'',"text":"省份不限"});
					for(var i=0;i<data.length;i++){
						var obj ={};
						//obj.id=data[i].code;
						obj.id=data[i].busCode;
						obj.text=data[i].name;
						data2.push(obj);
					}
					var selectConfigData = []; 
					if($.isArray(selectConfig)){//数组模式
						selectConfigData =selectConfig; 
					}else{
						selectConfigData.push(selectConfig);
					}
					for(var j=0;j<selectConfigData.length;j++){
						var selectObj = selectConfigData[j];
						selectObj.text=$.i18n.prop('select.province');
						selectObj.data=data2;
						_this._commonselect(selectObj);
					}
					
				}
        	    
        	});
        },
        //[{"id":"","callback":function(){执行操作}}]
        initLanguageSelect:function(selectConfig){
        	var _this = this;
        	var url = _base +"/common/getQueryInfoLanguage";
        	var param={};
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "map",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
        	param.language="zh";
        	param.languageType="0";
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: $.i18n.prop('detail.find.data')+"..",
				url: url,
				data: param,
				success:function(rs){
					var data = rs.data;
					if(!data){
						data =[];
					}
					var data2 = [];
					data2.push({"id":'',"text":$.i18n.prop('select.language.notlimit')});
					for(var i=0;i<data.length;i++){
						var obj ={};
						obj.id=data[i].srcValue;
						obj.text=data[i].name;
						data2.push(obj);
					}
					var selectConfigData = []; 
					if($.isArray(selectConfig)){//数组模式
						selectConfigData =selectConfig; 
					}else{
						selectConfigData.push(selectConfig);
					}
					for(var j=0;j<selectConfigData.length;j++){
						var selectObj = selectConfigData[j];
						selectObj.text=$.i18n.prop('select.language');
						selectObj.data=data2;
						_this._commonselect(selectObj);
					}
				  }
					
				});
        },
        initDicSelect:function(selectConfig){
        	var _this = this;
        	var url = _base +"/common/getDicByTypeAndLanguage";
        	var param={};
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "map",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
        	param.language="zh";
        	param.type="SJYYXL";
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: $.i18n.prop('detail.find.data')+"..",
				url: url,
				data: param,
				success:function(rs){
					var data = rs.data;
					if(!data){
						data =[];
					}
					var data2 = [];
					data2.push({"id":'',"text":"影响力不限"});
					for(var i=0;i<data.length;i++){
						var obj ={};
						obj.id=data[i].dicValue;
						obj.text=data[i].dicName;
						data2.push(obj);
					}
					var selectConfigData = []; 
					if($.isArray(selectConfig)){//数组模式
						selectConfigData =selectConfig; 
					}else{
						selectConfigData.push(selectConfig);
					}
					for(var j=0;j<selectConfigData.length;j++){
						var selectObj = selectConfigData[j];
						selectObj.text=$.i18n.prop('select.influce');
						selectObj.data=data2;
						_this._commonselect(selectObj);
					}
				}
        	    
        	});
        },
        autocompleteDic:function(input,store){
        	var url = _base + "/common/getDataSourceList";
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "map",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
        	$('#'+input).focus().autocomplete(url,{
        		dataType: "json", 
        		max:30,
        		minChars:1,
        		mustMatch:true,
        		matchSubset:false,
        		matchCase:true,
        		width:190,
        		scrollHeight:320,
        	    parse: function(result) {  
                    var rows = $.map(result.data, function(row) {  
                        return {  
                            data: row,  
                            value: row.mediaId,  
                            result: row.mediaNameZh  
                        }  
                    });  
                    //alert(JSON.stringify(rows));
                    return rows;
                },  
        		formatItem: function(row, i,max) {
        			return row.mediaNameZh; 
        	    }
        	}).result(function(event, item) {
        		if(item){
        			$('#'+store).val(item.mediaId);
        			$('#'+store).attr("title",item.mediaNameZh);
        		}else{
        			$('#'+store).val("");
        			$('#'+store).attr("title","");
        		}
        	});
        	
        },
        queryMediaName:function(ele,storeId){
        	/*ele.select2({
        		minimumInputLength: 1,//至少输入n个字符，才去加载数据  
        	    allowClear: true,  
        	    width: "100px",  
        	    height:"20px", 
        	    language: "zh-CN",
        	    placeholder: "媒体",  
        	    formatSelection : function (item) {
        	    	$("#"+storeId).val(item.id);
        	    	return item.text; 
        	    },  // 选择结果中的显示
        	    formatResult    : function (item) { return item.text; },  // 搜索列表中的显示
        	    ajax: {  
        	        url: _base + "/common/getDataSourceList", 
        	        type: 'POST',
        	        dataType: 'json',  
        	        delay: 250,  
        	        data: function (term, page) {  
        	            return {  
        	                q: term,  
        	                limit:10
        	            };  
        	        },  
        	        cache: false, 
        	        results: function (res, page) { 
        	        	var options = [];  
        	            if (res.statusCode=="1") {  
        	                var data = res.data;
        	                var len =data.length;
        	                for (var i = 0;i < len; i++) {  
        	                    var option = {  
        	                        "id": data[i]["mediaId"],  
        	                        "text": data[i]["mediaNameZh"]  
        	                    };  
        	                    options.push(option);  
        	                }  
        	            } 
        	          return {results:options};
        	        },  // 构造返回结果
        	        escapeMarkup : function (m) { return m; }               // 字符转义处理 
        	    }  
        	}); */ 
        },
        /*时间选择*/
        initTimeSelect:function(selectConfig){
        	var _this = this;
        	//初始化国际化 
			$.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "both", 
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
        	var selectConfigData = []; 
			if($.isArray(selectConfig)){//数组模式
				selectConfigData =selectConfig; 
			}else{
				selectConfigData.push(selectConfig);
			}
			var _selecttime = $.i18n.prop('select.time.value');
			
			for(var j=0;j<selectConfigData.length;j++){
				var selectObj = selectConfigData[j];
				_this._timeselect(selectObj.id, _selecttime,selectObj.callback);
			}
        },
        /*排序下拉*/
        initSortSelect:function(selectConfig,type){
        	var _this = this;
        	var data = [];
            $.i18n.properties({//加载资浏览器语言对应的资源文件 
				 name: ["home"], //资源文件名称，可以是数组，对应国际化资源properties文件 
				 path: _i18n_res, //资源文件路径 ，已在通用页面进行初始化
				 mode: "map",
				 language: currentLan, //当前语言，已在通用页面进行初始化
				 async: false 
			 });
        	var  sornolimit=$.i18n.prop('select.sort.notlimit');
    
        	data.push({"id":'',"text":sornolimit});
        	if("news"==type){
        		data.push({"id":"_score","text":$.i18n.prop('select.sort.score')});
            	data.push({"id":"pubdate","text":$.i18n.prop('select.sort.pubdate')});
            	data.push({"id":"mediaLevel","text":$.i18n.prop('select.sort.mediaLevel')});
            	data.push({"id":"transfer","text":$.i18n.prop('select.sort.transfer')});
        	}else if("social"==type){
        		data.push({"id":"relevance","text":$.i18n.prop('select.sort.score')});
            	data.push({"id":"time","text":$.i18n.prop('select.sort.pubdate')});
            	data.push({"id":"force","text":$.i18n.prop('select.sort.influce')});
            	data.push({"id":"transCount","text":$.i18n.prop('select.sort.transCount')});
        	}
        	var selectConfigData = []; 
			if($.isArray(selectConfig)){//数组模式
				selectConfigData =selectConfig; 
			}else{
				selectConfigData.push(selectConfig);
			}
			for(var j=0;j<selectConfigData.length;j++){
				var selectObj = selectConfigData[j];
				selectObj.text=$.i18n.prop('select.sort');
				selectObj.data=data;
				_this._commonselect(selectObj);
			}
        },
        /*译文下拉*/
        initTranSelect:function(selectConfig){
        	var _this = this;
        	var data = [];
        	data.push({"id":"tran","text":$.i18n.prop('select.tran.notlimit')});
        	data.push({"id":"onlyTran","text":$.i18n.prop('select.tran.onlyTran')});
        	data.push({"id":"onlyText","text":$.i18n.prop('select.tran.onlyText')});
        	data.push({"id":"tranAndText","text":$.i18n.prop('select.tran.tranAndText')});
        	var selectConfigData = []; 
        	if($.isArray(selectConfig)){//数组模式
        		selectConfigData =selectConfig; 
        	}else{
        		selectConfigData.push(selectConfig);
        	}
        	for(var j=0;j<selectConfigData.length;j++){
        		var selectObj = selectConfigData[j];
        		selectObj.text=$.i18n.prop('select.tran');
				selectObj.data=data;
        		_this._commonselect(selectObj);
        	}
        },
        
        /*情感下拉*/
        initFeelSelect:function(selectConfig){
        	var _this = this;
        	var data = [];
        	data.push({"id":'',"text":$.i18n.prop('select.feel.notlimit')});
        	data.push({"id":"1","text":$.i18n.prop('select.feel.positive')});
        	data.push({"id":"0","text":$.i18n.prop('select.feel.neutral')});
        	data.push({"id":"-1","text":$.i18n.prop('select.feel.nagative')});
        	var selectConfigData = []; 
        	if($.isArray(selectConfig)){//数组模式
        		selectConfigData =selectConfig; 
        	}else{
        		selectConfigData.push(selectConfig);
        	}
        	for(var j=0;j<selectConfigData.length;j++){
        		var selectObj = selectConfigData[j];
        		selectObj.text=$.i18n.prop('select.feel');
				selectObj.data=data;
        		_this._commonselect(selectObj);
        	}
        },
        
        
        /*生成通用下拉列表*/
        _commonselect:function(config){
        	var id = config.id;
        	var text = config.text;
        	var data =config.data; 
        	var callback=config.callback;
        	var defaultId =config.defaultId;
        	var defaultText ="";
        	var hasDefaultId = false;
        	if(defaultId!=''&&defaultId!=undefined){
        		hasDefaultId = true;
			}
        	//点击其他影藏
        	$(document).on("click",function(){
				$('.select-dropdown-show').hide();
        	});
        	var html = [];
        	html.push('<input type="hidden" id="'+id+'_input">');
        	html.push('<p> <span id="'+id+'_select_text">'+text+'</span><i class="icon iconfont">&#xe659;</i>');
        	html.push('<div id="'+id+'_data_list" class="select-dropdown-show" style="display:none;">');
        	html.push('<ul>'); 
        	if(data){
        		var len = data.length;
        		//class="current"
        		for(var i =0;i<len;i++){
        			var obj = data[i];
        			if(hasDefaultId){
        				if(obj.id==defaultId){
        					defaultText =obj.text;
        				}
        			}
					html.push('<li data-val="'+obj.id+'" data-text="'+obj.text+'">'+obj.text+'</li>'); 	
				}
        	}
			html.push('</ul>'); 
			html.push('</div>'); 
			html.push('</p>'); 
			var selectObj = $("#"+id);
			selectObj.html(html.join(""));
			//设置默认
			if(hasDefaultId){
				$("#"+id+"_input").val(defaultId);
				$("#"+id+"_select_text").html(defaultText);
			}
			var selectDataList = $("#"+id+"_data_list");
			
			selectObj.click(function(event){
				event.stopImmediatePropagation();//取消事件冒泡；
				$('.select-dropdown-show').hide();
				selectDataList.show();
			});
			/*selectObj.mouseenter(function () {
				selectDataList.show(1);
		    }).mouseleave(function () {
			 selectDataList.hide(1);
		    });*/
			selectDataList.click(function () {
		                $(this).hide(1);
		           });
			var selectLi = $("#"+id+"_data_list ul li");
			selectLi.click(function(){
				//selectLi.removeClass("current");
				var _this=$(this);
				//_this.addClass("current");
				var val = _this.attr("data-val");
				var text = _this.attr("data-text");
				$("#"+id+"_input").val(val);
				$("#"+id+"_select_text").html(text);
				//回调
				if(callback){
				 callback();
				}
			});
		}/*生成时间下来选项*/
        ,_timeselect:function(id,text,callback){
        	//点击其他影藏
        	$(document).on("click",function(){
				$('.select-dropdown-show').hide();
        	});
        	var html = [];
        	html.push('<input type="hidden" id="'+id+'_begin_input">');
        	html.push('<input type="hidden" id="'+id+'_end_input">');
        	html.push('<p><span id="'+id+'_select_text">'+text+'</span><i class="icon iconfont">&#xe659;</i>')
			html.push('<div id="'+id+'_time_view" class="select-dropdown-show" style="display:none;">'); 
        	html.push('	<ul>');
        	
        	var _limit = $.i18n.prop('select.time.notlimit');
        	html.push('<li data-val="0">'+_limit+'</li>');                                        
        	html.push('<li data-val="1">'+$.i18n.prop('select.time.oneday')+'</li>');
        	html.push('<li data-val="2">'+$.i18n.prop('select.time.oneweek')+'</li>');
        	html.push('<li data-val="3">'+$.i18n.prop('select.time.onemonth')+'</li>');
        	html.push('<li class="dal-list">');
        	html.push('<p>'+$.i18n.prop('select.time.defined')+'</p>');
        	html.push('<p>');
        	html.push('<span>'+$.i18n.prop('select.time.frome'));
        	html.push('<input id="'+id+'_begin_temp" ');
        	var t = "'#F{$dp.$D(\\'"+id+"_end_temp\\')||\\'%y-%M-%d\\'}'";
        	html.push('  onfocus="WdatePicker({maxDate:'+t+',dateFmt:\'yyyy-MM-dd\',readOnly:true});"');
        	html.push('type="input" class="int-text date-input"/></span>');
        	html.push('</p>');
        	html.push('<p>');
        	html.push('<span>'+$.i18n.prop('select.time.to'));
        	t = "'#F{$dp.$D(\\'"+id+"_begin_temp\\')}'";
        	html.push('<input id="'+id+'_end_temp" onfocus="WdatePicker({minDate:'+t+',dateFmt:\'yyyy-MM-dd\',readOnly:true,maxDate:\'%y-%M-%d\'});" type="input" class="int-text date-input"/></span>');
        	html.push('</p>');
        	html.push('<p><input id="'+id+'_submit_time_temp" type="button" class="btn btn-date" value="'+$.i18n.prop('select.time.ok')+'"/></p>');
        	html.push('</li>');
        	html.push('</ul>');
        	html.push('</div>');
        	html.push('</p>');
        	var selectObj = $("#"+id);
			selectObj.html(html.join(""));
			var selectView = $("#"+id+"_time_view");
			/*selectObj.mouseenter(function () {
				selectView.show(1);
		    }).mouseleave(function () {
		      selectView.hide(1);
		    });*/
			selectObj.click(function(event){
				event.stopImmediatePropagation();//取消事件冒泡；
				$('.select-dropdown-show').hide();
				selectView.show();
			});
			
			var select_ul_liView = $("#"+id+"_time_view ul li");
			select_ul_liView.click(function(){
				var _this = $(this);
				var data_val =_this.attr("data-val");
				if(data_val!=undefined&&data_val!=''){
					var _begin_input = $("#"+id+"_begin_input");
					var _end_input = $("#"+id+"_end_input");
					var _begin_input_val = "";
					var _end_input_val = "";
					var nowDate = moment().format('YYYY-MM-DD');
					switch(data_val*1){
					 case 0://时间不限
						 _begin_input_val = "";
					     _end_input_val = "";
						 break;
					 case 1://一天内
						 _begin_input_val = nowDate+" 00:00:00";
					     _end_input_val = nowDate+" 23:59:59";
						 break;
					 case 2://一周内
						 var pre7Date = moment().add(-6,'days').format('YYYY-MM-DD');
						 _begin_input_val = pre7Date+" 00:00:00";
					     _end_input_val = nowDate+" 23:59:59";
						 break;
					 case 3://一月内
						 var pre30Date = moment().add(-29,'days').format('YYYY-MM-DD');
						 _begin_input_val = pre30Date+" 00:00:00";
					     _end_input_val = nowDate+" 23:59:59";
						 break;
					}
					$("#"+id+"_select_text").html(_this.html());
					_begin_input.val(_begin_input_val);
					_end_input.val(_end_input_val);
					$("#"+id+"_begin_temp").val("");
					$("#"+id+"_end_temp").val("");
					selectView.hide(1);
					//执行回调
					callback();
				}
			});
			$("#"+id+"_submit_time_temp").click(function(){
				var begin = $("#"+id+"_begin_temp").val();
				if(!begin){
					$("#"+id+"_begin_temp").focus();
					return;
				}
				var end = $("#"+id+"_end_temp").val();
				if(!end){
					$("#"+id+"_end_temp").focus();
					return;
				}
				var _begin_input = $("#"+id+"_begin_input");
				_begin_input.val(begin+" 00:00:00");
				var _end_input = $("#"+id+"_end_input");
				_end_input.val(end+" 23:59:59");
				$("#"+id+"_select_text").html(begin+"/"+end);
				selectView.hide(1);
				//执行回调
				callback();
			});
        },
        //媒体选择框
        _mediaSelect:function(id,callback){
        	$(document).on("click",function(){
				$('.select-dropdown-show').hide();
        	});
			var html = [];
			html.push('<p id="'+id+'-label">'+$.i18n.prop('select.madial')+'<i class="icon iconfont">&#xe659;</i></p>');
			html.push('<input id="'+id+'-store" title="" type="hidden" value=""/>');
			html.push('<div class="select-dropdown-show" id="'+id+'-show"  style="width:240px;padding: 20px;display:none;">');
			html.push('<input id="'+id+'-in" type="text" class="int-text ret-input"  placeholder="'+$.i18n.prop('select.madial.find')+'"  />');
			html.push('<input id="'+id+'-btn" type="button" class="btn ret-btn" value="'+$.i18n.prop('select.madial.ok')+'" />');
			html.push('</div>');
			$("#"+id).html(html.join(""));
			this.autocompleteDic(id+'-in',id+'-store');
			$('#'+id+'-btn').click(function(event){
				event.stopImmediatePropagation();
				$('#'+id+'-show').hide();
				var value = $('#'+id+'-store').val();
				var title = $('#'+id+'-store').attr("title");
				var name = $('#'+id+'-in').val();
				if(name==""||name!=title){
					$('#'+id+'-label').html($.i18n.prop('select.madial')+'<i class="icon iconfont">&#xe659;</i>');
					$('#'+id+'-store').val("");
					$('#'+id+'-in').val("");
				}else{
					$('#'+id+'-label').html(name+'<i class="icon iconfont">&#xe659;</i>');
				}
				
				callback(value);
			});
			$('#'+id+'-in').click(function(evnet){
				event.stopImmediatePropagation();
			});
			$('#'+id).click(function(event){
				event.stopImmediatePropagation();//取消事件冒泡；
				$('.select-dropdown-show').hide();
				$('#'+id+'-show').show(); 
				
			});
		}
        
    });

    module.exports = SelectUtil;
});

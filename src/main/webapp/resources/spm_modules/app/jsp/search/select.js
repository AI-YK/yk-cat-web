define('app/jsp/search/select', function (require, exports, module) {
    'use strict';
    var $=require('jquery');
	require("echarts/echarts.min");
	//require("select2/select2.min");
	//require("select2/select2.css");
	//require("select2/select2_locale_zh-CN");
	require("jquery-autocomplete/jquery.autocomplete");
	require("jquery-autocomplete/jquery.autocomplete.css");
	var moment = require("moment/2.9.0/moment");
	var Base = require('arale-base/1.2.0/base');
    var AjaxController = require('opt-ajax/1.0.0/index');
    
    var ajaxController = new AjaxController();
    
    var SelectUtil = Base.extend({
        //重写父类
        setup: function () {
        	SelectUtil.superclass.setup.call(this); 
        },
        initOrgSelect:function(selectConfig){
            var _this = this;
        	var url = _base +"/common/getChProvince";
        	var param={};
        	param.language="zh";
        	param.type="3";
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: "保存数据中，请等待...",
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
						obj.id=data[i].code;
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
						_this._commonselect(selectObj.id, '省份', data2,selectObj.callback);
					}
					
				}
        	    
        	});
        },
        //[{"id":"","callback":function(){执行操作}}]
        initLanguageSelect:function(selectConfig){
        	var _this = this;
        	var url = _base +"/common/getQueryInfoLanguage";
        	var param={};
        	param.language="zh";
        	param.languageType="0";
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: url,
				data: param,
				success:function(rs){
					var data = rs.data;
					if(!data){
						data =[];
					}
					var data2 = [];
					data2.push({"id":'',"text":"语言不限"});
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
						_this._commonselect(selectObj.id, '语言', data2,selectObj.callback);
					}
				  }
					
				});
        },
        initDicSelect:function(selectConfig){
        	var _this = this;
        	var url = _base +"/common/getDicByTypeAndLanguage";
        	var param={};
        	param.language="zh";
        	param.type="SJYYXL";
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: "保存数据中，请等待...",
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
						_this._commonselect(selectObj.id, '影响力', data2,selectObj.callback);
					}
				}
        	    
        	});
        },
        autocompleteDic:function(input,store){
        	var url = _base + "/common/getDataSourceList";
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
        		}else{
        			$('#'+store).val("");
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
        	var selectConfigData = []; 
			if($.isArray(selectConfig)){//数组模式
				selectConfigData =selectConfig; 
			}else{
				selectConfigData.push(selectConfig);
			}
			for(var j=0;j<selectConfigData.length;j++){
				var selectObj = selectConfigData[j];
				_this._timeselect(selectObj.id, '时间',selectObj.callback);
			}
        },
        /*排序下拉*/
        initSortSelect:function(selectConfig){
        	var _this = this;
        	var data = [];
        	data.push({"id":'',"text":"排序不限"});
			data.push({"id":"relevance","text":"相关度"});
        	data.push({"id":"time","text":"时间"});
        	data.push({"id":"force","text":"权重"});
        	data.push({"id":"transCount","text":"转载量"});
        	var selectConfigData = []; 
			if($.isArray(selectConfig)){//数组模式
				selectConfigData =selectConfig; 
			}else{
				selectConfigData.push(selectConfig);
			}
			for(var j=0;j<selectConfigData.length;j++){
				var selectObj = selectConfigData[j];
				_this._commonselect(selectObj.id, '排序', data,selectObj.callback);
			}
        },
        /*译文下拉*/
        initTranSelect:function(selectConfig){
        	var _this = this;
        	var data = [];
        	data.push({"id":"tran","text":"译文"});
        	data.push({"id":"onlyTran","text":"仅显示译文"});
        	data.push({"id":"onlyText","text":"仅显示原文"});
        	data.push({"id":"tranAndText","text":"显示译文和原文"});
        	var selectConfigData = []; 
        	if($.isArray(selectConfig)){//数组模式
        		selectConfigData =selectConfig; 
        	}else{
        		selectConfigData.push(selectConfig);
        	}
        	for(var j=0;j<selectConfigData.length;j++){
        		var selectObj = selectConfigData[j];
        		_this._commonselect(selectObj.id, '译文', data,selectObj.callback);
        	}
        },
        
        /*情感下拉*/
        initFeelSelect:function(selectConfig){
        	var _this = this;
        	var data = [];
        	data.push({"id":"face","text":"正面"});
        	data.push({"id":"neutral","text":"中性"});
        	data.push({"id":"negative","text":"负面"});
        	var selectConfigData = []; 
        	if($.isArray(selectConfig)){//数组模式
        		selectConfigData =selectConfig; 
        	}else{
        		selectConfigData.push(selectConfig);
        	}
        	for(var j=0;j<selectConfigData.length;j++){
        		var selectObj = selectConfigData[j];
        		_this._commonselect(selectObj.id, '情感', data,selectObj.callback);
        	}
        },
        
        
        /*生成通用下拉列表*/
        _commonselect:function(id,text,data,callback){
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
					html.push('<li data-val="'+obj.id+'" data-text="'+obj.text+'">'+obj.text+'</li>'); 	
				}
        	}
			html.push('</ul>'); 
			html.push('</div>'); 
			html.push('</p>'); 
			var selectObj = $("#"+id);
			selectObj.html(html.join(""));
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
        	html.push('<li data-val="0">时间不限</li>');                                        
        	html.push('<li data-val="1">一天内</li>');
        	html.push('<li data-val="2">一周内</li>');
        	html.push('<li data-val="3">一月内</li>');
        	html.push('<li class="dal-list">');
        	html.push('<p>自定义</p>');
        	html.push('<p>');
        	html.push('<span>从');
        	html.push('<input id="'+id+'_begin_temp" ');
        	var t = "'#F{$dp.$D(\\'"+id+"_end_temp\\')||\\'%y-%M-%d\\'}'";
        	html.push('  onfocus="WdatePicker({maxDate:'+t+',dateFmt:\'yyyy-MM-dd\',readOnly:true});"');
        	html.push('type="input" class="int-text date-input"/></span>');
        	html.push('</p>');
        	html.push('<p>');
        	html.push('<span>到');
        	html.push('<input id="'+id+'_end_temp" onfocus="WdatePicker({dateFmt:\'yyyy-MM-dd\',readOnly:true,maxDate:\'%y-%M-%d\'});" type="input" class="int-text date-input"/></span>');
        	html.push('</p>');
        	html.push('<p><input id="'+id+'_submit_time_temp" type="button" class="btn btn-date" value="确定"/></p>');
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
			html.push('<p id="'+id+'-label">媒体<i class="icon iconfont">&#xe659;</i></p>');
			html.push('<input id="'+id+'-store" type="hidden" value=""/>');
			html.push('<div class="select-dropdown-show" id="'+id+'-show"  style="display:none;">');
			html.push('<input id="'+id+'-in" type="text" class="int-text ret-input"  placeholder="搜索媒体"  />');
			html.push('<input id="'+id+'-btn" type="button" class="btn ret-btn" value="确定" />');
			html.push('</div>');
			$("#"+id).html(html.join(""));
			this.autocompleteDic(id+'-in',id+'-store');
			$('#'+id+'-btn').click(function(event){
				event.stopImmediatePropagation();
				$('#'+id+'-show').hide();
				var name = $('#'+id+'-in').val();
				if(name==""){
					$('#'+id+'-label').html('媒体'+'<i class="icon iconfont">&#xe659;</i>');
					$('#'+id+'-store').val("");
				}else{
					$('#'+id+'-label').html(name+'<i class="icon iconfont">&#xe659;</i>');
				}
				var value = $('#'+id+'-store').val();
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

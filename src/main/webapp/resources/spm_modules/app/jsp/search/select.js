define('app/jsp/search/select', function (require, exports, module) {
    'use strict';
    var $=require('jquery');
	require("echarts/echarts.min");
	require("select2/select2.min");
	require("select2/select2.css");
	require("select2/select2_locale_zh-CN");
	require("jquery-autocomplete/jquery.autocomplete");
	require("jquery-autocomplete/jquery.autocomplete.css");
	var  Base = require('arale-base/1.2.0/base');
    var   AjaxController = require('opt-ajax/1.0.0/index');
    
    var ajaxController = new AjaxController();
    
    var SelectUtil = Base.extend({
        //重写父类
        setup: function () {
        	SelectUtil.superclass.setup.call(this); 
        },
        initOrgSelect:function(selectIds){
        
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
					var options = "<option value='-1'>省份</option>";
					for(var i=0;i<data.length;i++){
						options = options + "<option value='" + data[i].code + "'>"+data[i].name+"</option>";
					}
					
					if(options!=""){
						var sid=null;
						for(var j=0;j<selectIds.length;j++){
							sid ="#"+selectIds[j];
							$(sid).html(options);
							$(sid).select2({"val":"-1"});
						}
					}
					
				}
        	    
        	});
        },
        initLanguageSelect:function(selectIds){
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
					var options = "<option value=''>语言</option>";
					for(var i=0;i<data.length;i++){
						options = options + "<option value='" + data[i].srcValue + "'>"+data[i].name+"</option>";
					}
					if(options!=""){
						for(var j=0;j<selectIds.length;j++){
							$("#"+selectIds[j]).html(options);
						}
					}
					
				}
        	    
        	});
        },
        initDicSelect:function(selectIds){
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
					var options = "<option value=''>影响力</option>";
					for(var i=0;i<data.length;i++){
						options = options + "<option value='" + data[i].dicValue + "'>"+data[i].dicName+"</option>";
					}
					if(options!=""){
						for(var j=0;j<selectIds.length;j++){
							$("#"+selectIds[j]).html(options);
						}
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
        	ele.select2({
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
        	});  
        }
        
    });

    module.exports = SelectUtil;
});

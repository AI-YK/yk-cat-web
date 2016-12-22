define('app/jsp/search/select', function (require, exports, module) {
    'use strict';
    var $=require('jquery');
	require("echarts/echarts.min");
	require("select2/select2.min");
	require("jquery-autocomplete/jquery.autocomplete.min");
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
					var options = "<option value='-1'>全部</option>";
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
					var options = "<option value=''>全部</option>";
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
					var options = "<option value=''>全部</option>";
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
        autocompleteDic:function(input,type){
        	var url = _base + "/common/getDic?type="+type;
        	$('#'+input).autocomplete({
        	    serviceUrl: url,
        	    onSelect: function (suggestion) {
        	        
        	    },
        	    formatResult: function (suggestion, currentValue) {
        	    	
        	    }
        	});
        }
        
    });

    module.exports = SelectUtil;
});

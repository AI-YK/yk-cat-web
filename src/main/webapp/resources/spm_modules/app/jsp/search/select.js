define('app/jsp/search/select', function (require, exports, module) {
    'use strict';
    var $=require('jquery');
	require("echarts/echarts.min");
	var  Base = require('arale-base/1.2.0/base');
    var   AjaxController = require('opt-ajax/1.0.0/index');
    
    var ajaxController = new AjaxController();
    
    var SelectUtil = Base.extend({
        //重写父类
        setup: function () {
        	SelectUtil.superclass.setup.call(this); 
        },
        initOrgSelect(selectIds){
        
        	var url = _base +"/common/getQueryAreaOrEconomicOrganizations";
        	var param={};
        	param.language="zh",
        	param.type="3",
        	param.dicValue="",
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: url,
				data: param,
				success:function(rs){
					var data = rs.data;
					var options = "";
					for(var i=0;i<data.length;i++){
						options = options + "<option value='" + data[i].dicValue + "'>"+data[i].dicName+"</option>";
					}
					
					if(options!=""){
						for(var j=0;j<selectIds.length;j++){
							$("#"+selectIds[j]).append(options);
						}
					}
					
				}
        	    
        	});
        },
        initLanguageSelect(selectIds){
        	var url = _base +"/common/getQueryInfoLanguage";
        	var param={};
        	param.language="zh",
        	param.languageType="0",
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: url,
				data: param,
				success:function(rs){
					var data = rs.data;
					var options = "";
					for(var i=0;i<data.length;i++){
						options = options + "<option value='" + data[i].srcValue + "'>"+data[i].name+"</option>";
					}
					if(options!=""){
						for(var j=0;j<selectIds.length;j++){
							$("#"+selectIds[j]).append(options);
						}
					}
					
				}
        	    
        	});
        },
        initDicSelect(selectIds){
        	var url = _base +"/common/getDicByTypeAndLanguage";
        	var param={};
        	param.language="zh",
        	param.type="SJYYXL",
        	ajaxController.ajax({
        		type: "post",
				processing: false,
				message: "保存数据中，请等待...",
				url: url,
				data: param,
				success:function(rs){
					var data = rs.data;
					var options = "";
					for(var i=0;i<data.length;i++){
						options = options + "<option value='" + data[i].dicValue + "'>"+data[i].dicName+"</option>";
					}
					if(options!=""){
						for(var j=0;j<selectIds.length;j++){
							$("#"+selectIds[j]).append(options);
						}
					}
					
				}
        	    
        	});
        }
        
    });

    module.exports = SelectUtil;
});

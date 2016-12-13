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
					for(var i=0;i<rs.length;i++){
						options = options + "<option value='" + rs[i].dicValue + "'>"+rs[i].dicName+"</option>";
					}
					for(var j=0;i<selectIds.length;j++){
						$("#"+selectIds[j]).html(options);
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
					for(var i=0;i<rs.length;i++){
						options = options + "<option value='" + rs[i].srcValue + "'>"+rs[i].language+"</option>";
					}
					for(var j=0;i<selectIds.length;j++){
						$("#"+selectIds[j]).html(options);
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
					for(var i=0;i<rs.length;i++){
						options = options + "<option value='" + rs[i].dicValue + "'>"+rs[i].dicName+"</option>";
					}
					for(var j=0;i<selectIds.length;j++){
						$("#"+selectIds[j]).html(options);
					}
				}
        	    
        	});
        }
        
    });

    module.exports = SelectUtil;
});

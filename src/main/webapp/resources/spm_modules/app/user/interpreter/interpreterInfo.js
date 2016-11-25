define('app/user/interpreter/interpreterInfo', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
	Events = require('arale-events/1.2.0/events'),
    Widget = require('arale-widget/1.2.0/widget'),
    Dialog = require("optDialog/src/dialog"),
    AjaxController = require('opt-ajax/1.0.0/index');
	require("ckeditor/ckeditor.js")
    require("jsviews/jsrender.min");
    require("jsviews/jsviews.min");
    require("app/util/jsviews-ext");
    
    require("opt-paging/aiopt.pagination");
    require("twbs-pagination/jquery.twbsPagination.min");
    
    require("jquery-validation/1.15.1/jquery.validate");
	require("app/util/aiopt-validate-ext");
    
	require("my97DatePicker/WdatePicker");
	
	require("app/user/ajaxfileupload");
	
    var SendMessageUtil = require("app/util/sendMessage");
    
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();

    //定义页面组件类
    var InterPreterInfoPager = Widget.extend({
    	//属性，使用时由类的构造函数传入
    	attrs: {
    	},
    	Statics: {
    		DEFAULT_PAGE_SIZE: 10
    	},
    	//事件代理
    	events: {
			//保存数据
			//"click #saveBtn":"_saveCostPrice",
    		//"change [id='uploadImage']":"_uploadImage",
    		"click [id='saveButton']":"_saveInterpreterInfo",
    		
        },
        //重写父类
    	setup: function () {
    		InterPreterInfoPager.superclass.setup.call(this);
    		var formValidator=this._initValidate();
    		$(":input").bind("focusout",function(){
				formValidator.element(this);
			});
    	},
    	_saveInterpreterInfo:function(){
    		alert("ddd");
		},
    	_initValidate:function(){
    		var formValidator=$("#dataForm").validate({
    			rules: {
    				//productCatName: "required",
    				userName: {
    					required:true,
    					maxlength:16,
    					minlength:6,
    					commonText:true,
    					regexp: /^[a-z0-9A-Z]\w{5,15}$/
    					},
    				nickName: {
    					required:true,
    					maxlength:10,
    					minlength:3,
    					},
    			    fullName:{
    			    	required:false,
    					maxlength:50,
    			    },
    			    QQ:{
    			    	required:false,
    					maxlength:10,
    					digits:true,
    			    },
    				serialNumber: {
    					required: true,
    					digits:true,
    					min:1,
    					max:100
    				},
    				isChild: {
    					required: true
    				},
    				startDate:{
    					required: true,
    					isDate: true,
    					maxDate: $("#endDate").val()
    				},
    				fee:{
    					required: true,
    					moneyNumber: true
    				},
    				mynum:{
    					required: true,
    					amount: [8,3]
    				}
    				,
    				idno:{
    					required: true,
    					idcard: true
    				}
    			},
    			messages: {
    				userName: {
    					required:"请输入用户名称",
    					maxlength:"最大长度不能超过{0}",
    					minlength:"最小长度不能小于{0}"
    					},
    				nickName: {
    					required:"请输入昵称信息",
    					maxlength:"最大长度不能超过{0}",
    				},
    				fullName:{
    					maxlength:"最大长度不能超过{0}",
    				},
    				QQ:{
    					digits: "只能输入数字",
    					maxlength:"最大长度不能超过{0}"
    				},
    				startDate:{
    					required: "请输入开始日期"     						
    				}
    			},
    			
    			
    		});
    		
    		return formValidator;
    	}
    })
    module.exports = InterPreterInfoPager
});
function uploadImg11(uploadImgFile){
	
	var image = $("#uploadImg").val();
	if(!/\.(gif|jpg|png|jpeg|bmp|GIF|JPG|PNG|JPEG|BMP)$/.test(image)){
		$("#uploadImgErrMsg").show();
		$("#uploadImgText").show();
		$("#uploadImgText").text('文件格式不对，只允许上传gif、jpg、png、GIF、JPG、PNG');
		$("#uploadImgFlag").val("0");
		return false;
	}else if(document.getElementById("uploadImg").files[0].size>5*1024*1024){
		$("#uploadImgErrMsg").show();
		$("#uploadImgText").show();
		$("#uploadImgText").text('文档太大，不能超过5M');
		$("#uploadImgFlag").val("0");
		return false;
	}else{
		$("#uploadImgErrMsg").hide();
		$("#uploadImgText").hide();
		$("#uploadImgText").text('');
		$("#uploadImgFlag").val("1");
	}
	
	 $.ajaxFileUpload({  
         url:_base+"/interpreter/uploadImage",  
         secureuri:false,  
         fileElementId:uploadImgFile,//file标签的id  
         dataType: "text",//返回数据的类型  
         data:{uploadImgFile:uploadImgFile},//一同上传的数据  
         success: function (data, status) {
        	 var jsonData = JSON.parse(data);
        	if(jsonData.isTrue==true){
        		document.getElementById("portraitFileId").src=jsonData.url;
        	 }
         },
         error: function (data, status, e) {  
             alert(e);  
         }
     }); 
	}


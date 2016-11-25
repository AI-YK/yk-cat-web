define('app/jsp/user/interpreter/interpreterInfo', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
    Widget = require('arale-widget/1.2.0/widget'),
    Dialog = require("optDialog/src/dialog"),
    Paging = require('paging/0.0.1/paging-debug'),
    Uploader = require('arale-upload/1.2.0/index'),
    AjaxController = require('opt-ajax/1.0.0/index'),
    Calendar = require('arale-calendar/1.1.2/index');
    
    require("jsviews/jsrender.min");
    require("jsviews/jsviews.min");
    require("bootstrap-paginator/bootstrap-paginator.min");
    require("app/util/jsviews-ext");
    require("opt-paging/aiopt.pagination");
    require("twbs-pagination/jquery.twbsPagination.min");
    
    require("jquery-validation/1.15.1/jquery.validate");
	require("app/util/aiopt-validate-ext");
    
	require("my97DatePicker/WdatePicker");
	
	require("app/jsp/user/ajaxfileupload");
	
    var SendMessageUtil = require("app/util/sendMessage");
    
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    var showMsg = function(msg){
    	var d = Dialog({
			content:msg,
			icon:'fail',
			okValue: interpreterInfoMsg.showOkValueMsg,
			title: interpreterInfoMsg.showTitleMsg,
			ok:function(){
				d.close();
			}
		});
		d.show();
    };
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
    		"click [id='saveButton']":"_saveInterpreterInfo",
    		"blur [id='nickname']":"_checkNickNameValue",
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
    	    var formValidator=this._initValidate();
			formValidator.form();
			var uploadImgFlag = $("#uploadImgFlag").val();
			var nickNameFlag = $("#nickNameFlag").val();
			if(!$("#dataForm").valid()){
				return false;
			}else{
             ajaxController.ajax({
					type:"post",
    				url:_base+"/p/interpreter/saveInfo",
    				data:{
    					'userName':$("#userName").val(),
						'fullName':$("#fullName").val(),
						'nickname':$("#nickname").val(),
						'sex':$("input[name='sex']:checked").val(),
						'birthdayTmp':$("#startTime").val(),
						'qq':$("#qq").val(),
						'portraitId':$("#portraitId").val(),
						'originalNickname':originalNickname
    				},
    		        success: function(json) {
    		        	if(!json.data){
    		        		showMsg(json.statusInfo);
    		        	}
    		          }
    				});
			
			}
		},
		_checkNickNameValue:function(){
			var nickname =  $("#nickname").val();
			if(originalNickname==nickname){//昵称未改变无需校验
				return;
			}
			ajaxController.ajax({
				type:"post",
				url:_base+"/p/interpreter/checkNickName",
				data:{
					'nickName':nickname
				},
		        success: function(json) {
		        	 if(!json.data){
		        		 $("#nickNameErrMsg").show().html("<span>"+json.statusInfo+"</span>");
		        	 }else{
		        		 $("#nickNameErrMsg").hide().html(""); 
		        	 }
		          }
				});
		},
    	_initValidate:function(){
    		var formValidator=$("#dataForm").validate({
    			rules: {
    				//productCatName: "required",
    				userName: {
    					required:true,
    					maxlength:16,
    					minlength:6,
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
    			    qq:{
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
    				},
    				address:{
    					required:false,
    					maxlength:100,
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
    				qq:{
    					digits: "只能输入数字",
    					maxlength:"最大长度不能超过{0}"
    				},
    				address:{
    					maxlength:"最大长度不能超过{0}",
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
function uploadPortraitImg(uploadImgFile){
	
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
         url:_base+"/p/interpreter/uploadImage",  
         secureuri:false,  
         fileElementId:uploadImgFile,//file标签的id  
         dataType: "text",//返回数据的类型  
         data:{uploadImgFile:uploadImgFile},//一同上传的数据  
         success: function (data, status) {
        	 var jsonData = JSON.parse(data);
        	if(jsonData.isTrue==true){
        		document.getElementById("portraitFileId").src=jsonData.url;
        		$("#portraitId").val(jsonData.idpsId);
        	 }
         },
         error: function (data, status, e) {  
             alert(e);  
         }
     }); 
	}


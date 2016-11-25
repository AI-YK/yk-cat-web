define('app/jsp/order/createOralOrder', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
	    Widget = require('arale-widget/1.2.0/widget'),
	    AjaxController = require('opt-ajax/1.0.0/index');
    require("jsviews/jsrender.min");

    require("jquery-validation/1.15.1/jquery.validate");
	require("app/util/aiopt-validate-ext");
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
	
    var SendMessageUtil = require("app/util/sendMessage");
    
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    
    var textOrderAddPager = Widget.extend({
    	Implements:SendMessageUtil,
    	//属性，使用时由类的构造函数传入
    	attrs: {
    		clickId:""
    	},
    	
    	//事件代理
    	events: {
			"click #recharge-popo":"_addOralOrderTemp",
			"click #submitOrder": "_addOralOrder",
			"click #toCreateOrder":"_toCreateOrder",
			"click #saveContact":"_saveContact",
			"click #editContact":"_editContactDiv",
			"click #globalRome": "_setPattern",
            },
            
    	//重写父类
    	setup: function () {
    		textOrderAddPager.superclass.setup.call(this);
    		
    		//初始化国际化
			$.i18n.properties({//加载资浏览器语言对应的资源文件
				name: ["orderInfo"], //资源文件名称，可以是数组
				path: _i18n_res, //资源文件路径
				mode: 'both',
				language: currentLan,
			});
    		
    		this._globalRome();
    		
			var formValidator=this._initValidate();
			$(":input").bind("focusout",function(){
				formValidator.element(this);
			});
    	},
        	
        _initValidate:function(){
        	var formValidator=$("#oralOrderForm").validate({
        		errorPlacement: function(error, element) {
					if (element.is(":checkbox")) {
						error.appendTo(element.parent().parent().parent());
					} else {
						error.insertAfter(element);
					}
						
				},
				highlight: function(element, errorClass) {
					
				}, 
				unhighlight: function(element, errorClass) {
					
				} ,
				errorClass:"x-label",
				showErrors:function(errorMap,errorList) {
					$('ul li p label').remove()//删除所有隐藏的li p label标签
					this.defaultShowErrors();
					$('ul li p label').each(function (index,element) {
						if (index > 0)
							element.remove();
					});
				},
    			rules: {
    				transSubject: {
    					required:true,
    					maxlength:15
    					},
    					duad: 'required',
    					interpretationType: 'required',
    					begin_time:{
        					required: true,
        					date: true,
        					maxDate: $("#endDate").val()
        				},
        				end_time:{
        					required: true,
        					date:true,
        				},
        				meetingAmount:{
        					required: true,
        					digits:true,
        					min:1,
        					max:100
        				},
        				interpreterNum:{
        					required: true,
        					digits:true,
        					min:1,
        					max:100
        				},
        				isAgree: {
        					required: true,
        				},
        				contactName: {
        					required:true,
        					maxlength:15
        				},
        				phoneNum: {
        					required:true,
        				},
        				email: {
        					required:true,
        					email:true
        				}
    			},
    			messages: {
    				transSubject: {
    					required: $.i18n.prop('order.place.error.subject'), //"请填写翻译主题",
    					maxlength: $.i18n.prop('order.place.error.Maximum') //"最大长度不能超过{0}"
    				},
    				duad: {
    					required: $.i18n.prop('order.place.error.lan')//"请选择语言"
    				},
    				interpretationType: {
    					required: $.i18n.prop('order.place.error.interType') //"请选择口译类型"
    				},
    				begin_time: {
    					required: $.i18n.prop('order.place.error.startTime') //"请选择开始时间"   
    				},
    				end_time: {
    					required: $.i18n.prop('order.place.error.endTime') //"请选择结束时间"
    				},
    				meetingAmount: {
    					required: $.i18n.prop('order.place.error.meetNum'),//"请输入会议场数",
    					digits: $.i18n.prop('order.place.error.integer'),//"请输入整数",
    					min: $.i18n.prop('order.place.error.min'),//"最小值为{0}",
    					max: $.i18n.prop('order.place.error.max')//"最大值为{0}"
    				},
    				interpreterNum: {
    					required: $.i18n.prop('order.place.error.interNum'),//"请输入译员数量",
    					digits: $.i18n.prop('order.place.error.integer'),//"请输入整数",
    					min: $.i18n.prop('order.place.error.min'),//"最小值为{0}",
    					max: $.i18n.prop('order.place.error.max')//"最大值为{0}"
    				},
    				isAgree: {
    					required: $.i18n.prop('order.place.error.contentConsis')//"请阅读并同意翻译协议",
    				},
    				contactName: {
    					required: $.i18n.prop('order.place.error.name')//"请输入姓名",
    				},
    				phoneNum: {
    					required: $.i18n.prop('order.place.error.phone'),//"请输入手机号",
    					pattern: $.i18n.prop('order.place.error.phone1')//"请输入正确的手机号"
    				},
    				email: {
    					required: $.i18n.prop('order.place.error.email'),//"请输入邮箱",
    					email: $.i18n.prop('order.place.error.email1')//"请输入正确的邮箱"
    				}
    			}
    		});
    		
    		return formValidator;
        },
            
    	//提交文本订单
        _addOralOrderTemp:function(){
        	var _this= this;
        	var formValidator=_this._initValidate();
			formValidator.form();
			if(!$("#oralOrderForm").valid()){
				//alert('验证不通过！！！！！');
				return;
			}
			
			$("#oralOrderPage").hide();
			
			var tableFirstLine = $("#oralOrderTable tbody tr").eq(0).find("td")
			tableFirstLine.eq(0).html($("#transSubject").val());
			
			var duadList =[];    
			$('input[name="duad"]:checked').each(function(){    
				duadList.push($(this).parent().next().html()+" ");    
			});
			tableFirstLine.eq(1).html(duadList);
			
			var interpretationTypeList = [];
			$('input[name="interpretationType"]:checked').each(function(){    
				interpretationTypeList.push($(this).parent().next().html()+" ");    
			});  
			tableFirstLine.eq(2).html(interpretationTypeList);
			tableFirstLine.eq(3).html($("#begin_time").val());
			tableFirstLine.eq(4).html($("#end_time").val());
			tableFirstLine.eq(5).html($("#place").find("option:selected").text());
			tableFirstLine.eq(6).html($("#meetingAmount").val());
			
			$("#contactPage").show();
		},
		
		//提交文本订单
        _addOralOrder:function(){
        	var _this= this;
        	var formValidator=_this._initValidate();
			formValidator.form();
			if(!$("#oralOrderForm").valid()){
				//alert('验证不通过！！！！！');
				return;
			}
			
			var baseInfo = {};
			var productInfo = {};
			var contactInfo = {};
			var feeInfo = {};
			if (currentLan.indexOf("zh") >= 0) { 
				baseInfo.orderType = "0";
				baseInfo.flag = "0";
				baseInfo.chlId = "0";
				
				feeInfo.currencyUnit = "1";	//"1：RMB 2：$"
			}else {
				baseInfo.orderType = "1";
				baseInfo.flag = "1";//业务标识 0:国内业务 1：国际业务 ??
				baseInfo.chlId = "1";
				
				feeInfo.currencyUnit = "2";	//"1：RMB 2：$"
			}
			
			baseInfo.orderType = "1"; //??
			baseInfo.busiType = 1;
		
			baseInfo.translateType = "2"; //2：口译翻译"
			baseInfo.translateName = $("#transSubject").val();
			baseInfo.orderLevel = "1"; //??
			baseInfo.subFlag = "1"; // "0：系统自动报价 1：人工报价"
			baseInfo.userType = "10"; //"10：个人 11：企业 12：代理人 "??
			baseInfo.userId = "10086";
			//baseInfo.corporaId
			//baseInfo.accountId
			var today = new Date();
			baseInfo.timeZone = 'GMT+'+today.stdTimezoneOffset()/60;
			
			productInfo.meetingSum = $("#meetingAmount").val();
			productInfo.interperGen = $("#gender").find("option:selected").val(); 
			productInfo.meetingAddress = $("#place").find("option:selected").val(); 
			productInfo.interperSum = $("#interpreterNum").val(); 
			productInfo.startTime = new Date($("#begin_time").val()).getTime(); 
			productInfo.endTime = new Date($("#end_time").val()).getTime(); 
			
			var translateLevelInfoList = [];
			$('input[name="interpretationType"]:checked').each(function(){   
				var tempObj = {};
				tempObj.translateLevel =$(this).val();
				translateLevelInfoList.push(tempObj);    
			});
			productInfo.translateLevelInfoList = translateLevelInfoList;
			
			var duadList =[];    
			$('input[name="duad"]:checked').each(function(){   
				var tempObj = {};
				tempObj.languagePairId =$(this).val();
				tempObj.languagePairName = $(this).attr('duadZh');
				tempObj.languageNameEn = $(this).attr('duadEn');
				duadList.push(tempObj);    
			});
			productInfo.languagePairInfoList = duadList;
			
			if ( $("#urgentOrder").is(':checked') ) 
				productInfo.isUrgent = "Y";
			else
				productInfo.isUrgent = "N";
			
//			contactInfo.contactName =  $("#editContactDiv").find('p').eq(0).html();
//			contactInfo.contactTel  =  $("#editContactDiv").find('p').eq(1).html();
//			contactInfo.contactEmail  =  $("#editContactDiv").find('p').eq(2).html();
			contactInfo.contactName=$("#saveContactDiv").find('input').eq(0).val();
	    	contactInfo.contactTel="+"+$("#saveContactDiv").find('option:selected').val()+" "+$("#saveContactDiv").find('input').eq(1).val();
			contactInfo.contactEmail=$("#saveContactDiv").find('input').eq(2).val();
			
			ajaxController.ajax({
				type: "post",
				processing: true,
				message: "保存中，请等待...",
				url: _base + "/order/save",
				data: {
					baseInfo: JSON.stringify(baseInfo),
					productInfo: JSON.stringify(productInfo),
					contactInfo: JSON.stringify(contactInfo),
					feeInfo: JSON.stringify(feeInfo)
				},
				success: function (data) {
					if ("OK" === data.statusInfo) {
						//跳到 待报价页面
						window.location.href =  _base + "/p/customer/order/orderOffer";
					} else { //用户未登陆
						window.location.href = _base + "/p/order/orderSubmit?orderType=oral";
					}
				}
			});
        },
        
		_toCreateOrder:function(){
			$("#oralOrderPage").show();
			$("#contactPage").hide();
		},
		
		_saveContact:function() {
			var _this= this;
			var formValidator=_this._initValidate();
			formValidator.form();
			if(!$("#oralOrderForm").valid()){
				//alert('验证不通过！！！！！');
				return;
			}

			$("#saveContactDiv").hide();
			
			$("#editContactDiv").find('p').eq(0).html($("#saveContactDiv").find('input').eq(0).val());
			$("#editContactDiv").find('p').eq(1).html("+"+$("#saveContactDiv").find('option:selected').val()+" "+$("#saveContactDiv").find('input').eq(1).val());
			$("#editContactDiv").find('p').eq(2).html($("#saveContactDiv").find('input').eq(2).val());
			
			$("#editContactDiv").show();
		},
		
		_editContactDiv:function() {
			$("#saveContactDiv").show();
			$("#editContactDiv").hide();
		},
		
		_globalRome:function() {
			$.getJSON(_base + "/resources/spm_modules/app/jsp/order/globalRome.json",function(data){
				$.each(data.row,function(rowIndex,row){
					var selObj = $("#globalRome");
					var text;
					if (currentLan.indexOf("zh") >= 0) {
						text = row["COUNTRY_NAME_CN"];
					} else {
						text = row["COUNTRY_NAME_EN"];
					}
					
					selObj.append("<option value='"+row["COUNTRY_CODE"]+"' exp='" +row["REGULAR_EXPRESSION"]+"'>"+text+"   +"+row["COUNTRY_CODE"]+"</option>");
				});
			});
		},
		
		//根据国家设置号码匹配规则
		_setPattern:function() {
			var pattern = $("#saveContactDiv").find('option:selected').attr('exp');
			$("#phoneNum").attr('pattern',pattern);
		}
    });
    
    module.exports = textOrderAddPager;
});
define('app/jsp/order/createTextOrder', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
	    Widget = require('arale-widget/1.2.0/widget'),
	    AjaxController = require('opt-ajax/1.0.0/index');
    require("jsviews/jsrender.min");

    require("jquery-validation/1.15.1/jquery.validate");
	require("app/util/aiopt-validate-ext");
	require('jquery-i18n/1.2.2/jquery.i18n.properties.min');	
    var CountWordsUtil = require("app/util/countWords");
    
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    var textOrderAddPager = Widget.extend({
    	//属性，使用时由类的构造函数传入
    	attrs: {
    		clickId:""
    	},
    	
    	//事件代理
    	events: {
			"click #recharge-popo":"_addTextOrderTemp",
			"click #submitOrder":"_addTextOrder",
			"click #toCreateOrder":"_toCreateOrder",
			"click #urgentOrder":"_transPrice",
			"click .dropdown":"_transPrice",
			"click #saveContact":"_saveContact",
			"click #editContact":"_editContactDiv",
			"click #fy-btn": "_uploadFile",
			"click #fy-btn1": "_inputText",
			"click #globalRome": "_setPattern",
			"click #clear-btn": "_clearText",
			"keyup #translateContent": "_clearControl",
			"change #selectFormatConv": "_formatControl",
           	},
            
    	//重写父类
    	setup: function () {
    		textOrderAddPager.superclass.setup.call(this);
			//初始化国际化
			$.i18n.properties({//加载资浏览器语言对应的资源文件
				name: ["orderInfo"], //资源文件名称，可以是数组
				path: _i18n_res, //资源文件路径
				mode: 'both',
				language: currentLan
			});

			var formValidator=this._initValidate();
			$(":input").bind("focusout",function(){
				formValidator.element(this);
			});

			this._transGrade();
			this._transPrice();
			this._globalRome();
			this._initPage();
    	},
    	
        _initValidate:function(){
        	var _this = this;
        	var formValidator=$("#textOrderForm").validate({
        		onkeyup:false,
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
					this.defaultShowErrors();
					$('ul li p label').each(function (index,element) {
						if (index > 0)
							element.remove();
					});
					//$('ul li p label').remove();//删除所有隐藏的li p label标签
				},
    			rules: {
    				translateContent: {
    					required:true,
    					maxlength:2000,
    					remote:{                                          //验证检查语言
    			　　               type:"POST",
    			　　               url:  _base + "/translateLan",         
    			　　               data:{
	    			　　                text: function(){return $("#translateContent").val();}
    			　　               },
    			　　               dataType:'json',
    			　　               dataFilter: function (data) {//判断控制器返回的内容
    			　　            	  	data = jQuery.parseJSON(data);
    			　　
    			　　            	  	var sourlan;
    			　　           		$("#selectDuad").find('option').each(function() {
	    			　　               		var val = $(this).val();
	    			　　               		if (val ==  $(".dropdown .selected").attr('value')) {
	    			　　               			var selected = $(this);
	    			　　               			sourlan = selected.attr("sourceCode");
	    			　　               			return false;
	    			　　               		}
	    			　　           	});
    			　　
			                     if (sourlan == data.data) {
			                         return true;   
			                     } else {
			                         return false;
			                     }
    			           }
    			　　        }
    				},
    				isAgree: {
    					required:true,
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
    				translateContent: {
    					required: $.i18n.prop('order.place.error.translation'), //"请输入翻译内容",
    					maxlength: $.i18n.prop('order.place.error.Maximum'),//"最大长度不能超过{0}",
    					remote:  $.i18n.prop('order.place.error.contentConsis')//"您输入的内容和源语言不一致"
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
		_addTextOrderTemp:function(){
			var _this= this;
        	var formValidator=_this._initValidate();
			formValidator.form();
			if(!$("#textOrderForm").valid()){
				//alert('验证不通过！！！！！');
				return;
			}

			//查询报价
			this._queryAutoOffer();
			
			var tableFirstLine = $("#textOrderTable tbody tr").eq(0).find("td");
			if(_this._isTextTransType()) {//快速翻译
				tableFirstLine.eq(0).html($("#translateContent").val().substring(0,15));
			} else {
				tableFirstLine.eq(0).html($("#fileList").find('li:first').text().substring(0,15));
			}

			tableFirstLine.eq(1).html($("#selectDuad").find("option:selected").text());
			tableFirstLine.eq(2).html($("#selectPurpose").find("option:selected").text());
			tableFirstLine.eq(3).html($("#selectDomain").find("option:selected").text());
			tableFirstLine.eq(4).html($(".none-ml.current").find("p").eq(0).html());
			
			$("#textOrderPage").hide();
			$("#contactPage").css('display','block'); 
		},

		//判断是否是文档翻译类型
		_isTextTransType:function () {
			if ($("#fy2").css("display") == "none")
				return true
			else
				return false;
		},

		_addTextOrder:function(){
			var _this= this;
        	var formValidator=_this._initValidate();
			formValidator.form();
			if(!$("#textOrderForm").valid()){
				//alert('验证不通过！！！！！');
				return;
			}
			
			//计算字数
			var transContent = $("#translateContent").val();
			var totalWords = CountWordsUtil.count($("#translateContent").val());
			
			var baseInfo = {};
			var productInfo = {};
			var contactInfo = {};
			var feeInfo = {};
			//区分国内外订单
			if (currentLan.indexOf("zh") >= 0) { 
				baseInfo.orderType = "0";
				baseInfo.flag = "0";
				baseInfo.chlId = "0";
			}else {
				baseInfo.orderType = "1";
				baseInfo.flag = "1";//业务标识 0:国内业务 1：国际业务 ??
				baseInfo.chlId = "1";
			}
			
			baseInfo.orderType = "1"; //??
			baseInfo.busiType = 1;
			if(!_this._isTextTransType()) { //文档类型
				baseInfo.translateType = "1"
				
				var fileInfoList = [];
				//判断是文档翻译
				$("li[fileid]").each(function(){   
					var tempObj = {};
					tempObj.fileName = $(this).text();
					tempObj.fileSaveId = $(this).attr("fileid");
					fileInfoList.push(tempObj);    
				});
				productInfo.fileInfoList = fileInfoList;
				
				baseInfo.subFlag = "1";
				productInfo.needTranslateInfo = JSON.stringify(fileInfoList);
				productInfo.translateInfo = "";
				baseInfo.translateName = $("#fileList").find('li:first').text().substring(0,15);
			} else {
				baseInfo.translateType = "0"; //0：快速翻译 1：文档翻译 
				baseInfo.subFlag = "0"; // "0：系统自动报价 1：人工报价"
				productInfo.needTranslateInfo = $("#translateContent").val();
				productInfo.translateInfo = "";
				baseInfo.translateName = $("#translateContent").val().substring(0,15);
			}
			baseInfo.orderLevel = "1";
			baseInfo.userType = "10"; //"10：个人 11：企业 12：代理人 "??
			baseInfo.remark = $("#remark").val(); //备注 给译员留言
			baseInfo.orderDesc=$("#inputFormatConv").val();//格式转换
			//baseInfo.corporaId
			//baseInfo.accountId
				
			var today = new Date();
			baseInfo.timeZone = 'GMT+'+(0 - today.stdTimezoneOffset()/60);
			
			productInfo.translateSum = totalWords;
			productInfo.useCode = "222";
			productInfo.fieldCode = "222";

			if($("#selectAddedSer").val() == 1)
				productInfo.isSetType = "Y"; //是否排版
			else
				productInfo.isSetType = "N";

			if ( $("#urgentOrder").is(':checked') )
				productInfo.isUrgent = "Y";
			else 
				productInfo.isUrgent = "N";
				
			var duadList =[];    
			var tempLanPairObj = {};
			tempLanPairObj.languagePairId = $(".dropdown .selected").attr('value');
			$("#selectDuad").find('option').each(function() {
        		var val = $(this).val();
        		if (val ==  $(".dropdown .selected").attr('value')) {
        			var selected = $(this);

    				tempLanPairObj.languagePairName = selected.attr('sourceCn') + "→" + selected.attr('targertCn');
        			tempLanPairObj.languageNameEn = selected.attr('sourceEn') + "→" + selected.attr('targertEn');
        			return false;
        		}
			});

			duadList.push(tempLanPairObj);
			productInfo.languagePairInfoList = duadList;
			
			var translateLevelInfoList=[];
			var tempTranlevObj={};
			tempTranlevObj.translateLevel = $("#transGrade ul.current").first().attr('name');
			translateLevelInfoList.push(tempTranlevObj);
			
			productInfo.translateLevelInfoList = translateLevelInfoList;
			
//			contactInfo.contactName =  $("#editContactDiv").find('p').eq(0).html();
//			contactInfo.contactTel  =  $("#editContactDiv").find('p').eq(1).html();
//			contactInfo.contactEmail  =  $("#editContactDiv").find('p').eq(2).html();
			contactInfo.contactName=$("#saveContactDiv").find('input').eq(0).val();
		    contactInfo.contactTel="+"+$("#saveContactDiv").find('option:selected').val()+" "+$("#saveContactDiv").find('input').eq(1).val();
			contactInfo.contactEmail=$("#saveContactDiv").find('input').eq(2).val();
			
			feeInfo.totalFee = 100000;
			feeInfo.currencyUnit = $("#selectDuad").find("option:selected").val();
			
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
						if(baseInfo.translateType == 0) { //文字翻译
							window.location.href =  _base + "/p/customer/order/payOrder/"+data.data;
						} else {
							//文档翻译，跳到待报价页面
							window.location.href =  _base + "/p/customer/order/orderOffer";
						}
					} else { //用户未登陆
						window.location.href = _base + "/p/order/orderSubmit?orderType=text";
					}
				}
			});
		},
		
		//查询报价
		_queryAutoOffer:function() {
			var _this = this;
			if(!_this._isTextTransType()) { //文档类型
				$("#price").html("<span>"+ $.i18n.prop("order.place.waitPrice")+ "</span>");
				return;
			}
			
		   var isUrgent;
	    	if ( $("#urgentOrder").is(':checked') ) 
	    		isUrgent = true;
			else 
				isUrgent = false;
		    
			ajaxController.ajax({
				type: "post",
				url: _base + "/order/queryAutoOffer",
				data: {
					wordNum: CountWordsUtil.count($("#translateContent").val()),
					duadId: $("#selectDuad").find("option:selected").val(),
					purposeId: $("#selectPurpose").find("option:selected").val(),
				    language: $(".dropdown .selected").attr('value'),
				    translateLevel: $(".none-ml.current").attr('name'),
				    isUrgent: isUrgent,
				},
				success: function (data) {
					if ("1" === data.statusCode) {
						var unit;
						if (data.data.currencyUnit === "1")
							unit = $.i18n.prop('order.yuan');
						else
							unit = $.i18n.prop('order.meiyuan');
						$("#price").html("<span>"+ _this.fmoney(data.data.price/1000,2) +"</span>"+ unit);
					}
				}
			});
		},
		
		_toCreateOrder:function(){
			$("#textOrderPage").show();
			$("#contactPage").hide();
		},
		
		//翻译等级改变，翻译速度改变
		_transGrade:function() {
			var _this = this;
			$("#transGrade ul").each(function () {
				$(this).click(function () {
					
				
					$(this).children('label').remove();
					$(this).addClass("current");
					$(this).append('<label></label>');
					
					$($(this).siblings()).removeClass("current");
					$($(this).siblings()).children('label').remove();
					
					_this._getSpeed();
				});
			}) 
		},
		
		//初始化页面后做的操作
		_initPage:function() {
			//改变上传div高度
			$("#selectFile").children("div:last").css("height", '70px');
			$("#fy2").hide();
			
		},
		
		//语言对改变，价格改变,翻译速度改变
		_transPrice:function() {
			var _this = this;
			
        	$("#selectDuad").find('option').each(function() {
        		var val = $(this).val();
        		if (val ==  $(".dropdown .selected").attr('value')) {
        			var selected = $(this);

        			var ordinary = selected.attr("ordinary");
        			var ordinaryUrgent = selected.attr("ordinaryUrgent");
        			var professional = selected.attr("professional");
        			var professionalUrgent = selected.attr("professionalUrgent");
        			var publish = selected.attr("publish");
        			var publishUrgent = selected.attr("publishUrgent");
        			
        			if ($("#urgentOrder").is(':checked') ) {
        				$("#stanPrice").html(professionalUrgent);
        				$("#proPrice").html(professionalUrgent);
        				$("#pubPrice").html(publishUrgent);
        			} else {
        				$("#stanPrice").html(ordinary);
        				$("#proPrice").html(professional);
        				$("#pubPrice").html(publish);
        			}
        			
        		}
            });
		
			this._getSpeed();
		},
		
		//获取翻译速度价格
		_getSpeed:function() {
			var ordSpeed = 2;
			var ordSpeedUrgent = 1;
			var proSpeed = 3;
			var proSpeedUrgent = 2;
			var pubSpeed = 4;
			var pubSpeedUrgent = 3;
			
			if ($("#urgentOrder").is(':checked')) {
				if($(".none-ml.current").attr('name') == 0) {
					$("#speedValue").html(ordSpeedUrgent);
				} else if($(".none-ml.current").attr('name') == 1) {
					$("#speedValue").html(proSpeedUrgent);
				} else {
					$("#speedValue").html(pubSpeedUrgent);
				}
			} else {
				if($(".none-ml.current").attr('name') == 0) {
					$("#speedValue").html(ordSpeed);
				} else if($(".none-ml.current").attr('name') == 1) {
					$("#speedValue").html(proSpeed);
				} else {
					$("#speedValue").html(pubSpeed);
				}
			}
		},
		
		_saveContact:function() {
			var _this= this;
        	var formValidator=_this._initValidate();
			formValidator.form();
			if(!$("#textOrderForm").valid()){
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
		
		//文字输入，js控制
		_inputText:function() {
			$("#selectAddedSer").val(2);
			$("#selectFormatConv").val(2);
			$("#selectAddedSer").attr("disabled",true);
			$("#selectFormatConv").attr("disabled",true);
			$("#inputFormatConv").hide();
			$("#inputFormatConv").val("");
		},
	
		//上传文档，js控制
		_uploadFile:function() {
			$("#selectAddedSer").attr("disabled",false);
			$("#selectFormatConv").attr("disabled",false);
		},
		
		//根据国家设置号码匹配规则
		_setPattern:function() {
			var pattern = $("#saveContactDiv").find('option:selected').attr('exp');
			$("#phoneNum").attr('pattern',pattern);
		},
		
		//清空输入文字
		_clearText:function() {
			$("#translateContent").val("");
			$("#clear-btn").hide();
		},

		//清空 按钮出现控制
		_clearControl:function() {
			var variable = $("#translateContent").val();
			if (variable !== '')  {
				$("#clear-btn").show();
			} else {
				$("#clear-btn").hide();
			}
		},

		//input 格式转换控制
		_formatControl:function() {
			if (1 == $("#selectFormatConv").val()) {
				$("#inputFormatConv").show();
			} else {
				$("#inputFormatConv").hide();
				$("#inputFormatConv").val("");
			}
				
			
		},

		//格式化金钱
		fmoney:function (s, n) {
			var result = '0.00';
			if(isNaN(s) || !s){
				return result;
			}

			n = n > 0 && n <= 20 ? n : 2;
			s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
			var l = s.split(".")[0].split("").reverse(),
			r = s.split(".")[1];
			var t = "";
			for(var i = 0; i < l.length; i ++ ){
				t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
			}
			return t.split("").reverse().join("") + "." + r;
		}
    });
    
    module.exports = textOrderAddPager;
});
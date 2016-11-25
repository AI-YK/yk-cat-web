<%@ page import="com.ai.paas.ipaas.i18n.ZoneContextHolder" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    
	<%@ include file="/inc/inc.jsp" %>
	<!-- 我的订单 -->
	<title><spring:message code="myOrder.myorders"/></title>
	<script src="${_base}/resources/spm_modules/my97DatePicker/WdatePicker.js"></script>
</head>
<body>
	<!--头部-->
	<%@ include file="/inc/userTopMenu.jsp" %>
  <!--二级主体-->
  <!--外侧背景-->
  <div class="cloud-container">
  <!--内侧内容区域-->
  <div class="cloud-wrapper">
  	<!--左侧菜单-->
	  <%@include file="/inc/leftmenu.jsp" %>
  	<!--右侧内容-->
  	<!--右侧大块-->
  	<div class="right-wrapper">	
  		<!--右侧第二块-->
  		<div class="right-list mt-0">
  			<div class="oder-table">
  				<ul>
  					<!-- 全部订单 -->
  					<li><a href="javaScript:void(0);" name="displayFlagA" class="current"  value=""><spring:message code="myOrder.allOrder"/></a></li>
  					<!-- 待支付 -->
  					<li><a href="javaScript:void(0);" name="displayFlagA" value="11"><spring:message code="myOrder.status.tobePay"/>(${UnPaidCount})</a></li>
  					<!-- 翻译中 -->
  					<li><a href="javaScript:void(0);" name="displayFlagA" value="23"><spring:message code="myOrder.status.translating"/>(${TranslateCount})</a></li>
  					<!-- 待确认 -->
  					<li><a href="javaScript:void(0);" name="displayFlagA" value="50"><spring:message code="myOrder.status.tobeConfirm"/>(${UnConfirmCount})</a></li>
  					<!-- 待评价 -->
  					<!--  <li><a href="javaScript:void(0);" name="displayFlagA" value="52"><spring:message code="myOrder.status.tobeEvaluated"/>(${UnEvaluateCount})</a></li>-->	
  				</ul>
  			</div>
  			<div id="table-da1">

                <input id="displayFlagP" name="displayFlagP" hidden="" type="text" value="${displayFlag}">
  			<form id="orderQuery">
  			<input id="userId" name="userId" hidden="" type="text" value="${userId}">
  			<div class="oder-form-lable mt-20">
  				<ul>
  					<li class="mb-20">
  						<!-- 订单状态 -->
  						<p><spring:message code="myOrder.orderStatus"/></p> 
  						<p>
	  						<select class="select select-small radius" name="displayFlag" id="displayFlag">
	  							<!-- 全部 -->
	  							<option value="" selected="selected"><spring:message code="myOrder.allOrder"/></option>
	  							<!-- 待支付 -->
	  							<option value="11"><spring:message code="myOrder.status.tobePay"/></option>
  								<!--待报价 -->
	  							<option value="13"><spring:message code="myOrder.status.tobeQuoted"/></option>
	  							<!-- 翻译中 -->
	  							<option value="23"><spring:message code="myOrder.status.translating"/></option>
	  							<!-- 待确认 -->
	  							<option value="50"><spring:message code="myOrder.status.tobeConfirm"/></option>
	  							<!-- 待评价 -->
	  							<!--  <option value="52"><spring:message code="myOrder.status.tobeEvaluated"/></option>-->
	  							<!-- 完成 -->
	  							<option value="90"><spring:message code="myOrder.status.Completed"/></option>
	  							<!-- 已取消-->
	  							<option value="91"><spring:message code="myOrder.status.Cancelled"/></option>
	  							<!-- 已退款 -->
	  							<option value="92"><spring:message code="myOrder.status.Refunded"/></option>
	  						</select>
  						</p>
  						<!-- 订单时间 -->
  						<p><spring:message code="myOrder.orderTime"/></p>
  						<p><input id="orderTimeStart" name="orderTimeStartStr" type="text" class="int-text int-small radius" onClick="WdatePicker({dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'orderTimeEnd\')}'})" readonly="readonly"></p>
  						<p>－</p>
  						<p><input id="orderTimeEnd" name="orderTimeEndStr" type="text" class="int-text int-small radius" onClick="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'orderTimeStart\')}',onpicked:function(dp){endtime();}})" readonly="readonly"></p>
  						<!-- 翻译内容 -->
  						<p><spring:message code="myOrder.translatingContent"/></p>
  						<p>
  							<select class="select select-small radius" name="translateType" id="translateType">
  								<!-- 全部 -->
  								<option value="" selected="selected"><spring:message code="myOrder.translatingContent.all"/></option>
  								<!-- 文字 -->
  								<option value="0"><spring:message code="myOrder.translatingContent.words"/></option>
  								<!-- 附件 -->
  								<option value="1"><spring:message code="myOrder.translatingContent.Enclosure"/></option>
  								<!-- 口译 -->
  								<option value="2"><spring:message code="myOrder.translatingContent.Oralinterpretation"/></option>	
  							
  							</select>
  						</p>
  						<p class="iocn-oder"><input id="translateName" name="translateName" type="text" maxlength='50' class="int-text int-medium radius pr-30">
  						<i id="submitQuery" href="javaScript:void(0)" class=" icon-search"></i>
  						</p>
  					</li>
  					<!--  暂时只有个人
  					<li>
  						<p><input type="checkbox" class="checkbox-n" checked="checked">个人</p>
  						<p><input type="checkbox" class="checkbox-n">企业</p>
  					</li>
  					-->
  				</ul>
  			</div>
  			</form>
  			</div>
  			
  			<div class="right-list-table">
  				<table class="table table-hover table-bg">
                    <thead>
                       <tr>
                       		<!-- 订单主题 -->
                            <th width="16.666%"><spring:message code="myOrder.SubjectOrder"/></th>
                            <!--  下单人-->
                            <!--  <th width="16.666%"><spring:message code="myOrder.Orderedby"/></th>-->
                            <!--  翻译语言-->
                            <th width="16.666%"><spring:message code="myOrder.translatingContent"/></th>
                            <!--  金额（元）-->
                            <th width="16.666%"><spring:message code="myOrder.Amount"/></th>
                            <!--  状态 -->
                            <th width="16.666%"><spring:message code="myOrder.Status"/></th>
                             <!--  操作 -->
                            <th width="16.666%"><spring:message code="myOrder.Operate"/></th>
                      </tr>
               		</thead>
            	</table>
  			</div>
  			<!-- 订单列表 -->
  			<div class="right-list-table" id="searchOrderData">
  			</div>
  			<!-- 订单列表结束 -->
  			<div id="showMessageDiv"></div>
  			<!--分页-->
  			<div class="biu-paging paging-large">
			 	<ul id="pagination-ul">
			  	</ul>
			</div>
			<!--分页结束-->
  		</div>
  	</div>
  </div><!--内侧内容区域-->
  </div> <!--外侧背景-->

</body>
<%@ include file="/inc/incJs.jsp" %>
<script id="searchOrderTemple" type="text/template">
<table class="table  table-bg tb-border mb-20">
	<thead>
	<tr>
 		<th colspan="6" class="text-l">
 			<div class="table-thdiv">
				<p>{{:~timestampToDate('yyyy-MM-dd hh:mm:ss',orderTime,'<%=ZoneContextHolder.getZone()%>')}}</p>
 				<p name="orderId"><spring:message code="myOrder.Ordernumber"/>：<span>{{:orderId}}</span></p>
				{{if  displayFlag == '11'}}
					<!-- 剩余2天23小时59分钟  待支付-->
    				<p class="right"><spring:message
                                    code="myOrder.Remaining" arguments="{{:payTakeDays}},{{:payTakeHours}},{{:payTakeMinutes}}"/></p>
				{{/if}}
				{{if  displayFlag == '50'}}
					<!-- 剩余2天23小时59分钟   待确认-->
    				<p class="right"><spring:message
                                    code="myOrder.Remaining" arguments="{{:confirmTakeDays}},{{:confirmTakeHours}},{{:confirmTakeMinutes}}"/></p>
				{{/if}}
      		</div>
    	</th>
	</tr>
    </thead>
    <tbody>
		<input type="hidden" name="orderId" value="{{:orderId}}">
		<input type="hidden" name="unit" value="{{:currencyUnit}}">
		<input type="hidden" name="displayFlag" value="{{:displayFlag}}">
		<tr class="width-16" displayFlag="{{:displayFlag}}">
            <td name="translateName" orderId="{{:orderId}}">{{:translateName}}</td>
           <!-- <td>{{:userName}}</td>-->
  			<td>
			  	{{for ordProdExtendList}}
					{{if #parent.parent.data.currentLan == 'zh_CN'}}
						{{:langungePairChName}}
					{{else}}
						{{:langungePairEnName}}
					{{/if}}
				{{/for}}
			</td>

			{{if displayFlag == '13'}}
				<td>————</td>
			{{else }}
           		 <td>
					{{if  currencyUnit == '1'}}
						<spring:message code="myOrder.rmbSame" arguments="{{:~liToYuan(totalFee)}}" />
					{{else }}
						<spring:message code="myOrder.dollarSame" arguments="{{:~liToYuan(totalFee)}}" />
					{{/if}}
				</td>
			{{/if}}

			{{if  displayFlag == '11'}}
				<!-- 待支付  -->
				<td><spring:message code="myOrder.status.tobePay"/></td>
			 	<td>
					<!-- 支 付  -->
            		<input type="button" name="payOrder" class="btn biu-btn btn-auto-25 btn-green radius10" value="<spring:message code="myOrder.Pay"/>">
            		<!-- 取 消 -->
					<input type="button" name="cancelOrder" class="btn biu-btn btn-auto-25 btn-red radius10"  value="<spring:message code="myOrder.Cancell"/>">
           		</td>
			{{else displayFlag == '13'}}
				<!-- 待报价  -->
				<td><spring:message code="myOrder.status.tobeQuoted"/></td>
				<td>
					<!-- 取 消 -->
					<input name="cancelOrder" class="btn biu-btn btn-auto-25 btn-red radius10" type="button" value="<spring:message code="myOrder.Cancell"/>">
				</td>
			{{else displayFlag == '23'}}
				<!-- 翻译中  -->
				<td><spring:message code="myOrder.status.translating"/></td>
				<td></td>
			{{else displayFlag == '50'}}
				<!-- 待确认  -->
				<td><spring:message code="myOrder.status.tobeConfirm"/></td>
				<td>
					<!-- 确认 -->
					<input name="confirmOrder" class="btn biu-btn btn-auto-25 btn-green radius10" type="button" value="<spring:message code="myOrder.confirm"/>">
					<!-- 延时确认-->
					<--<input name="lateConfirmOrder" class="btn biu-btn btn-auto-25 btn-red radius10" type="button" value="<spring:message code="myOrder.Delayed"/>">-->
				</td>
			{{else displayFlag == '52'}}
				<!-- 待评价  -->
				<td><spring:message code="myOrder.status.tobeEvaluated"/></td>
				<td></td>
				<!-- 
				<td>待评价</td>
				<td>
					<input class="btn biu-btn btn-auto-25 btn-green radius10" type="button" value="评 价">
				</td>
				-->
			{{else displayFlag == '90'}}
				<!-- 完成  -->
				<td><spring:message code="myOrder.status.Completed"/></td>
				<td></td>
				<!-- 
				td>完成</td>
				<td>
					<input class="btn biu-btn btn-auto-25 btn-green radius10" type="button" value="评 价">
				</td>
				-->
			{{else displayFlag == '91'}}	
				<!-- 关闭  -->
				<td><spring:message code="myOrder.status.Close"/></td>
				<td></td>
			{{else }}
				<!-- 已退款  -->
				<td><spring:message code="myOrder.status.Refunded"/></td>
				<td></td>
			{{/if}}
		 </tr>
    </tbody>
</table>
</script>
<script type="text/javascript">
var pager;
var current = "orderList";
(function () {
	seajs.use('app/jsp/customerOrder/orderList', function(oderListPage) {
		pager = new oderListPage({element : document.body});
		pager.render();
	});
	   
		//最上面 状态改变 触发
	   $("a[name='displayFlagA']").click(function() {
		   $("a[name='displayFlagA']").removeClass('current');
		   $(this).addClass('current');
		   pager._orderListByType($(this).attr('value'));
	   });
		
	   
	   //订单详情 点击订单标题
       $('#searchOrderData').delegate("td[name='translateName']", 'click', function () {
       	  window.location.href="${_base}/p/customer/order/"+$(this).parent().parent().find("input[name='orderId']").val();
       });
	   
       //订单详情 点击订单号
       $('#searchOrderData').delegate("p[name='orderId']", 'click', function () {
       	  window.location.href="${_base}/p/customer/order/"+$(this).parents("table").find("input[name='orderId']").val();
       });
       
       <%-- 支付订单 --%>
       $("#searchOrderData").delegate("input[name='payOrder']","click",function(){
       		window.location.href="${_base}/p/customer/order/payOrder/"
       		+ $(this).parent().parent().parent().find("input[name='orderId']").val()
       		+ "?unit="+$(this).parent().parent().parent().find("input[name='unit']").val();
       });
       
       <%-- 取消订单 --%>
       $("#searchOrderData").delegate("input[name='cancelOrder']","click",function(){
    		pager._cancelOrder($(this).parent().parent().parent().find("input[name='orderId']").val());
       });
       
       <%-- 确认订单 --%>
       $("#confirmOrder").delegate("input[name='confirmOrder']","click",function(){
       		pager._confirm($(this).parents("table").find("input[name='orderId']").val());
       });
       <%-- 延迟确认订单 --%>
       //$("#confirmOrder").delegate("input[name='lateConfirmOrder']","click",function(){
       //});
      
})();

//选择结束时间触发
function endtime() {
	pager._orderList();
}

</script>

</html>

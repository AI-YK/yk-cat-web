<%@page import="com.ai.paas.ipaas.i18n.ZoneContextHolder"%>
<%@ page language="java" contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title></title>
<%@ include file="/inc/inc.jsp"%>
<%@ include file="/inc/incJs.jsp"%>
</head>
<body>
	<!--头部-->
	<%@ include file="/inc/userTopMenu.jsp"%>
	<!--二级主体-->
	<!--外侧背景-->
	<div class="cloud-container">
		<!--内侧内容区域-->
		<div class="cloud-wrapper">
			<!--左侧菜单-->
			<div class="left-subnav">
				<%@ include file="/inc/leftmenu.jsp"%>
			</div>
			<!--右侧内容-->
			<!--右侧大块-->
			<div class="right-wrapper">
				<!--右侧第一块-->
				<div class="right-title">
					<div class="right-title-left">
						<div class="right-title-left-tu">
							<img src="${uedroot}/images/icon1.jpg">
						</div>
						<div class="right-title-left-word">
							<ul>
								<li class="word-red" style="cursor:pointer;" onclick="location.reload();">${sessionScope.user_session_key.username}</li>
								<li class="c-red" style="cursor:pointer;" onclick="location.href='${_base}/p/security/seccenter'" id="accLevelInfo"></li>
							</ul>
							<ul>
								<li class="bule"></li>
							</ul>
							<ul class="word-li">
								<li>
									<p><spring:message code="ycaccountcenter.userIndex.balance"/>:</p>
									<p class="red" style="cursor:pointer;" onclick="location.href='${_base}/p/balance/account'"><fmt:formatNumber
											value="${balance/1000}" pattern="#,##0.00#"/></p>
								</li>
								<li style="display: none;">
									<p>:</p>
									<p class="red"></p>
								</li>
							</ul>
						</div>
					</div>
					<div class="right-title-right">
						<p>
							<a href="${_base}/p/customer/order/list/view?displayFlag=11"> <span class="tp1"></span> <span><spring:message code="myOrder.status.tobePay"/><b id="unPaidCount">0</b></span>
							</a>
						</p>
						<p>
							<a href="${_base}/p/customer/order/list/view?displayFlag=23"> <span class="tp2"></span> <span><spring:message code="myOrder.status.translating"/><b id="translateCount">0</b></span>
							</a>
						</p>
						<p>
							<a href="${_base}/p/customer/order/list/view?displayFlag=50"> <span class="tp3"></span> <span><spring:message code="myOrder.status.tobeConfirm"/><b id="unConfirmCount">0</b></span>
							</a>
						</p>
						<p>
							<a href="${_base}/p/customer/order/list/view?displayFlag=52"> <span class="tp4"></span> <span><spring:message code="myOrder.status.tobeEvaluated"/><b id="unEvaluateCount">0</b></span>
							</a>
						</p>
					</div>
				</div>
				<!--右侧第二块-->
				<div class="right-list" id="have_order_container" style="display: none;">
					<div class="right-list-title pb-10 pl-20">
						<p><spring:message code="myOrder.myorders"/></p>
						<p class="right">
							<input type="button" class="btn  btn-od-large btn-blue radius20"
							   onclick="location.href='${_base}/p/customer/order/list/view'"
								value="<spring:message code="myOrder.allOrder"/>">
						</p>
					</div>
					<div class="right-list-table">
						<table class="table table-hover table-bg">
							<thead>
								<tr>
									<th width="16.666%"><spring:message code="myOrder.SubjectOrder"/></th>
									<th order_mode="hide" width="16.666%"><spring:message code="myOrder.Orderedby"/></th>
									<th width="16.666%"><spring:message code="myOrder.translatingContent"/></th>
									<th width="16.666%"><spring:message code="myOrder.Amount"/></th>
									<th width="16.666%"><spring:message code="myOrder.Status"/></th>
									<th width="16.666%"><spring:message code="myOrder.Operate"/></th>
								</tr>
							</thead>
						</table>

					</div>
					<div class="right-list-table" id="order_list">
					</div>
    </div>
    <div class="right-list" id="no_order_container" style="display: none;">
  			<!--没下过订单-->
			<div class="no-order">
				<ul>
					<li><img src="${uedroot}/images/none-d.jpg" /></li>
					<li class="mt-t50"><spring:message code="ycaccountcenter.userIndex.noTaskMsg"/></li>
					<li class="right mt-t50"><input onclick="location.href='${_base}'" type="button"  class="btn border-blue btn-large radius20 blue" value="<spring:message code="home.manual_order_now_btn"/>"></li>
				</ul>
			</div>
			<div class="no-step"><img src="${uedroot}/images/step.jpg" /></div>
	</div>	
			</div>


		</div>

	</div>
	<script id="orderTemple1" type="text/template">
				<table class="table  table-bg tb-border mb-20">
	<thead>
	<tr>
 		<th order_mode_colspan="hide" colspan="6" class="text-l">
 			<div class="table-thdiv">
				<p>{{:~timestampToDate('yyyy-MM-dd hh:mm:ss',orderTime,'<%=ZoneContextHolder.getZone()%>')}}</p>
 				<p name="orderId" style="cursor:pointer;"><spring:message code="myOrder.Ordernumber"/>：<span>{{:orderId}}</span></p>
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
            <td order_mode="hide">{{:userName}}</td>
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
	var userId ="${user_session_key.userId}";
	
	var pager;
	var current ="index";
	(function() {
		seajs.use('app/jsp/user/userIndex', function(userIndexPager) {
			pager = new userIndexPager({
				element : document.body
			});
			pager.render();
		});
		//订单详情 点击订单标题
	       $('#order_list').delegate("td[name='translateName']", 'click', function () {
	       	  window.location.href="${_base}/p/customer/order/"+$(this).parent().parent().find("input[name='orderId']").val();
	       });
		   
	       //订单详情 点击订单号
	       $('#order_list').delegate("p[name='orderId']", 'click', function () {
	       	  window.location.href="${_base}/p/customer/order/"+$(this).parents("table").find("input[name='orderId']").val();
	       });
	       
	       <%-- 支付订单 --%>
	       $("#order_list").delegate("input[name='payOrder']","click",function(){
	       		window.location.href="${_base}/p/customer/order/payOrder/"
	       		+ $(this).parent().parent().parent().find("input[name='orderId']").val()
	       		+ "?unit="+$(this).parent().parent().parent().find("input[name='unit']").val();
	       });
	       
	       <%-- 取消订单 --%>
	       $("#order_list").delegate("input[name='cancelOrder']","click",function(){
	    		pager._cancelOrder($(this).parent().parent().parent().find("input[name='orderId']").val());
	       });
	       
	       <%-- 确认订单 --%>
	       $("#order_list").delegate("input[name='confirmOrder']","click",function(){
	       		pager._confirm($(this).parents("table").find("input[name='orderId']").val());
	       });
	})();
	$(function(){
		var securitylevel = "${securitylevel}";
		var accLevelInfo = $("#accLevelInfo");
		if(parseInt(securitylevel) < 60)
		{
			accLevelInfo.html('<spring:message code="ycaccountcenter.acc.level.danger"/>');
		}
		if(parseInt(securitylevel) >= 60 && parseInt(securitylevel) < 100)
		{
			accLevelInfo.html('<spring:message code="ycaccountcenter.acc.level.warn"/>');
		}
		if(parseInt(securitylevel) == 100)
		{
			accLevelInfo.html('<spring:message code="ycaccountcenter.acc.level.safe"/>');
		}
	});
	</script>
</body>
</html>

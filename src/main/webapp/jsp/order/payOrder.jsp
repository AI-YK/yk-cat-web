<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<%@ include file="/inc/inc.jsp" %>
	<title><spring:message code="pay.order.payment"/></title>
</head>
<body>
<!--弹出-->
<div class="eject-big">
	<div class="prompt-samll" id="rechargepop">
		<%--支付--%>
		<div class="prompt-samll-title"><spring:message code="pay.order.payment"/> </div>
		<!--确认删除-->
		<div class="prompt-samll-confirm">
			<ul>
				<%--请输入支付密码，完成订单支付--%>
				<li><spring:message code="pay.order.passwd.prompt"/></li>
				<li><input id="payPass" type="password" class="int-text int-large radius" maxlength="16"></li>
				<li class="eject-btn">
					<%--确 定--%>
					<input type="button" id="completed" class="btn btn-green btn-120 radius20" value="<spring:message code="pay.order.ok"/>">
					<%--取 消--%>
					<input type="button" id="close-completed" class="btn border-green btn-120 radius20" value="<spring:message code="pay.order.cancell"/>">
				</li>
			</ul>
		</div>
	</div>
	<div class="mask" id="eject-mask"></div>
</div>
<!--/弹出结束-->
<!--面包屑导航-->
	<%@ include file="/inc/topHead.jsp" %>
	<%@ include file="/inc/topMenu.jsp" %>
	
		<!--主体-->
		<div class="placeorder-container">
		<div class="placeorder-wrapper">
			<!--步骤-->
			<div class="place-bj">
				<div class="place-step">
					<!--进行的状态-->
			 		<div class="place-step-none adopt-wathet-bj">
			 			<ul>
			 				<li class="circle"><i class="icon iconfont">&#xe60f;</i></li>
							<%--翻译内容--%>
			 				<li class="word"><spring:message code="order.translateLan"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-wathet-bj">
			 			<ul>
			 				<li class="circle"><i class="icon iconfont">&#xe60d;</i></li>
							<%--填写联系方式--%>
			 				<li class="word"><spring:message code="order.contact"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-blue-bj">
			 			<ul>
			 				<li class="circle"><i class="icon iconfont">&#xe608;</i></li>
							<%--支付--%>
			 				<li class="word"><spring:message code="order.payment"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
				</div>
			</div>
			<!--白色背景-->
			<div class="white-bj">
				<div class="right-list-title pb-10 ">
					<%--支付订单--%>
  					<p><spring:message code="pay.order.title"/></p>
  				</div>
				<form id="toPayForm" method="post" action="${_base}/p/customer/order/gotoPay">
					<input type="hidden" name="orderId" value="${orderId}">
					<input type="hidden" name="orderAmount" value="${orderFee.totalFee}">
					<input type="hidden" name="currencyUnit" value="${orderFee.currencyUnit}">
					<input type="hidden" id="payType" name="payOrgCode">
					<%--当前地址--%>
					<input type="hidden" id="merchantUrl" name="merchantUrl">
					<%--订单类型 目前只支持用户--%>
					<input type="hidden" name="orderType" value="1">
				</form>

  				<div class="selection-select single-select mt-20">
					<ul class="mb-40">
						<li class="none-ml">
							<%--订单号--%>
							<p class="word"><spring:message code="pay.order.order.id"/></p>
							<p class="line-40">${orderId}</p>
						</li>
						<%--<li>--%>
							<%--<p class="word">订单性质</p>--%>
							<%--<p><select class="select select-250 radius"><option>企业订单（8折）</option></select></p>--%>
						<%--</li>--%>
						<%--<li>--%>
							<%--<p class="word">优惠券</p>--%>
							<%--<p><select class="select select-300 radius"><option>50元优惠券；有效期至2016-11-04</option></select></p>--%>
						<%--</li>--%>
						<%--<li>--%>
							<%--<p class="word">会场数量</p>--%>
							<%--<p><input type="text" class="int-text int-in-300 radius" placeholder="请输入会场数量"></p>--%>
						<%--</li>--%>
					</ul>
					<c:set var="isEn" value="<%=Locale.US.equals(response.getLocale())%>"/>
					<ul>
						<li class="none-ml line-none line-20">
							<%--订单金额--%>
							<p class="word"><spring:message code="pay.order.amount.title"/></p>
							<%--金额--%>
							<p><spring:message code="pay.order.amount.order"/>：<c:if
									test="${orderFee.currencyUnit == '2'}">$</c:if><c:if
									test="${orderFee.currencyUnit == '1' && isEn==true}">¥</c:if><fmt:formatNumber
									value="${orderFee.totalFee/1000}" pattern="#,##0.00#"/><c:if
									test="${orderFee.currencyUnit == '1' && isEn!=true}">元</c:if></p>
						</li>
						<%--<li class="line-none line-20">--%>
						<%--<p class="word">&nbsp;</p>--%>
						<%--<p>已优惠：50.00元</p>--%>
						<%--</li>--%>
						<li class="ml-100 line-none">
							<p class="word">&nbsp;</p>
							<%--应付金额--%>
							<p><spring:message code="pay.order.payable.order"/>：<c:if
									test="${orderFee.currencyUnit == '2'}">$</c:if><c:if
									test="${orderFee.currencyUnit == '1' && isEn==true}">¥</c:if><span><fmt:formatNumber
									value="${orderFee.totalFee/1000}" pattern="#,##0.00#"/></span><c:if
									test="${orderFee.currencyUnit == '1'&& isEn!=true}">元</c:if></p>
						</li>
					</ul>
				</div>
			</div>
			<div class="white-bj">
				<div class="right-list-title pb-10 ">
					<%--选择支付方式--%>
					<p><spring:message code="pay.order.pay.method"/></p>
  				</div>
  				<div id="payment-method" class="payment-method mt-30">
					<c:choose>
						<%--人民币--%>
						<c:when test="${orderFee.currencyUnit == '1'}">
							<%--银联--%>
							<ul payType="YL" class="current">
								<li class="union"></li>
								<label><i class="icon iconfont">&#xe617;</i></label>
							</ul>
							<%--支付宝--%>
							<ul payType="ZFB">
								<li class="zhifb"></li>
							</ul>
							<%--使用余额--%>
							<c:if test="${balanceInfo!=null}">
							<ul payType="YE" class="none-ml">
								<li class="payment-balance">
									<%--账户余额--%>
									<p><spring:message code="pay.order.account.balance"/></p>
							<%--支付余额--%>
									<p class="word"><spring:message code="pay.order.pay.balance" />：<c:if
											test="${isEn==true}">¥</c:if><fmt:formatNumber
											value="${balanceInfo.balance/1000}" pattern="#,##0.00#"/><c:if
											test="${isEn!=true}">元</c:if></p>
								</li>
							</ul>
							<%--余额支付--%>
							<form id="yePayForm" method="post" action="${_base}/p/customer/order/payOrder/balance">
								<input type="hidden" name="externalId" value="${orderId}">
								<input type="hidden" name="accountId" value="${balanceInfo.accountId}">
								<input type="hidden" id="balancePass" name="password" />
								<input type="hidden" name="totalAmount" value="${orderFee.totalFee}">
								<input type="hidden" name="currencyUnit" value="${orderFee.currencyUnit}">
									<%--订单类型 目前只支持用户--%>
								<input type="hidden" name="orderType" value="1">
							</form>
							</c:if>
						</c:when>
						<%--美元--%>
						<c:when test="${orderFee.currencyUnit == '2'}">
							<%--paypal--%>
							<ul payType="PP" class="current">
								<li class="paypal"></li>
								<label><i class="icon iconfont">&#xe617;</i></label>
							</ul>
						</c:when>
						<%--<ul class="current">--%>
						<%--<li>翻译后付费</li>--%>
						<%--<label><i class="icon iconfont">&#xe617;</i></label>--%>
						<%--</ul>--%>
					</c:choose>
  				</div>
  				<div class="payment-btn">
					<%--人民币订单,且余额不足--%>
					<c:if test="${orderFee.currencyUnit == '1'&&needPay==true}">
  					<ul>
						<%--余额不足，可先--%>
  						<li><spring:message code="pay.order.balance.insufficient"/>
							<input type="button" id="depositBtn" class="btn radius20 border-blue btn-80 ml-10" value="<spring:message code="pay.order.balance.recharge"/>"></li>
  					</ul>
					</c:if>
  				</div>
  			</div>
			<div class="recharge-btn order-btn placeorder-btn ml-0">
				<%--支 付--%>
 				<input type="button" id="recharge-popo" class="btn btn-green btn-xxxlarge radius10" value="<spring:message code="pay.order.payment"/>">
 			</div>

		</div>
		</div>
<!--底部-->
<%@include file="/inc/indexFoot.jsp"%>
</body>
<%@ include file="/inc/incJs.jsp" %>
<script type="text/javascript">
	var needPayPass = "${balanceInfo.payCheck}";
	(function () {
		var pager;
		seajs.use('app/jsp/order/payOrder', function(payOrderPager) {
			pager = new payOrderPager({element : document.body});
			pager.render();
		});
	})();
</script>
</html>

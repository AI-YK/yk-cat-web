<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
   
    <%@ include file="/inc/inc.jsp" %>
    <!-- 订单详细 -->
    <title><spring:message code="myOrder.Orderdetails"/></title>
</head>
<body>

<!--头部-->
<%@include file="/inc/userTopMenu.jsp"%>
<!--二级主体-->
<!--外侧背景-->
<div class="cloud-container">
    <!--内侧内容区域-->
    <div class="cloud-wrapper">
        <!--左侧菜单-->
        <%@include file="/inc/leftmenu.jsp"%>
        <!--右侧内容-->
        <!--右侧大块-->
        <div class="right-wrapper">
        	<input type="hidden" id="orderId" value="${OrderDetails.orderId}">
        	<input type="hidden" id="unit" value="${OrderDetails.orderFee.currencyUnit}">
            <div class="breadcrumb">
            	<!-- 我的订单 -->
                <p><spring:message code="myOrder.myorders"/>></p>
                <!-- 订单号 -->
                <p><spring:message code="myOrder.Ordernumber"/>：${OrderDetails.orderId}</p>
            </div>
           	 <!--订单详细待确认-->
           	 <%@include file="/jsp/customerOrder/orderStep.jsp"%>
            <!--订单table-->
            <div class="confirmation-table mt-20">
                <div class="oder-table">
                    <ul>
                    	<!-- 翻译内容 -->
                        <li><a href="javaScript:void(0);" class="current"><spring:message code="myOrder.translatingContent"/></a></li>
                        <!-- 订单跟踪 -->
                        <li><a href="javaScript:void(0);"><spring:message code="myOrder.Ordertracking"/></a></li>
                    </ul>
                </div>
                
                <!--  口译隐藏 translate1 -->
                <div id="translate1" <c:if test="${OrderDetails.translateType == '2'}"> style="display: none;" </c:if> >
                    <div class="confirmation-list" >
                    	<c:if test="${OrderDetails.translateType == '0'}">
                   	  	<ul>
                   	  		<!-- 原文 文档类型 -->
                   	  		<li class="title"><spring:message code="myOrder.Originaltext"/>:</li>
                   	  			 <!-- 文本类型翻译 更多 -->
	                            <li class="word">${fn:substring(OrderDetails.prod.needTranslateInfo, 0, 150)}
	                            	<span style="display: none;">${fn:substring(OrderDetails.prod.needTranslateInfo, 150, fn:length(OrderDetails.prod.needTranslateInfo))}</span>
	                            	<A name="more" href="javaScript:void(0);">[<spring:message code="myOrder.more"/>]</A></li>
                   	 	</ul>
                    	</c:if>
                    	
                    	<c:if test="${OrderDetails.translateType == '1'}">
	                    	<c:forEach items="${OrderDetails.prodFiles}" var="prodFile" varStatus="status">
	                        <ul>
	                        	<!-- 原文 文档类型-->
	                            <li class="title"><spring:message code="myOrder.Originaltext"/>:</li>
	                            	<!-- 文档类型翻译 -->
	                            		<c:if test="${not empty prodFile.fileName}">
	                            			<li>${prodFile.fileName}</li>
		  									<li class="right mr-5">
		  									<input name="download" fileId="${prodFile.fileSaveId}" fileName="${prodFile.fileName}" type="button" class="btn border-blue-small btn-auto radius20" value="<spring:message code="myOrder.downLoad"/>"></li>
		  								</c:if>
	                        </ul>
		                    </c:forEach>
	                    </c:if>
	                    
	                    <c:if test="${OrderDetails.translateType == '0'}">
	                    <ul class="mt-30">
	                    	<!-- 译文 文本 -->
                            <li class="title"><spring:message code="myOrder.Translatedtext"/>:</li>
                            <!-- 文本类型翻译 更多 -->
                            <li class="word">${fn:substring(OrderDetails.prod.translateInfo, 0, 150)}
	                            <span style="display: none;">${fn:substring(OrderDetails.prod.translateInfo, 150, fn:length(OrderDetails.prod.translateInfo))}</span>
	                            <A name="more" href="javaScript:void(0);">[<spring:message code="myOrder.more"/>]</A></li>
	                    </ul>
	                    </c:if>
	                    
	                   	<c:if test="${OrderDetails.translateType == '1'}">
		                   	<c:forEach items="${OrderDetails.prodFiles}" var="prodFile" varStatus="status">
		                        <ul class="mt-30">
		                        	<!-- 译文 文档-->
		                            <li class="title"><spring:message code="myOrder.Translatedtext"/>:</li>
		                            	<!-- 文档类型翻译 文档list -->
		                            	<c:if test="${not empty prodFile.fileTranslateName}">
		                            		<li>${prodFile.fileTranslateName}</li>
		  								<li class="right mr-5"><input name="download" fileId="${prodFile.fileTranslateId}" fileName="${prodFile.fileTranslateName}" type="button" class="btn border-blue-small btn-auto radius20" value="<spring:message code="myOrder.downLoad"/>"></li>
		                            	</c:if>
		                    	</ul>
	                   		</c:forEach>
                        </c:if>
                    </div>
                </div>
                
                 <!--  口译显示translate2 -->
                <div id="translate2" <c:if test="${OrderDetails.translateType != '2'}"> style="display: none;" </c:if>>
                    <div class="tracking-list">
                    	<!-- 订单轨迹 -->
                        <ul>
                          <c:forEach items="${OrderDetails.orderStateChgs}" var="stateChg" varStatus="status">
                          	  <li  <c:if test="${status.last}"> class="conduct" </c:if>>
                                <p><fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${stateChg.stateChgTime}"/></p>
                                
                                <c:choose>
									<c:when test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>">
										<p class="right">${stateChg.chgDesc}</p>
									</c:when>
									<c:otherwise><p class="right">${stateChg.chgDescEn}</p></c:otherwise>
								</c:choose>
                              </li>
                       	   </c:forEach>
                        </ul>
                    </div>
                </div>
            </div>
            <!--订单内容-->
            <div class="oder-detailed">
                <div class="right-list-title pb-10 pl-20">
                	<!-- 订单详细 -->
                    <p><spring:message code="myOrder.Orderdetails"/></p>
                </div>
                <div class="oder-information">
                	<c:if test="${OrderDetails.translateType != '2'}">
                	<div class="info-list">
                    	<!-- 文本、文档 订单信息-->
                        <span><spring:message code="myOrder.Orderinformation"/></span>
                        <ul>
                             <li>
                             	<!-- 订单号 -->
                                <p class="word"><spring:message code="myOrder.Ordernumber"/>:</p>
                                <p>${OrderDetails.orderId}</p>
                            </li>
                            <li>
                            	<!-- 翻译主题 -->
                                <p class="word"><spring:message code="myOrder.SubjectTrante"/>:</p>
                                <p>${OrderDetails.translateName}</p>
                            </li>
                            <li>
                            	<!-- 翻译语言 -->
                                <p class="word"><spring:message code="myOrder.Language"/>:</p>
                                <p>
                                	<c:forEach items="${OrderDetails.prodExtends}" var="prodExtends">
                                		<c:choose>
											<c:when test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>">${prodExtends.langungePairName}</c:when>
											<c:otherwise>${prodExtends.langungeNameEn}</c:otherwise>
										</c:choose>
                                	</c:forEach>
                                </p>
                            </li>
                            <li>
                            	<!-- 翻译级别 -->
                                <p class="word"><spring:message code="myOrder.Trantegrade"/>:</p>
                                <p>
                                	<!-- 依次是 标准级  专业级  出版级-->
                                	<c:forEach items="${OrderDetails.prodLevels}" var="prodLevels">
                                		<c:if test="${prodLevels.translateLevel == '100210'}"><spring:message code="order.Standard"/></c:if>
                                		<c:if test="${prodLevels.translateLevel == '100220'}"><spring:message code="order.Professional"/></c:if>
                                		<c:if test="${prodLevels.translateLevel == '100230'}"><spring:message code="order.Publishing"/></c:if>
                                	</c:forEach>
                                </p>
                            </li>
                             <li>
                             	<!-- 用途 -->
                                <p class="word"><spring:message code="myOrder.Purpose"/>:</p>
                                <p>
                                	<c:choose>
										<c:when test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>">${OrderDetails.prod.useCn}</c:when>
										<c:otherwise>${OrderDetails.prod.useEn}</c:otherwise>
									</c:choose>
                                </p>
                            </li>
                            <li>
                            	<!-- 领域-->
                                <p class="word"><spring:message code="myOrder.Field"/>:</p>
                                <p>
                                	<c:choose>
										<c:when test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>">${OrderDetails.prod.fieldCn}</c:when>
										<c:otherwise>${OrderDetails.prod.fieldEn}</c:otherwise>
									</c:choose>
                                </p>
                            </li>
                            <li>
                            	<!-- 创建时间-->
                                <p class="word"><spring:message code="myOrder.Creationtime"/>:</p>
                                <p> <fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${OrderDetails.orderTime}"/> </p>
                            </li>
                            <li>
                            	<!-- 预计翻译耗时 -->
                                <p class="word"><spring:message code="myOrder.Estimatedtime"/>:</p>
                                <p><spring:message
                                    code="myOrder.tranteNeedTime" arguments="${OrderDetails.prod.takeDay},${OrderDetails.prod.takeTime}"/></p>
                            </li>
                            <li>
                            	<!-- 其他  -->
                                <p class="word"><spring:message code="myOrder.Others"/>:</p>
                                <!-- 加急;需要排版 -->
                                <p><c:if test="${OrderDetails.prod.isUrgent == '1'}">
                                	<spring:message code="myOrder.Urgent"/>;
                                	</c:if>
                                	<c:if test="${OrderDetails.prod.isSetType == '1'}">
                                	<spring:message code="myOrder.Layout"/>
                                	</c:if>
                                	<c:if test="${not empty OrderDetails.prod.typeDesc}">
		                            		<spring:message code="order.formatConv"/>${OrderDetails.prod.typeDesc}
		                            </c:if>
                                </p>
                            </li>
                            <li class="width-large">
                            	<!-- 需求备注 -->
                                <p class="word"><spring:message code="myOrder.Demandnotes"/>:</p>
                                <p class="p-large">${OrderDetails.remark}</p>
                            </li>
                        </ul>
                    </div>
                	</c:if>
                	
                	<c:if test="${OrderDetails.translateType == '2'}">
                	<div class="info-list">
                    	<!-- 口译 订单信息-->
                        <span><spring:message code="myOrder.Orderinformation"/></span>
                        <ul>
                             <li>
                             	<!-- 订单号 -->
                                <p class="word"><spring:message code="myOrder.Ordernumber"/>:</p>
                                <p>${OrderDetails.orderId}</p>
                            </li>
                            <li>
                            	<!-- 翻译主题 -->
                                <p class="word"><spring:message code="myOrder.SubjectTrante"/>:</p>
                                <p>${OrderDetails.translateName}</p>
                            </li>
                            <li>
                            	<!-- 翻译语言 -->
                                <p class="word"><spring:message code="myOrder.Language"/>:</p>
                                <p>
                                	<c:forEach items="${OrderDetails.prodExtends}" var="prodExtends">
                                		<c:choose>
											<c:when test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>">${prodExtends.langungePairName}</c:when>
											<c:otherwise>${prodExtends.langungeNameEn}</c:otherwise>
										</c:choose>
                                	</c:forEach>
                                </p>
                            </li>
                            <li>
                            	<!-- 翻译级别 -->
                                <p class="word"><spring:message code="myOrder.Trantegrade"/>:</p>
                                <p>
                                	<!-- 依次是  陪同翻译 交替传译 同声翻译 -->
                                	<c:forEach items="${OrderDetails.prodLevels}" var="prodLevels">
                                		<c:if test="${prodLevels.translateLevel == '100110'}"><spring:message code="order.interpretationType1"/></c:if>
                                		<c:if test="${prodLevels.translateLevel == '100120'}"><spring:message code="order.interpretationType2"/></c:if>
                                		<c:if test="${prodLevels.translateLevel == '100130'}"><spring:message code="order.interpretationType3"/></c:if>
                                	</c:forEach>
                                </p>
                            </li>
                             <li>
                             	<!-- 会议开始时间 -->
                                <p class="word"><spring:message code="myOrder.meetStartTime"/>:</p>
                                <p> <fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${OrderDetails.prod.stateTime}"/> </p>
                            </li>
                            <li>
                            	<!-- 会议结束时间-->
                                <p class="word"><spring:message code="myOrder.meetEndTime"/>:</p>
                                <p> <fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${OrderDetails.prod.endTime}"/> </p>
                            </li>
                            <li>
                            	<!-- 创建时间-->
                                <p class="word"><spring:message code="myOrder.Creationtime"/>:</p>
                                <p> <fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${OrderDetails.orderTime}"/> </p>
                            </li>
                            <li>
                            	<!-- 译员数量 -->
                                <p class="word"><spring:message code="myOrder.interpreterNum"/>:</p>
                                <p>${OrderDetails.prod.interperSum}</p>
                            </li>
                             <li>
                            	<!-- 会议地点 -->
                                <p class="word"><spring:message code="myOrder.place"/>:</p>
                              	<p>${OrderDetails.prod.meetingAddress}</p>
                            </li>
                              <li>
                            	<!-- 会场数量 -->
                                <p class="word"><spring:message code="myOrder.venueNum"/>:</p>
                                <p>${OrderDetails.prod.meetingSum}</p>
                            </li>
                             <li>
                            	<!-- 译员性别 -->
                                <p class="word"><spring:message code="myOrder.Gender"/>:</p>
                                <p>${OrderDetails.prod.interperGen}</p>
                            </li>
                            <li class="width-large">
                            	<!-- 需求备注 -->
                                <p class="word"><spring:message code="myOrder.Demandnotes"/>:</p>
                                <p class="p-large">${OrderDetails.remark}</p>
                            </li>
                        </ul>
                    </div>
                	</c:if>
                	
                    <div class="info-list">
                    	<!-- 订单金额 -->
                        <span><spring:message code="myOrder.Amount"/></span>
                        <ul>
                        	<!-- 订单金额 -->
                            <li class="width-large">
                                <p class="word"><spring:message code="myOrder.Amount"/>:</p>
                                <c:choose>
                                	<c:when test="${OrderDetails.displayFlag=='13'}">
                                		<!-- 待报价-->
                                		<p>————</p>
                                	</c:when>
                                	<c:otherwise>
                                		 <p>
                                		 	<c:set var="totalFee"><fmt:formatNumber value="${OrderDetails.orderFee.totalFee/1000}" pattern="#,##0.00#"/></c:set>
		                               		<c:if test="${OrderDetails.orderFee.currencyUnit =='1'}"><spring:message code="myOrder.rmb"  arguments="${totalFee}"/></c:if>
		                               		<c:if test="${OrderDetails.orderFee.currencyUnit =='2'}"><spring:message code="myOrder.dollar" arguments="${totalFee}"/></c:if></p>
                                	</c:otherwise>
                                </c:choose>
                            </li>
                            <!--  
                            <li class="width-large">
                                <p class="word">折扣:</p>
                                <p>9.0折</p>
                            </li>
                            <li class="width-large">
                                <p class="word">优惠码:</p>
                                <p>-</p>
                            </li>
                            -->
                            <li class="width-large">
                                <!-- 优惠券 -->
                                <p class="word"><spring:message code="myOrder.Coupons"/>:</p>
                                <p>
                                	<c:set var="discountFee"><fmt:formatNumber value="${OrderDetails.orderFee.discountFee/1000}" pattern="#,##0.00#"/></c:set>
                               		<c:if test="${OrderDetails.orderFee.currencyUnit =='1'}"><spring:message code="myOrder.rmb"  arguments="${discountFee}"/></c:if>
                               		<c:if test="${OrderDetails.orderFee.currencyUnit =='2'}"><spring:message code="myOrder.dollar"  arguments="${discountFee}"/></c:if></p>
                            </li>
                            <li class="width-large red">
                            	<!-- 实付金额 -->
                                <p class="word"><spring:message code="myOrder.Amountpaid"/>:</p>
                                <p><b>
                                	<c:set var="paidFee"><fmt:formatNumber value="${OrderDetails.orderFee.paidFee/1000}" pattern="#,##0.00#"/></c:set>  
                               		</b><c:if test="${OrderDetails.orderFee.currencyUnit =='1'}"><spring:message code="myOrder.rmb" arguments="${paidFee}" /> </c:if>
                               		<c:if test="${OrderDetails.orderFee.currencyUnit =='2'}"><spring:message code="myOrder.dollar" arguments="${paidFee}"/> </c:if>
                               	</p>
                            </li>
                        </ul>
                    </div>
                    <div class="info-list">
                    	<!-- 联系人信息 -->
                        <span><spring:message code="myOrder.Contact"/></span>
                        <ul>
                            <li class="width-large">
                                <p>${OrderDetails.contacts.contactName}，${OrderDetails.contacts.contactTel}，${OrderDetails.contacts.contactEmail}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="info-list">
                    	<!-- 发票 -->
                        <span><spring:message code="myOrder.Invoice"/></span>
                        <ul>
                            <li class="width-large">
                            	<!-- 发票类型 -->
                                <p class="word"><spring:message code="myOrder.InvoiceType"/>:</p>
                                <!-- 不开发票 -->
                                <p><spring:message code="myOrder.Noinvoice"/></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <!--按钮-->
                <div class="recharge-btn order-btn">
                	<c:choose>
	                	<c:when test="${OrderDetails.displayFlag=='11'}">
	                	<!-- 待支付 -->
	                		<!-- 支付订单 -->
	                		<input id="payOrder" type="button" id="recharge-popo" class="btn btn-green btn-xxxlarge radius10" value="<spring:message code="myOrder.Payorder"/>">
	                	</c:when>
                		<c:when test="${OrderDetails.displayFlag=='13'}">
                		<!-- 待报价 -->
                			<input  class="btn btn-ash btn-xxxlarge radius10" type="button" value="<spring:message code="myOrder.status.tobeQuoted"/>">
                		</c:when>
                		<c:when test="${OrderDetails.displayFlag=='23'}">
                		<!-- 翻译中 -->
                			<input class="btn btn-ash btn-xxxlarge radius10" type="button" value="<spring:message code="myOrder.status.translating"/>">
                		</c:when>
                		<c:when test="${OrderDetails.displayFlag=='50'}">
                		<!-- 待确认 -->
                			<!-- 确认订单 -->
                			<input id="confirmOrder" class="btn btn-green btn-xxxlarge radius10" type="button" value="<spring:message code="myOrder.confirmOrder"/>">
                		</c:when>
                		<c:otherwise>
                		<!-- 已完成 已取消 已退款 待评价-->
                		</c:otherwise>
                	</c:choose>
                </div>

            </div>


        </div>


    </div>

</div>
</body>
<%@ include file="/inc/incJs.jsp" %>
<script type="text/javascript" src="${uedroot}/scripts/modular/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="${uedroot}/scripts/modular/frame.js"></script>
<script type="text/javascript">
var pager;
var current = "orderList";
(function () {
	seajs.use('app/jsp/customerOrder/orderInfo', function(orderInfoPage) {
		pager = new orderInfoPage({element : document.body});
		pager.render();
	});
	
	//更多 显示全文
	$("a[name='more']").click(function() {
		$(this).siblings("span").show();
	});
	
	//下载文件
	 $("input[name='download']").click(function(){
		 pager._downLoad($(this).attr('fileId'), $(this).attr('fileName'));
     });
	
})();
   

</script>
</html>

<%@ page import="com.ai.yk.protal.web.model.pay.PayNotify" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>支付页成功</title>
    <%@ include file="/inc/inc.jsp" %>
</head>
<body>
<!--面包屑导航-->
<%@ include file="/inc/topHead.jsp" %>
<!--主导航-->
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
        <div class="white-bj   pdd-150">
            <div class="recharge-success">
                <ul>
                    <c:choose>
                        <c:when test="${payResult == true}">
                            <li><img src="${uedroot}/images/rech-win.png" /></li>
                            <%--支付成功--%>
                            <li class="word"><spring:message code="order.pay.result.success"/></li>
                        </c:when>
                        <c:otherwise>
                            <li><img src="${uedroot}/images/rech-fail.png" /></li>
                            <%--充值失败--%>
                            <li class="word"><spring:message code="order.pay.result.fail"/></li>
                        </c:otherwise>
                    </c:choose>
                    <li class="list mt-50">
                        <%--您的订单号： 5000020965 ,您可以在“我的订单”中查看您的订单信息，--%>
                            <p><spring:message code="order.pay.result.tag.front"/><a
                                    href="${_base}/p/customer/order/${orderId}">${orderId}</a><spring:message
                                    code="order.pay.result.tag.back" arguments="${_base}"/></p>
                            <%--若有任何疑问，欢迎致电咨询：400-119-8080--%>
                            <p><spring:message code="order.pay.result.tag.phone"/></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!--底部-->
<%@include file="/inc/indexFoot.jsp"%>
</body>
</html>

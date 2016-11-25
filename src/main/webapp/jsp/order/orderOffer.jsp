<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <%@ include file="/inc/inc.jsp" %>
     <title><spring:message code="orderOffer.Confirmationorder"/></title>
</head>
<body>
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
                        <!-- 翻译内容 -->
                        <li class="word"><spring:message code="order.translateLan"/></li>
                    </ul>
                    <p class="line"></p>
                </div>
                <!--未进行的状态-->
                <div class="place-step-none adopt-wathet-bj">
                    <ul>
                        <li class="circle"><i class="icon iconfont">&#xe60d;</i></li>
                         <!-- 填写联系方式 -->
                        <li class="word"><spring:message code="order.contact"/></li>
                    </ul>
                    <p class="line"></p>
                </div>
                <!--未进行的状态-->
                <div class="place-step-none adopt-blue-bj">
                    <ul>
                        <li class="circle"><i class="icon iconfont">&#xe608;</i></li>
                         <!-- 支付-->
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
                    <li><img src="${uedroot}/images/rech-win.png"/></li>
                    <!-- 订单提交成功，请等待报价！ -->
                    <li class="word"><spring:message code="orderOffer.offerInfo"/></li>
                    <!-- 我们正在确认您的订单金额，并电话联系您，请耐心等待··· -->
                    <li class="mt-20"><spring:message code="orderOffer.offerConfirm"/></li>
                    <li class="list mt-20">
                       <spring:message code="orderOffer.myorder" arguments="${_base}"/>
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

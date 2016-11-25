<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:choose>
	<c:when test="${OrderDetails.displayFlag=='13'}">
		<!-- 步骤 待报价-->
		<div class="step-big"> 
    		<!--步骤-->
		    <div class="step">
		        <!--通过的状态-->
		        <div class="step-none adopt-green-bj">
		            <ul>
		                <li class="circle"><i class="icon iconfont">&#xe610;</i></li>
		                <li class="word"><spring:message code="myOrder.Submitorder"/></li>
		            </ul>
		            <p class="green-line"></p>
		        </div>
		        <!--正进行的状态-->
		        <div class="step-none adopt-ash-border">
		            <ul>
		                <li class="circle"><i class="icon iconfont">&#xe608;</i></li>
		                <li class="word"><spring:message code="myOrder.Payorder"/></li>
		            </ul>
		            <p class="green-line"></p>
		        </div>
		        <!--没通过的状态-->
		        <div class="step-none adopt-ash-border">
		            <ul>
		                <li class="circle"><i class="icon iconfont">&#xe60f;</i></li>
		                <li class="word"><spring:message code="myOrder.status.translating"/></li>
		            </ul>
		            <p class="green-line"></p>
		        </div>
		        <!--没通过的状态-->
		        <div class="step-none  step-small adopt-ash-border ">
		            <ul>
		                <li class="circle"><i class="icon iconfont">&#xe60e;</i></li>
		                <li class="word"><spring:message code="myOrder.Confirmcomplate"/></li>
		            </ul>
		        </div>
		    </div>
		</div>
	</c:when>
	
	<c:when test="${OrderDetails.displayFlag == '11'}">
		<!-- 步骤 待支付 -->
		<div class="step-big"> 
			<!--步骤-->
		 	<div class="step">
		 		<!--通过的状态-->
		 		<div class="step-none adopt-green-border">
		 			<ul>
		 				<li class="circle"><i class="icon iconfont">&#xe610;</i></li>
		 				<li class="word"><spring:message code="myOrder.Submitorder"/></li>
		 			</ul>
		 			<p class="green-line"></p>
		 		</div>
		 		<!--正进行的状态-->
		 		<div class="step-none adopt-green-bj">
		 			<ul>
		 				<li class="circle"><i class="icon iconfont">&#xe608;</i></li>
		 				<li class="word"><spring:message code="myOrder.Payorder"/></li>
		 			</ul>
		 			<p class="green-line"></p>
		 		</div>
		 		<!--没通过的状态-->
		 		<div class="step-none adopt-ash-border">
		 			<ul>
		 				<li class="circle"><i class="icon iconfont">&#xe60f;</i></li>
		 				<li class="word"><spring:message code="myOrder.status.translating"/></li>
		 			</ul>
		 			<p class="green-line"></p>
		 		</div>
		 		<!--没通过的状态-->
		 		<div class="step-none  step-small adopt-ash-border ">
		 			<ul>
		 				<li class="circle"><i class="icon iconfont">&#xe60e;</i></li>
		 				<li class="word"><spring:message code="myOrder.Confirmcomplate"/></li>
		 			</ul>
		 		</div>
		 	</div>
		</div>
	</c:when>
	
	<c:when test="${OrderDetails.displayFlag == '23'}">
	<!-- 步骤  翻译中 -->
		<div class="step-big"> 
			<!--步骤-->
		 	<div class="step">
		 		<!--通过的状态-->
		 		<div class="step-none adopt-green-border">
		 			<ul>
		 				<li class="circle"><i class="icon iconfont">&#xe610;</i></li>
		 				<li class="word"><spring:message code="myOrder.Submitorder"/></li>
		 			</ul>
		 			<p class="green-line"></p>
		 		</div>
		 		<!--正进行的状态-->
		 		<div class="step-none adopt-green-border">
		 			<ul>
		 				<li class="circle"><i class="icon iconfont">&#xe608;</i></li>
		 				<li class="word"><spring:message code="myOrder.Payorder"/></li>
		 			</ul>
		 			<p class="green-line"></p>
		 		</div>
		 		<!--没通过的状态-->
		 		<div class="step-none adopt-green-bj">
		 			<ul>
		 				<li class="circle"><i class="icon iconfont">&#xe60f;</i></li>
		 				<li class="word"><spring:message code="myOrder.status.translating"/></li>
		 			</ul>
		 			<p class="green-line"></p>
		 		</div>
		 		<!--没通过的状态-->
		 		<div class="step-none  step-small adopt-ash-border ">
		 			<ul>
		 				<li class="circle"><i class="icon iconfont">&#xe60e;</i></li>
		 				<li class="word"><spring:message code="myOrder.Confirmcomplate"/></li>
		 			</ul>
		 		</div>
		 	</div>
		</div>
	</c:when>
	
	<c:when test="${OrderDetails.displayFlag == '91'}">
	<!-- 步骤 待确认 已取消-->
		<!-- 订单已取消 -->
		<div class="step-big small-hi"><spring:message code="myOrder.ordecancelled"/></div>
	</c:when>
	
	<c:when test="${OrderDetails.displayFlag == '92'}">
	<!-- 步骤 待确认 已退款-->
		<!-- 订单已退款 -->
		<div class="step-big small-hi"><spring:message code="myOrder.orderrefunded"/></div>
	</c:when>
	
	<c:otherwise>
	<!-- 步骤 待确认 已完成 待评价-->
		<div class="step-big"> 
				<!--步骤-->
			 	<div class="step">
			 		<!--通过的状态-->
			 		<div class="step-none adopt-green-border">
			 			<ul>
			 				<li class="circle"><i class="icon iconfont">&#xe610;</i></li>
			 				<li class="word"><spring:message code="myOrder.Submitorder"/></li>
			 			</ul>
			 			<p class="green-line"></p>
			 		</div>
			 		<!--正进行的状态-->
			 		<div class="step-none adopt-green-border">
			 			<ul>
			 				<li class="circle"><i class="icon iconfont">&#xe608;</i></li>
			 				<li class="word"><spring:message code="myOrder.Payorder"/></li>
			 			</ul>
			 			<p class="green-line"></p>
			 		</div>
			 		<!--没通过的状态-->
			 		<div class="step-none adopt-green-border">
			 			<ul>
			 				<li class="circle"><i class="icon iconfont">&#xe60f;</i></li>
			 				<li class="word"><spring:message code="myOrder.status.translating"/></li>
			 			</ul>
			 			<p class="green-line"></p>
			 		</div>
			 		<!--没通过的状态-->
			 		<div class="step-none  step-small adopt-green-bj">
			 			<ul>
			 				<li class="circle"><i class="icon iconfont">&#xe60e;</i></li>
			 				<li class="word"><spring:message code="myOrder.Confirmcomplate"/></li>
			 			</ul>
			 		</div>
			 	</div>
			</div>
	</c:otherwise>
</c:choose>	
	

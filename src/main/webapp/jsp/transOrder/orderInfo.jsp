<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <%@ include file="/inc/inc.jsp" %>
    <title><spring:message code="myOrder.Orderdetails"/></title>
</head>
<body>
<!--头部-->
<%@include file="/inc/transTopMenu.jsp" %>
<!--二级主体-->
<!--外侧背景-->
<div class="cloud-container">
 	<!--内侧内容区域-->
	<div class="translate-cloud-wrapper">
	 	<!--左侧菜单-->
		<%@include file="/inc/transLeftmenu.jsp" %>

	 	<!--右侧内容-->
	 	<!--右侧大块-->
	 	<div class="right-wrapper">
	 		<input id="orderId" type="hidden" value="${OrderDetails.orderId}">
	 		<div class="breadcrumb">
	 			<!-- 我的订单 -->
	 			<p><spring:message code="myOrder.myorders"/>></p>
	 			<!-- 订单号 -->
	 			<p><spring:message code="myOrder.Ordernumber"/>：${OrderDetails.orderId}</p>
	 		</div>
	 		<c:if test="${OrderDetails.state =='92'}">
	 			<!-- myOrder.OrderHrefunded -->
	 			<div class="step-big small-hi"><spring:message code="myOrder.OrderHrefunded"/></div>
	 		</c:if>
			<!--订单table-->
			<div class="confirmation-table mt-20"  <c:if test="${OrderDetails.translateType == '2'}">style="display: none"</c:if> > 
					<div class="oder-table">
			 				<ul>
			 					<!-- 翻译内容 -->
			 					<li><a href="javaScript:void(0);" class="current"><spring:message code="myOrder.translatingContent"/></a></li>
			 					<!-- 订单跟踪 -->
			 					<li><a href="javaScript:void(0);"><spring:message code="myOrder.Ordertracking"/></a></li>
			 				</ul>
			 			</div>
			 			<div id="translate1">
			 			<c:if test="${OrderDetails.translateType == '0'}">
			 				<!-- 文本类型 -->
				 			<div class="confirmation-list">
				 				<ul>
				 					<!-- 原文  -->
				 					<li class="title"><spring:message code="myOrder.Originaltext"/>:</li>
				 					<!-- 更多 -->
				 					<li class="word">${fn:substring(OrderDetails.prod.needTranslateInfo, 0, 150)}
		                            	<span style="display: none;">${fn:substring(OrderDetails.prod.needTranslateInfo, 150, fn:length(OrderDetails.prod.needTranslateInfo))}</span>
		                            	<A name="more" href="javaScript:void(0);">[<spring:message code="myOrder.more"/>]</A></li>
				 				</ul>
				 				
				 				<c:if test="${OrderDetails.state =='23' || OrderDetails.state =='25' }">
				 				<!-- 翻译中 修改中 -->
				 					<c:choose>
				 						<c:when test="${not empty OrderDetails.prod.translateInfo}">
				 						<!-- 有译文的情况 -->
				 						<ul>
						 					<!-- 译文  -->
						 					<li class="title"><spring:message code="myOrder.Translatedtext"/>:
						 						<!-- 修改 -->
						 						<input id="editText" class="btn border-blue-small btn-auto radius20" type="button" value="<spring:message code="myOrder.modify"/>"></li>
						 					<!-- 更多 -->
						 					<li class="word">${fn:substring(OrderDetails.prod.translateInfo, 0, 150)}
				                            	<span style="display: none;">${fn:substring(OrderDetails.prod.translateInfo, 150, fn:length(OrderDetails.prod.translateInfo))}</span>
				                            	<A name="more" href="javaScript:void(0);">[<spring:message code="myOrder.more"/>]</A></li>
				                            <li class="word" style="display: none"><textarea id="transTextArea" class="int-text radius text-150">${OrderDetails.prod.translateInfo}</textarea></li>
					 					</ul>
				 						<ul style="display: none">
											<li class="right mr-5">
												<!-- 保存 -->
												<input id="textSave" name="textSave" class="btn border-blue-small btn-auto radius20" type="button" value="<spring:message code="myOrder.sava"/>">
											</li>
										</ul>
				 						</c:when>
				 						<c:otherwise>
				 						<!-- 无译文的情况 -->
			 							<ul>
						 					<!-- 译文  -->
						 					<li class="title"><spring:message code="myOrder.Translatedtext"/>:</li>
						 					<li class="word"><textarea id="transTextArea" class="int-text radius text-150"></textarea></li>
						 				</ul>
						 				<ul>
											<li class="right mr-5">
												<input id="textSave" name="textSave" class="btn border-blue-small btn-auto radius20" type="button" value="<spring:message code="myOrder.sava"/>">
											</li>
										</ul>
				 						</c:otherwise>
				 					</c:choose>
				 				</c:if>
				 				
				 			</div>
			 			</c:if>
			 			
			 			<c:if test="${OrderDetails.translateType == '1'}">
			 				<!-- 文档类型 -->
			 				<div class="confirmation-list">
			 					<!-- 原文 -->
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
								
								<c:if test="${OrderDetails.state =='23' || OrderDetails.state =='25' }">
				 				<!-- 翻译中 修改中 -->
				 					 <c:forEach items="${OrderDetails.prodFiles}" var="prodFile" varStatus="status">
				                        <c:if test="${not empty prodFile.fileTranslateName}">
				                        <ul class="mt-30">
				                        	<!-- 译文 文档-->
				                            <li class="title"><spring:message code="myOrder.Translatedtext"/>:</li>
				                            	<!-- 文档类型翻译 文档list -->
				                            	<li>${prodFile.fileTranslateName}</li>
				  								<li class="right mr-5">
					  								<input name="download" fileId="${prodFile.fileTranslateId}" fileName="${prodFile.fileTranslateName}" type="button" class="btn border-blue-small btn-auto radius20" value="<spring:message code="myOrder.downLoad"/>">
					  								<!-- 删除 -->
					  								<input name="delFile" class="btn border-blue-small btn-auto radius20" type="button" value="<spring:message code="myOrder.delete"/>">
				  								</li>
				                            	
				                    	</ul>
				                    	</c:if>
	                   				</c:forEach>
	                   				
                   					<c:if test="${UUploadCount > 0}">
			 						<!-- 可以上传 -->
			 							<!-- 上传译文 -->
										<form  id="uploadForm" method="POST" enctype="multipart/form-data" action="${_base}/p/trans/order/upload">
								   			<p>
									   			<input class="btn border-blue-small btn-80 radius20" type="button" value="<spring:message code="myOrder.Upload"/>">
									   			<input id="upload" name="file" class="fany-file" type="file">
									   			<input name="orderId" type="hidden" value="${OrderDetails.orderId}">
								   			</p>  
										</form>　   
			 						</c:if>
			 						
			 						
				 				</c:if>
							</div>
			 			</c:if>
			 			
			 		  </div>
			 		  <div id="translate2" style="display: none;">
			 		  	 <!-- 订单轨迹 -->
			 		  	 <div class="tracking-list">
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
		 			<!--第一列信息-->
		 			<div class="info-list info-title">
	  					<!-- 订单金额  -->
	  					<span><spring:message code="myOrder.Amount"/>:</span>
						<ul>
							<li>
							<p>
								<c:set var="totalFee"><fmt:formatNumber value="${OrderDetails.orderFee.totalFee/1000}" pattern="#,##0.00#"/></c:set>
                           		<c:if test="${OrderDetails.orderFee.currencyUnit =='1'}"><spring:message code="myOrder.rmb" arguments="${totalFee}"/></c:if>
                           		<c:if test="${OrderDetails.orderFee.currencyUnit =='2'}"><spring:message code="myOrder.dollar" arguments="${totalFee}"/></c:if></p>
							</li>
						</ul>
						<c:if test="${OrderDetails.translateType != '2'}">
						<!-- 非口译显示 -->
							<span><spring:message code="myOrder.Words"/></span>
							<ul>
								<li>
									<p><spring:message
                                   		code="myOrder.WordWord" arguments="${OrderDetails.prod.translateSum}"/></p>
								</li>
							</ul>
							<!-- 预计交稿 -->
							<span><spring:message code="myOrder.ExpectedSubmTime"/>:</span>
							<ul>
								<li>
									<p>2015-04-07 09:53:51</p>
								</li>
							</ul>
						</c:if>
		 			</div>
		 			<!--第一列信息结束-->
		 			<div class="info-list">
			 			<!-- 订单信息 -->
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
			  				
			  				<c:if test="${OrderDetails.translateType != '2'}">
			  					<!-- 文本、文档 类订单信息 -->
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
		                            	<spring:message code="myOrder.Layout"/>;
		                            	</c:if>
		                            	<c:if test="${not empty OrderDetails.prod.typeDesc}">
		                            		<spring:message code="order.formatConv" />${OrderDetails.prod.typeDesc}
		                            	</c:if>
		                            </p>
				  				</li>
			  				</c:if>
			  				
			  				<c:if test="${OrderDetails.translateType == '2'}">
			  					<!-- 口译类信息 -->
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
			  				</c:if>
			  				
			  				<li class="width-large">
			  					<!-- 需求备注 -->
	                            <p class="word"><spring:message code="myOrder.Demandnotes"/>:</p>
	                            <p class="p-large">${OrderDetails.remark}</p>
			  				</li>
			  			</ul>
		 			</div>
		
		 		</div>
		 		<!--按钮-->
		 		<div class="recharge-btn order-btn">
		 			<c:choose>
		 				<c:when test="${OrderDetails.state =='20'}">
		 					<!-- 待领取 领取-->
							<input id="received" name="received" type="button" class="btn btn-green btn-xxxlarge radius10" value="<spring:message code="myOrder.Claim"/>">
		 				</c:when>
		 				<c:when test="${OrderDetails.state =='21'}">
		 					<!-- 已领取  翻译-->
							<input id="trans" name="trans" class="btn btn-green btn-xxxlarge radius10" type="button" value="<spring:message code="myOrder.Translate"/>">
							<!-- 暂无 <input id="recharge-popo" class="btn btn-yellow btn-xxxlarge radius10 ml-20" type="button" value="分配">-->
		 				</c:when>
		 				<c:when test="${OrderDetails.state =='23' && not empty OrderDetails.prod.translateInfo}">
		 					<!-- 文本 翻译中  有译文-->
		 					<!-- 提交 -->
			 				<input id="submit" name="submit" class="btn btn-green btn-xxxlarge radius10" type="button" value="<spring:message code="myOrder.Submit"/>">
							<!-- <input id="check" name="check" class="btn btn-yellow btn-xxxlarge radius10 ml-20" type="button" value="审校">-->
		 				</c:when>
		 				<c:when test="${OrderDetails.state =='23' && OrderDetails.translateType == '1'}">
		 					<!-- 文档  翻译中 -->
		 					
		 						<c:if test="${UUploadCount < fn:length(OrderDetails.prodFiles)}">
		 						<!-- 提交 -->
		 						<input id="recharge-popo" name="submit" class="btn btn-green btn-xxxlarge radius10" type="button" value="<spring:message code="myOrder.Submit"/>">
		 						</c:if>
							<!--<input id="tran-popo" class="btn btn-yellow btn-xxxlarge radius10 ml-20" type="button" value="CAT翻译">-->
		 				</c:when>
		 				<c:when test="${OrderDetails.state =='25'}">
		 					<!-- 修改中 -->
		 					<!-- 提交 -->
			 				<input name="submit" class="btn btn-green btn-xxxlarge radius10" type="button" value="<spring:message code="myOrder.Submit"/>">
		 				</c:when>
		 				<c:otherwise>
		 				<!-- 翻译中无译文 待确认  已完成 已退款 -->
		 				</c:otherwise>
					</c:choose>	                	
				</div>
				
				<c:if test="${OrderDetails.state =='20' && not empty OrderDetails.lspId }">
				<!-- 已领取状态，并且是lsp 展示此信息 -->
					<!-- （选择自己翻译或分配给团队译员翻译，选择后不可修改） -->
					<div class="info-center"><spring:message code="myOrder.lsoChooseInfo"/></div>
				</c:if>
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
var lspId="${lspId}";
var orderId = "${OrderDetails.orderId}";
(function () {
	seajs.use('app/jsp/transOrder/orderInfo', function(orderInfoPage) {
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
	
	//删除
	$("input[name='delFile']").click(function(){
		 pager._delFile($(this).parent().find("input[name='download']").attr('fileid'));
	});
	
	
})();

</script>
</html>
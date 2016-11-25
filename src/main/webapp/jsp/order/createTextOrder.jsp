<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page import="java.util.Locale"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>  
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<%@ include file="/inc/inc.jsp" %>
	 <title><spring:message code="order.Translatepage"/></title>
	<link rel="stylesheet" type="text/css" href="${_base}/resources/spm_modules/webuploader/webuploader.css">
</head>
<body>	
	<!--面包屑导航-->
	<%@ include file="/inc/topHead.jsp" %>
	<%@ include file="/inc/topMenu.jsp" %>
		<!--主体-->
		<form id="textOrderForm" valid="true">
		<div class="placeorder-container" id="textOrderPage">
		<div class="placeorder-wrapper">
			<!--步骤-->
			<div class="place-bj">
				<div class="place-step">
					<!--进行的状态-->
			 		<div class="place-step-none adopt-blue-bj">
			 			<ul>
			 				<li class="circle"><i class="icon iconfont">&#xe60f;</i></li>
			 				<li class="word"><spring:message code="order.translateLan"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-ash-bj">
			 			<ul>
			 				<li class="circle"><i class="icon iconfont">&#xe60d;</i></li>
			 				<li class="word"><spring:message code="order.contact"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		<!--未进行的状态-->
			 		<div class="place-step-none adopt-ash-bj">
			 			<ul>
			 				<li class="circle"><i class="icon iconfont">&#xe608;</i></li>
			 				<li class="word"><spring:message code="order.payment"/></li>
			 			</ul>
			 			<p class="line"></p>
			 		</div>
			 		
				</div>
			</div>
			<!--白色背景-->
			<div class="white-bj">
				<div class="right-list-title pb-20 pl-20 none-border">
  					<p><spring:message code="order.translateLan"/></p>
  				</div>
  				<div class="placeorder-translate">
	  				<select id="selectDuad" t="${sessionScope.orderInfo.productInfo.translateInfo}"
							name="<%=response.getLocale()%>" tabindex="5"
							class="dropdown" data-settings='{"cutOff": 12}' >
						<c:forEach items="${duadList}" var="duad">
	  						<c:if test="${duad.orderType != 2}">
  								<option value="${duad.duadId}"
  										ordinary="${duad.ordinary}"  ordinaryUrgent="${duad.ordinaryUrgent}"
										professional="${duad.professional}"  professionalUrgent="${duad.professionalUrgent}"
										publish="${duad.publish}"  publishUrgent="${duad.publishUrgent}"
										sourceEn="${duad.sourceEn}" targertEn="${duad.targetEn}"
										sourceCn="${duad.sourceCn}" targertCn="${duad.targetCn}"
										sourceCode="${duad.sourceCode}" targetCode="${duad.targetCode}"
  									>
  										<c:if test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>">${duad.sourceCn}→${duad.targetCn}</c:if>
  										<c:if test="<%=!Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>">${duad.sourceEn}→${duad.targetEn}</c:if>
  									</option>
							</c:if>
						</c:forEach>
					</select>
  				</div>
			</div>
			<!--白色背景-->
			<div class="white-bj">
				<div class="right-list-title pb-20 pl-20 none-border">
  					<p><spring:message code="order.translateLan"/></p>
  				</div>
  				<div class="translate-int radius" id="fy1">
  					<p>
  					<!--  翻译内容--> 
  					<textarea id="translateContent" name="translateContent" class="int-text textarea-xlarge-100 radius">${sessionScope.orderInfo.productInfo.translateInfo}</textarea></p>
  					<!-- 上传文档btn -->
  					<p class="right"><input type="button" class="btn border-blue radius20 btn-80" value="<spring:message code="order.uploadDoc"/>"  id="fy-btn"></p>
  					<!-- 清空 -->
  					<p class="right"><input hidden="" type="button" class="btn border-blue radius20 btn-80" value="<spring:message code="order.clear" />" id="clear-btn"></p>
  					<label></label>		
  				</div>
  				<div class="translate-int radius bj-ash placeholder" id="fy2" style="display: block;">
  					<div class="limit-height">
	  					<!--文件列表  -->
	  					<div class="attachment" id="fileList">
	  					</div>
	  					<div class="attachment-btn">
	  						<ul>
	  							<!-- 上传文档 -->
	  							<li class="pp">
	  							<!--
	  							<input id="uploadFile" type="button" class="btn border-green btn-large radius20" value="<spring:message code="order.uploadDoc"/>">
	  							   -->
	  							   	<!-- 选择文件 -->
	  							 	<div id="selectFile" ><spring:message code="order.choosefile"/></div>
	  							<!--<input id="uploadAll" type="file" class="att-file">  -->
	  							</p></li>
	  							<!-- 将文件拖拽至此区域可上传 -->
	  							<li class="word" id="dragFile"> <div><spring:message code="order.dragFileInfo"/></div></lil>
	  						</ul>
	  					</div>
  					</div>
  					<div class="shur-btn">
  						<!-- 输入文字 -->
  						<p class="right mr-0"><input type="button" class="btn border-blue radius20 btn-80 " value="<spring:message code="order.Entertext"/>"  id="fy-btn1"></p>
  					</div>
  				</div>
  			</div>
			<!--白色背景-->
			<div class="white-bj">
				<div class="selection-level mt-20" id="transGrade">
					<!-- 翻译级别 3种 -->
					<ul class="none-ml current" name="100210">
						<li class="blue">
							<p><spring:message code="order.Standard"/></p>
							<p><i class="icon-star-empty"></i></p>
						</li>
						<li>
							<p><spring:message code="order.stanInstruction"/></p>
						</li>
						<li>
							<!-- 价格 -->
							<p>
								<c:if test="<%=!Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>"><spring:message code="order.meiyuan"/></c:if>
								<span id="stanPrice"></span>
								<c:if test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>"><spring:message code="order.yuan"/></c:if>
								<spring:message code="order.thousandWords"/></p>
							<p class="ml-30"><span>1</span><spring:message code="order.freeChanges"/></p>
						</li>
						<li class="green-li">
							<p class="icon"><i class="icon iconfont">&#xe616;</i></p>
							<p><spring:message code="order.stanInfo1"/></p>
						</li>
						<li class="green-li">
							<p class="icon"><i class="icon iconfont">&#xe616;</i></p>
							<p><spring:message code="order.stanInfo2"/></p>
						</li>
						<li class="green-li">
							<p class="icon"><i class="icon iconfont">&#xe616;</i></p>
							<p><spring:message code="order.stanInfo3"/></p>
						</li>
						<label></label>
					</ul>
					<ul name="100220">
						<li class="blue">
							<p><spring:message code="order.Professional"/></p>
							<p><i class="icon-star-empty"></i><i class="icon-star-empty"></i></p>
						</li>
						<li>
							<p><spring:message code="order.proInstruction"/></p>
						</li>
						<li>
							<!-- 价格 -->
							<p>
								<c:if test="<%=!Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>"><spring:message code="order.meiyuan"/></c:if>
								<span id="proPrice"></span>
								<c:if test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>"><spring:message code="order.yuan"/></c:if>
								<spring:message code="order.thousandWords"/></p>
							<p class="ml-30"><span>1</span><spring:message code="order.freeChanges"/></p>
						</li>
						<li class="green-li">
							<p class="icon"><i class="icon iconfont">&#xe616;</i></p>
							<p><spring:message code="order.proInfo1"/></p>
						</li>
						<li class="green-li">
							<p class="icon"><i class="icon iconfont">&#xe616;</i></p>
							<p><spring:message code="order.proInfo2"/></p>
						</li>
						<li class="green-li">
							<p class="icon"><i class="icon iconfont">&#xe616;</i></p>
							<p><spring:message code="order.proInfo3"/></p>
						</li>
					</ul>
					<ul name="100230">
						<li class="blue">
							<p><spring:message code="order.Publishing"/></p>
							<p><i class="icon-star-empty"></i><i class="icon-star-empty"></i><i class="icon-star-empty"></i></p>
						</li>
						<li>
							<p><spring:message code="order.pubInstruction"/></p>
						</li>
						<li>
							<!-- 元/千字 -->
							<p>
								<c:if test="<%=!Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>"><spring:message code="order.meiyuan"/></c:if>
								<span id="pubPrice"></span>
								<c:if test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>"><spring:message code="order.yuan"/></c:if>
								<spring:message code="order.thousandWords"/></p>
							<p class="ml-30"><span>1</span><spring:message code="order.freeChanges"/></p>
						</li>
						<li class="green-li">
							<p class="icon"><i class="icon iconfont">&#xe616;</i></p>
							<p><spring:message code="order.pubInfo1"/></p>
						</li>
						<li class="green-li">
							<p class="icon"><i class="icon iconfont">&#xe616;</i></p>
							<p><spring:message code="order.pubInfo2"/></p>
						</li>
						<li class="green-li">
							<p class="icon"><i class="icon iconfont">&#xe616;</i></p>
							<p><spring:message code="order.pubInfo3"/></p>
						</li>
					</ul>
				</div>
				<!--select-->
				<div class="selection-select mt-50">
					<ul>
						<li class="none-ml">
							<p class="word"><spring:message code="order.purpose"/></p>
							<p>
								<select id="selectPurpose" name="selectPurpose" class="select select-medium radius">
									<c:forEach items="${purposeList}" var="purpose">
										<option value="${purpose.purposeId}">
											<c:choose>
												<c:when test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>">${purpose.purposeCn}</c:when>
												<c:otherwise>${purpose.purposeEn}</c:otherwise>
											</c:choose>
										</option>
									</c:forEach>
								</select>
							</p>
						</li>
						<li>
							<p class="word"><spring:message code="order.Fields"/></p>
							<p>
								<select id="selectDomain" name="selectDomain" class="select select-medium radius">
									<c:forEach items="${domainList}" var="domain">
										<option value="${domain.domainId}">
											<c:choose>
												<c:when test="<%=Locale.SIMPLIFIED_CHINESE.equals(response.getLocale())%>">${domain.domainCn}</c:when>
												<c:otherwise>${domain.domainEn}</c:otherwise>
											</c:choose>
										</option>
									</c:forEach>
								</select>
							</p>
						</li>
						<li>
							<p class="word"><spring:message code="order.addedSer"/></p>
							<p>
							<!-- 排版 无排版 -->
							<select id="selectAddedSer" class="select select-medium radius" disabled>
								<option value="1"><spring:message code="order.layout"/></option>
								<option value="2" selected="selected"><spring:message code="order.noLayout"/></option>
							</select>
							</p>
						</li>
						<li class="width-large">
							<p class="word"><spring:message code="order.formatConv"/></p>
							<p>
								<select id="selectFormatConv" class="select select-medium radius" disabled>
									<option value="1"><spring:message code="order.formatConv"/></option>
									<option value="2" selected="selected"><spring:message code="order.noFormatConv"/></option>
								</select>
							</p>
							<p class="ml-20"><input id="inputFormatConv" hidden="" type="text" class="int-text int-in-bi radius"></p>
						</li>
					</ul>
				</div>
				<div class="right-list-title pb-20 pl-20 mt-40 none-border">
  					<p><spring:message code="order.translateSpeed"/></p>
  				</div>
  				<div class="urgent">
  					<ul>
  						<li><span id="speedValue"></span><spring:message code="order.hourThousandWords"/></li>
  						<li class="mt-10">
  							<p><input type="checkbox"  class="radio" id="urgentOrder"><spring:message code="order.urgentOrder"/></p>
  							<p class="word ml-20"><spring:message code="order.urgentOrderInfo"/></p>
  						</li>
  					</ul>
  				</div>
			</div>	
			<div class="recharge-btn order-btn placeorder-btn ml-0">
 				<input type="button" id="recharge-popo" class="btn btn-green btn-xxxlarge radius10" value="<spring:message code="order.subTranslation"/>">
 				<p><input name="isAgree" type="checkbox" class="radio" checked=""><spring:message code="order.Agreement"/><a href="javaScript:void(0);"><spring:message code="order.AgreementInfo"/></a></p>
 			</div>
		</div>
		</div>
		
		<!-- 联系人 -->
		<%@ include file="/jsp/order/textOrderContact.jsp" %>
		</form>
	<!--底部-->
	<%@include file="/inc/indexFoot.jsp"%>
</body>
<%@ include file="/inc/incJs.jsp" %>
<script type="text/javascript" src="${uedroot}/scripts/modular/drop-down.js"></script>
<script type="text/javascript" src="${uedroot}/scripts/modular/frame.js"></script>
<script type="text/javascript" src="${_base}/resources/spm_modules/webuploader/webuploader.js"></script>
<script type="text/javascript" src="${_base}/resources/spm_modules/app/jsp/order/upload.js"></script>
<script type="text/javascript">
	(function () {
		var pager;
		//seajs.use('app/jsp/order/uploadFile');
		seajs.use(['app/jsp/order/createTextOrder'], function(createTextOrderPage) {
			pager = new createTextOrderPage({element : document.body});
			pager.render();
			
			//new uploadFile({element : document.body}).render();
		});
		
		 $('.attachment').delegate('ul li i','click',function(){
			 $(this).parent().parent('ul').hide();
		 });
		 /***
		$(".attachment ul li i").click(function () {
			$(this).parent().parent('ul').hide();
			});
		$("i[name='delFile']").click(function () {
			$(this).parent().parent('ul').hide();
			});
		*****/
		
		//$("#selectFile1").children("div:last").css("height", '58px');
	})();
	

</script>
</html>

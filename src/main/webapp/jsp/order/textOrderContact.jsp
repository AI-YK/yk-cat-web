<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!-- 联系人 -->
<div class="placeorder-container" id="contactPage" style="display: none;">
<div class="placeorder-wrapper">
	<!--步骤-->
	<div class="place-bj">
		<div class="place-step">
			<!--进行的状态-->
	 		<div class="place-step-none adopt-wathet-bj">
	 			<ul>
	 				<li class="circle"><i class="icon iconfont">&#xe60f;</i></li>
	 				<li class="word"><spring:message code="order.translateContent"/></li>
	 			</ul>
	 			<p class="line"></p>
	 		</div>
	 		<!--未进行的状态-->
	 		<div class="place-step-none adopt-blue-bj">
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
		<div class="right-list-title pl-20 none-border">
					<p><spring:message code="order.ContactInfo"/></p>
				</div>
				<div class="oral-form" id="saveContactDiv">
					<ul>
						<li>
							<p><input id="contactName" name="contactName" type="text" class="int-text int-in-bi radius" placeholder="<spring:message code="order.EnterName"/>"></p>
							<p><select id="globalRome" name="globalRome" class="select int-in radius"></select></p>
							<p><input id="phoneNum" name="phoneNum"  pattern="^1\d{10}$" type="text" class="int-text int-in-bi radius" placeholder="<spring:message code="order.EnterPhone"/>"></p>
							<p class="mr-0"><input id="email" name="email" type="text" class="int-text int-large-mail radius" placeholder="<spring:message code="order.EnterEmail"/>"></p>
						</li>
						<li class="right-btn"><input id="saveContact" type="button" class="btn radius20 border-blue btn-80" value="<spring:message code="order.Save"/>"></li>
						
					</ul>
				</div>
				<div class="oral-form" id="editContactDiv" style="display: none;">
  					<ul>
  						<li>
  							<p></p>
  							<p></p>
  							<p></p>
  						</li>
  						<li class="right"><a href="javaScript:void(0);" id="editContact"><i class="icon-edit"></i></a></li>
  					</ul>
  				</div>
	</div>
	<!--白色背景-->
	<div class="white-bj">
	<div class="right-list-title pb-10 ">
				<p><spring:message code="order.ConfirmOrderInfo"/></p>
			</div>
			<div class="right-list-table">
				<table id="textOrderTable" class="table table-th-color">
                  <thead>
                     <tr>
                          <th><spring:message code="order.Subject"/></th>
                          <th><spring:message code="order.Language"/></th>
                          <th><spring:message code="order.Fields"/></th>
                          <th><spring:message code="order.purpose"/></th>
                          <th><spring:message code="order.TranslationGrade"/></th>
                    </tr>
             		</thead>
             		<tbody>
				<tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
				 </tr>
		    </tbody>
          	</table>
			</div>
			<div class="right-list-title pb-10 mt-20 none-border">
				<p><spring:message code="order.LeaveMessage"/></p>
			</div>
			<div class="lx-textarea">
					<p><textarea id="remark" class="int-text textarea-xlarge-text radius"></textarea></p>	
			</div>	
	</div>
	<!--白色背景-->
	<div class="white-bj">
	<div class="right-list-title pb-10 none-border">
				<p><spring:message code="order.TotalPirce"/></p>
			</div>
			<div class="urgent">
					<ul>
						<li id="price"></li>
						
					</ul>
			</div>
	</div>
	

	<div class="recharge-btn order-btn placeorder-btn">
			<input type="button" id="toCreateOrder" class="btn btn-yellow btn-xxxlarge radius10" value="<spring:message code="order.Back"/>">
			<input type="button" id="submitOrder" class="btn btn-green btn-xxxlarge radius10" value="<spring:message code="order.SubmitOrder"/>">
		</div>
	
</div>
</div>
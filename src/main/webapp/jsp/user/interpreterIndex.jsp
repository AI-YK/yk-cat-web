<%@ page language="java" contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <title></title>
    <%@ include file="/inc/inc.jsp" %>
    <%@ include file="/inc/incJs.jsp" %>
</head>
<body>
<!--头部-->
<%@ include file="/inc/transTopMenu.jsp" %>
<!--二级主体-->
<!--外侧背景-->
<div class="cloud-container">
    <!--内侧内容区域-->
    <div class="translate-cloud-wrapper">
        <!--左侧菜单-->
        <div class="left-subnav interpreter-subanav">
            <%@ include file="/inc/transLeftmenu.jsp" %>
        </div>
        <!--右侧内容-->
        <!--右侧大块-->
        <div class="right-wrapper">
            <input id="interperId" name="interperId" type="hidden" value="${interperInfo.userId}"/>
            <input id="lspId" name="lspId" type="hidden" value="${interperInfo.lspId}"/>
            <input id="lspRole" name="lspRole" type="hidden" value="${interperInfo.lspRole}"/>
            <input id="userId" name="userId" type="hidden" value="${userId}"/>
            <!--右侧第一块-->
            <div class="right-title">
                <div class="right-title-left">
                    <div class="right-title-left-tu"><img src="${uedroot}/images/icon1.jpg"></div>
                    <div class="right-title-left-word">
                        <ul>
								<li class="word-red" style="cursor:pointer;" onclick="location.reload();">${sessionScope.user_session_key.username}</li>
								<li class="c-red" style="cursor:pointer;" onclick="location.href='${_base}/p/security/seccenter'" id="accLevelInfo"></li>
							</ul>
						<ul>
                            <li class="bule" id="lspName"></li>
                        </ul>
                        <ul class="word-li">
                            <li>
                                <p><spring:message code="ycaccountcenter.userIndex.balance"/>:</p>
                                <p class="red" style="cursor:pointer;" onclick="location.href='${_base}/p/balance/account'">
                                    <fmt:formatNumber
                                            value="${balance/1000}" pattern="#,##0.00#"/></p>
                            </li>
                            <li style="display: none;">
                                <p>积分:</p>
                                <p class="red">8,782</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right-title-right">
                    <p>
                        <a href="${_base}/p/trans/order/list/view?state=21">
                            <span class="tp1"></span>
                            <span><spring:message code="myOrder.status.Claimed"/><b id="receiveCount">0</b></span>
                        </a>
                    </p>
                    <p>
                        <a href="${_base}/p/trans/order/list/view?state=23">
                            <span class="tp2"></span>
                            <span><spring:message code="myOrder.status.translating"/><b id="translateCount">0</b></span>
                        </a>
                    </p>
                </div>
            </div>


            <!--右侧第二块-->
            <div id="have_order_container" class="right-list" style="display: none;">
                <div class="right-list-title pb-10 pl-20">
                    <p><spring:message code="myOrder.myorders"/></p>
                    <p class="right">
                    <input type="button"
                     onclick="location.href='${_base}/p/trans/order/list/view'"
                     class="btn  btn-od-large btn-blue radius20" value="<spring:message code="myOrder.allOrder"/>">
                    </p>
                </div>
                <div class="right-list-table">
                    <table class="table table-bg  table-striped-even table-height50">
                        <thead>
                        <tr>
                            <th width="20%"><spring:message code="myOrder.SubjectOrder"/></th>
                            <th><spring:message code="myOrder.Amount"/></th>
                            <th><spring:message code="myOrder.DeliveryTime"/></th>
                            <th><spring:message code="myOrder.Status"/></th>
                            <th><spring:message code="myOrder.Operate"/></th>
                        </tr>
                        </thead>
                        <tbody id="order_list">

                        </tbody>
                    </table>
                </div>
                
            </div>
            <div id="no_order_container" class="right-list" style="display: none;" >
            <div class="renz-list"><spring:message code="ycaccountcenter.interpreterIndex.noTaskMsg" arguments="${_base}/p/taskcenter/view"/></div>
            </div>
            <div id="no_rz_container" class="right-list" style="display: none;">
                <div class="no-order no-order-cl">
                    <ul>
                        <li><img src="${uedroot}/images/none-d1.jpg"/></li>
                        <li class="mt-50"><spring:message code="ycaccountcenter.interpreterIndex.noCertificationMsg"/></li>
                        <li class="right mt-t500"><input type="button" class="btn border-blue btn-large radius20 blue"
                                                         value="<spring:message code="ycaccountcenter.interpreterIndex.certification.interpreter"/>"></li>
                    </ul>
                </div>
                <div class="no-step"><img src="${uedroot}/images/step1.jpg"/></div>
            </div>

        </div>


    </div>

</div>
<script id="orderTemple" type="text/template">
    <tr>
        <td>
            <div class="fy-sm"> {{:translateName}}</div>
        </td>
        <td>
            {{:~liToYuan(totalFee)}}
            {{if currencyUnit == '1'}}
            <spring:message code="myOrder.rmb"/>
            {{else }}
            <spring:message code="myOrder.dollar"/>
            {{/if}}
        </td>
        <td>{{:endTime}}</td>
        <td>翻译中</td>
        <td><input type="button" class="btn biu-btn btn-auto-25 btn-green radius10" value="翻译"></td>
    </tr>
</script>
<script type="text/javascript">
    var pager;
    var current = "index";
    (function () {
        seajs.use('app/jsp/user/interpreter/interpreterIndex', function (interpreterIndexPager) {
            pager = new interpreterIndexPager({
                element: document.body
            });
            pager.render();
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

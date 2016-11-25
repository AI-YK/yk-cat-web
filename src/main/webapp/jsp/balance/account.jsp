<%@ page import="com.ai.paas.ipaas.i18n.ZoneContextHolder" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>我的账户</title>
    <%@ include file="/inc/inc.jsp" %>
</head>
<body>
<!--头部-->
<%@ include file="/inc/userTopMenu.jsp" %>
<!--二级主体-->
<!--外侧背景-->
<div class="cloud-container">
    <!--内侧内容区域-->
    <div class="cloud-wrapper">
        <!--左侧菜单-->
        <%@ include file="/inc/leftmenu.jsp"%>
        <!--右侧内容-->
        <!--右侧大块-->
        <div class="right-wrapper">
            <!--右侧第一块-->
            <div class="right-title">
                <div class="right-title-left user-account-title">
                    <div class="right-title-left-word user-account-title-word">
                        <ul>
                            <li class="user-word">账户余额</li>
                        </ul>
                        <ul>
                            <li class="word"><span>${balance}</span>CNY</li>
                            <li class="c-bj-bule"><a href="${_base}/p/balance/depositFund">充值余额</a></li>
                        </ul>
                        <ul class="word-li">
                            <li>为保证账户安全，如需提现，请致电译云客服进行申请和审核：400-119-8080</li>
                        </ul>
                    </div>
                </div>
                <div class="user-title-right"><img src="${uedroot}/images/user-bj.jpg" /></div>
            </div>
            <!--右侧第二块-->
            <form id="accountQuery">

            <div class="right-list">
                <div class="query-order" id="dates">
                    <ul>
                        <li class="left">
                            <p><a href="#" id="today" onclick="todate(this,today)">今天</a></p>
                            <p class="current"><a href="#" id="oneMonth" onclick="todate(this,oneMonth)">近一个月</a></p>
                            <p><a href="#" id="threeMonth" onclick="todate(this,threeMonth)">近三个月</a></p>
                            <p><a href="#" id="oneyear" onclick="todate(this,oneyear)">近一年</a></p>
                        </li>
                        <li class="right">
                            <p id="income">收入:0USD</p>
                            <p id="out">支出:0USD</p>
                            <p><a href="#" class="is">收起筛选<i class="icon-angle-down"></i></a></p>
                        </li>
                    </ul>
                </div>

                <div class="query-order order-hiddn">
                    <ul>
                        <li class="left li-xlarge li-xlarge-ml">
                            <p><a href="#">订单时间</a></p>
                            <p><input style="width: 140px" id="beginDate" name="beginDate" type="text" value="" class="int-text int-small radius" onClick="WdatePicker({dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'endDate\')}'})" readonly="readonly"></p>
                            <p>~</p>
                            <p><input style="width: 140px" id="endDate" name="endDate" type="text" class="int-text int-small radius" onClick="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'beginDate\')}',onpicked:function(dp){endtime();}})" readonly="readonly"></p>
                        </li>
                        <li class="left li-xlarge" id="incomes">
                            <input type="hidden" id="incomeFlag" name="incomeFlag" value="1"/>
                            <p >收支:</p>
                            <p class="current"><a href="#" id="shouru" aval="1" onclick="shouzhi(this)">收入</a></p>
                            <p><a href="#" id="zhichu" aval="0" onclick="shouzhi(this)">支出</a></p>
                        </li>
                        <li class="left li-xlarge" id="types">
                            <input type="hidden" id="optType" name="optType" value="2"/>
                            <p>类型:</p>
                            <p><a href="#" id="chongzhi" aval="1" onclick="totype(this)">充值</a></p>
                            <p><a href="#" id="tixian" aval="3" onclick="totype(this)">提现</a></p>
                            <p class="current"><a href="#" id="xiadan" aval="2" onclick="totype(this)">下单</a></p>
                            <p><a href="#" id="tuikuan" aval="4" onclick="totype(this)">退款</a></p>
                        </li>
                    </ul>
                </div>

                <div class="right-list-table">
                    <table class="table table-bg  table-striped-even table-height50">
                        <thead>
                        <tr>
                            <th>时间</th>
                            <th>收入</th>
                            <th>支出</th>
                            <th>余额</th>
                            <th>类型</th>
                            <th>对方</th>
                            <th>详细说明</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <!-- 订单列表 -->
                <div class="right-list-table" id="searchAccountData">
                </div>
                <!-- 订单列表结束 -->
                <div id="showAccountDiv"></div>
                <!--分页-->
                <div class="biu-paging paging-large">
                    <ul id="pagination-ul">
                    </ul>
                </div>
                <script id="searchAccountTemple" type="text/template">
                    <table class="table  table-bg tb-border mb-20">
                        <tbody>
                        <tr class="width-16" >
                            <td>{{:~timestampToDate('yyyy-MM-dd hh:mm:ss',payTime,'<%=ZoneContextHolder.getZone()%>')}}</td>
                            <td class="red">{{:totalAmount}}</td>
                            <td class="green"> 0yuan</td><%--{{:~liToYuan()}}--%>
                            <td>{{:balancePre}}</td>
                            <td>{{:channel}}</td>
                            <td>{{:remark}}</td>

                        </tr>
                        </tbody>
                    </table>
                </script>
                <!--分页结束-->
            </div>
            </form>


        </div>
    </div>


</div>
<script type="text/javascript" src="${_base}/resources/template/scripts/modular/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="${_base}/resources/template/scripts/modular/frame.js"></script>
<script src="${_base}/resources/spm_modules/my97DatePicker/WdatePicker.js"></script>
</body>

<%@ include file="/inc/incJs.jsp" %>

<script type="text/javascript">
    var current = "myaccount";
    var pager;
    (function () {
        seajs.use('app/jsp/balance/account', function(accountListPage) {
            pager = new accountListPage({element : document.body});
            pager.render();
        });
    })();
    //选择结束时间触发
    function endtime() {
        pager._incomeList();
    }
    //收支切换
    function shouzhi(target) {
        var cc = $(target).parent().attr("class");
        var aval = $(target).attr("aval");
//        alert(aval);
        if (cc!=null){
            return;
        }
        $("#incomes p").each(function(){
            $(this).attr("class",null);
        });
        $(target).parent().attr("class","current");
        $("#incomeFlag").val(aval);
    }
    //日期切换
    function todate(target,id) {
        var cc = $(target).parent().attr("class");
        if (cc!=null){
            return;
        }
        if (id==today){
            $("#beginDate").val(new Date().format("yyyy-MM-dd"));
            $("#endDate").val(new Date().format("yyyy-MM-dd"));
        }
        if(id==oneMonth){
            var begdate = new Date();
            begdate.setMonth(begdate.getMonth()-1);
            $("#beginDate").val(begdate.format("yyyy-MM-dd"));
            $("#endDate").val(new Date().format("yyyy-MM-dd"));
        }
        if(id==threeMonth){
            var begdate = new Date();
            var date = begdate;
            begdate.setMonth(begdate.getMonth()-3);
            $("#beginDate").val(begdate.format("yyyy-MM-dd"));
            $("#endDate").val(new Date().format("yyyy-MM-dd"));
        }
        if(id==oneyear){
            var begdate = new Date();
            begdate.setYear(begdate.getFullYear()-1);
            $("#beginDate").val(begdate.format("yyyy-MM-dd"));
            $("#endDate").val(new Date().format("yyyy-MM-dd"));
        }
        $("#dates p").each(function(){
            $(this).attr("class",null);
        });
        $(target).parent().attr("class","current");
    }
    //类型切换
    function totype(target) {
        var cc = $(target).parent().attr("class");
        var aval = $(target).attr("aval");
//        alert(aval);
        $("#optType").val(aval);
        if (cc!=null){
            return;
        }
        $("#types p").each(function(){
            $(this).attr("class",null);
        });
        $(target).parent().attr("class","current");
    }

</script>
</html>


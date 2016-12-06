<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="_base" value="${pageContext.request.contextPath}"/>
<c:set var="_slpres" value="${_base}/resources/local"/>
<c:set var="i18nRes" value="${_base}/resources/i18n/"/>
<c:set var="spmRes" value="${_base}/resources/spm_modules"/>
<c:set var="accountBalanceLink" value="${_base}/account/balance/index"/>
<c:set var="accountRechargeOneLink" value="${_base}/account/recharge/one"/>

<script>
    var _base = "${_base}";
    var _i18n_res = "${i18nRes}";
    var _spm_res = "${spmRes}";
    var ssoLoginUrl="${ssoLoginUrl}";
    var uedroot="${uedroot}";
    var currentLan = "<%=response.getLocale()%>";

</script>
<script src="${_base}/resources/spm_modules/jquery/1.9.1/jquery.min.js"></script>
<script src="${_base}/resources/spm_modules/seajs/2.3.0/dist/sea.js"></script>
<script src="${_base}/resources/spm_modules/seajs/seajs-css.js"></script>
<script src="${_base}/resources/spm_modules/app/core/config.js"></script>
<script>
    
    Date.prototype.stdTimezoneOffset = function() {
        var jan = new Date(this.getFullYear(), 0, 1);
        var jul = new Date(this.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
        };

    //get timezone
    Date.prototype.dst = function() {
        return this.getTimezoneOffset() < this.stdTimezoneOffset();
    }
    var today = new Date();
	//send to the back
	$.post(_base+"/timezone.htm?offset="+today.stdTimezoneOffset());


    Œ–
    Date.prototype.format = function(format) {
        var date = {
               "M+": this.getMonth() + 1,
               "d+": this.getDate(),
               "h+": this.getHours(),
               "m+": this.getMinutes(),
               "s+": this.getSeconds(),
               "q+": Math.floor((this.getMonth() + 3) / 3),
               "S+": this.getMilliseconds()
        };
        if (/(y+)/i.test(format)) {
               format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in date) {
               if (new RegExp("(" + k + ")").test(format)) {
                      format = format.replace(RegExp.$1, RegExp.$1.length == 1
                             ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
               }
        }
        return format;
  }

</script>
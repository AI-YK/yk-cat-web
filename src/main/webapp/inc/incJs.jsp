<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="_base" value="${pageContext.request.contextPath}"/>
<c:set var="_slpres" value="${_base}/resources/local"/>
<c:set var="i18nRes" value="${_base}/resources/i18n/"/>
<c:set var="spmRes" value="${_base}/resources/spm_modules"/>
<c:set var="_currentLan" value="${pageContext.response.locale}"/>
<script>
    var _base = "${_base}";
    var _user_id = "${user.userId}";
    var _data_type = "data_type_" + _user_id;
    var _domain_id = "domain_id_" + _user_id;
    var _topic_id = "topic_id_" + _user_id;
    var _i18n_res = "${i18nRes}";
    var _spm_res = "${spmRes}";
    var uedroot="${uedroot}";
    var currentLan = "${_currentLan}";

</script>
<script src="${_base}/resources/spm_modules/jquery/1.9.1/jquery.min.js"></script>
<script src="${_base}/resources/spm_modules/seajs/2.3.0/dist/sea.js"></script>
<script src="${_base}/resources/spm_modules/seajs/seajs-css.js"></script>
<script src="${_base}/resources/spm_modules/app/core/config.js"></script>

<!-- 首页类脚 -->
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<div class="footer">
	<div class="footer-main">
		<ul>
			<li>
				<p>
					<a target="_bank" href="${yeesightUrls.yeesightAboutUrl}"><spring:message code="indexFoot.about"/></a>|
				</p>
				<p>
					<a target="_bank" href="${yeesightUrls.yeesightBigDataUrl}"><spring:message code="indexFoot.CrossLanguage"/></a>|
				</p>
				<p>
					<a target="_bank" href="${yeesightUrls.yeesightSolutionUrl}"><spring:message code="indexFoot.Solution"/></a>
				</p>
			</li>
			<li class="right">Copyright @2016 www.yeesight.com All rights
				reserved.<spring:message code="indexFoot.BeijingICP"/></li>
		</ul>
	</div>
</div>
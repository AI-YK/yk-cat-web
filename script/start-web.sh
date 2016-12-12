#!/bin/sh
#env
APP_NAME="yc.portal.web"

#set base home
RESOURCES_HOME=${CATALINA_HOME}/webapps/ROOT/WEB-INF/classes

#change config
pushd ${RESOURCES_HOME}
# sso.properties
sed -i "s%casServerLoginUrl=.*%casServerLoginUrl=${casServerLoginUrl}%g" ./sso.properties
sed -i "s%casServerUrlPrefix=.*%casServerUrlPrefix=${casServerUrlPrefix}%g" ./sso.properties
sed -i "s%serverName=.*%serverName=${serverName}%g" ./sso.properties
sed -i "s%logOutServerUrl=.*%logOutServerUrl=${logOutServerUrl}%g" ./sso.properties
sed -i "s%logOutBackUrl=.*%logOutBackUrl=${logOutBackUrl}%g" ./sso.properties
sed -i "s%casServerLoginUrl_Inner=.*%casServerLoginUrl_Inner=${casServerLoginUrl_Inner}%g" ./sso.properties
sed -i "s%casServerUrlPrefix_Inner=.*%casServerUrlPrefix_Inner=${casServerUrlPrefix_Inner}%g" ./sso.properties
sed -i "s%serverName_Inner=.*%serverName_Inner=${serverName_Inner}%g" ./sso.properties
sed -i "s%logOutServerUrl_Inner=.*%logOutServerUrl_Inner=${logOutServerUrl_Inner}%g" ./sso.properties
sed -i "s%logOutBackUrl_Inner=.*%logOutBackUrl_Inner=${logOutBackUrl_Inner}%g" ./sso.properties
#paas-conf.properties
sed -i "s%paas.auth.url=.*%paas.auth.url=${PAAS_AUTH_URL}%g" ./paas/paas-conf.properties
sed -i "s%paas.auth.pid=.*%paas.auth.pid=${PAAS_AUTH_PID}%g" ./paas/paas-conf.properties
sed -i "s%paas.ccs.serviceid=.*%paas.ccs.serviceid=${PAAS_CCS_ID}%g" ./paas/paas-conf.properties
sed -i "s%paas.ccs.servicepassword=.*%paas.ccs.servicepassword=${PAAS_CCS_PWD}%g" ./paas/paas-conf.properties

sed -i "s%paas.sdk.mode=.*%paas.sdk.mode=${SDK_MODE}%g" ./paas/paas-conf.properties
sed -i "s%ccs.appname=.*%ccs.appname=${CCS_NAME}%g" ./paas/paas-conf.properties
sed -i "s%ccs.zk_address=.*%ccs.zk_address=${ZK_ADDR}%g" ./paas/paas-conf.properties

#dubbo.properties   各中心要根据情况自己修改成与dubbo.properties中对应的配置项
sed -i "s%dubbo.registry.address=.*%dubbo.registry.address=${REST_REGISTRY_ADDR}%g" ./dubbo.properties
#email-conf.properties
sed -i "s%email.hostname=.*%email.hostname=${EMAIL_HOSTNAME}%g" ./email/email-conf.properties
sed -i "s%email.from.mail=.*%email.from.mail=${EMAIL_FROM_MAIL}%g" ./email/email-conf.properties
sed -i "s%email.from.name=.*%email.from.name=${EMAIL_FROM_NAME}%g" ./email/email-conf.properties
sed -i "s%email.from.user=.*%email.from.user=${EMAIL_FROM_USER}%g" ./email/email-conf.properties
sed -i "s%email.from.password=.*%email.from.password=${EMAIL_FROM_PASSWORD}%g" ./email/email-conf.properties
#hcicloudConf.properties
sed -i "s%hcicloud.url=.*%hcicloud.url=${HCICLOUD_URL}%g" ./threeSer/hcicloudConf.properties
sed -i "s%hcicloud.appkey=.*%hcicloud.appkey=${HCICLOUD_APPKEY}%g" ./threeSer/hcicloudConf.properties
sed -i "s%hcicloud.devkey=.*%hcicloud.devkey=${HCICLOUD_DEVKEY}%g" ./threeSer/hcicloudConf.properties
#yeekitConf.properties
sed -i "s%yeekit.translate.url=.*%yeekit.translate.url=${YEEKIT_TRANSLATE_URL}%g" ./threeSer/yeekitConf.properties
sed -i "s%yeekit.translate.appkid=.*%yeekit.translate.appkid=${YEEKIT_TRANSLATE_APPKID}%g" ./threeSer/yeekitConf.properties
sed -i "s%yeekit.translate.appkey=.*%yeekit.translate.appkey=${YEEKIT_TRANSLATE_APPKEY}%g" ./threeSer/yeekitConf.properties
sed -i "s%yee.detection.url=.*%yee.detection.url=${YEE_DETECTION_URL}%g" ./threeSer/yeekitConf.properties
#config.properties
sed -i "s%TENANT_ID=.*%TENANT_ID=${TENANT_ID}%g" ./config.properties
sed -i "s%REQUEST_KEY=.*%REQUEST_KEY=${REQUEST_KEY}%g" ./config.properties
sed -i "s%ACTION_URL=.*%ACTION_URL=${ACTION_URL}%g" ./config.properties
sed -i "s%APP_ACTION_URL=.*%APP_ACTION_URL=${APP_ACTION_URL}%g" ./config.properties
sed -i "s%NOTIFY_URL=.*%NOTIFY_URL=${NOTIFY_URL}%g" ./config.properties
sed -i "s%RETURN_URL=.*%RETURN_URL=${RETURN_URL}%g" ./config.properties
#FocusSms.properties
sed -i "s%SoaServerIpAddressA=.*%SoaServerIpAddressA=${SoaServerIpAddressA}%g" ./FocusSms.properties
sed -i "s%SoaServerIpPortA=.*%SoaServerIpPortA=${SoaServerIpPortA}%g" ./FocusSms.properties
sed -i "s%HttpServerIpAddressA=.*%HttpServerIpAddressA=${HttpServerIpAddressA}%g" ./FocusSms.properties
sed -i "s%HttpServerPortA=.*%HttpServerPortA=${HttpServerPortA}%g" ./FocusSms.properties
sed -i "s%TcpServerAddressA=.*%TcpServerAddressA=${TcpServerAddressA}%g" ./FocusSms.properties
sed -i "s%TcpServerPortA=.*%TcpServerPortA=${TcpServerPortA}%g" ./FocusSms.properties
sed -i "s%TcpReceivePort=.*%TcpReceivePort=${TcpReceivePort}%g" ./FocusSms.properties
sed -i "s%soapnamespace=.*%soapnamespace=${soapnamespace}%g" ./FocusSms.properties
sed -i "s%yeecloudUser=.*%yeecloudUser=${yeecloudUser}%g" ./FocusSms.properties
sed -i "s%yeecloudPassword=.*%yeecloudPassword=${yeecloudPassword}%g" ./FocusSms.properties
sed -i "s%MessageFormYeecloud=.*%MessageFormYeecloud=${MessageFormYeecloud}%g" ./FocusSms.properties
popd


nohup ${CATALINA_HOME}/bin/catalina.sh run >> /${APP_NAME}.log

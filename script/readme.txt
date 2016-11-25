1.编译打包
#一定要先clean
gradle clean
#然后再打包
gradle build -x test

2.生成镜像
#在本地生成带私服前缀的镜像  (每次打镜像前版本号要更新)
docker build -t 10.19.13.18:5000/yc-portal-web:v1.0 .
#将镜像推送到私服
docker push 10.19.13.18:5000/yc-portal-web:v1.0

3. 运行镜像
#--net=host  表示为主机(host)模式  去掉该配置，默认为桥接(bridge)模式
#-e 代表需要设置的环境变量
docker run -d --name yc-portal-web-v1.0  -p 14101:8080  \
-e "casServerLoginUrl=http://10.19.13.24:14105/yc-sso-web/login"  \
-e "casServerUrlPrefix=http://10.19.13.24:14105/yc-sso-web"   \
-e "serverName=http://10.19.13.20:14101"   \
-e "logOutServerUrl=http://10.19.13.24:14105/yc-sso-web/logout"   \
-e "logOutBackUrl=http://10.19.13.20:14101/"   \
-e "casServerLoginUrl_Inner=http://10.19.13.24:14105/yc-sso-web/login"  \
-e "casServerUrlPrefix_Inner=http://10.19.13.24:14105/yc-sso-web"   \
-e "serverName_Inner=http://10.19.13.20:14101"   \
-e "logOutServerUrl_Inner=http://10.19.13.24:14105/yc-sso-web/logout"   \
-e "logOutBackUrl_Inner=http://10.19.13.20:14101/"   \
-e "SDK_MODE=0" \
-e "PAAS_AUTH_URL=http://10.1.245.4:19811/service-portal-uac-web/service/auth" \
-e "PAAS_AUTH_PID=D14F7D708109471AB6F3084B2ABAE9A6" \
-e "PAAS_CCS_ID=CCS011" \
-e "PAAS_CCS_PWD=123456" \
-e "REST_REGISTRY_ADDR=10.19.13.13:29181"  \
-e "EMAIL_HOSTNAME=mail.asiainfo.com" \
-e "EMAIL_FROM_MAIL=opt-common@asiainfo.com" \
-e "EMAIL_FROM_NAME=译云" \
-e "EMAIL_FROM_USER=opt-common@asiainfo.com" \
-e "EMAIL_FROM_PASSWORD=1q2w3e4r@" \
-e "HCICLOUD_URL=http://test.api.hcicloud.com:8880/tts/SynthText" \
-e "HCICLOUD_APPKEY=ad5d5421" \
-e "HCICLOUD_DEVKEY=bca4b0015b309b76301bb10efdf90561" \
-e "YEEKIT_TRANSLATE_URL=https://translateport.yeekit.com/translate" \
-e "YEEKIT_TRANSLATE_APPKID=58105e00cabc3" \
-e "YEEKIT_TRANSLATE_APPKEY=53eeb0bb6c1b613ab361a4f8057b2bd9" \
-e "YEE_DETECTION_URL=http://translateport.yeekit.com:9006/detection" \
-e "TENANT_ID=yeecloud" \
-e "REQUEST_KEY=7igfgyfwn2jlyjs3bdns6lhysnzy5y7l" \
-e "ACTION_URL=http://10.19.13.24:14110/opt-pay/pay/gotoPayByOrg" \
-e "APP_ACTION_URL=http://10.19.13.24:14110/opt-pay/pay/gotoPayByOrg" \
-e "NOTIFY_URL=http://10.19.13.20:14101/portal-web/pay/payResult" \
-e "RETURN_URL=http://10.19.13.20:14101/portal-web/pay/payResultView" \
-e "SoaServerIpAddressA=10.19.13.29" \
-e "SoaServerIpPortA=8082" \
-e "HttpServerIpAddressA=10.19.13.29" \
-e "HttpServerPortA=8082" \
-e "TcpServerAddressA=10.19.13.29" \
-e "TcpServerPortA=10086" \
-e "TcpReceivePort=2011" \
-e "soapnamespace=http://wsservice.sms.cc.order.com" \
-e "yeecloudUser=yeecloud" \
-e "yeecloudPassword=yee123" \
-e "MessageFormYeecloud=yeecloud" \
10.19.13.18:5000/yc-portal-web:v1.0_7

#查看镜像启动日志
docker logs yc-portal-web-v1.0
#进入容器，查看镜像内部的情况
docker exec -it yc-portal-web-v1.0 /bin/bash
#删除运行的容器
docker rm -fv yc-protal-web-v1.0

#=============更新日志========================#
*2016-09-23
1）初始打包

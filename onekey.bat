@echo off
rem /**
rem  * ���-������ȫ��Ŀ���
rem  *
rem  * Author: mengbo@asiainfo.com
rem  */

cd %~dp0

cd %cd%
@call gradle clean
@call gradle build -x test

cd bin
pause
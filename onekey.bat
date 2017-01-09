@echo off
rem /**
rem  * 译见-公共安全项目打包
rem  *
rem  * Author: mengbo@asiainfo.com
rem  */

cd %~dp0

cd %cd%
@call gradle clean
@call gradle build -x test

cd bin
pause
@echo off
cls

for %%i in ("%~dp0.") do SET "scpath=%%~fi"


for /f "delims=" %%a in ('call %scpath%\iniparser.cmd config.ini Install Location') do (
    set locP=%%a
)

for /f "delims=" %%a in ('call %scpath%\iniparser.cmd config.ini DualInstall Location') do (
    set locS=%%a
)

for /f "delims=" %%a in ('call %scpath%\iniparser.cmd config.ini Users Default') do (
    set usrP=%%a
)

for /f "delims=" %%a in ('call %scpath%\iniparser.cmd config.ini Users Secondary') do (
    set usrS=%%a
)


:MENU
echo.
echo ...............................................
echo Select what to launch. 0 to EXIT.
echo ...............................................
echo.
echo 1 - Warframe Primary Direct
echo 2 - Warframe Secondary Direct
echo 3 - Warframe Primary Launcher
echo 4 - Warframe Secondary Launcher
echo 0 - Quit
echo.

SET /P M="Enter the action and press Enter:  "
IF %M%==1 GOTO WFPD
IF %M%==2 GOTO WFSD
IF %M%==3 GOTO WFPL
IF %M%==4 GOTO WFSL
if %M%==0 GOTO EOF
 
:WFPD
start "" C:\Windows\System32\runas.exe "/user:%usrP%" /savecreds ^
	"%locP%\Warframe.x64.exe -fullscreen:0 -dx10:0 -dx11:1 -threadedworker:1 -cluster:public -language:en -clienttype:Steam "
GOTO MENU

:WFSD
start "" C:\Windows\System32\runas.exe "/user:%usrS%" /savecreds ^
	"%locS%\Warframe.x64.exe  -fullscreen:0 -dx10:0 -dx11:1 -threadedworker:1 -cluster:public -language:en -clienttype:Steam "
GOTO MENU

:WFPL
start "" C:\Windows\System32\runas.exe "/user:%usrP%" /savecreds ^
	"%locP%\Tools\Launcher.exe -cluster:public -language:en -registry:Steam"
GOTO MENU

:WFSL
start "" C:\Windows\System32\runas.exe "/user:%usrS%" /savecreds ^
	"%locS%\Tools\Launcher.exe -cluster:public -language:en -registry:Steam"
GOTO MENU

 
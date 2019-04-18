@echo off

for %%i in ("%~dp0.") do SET "scpath=%%~fi"

start "" "%scpath%\wfmult.exe" "%scpath%\wfmult.ahk" "-DEBUG_MODE"
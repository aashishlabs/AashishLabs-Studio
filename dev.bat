@echo off
set "PROJECT_DIR=%~dp0"
set "RUNTIME_DIR=C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies"
set "PATH=%RUNTIME_DIR%\node\bin;%RUNTIME_DIR%\bin;%PATH%"
cd /d "%PROJECT_DIR%"
echo Starting AashishLabs Studio at http://localhost:3000
echo Keep this window open while viewing the site.
call "%RUNTIME_DIR%\bin\pnpm.cmd" dev
pause

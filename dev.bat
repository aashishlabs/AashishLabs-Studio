@echo off
set "PROJECT_DIR=%~dp0"
set "RUNTIME_DIR=C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies"

if exist "%RUNTIME_DIR%\node\bin\node.exe" set "PATH=%RUNTIME_DIR%\node\bin;%RUNTIME_DIR%\bin;%PATH%"

cd /d "%PROJECT_DIR%"
echo Starting AashishLabs Studio...
echo Keep this window open while viewing the site.

where pnpm >nul 2>nul
if errorlevel 1 (
  echo pnpm was not found. Install Node.js 20+, then run: corepack enable
  pause
  exit /b 1
)

start "" /min powershell -NoProfile -WindowStyle Hidden -Command "Start-Sleep -Seconds 8; Start-Process 'http://localhost:3000'"
call pnpm dev
pause

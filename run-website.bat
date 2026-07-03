@echo off
title Cut to Silence React Website
cd /d "%~dp0"
echo Starting Cut to Silence website...
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Please install Node.js first from https://nodejs.org/
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing dependencies. This may take a few minutes...
  call npm install
)
call npm run dev
pause

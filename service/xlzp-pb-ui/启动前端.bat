@echo off
chcp 65001 >nul 2>&1
title 小鹿智跑管理系统 - 前端启动
cd /d "%~dp0"

set NODE_HOME=D:\Node
set PATH=%NODE_HOME%;%PATH%

:: 解决 Node.js 24 + webpack OpenSSL 兼容性问题
set NODE_OPTIONS=--openssl-legacy-provider

echo [1/3] 检查 npm...
D:\Node\npm.cmd --version
if %errorlevel% neq 0 (
    echo [错误] npm 未找到！
    pause
    exit /b 1
)

echo.
echo [2/3] 检查 node_modules...
if not exist "node_modules" (
    echo [安装] 首次运行，正在安装前端依赖（约 3-5 分钟）...
    D:\Node\npm.cmd install --registry=https://registry.npmmirror.com
    if %errorlevel% neq 0 (
        echo.
        echo [错误] npm install 失败！
        pause
        exit /b 1
    )
)

echo.
echo [3/3] 启动前端开发服务器（端口 8081）...
echo ================================================
echo   浏览器将自动打开: http://localhost:8081
echo   按 Ctrl+C 可以停止
echo ================================================
echo.

D:\Node\npm.cmd run dev

pause

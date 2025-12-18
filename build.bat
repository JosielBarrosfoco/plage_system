@echo off
REM Script de build para deployment automático (Windows)

echo 🔨 Instalando dependencias...
call npm install --legacy-peer-deps

echo 📦 Gerando tipos do Wrangler...
call npm run cf-typegen

echo 🏗️  Executando build...
call npm run build

echo ✅ Build concluido! Os arquivos estao em dist/client/


#!/bin/bash
# Script de build para deployment automático

echo "🔨 Instalando dependências..."
npm install --legacy-peer-deps

echo "📦 Gerando tipos do Wrangler..."
npm run cf-typegen

echo "🏗️  Executando build..."
npm run build

echo "✅ Build concluído! Os arquivos estão em dist/client/"


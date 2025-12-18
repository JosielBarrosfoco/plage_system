# 🚀 Guia de Deploy - PLAGE System

## ⚠️ Problema Atual

O sistema de deployment automático não está executando o build da aplicação React/Vite.

## ✅ Soluções

### Opção 1: Build Manual (Recomendado para início)

1. **No seu computador local, execute:**
   ```bash
   npm install --legacy-peer-deps
   npm run build
   ```

2. **Remova temporariamente `dist/client` do .gitignore:**
   - Edite `.gitignore` e comente a linha `dist/`
   - Ou remova apenas `dist/client` do ignore

3. **Faça commit e push dos arquivos de build:**
   ```bash
   git add dist/client
   git commit -m "Adiciona arquivos de build"
   git push
   ```

4. **O deployment automático agora servirá os arquivos de `dist/client`**

### Opção 2: Configurar Build Automático no Servidor

Se o seu hosting suporta Node.js e pode executar scripts:

1. **Configure o sistema de deployment para executar:**
   ```bash
   npm install --legacy-peer-deps
   npm run cf-typegen
   npm run build
   ```

2. **Configure o diretório de saída para:** `dist/client`

3. **O arquivo `.htaccess` na raiz redirecionará automaticamente para `dist/client`**

### Opção 3: Usar Scripts de Build

Execute um dos scripts antes do deployment:
- **Linux/Mac:** `bash build.sh`
- **Windows:** `build.bat`

## 📁 Estrutura de Arquivos

Após o build, a estrutura deve ser:
```
/
├── dist/
│   └── client/
│       ├── index.html
│       ├── assets/
│       │   ├── index-XXXXX.css
│       │   └── index-XXXXX.js
│       ├── .htaccess
│       └── web.config
└── .htaccess (redireciona para dist/client)
```

## 🔧 Configuração do Servidor

O arquivo `.htaccess` na raiz do projeto redireciona automaticamente para `dist/client` quando os arquivos estão disponíveis.

## ❓ Qual Sistema de Hosting Você Está Usando?

Para uma solução mais específica, me informe:
- Nome do serviço de hosting
- Se suporta Node.js
- Se pode executar scripts de build


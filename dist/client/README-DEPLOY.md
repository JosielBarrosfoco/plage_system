# 📦 Guia de Deploy - PLAGE System

## ✅ Arquivos para Upload

Faça upload de **TODOS** os arquivos e pastas desta pasta (`dist/client`) para a pasta pública do seu hosting:

```
pasta-publica/
  ├── index.html
  ├── assets/
  │   ├── index-XXXXX.css
  │   └── index-XXXXX.js
  ├── .htaccess (para Apache)
  ├── web.config (para IIS/Windows Server)
  └── _redirects (para Netlify)
```

## 🔧 Configuração do Servidor

### Para Apache (mais comum)
- O arquivo `.htaccess` já está incluído
- Certifique-se de que o módulo `mod_rewrite` está habilitado
- Funciona automaticamente após o upload

### Para IIS (Windows Server)
- O arquivo `web.config` já está incluído
- Funciona automaticamente após o upload

### Para Netlify
- O arquivo `_redirects` já está incluído
- Funciona automaticamente após o upload

### Para Nginx
- Use o conteúdo do arquivo `nginx.conf` como referência
- Adicione a configuração ao seu arquivo de configuração do Nginx
- Reinicie o servidor Nginx após a configuração

## ⚠️ Importante

1. **Faça upload de TODOS os arquivos**, incluindo a pasta `assets`
2. **Mantenha a estrutura de pastas** - não mova arquivos de lugar
3. **Após fazer alterações no código**, execute `npm run build` novamente e faça upload dos novos arquivos

## 🔄 Atualizando o Site

Sempre que fizer alterações:

1. No seu computador, execute: `npm run build`
2. Faça upload de todos os arquivos da pasta `dist/client` novamente
3. Limpe o cache do navegador (Ctrl+F5) para ver as mudanças

## 🐛 Problemas Comuns

### Página em branco
- Verifique se todos os arquivos foram enviados, especialmente a pasta `assets`
- Verifique o console do navegador (F12) para erros

### Rotas não funcionam (404 ao acessar /sobre, /portfolio, etc.)
- Verifique se o arquivo `.htaccess` (Apache) ou `web.config` (IIS) foi enviado
- Verifique se o módulo `mod_rewrite` está habilitado (Apache)

### Arquivos CSS/JS não carregam
- Verifique se a pasta `assets` foi enviada completamente
- Verifique se os caminhos estão corretos (devem ser relativos ou absolutos começando com `/`)


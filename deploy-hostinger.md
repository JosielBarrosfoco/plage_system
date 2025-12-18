# 🚀 Deploy Rápido - Hostinger

## Método 1: Upload Manual (Mais Simples)

### Passo 1: Preparar Arquivos
```bash
npm run build
```

### Passo 2: Acessar cPanel Hostinger
1. Acesse: https://hpanel.hostinger.com
2. Vá em **Gerenciador de Arquivos**

### Passo 3: Upload
1. Navegue até `public_html`
2. **Delete tudo** que estiver lá
3. Faça upload de **TODOS** os arquivos de `dist/client/`:
   - ✅ `index.html`
   - ✅ Pasta `assets/` (com os arquivos dentro)
   - ✅ `.htaccess`

### Passo 4: Verificar Permissões
- `.htaccess` → **644**
- `index.html` → **644**  
- Pasta `assets/` → **755**

### Pronto! 🎉
Acesse seu domínio e veja o site funcionando.

---

## Método 2: Via Git (Se Configurado)

Se você configurou Git no cPanel:

1. **No seu computador:**
   ```bash
   npm run build
   git add dist/client/
   git commit -m "Deploy atualizado"
   git push
   ```

2. **No cPanel da Hostinger:**
   - Vá em **Git Version Control**
   - Clique em **Pull ou Deploy**
   - Configure o diretório de deploy para: `public_html`

---

## ⚠️ Problemas Comuns

### Página em branco
- Verifique se a pasta `assets/` foi enviada completa
- Verifique o console do navegador (F12)

### Rotas não funcionam
- Verifique se `.htaccess` foi enviado
- Verifique permissões (644)

### Arquivos não carregam
- Verifique permissões da pasta `assets/` (755)


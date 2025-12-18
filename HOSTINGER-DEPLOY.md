# 🚀 Deploy na Hostinger - PLAGE System

## 📋 Passo a Passo Completo

### 1️⃣ Preparar Arquivos Localmente

Os arquivos já estão buildados em `dist/client/`. Certifique-se de fazer commit e push:

```bash
git add dist/client/
git add .htaccess
git commit -m "Prepara arquivos para deploy na Hostinger"
git push
```

### 2️⃣ Acessar o cPanel da Hostinger

1. Acesse o **cPanel** da sua conta Hostinger
2. Vá em **Gerenciador de Arquivos** (File Manager)

### 3️⃣ Configurar o Diretório Público

**Opção A: Usar a raiz do domínio (Recomendado)**

1. No File Manager, vá para a pasta `public_html` (ou `www` dependendo da configuração)
2. **Delete todos os arquivos antigos** (se houver)
3. Faça upload de **TODOS** os arquivos da pasta `dist/client/`:
   - `index.html`
   - Pasta `assets/` completa
   - `.htaccess`
   - `web.config` (opcional, para IIS)

**Opção B: Usar subpasta**

Se quiser manter em uma subpasta, faça upload para `public_html/plage/` e ajuste o `.htaccess`

### 4️⃣ Estrutura Final no Servidor

```
public_html/
├── index.html
├── assets/
│   ├── index-B0mR16dk.css
│   └── index-B5gw6w51.js
├── .htaccess
└── web.config (opcional)
```

### 5️⃣ Verificar Permissões

No File Manager da Hostinger:
- `.htaccess` deve ter permissão **644**
- `index.html` deve ter permissão **644**
- Pasta `assets/` deve ter permissão **755**

### 6️⃣ Configurar Domínio (se necessário)

Se estiver usando um domínio personalizado:
1. Vá em **Domínios** no cPanel
2. Configure o domínio para apontar para `public_html`

## ⚙️ Configurações Específicas da Hostinger

### Habilitar mod_rewrite

O `.htaccess` já está configurado, mas verifique se o mod_rewrite está habilitado:
- Geralmente já vem habilitado na Hostinger
- Se não funcionar, entre em contato com o suporte

### PHP (não necessário, mas não interfere)

A Hostinger procura por `composer.json`, mas isso não afeta sua aplicação React.
Os arquivos estáticos (HTML, CSS, JS) funcionam independentemente.

## 🔧 Troubleshooting

### Página em branco
1. Verifique se todos os arquivos foram enviados
2. Verifique se a pasta `assets/` está completa
3. Verifique o console do navegador (F12) para erros

### Rotas não funcionam (404 em /sobre, /portfolio)
1. Verifique se o arquivo `.htaccess` foi enviado
2. Verifique as permissões do `.htaccess` (644)
3. Entre em contato com suporte se mod_rewrite não estiver habilitado

### Arquivos CSS/JS não carregam
1. Verifique se a pasta `assets/` foi enviada completamente
2. Verifique as permissões da pasta `assets/` (755)
3. Verifique se os caminhos no `index.html` estão corretos (`/assets/...`)

## 🔄 Atualizar o Site

Sempre que fizer alterações:

1. **Localmente:**
   ```bash
   npm run build
   ```

2. **No cPanel da Hostinger:**
   - Acesse File Manager
   - Delete os arquivos antigos em `public_html/`
   - Faça upload dos novos arquivos de `dist/client/`

**OU** use Git (se configurado):
```bash
git add dist/client/
git commit -m "Atualiza site"
git push
# O deployment automático atualizará (se configurado)
```

## 📞 Suporte Hostinger

Se tiver problemas:
- **Chat ao vivo:** Disponível no painel da Hostinger
- **Ticket:** Abra um ticket de suporte
- **Documentação:** https://www.hostinger.com.br/tutoriais

## ✅ Checklist Final

- [ ] Arquivos buildados em `dist/client/`
- [ ] Commit e push feitos no GitHub
- [ ] Arquivos enviados para `public_html/` na Hostinger
- [ ] `.htaccess` enviado e com permissão 644
- [ ] Pasta `assets/` completa e com permissão 755
- [ ] Testado no navegador
- [ ] Rotas funcionando (/sobre, /portfolio, /clientes)


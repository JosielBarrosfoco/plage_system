# 🔗 Como Configurar Webhook na Hostinger

## ✅ Vantagens do Webhook

- ✅ Mais simples que GitHub Actions
- ✅ Não precisa configurar secrets
- ✅ Atualização automática ao fazer push
- ✅ Arquivos buildados já estão no repositório

## 📋 Passo a Passo

### 1. Acessar o cPanel da Hostinger

1. Acesse: https://hpanel.hostinger.com
2. Faça login na sua conta
3. Selecione seu domínio/hosting

### 2. Configurar Git Version Control

1. No cPanel, procure por **"Git Version Control"** ou **"Git"**
2. Clique para abrir

### 3. Conectar ao Repositório

1. **Se já está conectado:**
   - Verifique se está conectado ao repositório correto
   - Repositório: `https://github.com/JosielBarrosfoco/plage_system.git`
   - Branch: `main`

2. **Se não está conectado:**
   - Clique em **"Create"** ou **"Adicionar Repositório"**
   - Cole a URL: `https://github.com/JosielBarrosfoco/plage_system.git`
   - Branch: `main`
   - Diretório de deploy: Deixe em branco ou use `public_html`

### 4. Configurar Diretório Público

**Opção A: Apontar diretamente para dist/client/ (Recomendado)**

No Git Version Control:
- **Diretório Público:** `dist/client`
- Isso faz o servidor servir os arquivos diretamente de `dist/client/`

**Opção B: Copiar para public_html/**

1. Configure diretório de deploy: `public_html`
2. Adicione comando pós-pull (se disponível):
   ```bash
   cp -r dist/client/* public_html/ 2>/dev/null || true
   ```

### 5. Configurar Webhook no GitHub

1. No GitHub, vá no seu repositório: `https://github.com/JosielBarrosfoco/plage_system`
2. Vá em **Settings** → **Webhooks** → **Add webhook**
3. **Payload URL:** 
   - Você precisa da URL do webhook da Hostinger
   - Geralmente está no cPanel → Git Version Control
   - Formato: `https://seu-dominio.com/webhook.php` ou similar
4. **Content type:** `application/json`
5. **Events:** Selecione "Just the push event"
6. **Active:** Marque
7. Clique em **"Add webhook"**

### 6. Testar o Webhook

1. Faça uma pequena alteração em qualquer arquivo
2. Commit e push:
   ```bash
   git add .
   git commit -m "Teste webhook"
   git push origin main
   ```
3. Verifique no cPanel se o pull foi executado
4. Acesse seu domínio e veja se atualizou

## 🔍 Verificações

### Se o webhook não funcionar:

1. **Verifique os logs no GitHub:**
   - Settings → Webhooks → Clique no webhook
   - Veja "Recent Deliveries" para ver se há erros

2. **Verifique no cPanel:**
   - Git Version Control → Veja histórico de pulls
   - Verifique se há erros

3. **Verifique permissões:**
   - O repositório precisa ser público OU
   - Configure token de acesso no webhook

## 📝 Notas Importantes

- ✅ Os arquivos buildados já estão em `dist/client/` no repositório
- ✅ Não precisa executar `npm run build` no servidor
- ✅ O webhook só precisa fazer `git pull`
- ✅ Certifique-se de que o diretório público aponta para `dist/client/`

## 🚀 Após Configurar

Quando você fizer `git push`:
1. GitHub envia webhook para Hostinger
2. Hostinger executa `git pull`
3. Arquivos atualizados em `dist/client/`
4. Site atualizado automaticamente! ✨

## ❓ Precisa de Ajuda?

Se tiver problemas:
1. Verifique se o repositório está público (ou configure token)
2. Verifique se a URL do webhook está correta
3. Verifique os logs no GitHub e no cPanel
4. Certifique-se de que o diretório público está configurado corretamente


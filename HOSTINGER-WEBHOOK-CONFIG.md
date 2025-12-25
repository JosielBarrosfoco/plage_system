# 🔧 Configuração de Webhook para Hostinger

## ⚠️ Problema Identificado

O webhook não está atualizando porque:
1. A aplicação precisa fazer **build** antes de servir os arquivos
2. Os arquivos em `dist/client/` não estão no repositório (estão no .gitignore)
3. O servidor precisa executar `npm install` e `npm run build`

## ✅ Soluções

### Opção 1: Build Manual + Commit (Mais Simples)

Esta é a solução mais confiável para a Hostinger:

1. **Faça build localmente:**
   ```bash
   npm run build
   ```

2. **Commit os arquivos buildados:**
   ```bash
   git add dist/client/
   git commit -m "Atualiza build para deploy"
   git push origin main
   ```

3. **Configure o diretório público para `dist/client/` no cPanel**

### Opção 2: Configurar Build Automático no Servidor

Se a Hostinger suporta Node.js e pode executar scripts:

1. **No cPanel da Hostinger, configure:**
   - **Repositório Git:** Seu repositório GitHub
   - **Branch:** `main`
   - **Diretório de Deploy:** `public_html`
   - **Comando de Build:** (se disponível)
     ```bash
     npm install --legacy-peer-deps && npm run cf-typegen && npm run build
     ```
   - **Diretório Público:** Após o build, copiar conteúdo de `dist/client/` para `public_html/`

### Opção 3: GitHub Actions (Recomendado para o Futuro)

Crie um workflow do GitHub Actions que:
1. Faz build automaticamente
2. Faz deploy para a Hostinger via FTP/SFTP

## 🔍 Verificações

### No cPanel da Hostinger:

1. **Verifique se Node.js está disponível:**
   - Vá em "Seletor de Versão do Node.js" ou "Node.js"
   - Veja se há uma versão configurada
   - Se não houver, o build automático não funcionará

2. **Verifique a configuração do Git:**
   - Vá em "Git Version Control"
   - Verifique se está conectado ao repositório correto
   - Verifique qual branch está configurado

3. **Verifique o diretório de deploy:**
   - Deve apontar para `public_html` ou onde você quer os arquivos

## 📋 Configuração Recomendada (Build Manual)

Como a Hostinger pode não ter Node.js configurado para build automático, recomendo:

### Passo 1: Ajustar .gitignore
Permitir commit de `dist/client/` (já está ajustado)

### Passo 2: Workflow Recomendado

Sempre que fizer alterações:

1. **Desenvolva localmente:**
   ```bash
   npm run dev
   ```

2. **Antes de fazer push, faça build:**
   ```bash
   npm run build
   ```

3. **Commit tudo:**
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push origin main
   ```

4. **No cPanel, configure o diretório público para `dist/client/`**

OU

5. **Configure um script pós-pull no servidor:**
   - Após o pull do Git
   - Executar build
   - Copiar `dist/client/*` para `public_html/`

## 🚀 Script de Deploy para Servidor

Se a Hostinger permitir scripts personalizados, crie este script:

```bash
#!/bin/bash
cd /caminho/para/seu/repositorio
git pull origin main
npm install --legacy-peer-deps
npm run cf-typegen
npm run build
cp -r dist/client/* public_html/
```

## ❓ Próximos Passos

1. Verifique no cPanel se há opção de "Node.js" ou "Build Scripts"
2. Configure o diretório público para `dist/client/` (se fizer build manual)
3. Ou configure build automático se disponível

Me informe o que você encontra no cPanel da Hostinger para eu ajudar com a configuração específica!


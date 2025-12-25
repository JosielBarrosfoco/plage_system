# 🔧 Solução: Hostinger Procurando composer.json

## 🔍 Problema Identificado

A Hostinger está procurando por `composer.json` (projeto PHP), mas este é um projeto **Node.js/React**.

O log mostra:
```
Looking for composer.lock file
composer.lock file was not found
Looking for composer.json file
composer.json file was not found
```

## ✅ Soluções Implementadas

Criei 3 arquivos para ajudar:

### 1. `composer.json` (Criado)
- Arquivo vazio para "enganar" a Hostinger
- Não vai executar nada, mas vai fazer o sistema continuar

### 2. `deploy-hook.php` (Criado)
- Script PHP que copia arquivos de `dist/client/` para `public_html/`
- Pode ser executado manualmente ou via webhook

### 3. `post-receive` (Criado)
- Script bash para executar após git pull
- Copia arquivos automaticamente

## 🚀 Como Configurar na Hostinger

### Opção 1: Configurar Diretório Público (Mais Simples)

No cPanel da Hostinger:

1. **Vá em "Git Version Control"**
2. **Configure o diretório de deploy:**
   - **Diretório de Deploy:** `public_html`
   - **Após Pull:** Execute script para copiar `dist/client/*` para `public_html/`

3. **Ou configure direto:**
   - **Diretório Público:** `dist/client/`
   - Assim os arquivos são servidos diretamente de `dist/client/`

### Opção 2: Script Automático

1. **No cPanel, configure comandos pós-pull:**
   ```bash
   cp -r dist/client/* public_html/
   ```

2. **OU execute o PHP script:**
   ```bash
   php deploy-hook.php
   ```

### Opção 3: Manual (Funciona Sempre)

1. **Após cada pull do Git:**
   - Acesse o File Manager
   - Copie arquivos de `dist/client/` para `public_html/`

## 📋 Configuração Recomendada

### No cPanel → Git Version Control:

1. **Repositório:** `https://github.com/JosielBarrosfoco/plage_system.git`
2. **Branch:** `main`
3. **Diretório de Deploy:** `public_html`
4. **Comando Pós-Pull:** (se disponível)
   ```bash
   cp -r dist/client/* public_html/ 2>/dev/null || echo "Pasta dist/client não encontrada"
   ```

### OU Configure:

**Diretório Público:** Aponte diretamente para `dist/client/`

## 🔄 Workflow Correto

Após configurar:

1. **Você faz push para GitHub:**
   ```bash
   git push origin main
   ```

2. **Hostinger faz pull automaticamente** (via webhook)

3. **Hostinger executa script** (se configurado) para copiar arquivos

4. **Site atualizado!** ✨

## ⚠️ Nota Importante

O arquivo `composer.json` foi criado apenas para evitar o erro. Ele não faz nada, mas faz a Hostinger continuar o processo.

## 📞 Próximos Passos

1. **Faça commit e push dos novos arquivos:**
   ```bash
   git add composer.json deploy-hook.php post-receive
   git commit -m "Adiciona configurações para deploy na Hostinger"
   git push origin main
   ```

2. **No cPanel, configure o diretório público ou script pós-pull**

3. **Teste fazendo um push e veja se funciona**

---

**Dica:** A forma mais simples é configurar o diretório público diretamente para `dist/client/` no cPanel!


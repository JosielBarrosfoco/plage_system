# 🔧 Solução: Webhook Não Atualiza na Hostinger

## 🔍 Diagnóstico

O webhook não funciona porque:

1. ❌ Os arquivos em `dist/client/` **NÃO estão no repositório**
2. ❌ O servidor precisa fazer **build** antes de servir
3. ❌ A Hostinger pode não estar executando o build automaticamente

## ✅ Solução Rápida (Recomendada)

### Opção A: Commit dos Arquivos Buildados

1. **Faça build localmente:**
   ```bash
   npm run build
   ```

2. **Verifique se os arquivos foram gerados:**
   ```bash
   dir dist\client
   ```

3. **Adicione os arquivos ao Git:**
   ```bash
   git add dist/client/
   git commit -m "Adiciona arquivos buildados para deploy"
   git push origin main
   ```

4. **No cPanel da Hostinger:**
   - Configure o diretório público para: `dist/client/`
   - OU configure para copiar arquivos de `dist/client/` para `public_html/` após pull

### Opção B: Build Automático no Servidor

**Se a Hostinger suporta Node.js:**

1. **No cPanel → Git Version Control:**
   - Configure comandos pós-pull:
   ```bash
   npm install --legacy-peer-deps
   npm run cf-typegen
   npm run build
   ```

2. **Configure diretório público para:** `dist/client/`

## 📋 Checklist de Configuração

### No cPanel da Hostinger:

- [ ] Git conectado ao repositório correto
- [ ] Branch configurado: `main`
- [ ] Node.js instalado (verifique em "Seletor de Versão Node.js")
- [ ] Comandos de build configurados (se disponível)
- [ ] Diretório público configurado corretamente

## 🚀 Workflow Recomendado

Para garantir que funcione:

### Método 1: Build Local + Commit

```bash
# 1. Desenvolva
npm run dev

# 2. Faça build
npm run build

# 3. Commit TUDO incluindo dist/client/
git add .
git commit -m "Alterações + build"
git push origin main

# 4. No servidor, webhook faz pull
# 5. Servidor serve arquivos de dist/client/
```

### Método 2: Build no Servidor

```bash
# 1. Desenvolva e commit (sem dist/client/)
git add .
git commit -m "Alterações"
git push origin main

# 2. No servidor, webhook:
#    - Faz pull
#    - Executa: npm install && npm run build
#    - Copia dist/client/* para public_html/
```

## 🔧 Arquivos Criados

Criei estes arquivos para ajudar:

- `.hostinger-build` - Script de build para servidor
- `HOSTINGER-WEBHOOK-CONFIG.md` - Guia completo

## ❓ Qual Método Usar?

**Use Método 1 (Build Local) se:**
- ✅ Quer simplicidade
- ✅ Não tem Node.js configurado no servidor
- ✅ Não se importa em commitar arquivos buildados

**Use Método 2 (Build no Servidor) se:**
- ✅ Tem Node.js configurado na Hostinger
- ✅ Quer manter repositório limpo
- ✅ Servidor consegue executar npm

## 📞 Próximos Passos

1. Tente fazer build local e commitar `dist/client/`
2. Configure o diretório público para `dist/client/`
3. Teste o webhook novamente

Me diga qual método você prefere ou se precisa de ajuda com a configuração no cPanel!


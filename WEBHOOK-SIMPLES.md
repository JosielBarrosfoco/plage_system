# ⚡ Configuração Rápida de Webhook

## 🎯 Objetivo

Fazer o webhook atualizar automaticamente quando você faz `git push`.

## ✅ Pré-requisitos (Já Feitos!)

- ✅ Arquivos buildados estão em `dist/client/` no repositório
- ✅ Repositório no GitHub: `https://github.com/JosielBarrosfoco/plage_system.git`
- ✅ Branch: `main`

## 📝 3 Passos Simples

### Passo 1: No cPanel da Hostinger

1. Git Version Control → Verifique conexão com repositório
2. **Configure Diretório Público:** `dist/client`

### Passo 2: No GitHub

1. Settings → Webhooks → Add webhook
2. **Payload URL:** (URL do webhook da Hostinger - veja no cPanel)
3. **Events:** Push events
4. Salve

### Passo 3: Teste

```bash
# Faça uma pequena alteração
echo "teste" >> teste.txt
git add teste.txt
git commit -m "Teste webhook"
git push origin main
```

Verifique se atualizou no site!

## 🎉 Pronto!

Agora toda vez que você fizer `git push`, o site atualiza automaticamente.


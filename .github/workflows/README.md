# GitHub Actions Workflow

Este workflow faz deploy automático para a Hostinger quando você faz push na branch `main`.

## Configuração Necessária

Para usar este workflow, você precisa configurar os seguintes secrets no GitHub:

1. Vá em **Settings** → **Secrets and variables** → **Actions**
2. Adicione os seguintes secrets:

### FTP_SERVER
- Seu servidor FTP da Hostinger
- Exemplo: `ftp.seu-dominio.com`

### FTP_USERNAME
- Seu usuário FTP

### FTP_PASSWORD
- Sua senha FTP

## Como Funciona

1. Quando você faz `git push` na branch `main`
2. O GitHub Actions executa o workflow
3. Instala dependências
4. Faz build do projeto
5. Faz deploy via FTP para a Hostinger

## Nota

Se você preferir usar o webhook direto da Hostinger (sem GitHub Actions), pode deletar este arquivo.


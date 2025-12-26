# 🔐 Como Configurar Secrets do GitHub Actions

## ⚠️ Erro Resolvido

O erro **"Input required and not supplied: server"** foi corrigido. Agora o workflow verifica se os secrets estão configurados antes de tentar fazer o deploy.

## 📋 Secrets Necessários

Para que o deploy automático funcione, você precisa configurar os seguintes secrets no GitHub:

1. **FTP_SERVER** - Endereço do servidor FTP (ex: `ftp.seusite.com`)
2. **FTP_USERNAME** - Usuário FTP
3. **FTP_PASSWORD** - Senha FTP

## 🚀 Como Configurar os Secrets

### Passo 1: Acesse as Configurações do Repositório

1. Vá para o seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Secrets and variables** → **Actions**

### Passo 2: Adicione os Secrets

Para cada secret, clique em **New repository secret** e adicione:

#### FTP_SERVER
- **Name:** `FTP_SERVER`
- **Secret:** O endereço do servidor FTP da Hostinger
  - Exemplo: `ftp.hostinger.com` ou `ftp.seusite.com`
  - Você encontra isso no cPanel da Hostinger → **FTP Accounts**

#### FTP_USERNAME
- **Name:** `FTP_USERNAME`
- **Secret:** Seu usuário FTP
  - Geralmente é o mesmo do seu cPanel ou um usuário FTP específico

#### FTP_PASSWORD
- **Name:** `FTP_PASSWORD`
- **Secret:** Sua senha FTP
  - A senha do usuário FTP configurado

### Passo 3: Verificar

Após adicionar os secrets, o próximo push para a branch `main` irá:
1. ✅ Fazer o build do projeto
2. ✅ Verificar se os secrets estão configurados
3. ✅ Fazer o deploy automático via FTP

## 🔍 Onde Encontrar as Credenciais FTP na Hostinger

1. Acesse: https://hpanel.hostinger.com
2. Vá para **FTP Accounts** ou **Gerenciador de Arquivos**
3. As informações do servidor FTP geralmente são:
   - **Servidor:** `ftp.hostinger.com` ou `ftp.seusite.com`
   - **Usuário:** Seu usuário FTP
   - **Senha:** A senha que você configurou

## ⚙️ Comportamento Atual

Se os secrets **não estiverem configurados**:
- ✅ O workflow ainda executará o build
- ⚠️ O deploy será pulado com uma mensagem informativa
- ❌ Não haverá erro que quebra o workflow

Se os secrets **estiverem configurados**:
- ✅ O build será executado
- ✅ O deploy será feito automaticamente para a Hostinger

## 📝 Nota

O workflow agora é mais robusto e não falhará se os secrets não estiverem configurados. Isso permite que você faça o build e teste localmente sem precisar configurar os secrets imediatamente.


# 🔍 Diagnóstico - Página em Branco

## ✅ Checklist de Verificação

### 1. Verificar Arquivos no Servidor
No cPanel da Hostinger → File Manager → public_html/

Você DEVE ter:
- ✅ `index.html`
- ✅ Pasta `assets/` com:
  - ✅ `index-B0mR16dk.css`
  - ✅ `index-B5gw6w51.js`
- ✅ `.htaccess`

### 2. Verificar Permissões
- `.htaccess` → **644**
- `index.html` → **644**
- Pasta `assets/` → **755**
- Arquivos dentro de `assets/` → **644**

### 3. Verificar Console do Navegador
1. Abra seu site no navegador
2. Pressione **F12** (ou botão direito → Inspecionar)
3. Vá na aba **Console**
4. Veja se há erros em vermelho

**Erros comuns:**
- `Failed to load resource` → Arquivo não encontrado
- `CORS error` → Problema de permissões
- `404 Not Found` → Caminho incorreto

### 4. Verificar Aba Network
1. No console (F12), vá na aba **Network**
2. Recarregue a página (F5)
3. Veja se os arquivos estão carregando:
   - `index.html` → Status 200 ✅
   - `index-B5gw6w51.js` → Status 200 ✅
   - `index-B0mR16dk.css` → Status 200 ✅

**Se algum arquivo mostrar 404:**
- Verifique se o arquivo existe no servidor
- Verifique se o caminho está correto

### 5. Verificar Caminhos no HTML
Abra o `index.html` no servidor e verifique as linhas 43-44:

```html
<script type="module" crossorigin src="/assets/index-B5gw6w51.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-B0mR16dk.css">
```

**Se os caminhos começam com `/assets/`:**
- Funciona se o site está na raiz do domínio
- NÃO funciona se está em subpasta

## 🔧 Soluções

### Solução 1: Verificar Estrutura de Arquivos
Certifique-se de que a estrutura está assim:
```
public_html/
├── index.html
├── assets/
│   ├── index-B0mR16dk.css
│   └── index-B5gw6w51.js
└── .htaccess
```

### Solução 2: Testar Caminhos Manualmente
No navegador, tente acessar diretamente:
- `https://seudominio.com/assets/index-B5gw6w51.js`
- `https://seudominio.com/assets/index-B0mR16dk.css`

Se retornar 404, o problema é o caminho.

### Solução 3: Usar Caminhos Relativos
Se o problema for caminhos, vou criar uma versão com caminhos relativos.

## 📋 Informações para Me Enviar

Se ainda não funcionar, me envie:
1. Screenshot do console do navegador (F12)
2. Screenshot da aba Network (mostrando os arquivos)
3. Estrutura de arquivos no File Manager
4. URL do seu site


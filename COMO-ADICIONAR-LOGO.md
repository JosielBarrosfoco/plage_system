# 🖼️ Como Adicionar o Novo Logo

## ✅ O que já foi feito

Atualizei todo o código para usar o novo logo. Agora você só precisa adicionar o arquivo.

## 📁 Passo a Passo

### 1. Coloque o arquivo do logo na pasta `public/`

- **Nome do arquivo:** `LOGO.png` (ou `LOGO.jpg`, `LOGO.svg`, etc.)
- **Caminho completo:** `public/LOGO.png`
- **Localização:** Na raiz do projeto, dentro da pasta `public/`

### 2. Formatos Suportados

- PNG (recomendado para logo com transparência)
- JPG/JPEG (para fotos)
- SVG (para logos vetoriais)

### 3. Após adicionar o arquivo

Execute o build normalmente:
```bash
npm run build
```

O Vite automaticamente copiará o arquivo da pasta `public/` para a pasta de build.

## 📍 Onde o logo aparecerá

- ✅ **Navbar** - Menu superior (esquerda)
- ✅ **Footer** - Rodapé do site
- ✅ **Favicon** - Ícone da aba do navegador
- ✅ **Open Graph** - Imagem quando compartilhar nas redes sociais

## 🔄 Atualização Automática

O código já está configurado para usar `/LOGO.png`. Quando você adicionar o arquivo na pasta `public/`, ele será usado automaticamente em todos os lugares.

## ⚠️ Importante

- O nome do arquivo deve ser exatamente `LOGO.png` (ou a extensão que você usar)
- O arquivo deve estar na pasta `public/` na raiz do projeto
- Após adicionar, execute `npm run build` para gerar os arquivos de produção

---

**Próximo passo:** Coloque o arquivo do logo na pasta `public/` com o nome `LOGO.png` e execute `npm run build`.


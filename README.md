# Davi. — Sites & Catálogos Digitais

Portfólio estático em HTML, CSS e JavaScript, com layout responsivo, animações leves e links de contato via WhatsApp. Não precisa de backend, banco de dados ou processo de build.

## Arquivos

- `index.html` — conteúdo e estrutura semântica da página.
- `style.css` — identidade visual, layouts responsivos, animações e estados de foco/hover.
- `script.js` — configuração de contatos, menu mobile, links demonstrativos e animações de entrada.
- `assets/icons/favicon.svg` — favicon vetorial.

## Personalização antes de publicar

Abra `script.js` e altere os valores no começo do arquivo:

```js
const WHATSAPP_NUMBER = "5517999999999";
const INSTAGRAM_URL = "https://instagram.com/";
const GITHUB_URL = "https://github.com/";
```

- `WHATSAPP_NUMBER`: substitua pelo número real, com código do país e DDD, sem `+`, espaços ou traços.
- `INSTAGRAM_URL`: informe o perfil correto.
- `GITHUB_URL`: informe seu perfil correto.
- `PROJECT_LINKS`: substitua cada `#BELLA-NAPOLI`, `#DOM-BLACK`, `#URBAN-12` e `#VITRINE` pelos endereços reais dos projetos quando estiverem publicados.
- Os preços e textos dos serviços estão em `index.html`.

Os projetos apresentados são estudos demonstrativos e estão identificados como tais. Não são apresentados como clientes reais.

## Testar localmente

1. Extraia a pasta.
2. Abra `index.html` no navegador. Para desenvolvimento, também pode usar a extensão Live Server do VS Code.
3. Teste o menu mobile, links de WhatsApp e os cards demonstrativos.

## Publicar na Vercel

1. Crie um repositório no GitHub e envie os arquivos desta pasta.
2. Entre na Vercel e importe o repositório.
3. Para este projeto estático, mantenha o framework como `Other` e não configure build command.
4. Deixe o diretório de saída vazio ou como raiz do projeto e publique.

Também funciona no GitHub Pages ou em qualquer hospedagem de arquivos estáticos.

## Notas

- A fonte Space Grotesk e Inter é carregada pelo Google Fonts; sem conexão, o navegador usa fontes alternativas.
- O número de WhatsApp é um placeholder e precisa ser alterado antes da divulgação.
- Os links sociais são placeholders.
- A hospedagem pode ser gratuita; domínio personalizado e serviços externos podem ter custos próprios.

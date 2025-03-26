# Guia de Uso do Webpack

Este documento apresenta um guia detalhado para a configuração e utilização do Webpack no ambiente de desenvolvimento e produção. Ele aborda os principais arquivos de configuração, as tecnologias envolvidas e as otimizações aplicadas.

## Sumário

- [Instalação dos Plugins](#instalação-dos-plugins)
- [Estrutura dos Arquivos](#estrutura-dos-arquivos)
- [Configuração do Webpack](#configuração-do-webpack)
  - [Ambiente de Desenvolvimento](#ambiente-de-desenvolvimento)
  - [Ambiente de Produção](#ambiente-de-produção)
- [Configuração das Metatags no Webpack](#configuração-das-metatags-no-webpack)
- [Estrutura do package.json](#estrutura-do-packagejson)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Exemplo de Uso](#exemplo-de-uso)
- [Estrutura de Diretórios](#estrutura-de-diretórios)

## Instalação dos Plugins

Para instalar os plugins listados no seu arquivo `package.json`, basta rodar o comando de instalação do **npm** ou **yarn** para baixar todas as dependências que estão mencionadas no arquivo.

### Passo 1: Verifique se o `node` e o `npm` estão instalados

Antes de tudo, verifique se o **Node.js** e o **npm** estão instalados no seu sistema. Você pode fazer isso rodando os seguintes comandos no terminal:

```sh
node -v
npm -v
```

Se ambos os comandos retornarem uma versão, significa que estão instalados corretamente. Se não, você precisa instalar o **Node.js** a partir de [nodejs.org](https://nodejs.org/).

### Passo 2: Instale as dependências

Com o **Node.js** e o **npm** instalados, basta rodar o comando para instalar todas as dependências listadas no seu `package.json`. Esse comando irá baixar e instalar todas as dependências listadas em `devDependencies` e `dependencies`:

```sh
npm install
```

Se você estiver utilizando **Yarn**, pode rodar:

```sh
yarn install
```

### Passo 3: Verifique a instalação

Após a execução do comando de instalação, os pacotes serão baixados e armazenados na pasta `node_modules`. Para garantir que tudo foi instalado corretamente, você pode verificar se a pasta `node_modules` está presente na sua raiz e também se os plugins estão dentro dessa pasta.

### Passo 4: Rodar o Webpack

Com os plugins instalados, você pode iniciar o ambiente de desenvolvimento ou gerar a build de produção.

Para rodar o ambiente de desenvolvimento:

```sh
npm start
```

Para gerar a build de produção:

```sh
npm run build
```

## Estrutura dos Arquivos

O projeto utiliza os seguintes arquivos de configuração do Webpack:

- **webpack.common.js**: Configurações compartilhadas entre desenvolvimento e produção.
- **webpack.dev.js**: Configuração específica para o ambiente de desenvolvimento.
- **webpack.prod.js**: Configuração específica para o ambiente de produção.

## Configuração do Webpack

### Ambiente de Desenvolvimento

O arquivo `webpack.dev.js` define as configurações para desenvolvimento, incluindo:

- **Modo:** `development`
- **Servidor de desenvolvimento:** Webpack Dev Server na porta `8080`, abrindo automaticamente o navegador.
- **Compilação de estilos:** Usa `style-loader` e `css-loader`.
- **Geração de páginas HTML:** Com `HtmlWebpackPlugin`.
- **Geração automática do `robots.txt`**.
- **Copiando arquivos estáticos:** Imagens, CSS e JavaScript para a pasta de distribuição (`dist`).

Para rodar o ambiente de desenvolvimento:

```sh
npm start
```

### Ambiente de Produção

O arquivo `webpack.prod.js` otimiza a aplicação para produção, incluindo:

- **Modo:** `production`
- **Minificação de arquivos JavaScript e CSS** com `TerserPlugin` e `CssMinimizerPlugin`.
- **Otimização de imagens** com `ImageMinimizerPlugin`.
- **Separação de código em chunks**.
- **Extração de CSS em arquivos separados** com `MiniCssExtractPlugin`.
- **Remoção de CSS não utilizado** com `PurgeCSSPlugin`.
- **Compressão de arquivos** com `CompressionPlugin`.
- **Análise do bundle** com `BundleAnalyzerPlugin`.

Para rodar a build de produção:

```sh
npm run build
```

## Configuração das Metatags no Webpack

Os arquivos `webpack.dev.js` e `webpack.prod.js` utilizam o `HtmlWebpackPlugin` para definir metatags importantes no `<head>` das páginas HTML geradas. É essencial preencher corretamente essas informações para melhorar a indexação nos motores de busca e otimizar o compartilhamento em redes sociais.

Aqui está uma explicação de cada metatag que precisa ser preenchida:

- **`title`**: Define o título da página exibido na aba do navegador e nos resultados de pesquisa.
- **`description`**: Breve descrição da página, usada pelos motores de busca.
- **`keywords`**: Lista de palavras-chave relevantes para SEO (opcional).
- **`author`**: Nome do autor ou da empresa responsável pelo conteúdo.
- **`robots`**: Controla a indexação e o rastreamento da página pelos motores de busca. Exemplo: `index, follow`.
- **`og:title`**: Título da página quando compartilhada no Facebook e outras redes sociais.
- **`og:description`**: Descrição da página para redes sociais.
- **`og:image`**: URL da imagem exibida ao compartilhar a página.
- **`og:url`**: URL canônica da página.
- **`og:type`**: Tipo de conteúdo, geralmente `website`.
- **`twitter:card`**: Tipo de visualização ao compartilhar no Twitter, normalmente `summary_large_image`.
- **`twitter:title`**: Título para compartilhamento no Twitter.
- **`twitter:description`**: Descrição para o Twitter.
- **`twitter:image`**: Imagem para compartilhamento no Twitter.

Esses valores devem ser configurados dentro do `webpack.dev.js` e `webpack.prod.js` dentro da propriedade `meta` do `HtmlWebpackPlugin`. Exemplo:

```js
new HtmlWebpackPlugin({
  title: 'Nome do Site',
  meta: {
    'description': 'Breve descrição da página.',
    'keywords': 'palavra1, palavra2, palavra3',
    'author': 'Nome do Autor',
    'robots': 'index, follow',
    'og:title': 'Título da Página',
    'og:description': 'Descrição da Página',
    'og:image': '/assets/img/metatag.png',
    'og:url': 'https://www.seusite.com/',
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': 'Título no Twitter',
    'twitter:description': 'Descrição no Twitter',
    'twitter:image': '/assets/img/metatag.png',
  },
})
```

## Estrutura do `package.json`

O arquivo `package.json` contém as configurações e dependências do projeto. Alguns campos importantes que precisam ser preenchidos:

- **`name`**: Nome do projeto.
- **`version`**: Versão do projeto.
- **`description`**: Descrição breve do projeto.
- **`main`**: Arquivo principal da aplicação.
- **`scripts`**: Comandos úteis para desenvolvimento e produção.
- **`dependencies`**: Pacotes necessários para rodar o projeto.
- **`devDependencies`**: Pacotes usados apenas no ambiente de desenvolvimento.
- **`author`**: Nome do autor ou da equipe responsável.
- **`license`**: Tipo de licença do projeto (exemplo: MIT).

Os principais scripts configurados são:

- **`npm start`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Compila e otimiza o código para produção.
- **`npm run build-sitemap`**: Gera o sitemap automaticamente para otimização de SEO.

Exemplo de `scripts` no `package.json`:

```json
"scripts": {
    "start": "webpack serve --open --config webpack.config.dev.js",
    "build": "rimraf dist && webpack --config webpack.config.prod.js",
    "build-sitemap": "npm run build && npm run generate-sitemap"
}
```

## Tecnologias Utilizadas

- Webpack
- Babel
- Bootstrap
- PurgeCSS
- MiniCssExtractPlugin
- TerserPlugin
- ImageMinimizerPlugin

## Exemplo de Uso

Após a configuração, o projeto pode ser rodado da seguinte maneira:

1. Iniciar o ambiente de desenvolvimento:
   ```sh
   npm start
   ```
2. Gerar a build otimizada para produção:
   ```sh
   npm run build
   ```

## Estrutura de Diretórios

Para manter uma organização eficiente dos arquivos no projeto, recomenda-se a seguinte estrutura de diretórios:

```
/project-root
│
├── /src                    # Arquivos de código-fonte
│   ├── /assets              # Arquivos estáticos (imagens, fontes, etc.)
│   ├── /css                 # Arquivos CSS/SCSS
│   ├── /js                  # Arquivos JavaScript
│   ├── index.html           # Arquivo HTML principal
│   └── robots.txt           # Arquivo de configuração do robots.txt
│
├── /dist                    # Arquivos gerados pelo Webpack (build)
├── package.json             # Configuração do projeto
├── webpack.common.js        # Configuração comum do Webpack
├── webpack.dev.js           # Configuração do Webpack para desenvolvimento
└── webpack.prod.js          # Configuração do Webpack para produção
```

### Explicação dos diretórios:

- **/src**: Contém todos os arquivos de código-fonte do projeto, incluindo HTML, CSS, JS e recursos estáticos.
- **/dist**: Pasta gerada após a execução do Webpack, onde ficam os arquivos otimizados e prontos para produção.
- **webpack.common.js**: Arquivo de configuração com as regras compartilhadas entre os ambientes de desenvolvimento e produção.
- **webpack.dev.js**: Arquivo de configuração para o ambiente de desenvolvimento.
- **webpack.prod.js**: Arquivo de configuração para o ambiente de produção.
- **package.json**: Gerencia dependências, scripts e informações sobre o projeto.

### Localização dos Arquivos

- **Arquivos de entrada** (como HTML, CSS, JS) devem ser salvos dentro da pasta `/src`.
- **Arquivos de saída** (após a build) serão colocados automaticamente na pasta `/dist` conforme configurado no Webpack.
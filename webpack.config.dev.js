const path = require('path');
const fs = require("fs");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

class GenerateRobotsTxtPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync("GenerateRobotsTxtPlugin", (compilation, callback) => {
      const content = `User-agent: *\nAllow: /`;
      compilation.assets["robots.txt"] = {
        source: () => content,
        size: () => content.length,
      };
      callback();
    });
  }
}

const pages = ['index', '404'];
const htmlPlugins = pages.map(page => new HtmlWebpackPlugin({
  title: 'Encantar Experience 2ª Edição - Estratégias de Encantamento de Clientes', // Definição do título
  template: path.resolve(__dirname, `src/${page}.html`), // Caminho absoluto
  filename: `${page}.html`, // Nome do arquivo final
  inject: 'body', // Onde os scripts serão injetados
  scriptLoading: 'defer', // Carregamento assíncrono dos scripts
  favicon: 'favicon.ico', // Caminho para o favicon
  minify: false,
  meta: {
    'viewport': 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no', // Responsividade
    'author': 'RT Publicity',
    'description': 'Encantar Experience é um evento imersivo que conecta empresários e executivos com as melhores estratégias de encantamento de clientes.',
    'keywords': 'encantamento de clientes, evento empresarial, networking, estratégias de negócio, experiência do cliente, palestras, workshops',
    'robots': 'index, follow', // Diretiva de indexação para motores de busca
    'og:title': 'Encantar Experience 2ª Edição - Imersão em Estratégias de Encantamento de Clientes',
    'og:description': 'Participe da 2ª Edição do Encantar Experience e aprenda com líderes do setor sobre como encantar seus clientes e transformar seu negócio.',
    'og:image': '/assets/img/metatag.png', // Open Graph image
    'og:url': 'https://encantarexperience.com.br/', // Open Graph URL
    'og:type': 'website', // Tipo de conteúdo para Open Graph
    'twitter:card': 'summary_large_image', // Twitter card
    'twitter:title': 'Encantar Experience 2ª Edição - Estratégias de Encantamento de Clientes',
    'twitter:description': 'Junte-se ao Encantar Experience para um evento exclusivo com palestras, workshops e networking sobre encantamento do cliente.',
    'twitter:image': '/assets/img/metatag.png', // Twitter image
  },
}));
module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000, 
    open: true,
    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        return middlewares;
      }

      devServer.app.get("/robots.txt", (req, res) => {
        res.set("Content-Type", "text/plain");
        res.send("User-agent: *\nAllow: /");
      });

      return middlewares;
    },
  },
  plugins: [
    ...htmlPlugins,
    new GenerateRobotsTxtPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/img', to: 'assets/img' },
        { from: 'src/assets/css', to: 'assets/css' },
        { from: 'src/assets/webfonts', to: 'assets/webfonts' },
        { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'assets/css/bootstrap.min.css' },
        { from: 'src/assets/vendor/js', to: 'assets/vendor/js' },
        { from: 'favicon.ico', to: 'favicon.ico' },
        { from: 'icon.png', to: 'icon.png' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
      ],
    }),
  ],
});
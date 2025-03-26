const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

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
  title: '',
  template: `./src/${page}.html`,
  filename: `${page}.html`,
  inject: 'body',
  scriptLoading: 'defer',
  favicon: 'favicon.ico',
  minify: {
    removeAttributeQuotes: false,
    collapseWhitespace: true,
    removeComments: true,
    keepClosingSlash: true,
  },
  meta: {
    'viewport': 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
    'author': 'RT Publicity',
    'description': 'O Encantar Experience é um evento de três dias focado em encantamento do cliente, com palestras inspiradoras, workshops interativos e networking para empreendedores e executivos.',
    'keywords': 'encantamento de clientes, experiência do cliente, evento empresarial, palestras, networking, estratégias empresariais',
    'robots': 'index, follow',
    'og:title': 'Encantar Experience 2ª Edição - Imersão em Estratégias de Encantamento de Clientes',
    'og:description': 'Participe da 2ª Edição do Encantar Experience, evento imersivo com líderes do setor, estratégias inovadoras e oportunidades de networking.',
    'og:image': '/assets/img/metatag.png',
    'og:url': 'https://encantarexperience.com.br/',
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': 'Encantar Experience 2ª Edição - Imersão em Estratégias de Encantamento de Clientes',
    'twitter:description': 'Junte-se ao Encantar Experience 2ª Edição para aprender com líderes do setor sobre como encantar seus clientes e impulsionar seu negócio.',
    'twitter:image': '/assets/img/metatag.png',
  },  
}));

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /node_modules/,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: { quality: 95 },
              webp: { lossless: true },
              avif: { lossless: true },
              png: { quality: 95 },
              gif: {},
            },
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'responsive-loader',
            options: {
              adapter: require('responsive-loader/sharp'),
            },
          },
        ],
        type: 'asset',
      },
    ],
  },
  plugins: [
    ...htmlPlugins,
    new BundleAnalyzerPlugin(),
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
    new GenerateRobotsTxtPlugin(), // Gera automaticamente o robots.txt
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
      safelist: ['input', 'input[type="text"]', 'btn', 'alert'], // Protegendo classes comuns de remoção acidental
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      as(entry) {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        return 'script';
      },
    }),
  ],
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
});

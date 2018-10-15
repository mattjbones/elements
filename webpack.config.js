const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  context: __dirname + '/app/scripts.babel/',
  entry: {
    background: './background.js', // remove unused
    chromereload: './chromereload.js',
    contentscript: './contentscript.js',
    app: './app.js'
  },
  devtool: 'source-map',
  output: {
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        oneOf: [
          // this matches `<style module>`
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:5]'
                }
              }
            ]
          },
          // this matches plain `<style>` or `<style scoped>`
          {
            use: [
              'vue-style-loader',
              'css-loader'
            ]
          }
        ]
      }

    ]
  },
  devServer: {
    contentBase: '.',
    compress: true,
    port: 9000
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
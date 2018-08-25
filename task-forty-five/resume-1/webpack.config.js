const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js/')
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {loader:"style-loader"}, // creates style nodes from JS strings
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: { importloaders: 1}
          },
          {loader: "postcss-loader"},
          {loader: "sass-loader"}, // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ]
  }
};
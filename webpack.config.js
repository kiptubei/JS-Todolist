const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules: [
          {
            test: /\.css$/,
            use: [
              "style-loader",//2. Extract css into files
              //MiniCssExtractPlugin.loader, //2. Extract css into files
              "css-loader" //1. Turns css into commonjs

            ]
          },
          {
        test: /\.html$/,
        use: ['mustache-loader']
        // loader: 'mustache-loader?minify'
        // loader: 'mustache-loader?{ minify: { removeComments: false } }'
        // loader: 'mustache-loader?noShortcut'
    }
        ]
  },
  optimization: {
    minimize: false,
  },
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.ts'
      },
    plugins: [
        new HtmlWebpackPlugin({ title: 'Development',  }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
    },
    devServer: {
        static: { directory: path.join(__dirname, 'public'), },
        compress: true,
        port: 9000,
        hot: true,
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      
};
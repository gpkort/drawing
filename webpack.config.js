const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('file-system')
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.ts'
      },
    plugins: [
        new HtmlWebpackPlugin({ 
          title: 'Development',  
          inject: true,}),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
  },
    devServer: {
      host: "0.0.0.0",
      port: 8080, //port that we're using for local host (localhost:8080)
      static: path.resolve(appDirectory, "public"), //tells webpack to serve from the public folder
      hot: true,
      devMiddleware: {
          publicPath: "/",
      }
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
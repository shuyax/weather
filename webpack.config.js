const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "bundle.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  devServer: {
    watchFiles: ["src/**/*.php", "public/**/*"],
    // static: './dist'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // 'style-loader' comes first and followed by 'css-loader'. If this convention is not followed, webpack is likely to throw errors.
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images smaller than 8kb to base64 strings
              name: '[name].[ext]', // Output file name
              outputPath: 'images', // Output directory
            },
          },
        ],
      },
      // add the babel-loader to the list of modules
      // {
      //   test: /\.(?:js|mjs|cjs)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         ['@babel/preset-env', { targets: "defaults" }]
      //       ],
      //       // plugins: ['@babel/plugin-proposal-class-properties'],
      //       // plugins: ['@babel/plugin-transform-runtime'], NOTE: You must run npm install -D @babel/plugin-transform-runtime to include this in your project and @babel/runtime itself as a dependency with npm install @babel/runtime.
      //     },
      //   },
      // },

    ],
  },
};

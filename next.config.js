const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const withTypescript = require('@zeit/next-typescript');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withTypescript({
  webpack: (config, options) => {
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())

    config.plugins.push(
      new MiniCssExtractPlugin()
    );

    config.module.rules.push({
      enforce: 'pre',
      test: /\.tsx?$/,
      use: [
        {
          loader: 'tslint-loader',
          options: {
            typeCheck: true,
            fix: true,
          },
        },
      ],
    });

    config.module.rules.push({
      exclude: [
        /\.html$/,
        /\.(js|jsx|ts|tsx)$/,
        /\.css$/,
        /\.json$/,
        /\.bmp$/,
        /\.gif$/,
        /\.jpe?g$/,
        /\.png$/
      ],
      loader: require.resolve("file-loader"),
      options: {publicPath: '/_next/static', outputPath: 'static'}
    });

    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    });

    return config;
  }
});

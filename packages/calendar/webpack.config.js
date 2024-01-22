const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const pkg = require("./package.json");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const shakilDesignComponentPath = path.resolve(__dirname, "../components/src");
const shakilDesignAssetPath = path.resolve(__dirname, "../asset/src/fonts");
const shakilDesignUtilsPath = path.resolve(__dirname, "../utils/src");

const src = path.resolve(__dirname, "./src");

const config = {
  name: pkg.name,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        resolve: {
          extensions: [".ts", ".tsx", ".jsx", ".js"],
        },
        include: [
          src,
          shakilDesignComponentPath,
          shakilDesignAssetPath,
          shakilDesignUtilsPath,
        ],
        loader: require.resolve("ts-loader"),
        options: {
          transpileOnly: true,
          configFile: path.resolve(__dirname, "tsconfig.json"),
        },
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: [
          src,
          shakilDesignComponentPath,
          shakilDesignAssetPath,
          shakilDesignUtilsPath,
        ],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
        resolve: {
          extensions: [".js", ".jsx", ".mjs", ".mjsx"],
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: ["url-loader?limit=100000"],
        // exclude: "/node_modules/",
        include: [
          src,
          shakilDesignComponentPath,
          shakilDesignAssetPath,
          shakilDesignUtilsPath,
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        resolve: {
          extensions: [".ts", ".tsx", ".jsx", ".js"],
        },
        include: [
          src,
          shakilDesignComponentPath,
          shakilDesignAssetPath,
          shakilDesignUtilsPath,
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: "/node_modules/",
        parallel: true,
        terserOptions: {
          sourceMap: true,
        },
      }),
    ],
    chunkIds: "named",
    minimize: true,
    usedExports: true,
    providedExports: true,
  },

  devtool: "source-map",
  resolve: {
    modules: [
      // path.resolve(__dirname, "./node_modules"),
      path.resolve(__dirname, "../../node_modules"),
      path.resolve(__dirname, "lib"),
    ],
    preferRelative: true,
    extensions: [".ts", ".tsx", ".jsx", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        extensions: [".ts", ".tsx", ".jsx", ".js"],
      }),
    ],
  },
  entry: {
    main: path.resolve(__dirname, "./src/index"),
  },
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "[name].js",
    library: pkg.name,
    libraryTarget: "umd",
    globalObject: "this",
    clean: true,
    publicPath: "",
    chunkFilename: "[name].chunk.js",
  },
  resolveLoader: {
    modules: [
      // path.resolve(__dirname, "./node_modules"),
      path.resolve(__dirname, "../../node_modules"),
      // path.resolve(__dirname, "./lib"),
    ],
  },
  mode: "production",
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.BannerPlugin(`${pkg.name} v${pkg.version}`),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: pkg.name,
      minify: "auto",
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
  externals: ["react", "react-dom", "moment-jalaali"],
};

module.exports = config;

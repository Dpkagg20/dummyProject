const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLReplaceWebpackPlugin = require("html-replace-webpack-plugin");
const appConfig = require('./src/dynamicData.json');

module.exports = env => {
  console.log("###",env);
  return {
      // the output bundle won't be optimized for production but suitable for development
    mode: 'development',
    // the app entry point is /src/index.js
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      // the output of the webpack build will be in /dist directory
      path: path.resolve(__dirname, 'dist'),
      // the filename of the JS bundle will be bundle.js
      filename: `${env.APP_TYPE}/bundle.js`
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
  },

    module: {
      rules:[
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        // {
        //   test: /\.scss$/,
        //   use: [
        //     {
        //       loader: "style-loader",
        //     },
        //     {
        //       loader: "css-loader",
        //     },
        //     {
        //       loader: "sass-loader",
        //     },
        //   ],
        // },
        
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                query: {
                  name:'assets/[name].[ext]'
                }
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                query: {
                  mozjpeg: {
                    progressive: true,
                  },
                  gifsicle: {
                    interlaced: true,
                  },
                  optipng: {
                    optimizationLevel: 7,
                  }
                }
              }
            }]
        
        } ,
        {
          test: /\.html$/,
          use: "html-loader"
        },
        /*Choose only one of the following two: if you're using 
        plain CSS, use the first one, and if you're using a
        preprocessor, in this case SASS, use the second one*/
        // {
        //   test: /\.css$/,
        //   use: ["style-loader", "css-loader",{
        //     loader: "postcss-loader",
        //     options: {
        //       postcssOptions: {
        //         plugins: [
        //           [
        //             "postcss-preset-env",
        //             {
        //               // Options
        //             },
        //           ],
        //         ],
        //       },
        //     },
        //   },],
        // },
        // {
        //   test: /\.scss$/,
        //   use:[
        //     "style-loader",
        //     "css-loader",
        //     "sass-loader"
        //   ],
        // },
        {
          // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,

        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
          {
            // After all CSS loaders, we use a plugin to do its work.
            // It gets all transformed CSS and extracts it into separate
            // single bundled file
            loader: MiniCssExtractPlugin.loader,
          }, 
              {
                // This loader resolves url() and @imports inside CSS
                loader: "css-loader",
              },
              {
                // Then we apply postCSS fixes like autoprefixer and minifying
                loader: "postcss-loader"
              },
              {
                // First we transform SASS to standard CSS
                loader: "sass-loader",
                options: {
                  implementation: require("sass")
                }
              }
            ]
        }
      ], 
    },  
    plugins: [
      new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html')}),
      new MiniCssExtractPlugin({
        filename:`${env.APP_TYPE}/bundle.css`
      }),
      new webpack.DefinePlugin(
        {
          APP_TYPE: JSON.stringify( env.APP_TYPE ),
          APP_CONFIG: JSON.stringify( appConfig[ env.APP_TYPE ] )
        }
      ),
      new HTMLReplaceWebpackPlugin(
        [
          {
            pattern: '<title>My React App</title>',
            replacement: `<title>${ appConfig[ env.APP_TYPE ][ 'title' ]}</title>`
          }
        ]
      )
    
    ],
    devServer:{
      historyApiFallback:true
    }

  }
}
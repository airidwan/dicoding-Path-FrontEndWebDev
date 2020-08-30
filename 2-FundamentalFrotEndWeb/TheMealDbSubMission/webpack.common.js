const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
//const includePath = path.resolve(__dirname, 'src', 'scss');
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader'
            },

        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }, 
                {
                      loader: 'postcss-loader', 
                      options: {
                        plugins: function () { 
                          return [
                            require('precss'),
                            require('autoprefixer')
                          ];
                        }
                      }
                }, 
                {
                      loader: 'sass-loader'
                }
              
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
}
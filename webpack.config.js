module.exports = {
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: require.resolve('babel-loader')
            }
          }
        ]
      },
    output: {
      filename: "bundle.js",
      path: __dirname + "/public/js",
    },
  }
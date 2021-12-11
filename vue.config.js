module.exports = {
  configureWebpack: {
    // Merged into the final Webpack config
    module: {
      rules: [
        {
          // parser: {
          //   amd: false,
          // },
          
          test: /\.py$/i,
          use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false,
            },
          },
        ],
        },
      ],
    },
  },
}

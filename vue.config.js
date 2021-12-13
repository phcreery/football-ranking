module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/football-ranking/' : '/',
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: `@import "@/assets/_variables.scss";`,
  //     },
  //   },
  // },
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

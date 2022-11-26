const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(2000000)
      .maxAssetSize(2000000)
  }
})

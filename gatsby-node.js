exports.modifyWebpackConfig = function (config, env) {
  config.merge({
    postcss: [
      require('postcss-import')(),
      require('postcss-custom-properties'),
      require('postcss-custom-media'),
      require('postcss-color-function'),
      require('postcss-calc'),
      require('postcss-reporter')
    ]
  })

  return config
}

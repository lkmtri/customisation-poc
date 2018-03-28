const webpack = require('webpack')

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins = config.plugins.concat([new webpack.EnvironmentPlugin([
      'APP_ENV'
    ])])

    config.node = { fs: 'empty' }

    return config
  }
}

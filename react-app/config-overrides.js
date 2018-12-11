'use strict'

var rewired = require('react-app-rewired') // This file is used by react-app-rewired to override the webpack config of react-script.

function rewireBabel(config) {
  return rewired.injectBabelPlugin('transform-decorators-legacy', config)
}

module.exports = function override(config, env) {
  rewireBabel(config, env)
  return config
}

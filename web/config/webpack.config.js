module.exports = (config, { env }) => {
  config.plugins.forEach((plugin) => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin.options.title = 'Jonathan Armentor'
    }
  })
  config.module.rules[0].oneOf[3] = {
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  }

  return config
}

module.exports = (config, { env }) => {
  config.plugins.forEach((plugin) => {
    if (plugin.constructor.name === 'HtmlWebpackPlugin') {
      plugin.options.title = 'Jonathan Armentor'
    }
  })
  const jsRules = config.module.rules[0].oneOf[2]
  config.module.rules[0].oneOf[2] = {
    ...jsRules,
    use: [
      jsRules.use,
      {
        loader: 'linaria/loader',
        options: {
          sourceMap: env !== 'production',
        },
      },
    ],
  }
  config.module.rules[0].oneOf[3] = {
    test: /\.svg$/,
    use: ['@svgr/webpack', 'url-loader'],
  }

  return config
}

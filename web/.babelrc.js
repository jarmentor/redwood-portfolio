module.exports = {
  extends: '../babel.config.js',
  presets: ['linaria/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@layouts': './src/layouts',
          '@styles': './src/styles',
          '@testContent': './src/testContent',
        },
      },
    ],
  ],
}

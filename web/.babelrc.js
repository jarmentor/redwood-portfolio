module.exports = {
  extends: '../babel.config.js',
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@layouts': './src/layouts',
        },
      },
    ],
  ],
}

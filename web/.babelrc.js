module.exports = {
  extends: '../babel.config.js',
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@layouts': './src/layouts',
          '@styles': './src/styles',
          '@hooks': './src/hooks',
          '@assets': './src/assets',
          '@testContent': './src/testContent',
        },
      },
    ],
  ],
}

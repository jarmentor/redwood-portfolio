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
          '@lib': './src/lib',
          '@assets': './src/assets',
          '@testContent': './src/testContent',
        },
      },
    ],
  ],
}

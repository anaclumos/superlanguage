module.exports = {
  purge: {
    enabled: true,
    layers: ['base', 'components', 'utilities'],
    content: [
      './src/**/*.js',
      './src/**/*.ts',
      './src/**/*.jsx',
      './src/**/*.tsx',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

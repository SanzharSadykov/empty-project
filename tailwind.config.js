module.exports = {
    purge: [
      './public/**/*.html',
      './src/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          "leaf": "#008A44",
          "sky": "#2D9CDB",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
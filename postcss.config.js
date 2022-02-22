module.exports = {
  plugins: [
    require('postcss-import')({}),
    require('postcss-nesting')({}),
    require('autoprefixer')({
      overrideBrowserslist: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ],
      flexbox: 'no-2009',
    }),
  ]
}
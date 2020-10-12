/* Custom PostCSS config */
module.exports = {
  plugins: [
    /* Default PostCSS rules https://nextjs.org/docs/advanced-features/customizing-postcss-config */
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        "autoprefixer": {
          "flexbox": "no-2009"
        },
        "stage": 3,
        "features": {
          "custom-properties": false
        }
      }
    ],
    /* Allow for nested CSS rules */
    require.resolve('postcss-nested'),
  ]
}

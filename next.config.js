module.exports = {
  target: 'serverless',
  async rewrites() {
    return [
      // Do not rewrite API routes
      {
        source: '/api/:any*',
        destination: '/api/:any*',
      },
      // Rewrite all other routes back to pages/index.js
      {
        source: '/:any*',
        destination: '/',
      },
    ]
  },
}

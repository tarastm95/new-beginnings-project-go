// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // 1) Proxy to your Django backend
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://77e2-194-44-109-244.ngrok-free.app',
      changeOrigin: true,
    })
  );

  // 2) (dev only!) Proxy directly to the Yelp API
  app.use(
    '/yelp-api',
    createProxyMiddleware({
      target: 'https://api.yelp.com',
      changeOrigin: true,
      pathRewrite: { '^/yelp-api': '/v3' },
    })
  );
};

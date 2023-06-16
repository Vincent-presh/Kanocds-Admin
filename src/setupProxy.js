const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.kanocds.org",
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      headers: {
        Connection: 'keep-alive',
      },
    })
  );
  //https://api.kanocds.org
};
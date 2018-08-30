const isProdMode = Object.is(process.env.NODE_ENV, 'production');

module.exports = {
  baseURL: isProdMode ? 'api.joegreens.cn/' : 'http://127.0.0.1:9999/'
};

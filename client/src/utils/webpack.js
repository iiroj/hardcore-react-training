const ExtractTextPlugin = require('extract-text-webpack-plugin');

function getStyleLoader(env, target, base) {
  const ret = {
    ...base,
  };

  switch (env) {
    case 'development':
      if (target === 'browser') {
        ret.use = ['style-loader', ...ret.use];
      }
      break;

    case 'production':
      if (target === 'browser') {
        ret.use = ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: base.use,
        });
      }
      break;
    default:
      break;
  }
  return ret;
}

module.exports = {
  getStyleLoader,
};

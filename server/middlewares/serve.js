import serve from 'koa-static';
import middleware from 'koa-webpack';
import path from 'path';
import webpackConfig from '../../webpack.config';

export default () => {
  if (process.env.NODE_ENV !== 'production') {
    return middleware({
      config: webpackConfig,
    });
  }
  return serve(path.join(__dirname, '../public'));
};

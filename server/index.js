import Koa from 'koa';
import socket from 'socket.io';
import http from 'http';
import Router from 'koa-router';
import koaLogger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import serve from './middlewares/serve';
import getPug from './middlewares/pug';
import addRoutes from './routes';

export default () => {
  const app = new Koa();

  app.use(bodyParser());
  app.use(serve());
  app.use(koaLogger());

  getPug().use(app);

  const router = new Router();
  const server = http.createServer(app.callback());
  const io = socket(server);
  addRoutes(router, io);
  app.use(router.allowedMethods());
  app.use(router.routes());

  return server;
};

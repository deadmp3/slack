import '@babel/polyfill';
import getApp from '..';

getApp().listen(process.env.PORT || 4000);

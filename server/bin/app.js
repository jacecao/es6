const Koa = require('koa');
const app = new Koa();
const route = require('./route.js');

route(app);

app.listen(3000);
console.log('server run @ 3000 port');




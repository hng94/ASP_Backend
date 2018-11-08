const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const app = new Koa();
const router = new Router();

require('./database/db')(app);
let User = require('./models/login');

// Use the bodyparser middlware
app.use(BodyParser());
app.use(logger());

let walter = new User({
    name: 'Walter',
    password: 'Walter123',
});

walter.save();

//creates the 'standard' route '/'
//takes an parameter ctx which is send to client
router.post("/", async function (ctx) {
    let name = ctx.request.body.name || 'World';
    ctx.body = {message: `Hello ${name}!`}
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
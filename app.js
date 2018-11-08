const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const app = new Koa();
const router = new Router();

require('./database/db')(app);

//models
let User = require('./models/login');
let Card = require('./models/card');
let CardList = require('./models/listofcards');
let board = require('./models/board');

// Use the bodyparser middlware
app.use(BodyParser());
app.use(logger());

let walter = new User({
    _id,
    name: 'Walter',
    password: 'Walter123',
    email: 'Walter@gmx.de'
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
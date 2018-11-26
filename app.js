const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ASP',{useNewUrlParser: true});

const app = new Koa();
const router = new Router();

require('./database/db')(app);
// Use the bodyparser middlware
app.use(BodyParser());
app.use(logger());
//models
let User = require('./models/user');
let Card = require('./models/card');
let CardList = require('./models/listofcards');
let board = require('./models/board');




//creates the 'standard' route '/'
//takes an parameter ctx which is send to client
router.post("/", async function (ctx) {
    let name = ctx.request.body.name || 'World';
    ctx.body = {message: `Hello ${name}!`}
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
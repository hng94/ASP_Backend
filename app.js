const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const mongoose = require('mongoose');
const Router = require( 'koa-router' );

//authentication


const app = new Koa();
const io = new IO();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

//Establish database connection
require('./database/db')(app);
// Use the bodyparser middlware
app.use(BodyParser());
app.use(logger());
//models
let User = require('./models/user');
let Card = require('./models/card');
let ListOfCards = require('./models/listofcards');
let Board = require('./models/board');
router.get('/', (ctx,next) => {
    ctx.body = 'Hello World!';
    console.log("> Route: /");
})

const Bennet = new User({name : "Bennet",email: "bennetsetzer@gmx.de",password: "dadsada", });
Bennet.save();
io.attach( app );

app.io.on( 'connection', sock => {
    console.log("> A new user connected");

    io.on( 'message', (ctx, data) => {

        try {
            JSON.parse(data);
            console.log('JSON: ' + data);
        } catch(e) {
            console.log(data + " is not JSON format");
        }

    })
})

app.listen(3000, function(){
    console.log("> App listening on port 3000")
});


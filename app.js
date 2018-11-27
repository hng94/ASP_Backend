const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const mongoose = require('mongoose');
const IO = require( 'koa-socket-2');

//authentication


const app = new Koa();
const io = new IO();

/* authentication
Koa allows us to have multiple routers - each with his own middleware
router -> unsecured routes
securedRouter -> secured routes
 */
const router = new Router();
const securedRouter = new Router();

const jwt = require('./auth/jwt');


app.use(securedRouter.routes()).use(securedRouter.allowedMethods());
securedRouter.use(jwt.errorHandler()).use(jwt.jwt());
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

router.post('/auth', async (ctx) => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;

    if (username === 'user' && password === 'pwd') {
        ctx.body = {
            token: jwt.issue({
                user: 'user',
                role: 'admin'
            })
        }
    } else {
        ctx.status = 401;
        ctx.body = {error: 'Invalid login'}
    }
});

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


const jwt = require( 'koa-jwt' );
const SECRET = "S3cRET~!";
const jwtInstance = jwt({secret: SECRET});
const jsonwebtoken = require( 'jsonwebtoken' )

function JWTErrorHandler(ctx, next) {
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = {
                "error": "Not authorized"
            };
        } else {
            throw err;
        }
    });
};

//jsonwebtoken - helper function
module.exports.issue = (payload) => {
    return jsonwebtoken.sign(payload, SECRET)
}



module.exports.jwt = () => jwtInstance;
module.exports.errorHandler = () => JWTErrorHandler;
var mainFolder = "../../";


const expressJwt = require('express-jwt');
// const config = require('config.json');

// imports jwt config module
var configs = require(mainFolder + 'configs');
var jwtConfig = configs.jwtConfig;

const userService = require(mainFolder + '../helpers/login/userservice');

module.exports = jwt;

function jwt() {
    const secret = jwtConfig.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};

var { expressjwt: jwt } = require("express-jwt"); 
var jwks = require('jwks-rsa');  
var jwtCheck = jwt({     
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,         
        jwksRequestsPerMinute: 5,         
        jwksUri: 'https://dev-qm8xf6mi.us.auth0.com/.well-known/jwks.json'   
    }),
    audience: 'https://localhost:3000',   
    issuer: 'https://dev-qm8xf6mi.us.auth0.com/',   
    algorithms: ['RS256'] 
});  
module.exports = jwtCheck
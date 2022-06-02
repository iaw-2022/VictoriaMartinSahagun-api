const constante = require('./constantes');
const path = require("path")

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Balcon del Golf API',
            description: 'Documentacion de la API',
            servers: [constante.SERVER]
        },
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                scheme: 'bearer',
                in: 'header',
            },
        }
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
}

module.exports = swaggerOptions
const constante = require('./constantes');
const path = require("path")

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'United Real Estate API',
            description: 'API Docs',
            servers: [constante.SERVER]
        }
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
}

module.exports = swaggerOptions
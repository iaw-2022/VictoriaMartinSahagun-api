const express = require('express');
const cors = require('cors');
const constante = require('./constantes.js');
const actividades_rutas = require('./routes/actividades');
const comidas_rutas = require('./routes/comidas');
const reservas_actividades_rutas = require('./routes/reservas_actividades');
const reservas_comidas_rutas = require('./routes/reservas_comidas');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('./swagger');
const swaggerDocs = swaggerJsDoc(swaggerOptions);

//app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.get('/', (req, res) => {
    res.json({
        message: 'api',
    })
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/actividades', actividades_rutas);
app.use('/comidas', comidas_rutas);
app.use('/reservas_actividades', reservas_actividades_rutas);
app.use('/reservas_comidas', reservas_comidas_rutas);

//auth
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({error: err});
    }
});

//port
app.listen(constante.PORT);
console.log('server on port ', constante.PORT);

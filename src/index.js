const express = require('express');
const cors = require('cors');
const constante = require('./constantes.js');
const actividades_rutas = require('./routes/actividades');
const comidas_rutas = require('./routes/comidas');
const cabanas_rutas = require('./routes/cabanas');
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

//routes
app.get('/', (req, res) => {
    res.json({
        message: 'api',
    })
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/actividades', actividades_rutas);
app.use('/cabanas', cabanas_rutas);
app.use('/comidas', comidas_rutas);
app.use('/reservas_actividades', reservas_actividades_rutas);
app.use('/reservas_comidas', reservas_comidas_rutas);

//port
app.listen(constante.PORT);
console.log('server on port ', constante.PORT);

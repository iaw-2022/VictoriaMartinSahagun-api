const express = require('express');
const router =  express.Router();
const reservasActividadesController = require('../controllers/reservas_actividades.controller');

router.get('/cabana/:id', reservasActividadesController.getReservaActividadByCabanaId);

module.exports = router;
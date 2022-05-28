const express = require('express');
const router =  express.Router();
const reservasComidasController = require('../controllers/reservas_comidas.controller');

router.get('/cabana/:id', reservasComidasController.getReservaComidaByCabanaId);

module.exports = router;
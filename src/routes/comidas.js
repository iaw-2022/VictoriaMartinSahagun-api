const express = require('express');
const router =  express.Router();
const comidasController = require('../controllers/comidas.controller');

router.get('/', comidasController.getComidas);
router.get('/:id', comidasController.getComidaById);
router.get('/:dia', comidasController.getComidaByDay);

module.exports = router;
const express = require('express');
const router =  express.Router();
const actividadesController = require('../controllers/actividades.controller');

router.get('/', actividadesController.getActividades);
router.get('/:id', actividadesController.getActividadById);
router.get('/:dia', actividadesController.getActividadByDay);

module.exports = router;
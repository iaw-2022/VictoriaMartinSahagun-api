const {Router} = require('express');
const router =  Router();
const actividadesController = require('../controllers/actividades.controller');

router.get('/actividades', actividadesController.getActividades);

module.exports = router;
const {Router} = require('express');
const router =  Router();
const {getActividades} = require('../controllers/actividades.controller');

router.get('/actividades', getActividades);

module.exports = router;
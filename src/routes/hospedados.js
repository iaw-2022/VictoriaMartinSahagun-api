const express = require('express');
const router =  express.Router();
const hospedadosController = require('../controllers/hospedados.controller');

/**
 * @swagger
 * /hospedados/:
 *   get:
 *     description: Utilizada para solicitar la cabana de un huesped dentro del complejo.
 *     tags: 
 *       - Hospedados
 *     security: 
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
 router.get('/', hospedadosController.getCabanaByIdHuesped);

module.exports = router;
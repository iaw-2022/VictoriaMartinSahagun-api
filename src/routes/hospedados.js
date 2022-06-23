const express = require('express');
const router =  express.Router();
const hospedadosController = require('../controllers/hospedados.controller');

/**
 * @swagger
 * /hospedados/{id}:
 *   get:
 *     description: Utilizada para solicitar la cabana de un huesped dentro del complejo.
 *     tags: 
 *       - Hospedados
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del huesped
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
 router.get('/:id', hospedadosController.getCabanaByIdHuesped);

module.exports = router;
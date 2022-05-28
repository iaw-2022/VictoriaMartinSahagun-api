const express = require('express');
const router =  express.Router();
const reservasComidasController = require('../controllers/reservas_comidas.controller');

/**
 * @swagger
 * /reservas_comdias/{id}:
 *   get:
 *     description: Utilizada para solicitar una reserva.
 *     tags: 
 *       - Reservas_comdias
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *       '400':
 *         description: Parametro invalido
 *       '404':
 *         description: No encontrado
 */
 router.get('/:id', reservasComidasController.getReservaComidaById);

/**
 * @swagger
 * /reservas_comdias/cabana/{cabana_id}:
 *   get:
 *     description: Utilizada para solicitar las reservas de comdias que realizo una cabana.
 *     tags: 
 *       - Reservas_comdias
 *     parameters:
 *       - in: path
 *         name: cabana_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la cabana que realizo la reserva
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *       '400':
 *         description: Parametro invalido
 *       '404':
 *         description: No encontrado
 */
router.get('/cabana/:id', reservasComidasController.getReservaComidaByCabanaId);

module.exports = router;
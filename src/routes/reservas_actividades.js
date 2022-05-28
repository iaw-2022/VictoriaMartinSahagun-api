const express = require('express');
const router =  express.Router();
const reservasActividadesController = require('../controllers/reservas_actividades.controller');

/**
 * @swagger
 * /reservas_actividades/{id}:
 *   get:
 *     description: Utilizada para solicitar una reserva.
 *     tags: 
 *       - Reservas_actividades
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reserva
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
 router.get('/:id', reservasActividadesController.getReservaActividadById);

/**
 * @swagger
 * /reservas_actividades/cabana/{cabana_id}:
 *   get:
 *     description: Utilizada para solicitar las reservas de actividades que realizo una cabana.
 *     tags: 
 *       - Reservas_actividades
 *     parameters:
 *       - in: path
 *         name: cabana_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la cabana que realizo la reserva
  *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/cabana/:id', reservasActividadesController.getReservaActividadByCabanaId);

module.exports = router;
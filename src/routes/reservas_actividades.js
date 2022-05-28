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

/**
 * @swagger
 * /reservas_actividades:
 *   post:
 *     description: Utilizada para crear una reserva realizada por una cabaña.
 *     tags: 
 *       - Reservas_actividades
 *     parameters:
 *       - in: body
 *         name: reserva_actividad
 *         description: Reserva realizada por una cabana.
 *         schema:
 *           type: object
 *           required:
 *             - cabana_id
 *             - actividad_id
 *             - cantidad_personas
 *           properties:
 *             cabana_id:
 *               type: integer
 *             actividad_id:
 *               type: integer
 *             cantidad_personas:
 *               type: integer
 *     responses:
 *       '201':
 *         description: Sucessful creation
 *       '404':
 *         description: Failed to create
 */
router.post('/', reservasActividadesController.createReservaActividad);

/**
 * @swagger
 * /reservas_actividades/{id}:
 *   put:
 *     description: Utilizada para modificar una reserva realizada por una cabaña.
 *     tags: 
 *       - Reservas_actividades
 *     parameters:
 *       - in: body
 *         name: reserva_actividad
 *         description: Reserva realizada por una cabana.
 *         schema:
 *           type: object
 *           required:
 *             - id
 *             - cantidad_personas
 *           properties:
 *             id:
 *               type: integer
 *             cantidad_personas:
 *               type: integer
 *     responses:
 *       '201':
 *         description: Sucessful update
 *       '404':
 *         description: Failed to update
 */
router.put('/:id', reservasActividadesController.updateCantidadInReservaActividad);

/**
 * @swagger
 * /reservas_actividades/{id}:
 *   delete:
 *     description: Utilizada para eliminar una reserva realizada por una cabaña.
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
 *       '201':
 *         description: Sucessful delete
 *       '404':
 *         description: Failed to delete
 */
router.delete('/:id', reservasActividadesController.deleteReservaActividad);

module.exports = router;
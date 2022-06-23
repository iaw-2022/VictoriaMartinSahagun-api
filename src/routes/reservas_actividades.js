const express = require('express');
const router =  express.Router();
const reservasActividadesController = require('../controllers/reservas_actividades.controller');
const auth = require('../auth');

//auth
router.get('/authorized',auth, function (req, res) {
    res.send('Secured Resource');
});

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
 * /reservas_actividades/huesped/{huesped_id}:
 *   get:
 *     description: Utilizada para solicitar las reservas de actividades que realizo un huesped.
 *     tags: 
 *       - Reservas_actividades
 *     parameters:
 *       - in: path
 *         name: huesped_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del huesped que realizo la reserva
  *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/huesped/:id', reservasActividadesController.getReservaActividadByHuespedId);

/**
 * @swagger
 * /reservas_actividades:
 *   post:
 *     description: Utilizada para crear una reserva realizada por una cabaña.
 *     security: 
 *       - bearerAuth: []
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
 *         description: Not found
 */
router.post('/', auth, reservasActividadesController.createReservaActividad);

/**
 * @swagger
 * /reservas_actividades/{id}:
 *   put:
 *     description: Utilizada para modificar una reserva realizada por una cabaña.
 *     security: 
 *       - bearerAuth: []
 *     tags: 
 *       - Reservas_actividades
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reserva
 *       - in: body
 *         name: reserva_actividad
 *         description: Reserva realizada por una cabana.
 *         schema:
 *           type: object
 *           required:
 *             - cantidad_personas
 *           properties:
 *             cantidad_personas:
 *               type: integer
 *     responses:
 *       '201':
 *         description: Sucessful update
 *       '404':
 *         description: Not found
 */
router.put('/:id', auth, reservasActividadesController.updateCantidadInReservaActividad);

/**
 * @swagger
 * /reservas_actividades/{id}:
 *   delete:
 *     description: Utilizada para eliminar una reserva realizada por una cabaña.
 *     security: 
 *       - bearerAuth: []
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
 *         description: Not found
 */
router.delete('/:id', auth, reservasActividadesController.deleteReservaActividad);

module.exports = router;
const express = require('express');
const router =  express.Router();
const reservasComidasController = require('../controllers/reservas_comidas.controller');
const auth = require('../auth');

//auth
router.get('/authorized',auth, function (req, res) {
    res.send('Secured Resource');
});

/**
 * @swagger
 * /reservas_comidas/{id}:
 *   get:
 *     description: Utilizada para solicitar una reserva.
 *     tags: 
 *       - Reservas_comidas
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
 router.get('/:id', reservasComidasController.getReservaComidaById);

/**
 * @swagger
 * /reservas_comidas/huesped/{huesped_id}:
 *   get:
 *     description: Utilizada para solicitar las reservas de comdias que realizo un huesped.
 *     tags: 
 *       - Reservas_comidas
 *     parameters:
 *       - in: path
 *         name: huesped_id
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
router.get('/huseped/:id', reservasComidasController.getReservaComidaByHuespedId);

/**
 * @swagger
 * /reservas_comidas:
 *   post:
 *     description: Utilizada para crear una reserva realizada por una cabaña.
 *     security: 
 *       - bearerAuth: []
 *     tags: 
 *       - Reservas_comidas
 *     parameters:
 *       - in: body
 *         name: reserva_comida
 *         description: Reserva realizada por una cabana.
 *         schema:
 *           type: object
 *           required:
 *             - cabana_id
 *             - comida_id
 *             - cantidad_personas
 *           properties:
 *             cabana_id:
 *               type: integer
 *             comida_id:
 *               type: integer
 *             cantidad_personas:
 *               type: integer
 *     responses:
 *       '201':
 *         description: Sucessful creation
 *       '404':
 *         description: Not found
 */
router.post('/', auth, reservasComidasController.createReservaComida);

/**
 * @swagger
 * /reservas_comidas/{id}:
 *   put:
 *     description: Utilizada para modificar una reserva realizada por una cabaña.
 *     security: 
 *       - bearerAuth: []
 *     tags: 
 *       - Reservas_comidas
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la reserva
 *       - in: body
 *         name: reserva_comida
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
router.put('/:id', auth, reservasComidasController.updateCantidadInReservaComida);

/**
 * @swagger
 * /reservas_comidas/{id}:
 *   delete:
 *     description: Utilizada para eliminar una reserva realizada por una cabaña.
 *     security: 
 *       - bearerAuth: []
 *     tags: 
 *       - Reservas_comidas
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
router.delete('/:id', auth, reservasComidasController.deleteReservaComida);

module.exports = router;
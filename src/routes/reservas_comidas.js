const express = require('express');
const router =  express.Router();
const reservasComidasController = require('../controllers/reservas_comidas.controller');

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
 *         description: Respuesta exitosa
 *       '400':
 *         description: Parametro invalido
 *       '404':
 *         description: No encontrado
 */
 router.get('/:id', reservasComidasController.getReservaComidaById);

/**
 * @swagger
 * /reservas_comidas/cabana/{cabana_id}:
 *   get:
 *     description: Utilizada para solicitar las reservas de comdias que realizo una cabana.
 *     tags: 
 *       - Reservas_comidas
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

/**
 * @swagger
 * /reservas_comidas:
 *   post:
 *     description: Utilizada para crear una reserva realizada por una cabaña.
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
 *         description: Failed to create
 */
router.post('/', reservasComidasController.createReservaComida);

/**
 * @swagger
 * /reservas_comidas/{id}:
 *   put:
 *     description: Utilizada para modificar una reserva realizada por una cabaña.
 *     tags: 
 *       - Reservas_comidas
 *     parameters:
 *       - in: body
 *         name: reserva_comida
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
router.put('/:id', reservasComidasController.updateCantidadInReservaComida);

/**
 * @swagger
 * /reservas_comidas/{id}:
 *   delete:
 *     description: Utilizada para eliminar una reserva realizada por una cabaña.
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
 *         description: Failed to delete
 */
router.delete('/:id', reservasComidasController.deleteReservaComida);

module.exports = router;
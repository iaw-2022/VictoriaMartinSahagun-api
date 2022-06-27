const express = require('express');
const router =  express.Router();
const comidasController = require('../controllers/comidas.controller');

/**
 * @swagger
 * /comidas:
 *   get:
 *     description: Utilizada para solicitar todas las comidas.
 *     tags: 
 *       - Comidas
  *     responses:
 *       '200':
 *         description: Sucessful response
 *       '404':
 *         description: Not found
 */
router.get('/', comidasController.getComidas);

/**
 * @swagger
 * /comidas/huesped/{id}:
 *   get:
 *     description: Utilizada para solicitar todas las comidas que no fueron reservadas por un huesped.
 *     tags: 
 *       - Comidas
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
 *       '404':
 *         description: Not found
 */
 router.get('/huesped/:id', comidasController.getComidasSinReservaByHuespedId);

/**
 * @swagger
 * /comidas/{id}:
 *   get:
 *     description: Utilizada para solicitar una comida.
 *     tags: 
 *       - Comidas
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la comida
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/:id', comidasController.getComidaById);

/**
 * @swagger
 * /comidas/dia/{dia}:
 *   get:
 *     description: Utilizada para solicitar las comidas que se realizan en un dia.
 *     tags: 
 *       - Comidas
 *     parameters:
 *       - in: path
 *         name: dia
 *         schema:
 *           type: string
 *         required: true
 *         description: dia de la comida
  *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/dia/:dia', comidasController.getComidaByDay);

module.exports = router;
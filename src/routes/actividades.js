const express = require('express');
const router =  express.Router();
const actividadesController = require('../controllers/actividades.controller');

/**
 * @swagger
 * /actividades:
 *   get:
 *     description: Utilizada para solicitar todas las actividades.
 *     tags: 
 *       - Actividades
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '404':
 *         description: Not found
 */
router.get('/', actividadesController.getActividades);

/**
 * @swagger
 * /actividades/huesped/:
 *   get:
 *     description: Utilizada para solicitar todas las actividades que no fueron reservadas por un huesped.
 *     tags: 
 *       - Actividades
 *     security: 
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '404':
 *         description: Not found
 */
 router.get('/huesped/', actividadesController.getActividadesSinReservaByHuespedToken);

/**
 * @swagger
 * /actividades/{id}:
 *   get:
 *     description: Utilizada para solicitar una actividad.
 *     tags: 
 *       - Actividades
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la actividad
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/:id', actividadesController.getActividadById);

/**
 * @swagger
 * /actividades/dia/{dia}:
  *   get:
 *     description: Utilizada para solicitar las actividades que se realizan en un dia.
 *     tags: 
 *       - Actividades
 *     parameters:
 *       - in: path
 *         name: dia
 *         schema:
 *           type: string
 *         required: true
 *         description: dia de la actividad
 *     responses:
 *       '200':
 *         description: Sucessful response
 *       '400':
 *         description: Invalid parameter
 *       '404':
 *         description: Not found
 */
router.get('/dia/:dia', actividadesController.getActividadByDay);

module.exports = router;
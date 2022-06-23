const express = require('express');
const router =  express.Router();
const huespedesController = require('../controllers/huespedes.controller');

/**
 * @swagger
 * /huespedes/{id}:
 *   get:
 *     description: Utilizada para solicitar un huesped.
 *     tags: 
 *       - Huesped
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
 router.get('/:id', huespedesController.getHuespedById);

module.exports = router;
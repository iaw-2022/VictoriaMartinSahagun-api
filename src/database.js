const { Pool, Client } = require('pg');
const constante = require('./constantes');

const db_configuracion = {
    user: constante.DB_USER,
    host: constante.DB_HOST,
    password: constante.DB_PASSWORD,
    database: constante.DB_DATABASE,
    port: constante.DB_PORT,
    ssl: { rejectUnauthorized: false }
};

const db = new Pool(db_configuracion);

module.exports = db;
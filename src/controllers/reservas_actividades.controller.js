const db =  require('../database');
const getUserInfo = require('../utils/auth').getUserInfoFromToken;

const getReservaActividadById = async (req, res) => {
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('SELECT * FROM reservas_actividades WHERE id = $1',[id]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getReservaActividadByHuespedToken = async (req, res) => {
    try{
        const info = await getUserInfo(req);
        await findId(info).then(
            async (huesped_id) => {
                const cabana = await db.query('SELECT cabana_id FROM hospedados WHERE huesped_id = $1',[huesped_id]);
                console.log(cabana.rows);
                if(cabana.rows.length > 0){
                    const response = await db.query('SELECT * FROM (SELECT actividades.id as actividad_id,nombre,localizacion,horario,dia,img,reservas_actividades.id as reserva_id,cabana_id,cantidad_personas FROM actividades JOIN reservas_actividades ON actividades.id=actividad_id) as reservas WHERE cabana_id = $1;',[cabana.rows[0].cabana_id])
                    res.status(200).json(response.rows);
                }else{
                    res.status(404).json({error: 'not found'});
                }
            }
        )

    }catch(Error){
        res.status(400).json({error: Error.message});
    }
};

async function findId (info){
    let huesped_id = await db.query ('SELECT id from huespedes WHERE email = $1', [info.email]).
    then((huesped_id) => {
        if (huesped_id.rowCount <= 0){
            return db.query('INSERT INTO huespedes (nombre, email) VALUES ($1,$2) returning id', [info.name, info.email]).then((huesped_id) => huesped_id.rows[0].id)
        }else return huesped_id.rows[0].id
    })
    return huesped_id
}

const createReservaActividad = async (req, res) => {
    try{
        const {actividad_id, cabana_id, cantidad_personas} = req.body;
        const response = await db.query('INSERT INTO reservas_actividades(actividad_id, cabana_id, cantidad_personas) VALUES ($1,$2,$3)',
        [actividad_id,cabana_id,cantidad_personas]);
        res.status(201).json({succes: 'true'});
    }catch(error){
        res.status(404).json({
            error: 'failed to create'});
    }
};

const updateCantidadInReservaActividad = async (req, res) => {
    const id = req.params.id;
    try{
        const {cantidad_personas} = req.body;
        if(!isNaN(id)){
            const response = await db.query('UPDATE reservas_actividades SET cantidad_personas = $1 WHERE id = $2',
            [cantidad_personas, id]);
            res.status(201).json({succes: 'true'});
        }else{
            res.status(400).json({error: 'invalid parameter'});
        }
    }catch(error){
        res.status(404).json({
            error: 'failed to update'});
    }
};

const deleteReservaActividad = async (req, res) => {
    try{
        const id = req.params.id; 
        if(!isNaN(id)){
            const response = await db.query('DELETE FROM reservas_actividades WHERE id = $1', [id]);
            res.status(201).json({succes: 'true'});
        }else{
            res.status(400).json({error: 'invalid parameter'});
        }
    }catch(error){
        res.status(404).json({
            error: 'failed to delete'});
    }
};

module.exports = {
    getReservaActividadById,
    getReservaActividadByHuespedToken,
    createReservaActividad,
    updateCantidadInReservaActividad,
    deleteReservaActividad
}
const db =  require('../database');

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

const getReservaActividadByCabanaId = async (req, res) => {
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('SELECT * FROM reservas_actividades WHERE cabana_id = $1',[id]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const createReservaActividad = async (req, res) => {
    try{
        const {actividad_id, cabana_id, cantidad_personas} = req.body;
        const response = await db.query('INSERT INTO reservas_actividades(actividad_id, cabana_id, cantidad_personas) VALUES ($1, $2, $3)',
        [actividad_id,cabana_id,cantidad_personas]);
        res.status(201).json({succes: 'true'});
    }catch(error){
        res.status(404).json({
            error: 'failed to create',
            description: error.message
        });
    }
};

const updateCantidadInReservaActividad = async (req, res) => {
    try{
        if(!isNaN(req.params.id)){
            const {id, cantidad_personas} = req.body;
            const response = await db.query('UPDATE reservas_actividades SET cantidad_personas = $1 WHERE id = $2',
            [cantidad_personas, id]);
            res.status(201).json({succes: 'true'});
        }else{
            res.status(400).json({error: 'invalid parameter'});
        }
    }catch(error){
        res.status(404).json({error: 'failed to update'});
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
        res.status(404).json({error: 'failed to delete'});
    }
};

module.exports = {
    getReservaActividadById,
    getReservaActividadByCabanaId,
    createReservaActividad,
    updateCantidadInReservaActividad,
    deleteReservaActividad
}
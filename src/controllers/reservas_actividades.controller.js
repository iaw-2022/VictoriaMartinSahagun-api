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

module.exports = {
    getReservaActividadById,
    getReservaActividadByCabanaId
}
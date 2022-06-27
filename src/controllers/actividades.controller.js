const db =  require('../database');

const getActividades = async(req, res) =>{
    const response = await db.query('SELECT * FROM actividades');
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
}

const getActividadById = async (req, res) => {
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('SELECT * FROM actividades WHERE id = $1',[id]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getActividadByDay = async (req, res) => {
    const dia = req.params.dia;
    if(isNaN(dia)){
        const response = await db.query('SELECT * FROM actividades WHERE dia = $1',[dia]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getActividadesSinReservaByHuespedId = async (req, res) => {
    const id = req.params.id;
    if(!isNaN(id)){
        const cabana = await db.query('SELECT cabana_id FROM hospedados WHERE huesped_id = $1',[id]);
        const actividades_reservadas = await db.query('SELECT actividad_id FROM reservas_actividades WHERE actividad_id = $1',[cabana.rows[0].cabana_id]);
        const response = await db.query('SELECT * FROM actividades WHERE id!=$1',[actividades_reservadas.rows[0].actividad_id]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

module.exports = {
    getActividades,
    getActividadById,
    getActividadByDay,
    getActividadesSinReservaByHuespedId
}
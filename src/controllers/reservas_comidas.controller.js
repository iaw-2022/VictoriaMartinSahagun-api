const db =  require('../database');

const getReservaComidaById = async (req, res) => {
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('SELECT * FROM reservas_comidas WHERE id = $1',[id]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getReservaComidaByCabanaId = async (req, res) => {
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('SELECT * FROM reservas_comidas WHERE cabana_id = $1',[id]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const createReservaComida = async (req, res) => {
    try{
        const {comida_id, cabana_id, cantidad_personas} = req.body;
        const response = await db.query('INSERT INTO reservas_comidas (comida_id, cabana_id, cantidad_personas) VALUES ($1,$2,$3)',
        [comida_id,cabana_id,cantidad_personas]);
        res.status(201).json({succes: 'true'});
    }catch(error){
        res.status(404).json({
            error: 'failed to create'});
    }
};

const updateCantidadInReservaComida= async (req, res) => {
    try{
        const {id, cantidad_personas} = req.body;
        if(!isNaN(id)){
            const response = await db.query('UPDATE reservas_comidas SET cantidad_personas = $2 WHERE id = $1',
            [id,cantidad_personas]);
            res.status(201).json({succes: 'true'});
        }else{
            res.status(400).json({error: 'invalid parameter'});
        }
    }catch(error){
        res.status(404).json({
            error: 'failed to update'});
    }
};

const deleteReservaComida = async (req, res) => {
    try{
        const id = req.params.id; 
        if(!isNaN(id)){
            const response = await db.query('DELETE FROM reservas_comidas WHERE id = $1', [id]);
            res.status(201).json({succes: 'true'});
        }else{
            res.status(400).json({error: 'invalid parameter'});
        }
    }catch(error){
        res.status(404).json({error: 'failed to delete'});
    }
};

module.exports = {
    getReservaComidaById,
    getReservaComidaByCabanaId,
    createReservaComida,
    updateCantidadInReservaComida,
    deleteReservaComida
}
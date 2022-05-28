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

module.exports = {
    getReservaComidaById,
    getReservaComidaByCabanaId
}
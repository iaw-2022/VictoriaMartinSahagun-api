const db =  require('../database');

const getComidas = async(req, res) =>{
    const response = await db.query('SELECT * FROM comidas');
    
    if(response.rows.length > 0){
        res.status(200).json(response.rows);
    }else{
        res.status(404).json({error: 'not found'});
    }
}

const getComidaById = async (req, res) => {
    const id = req.params.id;
    if(!isNaN(id)){
        const response = await db.query('SELECT * FROM comidas WHERE id = $1',[id]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getComidaByDay = async (req, res) => {
    const dia = req.params.dia;
    if(isNaN(dia)){
        const response = await db.query('SELECT * FROM comidas WHERE dia = $1',[dia]);

        if(response.rows.length > 0){
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};

const getComidasSinReservaByHuespedId = async (req, res) => {
    const id = req.params.id;
    if(!isNaN(id)){
        const cabana = await db.query('SELECT cabana_id FROM hospedados WHERE huesped_id = $1',[id]);
        //const response = await db.query('SELECT * FROM comidas WHERE id!=(SELECT comida_id FROM reservas_comidas WHERE cabana_id = $1)',[cabana.rows[0].cabana_id]);
        const response = await db.query('SELECT * FROM comidas');

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
    getComidas,
    getComidaById,
    getComidaByDay,
    getComidasSinReservaByHuespedId
}
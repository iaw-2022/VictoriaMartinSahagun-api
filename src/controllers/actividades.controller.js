const db =  require('../database');
const getUserInfo = require('../utils/auth').getUserInfoFromToken;

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

const getActividadesSinReservaByHuespedToken = async (req, res) => {
    try{
        const info = await getUserInfo(req);
        await findId(info).then(
            async (huesped_id) => {
                const cabana = await db.query('SELECT cabana_id FROM hospedados WHERE huesped_id = $1',[huesped_id]);
                const response = await db.query('SELECT * FROM actividades WHERE id NOT IN (SELECT actividad_id FROM reservas_actividades WHERE cabana_id = $1)',[cabana.rows[0].cabana_id]);
                if(response.rows.length > 0){
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

module.exports = {
    getActividades,
    getActividadById,
    getActividadByDay,
    getActividadesSinReservaByHuespedToken
}
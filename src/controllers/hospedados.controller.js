const db =  require('../database');
const getUserInfo = require('../utils/auth').getUserInfoFromToken;

const getCabanaByIdHuesped = async (req, res) => {
    try{
        const info = await getUserInfo(req);
        await findId(info).then(
            async (huesped_id) => {
                const cabana = await db.query('SELECT cabana_id FROM hospedados WHERE huesped_id = $1',[huesped_id]);
                if(cabana.rows.length > 0){
                    const response = await db.query('SELECT id,capacidad,numero FROM cabanas WHERE id = $1',[cabana.rows[0].cabana_id]);
                    res.status(200).json(response.rows[0]);
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
    getCabanaByIdHuesped,
}
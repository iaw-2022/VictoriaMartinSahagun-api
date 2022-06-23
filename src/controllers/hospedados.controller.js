const db =  require('../database');

const getCabanaByIdHuesped = async (req, res) => {
    const id = req.params.id;
    if(!isNaN(id)){
        const cabana = await db.query('SELECT cabana_id FROM hospedados WHERE huesped_id = $1',[id]);
        if(cabana.rows.length > 0){
            const response = await db.query('SELECT capacidad,numero FROM cabanas WHERE cabana_id = $1',[cabana.rows[0].cabana_id]);
            res.status(200).json(response.rows[0]);
        }else{
            res.status(404).json({error: 'not found'});
        }
    }else{
        res.status(400).json({error: 'invalid parameter'});
    }
};


module.exports = {
    getCabanaByIdHuesped,
}
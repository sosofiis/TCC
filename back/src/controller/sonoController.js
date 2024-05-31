const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeSono(request, response) {
    const params = Array(
        request.body.data,
        request.body.sono
    );
    
    console.log(params);
    const query = "INSERT INTO sono(user_id, data, sono) VALUES(1, ?, ?)";

    connection.query(query, params, (err, results) => {
        if (results) { 
            response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso!",
                data: results
            })
        } else {
            console.log(err);
            response
            .status(400)
            .json({
                sucess: false,
                message: "Ops, deu problema!",
                sql: err
            })
        }
    })
}

module.exports = {
    storeSono
}
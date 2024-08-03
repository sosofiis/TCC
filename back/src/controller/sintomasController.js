const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeSintomas(request, response) {
    const params = Array(
        request.body.data,
        request.body.sintomas
    );
    
    console.log(params);
    const query = "INSERT INTO sintomas(user_id, data, sintomas) VALUES(1, ?, ?)";

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

async function getSintomas(request, response) {
    const params = Array(
        request.body.data
    );

    console.log(params);
    const query = "SELECT * from sintomas where data = ?";

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
    storeSintomas,
    getSintomas
}
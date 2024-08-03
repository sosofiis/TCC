const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeAtiv_fisica(request, response) {
    const params = Array(
        request.body.data,
        request.body.ativ
    );
    
    console.log(params);
    const query = "INSERT INTO ativ_fisica(user_id, data, ativ) VALUES(1, ?, ?)";

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

async function getAtiv_fisica(request, response) {
    const params = Array(
        request.body.data
    );

    console.log(params);
    const query = "SELECT * from ativ_fisica where data = ?";

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
    storeAtiv_fisica,
    getAtiv_fisica
}
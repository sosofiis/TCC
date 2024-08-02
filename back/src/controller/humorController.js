const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeHumor(request, response) {
    const params = Array(
        request.body.data,
        request.body.humor
    );
    
    console.log(params);
    const query = "INSERT INTO humor(user_id, data, humor) VALUES(1, ?, ?)";

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

async function getHumor(request, response) {
    const params = Array(
        request.body.data
    );

    console.log(params);
    const query = "SELECT * from humor where data = ?";

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
    storeHumor,
    getHumor
}
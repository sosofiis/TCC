const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeHumor(request, response) {

    const params = Array(
        request.body.iduser,
        request.body.data,
        request.body.humor
    );
        const query = "INSERT INTO humor(user_id, data, humor) VALUES(?, ?, ?)";

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
        request.body.user_id,
        request.body.data
    );

    console.log(params);
    const query = "SELECT * from humor where user_id = ?, data = ?";

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

async function deleteHumor(request, response) {
    const params = Array(
        request.body.data, 
        request.body.humor
    );

    console.log(params);
    const query = "DELETE from humor where data = ? and humor = ? ";

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
    getHumor, 
    deleteHumor
}
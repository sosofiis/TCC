const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeSono(request, response) {
    const params = Array(
        request.body.iduser,
        request.body.data,
        request.body.sono
    );
    
    console.log(params);
    const query = "INSERT INTO sono(user_id, data, sono) VALUES(?, ?, ?)";

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

async function getSono(request, response) {
    const params = Array(
        request.body.user_id,
        request.body.data
    );

    console.log(params);
    const query = "SELECT * from sono where user_id = ? AND data = ?";

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

async function deleteSono(request, response) {
    const params = Array(
        request.body.data, 
        request.body.sono
    );

    console.log(params);
    const query = "DELETE from sono where data = ? and sono = ? ";

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
    storeSono, 
    getSono, 
    deleteSono
}
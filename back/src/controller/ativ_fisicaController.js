const connection = require('../config/db');
const dotenv = require('dotenv').config();

// insere a atividade física na tabela
async function storeAtiv_fisica(request, response) {   
    const params = Array(
        request.body.iduser,
        request.body.data,
        request.body.ativ
    );
    
    console.log(params);
    const query = "INSERT INTO ativ_fisica(user_id, data, ativ) VALUES(?, ?, ?)";

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

// seleciona a atividade física a partir da data q foi registrada
async function getAtiv_fisica(request, response) {
    const params = Array(
        request.body.user_id,
        request.body.data
    );

    console.log(params);
    const query = "SELECT * from ativ_fisica where user_id = ? AND data = ?";

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

// deleta a atividade física
async function deleteAtiv_fisica(request, response) {
    const params = Array(
        request.body.data, 
        request.body.ativ
    );

    console.log(params);
    const query = "DELETE from ativ_fisica where data = ? and ativ = ? ";

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
    getAtiv_fisica,
    deleteAtiv_fisica
}
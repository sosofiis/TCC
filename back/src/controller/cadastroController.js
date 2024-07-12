const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function createUser(request, response) {
    const params = Array(
        request.body.nome,
        request.body.email,
        request.body.senha
    );
    
    console.log(params);
    const query = "INSERT INTO fj_users(nome, email, senha) VALUES(?, ?, ?)";

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
    createUser
}
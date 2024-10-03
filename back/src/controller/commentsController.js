const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeComment(request, response) {
    const params = Array(
        request.body.id_usuario,
        request.body.comentario
    )

    let query = "INSERT INTO comments(id_usuario, content) VALUES(?, ?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: 'Sucesso!',
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: 'Sem sucesso!',
                    sql: err
                });
        }
    });
}

async function getComment(request, response) {
    const query = "select fj_users.nome, comments.* from fj_users, comments  where comments.id_usuario = fj_users.id";

    connection.query(query, (err, results) => {
        if(results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: 'Sucesso!',
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: 'Sem sucesso!',
                    sql: err
                });
        }
    });
}

module.exports = {
    storeComment,
    getComment
}
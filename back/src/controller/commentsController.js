const connection = require('../config/db');
const dotenv = require('dotenv').config();
const id_post = require("../../../front/posts/postsDetalhes.js")

async function storeComment(request, response) {
    const params = Array(
        //request id post
        request.body.id_usuario,
        request.body.comentario,
        request.body.id_post
    )

    let query = "INSERT INTO comments(id_usuario, content, id_post) VALUES(?, ?, ?)";

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
    //filtrar também com id do post
    const query = `
    SELECT fj_users.nome, comments.* 
    FROM comments
    INNER JOIN fj_users ON fj_users.id = comments.id_usuario
    INNER JOIN posts ON posts.id = comments.id_post
    WHERE comments.id_usuario = fj_users.id AND comments.id_post = ${id_post};
    `
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
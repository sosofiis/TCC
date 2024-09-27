const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storePost(request, response) {
    const params = Array(
        request.body.id_usuario,
        request.body.title,
        request.body.conteudo,
        request.body.imagem
    )

    let query = "INSERT INTO posts(id_usuario, title, conteudo, imagem) VALUES(?, ?, ?, ?)";

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

async function getPost(request, response) {
    const query = "select fj_users.nome, posts.* from fj_users, posts  where posts.id_usuario = fj_users.id";

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

async function getPostById(request, response) {
    const params = Array (
        request.params.id
    )

    const query = "SELECT * FROM posts WHERE id = ?"

    connection.query(query, params, (err, results) => {
        if(results.length > 0) {
            response.status(200).json({
                success: true,
                data: results[0],
                message: "Sucesso!"
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
    })
}

module.exports = {
    storePost,
    getPost,
    getPostById
}
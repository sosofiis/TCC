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
    const query = "SELECT fj_users.nome, posts.* FROM fj_users, posts WHERE posts.id_usuario = fj_users.id ORDER BY posts.created_at DESC";

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

    const query = "SELECT posts.id AS id, posts.conteudo AS conteudo, posts.title AS title, fj_users.nome AS nome FROM posts, fj_users WHERE posts.id_usuario = fj_users.id AND posts.id = ?;"

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

async function deletePostById(request, response) {
    const postId = request.params.id;

    // Excluir os comentários primeiro
    const deleteCommentsQuery = "DELETE FROM comments WHERE id_post = ?;";
    connection.query(deleteCommentsQuery, [postId], (err, results) => {
        if (err) {
            return response.status(500).json({
                success: false,
                message: 'Erro ao deletar os comentários',
                sql: err
            });
        }

        // Agora excluir o post
        const deletePostQuery = "DELETE FROM posts WHERE id = ?;";
        connection.query(deletePostQuery, [postId], (err, results) => {
            if (err) {
                return response.status(500).json({
                    success: false,
                    message: 'Erro ao deletar o post',
                    sql: err
                });
            }

            if (results.affectedRows > 0) {
                response.status(200).json({
                    success: true,
                    message: "Post e comentários deletados com sucesso!"
                });
            } else {
                response.status(404).json({
                    success: false,
                    message: 'Post não encontrado!'
                });
            }
        });
    });
}



module.exports = {
    storePost,
    getPost,
    getPostById,
    deletePostById
}
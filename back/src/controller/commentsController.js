const connection = require('../config/db');
const dotenv = require('dotenv').config();

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
    const id_post = request.params.id_post;
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

async function deleteCommentById(request, response) {
    const commentId = request.params.id;

        // Agora excluir o post
        const deleteCommentQuery = "DELETE FROM comments WHERE id = ?;";
        connection.query(deleteCommentQuery, [commentId], (err, results) => {
            if (err) {
                return response.status(500).json({
                    success: false,
                    message: 'Erro ao deletar o comentário',
                    sql: err
                });
            }

            if (results.affectedRows > 0) {
                response.status(200).json({
                    success: true,
                    message: "Comentário deletado com sucesso!"
                });
            } else {
                response.status(404).json({
                    success: false,
                    message: 'Comentário não encontrado!'
                });
            }
        });
};

module.exports = {
    storeComment,
    getComment,
    deleteCommentById
}
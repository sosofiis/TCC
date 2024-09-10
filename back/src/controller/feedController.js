const connection = require('../config/db');

async function cadastrarPost(request, response) {
    let params = Array(
        request.body.title,
        request.body,conteudo,
        request.file.filename
    )

    let query = "INSERT INTO posts(title, conteudo, imagem) VALUES(?, ?, ?)";

    connection.query(query, params) (err, results => {
        if(results) {
            response
                .status(201)
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
                    data: err
                })
        }
    })
}

module.exports = {
    cadastrarPost
}
const connection = require('../config/db');

async function loginUser(request, response) {
    const query = "SELECT email, senha FROM fj_users WHERE `email` = ?";

    // Recuperar credenciais informadas
    const params = Array(
        request.body.email
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results.length > 0) {
                if (request.body.senha === results[0].senha) {
                    response
                        .status(200)
                        .json({
                            success: true,
                            message: `Sucesso! Usuário conectado.`,
                            data: results
                        });
                } else {
                    response
                        .status(400)
                        .json({
                            success: false,
                            message: `E-mail ou senha incorretos.`                            
                        });
                }

            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Usuário não encontrado!`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível conectar o usuário!",
                query: err,
                sqlMessage: err
            });
        }
    });
}

module.exports = {
    loginUser
}
document.getElementById("botaoVoltar").addEventListener("click",
    function () {
        history.back();
    }
);

document.addEventListener('DOMContentLoaded', async function () {
    const urlParams = new URLSearchParams(window.location.search);

    const postId = urlParams.get("id");

    if (postId) {
        fetch(`http://localhost:3000/api/get/post/detalhes/${postId}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    const detalhesMain = document.getElementById("detalhes");
                    detalhesMain.innerHTML =
                        `
                    <div class="user-name">
                        <div class="user-informations">
                            <h3>${data.data.nome}</h3>
                            <button class="botao-tres-pontos" id="botaoDeletar">
                                <span class="material-symbols-outlined" id="tres-pontos">
                                    more_horiz
                                </span>
                            </button>
                            
                        </div>
                        
                    </div>
                    
                    <div class="post">
                        <h4>${data.data.title}</h4>
                        <p>${data.data.conteudo}</p>
                    </div>
                `;

                    const detalhesFooter = document.getElementById("detalhesFooter");
                    detalhesFooter.innerHTML =
                        `
                    <div class="respostas">
                        <form id="formRespostas">
                            <input type="text" placeholder="Publicar sua resposta..." id="inputResposta"></input>
                            <button id="enviarResposta" type="submit">Publicar</button>
                        </form>
                        
                    </div>

                    <div id="listaRespostas" class="lista-respostas">
                        <h3 class="h3-comentarios">Comentários</h3>
                        <div class="comentarios">
                            
                        </div>
                    </div>
                `;

                    const botaoDeletar = document.getElementById('botaoDeletar');
                    botaoDeletar.addEventListener('click', function () {
                        var confirmacao = confirm("Você deseja deletar este post?");
                        if (confirmacao) {
                            fetch(`http://localhost:3000/api/delete/post/${postId}`, {
                                method: 'DELETE'
                            })
                                .then(response => response.json())
                                .then(data => {
                                    if (data.success) {
                                        alert('Post deletado com sucesso!');
                                        window.location.href = './forum.html'; // Redireciona para outra página após deletar
                                    } else {
                                        alert('Erro ao deletar o post: ' + data.message);
                                    }
                                })
                                .catch(error => console.error('Erro ao deletar o post:', error));
                        } else {
                            alert("Você cancelou a operação de deletar");
                        }
                    });


                    // Adiciona o event listener para o botão após o HTML ser carregado
                    const form = document.getElementById('formRespostas');
                    form.addEventListener('submit', publicar);
                } else {
                    const detalhesMain = document.getElementById("detalhes");
                    detalhesMain.innerHTML = `Não há post!`;
                }
            });
    }

    const response = await fetch(`http://localhost:3000/api/get/comment/${postId}`);
    const result = await response.json();

    if (result.success) {
        const commentsList = document.querySelector('.comentarios')
        result.data.forEach(comments => {
            const cardComment = document.createElement('div');
            cardComment.className = 'comentario';

            const cardNomeDelete = document.createElement('div');
            cardNomeDelete.className = 'user-informations';

            const buttonDelete = document.createElement('button');
            buttonDelete.className = 'botao-tres-pontos';
            buttonDelete.id = 'botaoDeletarComentario'

            const iconDelete = document.createElement('span');
            iconDelete.classList.add('material-symbols-outlined');
            iconDelete.textContent = 'more_horiz'

            const userName = document.createElement('h2');
            userName.textContent = comments.nome;

            const cardDescription = document.createElement('div');

            const postDescription = document.createElement('p');
            postDescription.textContent = comments.content

            cardDescription.appendChild(postDescription);

            buttonDelete.appendChild(iconDelete);

            cardNomeDelete.appendChild(userName);
            cardNomeDelete.appendChild(buttonDelete);


            cardComment.appendChild(cardNomeDelete);
            cardComment.appendChild(cardDescription);

            commentsList.appendChild(cardComment);

            const urlParams = new URLSearchParams(window.location.search);

            //acho que aqui é o problema
            const commentId = urlParams.get("commentId");

            const botaoDeletarComentario = document.getElementById('botaoDeletarComentario');
            botaoDeletarComentario.addEventListener('click', function () {
                var confirmacao = confirm("Você deseja deletar este comentário?");
                if (confirmacao) {
                    fetch(`http://localhost:3000/api/delete/comment/${commentId}`, {
                        method: 'DELETE'
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.success) {
                                alert('Comentário deletado com sucesso!');
                                window.location.href = './forum.html'; // Redireciona para outra página após deletar
                            } else {
                                alert('Erro ao deletar o comentário: ' + data.message);
                            }
                        })
                        .catch(error => console.error('Erro ao deletar o comentário:', error));
                } else {
                    alert("Você cancelou a operação de deletar");
                }
            });
        })
    } else {
        console.log('Erro', result.sql);
    }

});

async function publicar(e) {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    console.log(postId)
    //modificar tabela de comentários
    //inserir id do post junto ao insert no comentário
    let comentario = document.getElementById("inputResposta").value;
    let usuario = localStorage.getItem("dados_usuario");

    let id_usuario = JSON.parse(usuario).id
    let id_post = parseInt(postId)

    let dados = { id_usuario, comentario, id_post }
    console.log(dados)
    const response = await fetch('http://localhost:3000/api/store/comment', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if (content.success) {
        alert("Sucesso!")
        window.location.reload(true);
    } else {
        alert("Post não enviado!")
        console.log(content.sql);
    }

}

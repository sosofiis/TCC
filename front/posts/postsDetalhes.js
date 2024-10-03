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
                        <h3>${data.data.nome}</h3>
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
                        <h3>Comentários</h3>
                    </div>
                `;

                    // Adiciona o event listener para o botão após o HTML ser carregado
                    const form = document.getElementById('formRespostas');
                    form.addEventListener('submit', publicar);
                } else {
                    const detalhesMain = document.getElementById("detalhes");
                    detalhesMain.innerHTML = `Não há post!`;
                }
            });
    }

    const response = await fetch('http://localhost:3000/api/get/comment');
    const result = await response.json();

    if (result.success) {
        const commentsList = document.querySelector('.lista-respostas')
        result.data.forEach(comments => {
            const cardPost = document.createElement('div');
            cardPost.className = 'post';

            const userName = document.createElement('h3');
            userName.textContent = comments.nome;

            const userText = document.createElement('div');
            userText.className = 'user-text';

            const postDescription = document.createElement('p');
            postDescription.textContent = posts.conteudo

            userText.appendChild(postDescription);

            cardPost.appendChild(userName);
            cardPost.appendChild(userText);

            card.appendChild(cardPost);

        })
    } else {
        console.log('Erro', result.sql);
    }

});

async function publicar(e){
    e.preventDefault(); 

    let comentario = document.getElementById("inputResposta").value;
    let usuario = localStorage.getItem("dados_usuario");

    let id_usuario = JSON.parse(usuario).id

    let dados = {id_usuario, comentario}
    const response = await fetch('http://localhost:3000/api/store/comment', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if(content.success) {
        alert("Sucesso!")
    } else {
        alert("Post não enviado!")
        console.log(content.sql);
    }
}


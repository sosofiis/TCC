document.getElementById("botaoVoltar").addEventListener("click",
    function () {
        history.back();
});

// Evento 'DOMContentLoaded' para garantir que o código seja executado após o carregamento completo do DOM.
document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/get/post');
    const result = await response.json();

    if (result.success) {
        const postsList = document.querySelector('.user-list')

        // Para cada post recebido no array de 'data', cria um novo cartão de post.
        result.data.forEach(posts => {
            const card = document.createElement('div');
            card.className = 'user-card';
            card.style.cursor = 'pointer';


            // Adiciona um event listener ao card para redirecionar o usuário ao clicar no card, enviando o id do post na URL.
            card.addEventListener('click', function() {
                window.location.href = `postDetalhes.html?id=${posts.id}`
            })

            const cardPost = document.createElement('div');
            cardPost.className = 'post';

            const userName = document.createElement('h3');
            userName.textContent = posts.nome;

            const userText = document.createElement('div');
            userText.className = 'user-text';

            const postTitle = document.createElement('h4')
            postTitle.textContent = posts.title

            const postDescription = document.createElement('p');
            postDescription.textContent = posts.conteudo

            userText.appendChild(postTitle);
            userText.appendChild(postDescription);

            cardPost.appendChild(userName);
            cardPost.appendChild(userText);

            card.appendChild(cardPost);

            postsList.appendChild(card);
        })
    } else {
        console.log('Erro', result.sql);
    }
})

document.getElementById("buttonPost").addEventListener("click",
    function () {
        window.location.href = './criarPost.html';
});
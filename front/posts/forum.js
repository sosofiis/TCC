document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:3000/api/get/post');
    const result = await response.json();

    // console.log(result)

    // <div class="user-card">
    //         <div class="post">
    //             <h3>Usuário 1</h3>
    //             <div class="user-text">
    //                 <h4>titulo</h4>
    //                 <p>texto texto texto texto texto texto texto texto texto texto texto texto texto</p>
    //             </div>

    //             <div class="user-interactions">
    //                 <button class="button-interactions">
    //                     <span class="material-symbols-outlined">
    //                         favorite
    //                     </span>
    //                 </button>

    //                 <button class="button-interactions">
    //                     <span class="material-symbols-outlined">
    //                         forum
    //                     </span>
    //                 </button>
    //             </div>

    //         </div>
    // </div>

    if (result.success) {
        const postsList = document.querySelector('.user-list')
        result.data.forEach(posts => {
            const card = document.createElement('div');
            card.className = 'user-card';
            card.style.cursor = 'pointer';
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
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search)

    const postId = urlParams.get("id")

    if(postId) {
        fetch(`http://localhost:3000/api/get/post/detalhes/${postId}`)
        .then(response => response.json())
        .then(data => {
            if(data.success) {
                const detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML =
                `
                    <div class="user-name">
                        <h3>${data.data.nome}</h3>
                    </div>
                    
                    <div class="post">
                        <h4>${data.data.title}</h4>
                        <p>${data.data.conteudo}</p>
                    </div>
                    
                `

                const detalhesFooter = document.getElementById("detalhesFooter")
                detalhesFooter.innerHTML =
                `
                    <div class="respostas">
                        <form>
                            <input type="text" placeholder="Publicar sua resposta..."></input>
                            <button>Publicar</button>
                        </form>
                        
                    </div>
                    
                `                
            } else {
                const detalhesMain = document.getElementById("detalhes")
                detalhesMain.innerHTML = `Não há post!`
            }
        })
    }
})
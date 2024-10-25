document.getElementById("botaoVoltar").addEventListener("click",
    function () {
        history.back();
});

async function enviar(event) {
    event.preventDefault();

    let usuario = localStorage.getItem("dados_usuario");

    let id_usuario = JSON.parse(usuario).id
    let title = document.getElementById("title").value;
    let conteudo = document.getElementById("conteudo").value;


    let dados = {id_usuario, title, conteudo}
    const response = await fetch('http://localhost:3000/api/store/post', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dados)
    })

    let content = await response.json();

    if(content.success) {
        alert("Sucesso!")
        window.location.reload(true);
    } else {
        alert("Post não enviado!")
        console.log(content.sql);
    }
}

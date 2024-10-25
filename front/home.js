document.getElementById("botaoRed1").addEventListener("click",
    function () {
        localStorage.setItem("registroDireto", 'True');
        window.location.href = './index.html';
    });

document.getElementById("botaoRed2").addEventListener("click",
    function () {
        window.location.href = './calendario.html';
    });

document.getElementById("botaoRed3").addEventListener("click",
    function () {
        window.location.href = './posts/forum.html';
    });


document.addEventListener("DOMContentLoaded", () =>{

    const dadosUsuario = JSON.parse(localStorage.getItem('dados_usuario'))
    // console.log(dadosUsuario.nome)

    let nomeUsuario = document.querySelector('#nome_usuario')

    nomeUsuario.innerHTML = `Olá, ${dadosUsuario.nome}`


})
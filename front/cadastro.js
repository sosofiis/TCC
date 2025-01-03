let botaoCadastro = document.querySelector("#cadastro");

botaoCadastro.addEventListener("click", async function() {
    // Obtém os valores inseridos nos campos de nome, e-mail, senha e confirmação de senha.
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    const confirmaSenha = document.querySelector("#confirmaSenha").value;
    
    let dados = {nome, email, senha};

    if(senha === confirmaSenha){
        const response = await fetch('http://localhost:3000/api/create/user', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dados)
         });

        let content = await response.json();

        if(content.sucess) {
            localStorage.setItem('dados_usuario', JSON.stringify(content.data))
            window.location.href = './home.html';
        } else {
            alert("Usuário não cadastrado.");
        }
    }else{
        alert("As senhas não correspondem!")
    }

})



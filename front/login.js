let botaoLogin = document.querySelector("#login");


botaoCadastro.addEventListener("click", async function() {
    // alert("teste");
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    
    let dados = {email, senha};

    const response = await fetch('http://localhost:3000/api/login/user', {
        method: "POST",
        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(dados)
         });

        let content = await response.json();

        if(content.sucess) {
            alert("Login efetuado com sucesso!")
        } else {
            alert("Login não efetuado.");
        }

})
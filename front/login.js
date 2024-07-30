async function handleSubmit(event) {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    let dados = {email, senha};

    const response = await fetch('http://localhost:3000/api/login', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(dados)
    });

    const result = await response.json();

    if (result.success) {
        alert(result.message)
        window.location.href = './index.html';
    } else {
        alert(result.message)
    }
}


// let botaoLogin = document.querySelector("#login");


// botaoCadastro.addEventListener("click", async function() {
//     // alert("teste");
//     const email = document.querySelector("#email").value;
//     const senha = document.querySelector("#senha").value;
    
//     let dados = {email, senha};

//     const response = await fetch('http://localhost:3000/api/login/user', {
//         method: "POST",
//         headers: {"Content-type": "application/json;charset=UTF-8"},
//         body: JSON.stringify(dados)
//          });

//         let content = await response.json();

//         if(content.sucess) {
//             alert("Login efetuado com sucesso!")
//         } else {
//             alert("Login não efetuado.");
//         }

// })
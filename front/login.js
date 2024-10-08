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
        localStorage.setItem('dados_usuario', JSON.stringify(result.data))
        // para limpar o local storage
        // deleteItem("dados_usuario")
        // window.location.href = './login.html';

        window.location.href = './home.html';
    } else {
        alert(result.message)
    }
}
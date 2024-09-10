async function cadastrar(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const conteudo = document.getElementById('conteudo').value;
    const file = document.getElementById('file').files[0];

    const data = {title, conteudo, file};

    let formData = new FormData();

    formData.append('title', title);
    formData.append('conteudo', conteudo);
    formData.append('file', file);

    const response = await fetch('http://localhost:3000/api/cadastrar/post', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: formData
    })

    const results = await response.json();
    
    if(results.sucess) {
        alert(results.message)
    } else {
        alert(results.message)
    }
}
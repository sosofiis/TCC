document.getElementById("botaoVoltar").addEventListener("click",
    function () {
        history.back();
    }
);

const textoData = document.querySelector(".texto-regst");

let dia, mes, ano

if (localStorage.getItem('registroDireto') == 'True') {
    const dataAtual = new Date();

    dia = dataAtual.getDate()
    mes = dataAtual.getMonth()
    ano = dataAtual.getFullYear()

    localStorage.setItem("registroDireto", "False")
} else {
    dia = localStorage.getItem('dia');
    mes = localStorage.getItem('mes');
    ano = localStorage.getItem('ano');
}


const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

textoData.innerHTML = `${dia} de ${months[mes]} de ${ano}`

window.onload = async function () {

    let dados_usuario = JSON.parse(localStorage.getItem('dados_usuario'))
    let user_id = dados_usuario.id
    let data = formatDate(new Date(ano, mes, dia), 'aa-mm-dd');
    let dados = { data, user_id }

    //Humor
    let response = await fetch('http://localhost:3000/api/get/humor', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    let content = await response.json();

    if (content.sucess) {

        for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            const id = element.humor

            const minhaDiv = document.getElementById(id);

            minhaDiv.classList.remove("bg-unclicked");
            minhaDiv.classList.add("bg-clicked");
        }
    } else {

    }

    //Sintomas
    response = await fetch('http://localhost:3000/api/get/sintomas', {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(dados)
    });

    content = await response.json();
    console.log(response);

    if (content.sucess) {
        for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            const id = element.sintomas
            console.log(element);
            const minhaDiv = document.getElementById(id);

            minhaDiv.classList.remove("bg-unclicked");
            minhaDiv.classList.add("bg-clicked");
        }
    } else {
        console.log('ta chegano aqui');
    }

    // Atividade Fisica
    response = await fetch('http://localhost:3000/api/get/ativ_fisica', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    content = await response.json();

    if (content.sucess) {

        for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            const id = element.ativ

            const minhaDiv = document.getElementById(id);

            minhaDiv.classList.remove("bg-unclicked");
            minhaDiv.classList.add("bg-clicked");
        }
    } else {

    }

    //Tratamento
    response = await fetch('http://localhost:3000/api/get/tratamento', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    content = await response.json();

    if (content.sucess) {

        for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            const id = element.tratamento

            const minhaDiv = document.getElementById(id);

            minhaDiv.classList.remove("bg-unclicked");
            minhaDiv.classList.add("bg-clicked");
        }
    } else {

    }

    //Sono
    response = await fetch('http://localhost:3000/api/get/sono', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    content = await response.json();

    if (content.sucess) {

        for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            const id = element.sono

            const minhaDiv = document.getElementById(id);

            minhaDiv.classList.remove("bg-unclicked");
            minhaDiv.classList.add("bg-clicked");
        }
    } else {

    }
}

async function postHumor(selecionado) {
    let humor = selecionado;

    let usuario = JSON.parse(localStorage.getItem('dados_usuario'))
    let iduser = usuario.id

    const minhaDiv = document.getElementById(humor);

    let data = formatDate(new Date(ano, mes, dia), 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { iduser, data, humor }

    if (minhaDiv.classList.contains("bg-unclicked")) {
        minhaDiv.classList.remove("bg-unclicked");
        minhaDiv.classList.add("bg-clicked");

        const response = await fetch('http://localhost:3000/api/store/humor', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.sucess) {

        } else {
            alert("Humor não cadastrados.");
        }

    } else {
        minhaDiv.classList.remove("bg-clicked");
        minhaDiv.classList.add("bg-unclicked");

        const response = await fetch('http://localhost:3000/api/delete/humor', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.sucess) {

        } else {
            alert("Humor não cadastrados.");
        }
    }
}

async function postSintomas(selecionado) {
    let sintomas = selecionado;

    let usuario = JSON.parse(localStorage.getItem('dados_usuario'))
    let iduser = usuario.id

    const minhaDiv = document.getElementById(sintomas);

    let data = formatDate(new Date(ano, mes, dia), 'aa-mm-dd') //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, sintomas, iduser }

    if (minhaDiv.classList.contains("bg-unclicked")) {
        minhaDiv.classList.remove("bg-unclicked");
        minhaDiv.classList.add("bg-clicked");

        const response = await fetch('http://localhost:3000/api/store/sintomas', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.sucess) {
            // alert("Sintoma cadastrado com sucesso!")
        } else {
            alert("Sintoma não cadastrado.");
        }

    } else {
        minhaDiv.classList.remove("bg-clicked");
        minhaDiv.classList.add("bg-unclicked");

        const response = await fetch('http://localhost:3000/api/delete/sintomas', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.sucess) {
            // alert("Sintoma cadastrado com sucesso!")
        } else {
            alert("Sintoma não cadastrado.");
        }
    }
}

async function postAtiv_fisica(selecionado) {
    let ativ = selecionado;

    let usuario = JSON.parse(localStorage.getItem('dados_usuario'))
    let iduser = usuario.id

    const minhaDiv = document.getElementById(ativ);

    let data = formatDate(new Date(ano, mes, dia), 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, ativ, iduser }

    if (minhaDiv.classList.contains("bg-unclicked")) {
        minhaDiv.classList.remove("bg-unclicked");
        minhaDiv.classList.add("bg-clicked");

        const response = await fetch('http://localhost:3000/api/store/ativ_fisica', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.sucess) {

        } else {
            alert("Atividade física não cadastrada.");
        }

    } else {
        minhaDiv.classList.remove("bg-clicked");
        minhaDiv.classList.add("bg-unclicked");

        const response = await fetch('http://localhost:3000/api/delete/ativ_fisica', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.sucess) {

        } else {
            alert("Atividade física não cadastrada.");
        }
    }
}

async function postTratamento(selecionado) {
    let tratamento = selecionado;

    let usuario = JSON.parse(localStorage.getItem('dados_usuario'))
    let iduser = usuario.id

    const minhaDiv = document.getElementById(tratamento);

    let data = formatDate(new Date(ano, mes, dia), 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, tratamento, iduser }

    if (minhaDiv.classList.contains("bg-unclicked")) {
        minhaDiv.classList.remove("bg-unclicked");
        minhaDiv.classList.add("bg-clicked");

        const response = await fetch('http://localhost:3000/api/store/tratamento', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.sucess) {
            // alert("Tratamento cadastrado com sucesso!")
        } else {
            alert("Tratamento não cadastrado.");
        }

    } else {
        minhaDiv.classList.remove("bg-clicked");
        minhaDiv.classList.add("bg-unclicked");

        const response = await fetch('http://localhost:3000/api/delete/tratamento', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.sucess) {
            // alert("Tratamento cadastrado com sucesso!")
        } else {
            alert("Tratamento não cadastrado.");
        }
    }
}

async function postSono(selecionado) {
    let sono = selecionado;

    let usuario = JSON.parse(localStorage.getItem('dados_usuario'))
    let iduser = usuario.id

    const minhaDiv = document.getElementById(sono);

    let data = formatDate(new Date(ano, mes, dia), 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, sono, iduser }

    if (minhaDiv.classList.contains("bg-unclicked")) {
        minhaDiv.classList.remove("bg-unclicked");
        minhaDiv.classList.add("bg-clicked");

        const response = await fetch('http://localhost:3000/api/store/sono', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.sucess) {
            // alert("Noite de sono cadastrada com sucesso!")
        } else {
            alert("Noite de sono não cadastrada.");
        }
    } else {
        minhaDiv.classList.remove("bg-clicked");
        minhaDiv.classList.add("bg-unclicked");

        const response = await fetch('http://localhost:3000/api/delete/sono', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(dados)
        });

        let content = await response.json();

        if (content.sucess) {
            // alert("Noite de sono cadastrada com sucesso!")
        } else {
            alert("Noite de sono não cadastrada.");
        }
    }
}

function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        aa: date.getFullYear().toString().slice(-2),
        aaaa: date.getFullYear()
    }

    return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
}


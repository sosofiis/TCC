document.getElementById("botaoVoltar").addEventListener("click",
    function () {
        history.back();
    }
);

const textoData = document.querySelector(".texto-regst");

let dia = localStorage.getItem('dia');
let mes = localStorage.getItem('mes');
let ano = localStorage.getItem('ano');

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

textoData.innerHTML = `${dia} de ${months[mes]} de ${ano}`

window.onload = async function () {
    let data = formatDate(new Date(ano, mes, dia), 'aa-mm-dd');
    let dados = { data }

    let response = await fetch('http://localhost:3000/api/get/humor', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    let content = await response.json();

    if (content.sucess) {
        console.log(content)
        for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            const id = element.humor

            const minhaDiv = document.getElementById(id);

            minhaDiv.classList.remove("bg-unclicked");
            minhaDiv.classList.add("bg-clicked");
        }
    } else {
        console.log(content)
    }

    response = await fetch('http://localhost:3000/api/get/sintomas', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    content = await response.json();

    if (content.sucess) {
        console.log(content)
        for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            const id = element.humor

            const minhaDiv = document.getElementById(id);

            minhaDiv.classList.remove("bg-unclicked");
            minhaDiv.classList.add("bg-clicked");
        }
    } else {
        console.log(content)
    }

    response = await fetch('http://localhost:3000/api/get/ativ_fisica', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    content = await response.json();

    if (content.sucess) {
        console.log(content)
        for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            const id = element.humor

            const minhaDiv = document.getElementById(id);

            minhaDiv.classList.remove("bg-unclicked");
            minhaDiv.classList.add("bg-clicked");
        }
    } else {
        console.log(content)
    }

    response = await fetch('http://localhost:3000/api/get/tratamento', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    content = await response.json();

    if (content.sucess) {
        console.log(content)
        for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            const id = element.humor

            const minhaDiv = document.getElementById(id);

            minhaDiv.classList.remove("bg-unclicked");
            minhaDiv.classList.add("bg-clicked");
        }
    } else {
        console.log(content)
    }

    response = await fetch('http://localhost:3000/api/get/sono', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    content = await response.json();

    if (content.sucess) {
        console.log(content)
        for (let index = 0; index < content.data.length; index++) {
            const element = content.data[index];
            const id = element.humor

            const minhaDiv = document.getElementById(id);

            minhaDiv.classList.remove("bg-unclicked");
            minhaDiv.classList.add("bg-clicked");
        }
    } else {
        console.log(content)
    }
}

async function postHumor(selecionado) {
    let humor = selecionado;

    const minhaDiv = document.getElementById(humor);

    let data = formatDate(new Date(ano, mes, dia), 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, humor }

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
        console.log(content)
        if (content.sucess) {

        } else {
            alert("Humor não cadastrados.");
        }
    }
}

async function postSintomas(selecionado) {
    let sintomas = selecionado;
    const minhaDiv = document.getElementById(sintomas);

    let data = formatDate(new Date, 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, sintomas }

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
    const minhaDiv = document.getElementById(ativ);

    let data = formatDate(new Date, 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, ativ }

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
        console.log(content)
        if (content.sucess) {

        } else {
            alert("Atividade física não cadastrada.");
        }
    }
}

async function postTratamento(selecionado) {
    let tratamento = selecionado;
    const minhaDiv = document.getElementById(tratamento);

    let data = formatDate(new Date, 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, tratamento }

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
    const minhaDiv = document.getElementById(sono);

    let data = formatDate(new Date, 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, sono }

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


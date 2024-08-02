document.getElementById("botaoVoltar").addEventListener("click",
    function () {
        history.back();
    });

const textoData = document.querySelector(".texto-regst");

let dia = localStorage.getItem('dia');
let mes = localStorage.getItem('mes');
let ano = localStorage.getItem('ano');

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// console.log(dia)
// console.log(months[mes])
// console.log(ano)

textoData.innerHTML = `${dia} de ${months[mes]} de ${ano}`

//um evento de onload na pagina 
//linha 24, 25 só que só com data || linha 27, 28, 29, 30, 31... 
window.onload = async function() {
    let data = formatDate(new Date(ano, mes, dia), 'aa-mm-dd');
    let dados = { data }

    const response = await fetch('http://localhost:3000/api/get/humor', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    let content = await response.json();

    if (content.sucess) {
        console.log(content)
    } else {
        console.log(content)
    }
}

async function postHumor(selecionado) {
    let humor = selecionado;
    let data = formatDate(new Date(ano, mes, dia), 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, humor }

    const response = await fetch('http://localhost:3000/api/store/humor', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    let content = await response.json();

    if (content.sucess) {
        alert("Humor cadastrado com sucesso!")
    } else {
        alert("Humor não cadastrados.");
    }
}

async function postSintomas(selecionado) {
    let sintomas = selecionado;
    let data = formatDate(new Date, 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, sintomas }

    const response = await fetch('http://localhost:3000/api/store/sintomas', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    let content = await response.json();

    if (content.sucess) {
        alert("Sintoma cadastrado com sucesso!")
    } else {
        alert("Sintoma não cadastrado.");
    }
}

async function postAtiv_fisica(selecionado) {
    let ativ = selecionado;
    let data = formatDate(new Date, 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, ativ }

    const response = await fetch('http://localhost:3000/api/store/ativ_fisica', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    let content = await response.json();

    if (content.sucess) {
        alert("Atividade física cadastrada com sucesso!")
    } else {
        alert("Atividade física não cadastrada.");
    }
}

async function postTratamento(selecionado) {
    let tratamento = selecionado;
    let data = formatDate(new Date, 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, tratamento }

    const response = await fetch('http://localhost:3000/api/store/tratamento', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    let content = await response.json();

    if (content.sucess) {
        alert("Tratamento cadastrado com sucesso!")
    } else {
        alert("Tratamento não cadastrado.");
    }
}

async function postSono(selecionado) {
    let sono = selecionado;
    let data = formatDate(new Date, 'aa-mm-dd'); //pesquisar como pegar o dia de hoje em javascript
    let dados = { data, sono }

    const response = await fetch('http://localhost:3000/api/store/sono', {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(dados)
    });

    let content = await response.json();

    if (content.sucess) {
        alert("Noite de sono cadastrada com sucesso!")
    } else {
        alert("Noite de sono não cadastrada.");
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


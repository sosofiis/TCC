document.getElementById("botaoVoltar").addEventListener("click",
    function () {
        history.back();
    });

//Onde fica escrito o mês, pega essa info
const currentDate = document.querySelector(".current-date"),
// Onde fica os dias
daysTag = document.querySelector(".days"),
//Botões de ir e voltar
prevNextIcon = document.querySelectorAll(".icons span");

// pega dia, mês e ano atual da biblioteca date do js
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// lista dos meses
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// renderizar
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    
    for (let i = 1; i <= lastDateofMonth; i++) {
        //verifica se i é o dia atual, se sim: ele cria uma class especial de que é hoje, se não: fds
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li onClick="abrirDia(${i}, ${currMonth}, ${currYear})" class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon =>{
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }

        renderCalendar();
    });
});


function abrirDia(dia, mes, ano) {    
    //salvar no localStorage
    localStorage.setItem('dia', dia);
    localStorage.setItem('mes', mes);
    localStorage.setItem('ano', ano);
    
    //redirecionar para a página dos sintomas registrados
    window.location.href = './index.html'
    
    console.log(dia, mes, ano)
    alert("funciono")
}